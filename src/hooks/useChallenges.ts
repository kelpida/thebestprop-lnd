import { useQuery } from "@tanstack/react-query";
import { fetchChallenges } from "../services/api";

export interface ChallengeOption {
  id: number;
  title: string;
  initialBalance: number;
  price: number;
  profitTarget: number | null;
  dailyPercentage: number;
  totalPercentage: number;
  category: {
    name: string;
  };
}

export interface ChallengeGroup {
  name: string; // e.g., "Venus"
  category: string; // e.g., "1 Step Challenge"
  options: ChallengeOption[]; // Different account sizes for this challenge
}

interface ApiChallengeChainItem {
  id: number;
  title: string;
  initialBalance: number;
  price: number;
  profitTarget: number | null;
  dailyPercentage: number;
  totalPercentage: number;
  category: {
    name: string;
  };
}

interface ApiChallengeItem {
  chain?: ApiChallengeChainItem[];
}

export const useChallenges = () => {
  return useQuery({
    queryKey: ["challenges"],
    queryFn: async () => {
      const data = await fetchChallenges();
      
      const oneStepChallenges: ChallengeGroup[] = [];
      const twoStepChallenges: ChallengeGroup[] = [];

      // Map to track unique challenges by name to prevent duplicates if API returns fragmented data
      const oneStepMap = new Map<string, ChallengeGroup>();
      const twoStepMap = new Map<string, ChallengeGroup>();

      const processChallengeItem = (item: ApiChallengeItem) => {
        const chainItems = item?.chain || [];
        if (chainItems.length === 0) return;

        const firstItem = chainItems[0];
        const categoryName = firstItem?.category?.name;
        const name = firstItem?.title;

        const options: ChallengeOption[] = chainItems.map((c: ApiChallengeChainItem) => ({
          id: c.id,
          title: c.title,
          initialBalance: c.initialBalance,
          price: c.price,
          profitTarget: c.profitTarget,
          dailyPercentage: c.dailyPercentage,
          totalPercentage: c.totalPercentage,
          category: c.category,
        }));

        const targetMap = categoryName === "1 Step Challenge" ? oneStepMap : 
                          categoryName === "2 Step Challenge" ? twoStepMap : null;
        
        if (targetMap) {
          if (targetMap.has(name)) {
            // If already exists (e.g. fragmented data), append options
            const existing = targetMap.get(name)!;
            existing.options.push(...options);
          } else {
            targetMap.set(name, {
              name,
              category: categoryName,
              options: [...options]
            });
          }
        }
      };

      if (Array.isArray(data)) {
        data.forEach(processChallengeItem);
      }

      // Convert maps to arrays and sort options
      const finalizeGroup = (map: Map<string, ChallengeGroup>) => {
        return Array.from(map.values()).map(group => {
           // Deduplicate options by initialBalance
           const uniqueOptions = Array.from(
             new Map(group.options.map(opt => [opt.initialBalance, opt])).values()
           );

           return {
            ...group,
            options: uniqueOptions.sort((a, b) => a.initialBalance - b.initialBalance)
           };
        });
      };

      // Sort groups by the smallest option's balance
      const sortGroups = (groups: ChallengeGroup[]) => {
        return groups.sort((a, b) => {
          const aMin = a.options[0]?.initialBalance || 0;
          const bMin = b.options[0]?.initialBalance || 0;
          return aMin - bMin;
        });
      };

      return {
        oneStepChallenges: sortGroups(finalizeGroup(oneStepMap)),
        twoStepChallenges: sortGroups(finalizeGroup(twoStepMap))
      };
    },
  });
};
