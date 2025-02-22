import { Link } from "react-router-dom";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { LoginWith } from "../../components/LoginWith/LoginWith";
import { AppHeading } from "../../components/Typography/AppHeading/AppHeading";
import { SCLoginPage } from "./LoginPage.styled";

export const LoginPage = () => {
  return (
    <SCLoginPage>
      <AppHeading headingText={"Авторизация"} headingType={"h1"} />
      <form action="#">
        <AppInput inputType={"tel"} inputPlaceholder={"Номер телефона"} />
        <AppInput inputType={"password"} inputPlaceholder={"Пароль"} />
        <Link to={"/main"}>
          <AppButton buttonText={"Войти"} />
        </Link>
      </form>
      <Link to="#">Забыли пароль?</Link>
      <div className="registration">
        <span>
          У вас нет аккаунта? <Link to="/registration">Зарегистрироваться</Link>
        </span>
        <p>Войти с помощью</p>
        <LoginWith />
      </div>
    </SCLoginPage>
  );
};
