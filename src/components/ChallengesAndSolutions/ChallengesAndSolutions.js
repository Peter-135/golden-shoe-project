import React from "react";
import { useEffect } from "react";
import "./ChallengesAndSolutions.css";

const ChallengesAndSolutions = () => {
  useEffect(() => {
    document.title = "Challenges and Solutions";
  }, []);
  return (
    <div>
      <div className="challenges-and-solutions-header">
        <h1 className="center-text">Challenges And Solutions</h1>
      </div>
      <div className="challenges-section">
        <div className="eighty-percent-width">
          <h2 className="center-text">Challenges Golden Shoe faces</h2>

          <p>Steady decline in revenue over the couple of years</p>
          <p>
            Located next to main competitor, which seems to be much busier than
            the Golden Shoe store
          </p>
          <p>
            E-commerce platform was built around 9 years ago, when most online
            interaction was done using a desktop (old website, not modern feel)
          </p>
          <p>
            Conversion rate has declined rapidly, and the dropout rates in
            mobile and ipad devices have increased dramatically
          </p>
          <p>Golden Shoe have no mobile app</p>
          <p>
            Quarterly releases, impossible to get any small changes in quicker
            than this{" "}
          </p>
          <p>
            Need to upskill current workforce and convince leadership team of
            benefits of Agile
          </p>
          <p>Old website</p>
          <p>
            Can only phone the customer service helpline between 9am-5pm,
            Monday-Friday
          </p>
          <p>
            (A reason for contacting customer service) Website not updated
            regularly to show which items are in stock (sometimes shows as in
            stock, but actually out of stock)
          </p>
          <p>
            (Another reason for contacting customer service) Queries around
            delivery dates and time
          </p>
          <p>
            Top reasons for returning items: Incorrect shoe size (38%), didn't
            like the shoe style (35%) and didn't like the colour (19%), other
            (8%)
          </p>
          <p>Facebook and Twitter accounts are both unmonitored</p>
          <p>
            The marketing department send direct mail and catalogues to a list
            of customers whose details they collected. This mail often consists
            of £10 off vouchers, which can only be used in store
          </p>
        </div>
      </div>
      <div className="solutions-section">
        <div className="eighty-percent-width">
          <h2 className="center-text">Solutions for these challenges</h2>

          <p>
            Create another store in a different location that doesn't compete
            with it's main competitor
          </p>
          <p>Improve online presence (great for marketing)</p>
          <p>
            Create a new, modern website and a mobile app that are regularly
            updated (stock regularly updated, improve conversion rate more
            customers buy)
          </p>
          <p>
            Improve customer service by allowing more than just phone calls to
            contact customer service (e.g. contact through email, dedicated
            customer service website
          </p>
          <p>
            Work with agile style (e.g release features much more regular such
            as once per week with sprints, and improve product quality and
            changes will be much quicker)
          </p>
          <p>
            Create method to collect emails and then allow vouchers to be used
            online, and contact customers regular online
          </p>
        </div>
      </div>
      <div className="impact-section">
        <div className="eighty-percent-width">
          <h2 className="center-text">IMPACT</h2>
          <p className="center-text">
            A focus on creating a new website and creating a mobile app would
            lead to:{" "}
          </p>

          <p>
            <b>Higher revenue for the company</b> (leading to higher profits),
            as customers stay longer because the website design is easy to look
            and navigate, as well as products being regularly updated so the
            company have more reliable product
          </p>
          <p>
            <b>A more effective, stronger team</b>, leading to reduced costs for
            the company (again improving overall profits) as the Golden Shoes'
            staff understand Agile ways of working, increasing team
            collabration, producing shorter delivery cycles providing value to
            both clients and customers, and efficiency through continous
            improvement through constant testing and experimentation
          </p>
          <p>
            <b>An increase in user base (no. of users)</b>, as customer service
            and products improve for the shoes, customers will tell their
            friends and family about all the positives Golden Shoe
          </p>
          <p>
            <b>Higher rates of customer satisfaction</b> As customers can easily
            contact the relevant departments when issues arise and can be
            solved, and stock is regularly updated
          </p>
          <p>
            <b>A stronger brand name</b>, as social media accounts like facebook
            and twitter are updated regularly and customers know what new
            products Golden Shoe are creating. This would also solve the problem
            of customers disliking the shoe style or colour, as there will be
            greater variety to choose from which customer will be aware of
            because of social media and the regularly updated website
          </p>

          <p className="center-text">
            Therefore the focus should be on{" "}
            <strong>updating the website</strong> and creating a mobile app,
            which finally leads to our prototype design for the website which is
            mobile-responsive:
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChallengesAndSolutions;
