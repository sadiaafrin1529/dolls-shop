import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import Home from "./Home";
import AddToys from "./AddToys";
import Blog from "./Blog";
import Error from "./Error";
import Register from "./Register";
import SingleDetails from "./SingleDetails";
import AllToys from "./AllToys";
import MyToys from "./MyToys";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home />

            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'addtoys',
                element: <AddToys />
            },
            {
                path: 'blogs',
                element: <Blog></Blog>
            },
            {
                path: '/reg',
                element: <Register></Register>
            },
            {
                path: '/singleData/:id',
                element: <SingleDetails />,
                loader:({params})=>fetch(`http://localhost:5000/addtoys/${params.id}`)
            },
            {
                path:'/alltoys',
                element:<AllToys></AllToys>,
                loader:()=>fetch('http://localhost:5000/addtoys')
                
            },
            {
                path:'/mytoys',
                element:<MyToys/>
            }


        ]
    },

])
export default router;