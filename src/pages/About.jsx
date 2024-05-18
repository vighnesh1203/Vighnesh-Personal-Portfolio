import React from "react";
import about_me_img from "../Image/My project (1).png";
import personal_info_data from "./assets/AboutIn";
import "./About.css";
function About() {
  return (
    <section className="about_me" id="about_myself">
      <div className="container_01">
        <div className="my_img">
          <img id="img" src={about_me_img} alt="profile_image" />
        </div>
        <div className="my_info">
          <h2>
            About <span>Me</span>
          </h2>
          <p>
          🚀 Hi, I’m Vighnesh Paradkar ! As a passionate software engineer with 1.8 years of experience, I thrive on solving coding puzzles and optimizing algorithms. When I’m not immersed in code, you’ll find me belting out tunes (from shower to karaoke), diving into sci-fi, historical and fantasy books, and occasionally conquering virtual realms in RPGs. My canvas is a colorful blend of keystrokes, notes, and steaming chai. Let’s embark on this cosmic adventure together! 🌠
          </p>
          <div className="personal_info">
            {personal_info_data.map((data, index) => {
              return (
                <>
                  <div className="abc" key={index}>
                    {data.section_one.map((e, index) => {
                      return (
                        <h4 key={index}>
                          <span>{e.data_type} :</span> {e.data_value}
                        </h4>
                      );
                    })}
                  </div>
                  <div className="xyz">
                    {data.section_two.map((e, index) => {
                      return (
                        <h4>
                          <span>{e.data_type} :</span> {e.data_value}
                        </h4>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
