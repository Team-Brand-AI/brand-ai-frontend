import { Button } from "./Button";

import "./Modal.scss";

export const Modal = ({ btnTypeLeft, btnTextLeft, btnTypeRight, btnTextRight, onClickLeft, onClickRight, title, subtitle }) => {
    return (
        <>
            <div className="modal-wrapper">
                <div className="modal-container">
                    <div className="modal-item">
                        <h2>{title}</h2>
                        <h4>{subtitle}</h4>
                        <div className="modal-item__btn-container">
                            {btnTypeLeft && (
                                <Button type={btnTypeLeft} onClick={() => onClickLeft()}>
                                    {btnTextLeft}
                                </Button>
                            )}
                            {btnTypeRight && (
                                <Button type={btnTypeRight} onClick={() => onClickRight()}>
                                    {btnTextRight}
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
