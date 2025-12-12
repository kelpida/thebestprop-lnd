const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchChallenges = async () => {
  const response = await fetch(`${API_URL}/the-best-props/challenges`, {
    headers: {
      "api-key": API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch challenges");
  }

  return response.json();
};
