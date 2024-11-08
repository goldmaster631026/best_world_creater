import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [
  {
    image: "./school/1.jpg"
  },
  {
    image: "./school/2.jpg"
  },
  {
    image: "./school/3.jpg"
  },
  {
    image: "./school/4.jpg"
  }
]

export default function About() {
  const theme = useContext(ThemeContext);

  return (
    <Box>
      <Flex
        id="education"
        className="section education"
        w={{ base: "90%", sm: "75%", md: "50%" }}
        p="10px"
        m="auto"
        borderTop="1.5px solid #00796B"
        flexDirection="column"
        justify="center"
        align="center"
        textAlign="center"
      >
        <Heading color="#00796B" mt="25px">
          Education
        </Heading>
        <Box mt="2rem" display={"flex"}>
          <Box marginTop={'1rem'}>
            <Text
              id="user-detail-intro"
              letterSpacing="1px"
              color={theme.theme.dText}
              textAlign={'start'}
            >
              The Singapore Institute of Technology (新加坡理工大学) or SIT (新工大) is Singapore’s first University of Applied Learning, offering specialised degree programmes that prepare its graduates to be work-ready professionals. 
              With a mission to develop individuals and innovate with industry to impact the economy and society in meaningful ways, SIT aims to also be a leader in innovative workplace learning and applied research.
              <br />
              <br />
              I graduated from the Singapore Institute of Technology in April 2017. My majority is Computer Science and Engineering.
              I have got a Bachelor of Degree in Computer Science from Singapore Institute of Technology in 2017.
            </Text>
          </Box>
          <Box marginTop={'2rem'} marginLeft={'1rem'} width={"99%"}>
            <Carousel infiniteLoop>
              {slides.map((slide) => {
                return (
                  <div>
                    <Image src={slide.image} height="auto" width="1000px" /></div>
                );
              })}
            </Carousel>
          </Box>
        </Box>
        <Box mt={'10px'}>

        </Box>
      </Flex>
    </Box>
  );
}
