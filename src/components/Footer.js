import React, { Component } from "react";

const Footer = props => {
  var data = new Date().getFullYear();
  return (
    <footer>
      <p className="footer-links">
        <a href="http://google.com" target="_blank">
          My Profile On GitHub
        </a>
        <span>/</span>
        <a href="mailto:bishop_777@rambler.ru">Send to my Mail</a>
      </p>
      <p>
        &copy; {data} <strong>ReactMarket</strong> - Organic Green Store
      </p>
    </footer>
  );
};

export default Footer;
