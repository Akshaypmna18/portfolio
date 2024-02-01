import React from "react";

function Footer() {
  return (
    <footer>
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
