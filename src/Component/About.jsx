import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
// import imgOlive from './../Banner/profile.jpg';
import resume from './../Banner/IRPcheng.pdf';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function About() {
  const theme = useContext(ThemeContext);

  return (
    <Box>
      <Flex
        id="about"
        className="section about"
        w={{ base: '90%', sm: '75%', md: '50%' }}
        p="10px"
        m="auto"
        borderTop="1.5px solid #00796B"
        flexDirection="column"
        justify="center"
        align="center"
        textAlign="center"
      >
        {/* <Flex mt="55px" w={{ base: '100%', sm: '70%', md: '80%', lg: '50%' }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image
              _hover={{
                boxShadow:
                  'rgba(218, 165, 32, 0.4) 0px 5px, rgba(218, 165, 32, 0.3) 0px 10px, rgba(218, 165, 32, 0.2) 0px 15px, rgba(218, 165, 32, 0.1) 0px 20px, rgba(218, 165, 32, 0.05) 0px 25px',
              }}
              className="home-img"
              style={{
                borderRadius: '50% 50% 50% 50% / 75% 75% 25% 25%',
                width: '100%',
              }}
              m="auto"
              ml={'25%'}
              src={imgOlive}
           
            />
          </motion.div>
        </Flex> */}
        <Heading color="#00796B" mt="25px">
          About Me
        </Heading>
        <Box mt="5px">
          <Text
            id="user-detail-intro"
            letterSpacing="1px"
            color={theme.theme.dText}
          >
            Experienced and skilled Full Stack | Web3 Developer with a strong
            background in developing and deploying websites and softwares various types of platform for 
            business, education, real estates, ecommerce and other purpose.
            Expanding business introducing trending technology and familiar with Blockchain 
            Web3 Tech like developing Crypto Trading softwares and bots.


            As I look back on my journey from Seabright Plaza to becoming a Senior Software Engineer, Project Manager, CTO today, I realize how important loyalty is in friendships. Success is not just about reaching milestones; it’s about setting goals with determination and working hard to achieve them.
            Surround yourself with those who lift you higher on your path to success!
            
          </Text>
        </Box>
        <Heading color="#00796B" mt="25px">
          What You Can Get With Me
        </Heading>
        <Text
            id="user-detail-intro"
            letterSpacing="1px"
            color={theme.theme.dText}
          >
            Are you looking for experts who can bring your business and great vision to success ? Are you struggling to find best matching with your work ? If you do, you're right here absolutely.  
I love hard tasks and a clear approach to the project, which is why I decided to become a full-stack developer, as I get experience both with the backend and the frontend at the same time. 

Dynamic IT professional specializing in AI-assisted business solutions that enhance profitability and operational efficiency. Proven expertise in developing web platforms, automated tools, and software products tailored to meet business needs. Committed to leveraging cutting-edge technologies to drive growth and streamline processes.

I have experience with the following industries:
🚚 Transport and Logistics
✈️ Travel industry
🌾 Agricultural industry
👩‍⚕️ Healthcare
👩‍⚕️ eCommerce
👩‍⚕️ Emergency Services

Specialized in Blockchain Web3 Environment :
- Decentralized applications (DApps)
- Smart Contract Wallet (Smart Wallet)
- MEV Bot
- Web3/Ethers
- Truffle/Hardhat/Foundry
- Solidity/Golang (+ Geth/go-ethereum)/Rust
- Smart Contracts
- Cryptography
- NFT Marketplace (ERC721/ERC1155)
- Private NFTs
- Dynamic NFTs
- Decentralized Finance (DeFi)
- DEX (Decentralised Exchange)
- Metaverse
- Crypto Token (ERC20)/Cryptocurrency
- Decentralised Storage (Public/Private)
- Cross-chain Bridge
- Cross-chain communication and messaging (Push/EPNS: Ethereum Push Notification Service)
- EVM Development
- Ethereum/Polygon
            
          </Text>
        <Box p="5px 15px" fontWeight="bolder" color="white">
          <Link
            href={resume}
            target="_blank"
            download="IRPChengResume"
            id="resume-link-2"
          >
            <Button
              background="none"
              color="#26A69A"
              outline="1px solid #26A69A"
              _hover={{ background: '#26A69A', color: 'white' }}
              borderRadius="0px"
              mt="10px"
              id="resume-button-2"
              onClick={() =>
                window.open(
                  'https://docs.google.com/document/d/1SDq7VYsWoH-oIK8Ht-UFUfmVMVHG8u4Cd'
                )
              }
            >
              Resume
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
