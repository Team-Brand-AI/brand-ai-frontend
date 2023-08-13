import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Menu.scss";

export const Menu = {
    Container: ({ title, children }) => {
        return (
            <div className="menu-container">
                <div className="menu-container__title">{title}</div>
                <div className="menu-container__items">{children}</div>
            </div>
        );
    },
    Item: ({ type, icon, text, children }) => {
        return (
            <div className="menu-item">
                <div className="menu-item__icon">
                    {type === "fontawesome" && <FontAwesomeIcon icon={icon} />}
                    {type === "vector" && <img src={icon} />}
                </div>
                <div className="menu-item__text">{text}</div>
                <div style={{ flexGrow: 1 }} />

                <div className="menu-item__child">{children}</div>
            </div>
        );
    },
};
