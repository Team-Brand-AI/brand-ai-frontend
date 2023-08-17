import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import "./HashTag.scss";

export const HashTag = {
    Container: ({ children }) => {
        return <div className="hash-tag-container">{children}</div>;
    },
    Item: ({ children, onRemoveBtnClick }) => {
        return (
            <div className="hash-tag-item">
                <div className="hash-tag-item__text">{children}</div>
            </div>
        );
    },
};
