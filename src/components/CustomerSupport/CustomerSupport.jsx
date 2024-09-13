import "./CustomerSupport.scss";
import CloseIcon from "../../assets/close-24px.svg";


const CustomerSupport = ({ setIsOpen }) => {

return (
    <div className="wrapper" onClick={() => setIsOpen(false)}>
        <div className="modal">
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
                <button
                    className="modal__button"
                    onClick={() => setIsOpen(false)}
                >
                Customer Support
                </button>

                <button
                    className="modal__button"
                    onClick={() => setIsOpen(false)}
                >
                Forums
                </button>

                <button
                    className="modal__button"
                    onClick={() => setIsOpen(false)}
                >
                Contact us
                </button>
            </div>

            <button className="modal__button modal__button--last" onClick={() => setIsOpen(false)}>
                Call: 1 800 TELUS
            </button>
            </div>
        </div>
        </div>
    </div>
);
};

export default CustomerSupport;
