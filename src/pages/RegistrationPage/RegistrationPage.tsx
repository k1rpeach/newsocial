import { Link } from "react-router-dom"
import { LoginWith } from "../../components/LoginWith/LoginWith"
import { AppHeading } from "../../components/Typography/AppHeading"
import { AppButton } from "../../components/UI/AppButton/AppButton"
import { AppInput } from "../../components/UI/AppInput/AppInput"
import { SCLoginPage, SCRegistration } from "../LoginPage/LoginPage.styled"

export const RegistrationPage = () => {
    return(
        <SCLoginPage>
      <AppHeading headingText="Регистрация" headingType={"h1"}/>
      
      <form action="#">
        <AppInput inputType={"text"} inputPlaceholder={"Введите имя"}/>
        <AppInput inputType={"email"} inputPlaceholder={"Почта"}/>
        <AppInput inputType={"tel"} inputPlaceholder={"Номер телефона"}/>
        <AppInput inputType={"password"} inputPlaceholder={"Пароль"}/>
        <AppInput inputType={"text"} inputPlaceholder={"Город"}/>
        
        <AppButton buttonText={"Зарегистрироваться"}/>
        
      </form>
      
      <SCRegistration>
        <span>
          Уже есть аккаунт? <Link to="/">Войти</Link>
        </span>
        <p>Регистрация с помощью</p>
        <LoginWith/>
        
      </SCRegistration>
    </SCLoginPage>
    )
}