import React, { useEffect, useLayoutEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { NewMarketingPage } from "./pages/NewMarketingPage";
import { GetStartedPage } from "./pages/GetStartedPage";
import { MyMarketingPage } from "./pages/MyMarketingPage";
import { DetailPage } from "./pages/DetailPage";
import { SettingsPage } from "./pages/SettingsPage";
import { ResultPage } from "./pages/ResultPage";
import { PageNotFound, UnAuthorizedPage, WrongAccessPage } from "./pages/404";
import { useSelector } from "react-redux";

function App() {
    const navigate = useNavigate();
    const location = useLocation();

    const { token } = useSelector((state) => state.auth);

    useEffect(() => {
        console.log(location.pathname);
        if (token.data == null) {
            if (location.pathname.startsWith("/new-marketing")) navigate("/wrongaccess");
        }
    }, [location.pathname]);

    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>

            <Route path="/get-started/login" element={<GetStartedPage.Login />}></Route>
            <Route path="/get-started/login-redirect" element={<GetStartedPage.LoginRedirect />}></Route>
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
                <Route path="/new-marketing/loading" element={<NewMarketingPage.Loading />}></Route>
            </Route>

            <Route path="/result/:id" element={<ResultPage />}></Route>

            <Route path="/settings" element={<SettingsPage />}></Route>

            <Route path="/unauthorized" element={<UnAuthorizedPage />}></Route>
            <Route path="/wrongaccess" element={<WrongAccessPage />}></Route>

            <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
    );
}

export default App;
