import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button } from "../components/Button";

import "./404.scss";

export const PageNotFound = () => {
    const navigate = useNavigate();
    const { token } = useSelector((state) => state.auth);

    return (
        <div className="page-not-found page">
            <div className="page-not-found-container">
                <div className="page-not-found-heading">
                    <h1>404</h1>
                    <h2>Not Found</h2>
                </div>

                <div className="page-not-found-text">
                    <h3>존재하지 않는 페이지이거나</h3>
                    <h3>잘못된 접근입니다</h3>
                </div>

                {token.data != null ? (
                    <Button styles={{ backgroundColor: "#ff5252" }} type="rounded" width="min(50%, 300px)" onClick={() => navigate("/my-marketing")}>
                        내 마케팅 리스트로 돌아가기
                    </Button>
                ) : (
                    <Button styles={{ backgroundColor: "#ff5252" }} type="rounded" width="min(50%, 300px)" onClick={() => navigate("/")}>
                        홈 페이지로 돌아가기
                    </Button>
                )}
            </div>
        </div>
    );
};
