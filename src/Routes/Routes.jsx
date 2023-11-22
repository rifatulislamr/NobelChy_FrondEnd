import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ArticlesDetails from "../components/ArticlesDetails/ArticlesDetails";
import PoliticalPostDetails from "../components/PoliticalPostDetails/PoliticalPostDetails";
import RecentPostDetails from "../components/RecentPostDetails/RecentPostDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/recent-news/:id",
        element: <RecentPostDetails></RecentPostDetails>,
      },
      {
        path: "/political-news/:id",
        element: <PoliticalPostDetails></PoliticalPostDetails>,
      },
      {
        path: "/all-articles/:id",
        element: <ArticlesDetails></ArticlesDetails>,
      },
    ],
  },
]);
