const Footer = () => {
  return (
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
  );
}
export default Footer;