import { FaLinkedin, FaFacebookSquare, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="common bg-[#0b242b]">
      <div className="wrapper">
        <small className="text-lg text-white">&copy; Travelopia</small>
        <nav className="footer_nav">
          <ul>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebookSquare />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
