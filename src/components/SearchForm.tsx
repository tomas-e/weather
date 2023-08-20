import React, { useState } from 'react';
import { HStack, Input, Button, Center } from "@chakra-ui/react";


type SearchFormProps = {
    onSearch: (searchText: string) => void;
  };
  
const SearchForm:React.FC<SearchFormProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    onSearch(searchText);
  };

  return (
    <Center>
    <form onSubmit={handleSearch}>
     
       <HStack spacing={4} my="4" >
      <Input 
        type="text"
        placeholder="Enter search term..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)} 
      />
      <Button colorScheme='blue' type="submit">Search</Button>
      </HStack>
    </form>
    </Center>
  );
};

export default SearchForm;
