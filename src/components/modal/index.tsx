//@ts-ignore
import Modal from "react-modal";
import "./index.scss";

// Style
const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    width: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: 0,
    transform: "translate(-50%, -50%)",
    borderColor: "white",
    backgroundColor: "white",
  },
};

Modal.setAppElement("#root");

function ModalComponent({ children, isOpen, setIsOpen }: any) {
  /* ******************************** RENDERING ******************************* */
  return (
    <Modal
      overlayClassName="modal"
      bodyOpenClassName="disable-scroll"
      contentLabel="Example Modal"
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={modalStyle}
    >
      <div className="modal-content">
        <button
          type="button"
          className="close-modal"
          onClick={() => setIsOpen(false)}
        >
          X
        </button>
        {children}
      </div>
    </Modal>
  );
}

export default ModalComponent;
