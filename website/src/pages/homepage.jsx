import React from "react";
import image from "../images/profile.jpg";
const HomePage = () => {
    return (
        <>
            <div>
                <div style={{ display: "flex", marginLeft: "1%" }}>
                    <div
                        style={{
                            color: "white",
                            margin: "9%",
                            marginLeft: "9%",
                            width: "34%",
                        }}
                    >
                        <h1 style={{ fontSize: "56px" }}>Hi, I'm Sunny</h1>
                        <h2 style={{ color: "#00abf0" }}>Software Engineer</h2>
                        <p>
                            I'm a full-time student at the University of New
                            South Wales studying Software Engineering and have
                            experience working on projects with both frontend
                            and backend frameworks. I've also written
                            applications in
                            <strong> C, Rust, Python and JavaScript. </strong>
                            If you'd like to talk with me, please contact me
                            through my LinkedIn.
                        </p>
                    </div>
                    <img
                        src={image}
                        style={{
                            width: "30%",
                            marginTop: "6%",
                            marginLeft: "4%",
                        }}
                    ></img>
                </div>
            </div>
        </>
    );
};

export default HomePage;
