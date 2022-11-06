import React from "react";

type Props = {};

export default function FooterCpright({}: Props) {
  return (
    <div className="footer-contact">
      <div className="container">
        <div className="footer__content d-flex">
          <div className="cpright__right">
            <div>
              <a href="#">
                <i className="fa-brands fa-twitter" />
              </a>
              <a href="#">
                <i className="fa-brands fa-facebook" />
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin" />
              </a>
              <a href="#">
                <i className="fa-brands fa-pinterest-p" />
              </a>
              <a href="#">
                <i className="fa-brands fa-square-instagram" />
              </a>
              <button>
                <i className="fa-sharp fa-solid fa-globe"></i>
                English
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
