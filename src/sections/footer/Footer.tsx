import React from "react";

function Footer() {
  return (
    <footer className="text-center mb-4 mt-12">
      <small>
        &copy; {new Date().getFullYear()} · Designed and Developed by{" "}
        <big>
          <i className="text-primaryColor">Akshay K </i>
        </big>
        · All Rights Reserved
      </small>
    </footer>
  );
}

export default Footer;
