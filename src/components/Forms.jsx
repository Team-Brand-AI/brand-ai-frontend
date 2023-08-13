import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "./Forms.scss";

export const Input = {
    Text: ({ placeholder }) => {
        return <input type="text" placeholder={placeholder} className="input__text" />;
    },
    TextArea: ({ placeholder }) => {
        return <textarea className="input__textarea" placeholder={placeholder}></textarea>;
    },
};

export const DropDown = {
    Container: ({ children }) => {
        const dropdownItems = useRef();
        const dropdownContainer = useRef();

        const [isOpened, setIsOpened] = useState(false);
        const [selected, setSelected] = useState({ index: null, text: null });

        const onClickHandler = () => {
            setIsOpened((isOpened) => !isOpened);
        };

        useLayoutEffect(() => {
            dropdownContainer.current.addEventListener("click", onClickHandler);
            return () => dropdownContainer.current.removeEventListener("click", onClickHandler);
        }, []);

        useEffect(() => {
            if (isOpened === true) {
                dropdownContainer.current.style.borderBottomLeftRadius = "0px";
                dropdownContainer.current.style.borderBottomRightRadius = "0px";
                dropdownItems.current.style.display = "block";
            }
            if (isOpened === false) {
                dropdownContainer.current.style.borderBottomLeftRadius = "20px";
                dropdownContainer.current.style.borderBottomRightRadius = "20px";
                dropdownItems.current.style.display = "none";
            }
        }, [isOpened]);

        useEffect(() => {
            const elements = document.querySelectorAll(".dropdown-item");

            for (let index = 0; index < elements.length; index++) {
                elements[index].addEventListener("click", () => {
                    setSelected({ index: index, text: elements[index].innerHTML });
                    setIsOpened(false);
                });
            }
        }, []);

        return (
            <div className="dropdown-wrapper">
                <div className="dropdown-container" ref={dropdownContainer}>
                    <div className="dropdown-text">{selected.text}</div>
                    <div className="dropdown-ui">
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                </div>

                <div className="dropdown-items" ref={dropdownItems}>
                    {children}
                </div>
            </div>
        );
    },
    Item: ({ children }) => {
        return <div className="dropdown-item">{children}</div>;
    },
};
