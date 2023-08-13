import { useEffect, useLayoutEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

import "./ClipBoard.scss";

export const ClipBoard = ({ children }) => {
    const clipBoard = useRef();
    const clipBoardContent = useRef();

    const onClickHandler = () => {
        window.navigator.clipboard.writeText(clipBoardContent.current.innerHTML);
    };

    useLayoutEffect(() => {
        clipBoard.current.addEventListener("click", onClickHandler);

        return () => clipBoard.current.removeEventListener("click", onClickHandler);
    }, []);

    return (
        <div ref={clipBoard} className="clip-board-container">
            <div className="clip-board__copy">
                <FontAwesomeIcon icon={faClipboardList} />
            </div>

            <div ref={clipBoardContent} className="clip-board__content">
                {children}
            </div>
        </div>
    );
};
