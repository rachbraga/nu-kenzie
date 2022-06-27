import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnimationContainer, Container, Content, DivMenu } from "./style";
import Input from "../../components/inputs";
import Button from "../../components/buttons";
import MenuBar from "../MenuBar";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Select from "../../components/select";

const Singup = ({ authenticated }) => {
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório!"),
    email: yup.string().email("Email inválido").required("Campo Obrigatório!"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 digitos")
      .required("Campo Obrigatório!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo Obrigatório!"),
    contact: yup.string().required("Campo Obrigatório!"),
    bio: yup.string().required("Campo Obrigatório!"),
    course_module: yup.string().required("Campo Obrigatório!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = ({
    name,
    email,
    password,
    bio,
    contact,
    course_module,
  }) => {
    const user = { name, email, password, bio, contact, course_module };
    console.log(user);
    api
      .post("/users", user)
      .then((response) => {
        toast.success("Conta criada com sucesso!");
        return history.push("/login");
      })
      .catch((err) => toast.error("Ops!Algo deu errado."));
  };

  return (
    <Container>
      <Content>
        <DivMenu>
          <MenuBar path="/">Voltar</MenuBar>
        </DivMenu>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Crie sua conta</h1>
            <p> Rápido e grátis,vamos nessa</p>
            <Input
              register={register}
              type="text"
              name="name"
              label="Nome"
              placeholder="Digite aqui seu nome"
              error={errors.name?.message}
            />
            <Input
              register={register}
              type="email"
              name="email"
              label="Email"
              placeholder="DIgite aqui seu email"
              error={errors.email?.message}
            />
            <Input
              register={register}
              name="password"
              type="password"
              label="Senha"
              placeholder="Crie uma senha forte"
              error={errors.password?.message}
            />
            <Input
              register={register}
              type="password"
              name="passwordConfirm"
              label="Confirmar senha"
              placeholder="Confirme a senha"
              error={errors.passwordConfirm?.message}
            />
            <Input
              register={register}
              type="text"
              name="contact"
              label="Linkedin"
              placeholder="Coloque aqui a url do seu linkedin"
              error={errors.contact?.message}
            />
            <Input
              register={register}
              type="text"
              name="bio"
              label="Bio"
              placeholder="Escreva um pouco sobre você"
              error={errors.bio?.message}
            />

            <Select register={register} name="course_module">
              <option value="Primeiro módulo (Introdução ao Frontend)">
                {" "}
                Primeiro módulo (Introdução ao Frontend){" "}
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                {" "}
                Segundo módulo (Frontend Avançado){" "}
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                {" "}
                Terceiro módulo (Introdução ao Backend){" "}
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                {" "}
                Quarto módulo (Backend Avançado){" "}
              </option>
            </Select>

            <Button type="submit">Cadastrar</Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Singup;
