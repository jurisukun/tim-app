import { LoginCheck } from "./LoginPage/loginPage";
import Home from "./Dashboard/Home";
import HomeProfile from "./ProfilePage/HomeProfile";
import NotFoundPage from "./Components/NotFoundPage";
import Content from "../src/Components/Content";
import Current from "../src/Components/Current/Case";
import Itinerary from "./Components/Itinerary/Itinerary";
import Contract from "./Components/Contract/Contract";
import DailyTracker from "./Components/Profile/DailyTracker";
import EventCalendar from "./Components/Event/EventCalendar";
import TaskCalendar from "./Components/Task/TaskCalendar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginCheck />,
  },
  {
    path: "/dashboard",
    element: <Home />,
    children: [
      {
        path: "",
        element: <Current />,
      },
      {
        path: "client",
        element: <Content />,
      },
      {
        path: "contract",
        element: <Contract />,
      },
      {
        path: "itinerary",
        element: <Itinerary />,
      },
      {
        path: "daily",
        element: <DailyTracker />,
      },
      {
        path: "event",
        element: <EventCalendar />,
      },
      {
        path: "task",
        element: <TaskCalendar />,
      },
    ],
  },
  {
    path: "client/profile",
    element: <HomeProfile />,
  },
  {
    errorElement: <NotFoundPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
