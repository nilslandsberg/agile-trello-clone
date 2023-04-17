import { useContext } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchColumnsAction } from "../features/columnsSlice";
import { setCardDetailModalClosed } from "../features/modalOpenSlice";
import { BoardIdContext } from "./BoardView";
import CardTextChange from "./CardTextChange";
import CardTitleChange from "./CardTitleChange";
import RenderCardComments from "./RenderCardComments";


const CardDetailModal = () => {
  const isOpen = useSelector((state) => state.isModalOpen.cardDetailOpen);
  const boardId = useContext(BoardIdContext);

  const dispatch = useDispatch();

  const handleModalClose = async () => {
    await dispatch(fetchColumnsAction(boardId))
    dispatch(setCardDetailModalClosed());
  }

  return (
    <Modal show={isOpen} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <CardTitleChange />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CardTextChange />
        <hr className="board-divider" />
        <RenderCardComments />
      </Modal.Body>
    </Modal>
  )
}

export default CardDetailModal;