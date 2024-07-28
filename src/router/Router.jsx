import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "../components/main/Main";
import { Errorpage } from "./Errorpage";
import { MainContent } from "../components/mainContent/MainContent";
import { Cards } from "../components/cards/Cards";
import { CardCreate } from "../components/cardCreate/CardCreate";
import { Exercices } from "../components/exercices/Exercices";
import { TranslateTest } from "../components/translateTest/TranslateTest";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Main/>,
        errorElement:<Errorpage/>,
        children:[
            {
                path:'/',
                element:<MainContent/>,
            },
            {
                path:'/cards',
                element:<Cards/>,
            },
            {
                path:'/cards/create',
                element:<CardCreate/>,
            },
            {
                path:'/exercices',
                element:<Exercices/>,
            },
            {
                path:'/exercices/translate',
                element:<TranslateTest/>
            }
        ]
    }
]);

export default function(){
    return(
        <>
            <RouterProvider router={router}/>
        </>
    );
}