function Card({ cardData }) {
    const { name, des, image, icon } = cardData;
    console.log(cardData);
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                {icon}
                <figure>
                    <img className="h-72" src={image} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}!</h2>
                    <p>{des}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
