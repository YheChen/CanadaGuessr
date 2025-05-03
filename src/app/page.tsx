import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-400 text-black dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8 text-center">CanadaGuessr</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Toronto Guessr */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">Toronto Guessr</h2>
            <Image
              src="/torontothumbnail.webp"
              alt="Toronto Guessr Thumbnail"
              width={600}
              height={300}
              className="rounded mb-4"
            />
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Test your knowledge of downtown Toronto’s neighborhoods.
            </p>
            <a
              href="https://torontoguessr.vercel.app/"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Play Toronto
            </a>
          </div>

          {/* Calgary Guessr */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">Calgary Guessr</h2>
            <Image
              src="/calgarythumbnail.webp"
              alt="Calgary Guessr Thumbnail"
              width={600}
              height={300}
              className="rounded mb-4"
            />
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Challenge yourself to recognize Calgary’s streets and scenery.
            </p>
            <a
              href="https://calgaryguessr.vercel.app/"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Play Calgary
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
