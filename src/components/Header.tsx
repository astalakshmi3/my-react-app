const Header = () => {
    return (
        <div className="bg-pink-100 text-gray-800 min-h-screen">
            {/* Header */}
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
        </div>
    )
}

export default Header;