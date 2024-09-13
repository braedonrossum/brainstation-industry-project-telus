import "./CustomerSupport.scss";
import CloseIcon from "../../assets/close-24px.svg";
import Button from "../Button/Button";


const CustomerSupport = ({ setIsOpen }) => {

return (
    <div className="wrapper" onClick={() => setIsOpen(false)}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__inner">
            <button
                className="modal__popup-button"
                onClick={() => setIsOpen(false)}
            >
            <img
                className="modal__close-icon"
                src={CloseIcon}
                alt="close icon"
            />
            </button>
            <div className="modal__buttons">
            <div className="modal__button-group">
                <Button
                    className="modal__button"
                    onClick={() => setIsOpen(false)}
                >
                Customer Support
                </Button>

                <Button
                    className="modal__button"
                    onClick={() => setIsOpen(false)}
                >
                Forums
                </Button>

                <Button
                    className="modal__button"
                    onClick={() => setIsOpen(false)}
                >
                Contact us
                </Button>
            </div>

            <Button className="modal__button modal__button--last" onClick={() => setIsOpen(false)}>
                Call: 1 800 TELUS
            </Button>
            </div>
        </div>
        </div>
    </div>
);
};

export default CustomerSupport;
