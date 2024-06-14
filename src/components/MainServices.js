import "./main-services.css";
import React from "react";

const App = () => {
  return (
    <div className="serv-main">
      <div className="services-container">
        <h2>SERVICES</h2>
        <p>Emerge Gen offers various services tailored to their customers</p>
        <div className="services">
          <div className="service">
            <img src="ServicesIMG/hs.svg" alt="Service 1" className="service-icon" />
            <h3>Business Cases</h3>
            <p>
              Clearly articulate and thoroughly justify the rationale behind
              strategic decisions and capital expenditures.
            </p>
          </div>
          <div className="service">
            <img src="/ServicesIMG/mr.svg" alt="Service 2" className="service-icon" />
            <h3>Market Research</h3>
            <p>
              To provide clients with comprehensive insights into their market
              environment, helping them make informed business decisions and
              identify growth opportunities.
            </p>
          </div>
          <div className="service">
            <img src="ServicesIMG/g.svg" alt="Service 3" className="service-icon" />
            <h3>Business Plans</h3>
            <p>
              Generate ideas, conduct research, and assess feasibility for your
              organization's new ventures.
            </p>
          </div>
        </div>
      </div>
      
      <div className="wave"></div>
      <div className="bottom"></div>
      
    </div>
  );
};

export default App;
