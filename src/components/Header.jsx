import Button from "./Button";

export default function Header({ isDark, setIsDark }) {
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <header className="flex flex-col p-4 md:flex-row md:justify-between relative">
      <Button isDark={isDark} toggleTheme={toggleTheme} />
      
      <h2 className="text-3xl font-bold">The creative crew</h2>
      <div className="flex flex-col px-10 pt-4 md:px-0 md:w-80 md:pt-0">
        <h3 className="text-lg font-bold md:text-left">Who we are</h3>
        <p className={`text-sm md:text-left ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          We are a team of creatively diverse. driven. innovative individuals
          working in various locations from the world.
        </p>
      </div>
    </header>
  );
}
