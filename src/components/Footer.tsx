import React from "react";

type Props = {};

export default function Footer({ }: Props) {
  return (
    <footer>
      <div className="footer-list container d-flex justify-content-between">
        <ul>
          <li>
            Categorles
          </li>
          <li>
            <a href="#">Graphics & Design</a>
          </li>
          <li>
            <a href="#">Digital Marketing</a>
          </li>
          <li>
            <a href="#">Writing & Translation</a>
          </li>
          <li>
            <a href="#">Video & Animations</a>
          </li>
          <li>
            <a href="#">Music & Audio</a>
          </li>
          <li>
            <a href="#">Programming & Tech</a>
          </li>
          <li>
            <a href="#">Data</a>
          </li>
          <li>
            <a href="#">Business</a>
          </li>
          <li>
            <a href="#">Lifestyle</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
        <ul>
          <li>
            About
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Press & News</a>
          </li>
          <li>
            <a href="#">Parnerships</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Intellectual Property Claims</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
          </li>
        </ul>
        <ul>
          <li>
            Support
          </li>
          <li>
            <a href="#">Help & Support</a>
          </li>
          <li>
            <a href="#">Trust & Safety</a>
          </li>
          <li>
            <a href="#">Selling on Fiverr</a>
          </li>
          <li>
            <a href="#">Bying on Fiverr</a>
          </li>
        </ul>
        <ul>
          <li>
            Community
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Forum</a>
          </li>
          <li>
            <a href="#">Community Standards</a>
          </li>
          <li>
            <a href="#">Podcast</a>
          </li>
          <li>
            <a href="#">Affiliates</a>
          </li>
          <li>
            <a href="#">Invite a Friend</a>
          </li>
          <li>
            <a href="#">Become a Seller</a>
          </li>
          
        </ul>
        <ul>
          <li>
            More From Fiverr
          </li>
          <li>
            <a href="#">Fiverr Business</a>
          </li>
          <li>
            <a href="#">Fiverr Pro</a>
          </li>
          <li>
            <a href="#">Fiverr Studio</a>
          </li>
          <li>
            <a href="#">Fiver Logo Maker</a>
          </li>
          <li>
            <a href="#">Fiverr Guides</a>
          </li>
          <li>
            <a href="#">Get Inspired</a>
          </li>
          <li>
            <a href="#">ClearVoice <p>Content Marketing</p></a>
          </li>
          <li>
            <a href="#">Fiverr Workspace <p>Invoice Software</p></a>
          </li>
          <li>
            <a href="#">Learn <p>Online Courses</p></a>
          </li>
          <li>
            <a href="#">Working Not Working</a>
          </li>
        </ul>
      </div>
      <div className="footer-contact">
        <div className="container">
          <div className="footer__content d-flex justify-content-between">
            <div className="cpright__left">
              <p>
                <span>Fiverr</span> © Fiverr International Ltd. 2022
              </p>
            </div>
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
                <button>US$ USD</button>
                <i className="fa-sharp fa-solid fa-person last-child" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
