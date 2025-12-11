import logoColor from "@/assets/logo-color.png";

const Header = () => {
  return (
    <header className="py-4 px-4">
      <div className="container">
        <img 
          src={logoColor} 
          alt="TheBestProp Logo" 
          className="h-10 w-auto"
        />
      </div>
    </header>
  );
};

export default Header;
