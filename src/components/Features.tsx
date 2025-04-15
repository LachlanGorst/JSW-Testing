import "./Features.css";

const Features = () => {
  return (
    <section className="features sections" id="features">
      <h2>Features</h2>
      <div className="features-container">
        <div className="card">
          <h3>AI Matching</h3>
          <p>
            Our AI efficiently matches your profile with the best-suited job
            listings, reducing the time you spend searching.
          </p>
        </div>
        <div className="card">
          <h3>Personalized Dashboard</h3>
          <p>
            Manage your job applications and view insightful analytics with a
            dashboard tailored for you.
          </p>
        </div>
        <div className="card">
          <h3>Real-Time Alerts</h3>
          <p>
            Stay updated with immediate notifications when new jobs matching
            your skills become available.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
