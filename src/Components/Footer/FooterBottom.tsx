import { FaRegCopyright } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { RiFacebookLine } from "react-icons/ri"
import { TiSocialLinkedin } from "react-icons/ti"

function FooterBottom() {
  return (
    <div className="footer-bottom">
        <p><FaRegCopyright /> Kerolos Khairy At 1/10/2024</p>
        <div>
            <p>Follow Us</p>

            <a href="#"><RiFacebookLine /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><TiSocialLinkedin /></a>
        </div>
    </div>
  )
}

export default FooterBottom