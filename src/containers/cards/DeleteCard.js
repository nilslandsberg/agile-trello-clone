import { useContext } from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { deleteCardAction } from "../../features/cardsSlice";
import { ColumnIndexContext } from "../columns/RenderColumns";
import { fetchBoardByIdAction } from "../../features/boardByIdSlice";


const DeleteCard = (cardIndex) => {
  const board = useSelector((state) => state.boardById.board);
  const columns = board.columnInfo;

  const columnIndex = useContext(ColumnIndexContext);
  const allBoardCardInfo = columns.map(card => card.cardInfo);
  const columnCards = allBoardCardInfo[columnIndex];
  
  
  const dispatch = useDispatch();

  const handleClick = async (index) => {
    const cardId = columnCards[index.cardIndex]._id;
    const requestBody = {
      cardId: cardId
    }
    
    await dispatch(deleteCardAction(requestBody));
    await dispatch(fetchBoardByIdAction(board._id));
  }

  // delete icon action description
  const deleteCardTooltip = (
    <Tooltip id="delete-card-tooltip">
      Delete Card
    </Tooltip>
  );

  return (
    <Card.Footer className="d-flex justify-content-end">
      <OverlayTrigger placement="top" overlay={deleteCardTooltip}>
        <FontAwesomeIcon onClick={() => handleClick(cardIndex)} icon={faTrashCan} />
      </OverlayTrigger>
    </Card.Footer>
  )
}

export default DeleteCard;