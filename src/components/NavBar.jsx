import { useRef, useLayoutEffect, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

import "./NavBar.scss";

export const NavBar = {
    Top: ({ cur, max }) => {
        const navRef = useRef();

        // nav-top__item 의 width 비율에 맞게 조정
        useLayoutEffect(() => {
            const navItems = document.querySelectorAll(".nav-top__item");
            for (let idx = 0; idx < max; idx++) {
                navItems[idx].style.width = `${100 / max}%`;
                if (idx < cur) navItems[idx].classList.add("nav-top__item__active");
            }
        }, []);

        useEffect(() => {
            const timer = setTimeout(() => {
                const navItem = document.querySelectorAll(".nav-top__item")[cur];

                if (!navItem.classList.contains("nav-top__item__active")) {
                    navItem.classList.add("nav-top__item__active");
                }
            }, 500);

            return () => {
                clearTimeout(timer);
            };
        }, [cur]);

        return (
            <nav className="nav-top">
                <ul className="nav-top__container">
                    {Array.from({ length: max }).map((value, key) => {
                        return <li key={key} className="nav-top__item"></li>;
                    })}
                </ul>
            </nav>
        );
    },

    Bottom: ({ children }) => {
        return (
            <nav className="nav-bottom">
                <ul className="nav-bottom__container">{children}</ul>
            </nav>
        );
    },

    Item: ({ active, link, icon, text }) => {
        const navigate = useNavigate();
        return (
            <li className={`nav-bottom__item ${active && "nav-bottom__item__active"}`} onClick={() => navigate(link)}>
                <div className="nav-bottm__item-icon">
                    <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
                </div>
                <div className="nav-bottom__item-text">{text}</div>
            </li>
        );
    },

    Close: ({ onCloseClick }) => {
        return (
            <div className="nav-top">
                <div className="nav-top__close">
                    <div style={{ flexGrow: 1 }}></div>
                    <div className="nav-top__close-btn" onClick={() => onCloseClick()}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
            </div>
        );
    },
};
