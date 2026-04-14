import Card  from "./Card.tsx";

const CardList: React.FC = () => {
    const cards = [
        { title: "Card 1", description: "This is the first card." },
        { title: "Card 2", description: "This is the second card." },
        { title: "Card 3", description: "This is the third card." },
    ];

    return (
        <div className="flex flex-wrap gap-6 justify-center">
            {cards.map((card, index) => (
                <Card key={index} title={card.title} description={card.description} />
            ))}
        </div>
    );
};

export default CardList;