import { LoginCheck } from "./LoginPage/loginPage";
import Home from "./Dashboard/Home";
import HomeProfile from "./ProfilePage/HomeProfile";
import NotFoundPage from "./Components/NotFoundPage";
import ErrorPage from "./Components/ErrorPage";
import MainContainer from "./Components/MainContainer";
import Calendar from "../src/Components/Calendar/Calendar";
import Itinerary from "./Components/Itinerary/Itinerary";
import Contract from "./Components/Contract/Contract";

import DailyTracker from "./Components/Profile/DailyTracker";
import EmailTemplate from "./Components/Profile/Email";
import Billing from "./Components/Profile/Billing";
import Tasks from "./Components/Profile/Tasks";
import CurrentCase from "./Components/Current/Case";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Forms from "./Components/Profile/Forms";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AuthProvider } from "./utils/context/authcontext";

import { ThemeProvider } from "./theme-provider";
import SocketContext from "./utils/context/Socketcontext";
import UserProfile from "./MyProfile/UserProfile";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginCheck />,
  },

  {
    path: "/",
    loader: () => {
      return (window.location.href = `/dashboard`);
    },
  },
  {
    path: "/dashboard",
    element: <Home />,
    children: [
      {
        path: "",
        element: <CurrentCase />,
      },
      {
        path: "my-profile",
        element: <UserProfile />,
      },
      {
        path: "client",
        element: <MainContainer />,
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
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "dailytracker",
        element: <DailyTracker />,
      },
    ],
  },
  {
    path: "client/:clientId/profile",
    element: <HomeProfile />,

    children: [
      {
        index: true,
        loader: ({ params }) => {
          return (window.location.href = `/client/${params.clientId}/profile/dailytracker`);
        },
      },
      {
        path: "dailytracker",
        element: <DailyTracker />,
      },
      {
        path: "email",
        exact: true,
        element: <EmailTemplate />,
      },
      {
        path: "tasks",
        element: (
          // <CheckAuth>
          <Tasks />
          //</CheckAuth>
        ),
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
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={router} errorElement={<ErrorPage />} />
          </ThemeProvider>
        </QueryClientProvider>
      </AuthProvider>
    </>
  );
}

export default App;
