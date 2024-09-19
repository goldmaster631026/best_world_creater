import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import React, {useEffect, Suspense } from "react";
import {
  NotFound,
  Loader,
  ScrollToTop,
  ProjectDetails,
  Navbar,
  Footer,
  BlogDetail,
  BlogIndex,
  MernBlogRepair,
  EmployeeSalaryManagementRepair,
} from "./components";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import About from "./pages/About";
const Home = React.lazy(() => import("./pages/Home"));
const Project = React.lazy(() => import("./pages/Project"));

function App() {
  const location = useLocation();
  const isFalse = location.pathname.includes("404");
  const sendMessageToMe = async () => {
    try {
      const resIPAddress = await fetch("https://api.ipify.org?format=json");
      const resValIPAddress = await resIPAddress.json();

      const res = await fetch(
        `https://ipinfo.io/${resValIPAddress.ip}?token=fc8fddd2a595e3`
      );

      const resVal = await res.json();
      const is_VPN = resVal.privacy.vpn;
      const is_PROXY = resVal.privacy.proxy;

      const {
        country: countryCode,
        region: state,
        city,
        ip: ipAddress,
      } = resVal;

      const currentDate = new Date();
      const dateString = `${
        currentDate.getMonth() + 1
      }/${currentDate.getDate()}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

      const resCountryName = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
      );
      const resValCountryName = await resCountryName.json();
      const countryName = resValCountryName[0].name.common;

      const flag = `https://flagsapi.com/${countryCode}/shiny/64.png`;

      const params = {
        username: dateString,
        avatar_url: flag,
        embeds: [
          {
            color: 65280,
            title: "Portfolio News",
            description: `Country: **\`${countryName}\`**\nCity: **\`${city}\`**\nState: **\`${state}\`**\nIP Address: **\`${ipAddress}\`**\nis_VPN: **\`${is_VPN}\`**\nis_PROXY: **\`${is_PROXY}\`**`,
          },
        ],
      };

      const request = new XMLHttpRequest();
      request.open(
        "POST",
        "https://discord.com/api/webhooks/1286369267083645059/NBJIZrbntzA77icXiGldM-6lnWPsWBW5VzaEDuIUKWE-dpFnpG1gnMiPU71FaIrL-BAu"
      );
      request.setRequestHeader("Content-type", "application/json");
      request.send(JSON.stringify(params));
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    sendMessageToMe();
  }, []);
  return (
    <>
      <ScrollToTop />
      {isFalse || <Navbar />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />}>
            <Route index element={<BlogIndex />} />
            <Route path=":blog_path" element={<BlogDetail />} />
          </Route>
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />}></Route>
          <Route path="/mern-blog" element={<MernBlogRepair />} />
          <Route
            path="/employee-salary-management"
            element={<EmployeeSalaryManagementRepair />}
          />
        </Routes>
      </Suspense>
      {isFalse || <Footer />}
    </>
  );
}

export default App;
