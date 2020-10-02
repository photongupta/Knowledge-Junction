import React, {useState} from 'react';
import TitleNavbar from './TitleNavbar';
import Input from './Input.js';

const getSearchResults = function (topics, key) {
  const searchResults = topics.filter(({title, content}) => {
    if (title.includes(key)) {
      return true;
    }

    const descriptions = content.blocks.map((block) => {
      switch (block.type) {
        case 'code':
          return block.data.code;

        case 'paragraph':
          return block.data.text;

        case 'header':
          return block.data.text;

        default:
          return '';
      }
    });

    const isMatching = descriptions.some(
      (description) => description && description.includes(key)
    );

    return isMatching;
  });
  return searchResults;
};

const SearchInput = function (props) {
  const [filteredTopics, setFilteredTopics] = useState(null);

  const handleChange = function (value) {
    const searchResults = getSearchResults(props.topics, value);
    setFilteredTopics(searchResults);
  };

  return (
    <div>
      <Input
        onChange={handleChange}
        class="search-input"
        placeholder="search here..."
      />
      {props.topics ? (
        <TitleNavbar
          topics={filteredTopics ? filteredTopics : props.topics}
          onTitle={props.onTitle}
        />
      ) : (
        <p>Add topics</p>
      )}
    </div>
  );
};

export default SearchInput;
