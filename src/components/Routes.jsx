import { createBrowserRouter } from "react-router-dom";
import AddToys from "./AddToys";
import AllToys from "./AllToys";
import Blog from "./Blog";
import Edit from "./Edit";
import Error from "./Error";
import Home from "./Home";
import Login from "./Login";
import Main from "./Main";
import MyToys from "./MyToys";
import PrivateRouter from "./PrivateRouter";
import Register from "./Register";
import SingleDetails from "./SingleDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error></Error>,
        _children: [
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
                element: <PrivateRouter><AddToys/></PrivateRouter>
            },
            
            {
                path: '/reg',
                element: <Register></Register>
            },
            {
                path: '/singleData/:id',
                element: <SingleDetails />,
                loader: ({ params }) => fetch(`https://dolls-toy-server-three.vercel.app/addtoys/${params.id}`)
            },
            {
                path: '/alltoys',
                element: <AllToys></AllToys>,
                loader: () => fetch('https://dolls-toy-server-three.vercel.app/addtoys')
            },
            {
                path: '/mytoys',
                element: <PrivateRouter><MyToys /></PrivateRouter>
            },
            {
                path:'/edit/:id',
                element:<Edit/>,
                loader:({params})=>fetch(`https://dolls-toy-server-three.vercel.app/addtoys/${params.id}`)
            },
            {
                path: 'blogs',
                element: <Blog></Blog>
            },
        ],
        get children() {
            return this._children;
        },
        set children(value) {
            this._children = value;
        },
    },

])
export default router;