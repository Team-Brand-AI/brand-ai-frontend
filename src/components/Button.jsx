import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Button.scss";

export const Button = ({ styles, width, height, type, ref, className, onClick, children }) => {
    return (
        <button
            style={{
                width: width,
                height: height,
                ...styles,
            }}
            onClick={onClick}
            ref={ref}
            className={`btn-container btn-type__${type} ${!className ? "" : className}`}
        >
            {children}
        </button>
    );
};

export const ButtonPlaceHolder = ({ icon, text, onClick }) => {
    return (
        <div className="btn-placeholder-container" onClick={onClick}>
            <div className="btn-placeholder-container__icon">
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className="btn-placeholder-container__text">{text}</div>
        </div>
    );
};
