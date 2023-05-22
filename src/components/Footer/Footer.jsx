import "./footer.css";

const Footer = () => {
  return (
    <footer id="footerContainer">
      <a href="https://api.whatsapp.com/send?phone=7975264624&text=Hello,%20I%20would%20like%20to%20enquire%20about">
        <img src="assets/footer/whatsapp.png" alt="" className="footerIcon" />
      </a>
      <div className="footerText">
        <span className="footerDevignText">DEVIGN</span>
        <span className="footerDateText">
          {"© " + new Date().getFullYear() + ". All rights reserved"}
        </span>
      </div>
      <a href="https://instagram.com/devign22?igshid=YmMyMTA2M2Y=">
        <img src="assets/footer/instagram.png" alt="" className="footerIcon" />
      </a>
    </footer>
  );
};

export default Footer;
