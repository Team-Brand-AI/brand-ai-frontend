import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { NavBar } from "../components/NavBar";
import { Heading } from "../components/Heading";
import { Grid } from "../components/Grid";
import { Label } from "../components/Label";
import { Input, DropDown } from "../components/Forms";
import { HashTag } from "../components/HashTag";
import { Button, ButtonGroup, ButtonPlaceHolder } from "../components/Button";
import { LoadingIcon } from "../components/Loading";
import { Modal } from "../components/Modal";

import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

import category from "@assets/category.json";
import subcategory from "@assets/subcategory.json";

import { CategoryContext, SubCategoryContext } from "../context/CategoryContext";
import { MoodContext, ColorContext } from "../context/OptionContext";

import { base64_identifier } from "../utils/base64";

import { newMarketingActions } from "../store/new-marketing-slice.js";
import { NewCardFetchThunk, NewDescriptionFetchThunk, NewLogoFetchThunk } from "../store/generated-assets-slice";

import "./NewMarketingPage.scss";
import { FetchDirectUploadURL } from "../store/image-slice";

export const NewMarketingPage = {
    Category: () => {
        const navigate = useNavigate();
        const [modal, setModal] = useState(false);
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
                <NavBar.Close onCloseClick={() => setModal((modal) => true)} />

                {modal && (
                    <Modal
                        title="정말로 그만두시겠습니까?"
                        subtitle="기존에 입력했던 정보는 저장되지 않습니다"
                        btnTypeLeft="primary"
                        btnTextLeft="계속하기"
                        onClickLeft={() => setModal((modal) => false)}
                        btnTypeRight="secondary"
                        btnTextRight="그만두기"
                        onClickRight={() => navigate("/my-marketing")}
                    ></Modal>
                )}

                <Heading title={"카테고리를 선택해 주세요"} subtitle={["판매 하시려는 상품과 관련된 카테고리를", "선택해 주세요"]} />

                <div className="page-category__grid">
                    <CategoryContext.Provider value={{ selectedItem: selectedCategory, setSelectedItem: setSelectedCategory }}>
                        <Grid.Container context={CategoryContext} width={"min(100%, 600px)"}>
                            {category &&
                                category.map((element, index) => {
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

                <ButtonGroup prevPath={"/"} nextPath={"/new-marketing/subcategory"}></ButtonGroup>
            </main>
        );
    },
    SubCategory: () => {
        const navigate = useNavigate();
        const [modal, setModal] = useState(false);

        const { category } = useSelector((state) => state.newMarketing);
        const dispatch = useDispatch();
        const [selectedSubCategory, setSelectedSubCategory] = useState(null);

        useEffect(() => {
            if (selectedSubCategory != null) {
                dispatch(
                    newMarketingActions.setSubCategory({
                        kr: subcategory[category.en][selectedSubCategory]["name_kr"],
                        en: subcategory[category.en][selectedSubCategory]["name_en"],
                    })
                );
            }
        }, [selectedSubCategory]);

        return (
            <main className="new-marketing-page__subcategory page">
                <NavBar.Top cur={1} max={5} />

                <NavBar.Close onCloseClick={() => setModal((modal) => true)} />

                {modal && (
                    <Modal
                        title="정말로 그만두시겠습니까?"
                        subtitle="기존에 입력했던 정보는 저장되지 않습니다"
                        btnTypeLeft="primary"
                        btnTextLeft="계속하기"
                        onClickLeft={() => setModal((modal) => false)}
                        btnTypeRight="secondary"
                        btnTextRight="그만두기"
                        onClickRight={() => navigate("/my-marketing")}
                    ></Modal>
                )}

                <Heading title={"하위 카테고리를 선택해 주세요"} subtitle={["판매 하시려는 상품과 관련된 카테고리를", "선택해 주세요"]} />

                <SubCategoryContext.Provider value={{ selectedItem: selectedSubCategory, setSelectedItem: setSelectedSubCategory }}>
                    <Grid.Container context={SubCategoryContext} width={"min(100%, 600px)"}>
                        {subcategory[category.en] &&
                            subcategory[category.en].map((element, index) => {
                                return <Grid.Item key={index} text={element["name_kr"]} size={"150px"}></Grid.Item>;
                            })}
                    </Grid.Container>
                </SubCategoryContext.Provider>

                <ButtonGroup prevPath={"/new-marketing/category"} nextPath={"/new-marketing/hashtag"}></ButtonGroup>
            </main>
        );
    },
    HashTag: () => {
        const navigate = useNavigate();
        const [modal, setModal] = useState(false);

        const dispatch = useDispatch();
        const { hashtags } = useSelector((state) => state.newMarketing);

        return (
            <main className="new-marketing-page__hashtag page">
                <NavBar.Top cur={2} max={5} />

                <NavBar.Close onCloseClick={() => setModal((modal) => true)} />

                {modal && (
                    <Modal
                        title="정말로 그만두시겠습니까?"
                        subtitle="기존에 입력했던 정보는 저장되지 않습니다"
                        btnTypeLeft="primary"
                        btnTextLeft="계속하기"
                        onClickLeft={() => setModal((modal) => false)}
                        btnTypeRight="secondary"
                        btnTextRight="그만두기"
                        onClickRight={() => navigate("/my-marketing")}
                    ></Modal>
                )}

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

                <ButtonGroup prevPath={"/new-marketing/subcategory"} nextPath={"/new-marketing/brandinfo"}></ButtonGroup>
            </main>
        );
    },
    BrandInfo: () => {
        const navigate = useNavigate();
        const [modal, setModal] = useState(false);

        const dispatch = useDispatch();
        const [selectedMoodOption, setSelectedMoodOption] = useState({
            index: null,
            kr: null,
        });
        const [selectedColorOption, setSelectedColorOption] = useState({
            index: null,
            kr: null,
        });

        const onNextBtnClick = () => {
            dispatch(newMarketingActions.setBrandName(document.querySelector("#brandNameInput").value));
            dispatch(newMarketingActions.setBrandInfo(document.querySelector("#brandInfoInput").value));
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

                <NavBar.Close onCloseClick={() => setModal((modal) => true)} />

                {modal && (
                    <Modal
                        title="정말로 그만두시겠습니까?"
                        subtitle="기존에 입력했던 정보는 저장되지 않습니다"
                        btnTypeLeft="primary"
                        btnTextLeft="계속하기"
                        onClickLeft={() => setModal((modal) => false)}
                        btnTypeRight="secondary"
                        btnTextRight="그만두기"
                        onClickRight={() => navigate("/my-marketing")}
                    ></Modal>
                )}

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
                    <DropDown.Container name="mood" context={MoodContext}>
                        <DropDown.Item name="mood">다채롭게</DropDown.Item>
                        <DropDown.Item name="mood">보통</DropDown.Item>
                        <DropDown.Item name="mood">단조롭게</DropDown.Item>
                    </DropDown.Container>
                </MoodContext.Provider>

                <Label>컬러</Label>

                <ColorContext.Provider value={{ selectedItem: selectedColorOption, setSelectedItem: setSelectedColorOption }}>
                    <DropDown.Container name="color" context={ColorContext}>
                        <DropDown.Item name="color">진하게</DropDown.Item>
                        <DropDown.Item name="color">보통</DropDown.Item>
                        <DropDown.Item name="color">연하게</DropDown.Item>
                    </DropDown.Container>
                </ColorContext.Provider>

                <div style={{ height: "300px" }}></div>

                <ButtonGroup prevPath={"/new-marketing/hashtag"} nextPath={"/new-marketing/image"} onNextClick={() => onNextBtnClick()}></ButtonGroup>
            </div>
        );
    },

    Image: () => {
        const navigate = useNavigate();
        const [modal, setModal] = useState(false);

        const fileInput = useRef();
        const dispatch = useDispatch();
        const { brandImg } = useSelector((state) => state.newMarketing);
        const { directUploadURL } = useSelector((state) => state.image);

        useEffect(() => {
            dispatch(FetchDirectUploadURL());
        }, []);

        const onImageUpload = async (event) => {
            const form = new FormData();
            form.append("file", event.target.files[0]);

            const url = directUploadURL.url;
            const request = await fetch(url, {
                method: "POST",
                body: form,
            });

            request.json().then((result) => {
                dispatch(newMarketingActions.setBrandImage({ isUploaded: true, data: result.result.variants[0] }));
            });
        };

        const onImageDelete = () => {
            dispatch(newMarketingActions.setBrandImage({ isUploaded: false, data: null }));
            dispatch(FetchDirectUploadURL());
        };

        return (
            <div className="new-marketing-page__image page">
                <NavBar.Top cur={4} max={5} />

                <NavBar.Close onCloseClick={() => setModal((modal) => true)} />

                {modal && (
                    <Modal
                        title="정말로 그만두시겠습니까?"
                        subtitle="기존에 입력했던 정보는 저장되지 않습니다"
                        btnTypeLeft="primary"
                        btnTextLeft="계속하기"
                        onClickLeft={() => setModal((modal) => false)}
                        btnTypeRight="secondary"
                        btnTextRight="그만두기"
                        onClickRight={() => navigate("/my-marketing")}
                    ></Modal>
                )}

                <Heading title={"이미지를 업로드 해주세요"} subtitle={["판매 하시려는 상품이 잘 보이게", "사진을 업로드 해주세요"]} />

                {brandImg.isUploaded === false ? (
                    <>
                        <ButtonPlaceHolder
                            icon={faCloudArrowUp}
                            iconSize="xl"
                            text={"파일 업로드"}
                            onClick={() => fileInput.current.click()}
                        ></ButtonPlaceHolder>

                        <input
                            onChange={onImageUpload}
                            style={{ display: "none" }}
                            ref={fileInput}
                            type="file"
                            className="input__image"
                            accept="image/*"
                        />
                    </>
                ) : (
                    <>
                        <img src={brandImg.data} className="img-preview"></img>
                        <Button
                            onClick={onImageDelete}
                            type="danger"
                            width="min(100%, 600px)"
                            styles={{ margin: "20px auto", color: "white", backgroundColor: "#ff5252" }}
                        >
                            이미지 제거
                        </Button>
                    </>
                )}

                <ButtonGroup prevPath={"/new-marketing/brandinfo"} nextPath={"/new-marketing/loading"}></ButtonGroup>
            </div>
        );
    },

    Loading: () => {
        const navigate = useNavigate();
        const dispatch = useDispatch();
        const { brand, category, subcategory, hashtags, options, brandImg } = useSelector((state) => state.newMarketing);
        const { logo, description } = useSelector((state) => state.generatedAssets);
        const { token } = useSelector((state) => state.auth);

        const [loadingText, setLoadingText] = useState("로딩중 입니다");

        useEffect(() => {
            const data = {
                brandName: brand.name,
                category: {
                    parentCategory: category.en,
                    childCategory: subcategory.en,
                },
                hashtag: hashtags,
                option: {
                    mood: options.mood.en,
                    baseColor: options.color.en,
                },
                description: brand.info,
            };
            console.log(data);

            setLoadingText((loadingText) => "브랜드 로고 생성중...");
            // 로고 생성
            dispatch(NewLogoFetchThunk(data));
            // 설명 생성
            dispatch(NewDescriptionFetchThunk(data));
        }, []);

        useEffect(() => {
            // 카드 생성
            if (logo.state === "success") {
                setLoadingText((loadingText) => "브랜드 설명 생성중...");
            }

            if (logo.state === "success" && description.state == "success") {
                setLoadingText((loadingText) => "생성한 데이터 저장중");
                dispatch(
                    NewCardFetchThunk(token.data, {
                        description: description.data,
                        logoUrl1: logo.url[0],
                        logoUrl2: logo.url[1],
                        imagePath: brandImg.data,
                    })
                );
            }
            if (logo.state === "success" && description.state === "success" && token != null) {
                navigate("/my-marketing");
            }
        }, [logo.state, description.state, token.data]);

        return (
            <div className="new-marketing-page__loading page">
                <LoadingIcon></LoadingIcon>
                <h3>{loadingText}</h3>
                <h3>이 작업이 진행되는동안</h3>
                <h3>앱을 종료하지 마세요</h3>
            </div>
        );
    },
};
