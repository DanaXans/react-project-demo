import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.ts";

export const AuthResourcesPage = () => {

    useEffect(() => {
        loadAuthProducts()//завантажуємо список товарів для авторизованого користувача
            .then(products => {
                console.log(products);//виводимо отримані товари в консоль
            })
            .catch(reason => {//якщо виникла помилка, виводимо її в консоль
                console.log(reason);
                refresh()//оновлюємо токени доступу
                    //після успішного оновлення токенів
                    .then(() => loadAuthProducts())//повторно завантажуємо список товарів
                    .then(value => console.log(value));//виводимо отримані товари в консоль
            });
    }, []); //виконується один раз після монтування компонента
    return (
        <></>
    );
};