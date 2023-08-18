import { Link } from "react-router-dom";

import { FaLinkedin, FaFacebookSquare, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer role="contentinfo" className="common bg-[#0b242b]">
      <div className="wrapper">
        <small role="copyright" className="text-lg text-white">
          &copy; Travelopia
        </small>
        <nav role="navigation" className="navigations footer_nav">
          <ul className="flex items-center">
            <li>
              <Link to="/">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaFacebookSquare />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
