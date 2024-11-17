import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import imgOlive from './../Banner/profile.jpg';
import resume from './../Banner/ronaldcheng.pdf';
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
        <Flex mt="55px" w={{ base: '100%', sm: '70%', md: '80%', lg: '50%' }}>
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
        </Flex>
        <Heading color="#00796B" mt="25px">
          About Me
        </Heading>
        <Box mt="5px">
          <Text
            id="user-detail-intro"
            letterSpacing="1px"
            color={theme.theme.dText}
          >
My name is Ronald Cheng, and I want to share my story with you, starting from where it all began in Seabright Plaza, located in North Point, Hong Kong. I was born and raised in this bustling area, surrounded by the lively sounds of the city. My parents worked as officers at a small company right there in the plaza. They were hardworking and dedicated, and their commitment to their jobs provided me with a happy and comfortable life. I have fond memories of spending weekends exploring the local markets, enjoying delicious meals at our favorite restaurants, and playing with friends in the neighborhood. Life was good, and I felt safe and loved.

However, when I was just 11 years old, everything changed. Suddenly, I found myself without surrounded people, facing a world that felt very different and much colder. The warmth of Seabright Plaza turned into a place filled with memories that reminded me of my loss. I had to find the strength to move forward on my own.

During this difficult time, my grandfather stepped in to support me. He had faced many challenges in his own life and became my mentor and guide. With his encouragement, I made the brave decision to leave Hong Kong behind and start a new chapter in my life. Our journey took us first to Singapore. Living there was an eye-opening experience; I learned about a new culture and met people from different backgrounds. It was a time of change for me, but it also sparked my interest in technology.

After some time in Singapore, we moved to Texas in the United States. This move opened up even more opportunities for me. I discovered a passion for Information Technology that would shape my future career. I enrolled at Singapore Institute of Technology, where I pursued my studies with enthusiasm. The courses were challenging but exciting, providing me with the skills I needed to succeed in the tech world.

As I studied at Singapore Institute of Technology, I focused on becoming a Full Stack Developer. This role allowed me to work on both the front-end and back-end of websites and applications. I learned how to use programming languages like JavaScript, Python, and Ruby on Rails to create dynamic websites that people could interact with easily. It was thrilling to see my ideas come to life through code.

I have anaylical thinking, proactive approach, cross functional, streamline process, value added insight, key stakefolder.

In addition to full-stack development, I became fascinated by Blockchain technology as a Web3 Developer. This area of technology has the potential to change many industries by creating decentralized applications that are secure and transparent. I worked on projects that used Ethereum and other blockchain platforms, gaining valuable experience that made me knowledgeable about this exciting field.

Do you know and feel good at AI ?
I also developed an interest in Artificial Intelligence (AI). I learned about machine learning algorithms and data analysis techniques that can help computers learn from data and make decisions. This knowledge has been incredibly useful as AI continues to grow and impact our lives.

As I look back on my journey from Seabright Plaza to becoming a Senior Software Engineer today, I realize how important loyalty is in friendships. The relationships I've built along the way have played a significant role in supporting my career goals. Success is not just about reaching milestones; it’s about setting goals with determination and working hard to achieve them.

Now, I am ready to support others with my technical skills in software development, blockchain technology, and AI solutions. My story is one of resilience and growth—a reminder that even when faced with challenges, we can find new paths filled with opportunities. Through every obstacle I've encountered, I've learned that with hard work and dedication, we can achieve great things together.
          </Text>
        </Box>
        <Box p="5px 15px" fontWeight="bolder" color="white">
          <Link
            href={resume}
            target="_blank"
            download="RonaldChengResume"
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
