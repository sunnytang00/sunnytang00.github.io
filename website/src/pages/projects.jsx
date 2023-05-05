import React from "react";
import "../styles/projectpage.css";
import ProjectName from "../components/projectname";
const ProjectPage = () => {
    return (
        <>
            <div style={{ color: "white" }}>
                <div style={{ display: "flex" }}>
                    <div className="nameContainer" style={{ display: "flex", flexDirection: "column", width: "30%", marginLeft: "7%", marginTop: "10%", fontSize: "40px" }}>
                        {/* <div className="projectName fromCenter">Project 1</div>
                        <div className="projectName fromCenter">Project 2</div>
                        <div className="projectName fromCenter">Project 3</div> */}
                        <ProjectName></ProjectName>
                        <ProjectName></ProjectName>
                        <ProjectName></ProjectName>
                    </div>
                    <div style={{width: "50%"}}>Project stuff</div>
                </div>
            </div>
        </>
    );
};

export default ProjectPage;
