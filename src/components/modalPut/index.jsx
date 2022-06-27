import { Container } from "./styles";
import Button from "../buttons";
import Input from "../inputs";
import api from "../../services/api";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Select from "../select";

const ModalPut = ({ setModalPut }) => {
  const close = () => {
    return setModalPut(false);
  };
  const [token] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:token")) || ""
  );
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const itemToChange = localStorage.getItem("@kenzieHub:clickedItem");
    setModalPut(false);
    api
      .put(`/users/techs/${itemToChange}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Tecnologia atualizada");
      })
      .catch((err) => {
        toast.error("Ops!! Algo deu errado.");
      });
  };
  return (
    <>
      <Container>
        <div>
          <h4>Editar tecnologia</h4>
          <Button onClick={close}> x </Button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label> Selecionar status</label>
          <Select register={register} name="status">
            <option value="Iniciante"> Iniciante</option>
            <option value="Intermediário"> Intermediário</option>
            <option value="Avançado"> Avançado</option>
          </Select>

          <Button type="submit">Atualizar tecnologia</Button>
        </form>
      </Container>
    </>
  );
};

export default ModalPut;
