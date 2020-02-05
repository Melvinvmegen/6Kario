import React from 'react';

const contentContext = React.createContext({
  main: [
    { id: 1, name: 'News' },
    { id: 2, name: 'Label' },
    { id: 3, name: 'Studio' },
  ]
});

export default contentContext
