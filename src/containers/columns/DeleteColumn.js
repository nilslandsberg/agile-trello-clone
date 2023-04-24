
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { ColumnIndexContext } from "../columns/RenderColumns";
import { fetchBoardByIdAction } from "../../features/boardByIdSlice";
import { deleteColumnAction } from "../../features/columnsSlice";
import { OverlayTrigger, Tooltip } from "react-bootstrap";


const DeleteColumn = () => {
  const board = useSelector((state) => state.boardById.board);
  const columns = board.columnInfo;

  const columnIndex = useContext(ColumnIndexContext);
 
  // delete icon action description
  const deleteColumnTooltip = (
    <Tooltip id="delete-column-tooltip">
      Delete Column
    </Tooltip>
  );

  const dispatch = useDispatch();

  const handleClick = async (index) => {
    const columnId = columns[columnIndex]._id;
 
    await dispatch(deleteColumnAction(columnId));
    await dispatch(fetchBoardByIdAction(board._id));
  }

  return (
    <>
      <OverlayTrigger placement="top" overlay={deleteColumnTooltip}>
        <FontAwesomeIcon onClick={() => handleClick(columnIndex)} icon={faTrashCan} />
      </OverlayTrigger>
    </>
  )
}

export default DeleteColumn;