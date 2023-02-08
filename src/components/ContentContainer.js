import React from 'react';

const ContentContainer = ({renderPage}) => {

  return (
    <main>
      {renderPage()}
    </main>
  );
}

export default ContentContainer