import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CardContainer from "./Components/CardContainer";
import LiveVideos from "./Components/LiveVideos";
import SearchedVideos from "./Components/SearchedVideos";
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
      {
        path: "results",
        element: <SearchedVideos />,
      },
      {
        path: "live",
        element: <LiveVideos />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
