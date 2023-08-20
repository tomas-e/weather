import React from 'react';
import { Flex, Heading } from '@chakra-ui/react'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
const Header = () => {
  return (
    <header>
      <Flex width="100vw"  justifyContent="center" alignItems="center">
      <Heading>My Weather App</Heading>
    </Flex>
      <nav>
        
        <ul>
          {/* <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
