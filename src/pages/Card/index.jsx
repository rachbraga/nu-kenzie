import { toast } from "react-toastify";
import { ButtonsDiv, Container, DataDiv } from "./styles";
import api from "../../services/api";
import Button from "../../components/buttons";
import { BsTrash, BsPencil } from "react-icons/bs";

const Card = ({
  status,
  title,
  id,
  itemToChange,
  setItemToChange,
  setModalPut,
}) => {
  const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));

  const deleteItem = (buttonId) => {
    console.log(buttonId);
    api
      .delete(`/users/techs/${buttonId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Tecnologia deletada");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showModal = (event) => {
    localStorage.setItem("@kenzieHub:clickedItem", itemToChange);
    setModalPut(true);
  };

  return (
    <>
      {" "}
      <Container>
        <DataDiv>
          <h4>{title}</h4>
          <div>
            <p> {status}</p>
          </div>
        </DataDiv>
        <ButtonsDiv>
          <Button onClick={showModal} id={id}>
            <BsPencil />
          </Button>
          <Button onClick={() => deleteItem(itemToChange)} id={id}>
            <BsTrash />
          </Button>
        </ButtonsDiv>
      </Container>
    </>
  );
};

export default Card;
