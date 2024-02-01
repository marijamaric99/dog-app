"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

async function getDogsData(){
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  return data.message;
};

export default function HomePage() {
  const [allDogs, setAllDogs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDogsData();
        console.log("All dog breeds:", Object.keys(data));
        setAllDogs(data);
      } catch (error) {
        console.error("Error fetching dog data:", error);
      }
    };

    fetchData();
  }, []);
  

  const capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <main className="p-4">
      <h1 className="text-4xl font-bold mb-4 p-2">Dog Breeds</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {allDogs &&
          Object.keys(allDogs).map((breed) => {
            return (
              <div
                key={breed}
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
