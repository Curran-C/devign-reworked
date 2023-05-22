import "./services.css";
import { serviceData } from "../../data";
import Card from "../../components/Card";

const Services = () => {
  const counts = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <div>
      <div className="servicePage">
        <button className="titleButton">
          All-in-one Package to move your business online
        </button>

        {/* services */}
        <div className="cardContainer">
          {counts.map((count) => {
            return (
              <Card
                cardImage={"assets/services/serviceImage" + count + ".png"}
                cardTitle={Object.keys(serviceData[count])}
                cardContent={Object.values(serviceData[count])}
              />
            );
          })}
        </div>

        {/* html wordpress difference */}
        <div className="htmlWordpressContainer">
          <button className="titleButton">
            Which type of webite is best for you?
          </button>
          <div className="htmlWordpressTitleContainer">
            <span className="htmlWordpressTitle">
              If you are a business owner looking to move/ expand your business
              online we would strongly suggest you opt for an HTML site. Here
              are the major differences between the two types to help you decide
              better.
            </span>
          </div>
          {/* html site */}
          <div className="htmlcontainer">
            <div className="htmlImageContainer">
              <img
                src="assets/services/html.png"
                alt=""
                className="htmlImage"
              />
            </div>
            <div className="htmlContentContainer">
              <span className="htmlContent">
                HTML sites are basically hard coded and will take longer to make
                than a normal WordPress site. Since it is hard coded it offers a
                lot more flexibility in terms of design and functionality while
                making the end result look exactly the way you want. HTML sites
                also load faster hence increasing your ranking on google. SEO is
                also easier in HTML sites.
              </span>
            </div>
          </div>
          <div className="contentPostTextContainer">
            <span className="contentPostText">
              If you are looking for a unique website to grow your business
              online we would suggest a HTML site.
            </span>
          </div>
          {/* wordpress */}
          <div className="wordPressContainer">
            <div className="wordPressContentContainer">
              <span className="wordPressContent">
                WordPress sites are made through templates and dragging and
                dropping components.Hence you will have to settle for a design
                that may not be exactly the way you want it to be. It is easy to
                change the functionality and look of site after it has been
                made. The plugins used need to be regularly updated to ensure
                proper functionality of the site and since it uses a lot of
                plugins, loading time is slower.
              </span>
            </div>
            <div className="wordPressImageContainer">
              <img
                src="assets/services/wordpress.png"
                alt=""
                className="wordPressImage"
              />
            </div>
          </div>
          <div className="contentPostTextContainer">
            <span className="contentPostText">
              If you are looking to make a blog where you will be updating your
              site very frequently (like food blog, travel blog etc...) we would
              advice you to go for a wordpress site.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
