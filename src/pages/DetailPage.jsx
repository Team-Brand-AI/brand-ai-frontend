import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faCirclePlus, faGear, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { TopNav } from "../components/Assets";
import { Button } from "../components/Button";
import { Logo, Image } from "../components/Assets";
import { NavBar } from "../components/NavBar";
import { ClipBoard } from "../components/ClipBoard";
import { InnerLabel } from "../components/Label";

import base64 from "@assets/base64.json";
import { useDispatch, useSelector } from "react-redux";
import { downloadImage } from "../utils/downloadImg";

export const DetailPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = useParams();
    const { cardList } = useSelector((state) => state.userData);
    const cardData = cardList.data.filter((card) => card.id == id);
    // const [cardData, setCardData] = useState(null);

    return (
        <>
            <TopNav
                onPrevBtnClick={() => navigate("/my-marketing")}
                imgSrc={"/img/img_test_1.jpg"}
                title={cardData[0].description.productName}
            ></TopNav>

            <div className="detail-page page">
                <NavBar.Bottom>
                    <NavBar.Item active icon={faClipboardList} text="내 마케팅" link="/my-marketing" />
                    <NavBar.Item icon={faCirclePlus} text="내 마케팅 추가하기" link="/new-marketing" />
                    <NavBar.Item icon={faGear} text="환경설정" link="/settings" />
                </NavBar.Bottom>

                <InnerLabel>생성된 로고</InnerLabel>
                <Logo.Container itemSize={"150px"} containerHeight={"180px"}>
                    <Logo.Item imgSrc={cardData[0].logoUrl1}></Logo.Item>
                    <Logo.Item imgSrc={cardData[0].logoUrl2}></Logo.Item>
                </Logo.Container>
                <Button
                    onClick={() => {
                        downloadImage(cardData[0].logoUrl1, "logo1.png");
                        downloadImage(cardData[0].logoUrl2, "logo2.png");
                    }}
                    width="min(100%, 600px)"
                    type="primary"
                    styles={{ margin: "0px auto" }}
                >
                    로고 파일 다운로드
                </Button>

                <InnerLabel>생성된 배경화면</InnerLabel>

                <Image imgSrc={"/img/img_test_1.jpg"}></Image>

                <Button width="min(100%, 600px)" type="primary" styles={{ margin: "0px auto" }}>
                    배경화면 파일 다운로드
                </Button>

                <InnerLabel>생성된 제품 설명</InnerLabel>
                <ClipBoard>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio id explicabo magnam, ea quidem numquam aliquam officia debitis
                    voluptatum fuga, et dolorem dolore, porro omnis animi eos quis dolores hic. Laudantium corporis est error maxime dicta itaque
                    quibusdam, amet doloribus accusantium adipisci consectetur quisquam quasi ipsa, facilis magnam eos. Cupiditate accusamus cum
                    illum! Quam obcaecati, numquam animi nobis earum dolorum atque consectetur accusantium. Architecto ad maiores voluptatibus illum
                    nostrum. Voluptatum, et necessitatibus magni nesciunt dignissimos exercitationem vel iure aspernatur repellendus, quos, officia
                    eveniet placeat rerum ab illum illo tempora nulla cupiditate facere asperiores tenetur excepturi. A asperiores assumenda at error?
                </ClipBoard>

                <ClipBoard>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore doloremque reiciendis dolorum, delectus illum iure doloribus
                    tenetur numquam, repellendus minima temporibus eum magni accusamus. Eius eaque, debitis, maxime cumque quisquam magni recusandae
                    explicabo minus hic deserunt vero labore mollitia aperiam ipsa molestias numquam voluptatibus voluptatem suscipit non similique.
                    Minus, tenetur!
                </ClipBoard>

                <Button width="min(100%, 600px)" height="120px" type="primary" styles={{ margin: "0px auto" }}>
                    <FontAwesomeIcon icon={faCircleArrowRight} size="xl" style={{ padding: "0px 10px 0px 10px" }} />
                    상세 정보 이미지로 만들기
                </Button>
            </div>
        </>
    );
};
