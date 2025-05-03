import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-400 text-black dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8 text-center">CanadaGuessr</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Toronto Guessr */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">Toronto Guessr</h2>
            <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
              <Image
                src="/torontothumbnail.webp"
                alt="Toronto Guessr Thumbnail"
                fill
                className="object-cover"
              />
            </div>
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
            <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
              <Image
                src="/calgarythumbnail.webp"
                alt="Calgary Guessr Thumbnail"
                fill
                className="object-cover"
              />
            </div>
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

          {/* Vancouver Guessr (Coming Soon) */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">Vancouver Guessr</h2>
            <div className="relative w-full h-48 mb-4 rounded overflow-hidden bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300">
              <span className="text-lg">Coming Soon</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Explore Vancouver’s iconic scenery and neighborhoods — coming
              sometime in the future!
            </p>
            <button
              disabled
              className="inline-block bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
