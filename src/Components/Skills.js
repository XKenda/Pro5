import React, { useRef } from "react";
import "../index.css";
import Skill from "./Skills_Components/Skill";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

const sk = [
    { id: 1, name: "HTML5", percentage: "90" },
    { id: 2, name: "CSS3", percentage: "85" },
    { id: 3, name: "JavaScript", percentage: "80" },
    { id: 4, name: "React", percentage: "75" },
    { id: 5, name: "Node.js", percentage: "70" }
];

const Skills = () => {
    const con = useRef(null);

    const scrolling = (direction) => {
        
        if (con.current) {
            con.current.scrollBy({
                left: direction === "left" ? -260 : 260,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="skills-bg">
            <div id="skills" className="skills-main-con">
                <h2 className="skills-sec-title">Skills</h2>
                <p className="skills-sec-disc">You can see my skills here</p>
                <div className="skills-child-con">
                    <button className="scrolling-left" onClick={() => scrolling("left")}>
                        <FaCircleArrowLeft />
                    </button>
                    <div className="skills-con" ref={con}>
                        {sk.map((skill) => (
                            <Skill
                                key={skill.id}
                                id={skill.id}
                                percentage={skill.percentage}
                                name={skill.name}
                            />
                        ))}
                    </div>
                    <button className="scrolling-right" onClick={() => scrolling("right")}>
                        <FaCircleArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Skills;
