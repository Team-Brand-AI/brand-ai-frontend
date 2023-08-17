import { useEffect, useContext, useLayoutEffect } from "react";
import "./Grid.scss";

export const Grid = {
    Item: ({ icon, text, size }) => {
        return (
            <div className="grid-item" style={{ width: size, height: size }}>
                <div className={`grid-item__container`}>
                    {icon && <img src={icon} alt="icon" className="grid-item__icon" />}
                    <div className="grid-item__text">{text}</div>
                </div>
            </div>
        );
    },

    Container: ({ width, height, context, children }) => {
        const { selectedItem, setSelectedItem } = useContext(context);

        useLayoutEffect(() => {
            const gridItemElements = document.querySelectorAll(".grid-item");

            for (let index = 0; index < gridItemElements.length; index++) {
                console.log(`Event Listener Added : index${index}`);
                gridItemElements[index].addEventListener("click", () => {
                    console.log(`Grid ${index} clicked!`);
                    setSelectedItem((selectedItem) => index);
                });
            }
        }, []);

        useEffect(() => {
            // selectedItem 이 초기값(null) 이 아닌 경우에만 실행
            if (selectedItem != null) {
                const gridItemElements = document.querySelectorAll(".grid-item");

                for (const element of gridItemElements) {
                    if (element.classList.contains("grid-item__active")) {
                        element.classList.remove("grid-item__active");
                    }
                }
                gridItemElements[selectedItem].classList.add("grid-item__active");
                console.log(selectedItem);
            }
        }, [selectedItem]);

        return (
            <div className="grid-container" style={{ width: width, height: height }}>
                {children}
            </div>
        );
    },
};
