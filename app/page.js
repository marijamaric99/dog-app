import Link from "next/link";
import getDogs from './lib/getDogs';

export default async function HomePage() {
  const breeds = await getDogs();
  
  const capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <main className="p-4">
      <h1 className="text-4xl font-bold mb-4 p-2">Dog Breeds</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {breeds.map(breed => {
            return (
              <div
                key={breed.id}
                className="bg-gray-200 p-4 rounded-md flex flex-col justify-center items-center transition-transform transform hover:scale-105 hover:border hover:border-blue-500 hover:text-blue-500"
              >
                <Link legacyBehavior href={`/breed/${breed}`} passHref>
                  <a className="text-lg font-semibold">
                    {capFirstLetter(breed)}
                  </a>
                </Link>
              </div>
            );
          })}
      </div>
    </main>
  );
}
