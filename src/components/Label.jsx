import "./Label.scss";

export const Label = ({ children, styles }) => {
    return (
        <p className="form-label" style={styles}>
            {children}
        </p>
    );
};

export const InnerLabel = ({ children }) => {
    return <p className="form-label__inner">{children}</p>;
};
