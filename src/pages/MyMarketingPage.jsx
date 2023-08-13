import { faClipboardList, faCirclePlus, faGear } from "@fortawesome/free-solid-svg-icons";

import { Card } from "../components/Card";
import { NavBar } from "../components/NavBar";
import { ButtonPlaceHolder } from "../components/Button";

export const MyMarketingPage = () => {
    return (
        <>
            <NavBar.Bottom>
                <NavBar.Item active icon={faClipboardList} text="내 마케팅" link="/my-marketing" />
                <NavBar.Item icon={faCirclePlus} text="내 마케팅 추가하기" link="/new-marketing/category" />
                <NavBar.Item icon={faGear} text="환경설정" link="/settings" />
            </NavBar.Bottom>
            <main className="main-page page">
                <ButtonPlaceHolder icon={faCirclePlus} text="새로운 마케팅 추가하기"></ButtonPlaceHolder>

                <Card imgSrc={"/img/img_test_1.jpg"} title={"제목"} subtitle={"부제목"} date={"2023-08-13"}></Card>
                <Card imgSrc={"/img/img_test_2.jpg"} title={"제목"} subtitle={"부제목"} date={"2023-08-13"}></Card>
                <Card imgSrc={"/img/img_test_3.jpeg"} title={"제목"} subtitle={"부제목"} date={"2023-08-13"}></Card>
                <Card imgSrc={"/img/img_test_4.jpeg"} title={"제목"} subtitle={"부제목"} date={"2023-08-13"}></Card>
                <Card imgSrc={"/img/img_test_5.jpeg"} title={"제목"} subtitle={"부제목"} date={"2023-08-13"}></Card>
            </main>
        </>
    );
};
