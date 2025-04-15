import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero sections" id="home">
      <div className="hero-content">
        <h1>Job Search Works</h1>
        <p>
          JobSearch.Works is a pioneering startup dedicated to revolutionizing
          the job search and application process with AI-powered automation. Our
          mission is to help job seekers land jobs faster by leveraging AI Our
          goal is to simplify and streamline the job search and application
          experience, ensuring job seekers maximize their opportunities with
          minimal effort.
        </p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
