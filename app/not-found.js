export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Page not found!
      </h1>
      <p className="text-lg text-gray-600 text-center">
        Sorry, we could not find the requested page or breed data. Please check
        your URL again.
      </p>
    </main>
  );
}
