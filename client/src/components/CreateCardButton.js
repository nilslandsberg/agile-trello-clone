import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux";
import CreateCardModal from "../containers/CreateCardModal";
import { setColumnIndex } from "../features/columnInfoSlice";
import { setSecondModalOpen } from "../features/modalOpenSlice";


const CreateCardButton = (columnIndex) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const index = columnIndex.columnIndex;
    console.log(index);
    dispatch(setColumnIndex(index));
    dispatch(setSecondModalOpen());
  }

  return (
  <>
    <Button variant="light" size="sm" onClick={() => handleClick()}>+ Add New Card</Button>
    <CreateCardModal />
  </>
  )
}

export default CreateCardButton;