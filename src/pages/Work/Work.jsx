import "./work.css";
import { workData, workLinks } from "../../data";
import Project from "../../components/Project";

const Work = () => {
  const counts = [0, 1, 2, 3, 4, 5, 6];
  console.log(workData, workLinks);

  return (
    <div className="workPage">
      <button className="titleButton">What we have been up to</button>
      <div className="workPageTitleContainer">
        <span className="workPageContainer">
          Here's some of our recent work!
        </span>
      </div>

      <div className="projectContainer">
        {counts.map((count) => (
          <Project
            projectImage={Object.keys(workData[count])}
            projectButtonText={Object.values(workData[count])}
            projectButtonLink={workLinks[count]}
          />
        ))}
      </div>
      <a href="https://www.behance.net/sindhuras">
        <button className="viewMoreDesignsOnBehance">
          View more designs on Behance
        </button>
      </a>
    </div>
  );
};

export default Work;
