import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { faClipboardList, faCirclePlus, faGear, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

import { TopNav } from "../components/Assets";
import { Button } from "../components/Button";
import { InnerLabel } from "../components/Label";

import domtoimage from "dom-to-image";

import { LoadingPage } from "../components/Loading";

import base64 from "@assets/base64.json";

import "./ResultPage.scss";

export const ResultPage = () => {
    const mainDom = useRef();
    const navigate = useNavigate();
    const { id } = useParams();

    const { cardList } = useSelector((state) => state.userData);
    const cardData = cardList.data.filter((card) => card.id == id);

    const [isLoading, setIsLoading] = useState(false);

    var options = {
        quality: 0.99,
    };

    const onDownloadBtn = () => {
        setIsLoading((isLoading) => true);
        mainDom.current.style.position = "fixed";
        mainDom.current.style.top = "0px";
        mainDom.current.style.left = "0px";

        domtoimage
            .toJpeg(mainDom.current, {})
            .then((dataUrl) => {
                var link = document.createElement("a");
                link.download = "my-image-name.jpeg";
                link.href = dataUrl;
                link.click();
            })
            .then(() => {
                mainDom.current.style.position = "relative";
                setIsLoading((isLoading) => false);
            });
    };

    return (
        <>
            <TopNav
                onPrevBtnClick={() => navigate("/my-marketing")}
                imgSrc={"/img/img_test_1.jpg"}
                title={cardData[0].description.productName}
            ></TopNav>

            {isLoading && <LoadingPage></LoadingPage>}

            <div className="result__color-picker"></div>

            <main className="result-page" ref={mainDom}>
                <div className="result__logo-container">
                    <img className="logo-item" src={cardData[0].logoUrl1} alt="generated-logo"></img>
                    <img className="logo-item" src={cardData[0].logoUrl2} alt="generated-logo"></img>
                </div>

                <div className="result__product_name">
                    <InnerLabel>{cardData[0].description.productName}</InnerLabel>
                </div>

                <div className="result__product-img-container">
                    <img className="product-img-item" src={"/img/img_test_1.jpg"}></img>
                </div>

                <div className="result__description-container">
                    <div className="result__description-item">
                        <div className="result__description-item__index">1</div>
                        <div className="result__description-item__content">
                            <div className="content__title">{cardData[0].description.featureFirst}</div>
                        </div>
                    </div>
                    <div className="result__description-item__split" />

                    <div className="result__description-item">
                        <div className="result__description-item__index">2</div>
                        <div className="result__description-item__content">
                            <div className="content__title">{cardData[0].description.featureSecond}</div>
                        </div>
                    </div>
                    <div className="result__description-item__split" />

                    <div className="result__description-item">
                        <div className="result__description-item__index">3</div>
                        <div className="result__description-item__content">
                            <div className="content__title">{cardData[0].description.featureThird}</div>
                        </div>
                    </div>
                </div>

                {/* 안내사항 1 */}
                <div className="result__detail-container">
                    <div className="result__detail-container__heading">중요 안내 사항 1</div>

                    <h1>{cardData[0].description.featureFirst}</h1>
                    <p>{cardData[0].description.featureDescription1}</p>
                </div>

                {/* <div className="result__product-img-container">
                    <img className="product_img_inner" src={"/img/img_test_2.jpg"}></img>
                </div> */}

                {/* 안내사항 2 */}
                <div className="result__detail-container">
                    <div className="result__detail-container__heading">중요 안내 사항 2</div>

                    <h1>{cardData[0].description.featureSecond}</h1>
                    <p>{cardData[0].description.featureDescription2}</p>
                </div>

                {/* <div className="result__product-img-container">
                    <img className="product_img_inner" src={"/img/img_test_2.jpg"}></img>
                </div> */}

                {/* 안내사항 3 */}
                <div className="result__detail-container">
                    <div className="result__detail-container__heading">중요 안내 사항 3</div>

                    <h1>{cardData[0].description.featureThird}</h1>
                    <p>{cardData[0].description.featureDescription3}</p>
                </div>

                {/* <div className="result__product-img-container">
                    <img className="product_img_inner" src={"/img/img_test_2.jpg"}></img>
                </div> */}

                <div className="result__save-as-img-container">
                    <Button type="primary" onClick={onDownloadBtn}>
                        이미지 다운로드
                    </Button>
                </div>
            </main>
        </>
    );
};
