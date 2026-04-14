

const Hero = () => {
    return (
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
    );
}
export default Hero;