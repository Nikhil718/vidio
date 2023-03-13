import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CardContainer from "./Components/CardContainer";
import History from "./Components/History";
import LiveVideos from "./Components/LiveVideos";
import SearchedVideos from "./Components/SearchedVideos";
import WatchPage from "./Components/WatchPage";
import Body from "./Layout/Body";

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
      {
        path: "history",
        element: <History />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App font-roboto">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
