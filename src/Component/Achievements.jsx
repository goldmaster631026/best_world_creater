import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { ThemeContext } from "./ThemeContext";
import { useContext, useRef } from "react";
import { Achievements } from "../db/projectdb";
import { Link } from "react-router-dom";

export default function Project() {
  const mainTheme = useContext(ThemeContext);

  const boxRef = useRef(null);

  return (
    <Box
      bg={mainTheme.theme.bg}
      p={{ base: "15px", sm: "20px", md: "45px" }}
      id="achievements"
    >
      {/* bar for decoration  */}
      <Box w="80%" margin="auto" borderTop="1.5px solid #00796B">
        {/* box 1 for main projects  */}
      </Box>
      <Box m="auto" textAlign="center">
        <Box pt="55px">
          <Heading color="#00796B" size="2xl">
            Achievements and Certifications
          </Heading>
        </Box>
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
          gap=" 20px 40px"
          mt="45px"
          ref={boxRef}
        >
          {Achievements?.map((project) => {
            return (
              <Box  
                p="0 20px"
                textAlign="left"
                className="project-card"
                boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                mt='1rem'
                _hover={{ background: mainTheme.theme.hover }}
              >
                <Box>
                  <Heading
                    p="15px 0"
                    size="lg"
                    color="#00796B"
                    className="project-title"
                  >
                    {project.heading}
                  </Heading>
                </Box>
                <Box pb="25px" w="80%" borderTop="1.5px solid #00796B"></Box>

                <Box w={{ base: "105%", sm: "100%" }}>
                  <Link to={project.liveLink} target="_blank">
                    <img
                      style={{ width: "100%" }}
                      src={project.img}
                      alt={project.heading}
                    />
                  </Link>
                </Box>
                <Box p="15px 0">
                  <Text fontWeight="bold" m="5px 0" color="#00796B">
                    {project.title}
                  </Text>
                  <Box w="60%" borderTop="1.5px solid #00796B"></Box>
                  <Text
                    color={mainTheme.theme.dText}
                    className="project-description"
                  >
                    {project.description}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
