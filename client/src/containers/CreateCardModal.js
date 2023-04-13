import CreateCardForm from "./CreateCardForm";
import { useDispatch, useSelector } from "react-redux";
import { setSecondModalClosed } from "../features/modalOpenSlice";
import { Modal } from "react-bootstrap";

  
const CreateCardModal = () => {
  const isOpen = useSelector((state) => state.isModalOpen.secondOpen);

  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(setSecondModalClosed());
  }
  return (
    <Modal show={isOpen} onHide={handleModalClose}>
      <Modal.Header closeButton>Create Card</Modal.Header>
      <Modal.Body>
        <CreateCardForm />
      </Modal.Body>
    </Modal>
  )
}

export default CreateCardModal;