import { useRef, useState } from "react";
import { NavBar } from "../components/NavBar";
import { Heading } from "../components/Heading";
import { Grid } from "../components/Grid";
import { Label } from "../components/Label";
import { Input, DropDown } from "../components/Forms";
import { HashTag } from "../components/HashTag";
import { ButtonPlaceHolder } from "../components/Button";

import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

import category from "@assets/category.json";
import subcategory from "@assets/subcategory.json";

import { CategoryContext, SubCategoryContext } from "../context/CategoryContext";

export const NewMarketingPage = {
    Category: () => {
        const [selectedCategory, setSelectedCategory] = useState(null);

        return (
            <main className="new-marketing-page__category page">
                <NavBar.Top cur={0} max={5} />
                <Heading title={"카테고리를 선택해 주세요"} subtitle={["판매 하시려는 상품과 관련된 카테고리를", "선택해 주세요"]} />

                <div className="page-category__grid">
                    <CategoryContext.Provider value={{ selectedItem: selectedCategory, setSelectedItem: setSelectedCategory }}>
                        <Grid.Container context={CategoryContext} width={"600px"}>
                            {category.map((element, index) => {
                                return (
                                    <Grid.Item
                                        key={index}
                                        icon={process.env.PUBLIC_URL + `/icons/${element["imgSrc"]}.png`}
                                        text={element["name_kr"]}
                                        size={"150px"}
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
        const [selectedSubCategory, setSelectedSubCategory] = useState(null);

        return (
            <div className="new-marketing-page__subcategory page">
                <NavBar.Top cur={1} max={5} />
                <Heading title={"하위 카테고리를 선택해 주세요"} subtitle={["판매 하시려는 상품과 관련된 카테고리를", "선택해 주세요"]} />

                <SubCategoryContext.Provider value={{ selectedItem: selectedSubCategory, setSelectedItem: setSelectedSubCategory }}>
                    <Grid.Container context={SubCategoryContext} width={"600px"}>
                        {subcategory["food"].map((element, index) => {
                            return <Grid.Item key={index} text={element["name_kr"]} size={"150px"}></Grid.Item>;
                        })}
                    </Grid.Container>
                </SubCategoryContext.Provider>
            </div>
        );
    },
    HashTag: () => {
        return (
            <div className="new-marketing-page__hashtag page">
                <NavBar.Top cur={2} max={5} />
                <Heading title={"해쉬태그를 추가해 주세요"} subtitle={["판매 하시려는 상품을 가장 잘 나타내주는", "해쉬태그를 추가해주세요"]} />

                <Label>해쉬태그 추가하기</Label>
                <Input.Text placeholder="예) placeholder"></Input.Text>

                <Label>추가된 해시태그</Label>

                <HashTag.Container>
                    <HashTag.Item>해시태그</HashTag.Item>
                    <HashTag.Item>긴 해시태그</HashTag.Item>
                    <HashTag.Item>조금 더 긴 해시태그</HashTag.Item>
                    <HashTag.Item>조금 더 많이 긴 해시태그</HashTag.Item>
                    <HashTag.Item>매우 매우 매우 매우 매우 긴 해시태그</HashTag.Item>
                </HashTag.Container>
            </div>
        );
    },
    BrandInfo: () => {
        return (
            <div className="new-marketing-page__brandinfo page">
                <NavBar.Top cur={3} max={5} />
                <Heading title={"상품, 브랜드 이름을 입력해주세요"} subtitle={["판매 하시려는 상품의 이름 또는", "브랜드명을 입력해주세요"]} />

                <Label>브랜드 이름을 입력해주세요</Label>
                <Input.Text placeholder="예) placeholder"></Input.Text>

                <Label>
                    <span>상품에 대한 간단한 설명을 입력해 주세요</span>
                    <span>(100 자 이내)</span>
                </Label>
                <Input.TextArea placeholder="예) placeholder"></Input.TextArea>

                {/* Context API 필요 */}
                <Label>옵션 1</Label>
                <DropDown.Container>
                    <DropDown.Item>DropDown Item 1</DropDown.Item>
                    <DropDown.Item>DropDown Item 2</DropDown.Item>
                    <DropDown.Item>DropDown Item 3</DropDown.Item>
                    <DropDown.Item>DropDown Item 4</DropDown.Item>
                </DropDown.Container>
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
