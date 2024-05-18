import React from 'react';
import proj_img from '../../Image/proj_img.jpeg';
// import Githubcomp from './Githubcomp';
import './ProjHome.css';
function ProjHome() {
  return (
    <>
      <div className="proj_containar_section">
        <div className="proj_left">
          <h3>Experience</h3>
          <p>
            <h4><p>Virtusa</p> (Jun 2022 - Present)</h4>
            <ul>
            <li>Created user-friendly interfaces using ReactJs enhancing the user experienceand making carbon emission data accessible and understandable in key project for Virtusa.</li>
            <li>Designed and proposed REST APIs in Java to optimize data flow and enhance communication between frontend and backend, leading to a 20% improvement in API response Time and able to reduce Latency.</li><li>Led the creation of a VitalLink: A Microservices-Based Patient Monitoring System, resulting in improvement in system scalability and streamlined maintenance.</li>
            <li>Improved secure access to patient records and reports for authorized personnel using Docker containers.</li><li> Executed robust security protocols using Spring Security, fortifying patient data against unauthorized access and ensuring compliance. Implemented Resilience4j, fortifying the system's fault tolerance</li>
            </ul>
          </p>
        </div>
        <div className="proj_right">
          <img src={proj_img} alt="Project Img" />
        </div>
      </div>
    </>
  );
}

export default ProjHome;
