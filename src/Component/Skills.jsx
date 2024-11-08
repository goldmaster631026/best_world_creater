import { Box, Flex, Grid, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';
import {
  css,
  express,
  git,
  html,
  javascript,
  mongodb,
  nextjs,
  node,
  rust,
  ethereum,
  react,
  redux,
  tailwind,
  typescript,
  mySQL,
  php,
  jotai,
  Solidity,
  Solana,
  Hardhat,
  wix,
  Move,
  Aptos,
  rainbow,
  web3,
} from '../db/techstack';

export default function Skills() {
  const mainTheme = useContext(ThemeContext);

  // console.log(mainTheme)

  const skills = [
    html,
    css,
    javascript,
    typescript,
    Solidity,
    rust,
    Move,
    php,
    wix,
    react,
    nextjs,
    express,
    mongodb,
    node,
    redux,
    jotai,
    git,
    ethereum,
    Solana,
    Aptos,
    Hardhat,
    web3,
    rainbow,
    mySQL,
    tailwind,
  ];

  return (
    <Box
      bg={mainTheme.theme.bg}
      p={{ base: '5px', sm: '10px', md: '45px' }}
      id="skills"
      pb="50px"
    >
      <Box w="80%" margin="auto" borderTop="1.5px solid #00796B"></Box>
      <Box textAlign="center" margin="auto" p={{ base: '25px' }}>
        <Box p="35px">
          <Heading color="#00796B">SKILLS</Heading>
        </Box>
        <Grid
          gap={{ base: '15px', sm: '10px', md: '25px', lg: '25px' }}
          templateColumns={{
            base: 'repeat(2,1fr)',
            sm: 'repeat(3,1fr)',
            md: 'repeat(4,1fr)',
            lg: 'repeat(5,1fr)',
          }}
          m="auto"
          w={{ base: '100%', sm: '100%', md: '100%', lg: '77%' }}
        >
          {skills?.map((skill) => {
            return (
              <motion.div
                style={{ background: 'transparent' }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)',
                  background: mainTheme.theme.hover,
                }}
                className="skills-card"
              >
                <Flex justifyContent="center">
                  {(skill.title === 'Express' || skill.title === 'Next.js') &&
                  (mainTheme?.theme.bg === 'black' ||
                    mainTheme?.theme.bg === '#08105B') ? (
                    skill?.svg({ size: '4rem', color: '#757575' })
                  ) : (
                    <img
                      className="skills-card-img"
                      style={{ width: skill.swid, fill: 'red' }}
                      src={skill.img}
                      alt="altImage"
                    />
                  )}
                </Flex>
                <Box alignContent="center" p="15px">
                  <Heading
                    size="md"
                    color="#563D67"
                    className="skills-card-name"
                  >
                    {skill.title}
                  </Heading>
                </Box>
              </motion.div>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
