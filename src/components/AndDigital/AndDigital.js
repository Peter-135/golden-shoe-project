import React from "react";
import { useEffect } from "react";
import AndDigitalLogo from "../../images/and-logo.png";
import "./AndDigital.css";

const AndDigital = () => {
  useEffect(() => {
    document.title = "And Digital";
  }, []);

  return (
    <div className="and-digital-container">
      <div className="and-digital-logo-div">
        <img
          src={AndDigitalLogo}
          className="and-digital-logo"
          alt="and-digital-logo"
        />{" "}
      </div>

      <div className="intro-section center-text">
        <div className="intro-width">
          <h2> Who Are We?</h2>
          <p>
            We are a company that is on a mission to close the world's digital
            skills gap. We believe in empowering people with the knowledge they
            need to unlock the full potential of technology.
          </p>
          <h3>What We Do</h3>
          <p>
            We do all things digital - from consultancy to delivery. We can
            support you on everything digital from short and focused strategic
            planning to end-to-end digital transformation.
          </p>
          <h3>Who we work with</h3>
          <p>
            We work with clients who wish to improve their digital processes and
            get better results. We've worked across a wide range of industries,
            each with unique needs and challenges, and have worked various
            established companies such as Premier Inn, British Airways and
            Taylor & Francis.
          </p>
        </div>
      </div>
      <div className="values-section center-text">
        <div className="values-width">
          <h2>Our Values</h2>
          <p>
            Everyone on our team, known as ANDis, follow the same three values:
            <p>
              <strong>Wonder</strong>, <strong>Share</strong> and
              <strong> Delight</strong>.
            </p>
            These values allow us to make an impact globally and share our
            skills with each other and the wider community. More than 1 million
            people use the technology we've built every single day, and our goal
            is to deliver tech that improves the lives of 200 million people.{" "}
          </p>
          <h3>Wonder</h3>
          <p>
            There's no end to our curiosity: we love to explore the impossible,
            the "what ifs" - but we love to make them a reality even more.{" "}
          </p>
          <h3>Share</h3>
          <p>
            We want to raise the bar and smash ceilings: we do this by giving
            back and lifting up, helping others to grow alongside us.
          </p>
          <h3>Delight</h3>
          <p>
            Good is a given: we demand more. We look for joy in the work we do,
            delivering services and products that people love and value.
          </p>
        </div>
      </div>
      <div className="services-section center-text">
        <div className="services-width">
          <h2>Guide, Build & Equip: The AND Service Model</h2>
          <h3>Guide</h3>
          <p>
            Define the path forward: We can provide you with the essential
            insight and support you need to navigate a shifting business and
            technology landscape with greater speed and confidence. This means
            we can identify the challenges you face as a company and discover
            what the right solutions would be, whilst uncovering new
            opportunities for growth and innovation. We use skills in areas such
            as UX and Design, and digital consulting to help aid this process.
          </p>
          <h3>Build</h3>
          <p>
            Ship better products, faster: We work alongside our clients to speed
            up the delivery of infrastructure projects, upskilling your people
            as we go. Our diverse range of skills and expertise across software
            engineering, product management, delivery and UX will us ensure your
            digital transformation is impactful and sustainable. This means we
            can improve the speed products get released whilst product quality
            is not compromised, and your staff's digital skills will improve as
            we share our knowledge.
          </p>
          <h3>Equip</h3>
          <p>
            Bridge your skills gaps: One way we help to improve the digital
            skills gaps is by upskilling client teams and providing training and
            support for Agile adoption, so that you become digitally
            independent. Which leads us to an essential part of the process,
            Agile.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AndDigital;
