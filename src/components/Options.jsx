import { useLayoutEffect, useEffect, useContext } from "react";
import "./Options.scss";

export const Options = {
    Container: ({ context, children }) => {
        const { selectedItem, setSelectedItem } = useContext(context);

        useLayoutEffect(() => {
            const optionItemElements = document.querySelectorAll(".option-item");

            for (let index = 0; index < optionItemElements.length; index++) {
                optionItemElements[index].addEventListener("click", () => {
                    setSelectedItem(index);
                });
            }
        }, []);

        useEffect(() => {
            const optionItemElements = document.querySelectorAll(".option-item");
            // 모든 Options.Item 의 option-item__active 스타일 제거
            for (const element of optionItemElements) {
                if (element.classList.contains("option-item__active")) {
                    element.classList.remove("option-item__active");
                }
            }
            // 선택된 Options.Item 의 option-item__active 스타일 추가
            optionItemElements[selectedItem].classList.add("option-item__active");
        }, [selectedItem]);
        return <div className="option-container">{children}</div>;
    },

    Item: ({ children }) => {
        return <div className="option-item">{children}</div>;
    },
};
