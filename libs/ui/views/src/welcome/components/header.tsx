import React from 'react';

const Header = ({ title, subTitle }: { title: string; subTitle: string }) => (
  <div id="welcome">
    <h1>
      <span>{subTitle}</span>
      {title}
    </h1>
  </div>
);

export default Header;
