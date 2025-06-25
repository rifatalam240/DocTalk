import React from "react";
import { createBrowserRouter } from "react-router";
import DoctorsProvider from "../context/DoctorsProvider";

import Root from "../Root/Root";
import Footer from "../components/Footer";
import Bannercontainer from "../components/bannercontainer/Bannercontainer";
import DoctorsDetails from "../components/DoctorsDetails";
import Blogs from "../components/Blogs";
import Errorpage from "../components/Errorpage";
import Contact from "../components/Contact";
import Booking from "../components/Booking";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: () => (
      <DoctorsProvider>
        <Root />
      </DoctorsProvider>
    ),
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        path: "/",
        Component: Bannercontainer,
      },
      { path: "/footer", Component: Footer },
      {
        path: "/doctordetail/:id",
        Component: DoctorsDetails,
      },
      { path: "/blog", Component: Blogs },
      { path: "/contact", Component: Contact },
      { path: "/booking", Component: Booking },
    ],
  },
]);


