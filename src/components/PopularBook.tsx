const PopularBook = () => {
  return (
      <div className="max-w-7xl mx-auto px-4 py-1">
          <h3 className="text-3xl font-bold mb-8">Popular Books</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl shadow p-4">
                  <div className="bg-slate-200 h-88 rounded-xl mb-4">
                      <img
                          src="/public/secret.png"
                          alt="Book Cover"
                          className="w-full h-full object-cover rounded-xl"
                      />
                  </div>
                  <h4 className="font-semibold">Secret Garden</h4>
                  <p className="text-slate-500 mb-4">119.99 SEK</p>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-xl">
                      Add to Cart
                  </button>
              </div>

              <div className="bg-white rounded-2xl shadow p-4">
                  <div className="bg-slate-200 h-84 rounded-xl mb-4">
                      <img
                          src="/public/mystery.png"
                          alt="Mystery Book"
                          className="w-full h-full object-cover rounded-2xl"
                      />
                  </div>
                  <h4 className="font-semibold">Mystery Night</h4>
                  <p className="text-slate-500 mb-4">124.99 SEK</p>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-xl">
                      Add to Cart
                  </button>
              </div>

              <div className="bg-white rounded-2xl shadow p-4">
                  <div className="bg-slate-200 h-88 rounded-xl mb-4">
                      <img
                          src="/public/ocean.png"
                          alt="Ocean Book"
                          className="w-full h-full object-cover rounded-xl"
                      />
                  </div>
                  <h4 className="font-semibold">About Ocean</h4>
                  <p className="text-slate-500 mb-4">114.99 SEK</p>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-xl">
                      Add to Cart
                  </button>
              </div>

              <div className="bg-white rounded-2xl shadow p-4">
                  <div className="bg-slate-200 h-88 rounded-xl mb-4">
                      <img
                          src="/public/forest.png"
                          alt="Forest Book"
                          className="w-full h-full object-cover rounded-xl"
                      />
                  </div>
                  <h4 className="font-semibold">The Forest</h4>
                  <p className="text-slate-500 mb-4">122.99 SEK</p>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-xl">
                      Add to Cart
                  </button>
              </div>
          </div>
        </div>
  );
}

export default PopularBook;