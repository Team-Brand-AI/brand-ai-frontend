import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faCirclePlus, faGear, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useLayoutEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { TopNav } from "../components/Assets";
import { Button } from "../components/Button";
import { Logo, Image } from "../components/Assets";
import { NavBar } from "../components/NavBar";
import { ClipBoard } from "../components/ClipBoard";
import { InnerLabel } from "../components/Label";

import base64 from "@assets/base64.json";
import { useDispatch, useSelector } from "react-redux";
import { downloadHtmlAsImage, downloadImage, downloadTagAsImage } from "../utils/downloadImg";

import download from "downloadjs";
import { toPng } from "html-to-image";

export const DetailPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [logoRef1, logoRef2] = [useRef(), useRef()];
    const [cardData, setCardData] = useState(null);

    const { id } = useParams();
    const { cardList } = useSelector((state) => state.userData);

    useEffect(() => {
        try {
            setCardData(cardList.data.filter((card) => card.id == id));
        } catch (err) {
            navigate("/unauthorized");
        }
    }, []);

    return (
        <>
            <TopNav
                onPrevBtnClick={() => navigate("/my-marketing")}
                imgSrc={cardData && cardData[0].imagePath}
                title={cardData && cardData[0].description.productName}
            ></TopNav>

            <div className="detail-page page">
                <NavBar.Bottom>
                    <NavBar.Item active icon={faClipboardList} text="내 마케팅" link="/my-marketing" />
                    <NavBar.Item icon={faCirclePlus} text="내 마케팅 추가하기" link="/new-marketing" />
                    <NavBar.Item icon={faGear} text="환경설정" link="/settings" />
                </NavBar.Bottom>

                <InnerLabel>생성된 로고</InnerLabel>
                <Logo.Container itemSize={"150px"} containerHeight={"180px"}>
                    <Logo.Item id="logo-1" ref={logoRef1} imgSrc={cardData && cardData[0].logoUrl1}></Logo.Item>
                    <Logo.Item id="logo-2" ref={logoRef2} imgSrc={cardData && cardData[0].logoUrl2}></Logo.Item>
                </Logo.Container>

                <Button
                    onClick={() => {
                        window.open(cardData && cardData[0].logoUrl1);
                        window.open(cardData && cardData[0].logoUrl2);
                    }}
                    width="min(100%, 600px)"
                    type="primary"
                    styles={{ margin: "0px auto" }}
                >
                    로고 파일 다운로드
                </Button>

                <InnerLabel>생성된 배경화면</InnerLabel>

                <Image imgSrc={cardData && cardData[0].imagePath}></Image>

                <Button width="min(100%, 600px)" type="primary" styles={{ margin: "0px auto" }}>
                    배경화면 파일 다운로드
                </Button>

                <InnerLabel>생성된 제품 설명</InnerLabel>
                <ClipBoard>
                    {cardData && cardData[0].description.productName}
                    <br />
                    <br />
                    {cardData && cardData[0].description.introduction}
                    <br />
                    <br />
                    1. {cardData && cardData[0].description.featureFirst}
                    <br />
                    {cardData && cardData[0].description.featureDescription1}
                    <br />
                    <br />
                    2. {cardData && cardData[0].description.featureSecond}
                    <br />
                    {cardData && cardData[0].description.featureDescription2}
                    <br />
                    <br />
                    3. {cardData && cardData[0].description.featureThird}
                    <br />
                    {cardData && cardData[0].description.featureDescription3}
                </ClipBoard>

                <ClipBoard>
                    <br />
                    <br />
                    {cardData && cardData[0].description.promotion}
                    <br />
                    <br />
                </ClipBoard>

                <Button
                    onClick={() => navigate(`/result/${id}`)}
                    width="min(100%, 600px)"
                    height="120px"
                    type="primary"
                    styles={{ margin: "0px auto" }}
                >
                    <FontAwesomeIcon icon={faCircleArrowRight} size="xl" style={{ padding: "0px 10px 0px 10px" }} />
                    상세 정보 이미지로 만들기
                </Button>
            </div>
        </>
    );
};
