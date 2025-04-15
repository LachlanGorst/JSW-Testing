import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials sections" id="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonials-container">
        <div className="card">
          <p>
            "Job Search Works changed the way I search for jobs. Fast,
            efficient, and spot on with matches."
          </p>
          <h4>- Alex Johnson</h4>
        </div>
        <div className="card">
          <p>
            "This tool is a game-changer. I found several opportunities that
            perfectly matched my skills."
          </p>
          <h4>- Maria Gonzalez</h4>
        </div>
        <div className="card">
          <p>
            "I saved countless hours using Job Search Works. Highly recommended
            for anyone on the job hunt."
          </p>
          <h4>- Chris Lee</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
