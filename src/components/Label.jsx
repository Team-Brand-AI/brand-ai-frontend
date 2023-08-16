import "./Label.scss";

export const Label = ({ children, styles }) => {
    return (
        <p className="form-label" style={styles}>
            {children}
        </p>
    );
};

export const InnerLabel = ({ className, children, type }) => {
    return <p className={`form-label__inner ${className != null ? className : ""}`} style={{ color : (type == "primary") ? "#00a869" : "black" }}>{children}</p>
};
