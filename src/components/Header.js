import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            {/* <a href={socials[0].url}> {<FontAwesomeIcon icon={socials[0].icon} size="2x" /> }</a>
            <a href={socials[1].url}> {<FontAwesomeIcon icon={socials[1].icon} size="2x" /> }</a>
            <a href={socials[2].url}> {<FontAwesomeIcon icon={socials[2].icon} size="2x" /> }</a>
            <a href={socials[3].url}> {<FontAwesomeIcon icon={socials[3].icon} size="2x" /> }</a>
            <a href={socials[4].url}> {<FontAwesomeIcon icon={socials[4].icon} size="2x" /> }</a> */}
            
            <ul style={{listStyle:"none"}}>
              <HStack>
                
              {
                socials && socials.map((social,index) => {
                return <li key={index}> <a href={social.url}> {<FontAwesomeIcon icon={social.icon} size="2x" /> }</a> </li>
              })
                
              }
              </HStack>

              </ul>
            
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="/#projects-section"  onClick={handleClick}>Projects</a>
              <a href="/#contactme-section" onClick={handleClick}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
