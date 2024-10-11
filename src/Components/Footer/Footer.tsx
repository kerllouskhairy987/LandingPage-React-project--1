import "./Footer.scss";
import FooterBottom from "./FooterBottom";
import FooterMiddle from "./FooterMiddle";
import FooterTop from "./FooterTop";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <FooterTop />
        <hr />
        <FooterMiddle />
        <hr />
        <FooterBottom />
      </div>
    </div>
  );
}

export default Footer;
