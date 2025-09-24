import Header from "./components/Header";
import Cards from "./components/Cards";
import teamData from "./data/team.json";

export default function App() {
  return (
    <>
      <Header />
      <main className="p-4 sm:p-6 md:px-8 lg:px-16 xl:px-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-4 justify-items-center md:justify-items-start max-w-sm sm:max-w-md md:max-w-4xl lg:max-w-6xl xl:max-w-5xl mx-auto">
          {teamData.map((member, index) => (
            <div key={index} className="odd:mt-0 even:mt-8 md:odd:mt-0 md:even:mt-0 md:[&:nth-child(3n+2)]:mt-8">
              <Cards
                name={member.name}
                position={member.position}
                image={member.image}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}