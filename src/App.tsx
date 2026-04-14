function App() {
  return (
      <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to My Tailwind App
        </h1>

        {/* Paragraph */}
        <p className="text-gray-600 mb-6 text-center max-w-md">
          This is a simple React page styled using Tailwind CSS.
          No custom CSS is needed!
        </p>

        {/* Button */}
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mb-8">
          Click Me
        </button>

        {/* Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-sm text-center">
          <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="card"
              className="rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            React + Tailwind
          </h2>
          <p className="text-gray-500 mb-4">
            Build modern UI quickly using Tailwind CSS in React.
          </p>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Learn More
          </button>
        </div>

      </div>
  )
}

export default App