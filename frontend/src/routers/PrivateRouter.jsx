import Register from "../screens/register/Register";


const routes = [
  {
    children: [
      {
        path: "/",
        element: <Register />,
      },
      {
        path: "404",
        element: <div>404</div>,
      },
    ],
  },
];

export default routes;
