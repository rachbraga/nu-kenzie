import { ModalDiv } from "./styles";
import Button from "../buttons";
import Input from "../inputs";
import api from "../../services/api";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Select from "../select";

const ModalPost = ({ setModalPost }) => {
  const close = () => {
    return setModalPost(false);
  };

  const [token] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:token")) || ""
  );

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Tecnologia cadastrada");
        close();
      })
      .catch((err) => toast.error("Ops!! Algo deu errado."));
  };

  return (
    <>
      <ModalDiv>
        <div>
          <p>Cadastrar tecnologia</p>
          <Button onClick={close}> x </Button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register}
            name="title"
            placeholder="Digite aqui sua tecnologia"
            label="Nome"
          />
          <label> Selecionar status</label>
          <Select register={register} name="status">
            <option value="Iniciante"> Iniciante</option>
            <option value="Intermediário"> Intermediário</option>
            <option value="Avançado"> Avançado</option>
          </Select>
          <Button type="submit">Cadastrar tecnologia</Button>
        </form>
      </ModalDiv>
    </>
  );
};

export default ModalPost;
