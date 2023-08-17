import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faMoon,
    faFont,
    faFile,
    faCodeBranch,
    faCircleQuestion,
    faClipboardList,
    faCirclePlus,
    faGear,
} from "@fortawesome/free-solid-svg-icons";

import { Heading } from "../components/Heading";
import { Menu } from "../components/Menu";
import { Label } from "../components/Label";
import { NavBar } from "../components/NavBar";
import "./SettingsPage.scss";

import iconAdv from "../assets/icon_adv.svg";

export const SettingsPage = () => {
    return (
        <div className="page-settings page">
            <NavBar.Bottom>
                <NavBar.Item icon={faClipboardList} text="내 마케팅" link="/my-marketing" />
                <NavBar.Item icon={faCirclePlus} text="내 마케팅 추가하기" link="/new-marketing/category" />
                <NavBar.Item active icon={faGear} text="환경설정" link="/settings" />
            </NavBar.Bottom>

            <Heading title="환경설정" />

            <Label>일반설정</Label>
            <Menu.Container>
                <Menu.Item type="fontawesome" icon={faMoon} text="다크모드">
                    <FontAwesomeIcon icon={faChevronRight} size="xl"></FontAwesomeIcon>
                </Menu.Item>
                <Menu.Item type="fontawesome" icon={faFont} text="글자 및 아이콘 크기">
                    <FontAwesomeIcon icon={faChevronRight} size="xl"></FontAwesomeIcon>
                </Menu.Item>
                <Menu.Item type="vector" icon={iconAdv} text="광고제거">
                    <FontAwesomeIcon icon={faChevronRight} size="xl"></FontAwesomeIcon>
                </Menu.Item>
            </Menu.Container>

            <Label>일반설정</Label>

            <Menu.Container>
                <Menu.Item type="fontawesome" icon={faFile} text="서비스 이용약관">
                    <FontAwesomeIcon icon={faChevronRight} size="xl"></FontAwesomeIcon>
                </Menu.Item>
                <Menu.Item type="fontawesome" icon={faFile} text="개인정보 처리방침">
                    <FontAwesomeIcon icon={faChevronRight} size="xl"></FontAwesomeIcon>
                </Menu.Item>
                <Menu.Item type="fontawesome" icon={faCircleQuestion} text="자주 물어보는 질문">
                    <FontAwesomeIcon icon={faChevronRight} size="xl"></FontAwesomeIcon>
                </Menu.Item>
                <Menu.Item type="fontawesome" icon={faCodeBranch} text="버전">
                    <FontAwesomeIcon icon={faChevronRight} size="xl"></FontAwesomeIcon>
                </Menu.Item>
            </Menu.Container>
        </div>
    );
};
