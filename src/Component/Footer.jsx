import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
// import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { ThemeContext } from './ThemeContext';
import { useContext, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import emailjs from '@emailjs/browser';
import Notiflix from 'notiflix';

export default function Footer() {
  const mainTheme = useContext(ThemeContext);

  const initalState = {
    name: '',
    email: '',
    number: '',
    message: '',
  };

  const [form, setFrom] = useState(initalState);

  function handleMoveToTop() {
    scroll.scrollToTop();
  }

  function handleinput(e) {
    setFrom({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    const { name, email, number, message } = form;
    console.log(form);

    if (name && email && number && message) {
      if (!validateNumber(number)) {
        alert('Please enter a valid 10 digit Number.');
        return;
      }
      if (validateEmail(email)) {
        emailjs
          .send(
            'service_ft7mbaf',
            'template_kw86h2m',
            {
              from_name: form.name,
              from_email: form.email,
              message: form.message,
              number: form.number,
            },
            'HZEX-Iqw4zej857n8'
          )
          .then(
            function (response) {
              Notiflix.Notify.success(
                "Thank you for showing interest in my profile. I'll contact you soon."
              );
              setFrom({
                name: '',
                email: '',
                number: '',
                message: '',
              });
              console.log('SUCCESS!', response.status, response.text);
            },
            function (err) {
              console.log('FAILED...', err);
            }
          );
      } else {
        alert('Please enter a valid email address.');
      }
    } else {
      alert('Please fill in all the required fields.');
    }
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateNumber(num) {
    const numString = num.toString();
    let count = 0;
    for (let i = 0; i < numString.length; i++) {
      if (isNaN(numString[i])) {
        return false;
      } else {
        count++;
        alert(count);
      }
    }

    if (count <= 10) {
      return true;
    }
    return false;
  }

  return (
    <Box textAlign="center" p="15px" bg={mainTheme.theme.bg} id="contact">
      <Box w="80%" margin="auto" borderTop="1.5px solid #00796B"></Box>
      {/*------- footer containter=------ */}
      <Box p="40px 20px" m="auto" textAlign="center">
        <Box>
          <Heading color="#00796B">Contact Me</Heading>
        </Box>
        <Grid
          gridTemplateColumns={{
            base: 'repeat(1,1fr)',
            sm: 'repeat(1,1fr)',
            md: 'repeat(2,1fr)',
          }}
        >
          <Box p={{ base: '0', sm: '25px' }}>
            {/* my details */}
            <Flex mt="15px" justify="start">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ width: '10%' }}
              >
                <FaUserCircle color="#00796B" size="25px" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Text
                  fontSize="sm"
                  color="#00796B"
                  fontWeight="500"
                  letterSpacing="0.8px"
                >
                  https://calendly.com/auction221business/30min
                </Text>
              </motion.div>
            </Flex>
            {/* Email */}
            <Flex mt="15px" justify="start">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ width: '10%' }}
              >
                <MdEmail color="#00796B" size="25px" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <a href="mailto: auction221business@gmail.com">
                  <Text
                    fontSize="sm"
                    color="#00796B"
                    fontWeight="500"
                    letterSpacing="0.8px"
                    id="contact-email"
                  >
                    auction221business@gmail.com
                  </Text>
                </a>
              </motion.div>
            </Flex>
            {/* linkedin */}
            {/* <Flex mt="25px">
              <Box w="10%">
                <a
                  target="_blank"
                  href="www.linkedin.com/in/lucas-lee-45b94a2a4"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ width: '10%' }}
                  >
                    <AiFillLinkedin color="#00796B" size="25px" />
                  </motion.div>
                </a>
              </Box>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <a
                  target="_blank"
                  href="www.linkedin.com/in/lucas-lee-45b94a2a4"
                >
                  <Text
                    id="contact-linkedin"
                    fontSize="sm"
                    color="#00796B"
                    fontWeight="500"
                    letterSpacing="0.8px"
                  >
                    Snow
                  </Text>
                </a>
              </motion.div>
            </Flex> */}
            {/* github */}
            <Flex mt="25px">
              <Box w="10%">
                <a href="https://github.com/phantom-98">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ width: '10%' }}
                  >
                    <AiFillGithub color="#00796B" size="25px" />
                  </motion.div>
                </a>
              </Box>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <a href="https://github.com/phantom-98">
                  <Text
                    id="contact-github"
                    fontSize="sm"
                    color="#00796B"
                    fontWeight="500"
                    letterSpacing="0.8px"
                  >
                    Ronald
                  </Text>
                </a>
              </motion.div>
            </Flex>
            <Flex mt="25px">
              <Box w="10%">
                <a href="https://x.com/IRP_cheng010">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ width: '10%' }}
                  >
                    <AiOutlineTwitter color="#00796B" size="25px" />
                  </motion.div>
                </a>
              </Box>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <a href="https://x.com/IRP_cheng010">
                  <Text
                    id="contact-github"
                    fontSize="sm"
                    color="#00796B"
                    fontWeight="500"
                    letterSpacing="0.8px"
                  >
                    Ronald
                  </Text>
                </a>
              </motion.div>
            </Flex>
          </Box>
          {/*--------------- form-------------------- */}
          <Box
            p={{ base: '0', sm: '25px' }}
            zIndex="2"
            color={mainTheme.theme.dText}
          >
            <FormControl>
              <Flex mt="15px">
                <Box w="30%">
                  <FormLabel color="#00796B">Name:</FormLabel>
                </Box>
                <Input
                  border="1px solid #00796B"
                  size="sm"
                  placeholder="Enter Your Name"
                  name="name"
                  onChange={handleinput}
                  value={form.name}
                />
              </Flex>

              <Flex mt="25px">
                <Box w="30%">
                  <FormLabel color="#00796B">Email:</FormLabel>
                </Box>
                <Input
                  border="1px solid #00796B"
                  size="sm"
                  placeholder="Enter Your Email"
                  name="email"
                  onChange={handleinput}
                  value={form.email}
                />
              </Flex>
              {/* number  */}
              <Flex mt="30px">
                <Box w="30%">
                  <FormLabel color="#00796B">Number:</FormLabel>
                </Box>
                <Input
                  border="1px solid #00796B"
                  size="sm"
                  placeholder="Enter Your Number"
                  name="number"
                  onChange={handleinput}
                  value={form.number}
                />
              </Flex>
              {/* message  */}
              <Flex mt="30px">
                <Box w="30%">
                  <FormLabel color="#00796B">Message:</FormLabel>
                </Box>
                <Input
                  border="1px solid #00796B"
                  size="sm"
                  placeholder="Enter Your Message"
                  name="message"
                  onChange={handleinput}
                  value={form.message}
                />
              </Flex>
              <Box></Box>
              <Box p="25px" w="40%" ml="18%" textAlign="left">
                <Button
                  onClick={handleSubmit}
                  w={{ base: '100%', sm: '80%' }}
                  background="none"
                  color="#00796B"
                  outline="1px solid #00796B"
                  _hover={{ background: '#26A69A', color: 'white' }}
                  borderRadius="0px"
                  mt="10px"
                >
                  Submit
                </Button>
              </Box>
            </FormControl>
          </Box>
        </Grid>
        <Flex flexDirection="column" alignItems="center">
          <BsFillArrowUpSquareFill
            onClick={handleMoveToTop}
            size="35px"
            color="#00796B"
          />
          <Text color="#00796B" fontWeight="bold">
            Top
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
