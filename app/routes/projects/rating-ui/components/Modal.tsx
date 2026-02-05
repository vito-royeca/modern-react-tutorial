import Button from "./Button";

type ModalProps = {
    isOpen: boolean;
    rating: number;
    onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({
    isOpen,
    rating,
    onClose
}) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Thank you for your feedback!</h2>
                <p className="text-sm text-gray-600">Your rating is {rating} star{rating > 1 ? 's' : ''}</p>
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