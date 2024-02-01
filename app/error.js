"use client";

export default function Error() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 text-center">
        An error occurred
        </h1>
      <p className="text-lg text-gray-600 text-center">
        Failed to fetch API data. Please try again later.
      </p>
    </main>
  );
}
