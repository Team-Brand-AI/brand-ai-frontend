import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { NavBar } from "../components/NavBar";
import { Heading } from "../components/Heading";
import { Grid } from "../components/Grid";
import { Label } from "../components/Label";
import { Input, DropDown } from "../components/Forms";
import { HashTag } from "../components/HashTag";
import { Button, ButtonPlaceHolder } from "../components/Button";

import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

import category from "@assets/category.json";
import subcategory from "@assets/subcategory.json";

import { CategoryContext, SubCategoryContext } from "../context/CategoryContext";
import { MoodContext, ColorContext } from "../context/OptionContext";

import { newMarketingActions } from "../store/new-marketing-slice.js";

export const NewMarketingPage = {
    Category: () => {
        const dispatch = useDispatch();

        const [selectedCategory, setSelectedCategory] = useState(null);

        useEffect(() => {
            if (selectedCategory != undefined) {
                dispatch(
                    newMarketingActions.setCategory({
                        index: selectedCategory,
                        kr: category[selectedCategory]["name_kr"],
                        en: category[selectedCategory]["name_en"],
                    })
                );
            }
        }, [selectedCategory]);

        return (
            <main className="new-marketing-page__category page">
                <NavBar.Top cur={0} max={5} />
                <Heading title={"카테고리를 선택해 주세요"} subtitle={["판매 하시려는 상품과 관련된 카테고리를", "선택해 주세요"]} />

                <div className="page-category__grid">
                    <CategoryContext.Provider value={{ selectedItem: selectedCategory, setSelectedItem: setSelectedCategory }}>
                        <Grid.Container context={CategoryContext} width={"min(100%, 600px)"}>
                            {category.map((element, index) => {
                                return (
                                    <Grid.Item
                                        key={index}
                                        icon={process.env.PUBLIC_URL + `/icons/${element["imgSrc"]}.png`}
                                        text={element["name_kr"]}
                                        size={"150px"}
                                        onRemoveBtnClick={""}
                                    ></Grid.Item>
                                );
                            })}
                        </Grid.Container>
                    </CategoryContext.Provider>
                </div>
            </main>
        );
    },
    SubCategory: () => {
        const { category_en } = useSelector((state) => state.newMarketing);
        const dispatch = useDispatch();
        const [selectedSubCategory, setSelectedSubCategory] = useState(null);

        useEffect(() => {
            if (selectedSubCategory != undefined) {
                dispatch(
                    newMarketingActions.setSubCategory({
                        kr: subcategory[category_en][selectedSubCategory]["name_kr"],
                        en: subcategory[category_en][selectedSubCategory]["name_en"],
                    })
                );
            }
        }, [selectedSubCategory]);

        return (
            <div className="new-marketing-page__subcategory page">
                <NavBar.Top cur={1} max={5} />
                <Heading title={"하위 카테고리를 선택해 주세요"} subtitle={["판매 하시려는 상품과 관련된 카테고리를", "선택해 주세요"]} />

                <SubCategoryContext.Provider value={{ selectedItem: selectedSubCategory, setSelectedItem: setSelectedSubCategory }}>
                    <Grid.Container context={SubCategoryContext} width={"min(100%, 600px)"}>
                        {subcategory["food"].map((element, index) => {
                            return <Grid.Item key={index} text={element["name_kr"]} size={"150px"}></Grid.Item>;
                        })}
                    </Grid.Container>
                </SubCategoryContext.Provider>
            </div>
        );
    },
    HashTag: () => {
        const dispatch = useDispatch();
        const { hashtags } = useSelector((state) => state.newMarketing);

        return (
            <div className="new-marketing-page__hashtag page">
                <NavBar.Top cur={2} max={5} />
                <Heading title={"해쉬태그를 추가해 주세요"} subtitle={["판매 하시려는 상품을 가장 잘 나타내주는", "해쉬태그를 추가해주세요"]} />

                <Label>해쉬태그 추가하기</Label>
                <Input.Text id="hashtag" placeholder="예) placeholder"></Input.Text>
                <Button
                    type="primary"
                    onClick={() => {
                        dispatch(newMarketingActions.appendHashTag({ tag: document.querySelector("#hashtag").value }));
                    }}
                    width="100%"
                    styles={{ margin: "20px 0px" }}
                >
                    추가하기
                </Button>

                <Label>추가된 해시태그</Label>

                <HashTag.Container>
                    {hashtags.map((element, index) => {
                        return <HashTag.Item key={index}>{element}</HashTag.Item>;
                    })}
                </HashTag.Container>
            </div>
        );
    },
    BrandInfo: () => {
        const dispatch = useDispatch();
        const [selectedMoodOption, setSelectedMoodOption] = useState({
            index: null,
            text: null,
        });
        const [selectedColorOption, setSelectedColorOption] = useState({
            index: null,
            text: null,
        });

        const onNextBtnClick = () => {
            dispatch(newMarketingActions.setBrandName(document.querySelector("#brandNameInput")));
            dispatch(newMarketingActions.setBrandInfo(document.querySelector("#brandInfoInput")));
        };

        useEffect(() => {
            if (selectedMoodOption != null) {
                dispatch(newMarketingActions.setMoodOption(selectedMoodOption));
            }
        }, [selectedMoodOption]);

        useEffect(() => {
            if (selectedColorOption != null) {
                dispatch(newMarketingActions.setColorOption(selectedColorOption));
            }
        }, [selectedColorOption]);

        return (
            <div className="new-marketing-page__brandinfo page">
                <NavBar.Top cur={3} max={5} />
                <Heading title={"상품, 브랜드 이름을 입력해주세요"} subtitle={["판매 하시려는 상품의 이름 또는", "브랜드명을 입력해주세요"]} />

                <Label>브랜드 이름을 입력해주세요</Label>
                <Input.Text id="brandNameInput" placeholder="예) placeholder"></Input.Text>

                <Label>
                    <span>상품에 대한 간단한 설명을 입력해 주세요</span>
                    <span>(100 자 이내)</span>
                </Label>
                <Input.TextArea id="brandInfoInput" placeholder="예) placeholder"></Input.TextArea>

                <Label>무드</Label>

                <MoodContext.Provider value={{ selectedItem: selectedMoodOption, setSelectedItem: setSelectedMoodOption }}>
                    <DropDown.Container name="color" context={MoodContext}>
                        <DropDown.Item name="color">다채롭게</DropDown.Item>
                        <DropDown.Item name="color">보통</DropDown.Item>
                        <DropDown.Item name="color">단조롭게</DropDown.Item>
                    </DropDown.Container>
                </MoodContext.Provider>

                <Label>컬러</Label>

                <ColorContext.Provider value={{ selectedItem: selectedColorOption, setSelectedItem: setSelectedColorOption }}>
                    <DropDown.Container context={ColorContext}>
                        <DropDown.Item>진하게</DropDown.Item>
                        <DropDown.Item>보통</DropDown.Item>
                        <DropDown.Item>연하게</DropDown.Item>
                    </DropDown.Container>
                </ColorContext.Provider>
            </div>
        );
    },
    Image: () => {
        const fileInput = useRef();

        return (
            <div className="new-marketing-page__image page">
                <NavBar.Top cur={4} max={5} />
                <Heading title={"이미지를 업로드 해주세요"} subtitle={["판매 하시려는 상품이 잘 보이게", "사진을 업로드 해주세요"]} />
                <ButtonPlaceHolder
                    icon={faCloudArrowUp}
                    iconSize="xl"
                    text={"파일 업로드"}
                    onClick={() => fileInput.current.click()}
                ></ButtonPlaceHolder>
                <input style={{ display: "none" }} ref={fileInput} type="file" className="input__image" accept="image/*" multiple />
            </div>
        );
    },
};
