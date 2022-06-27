import { ButtonComponent } from "./styles";

const Button = ({ children, pinkSchema = false, ...rest }) => {
  return (
    <ButtonComponent pinkSchema={pinkSchema} type="button" {...rest}>
      {children}
    </ButtonComponent>
  );
};

export default Button;
