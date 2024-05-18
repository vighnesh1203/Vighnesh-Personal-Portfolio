import React from "react";
import "./Education.css";
import school_logo from "../../Image/school_logo.jpeg";
import college_logo from "../../Image/college_logo.png";
function Education() {
  const my_education_data = [
    {
      index: 1,
      education_logo_link: college_logo,
      college_name: "Vasantdada Patil Pratishthan's College of Engineering & Visual Arts, Mumbai",
      college_degree_name: "B.E. in Computer Science    CGPA : 8.54",
      education_spam: "2018-2022",
      education_info: [
        {
          index: 1,
          educ_info:
            "🔹 Mastered Data Structures and Algorithms demonstrating strong foundational knowledge in computer science.",
        },
        {
          index: 2,
          educ_info:
            "🔹 Actively participated in various engineering projects gaining practical experience by collaborating with peers.",
        },
        {
          index: 3,
          educ_info:
            "🔹 Engaged in cultural events as part of your curriculum showcasing a well-rounded approach to education.",
        },
      ]
    },
    {
      index: 2,
      education_logo_link: school_logo,
      college_name: "Sacred Heart Convent High School, Ratnagiri",
      college_degree_name: "Score : 81.40 %",
      education_spam: "2004-2016",
      education_info: [
        {
          index: 1,
          educ_info:
            "🔹 Maintained a decent behaviour alongwith good academics.",
        },
        {
          index: 2,
          educ_info:
            "🔹   Selected as a Vice Captain and recieved the most deserving student award.",
        }
      ]
    }
  ];
  return (
    <>
      <div className="educ_container">
        <div className="educ_div_section">
        <h2>Education</h2>
        <div className="scrollable_section"> 
          {my_education_data.map((data, index) => {
            return (
              <>
                <div className="educ_upper_section" key={index}>
                  {/* <div className="educ_container_one">
                    <img src={dyp_college_img} alt="educ_image" />
                  </div> */}
                  <div className="educ_container_two">
                    <div className="upper_container_section">
                      <div className="upper_left">
                        <img
                          src={data.education_logo_link}
                          alt="college logo"
                        />
                      </div>
                      <div className="upper_middle">
                        <h3>{data.college_name}</h3>
                        <div className="upper_right">
                          <h4>{data.college_degree_name}</h4>
                          <h5 style={{ color: "cyan" }}>
                            {data.education_spam}
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="educ_lower_section">
                      {data.education_info.map((indata, index) => {
                        return (
                          <div className="educ_data_info" key={index}>
                            <p>{indata.educ_info}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        </div>
      </div>
    </>
  );
}

export default Education;
