import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CardContainer from "./Components/CardContainer";
import WatchPage from "./Components/WatchPage";
import Body from "./Layout/Body";
import Header from "./Layout/Header";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <CardContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
