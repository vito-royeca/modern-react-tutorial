import Button
 from "./Button";
const Modal = ({ isOpen, rating, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Thank you for your feedback!</h2>
                <p>Your rating is {rating} star{rating > 1 ? 's' : ''}</p>
                <Button
                    className="close-btn"
                    onClick={onClose}
                >
                    Close
                </Button>
            </div>
        </div>
    )
}

export default Modal;