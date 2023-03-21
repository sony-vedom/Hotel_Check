import './App.css';
import Login from "./components/Login/Login";
import MainPage from "./components/MainPage/MainPage";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const App = () => {
    const routeResult = createBrowserRouter([
        {
            path: "/login", element: <Login/>,
        },
        {path: "/", element: <MainPage/>},
        {path: "*", element: <div>404 Not Found</div>},
    ])
    return (
        <div className="App">
            <RouterProvider router={routeResult} />
        </div>
    );
}

export default App;
