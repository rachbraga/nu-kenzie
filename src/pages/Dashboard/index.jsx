import { useState, useEffect } from "react";
import Button from "../../components/buttons";
import Card from "../Card";
import MenuBar from "../MenuBar";
import ModalPost from "../../components/modalPost";
import ModalPut from "../../components/modalPut";
import { Container, DivMenu, DivTec } from "./styles";
import api from "../../services/api";

const Dashboard = ({ authenticated, setAuthenticated }) => {
  const [modalPost, setModalPost] = useState(false);
  const [modalPut, setModalPut] = useState(false);
  const [itemToChange, setItemToChange] = useState("");
  const [user] = useState(JSON.parse(localStorage.getItem("@kenzieHub:user")));
  const [techList, setTechList] = useState([]);

  const createTech = () => {
    setModalPost(true);
  };

  useEffect(() => {
    if (authenticated) {
      api
        .get(`https://kenziehub.herokuapp.com/users/${user.id}`)
        .then((response) => setTechList(response.data.techs))
        .catch((err) => console.log(err));
    }
  });

  return (
    <Container>
      <DivMenu>
        <MenuBar name="sair" path="/login" setAuthenticated={setAuthenticated}>
          {" "}
          Sair{" "}
        </MenuBar>
      </DivMenu>
      <hr />
      <section>
        <h1>Olá, {user.name}</h1>
        <p>{user.course_module}</p>
      </section>
      <hr />
      <nav>
        {modalPost && <ModalPost user={user} setModalPost={setModalPost} />}
        {modalPut && (
          <ModalPut setModalPut={setModalPut} itemToChange={itemToChange} />
        )}
        <h3>Tecnologias</h3>
        <Button className="add" onClick={createTech}>
          {" "}
          +{" "}
        </Button>
      </nav>
      <DivTec>
        {techList.map(({ title, status, id }) => (
          <Card
            key={id}
            setModalPut={setModalPut}
            itemToChange={id}
            setItemToChange={setItemToChange}
            title={title}
            status={status}
            id={id}
          />
        ))}
      </DivTec>
    </Container>
  );
};

export default Dashboard;
