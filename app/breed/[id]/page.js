import Image from "next/image";
import getBreedImages from "@/app/lib/getBreedImages";


export default async function BreedPage({ params: { id } }) {
  const breedImages = await getBreedImages(id);

  const capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold p-6 text-center">
        {capFirstLetter(id)}
      </h1>
      <div className="flex flex-wrap justify-center gap-4 ">
        {breedImages.map((image) => (
          <div key={image.id} className="w-48">
            <Image
              src={image}
              alt={`Dog ${image.id}`}
              className="w-full h-48 object-cover rounded"
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
