type Card = {
    title: string;
    description: string;
}
const Card: React.FC<Card> = ({ title, description }) => {
    return (
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-sm text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-500 mb-4">{description}</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Learn More
            </button>
        </div>
    );
};

export default Card;