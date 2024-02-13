import { LoginCheck } from "./LoginPage/loginPage";
import Home from "./Dashboard/Home";
import HomeProfile from "./ProfilePage/HomeProfile";
import NotFoundPage from "./Components/NotFoundPage";
import ErrorPage from "./Components/ErrorPage";
import Content from "../src/Components/Content";
import Current from "../src/Components/Current/Case";
import Itinerary from "./Components/Itinerary/Itinerary";
import Contract from "./Components/Contract/Contract";

import EventCalendar from "./Components/Event/EventCalendar";

import DailyTracker from "./Components/Profile/DailyTracker";
import EmailTemplate from "./Components/Profile/emailTemplate";
import Billing from "./Components/Profile/Billing";
import Tasks from "./Components/Profile/Tasks";

import CheckAuth from "./CheckAuth/CheckAuth";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Forms from "./Components/Profile/Forms";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginCheck />,
  },
  {
    path: "/dashboard",
    element: (
      <CheckAuth>
        <Home />
      </CheckAuth>
    ),
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
    element: (
      <CheckAuth>
        <HomeProfile />,
      </CheckAuth>
    ),
  },
  {
    path: "client/:id/profile",
    element: <HomeProfile />,

    children: [
      {
        index: true,
        loader: () => {
          return (window.location.href = "/client/:id/profile/daily-tracker");
        },
      },
      {
        path: "daily-tracker",
        element: <DailyTracker />,
      },
      {
        path: "email",
        exact: true,
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
    path: "*",
    element: <NotFoundPage />,
  },

  {
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} errorElement={<ErrorPage />} />
    </>
  );
}

export default App;
