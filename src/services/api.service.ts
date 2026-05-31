import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens";
import {IProduct} from "../models/IProduct";
import {IBaseResponceModelType} from "../models/IBaseResponceModelType";
import {retrieveLocalStorage} from "./helpers";
import {ITokenPair} from "../models/ITokenPair";

const axiosInstance = axios.create({//створюємо власний екземпляр Axios із базовою URL-адресою
    baseURL: "https://dummyjson.com/auth",
    headers: {}
});

axiosInstance.interceptors.request.use((requestObject) => {//перехоплюємо запит перед його відправленням на сервер

    if (requestObject.method?.toUpperCase() === "GET") {//для get-запитів додаємо токен авторизації

        requestObject.headers.Authorization =
            "Bearer " +
            retrieveLocalStorage<IUserWithTokens>('user').accessToken;
    }
    return requestObject;//повертаємо змінений об'єкт запиту
});

type loginData = {//дані, необхідні для авторизації користувача
    username: string,
    password: string,
    expiresInMins: number
}

export const login = async (
    {username, password, expiresInMins}: loginData
): Promise<IUserWithTokens> => {
    //виконуємо запит на авторизацію
    const {data: userWithTokens} =
        await axiosInstance.post<IUserWithTokens>(
            '/login',
            {
                username,
                password,
                expiresInMins
            }
        );
    localStorage.setItem(
        "user",
        JSON.stringify(userWithTokens)//зберігаємо користувача та токени в localStorage
    );
    return userWithTokens;//повертаємо отримані дані користувача
}

export const loadAuthProducts = async (): Promise<IProduct[]> => {//отримуємо список товарів для авторизованого користувача
    const {data} =
        await axiosInstance.get<IBaseResponceModelType>(
            '/products'
        );
    return data.products;//повертаємо масив товарів
}

export const refresh = async () => {
    const iUserWithTokens =
        retrieveLocalStorage<IUserWithTokens>('user');//отримуємо поточного користувача з localStorage
    const {
        //надсилаємо refreshToken для отримання нових токенів
        data: {accessToken, refreshToken}
    } = await axiosInstance.post<ITokenPair>(
        '/refresh',
        {
            refreshToken: iUserWithTokens.refreshToken,
            expiresInMins: 1
        }
    );
    console.log(accessToken);//виводимо нові токени в консоль
    console.log(refreshToken);
    iUserWithTokens.accessToken = accessToken;//оновлюємо токени в об'єкті користувача
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem(//зберігаємо оновлені дані в localStorage
        "user",
        JSON.stringify(iUserWithTokens)
    );
}