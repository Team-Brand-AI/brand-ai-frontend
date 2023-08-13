import React, { useContext, useEffect, useLayoutEffect } from "react";

import "./Selector.scss";

export const Selector = {
    Container: ({ context, children }) => {
        const { selectedItem, setSelectedItem } = useContext(context);

        useLayoutEffect(() => {
            const selectorItemElements = document.querySelectorAll(".selector-item");

            const size = children.length;
            for (let index = 0; index < selectorItemElements.length; index++) {
                selectorItemElements[index].style.width = `${100 / size}%`;
                selectorItemElements[index].addEventListener("click", () => {
                    setSelectedItem(index);
                });
            }
        }, []);

        useEffect(() => {
            const selectorItemElements = document.querySelectorAll(".selector-item");
            // 모든 Selector.Item 의 selector-item__active 스타일 제거
            for (const element of selectorItemElements) {
                if (element.classList.contains("selector-item__active")) {
                    element.classList.remove("selector-item__active");
                }
            }
            // 선택된 Selector.Item 의 selector-item__active 스타일 추가
            selectorItemElements[selectedItem].classList.add("selector-item__active");
        }, [selectedItem]);

        return <div className="selector-container">{children}</div>;
    },
    Item: ({ children }) => {
        return <div className="selector-item">{children}</div>;
    },
};
