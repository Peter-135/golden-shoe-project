import React from "react";
import { useEffect } from "react";
import PeterProfilePic from "../../images/peter-arthur-profile.jpg";
import "./NextSteps.css";

const NextSteps = () => {
  useEffect(() => {
    document.title = "Next Steps";
  }, []);
  return (
    <div className="next-steps-container">
      <div className="target-customer-div">
        <div className="peter-profile-pic-div">
          <img src={PeterProfilePic} className="peter-profile-pic-image" />
        </div>
        <p className="target-customer-paragraph">
          Target Customer: People like me! In other words, people who are in
          their 20s and 30s. The name Golden Shoes suggest customers would like
          nicer, higher quality shoes which can be nice for both professional
          environment and for a social environment. People care very much about
          their appearances. People within this age range would use technology
          such as laptops, newer mobile phones and web and mobile apps on a
          regular basis. Therefore having a website and mobile app would be
          essential for Golden Shoe.
        </p>
        {/* </div> */}
      </div>
      <div className="costs-section">
        <div className="costs-involved">
          <h3 className="center-text">Costs involved</h3>
          <p>
            <strong>Hiring:</strong> Getting the right people in the environment
            to help out Golden Shoe - This is where AND Digital would come and
            provide support to thrive in a digital world
          </p>
          <p>
            <strong>Costs of designing website:</strong> In this day and age, it
            is extremely important to have an online presence to increase your
            reputation and generate higher profits. With AND Digital's
            specialists, we can greatly help improve the website design and
            functionality to provide a better user experience
          </p>
          <p>
            <strong>Marketing: </strong>
            Having updated Twitter and Facebook accounts would go a long way in
            making Golden Shoes a more well known company
          </p>
          <p>
            <strong>Creating another physical store: </strong> So that more
            profits can be generated and not always directly competing with main
            competition. With the right upskilling that AND Digital can provide,
            if Golden Shoe decides to have another physical store, they should
            be able to provide a better service
          </p>
        </div>
      </div>
      <div className="competitor-analysis-section">
        <div className="competitor-analysis">
          <h3 className=" center-text">Competitor Analysis</h3>
          <p>
            Here is a link to website one of Golden Shoe's competitors,{" "}
            <a
              href="https://www.church-footwear.com/gb/en.html"
              target="_blank"
            >
              Church's
            </a>
            . Church's is a high-end footwear manufacturer.
          </p>{" "}
          <p>
            {" "}
            If we examine their website, they are doing things that Golden Shoes
            are not, which include:
          </p>
          <p>
            {" "}
            <strong>- Social media</strong> links at the bottom that are{" "}
            <strong>regularly updated</strong>, including Facebook, Twitter and
            LinkedIn
          </p>
          <p>
            {" "}
            <strong>- An easy to navigate website</strong> which is{" "}
            <strong>appealing to look at</strong>, with lots of whitespace
          </p>
          <p>
            {" "}
            <strong>- Multiple options for customer service</strong>, at the
            bottom including tracking your goods, returns, repairs, FAQs, etc
          </p>
        </div>
      </div>
      <div className="ba-case-study-section">
        <div className="ba-case-study-width">
          <h3 className="center-text">CASE STUDY - E.G. BRITISH AIRWAYS </h3>
          <p>
            This case study shows the importance have good online products, such
            as a website or mobile app.
          </p>
          <p>
            British Airways helps over 45 million travellers reach their
            destination every year. They sought a partner to improve the
            customer experience and performance of digital products, which is
            where AND Digital comes in.
          </p>
          <p>
            BA used a Waterfall environment. The Waterfall methodology which is
            a sequential development process that flows like a waterfall through
            all phases of a project (analysis, design, development, and testing,
            for example), with each phase completely wrapping up before the next
            phase begins. However, this way working struggles to adapt to
            change. As a result, the quality and pace of delivery were of
            particular concern.
          </p>
          <p>
            Our partnership with BA began with a critical need to stabilise and
            improve the business's existing mobile apps. AND defined a new
            product vision and new coding standards, as well as a Git migration
            plan, directing managing the handover of the existing codebase. The
            team also focused on immediate quick wins, including:
            <p>- Credit card surcharge rules</p>
            <p>- Improving the Android booking flow</p>
            <p>- iPhone X compability</p>
            <p>
              - The addition of essential missing features - like the display of
              departure gate information
            </p>
            <p>
              We also worked on{" "}
              <strong>streamlining the customer experience </strong>on destop to
              drive up conversion and revenue. There were too many steps
              involved, so our engineers improved the process so it took fewer
              steps for outbound and return flight selection, and all the
              information could be viewed on one page. They also refactored
              major sections of the site to improve testability and more
              efficient scalability, resulting in faster development and a
              smoother release process in the future.
            </p>
          </p>
          <h3 className="center-text">Unlock value for customers and BA</h3>
          <p>We helped BA to:</p>

          <p>
            <strong>- Accelerate speed to value</strong>- Typical feature
            release time for BA was one release per six months: in comparison,
            the first six months of our partnership saw this increase to 18
          </p>

          <p>
            <strong>- Raise quality standards</strong> - with more rigorous
            testing and engineering practices in place, BA digital products are
            more robust and better able to incorporate future requirements
          </p>
          <p>
            <strong>- Transition from Waterfall to Agile</strong> - deeper
            understanding of Agile principles and collaborative ways of working
            ensure the joint team responds more rapidly and efficiently to
            business and customer needs
          </p>
          <h3 className="center-text">Impact</h3>
          <p>
            In the first three weeks following the launch of the new app, it
            delivered over £500k - 7x the monthly target of £70k
          </p>

          <p>
            <strong>BOOKINGS:</strong> 2,000 Additional bookings through the app
            after launch
          </p>
          <p>
            <strong>REVENUE:</strong> 500k Revenue within three months of launch
          </p>
          <p>
            <strong>REVENUE GROWTH:</strong> 7x monthly revenue target in the
            first 3 weeks of launch
          </p>
          <p>
            <strong>DELIVERY SPEED:</strong> 200% Increase in the number of
            features delivered in the six months following launch
          </p>
          <p>
            <strong>USERS:</strong> 200k more active users on Android than the
            previous year
          </p>
        </div>
      </div>
    </div>
  );
};

export default NextSteps;
