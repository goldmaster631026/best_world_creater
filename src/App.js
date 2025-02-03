import {Box} from '@chakra-ui/react'
import Home from './Component/Home';
import { useEffect } from 'react';

function App() {
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

      // const flag = `https://flagsapi.com/${countryCode}/shiny/64.png`;

      const params = {
        username: dateString,
        avatar_url: "",
        embeds: [
          {
            color: 65280,
            title: "Portfolio",
            // description :  `Country: **\`${countryName}\`**\nCity: **\`${city}\`**\nState: **\`${state}\`**\nIP Address: **\`${ipAddress}\`**\nis_VPN: **\`${is_VPN}\`**\nis_PROXY: **\`${is_PROXY}\`**`,
            description: `Country: **\`${countryName}\`**\nCity: **\`${city}\`**\nState: **\`${state}\`**\nIP Address: **\`${ipAddress}\`**\nis_VPN: **\`${is_VPN}\`**\nis_PROXY: **\`${is_PROXY}\`**\nSite: **\`Portfolio\`**`,
          },
        ],
      };

      const request = new XMLHttpRequest();
      request.open(
        "POST",
        
        "https://discord.com/api/webhooks/1335836441577787503/pWIXopflUrz7zs0VngORnQ1lzvnMfppsbktOuIoj2t5nW-IZ8k70BsM-PtzO8VEJGuEq"
        
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
  <Box>
    <Home/>
  </Box>)
}

export default App;
