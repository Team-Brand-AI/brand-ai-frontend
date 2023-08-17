import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../components/Button";

import "./HomePage.scss";
import bgHome from "../assets/bg-home.png";

export const HomePage = () => {
    const navigate = useNavigate();
    const filterRef = useRef();

    useEffect(() => {
        setTimeout(() => filterRef.current.classList.add("opacity_after"), 500);
    }, []);

    return (
        <main className="home-page">
            <img className="home-page-bg__img" src={bgHome} alt="bg-home" />
            <div ref={filterRef} className="home-page-bg__filter" />

            <div className="home-page-container">
                <div className="home-page-container__text">
                    <h1 className="home-page-container__title">브랜다이</h1>
                    <h3 className="home-page-container__subtitle">
                        <span>몇가지 간단한 단계를 거쳐</span>
                        <span>디지털 마케팅에 필요한 자원을</span>
                        <span>빠르게 확보하세요</span>
                    </h3>
                </div>
                <div className="home-page-container__btn">
                    <Button type="rounded" width="180px" onClick={() => navigate("get-started/Login")}>
                        시작하기
                    </Button>
                </div>
            </div>
        </main>
    );
};
