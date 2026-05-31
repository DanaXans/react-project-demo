import {useEffect} from "react";
import {login} from "../services/api.service.ts";


export const LoginPage = () => {//Створення компонента. Він буде відображати сторінку входу
    useEffect(() => {
        login({//виклик функції login(), в яку передаємо обь'ект с данними користувача
            username:'emilys',//логін користувача
            password:'emilyspass',//пароль користувача
            expiresInMins:1//кількість часу, протягом якого логінація активна
        })
            .then(response=> console.log(response))//отримуємо відповідь з сервера і виводимо її у консоль
    }, []);//виконати useEffect тільки один раз після першого рендера компонента
    return (
        <>
            login page
        </>
    );
};