import { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDispatch, useSelector } from "react-redux";

import { Label } from "../components/Label";
import { Options } from "../components/Options";
import { NavBar } from "../components/NavBar";
import { Heading } from "../components/Heading";
import { Selector } from "../components/Selector";
import { ButtonGroup } from "../components/Button";
import { AgeContext } from "../context/AgeContext";
import { GenderContext } from "../context/GenderContext";
import { Button } from "../components/Button";

import { getStartedActions } from "../store/get-started-slice";

import "./GetStartedPage.scss";

export const GetStartedPage = {
    TermsOfUse: () => {
        const { termsOfUse } = useSelector((state) => state.getStarted);
        const dispatch = useDispatch();

        const toggleRef = useRef();
        const [toggle, setToggle] = useState(false);

        const onToggleClickHandler = () => {
            setToggle((toggle) => !toggle);
        };

        useLayoutEffect(() => {
            toggleRef.current.addEventListener("click", onToggleClickHandler);
            return () => toggleRef.current.removeEventListener("click", onToggleClickHandler);
        }, []);

        useEffect(() => {
            if (toggle) dispatch(getStartedActions.agreeTermsOfUse({ toggle: true }));
            else dispatch(getStartedActions.agreeTermsOfUse({ toggle: false }));
        }, [toggle]);

        return (
            <main className="page-get-started__terms-of-use page">
                <NavBar.Top cur={0} max={5} />
                <Heading
                    title={"개인정보 수집에 동의해주세요"}
                    subtitle={["개인정보는 단순히 앱을 개선하고", "사용자 통계를 분석하기 위해 사용됩니다"]}
                />

                <div className="terms-of-use__container">
                    <p className="terms-of-use__text">
                        <span>1. 원활한 서비스 환경을 제공하기 위해 수집</span>
                        <span>2. 개인정보 수집항목</span>
                        <span>수집항목 : 나이, 성별</span>
                        <span>3. 개인정보의 보유 및 이용기간</span>
                        <span>4. 동의 거부 및 동의 거부시 불이익 내용</span>
                        <span>개인정보 수집 동의를 거부하실 수 있습니다. 다만, 동의하지 않을 경우 해당 서비스를 이용할 수 없습니다.</span>
                        <span>개인정보는 해당 사이트 이외의 다른 목적으로 사용하지 않습니다.</span>
                    </p>
                </div>

                <div className="terms-of-use-checkbox__container">
                    <div ref={toggleRef} className={`terms-of-use-checkbox__btn ${toggle && "terms-of-use-checkbox__btn__active"}`}>
                        <FontAwesomeIcon icon={faCheck} size="lg" />
                    </div>
                    <div className="terms-of-use-checkbox__text">개인정보 수집 이용에 동의합니다</div>
                </div>

                <ButtonGroup prevPath={"/"} nextPath={"/get-started/personal-info"}></ButtonGroup>
            </main>
        );
    },

    PersonalInfo: () => {
        const { gender } = useSelector((state) => state.getStarted);
        const dispatch = useDispatch();

        const [selectedGender, setSelectedGender] = useState(0);
        const [selectedAge, setSelectedAge] = useState(0);

        useEffect(() => {
            if (selectedGender === 0) dispatch(getStartedActions.setGenderMan());
            if (selectedGender === 1) dispatch(getStartedActions.setGenderWoman());
        }, [selectedGender]);

        useEffect(() => {
            let age = (selectedAge + 2) * 10;
            dispatch(getStartedActions.setAge({ age: age }));
        }, [selectedAge]);

        return (
            <main className="page-get-started__age page">
                <NavBar.Top cur={1} max={5} />
                <Heading
                    title={"성별과 나이를 선택해 주세요"}
                    subtitle={["개인정보는 단순히 앱을 개선하고", "사용자 통계를 분석하기 위해 사용됩니다"]}
                />

                <Label>성별</Label>
                <GenderContext.Provider value={{ selectedItem: selectedGender, setSelectedItem: setSelectedGender }}>
                    <Selector.Container context={GenderContext}>
                        <Selector.Item>남성</Selector.Item>
                        <Selector.Item>여성</Selector.Item>
                    </Selector.Container>
                </GenderContext.Provider>

                <Label>나이</Label>
                <AgeContext.Provider value={{ selectedItem: selectedAge, setSelectedItem: setSelectedAge }}>
                    <Options.Container context={AgeContext}>
                        <Options.Item>20대</Options.Item>
                        <Options.Item>30대</Options.Item>
                        <Options.Item>40대</Options.Item>
                        <Options.Item>50대</Options.Item>
                        <Options.Item>60대</Options.Item>
                        <Options.Item>70대</Options.Item>
                        <Options.Item>80대</Options.Item>
                    </Options.Container>
                </AgeContext.Provider>

                <ButtonGroup prevPath={"/get-started/terms-of-use"} nextPath={"/my-marketing"}></ButtonGroup>
            </main>
        );
    },

    Login: () => {
        function SocialKakao() {
            const REDIRECT_URI = `http://localhost:3000/get-started/terms-of-use`;
            const REST_API_KEY = `d57feeaf862b3d286ce2ca7c21039022`;

            //REST API 형식
            const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
            window.location.href = KAKAO_AUTH_URL;
        }

        return (
            <main className="page-get-started__login_back page">
                <Heading
                    title={"Marketisy를 사용하기 위해 로그인해주세요!"}
                    subtitle={["로그인 해두면 카카오톡으로 내 상품을 빠르게 공유할 수 있어요."]}
                />
                <div className="login-page-container">
                    <div className="login-page-container__btn">
                        <Button type="primary" onClick={() => SocialKakao()}>
                            카카오톡 로그인하기
                        </Button>
                    </div>
                </div>
            </main>
        );
    },
};
