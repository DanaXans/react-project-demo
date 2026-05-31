import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {AuthResourcesPage} from "../pages/AuthResourcesPage.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";

export const routes=createBrowserRouter([//створюємо маршрути
    {path:'/',element:<MainLayout/>,children:[//маршрут "Mainlayout" відповідає за відображення "Menu" та дочірніх елементів
            {index:true,element:<HomePage/>},//"index:true" означає, що після оновлення сторінки користувач буде знаходитися на "HomePage"
            {path:'login',element:<LoginPage/>},//"LoginPage" сторінка, де потенційно може знаходитися форма для логіну
            {path:'/auth/resources',element:<AuthResourcesPage/>}//Шлях /auth/resources у разі успішної логінації відобразить на сторінці/консолі елементи, що належать авторизованому клієнту
        ]}
])