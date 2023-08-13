import "./Card.scss";

export const Card = ({ imgSrc, title, subtitle, date, onClick }) => {
    return (
        <div className="card-wrapper" onClick={onClick}>
            <div className="card-container">
                <div className="card__content">
                    <div className="card__text">
                        <p>{date}</p>
                        <h3>{subtitle}</h3>
                        <h1>{title}</h1>
                    </div>
                </div>
                <div className="card__filter"></div>
                <img src={process.env.PUBLIC_URL + imgSrc} className="card__img"></img>
            </div>
        </div>
    );
};
