import React from "react";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { NewMarketingPage } from "./pages/NewMarketingPage";
import { GetStartedPage } from "./pages/GetStartedPage";
import { MyMarketingPage } from "./pages/MyMarketingPage";
import { DetailPage } from "./pages/DetailPage";
import { SettingsPage } from "./pages/SettingsPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>

                <Route path="/get-started/login" element={<GetStartedPage.Login />}></Route>
                <Route path="/get-started/terms-of-use" element={<GetStartedPage.TermsOfUse />}></Route>
                <Route path="/get-started/personal-info" element={<GetStartedPage.PersonalInfo />}></Route>

                <Route path="/my-marketing" element={<MyMarketingPage />}></Route>
                <Route path="/my-marketing/:id" element={<DetailPage />}></Route>

                <Route path="/new-marketing">
                    <Route path="/new-marketing/category" element={<NewMarketingPage.Category />}></Route>
                    <Route path="/new-marketing/subcategory" element={<NewMarketingPage.SubCategory />}></Route>
                    <Route path="/new-marketing/hashtag" element={<NewMarketingPage.HashTag />}></Route>
                    <Route path="/new-marketing/brandinfo" element={<NewMarketingPage.BrandInfo />}></Route>
                    <Route path="/new-marketing/image" element={<NewMarketingPage.Image />}></Route>
                </Route>

                <Route path="/settings" element={<SettingsPage />}></Route>
            </Routes>
        </>
    );
}

export default App;
