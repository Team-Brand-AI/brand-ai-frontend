import { useNavigate } from "react-router-dom";
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

export const ButtonGroup = ({ styles, prevPath, nextPath, onPrevClick, onNextClick }) => {
    const navigate = useNavigate();
    return (
        <div className="btn-group-container" style={styles}>
            <Button
                type="secondary"
                width="50%"
                onClick={() => {
                    onPrevClick && onPrevClick();
                    navigate(prevPath);
                }}
            >
                이전
            </Button>
            <Button
                type="primary"
                width="50%"
                onClick={() => {
                    onNextClick && onNextClick();
                    navigate(nextPath);
                }}
            >
                다음
            </Button>
        </div>
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
