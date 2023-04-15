import { createBrowserRouter } from "react-router-dom";
import BasketPage from "../pages/BasketPage";
import HomePage from "../pages/HomePage";
import Root from "../pages/Root";
import SinglePage,{} from "../pages/SinglePage";
import TaggedPage from "../pages/TaggedPage";

const router = createBrowserRouter([
{
    path:"/",
    element:<Root/>,
    children:[
        {
            path:'/',
            element:<HomePage />,
            index:true
        },
        {
            path:'/single/:prod_id',
            element:<SinglePage />,
        },
        {
            path:'/tagged/:tag_id',
            element:<TaggedPage />,
        },
        {
            path:'/basket',
            element:<BasketPage />,
        }
    ]
}
]);

export default router;