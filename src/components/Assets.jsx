import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useLayoutEffect, useRef } from "react";

import "./Assets.scss";

export const TopNav = ({ onPrevBtnClick, imgSrc, title, subtitle, date }) => {
    const topNavController = useRef();
    const topNavControllerContainer = useRef();

    const onScrollHandler = () => {
        // console.log(window.scrollY);
        if (window.scrollY > 150) {
            topNavControllerContainer.current.style.backgroundColor = "#ffffff";
        }
        if (window.scrollY < 150) {
            topNavControllerContainer.current.style.background = "none";
        }
    };

    useLayoutEffect(() => {
        window.addEventListener("scroll", onScrollHandler);
        return () => window.removeEventListener("scroll", onScrollHandler);
    }, []);

    return (
        <div className="top-nav-container">
            <div ref={topNavControllerContainer} className="top-nav__controller-container">
                <div className="top-nav__controller">
                    <div className="top-nav__btn" onClick={onPrevBtnClick}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                </div>
            </div>
            <div className="top-nav__content">
                <div className="top-nav__text-container">
                    <div className="top-nav__text">
                        <p>{date}</p>
                        <h3>{subtitle}</h3>
                        <h1>{title}</h1>
                    </div>
                </div>
                <div className="top-nav__filter"></div>
                <img src={process.env.PUBLIC_URL + imgSrc} alt="" className="top-nav__img" />
            </div>
        </div>
    );
};

export const Image = ({ imgSrc }) => {
    return <img src={process.env.PUBLIC_URL + imgSrc} alt="" className="img-container" />;
};

export const Logo = {
    Container: ({ children, containerHeight, itemSize }) => {
        useLayoutEffect(() => {
            const containerElement = document.querySelector(".logo-container");
            containerElement.style.height = containerHeight;

            const itemElements = document.querySelectorAll(".logo-item");
            for (const element of itemElements) {
                element.style.width = itemSize;
                element.style.height = itemSize;
            }
        }, [itemSize]);

        return (
            <div className="logo-wrapper">
                <div className="logo-container">{children}</div>
            </div>
        );
    },
    Item: ({ imgSrc, className, id }) => {
        return (
            <div className="logo-item">
                <img id={id} className={className} src={imgSrc} alt="generated-logo" />
            </div>
        );
    },
};
