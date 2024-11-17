import {
  Box,
  Text,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { MdEmail } from 'react-icons/md';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { Typewriter } from 'react-simple-typewriter';
import { FcSettings } from 'react-icons/fc';

export default function Intro() {
  const theme = useContext(ThemeContext);

  function handleThemes(color) {
    theme.handleTheme(color);
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
        when: 'beforeChildren',
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <Box
        id="home"
        className="about section"
        background={theme && theme.bg}
        p="15px"
        h="60vh"
      >
        <Popover>
          <PopoverTrigger>
            <Box
              position="fixed"
              right={{ base: '31px', sm: '42px', md: '50px', lg: '4' }}
              top={{ base: '65px', sm: '65px', md: '60px', lg: '3' }}
            >
              <FcSettings size="30px" color="#26A69A" />
            </Box>
          </PopoverTrigger>
          <PopoverContent
            mr="20px"
            mt="20px"
            p={3}
            w="250px"
            bg="gray.200"
            border="1px solid #00796B"
          >
            <PopoverBody>
              <Flex justify="space-between">
                {/* dark theme */}
                <Box
                  border="1px solid #00796B"
                  borderRadius="50%"
                  onClick={() => handleThemes('dark')}
                >
                  <Box
                    bg="black"
                    borderRadius="50%"
                    m="3px"
                    width="30px"
                    height="30px"
                  ></Box>
                </Box>

                {/* blue theme  */}
                <Box
                  border="1px solid #08105B"
                  borderRadius="50%"
                  onClick={() => handleThemes('blue')}
                >
                  <Box
                    bg="#242582"
                    borderRadius="50%"
                    m="3px"
                    width="30px"
                    height="30px"
                  ></Box>
                </Box>
                {/* black green  */}
                <Box
                  border="1px solid #00796B"
                  borderRadius="50%"
                  onClick={() => handleThemes('blackgreen')}
                >
                  <Box
                    bg="#212121"
                    borderRadius="50%"
                    m="3px"
                    width="30px"
                    height="30px"
                  ></Box>
                </Box>
                {/* light theme  */}
                <Box
                  border="1px solid #00796B"
                  borderRadius="50%"
                  onClick={() => handleThemes('light')}
                >
                  <Box
                    bg="linear-gradient(90deg, rgba(202,198,198,0) 0%, rgba(223,225,224,1) 0%, rgba(70,255,125,0.14066876750700286) 33%, rgba(0,254,255,0.3339460784313726) 79%)"
                    borderRadius="50%"
                    m="3px"
                    width="30px"
                    height="30px"
                  ></Box>
                </Box>
                {/* green theme  */}
                <Box
                  border="1px solid #00796B"
                  borderRadius="50%"
                  onClick={() => handleThemes('green')}
                >
                  <Box
                    bg="#E8F5E9"
                    borderRadius="50%"
                    m="3px"
                    width="30px"
                    height="30px"
                  ></Box>
                </Box>
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Box
          p="15px"
          display={{ base: 'none', sm: 'none', md: 'block' }}
          position="fixed"
          left="0"
          top="35%"
        >
          <motion.div variants={item}>
            <Flex mt="15px" justify="start">
              <a href="mailto: auction221business@gmail.com">
                <MdEmail color="#26A69A" size="25px" />
              </a>
            </Flex>
          </motion.div>

          {/* <motion.div variants={item}>
            <Flex mt="25px">
              <Box w="10%">
                <a
                  href="https://www.linkedin.com/in/Ronald"
                >
                  <AiFillLinkedin color="#26A69A" size="25px" />
                </a>
              </Box>
            </Flex>
          </motion.div> */}
          <motion.div variants={item}>
            <Flex mt="25px">
              <Box w="10%">
                <a href="https://x.com/ronald_cheng010">
                  <AiOutlineTwitter color="#26A69A" size="25px" />
                </a>
              </Box>
            </Flex>
          </motion.div>

          <motion.div variants={item}>
            <Flex mt="25px">
              <Box w="10%">
                <a href="https://github.com/phantom-98">
                  <AiFillGithub color="#26A69A" size="25px" />
                </a>
              </Box>
            </Flex>
          </motion.div>
        </Box>
        <Flex
          pt={{ base: '55px', sm: '45px', md: '55px' }}
          pb="50px"
          margin="auto"
          flexDirection={{ base: 'column', sm: 'column', md: 'column' }}
          w="90%"
        >
          <Flex
            w={{ base: '90%', sm: '75%', md: '50%' }}
            p="10px"
            margin="auto"
            flexDirection="column"
            justify="center"
            align="center"
            textAlign="center"
          >
            <motion.div variants={item}>
              <Box mb="10px" mt="1rem">
                <Text fontWeight="bold" color="#00796B" fontSize="2xl">
                  Hello, I am
                </Text>
              </Box>
            </motion.div>

            <motion.div variants={item}>
              <Box mt="15px">
                <Text
                  fontWeight="500"
                  fontSize="55px"
                  display="inline"
                  color="#00796B"
                  id="user-detail-name"
                  letterSpacing="2px"
                >
                  Ronald Cheng
                </Text>
              </Box>
            </motion.div>
            <motion.div variants={item}>
              <Box mt="2rem">
                <Text
                  fontWeight="500"
                  fontSize="35px"
                  display="inline"
                  color="#00796B"
                  id="user-detail-name"
                  letterSpacing="2px"
                >
                  <Typewriter
                    words={[
                      'A Full Stack || Web3 Developer.',
                      'My primary development languages for creating impressive projects are React, Tailwind , MUI, Python, Solidity and Rust.',
                    ]}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={150}
                    cursorBlinking={true}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </Text>
              </Box>
            </motion.div>
          </Flex>

          {/* About Me */}
        </Flex>
      </Box>
    </motion.div>
  );
}
