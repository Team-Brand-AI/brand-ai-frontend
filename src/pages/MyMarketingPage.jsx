import { faClipboardList, faCirclePlus, faGear } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card } from "../components/Card";
import { NavBar } from "../components/NavBar";
import { ButtonPlaceHolder } from "../components/Button";
import { UserDataFetchThunk } from "../store/user-data-slice";

import { base64_identifier } from "../utils/base64";

export const MyMarketingPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { token } = useSelector((state) => state.auth);
    const { cardList } = useSelector((state) => state.userData);

    useEffect(() => {
        dispatch(UserDataFetchThunk(token.data));
    }, []);

    useEffect(() => {
        // if (cardList.staus === "success") {
        console.log(cardList.data);
        // }
    }, [cardList.status]);

    return (
        <>
            <NavBar.Bottom>
                <NavBar.Item active icon={faClipboardList} text="내 마케팅" link="/my-marketing" />
                <NavBar.Item icon={faCirclePlus} text="내 마케팅 추가하기" link="/new-marketing/category" />
                <NavBar.Item icon={faGear} text="환경설정" link="/settings" />
            </NavBar.Bottom>
            <main className="main-page page">
                {cardList.data &&
                    cardList.data.map((element, index) => {
                        return (
                            <Card key={index} title={element.description.productName} onClick={() => navigate(`/my-marketing/${element.id}`)}></Card>
                        );
                    })}

                <ButtonPlaceHolder
                    onClick={() => navigate("/new-marketing/category")}
                    icon={faCirclePlus}
                    text="새로운 마케팅 추가하기"
                ></ButtonPlaceHolder>
            </main>
        </>
    );
};
