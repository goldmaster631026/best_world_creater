import { Box } from "@chakra-ui/react";
import { NavBar } from "./NavBar";
import Footer from "./Footer";
import Intro from "./Intro";
import Skills from "./Skills";
import Project from "./Project";
import ExtraProject from "./ExtraProject";
import Achievements from "./Achievements";
import Education from "./Education";
import { useContext } from "react";
import About from "./About";
import { ThemeContext } from "./ThemeContext";

export default function Home() {
  const theme = useContext(ThemeContext);

  return (
    <Box id="home" bg={theme.theme.bg}>
      <NavBar />
      <Intro />
      <About />
      <Education />
      <Skills />
      <Project />
      <ExtraProject />
      <Achievements />
      <Footer />
    </Box>
  );
}
