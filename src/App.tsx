import Categories from "./components/Categories.tsx";


{/* function App() {
  return (
      <div className="bg-pink-100 text-gray-800 min-h-screen">
        {/* Header
        <header className="sticky top-0 z-50 bg-blue-100 border-b shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-600">BookStore</h1>

            <nav className="hidden md:flex gap-6 text-sm font-medium">
              <a href="#">Home</a>
              <a href="#">Shop</a>
              <a href="#">Bestsellers</a>
              <a href="#">Categories</a>
              <a href="#">Contact</a>
            </nav>

            <div className="flex gap-3">
              <span>🔍</span>
              <span>👤</span>
              <span>🛒</span>
            </div>
          </div>
        </header>

        <main>
          {/* Hero Section
          <section className="max-w-7xl mx-auto px-4 py-1 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Discover Your Next Great Read
              </h2>
              <p className="text-slate-600 mb-6">
                Explore bestsellers, new arrivals, and timeless stories.
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
                  Shop Now
                </button>
                <button className="border px-6 py-3 rounded-xl">Explore</button>
              </div>
            </div>

            <div className="bg-slate-200 rounded-3xl h-80 flex items-center justify-center">
              <img
                  src="/public/img.png"
                  alt="Books"
                  className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </section>

          {/* Popular Books
          <section className="max-w-7xl mx-auto px-4 py-1">
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
          </section>

          {/* Categories
          <section className="max-w-7xl mx-auto px-18 py-1">
            <h3 className="text-3xl font-bold mb-8">Categories Books</h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl shadow p-4">
                <div className="bg-slate-200 h-88 rounded-xl mb-4">
                  <img
                      src="/public/new.png"
                      alt="Book Cover"
                      className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <h4 className="font-bold">New Arrival</h4>
              </div>

              <div className="bg-white rounded-2xl shadow p-4">
                <div className="bg-slate-200 h-88 rounded-xl mb-4">
                  <img
                      src="/public/frictions.png"
                      alt="Book Cover"
                      className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <h4 className="font-bold">Friction</h4>
              </div>

              <div className="bg-white rounded-2xl shadow p-4">
                <div className="bg-slate-200 h-88 rounded-xl mb-4">
                  <img
                      src="/public/non.png"
                      alt="Book Cover"
                      className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <h4 className="font-bold">Non Friction</h4>
              </div>
            </div>
          </section>

          {/* Reviews
          <section className="max-w-7xl mx-auto px-4 py-1">
            <div className="bg-blue-200 rounded-3xl shadow p-8 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold mb-4">What Our Readers Say</h3>

                <p className="text-slate-600 mb-4">
                  “Amazing selection and very easy shopping experience.”
                </p>
                <p className="font-semibold">Jessica M.</p>
                <p className="text-amber-400">★★★★★</p>

                <p className="text-slate-600 mb-4">
                  “The best place to find my favorite books!”
                </p>
                <p className="font-semibold">David R.</p>
                <p className="text-amber-400">★★★★★</p>

                <p className="text-slate-600 mb-4">
                  “Fast delivery and great customer service!”
                </p>
                <p className="font-semibold">Jessica M.</p>
                <p className="text-amber-400">★★★★★</p>
              </div>

              <div className="bg-blue-900 rounded-3xl h-64 flex items-center justify-center">
                <img
                    src="/public/img_1.png"
                    alt="Happy Reader"
                    className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </section>
        </main>

        {/* Footer
        <footer className="bg-slate-900 text-white mt-16">
          <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <p className="text-slate-400">About Us</p>
              <p className="text-slate-400">FAQ</p>
              <p className="text-slate-400">Contact</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Categories</h4>
              <p className="text-slate-400">Fiction</p>
              <p className="text-slate-400">Non-Fiction</p>
              <p className="text-slate-400">Children&apos;s Books</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <p className="text-slate-400">Facebook</p>
              <p className="text-slate-400">Instagram</p>
              <p className="text-slate-400">Twitter</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded text-black mb-3"
              />
              <button className="bg-blue-600 px-4 py-2 rounded">
                Subscribe
              </button>
            </div>
          </div>
        </footer>
      </div>
  )
}

export default App */}






import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import PopularBook from "./components/PopularBook.tsx";

import Footer from "./components/Footer.tsx";
import Reviews from "./components/Reviews.tsx";

const App= () => {
  return (
      <>
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <PopularBook />
      <Categories />
      <Reviews />
      <Footer />
    </div>
        </>
  );
}


export default App;