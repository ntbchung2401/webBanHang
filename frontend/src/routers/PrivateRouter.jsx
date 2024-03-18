import Navbar from "../components/Navbar/Navbar";
import Homepage from "../screens/home/Homepage";


const routes = [
  {
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "404",
        element: <div>404</div>,
      },
    ],
  },
];

export default routes;
