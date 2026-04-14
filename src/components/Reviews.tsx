const Reviews = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-1">
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
        </div>
    );
}
export default Reviews;