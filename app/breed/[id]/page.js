"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

async function getBreedImages(breed) {
  const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
  const data = await response.json();
  return data.message;
}

export default function BreedPage() {
  const [breedImages, setBreedImages] = useState([]);

  const breed = useParams();
  const breedName = breed.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const images = await getBreedImages(breedName);
        setBreedImages(images);
      } catch (error) {
        console.error("Error fetching breed images:", error);
      }
    };

    fetchData();
  }, [breedName]);

  

  const capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold p-6 text-center">
        {capFirstLetter(breedName)}
      </h1>
      <div className="flex flex-wrap justify-center gap-4 ">
        {Array.isArray(breedImages) && breedImages.length > 0 ? (
          breedImages.map((image, index) => (
            <div key={index} className="w-48">
              <Image
                src={image}
                alt={`Dog ${index}`}
                className="w-full h-48 object-cover rounded"
                width={500}
                height={500}
              />
            </div>
          ))
        ) : (
          <p>No images available for this breed.</p>
        )}
      </div>
    </div>
  );
}
