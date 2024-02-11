import { LoginCheck } from "./LoginPage/loginPage";
import Home from "./Dashboard/Home";
import HomeProfile from "./ProfilePage/HomeProfile";
import NotFoundPage from "./Components/NotFoundPage";
import Content from "../src/Components/Content";
import Current from "../src/Components/Current/Case";
import Itinerary from "./Components/Itinerary/Itinerary";
import Contract from "./Components/Contract/Contract";

import EventCalendar from "./Components/Event/EventCalendar";
import TaskCalendar from "./Components/Task/TaskCalendar";

import DailyTracker from "./Components/Profile/DailyTracker";
import EmailTemplate from "./Components/Profile/emailTemplate";
import Billing from "./Components/Profile/Billing";
import Tasks from "./Components/Profile/Tasks";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Forms from "./Components/Profile/Forms";

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
        element: <Tasks />,
      },
    ],
  },

  {
    path: "client/profile",
    element: <HomeProfile />,
  },
  {
    path: "client/:id/profile",
    element: <HomeProfile />,

    children: [
      {
        path: "funeral-details",
        element: <DailyTracker />,
      },
      {
        path: "daily-tracker",
        element: <DailyTracker />,
      },
      {
        path: "email",
        element: <EmailTemplate />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "forms",
        element: <Forms />,
      },
      {
        path: "billing",
        element: <Billing />,
      },
    ],
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
