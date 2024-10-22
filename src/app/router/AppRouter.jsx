import { lazy,Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../layout";
import { appRoutes } from "../../shared/constants/constants";

const HomePage = lazy(() => import("../../pages/homePage/ui/HomePage"));
const CompanyPage = lazy(() => import("../../pages/company/ui/Company"));
const NewsPage = lazy(() => import("../../pages/news/ui/News"));
const ContactsPage = lazy(() => import("../../pages/contacts/ui/Contacts"));

















const router =                         createBrowserRouter([
  {
    element:                             <Layout />,
    errorElement: <div>Something went wrong</div>,
    children: [











      {
        path: appRoutes.home,
        element: <HomePage />,
      },
      {
        path: appRoutes.news,
        element: <NewsPage />,
      },
      {
        path: appRoutes.contacts,
        element: <ContactsPage />,
      },
      {
        path: appRoutes.company,
        element: <CompanyPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <Suspense fallback={<div>Loading...</div>}>
         <RouterProvider router={router} />
        </Suspense>;
};
