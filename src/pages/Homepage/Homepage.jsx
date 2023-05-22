import HomepageHero from "../../components/Homepage/HomepageHero";
import { NavLink, Link } from "react-router-dom";
import "./homepage.css";

const Homepage = () => {
  const count = [0, 1, 2];
  const name = ["Design", "Develop", "Launch"];
  const whatWeCanDoText = [
    "We like to keep it simple and yet eye catching.",
    "Our goal is to focus on conveying the message you want with a touch of our modern design flair.",
    "We develop and launch your website to seamlessly run across all the varied devices using the latest technologies.",
  ];
  const whyPickUsTitle = [
    "Modern Frameworks",
    "Wordpress & Coded Sites",
    "1 to 1 interaction",
  ];
  const whyPickUsText = [
    "We provide you maximum control over every aspect of the site's looks, functionalities and features.",
    "We do both according to your requirements and use cases.",
    "Interaction with our lead designer and developer to ensure your website is made exactly the way you want it.",
  ];

  // const style = {
  //   width: "100px",
  //   height: "100px",
  //   transform: "rotate(270deg)",
  //   "@media screen and (max-width: 580px)": {
  //     // transform: "rotate(90deg)",
  //   },
  // };

  return (
    <div>
      <HomepageHero />

      {/* hi section */}
      <div className="hiContainer">
        <img src="assets/homepage/hi.png" alt="" className="hiImage" />
        <div className="hiTextContiner">
          <span className="hiText">
            We at Devign have a strong passion for designing and developing
            websites. We specialize in making and launching websites that are
            capable attracting many users, handling high traffic with no issues
            and also keeping the user engaged for an extended period of time.
            This in turn helps increase your user engagement. We cater to making
            websites for individuals, and all types of businesses wanting to
            move it online.
          </span>
        </div>
      </div>

      {/* what can we do section */}
      <div className="whatCanWeDoContainer">
        <button className="titleButton">What can we do?</button>
        <div className="whatCanWeDoWrapper">
          <div className="whatCanWeDoImagesContainer">
            {count.map((number) => (
              <>
                <div className="whatCanWeDoImage">
                  <img
                    src={"assets/homepage/whatCanWeDo" + number + ".png"}
                    alt=""
                    className="whatWeCanDoDesign"
                  />
                  <span className="whatCanWeDoImageTitle">{name[number]}</span>
                </div>
                <lottie-player
                  src="https://assets9.lottiefiles.com/packages/lf20_yvze9l8i.json"
                  background="transparent"
                  speed="1"
                  // style={style}
                  id={"lottie" + number}
                  loop
                  autoplay
                ></lottie-player>
              </>
            ))}
          </div>
          <div className="whatCanWeDoTextContainer">
            <span id="whatCanWeDoTextTitle">
              We do it all! <br /> A one stop shop for all you website needs!
              <br />
            </span>
            <div className="whatCanWeDoTextWrapper">
              {count.map((number) => (
                <>
                  <div className="whatWeCanDoBulletWrapper">
                    <img
                      src="assets/homepage/bullet.png"
                      alt=""
                      className="whatWeCanDoTextImage"
                    />
                    <span className="whatWeCanDoText">
                      {whatWeCanDoText[number]}
                    </span>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why pick us? */}
      <div className="whyPickUsContainer">
        <button className="titleButton">Why Pick Us?</button>
        <div className="whyPickUsWrapper">
          {count.map((number) => (
            <div className="whyPickUsTextContainer">
              <img
                src={"assets/homepage/whyPickUs" + [number] + ".png"}
                alt=""
                className="whyPickUsImage"
              />
              <span className="whyPickUsTitle">{whyPickUsTitle[number]}</span>
              <div className="whyPickUsTextWrapper">
                <span className="whyPickUsText">{whyPickUsText[number]}</span>
              </div>
            </div>
          ))}
        </div>
        <NavLink component={Link} to="/contact%20us">
          <button className="contactUsButton">GET IN TOUCH</button>
        </NavLink>
      </div>

      {/* online presence */}
      <div className="onlinePresenceContainer">
        <div className="onlinePresenceTitle">
          <button className="titleButton">Why have an online presence?</button>
        </div>
        <div className="onlinePresenceWrapper">
          <div className="onlinePresenceInfoWrapper">
            <img
              src="assets/homepage/network.png"
              alt=""
              className="onlinePresenceImage"
            />
            <span className="onlinePresenceText">
              It is absolutely crucial for businesses to connect with customers.
              In recent years people have become accustomed to getting their
              services online.
            </span>
          </div>
          <div className="onlinePresenceInfoWrapper">
            <span className="onlinePresenceText">
              Having online presence gives your brand a platform to communicate
              with your customer easily. It gives you the opportunity to make
              people view your brand the way you intend it to be viewed.
            </span>
            <img
              src="assets/homepage/chat.png"
              alt=""
              className="onlinePresenceImage"
            />
          </div>
          <div className="onlinePresenceInfoWrapper">
            <img
              src="assets/homepage/increase.png"
              alt=""
              className="onlinePresenceImage"
            />
            <span className="onlinePresenceText">
              The first and most essential step in boosting your business is
              having a professional, user friendly website and this is where we
              come in.
            </span>
          </div>
        </div>
        <NavLink component={Link} to="/services">
          <button className="contactUsButton" id="servicesButton">
            Services
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Homepage;
