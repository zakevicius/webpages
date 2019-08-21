import React, { Fragment } from "react";

const Header = () => {
  return (
    <div className="flex header wrap">
      <div className="flex header-top right-X middle-Y">
        <div className="flex wrap menu right-X">
          <a href="/">Visi postai</a>
          <a href="/">Apie mane</a>
          <a href="/">Paskaityk</a>
        </div>
      </div>
      <div className="flex header-bottom header-text middle-X middle-Y">
        Žindymas - tai motinos kalba, kurią supranta visi kūdikiai
      </div>
    </div>
  );
};

export default Header;
