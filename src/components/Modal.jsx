import { Button } from "./Button";

import "./Modal.scss";

export const Modal = ({ btnTypeLeft, btnTextLeft, btnTypeRight, btnTextRight, onClickLeft, onClickRight, text }) => {
    return (
        <>
            <div className="modal-wrapper">
                <div className="modal-container">
                    <div className="modal-item">
                        <h2>{text}</h2>
                        <div className="modal-item__btn-container">
                            <Button type={btnTypeLeft} onClick={() => onClickLeft()}>
                                {btnTextLeft}
                            </Button>
                            <Button type={btnTypeRight} onClick={() => onClickRight()}>
                                {btnTextRight}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
