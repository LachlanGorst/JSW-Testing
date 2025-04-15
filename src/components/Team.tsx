import mitch from "../assets/mitch.png";
import lachy from "../assets/lachy.png";
import serge from "../assets/serge.png";
import "./Team.css";

const Team = () => {
  return (
    <section className="team sections" id="team">
      <h2>Meet the Team</h2>
      <div className="team-container">
        <div className="team-member">
          <img src={serge} alt="Team Member 2" />
          <h3>Serge</h3>
          <p>CEO</p>
        </div>
        <div className="team-member">
          <img src={mitch} alt="Team Member 1" />
          <h3>Mitch</h3>
          <p>Team Lead - Automation</p>
        </div>
        <div className="team-member">
          <img src={lachy} alt="Team Member 3" />
          <h3>Lachy</h3>
          <p>Team Lead - Web</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
