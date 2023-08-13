import "./Heading.scss";

export const Heading = ({ title, subtitle }) => {
    return (
        <div className="heading">
            <h1 className="heading__title">{title}</h1>
            <h3 className="heading__subtitle">
                {subtitle &&
                    subtitle.map((element, index) => {
                        return <span key={index}>{element}</span>;
                    })}
            </h3>
        </div>
    );
};
