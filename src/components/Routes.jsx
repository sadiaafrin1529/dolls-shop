import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import Home from "./Home";
import AddToys from "./AddToys";
import Blog from "./Blog";
import Error from "./Error";
import Register from "./Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement:<Error></Error>,
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
                path:'addtoys',
                element:<AddToys/>
            },
            {
              path:'blogs',
              element:<Blog></Blog>
            },
            {
                path:'/reg',
                element:<Register></Register>
            },
           
        ]
    },
    
])
export default router;