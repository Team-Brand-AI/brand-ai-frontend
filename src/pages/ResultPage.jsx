import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faCirclePlus, faGear, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { TopNav } from "../components/Assets";
import { Button } from "../components/Button";
import { Logo, Image } from "../components/Assets";
import { NavBar } from "../components/NavBar";
import { ClipBoard } from "../components/ClipBoard";
import { InnerLabel } from "../components/Label";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

import { LoadingPage } from "../components/Loading";

import base64 from "@assets/base64.json";

import "./ResultPage.scss";

export const ResultPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(false);

    const mainDom = useRef();

    useEffect(() => {
        console.log(id);
    }, []);

    var options = {
        quality: 0.99,
    };

    const onDownloadBtn = () => {
        setIsLoading((isLoading) => true);
        mainDom.current.style.position = "fixed";
        mainDom.current.style.top = "0px";
        mainDom.current.style.left = "0px";

        domtoimage
            .toJpeg(document.querySelector(".Main_Box"), {})
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

        // domtoimage.toBlob(document.querySelector(".Main_Box"), options).then((blob) => {
        //     saveAs(blob, "result_page.png");
        // });
    };

    return (
        <>
            <TopNav
                onPrevBtnClick={() => navigate("/my-marketing")}
                imgSrc={"/img/img_test_1.jpg"}
                title={"제목임"}
                subtitle={"소제목임"}
                date={"2023-08-13"}
            ></TopNav>

            {isLoading && <LoadingPage></LoadingPage>}

            <main className="Main_Box" ref={mainDom}>
                <div className="logo_Box">
                    <img className="logo" src={"/img/gen_logo.png"}></img>
                </div>
                <div className="product_name">
                    <InnerLabel>Product 우리 능금 사과</InnerLabel>
                </div>
                <div className="product_subname_box">
                    <InnerLabel className="product_subname">농약 없이 키운 우리 00 사과</InnerLabel>
                </div>
                <div className="product_img_box">
                    <img className="product_img" src={"/img/img_test_1.jpg"}></img>
                </div>
                <div className="des_box">
                    <div className="des_pair">
                        <div className="overview_icon" />
                        <div className="overview_text">
                            <div className="overview_title">브랜드 특장점 1</div>
                            <div className="overview_content">이 사과는 이래서 좋습니다.</div>
                        </div>
                    </div>
                    <hr className="line" />

                    <div className="des_pair">
                        <div className="overview_icon" />
                        <div className="overview_text">
                            <div className="overview_title">브랜드 특장점 1</div>
                            <div className="overview_content">이 사과는 이래서 좋습니다.</div>
                        </div>
                    </div>
                    <hr className="line" />

                    <div className="des_pair">
                        <div className="overview_icon" />
                        <div className="overview_text">
                            <div className="overview_title">브랜드 특장점 1</div>
                            <div className="overview_content">이 사과는 이래서 좋습니다.</div>
                        </div>
                    </div>
                </div>
                {/* 안내사항 1 */}
                <div className="context">
                    <div className="caution">중요 안내 사항 1</div>
                    <div className="caution-text-h2">사과가 너무 맛있을 수 있습니다.</div>
                    <div className="caution-text-h1">정성으로 키웠으니까!!</div>
                    <div className="caution-text-p">
                        헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의
                        찬성이 있어야 한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의
                        자문에 응하기 위하여 국가안전보장회의를 둔다.
                    </div>
                </div>

                <div className="product_img_box">
                    <img className="product_img_inner" src={"/img/img_test_2.jpg"}></img>
                </div>
                {/* 안내사항 2 */}
                <div className="context">
                    <div className="caution">중요 안내 사항 2</div>
                    <div className="caution-text-h2">사과가 너무 맛있을 수 있습니다.</div>
                    <div className="caution-text-h1">정성으로 키웠으니까!!</div>
                    <div className="caution-text-p">
                        헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의
                        찬성이 있어야 한다.
                    </div>
                </div>

                <div className="product_img_box">
                    <img className="product_img_inner" src={"/img/img_test_2.jpg"}></img>
                </div>
                {/* 안내사항 3 */}
                <div className="context">
                    <div className="caution">중요 안내 사항 3</div>
                    <div className="caution-text-h2">사과가 너무 맛있을 수 있습니다.</div>
                    <div className="caution-text-h1">정성으로 키웠으니까!!</div>
                    <div className="caution-text-p">헌법재판소에서 법률의 위헌결정, 탄핵의 결정이 일어날까?</div>
                </div>

                <div className="product_img_box">
                    <img className="product_img_inner" src={"/img/img_test_2.jpg"}></img>
                </div>
                <div className="des_box">
                    <Button type="primary" onClick={onDownloadBtn}>
                        이미지 다운로드
                    </Button>
                </div>
            </main>
        </>
    );
};
