import React from "react";
import { useEffect } from "react";
import "./AgileBenefits.css";
import AgileMethodologyImage from "../../images/agile-methodology.jpeg";

const AgileBenefits = () => {
  useEffect(() => {
    document.title = "Agile Benefits";
  }, []);

  return (
    <div className="agile-benefits-container">
      <div className="agile-header">
        <h1 className="center-text agile-header-text">
          {" "}
          Is Agile The Future? Or the Present?
        </h1>
      </div>
      <div className="agile-methodology-image-div">
        <img
          src={AgileMethodologyImage}
          className="agile-methodology-image"
          alt="agile-methodology"
        />{" "}
      </div>

      <div className="agile-explanation-section center-text">
        <div className="agile-explanation-width ">
          <h2>Agile is the enabling heartbeat of every innovative business</h2>
          <p>
            Agile methodology is a practice that helps with continuous iteration
            of development and testing in the Software Development Life Cycle
            (SDLC). Agile breaks the product into small builds. It encourages
            teamwork and face-to-face communication.
          </p>
          <p>
            Scrum in Agile is a process that allows software development teams
            to focus on delivering business value in the shortest time by
            rapidly and repeated inspecting actual working software. It focuses
            on accountability, teamwork and progress towards well-defined goals.
            There are daily stand up meetings within Scrum teams, and can have
            sprints that generally last up to one to few weeks. A sprint is a
            short, time-boxed period where a Scrum team works to complete a set
            amount of work. We provide both Agile and Scrum coaching at And
            Digital.
          </p>
          <h3>Why use Agile?</h3>
          <p>
            <strong>
              Agile processes and mindset aren't supplementary to a
              digital-first culture. They're central to it.
            </strong>{" "}
          </p>
          <p>
            There are various benefits to agile across your organisation,
            primarily including:
          </p>

          <p>
            <strong>- Improved collaboration</strong> (which leads to stronger
            teams). Build and enable high performing and cohesive teams that
            build quality products together
          </p>

          <p>
            <strong>- Consistent delivery </strong>(improved delivery times).
            Empower your people to add value for clients and customers every
            single day
          </p>

          <p>
            <strong>- A culture of testing and learning</strong> (which leads to
            higher quality products). Embrace continuous improvement through
            constant testing and experimentation
          </p>
        </div>
      </div>
      <div className="taylor-and-francis-section center-text">
        <div className="taylor-and-francis-width">
          <h2>Case Study: Taylor & Francis</h2>
          <p>
            Taylor & Francis (T&F) is one of the leading brands in academic
            publishing, and publishes over 2600 journals and 5,000 new books
            each year. With a backlist of over 140,000 titles available in print
            and online, technology is business critical for the organisation. As
            a result, T&F desired to reorganised its 90-strong technology team
            and move from outdated delivery approaches to a faster Agile way of
            working.
          </p>
          <h3>The challenge:</h3>
          <p>
            Moving to Agile is rarely easy, and needed a player-coach, an expert
            in Agile, which is where AND Digital came to step in.
          </p>
          <p>
            Through in-depth workshops, our learning and development specialists
            and Agile coaches helped T&F map out their learning needs. We also
            analysed T&F's current learning environment to understand company
            perceptions around upskilling, as well as preferred learning styles.{" "}
          </p>
          <h3>Building the bootcamp</h3>
          <p>
            Once the orgnisation's requirements were established, AND work
            withed with senior stakeholders and T&F's global teams to build a
            bespoke bootcamp that{" "}
          </p>
          <p>- Brought Agile to life</p>
          <p>
            - Provided fresh, inspiring learning across all levels of the
            organisation
          </p>
          <p>
            - Was memorable, with learning experiences that were practical, so
            attendees could recall and apply their learnings easily
          </p>
          <p>
            - Lay the foundation for a stronger culture of learning, so
            attendees would continue to share knowledge and engage in relevant
            Communitites of Practice
          </p>
          <p>
            We delivered three intial experiences for T&F for the bootcamp: two
            in the UK, and one in Miami. These bootcamps were succesful. The
            partnership with T&F continued, with the development of a T&F
            academy - an initivative designed to make Agile traning available on
            a global scale.
          </p>
          <h3>Key Outcomes</h3>
          <p>As a result of the work we delivered with Taylor & Francis:</p>
          <p>
            - The T&F Agile Bootcamp is now compulsory for its 90-strong
            technology department
          </p>
          <p>
            - Their team has developed a breadth of skills, including Scrum
            Master training, faciliation skills and software development
            practices
          </p>
          <p>
            - T&F has access to an interactive Confluence that offers bootcamp
            materials, tech discussions and resource sharing
          </p>
          <p>
            Their tech recruitment has benefitted, as they can share their
            knowledge on modern engineering practices and Agile expertise
          </p>
          <p>
            - The partnership with AND Digital continues, as together, we
            develop the T&F Academy - an initative designed to make training
            available on a global scale
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgileBenefits;
