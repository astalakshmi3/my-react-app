const Categories = () => {

    return (
          <div className="max-w-7xl mx-auto px-18 py-1">
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
          </div>

    );
}
export default Categories;