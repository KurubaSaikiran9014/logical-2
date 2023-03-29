import {
  AiOutlineCopyrightCircle,
  AiOutlineInstagram,
  AiFillYoutube,
} from 'react-icons/ai'
import {BsFacebook, BsLinkedin, BsPinterest} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import {SiGmail} from 'react-icons/si'

import './index.css'

const ContactUs = () => (
  <div className="contact-us">
    <img
      src="https://res.cloudinary.com/dzi1shwap/image/upload/v1680011761/TLN_logo_1_o2tupe.png"
      alt="Language Networks logo"
      className="contact-logo"
    />
    <p className="contact-us-description">
      For any support, please mail to info@thelanguagenetwork.co. Our support
      team will get back to you within 24 hours.
    </p>
    <div className="contact-cont">
      <p className="copyright">
        Copyright <AiOutlineCopyrightCircle /> The Language Network - All Right
        Reserved
      </p>
      <ul className="contact-list">
        <li className="copyright">Terms and Conditions</li>
        <li className="copyright">Privacy Policy</li>
        <li className="copyright">Sitemap</li>
      </ul>
      <ul className="social-media-list">
        <li className="icon">
          <BsFacebook />
        </li>
        <li className="icon">
          <AiOutlineInstagram />
        </li>
        <li className="icon">
          <BsLinkedin />
        </li>
        <li className="icon">
          <GrMail />
        </li>
        <li className="icon">
          <BsPinterest />
        </li>
        <li className="icon">
          <AiFillYoutube />
        </li>
        <li className="icon">
          <SiGmail />
        </li>
      </ul>
    </div>
  </div>
)

export default ContactUs
