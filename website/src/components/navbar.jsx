import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/navbar.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
    return (
        <>
        
                <div className="navbox">
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="about">About</Link>
                        <Link to="projects">Projects</Link>
                        {/* <Link to="contact">Contact</Link> */}
                    </nav>
                    <div
                        style={{
                            display: "flex",
                            width: "13%",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                        }}
                    >
                        <SocialIcon
                            style={{
                                width: "32px",
                                height: "32px",
                                color: "white",
                            }}
                            url="https://www.linkedin.com/in/sunny-tang-728bb6231/"
                        />
                        <a style={{display: "flex", alignItems: "center"}} href="https://github.com/sunnytang00">
                            <GitHubIcon
                                sx={{
                                    color: "white",
                                    height: "32px",
                                    width: "32px",
                                }}
                            />
                        </a>
                    </div>
                </div>
                <Outlet />
        </>
    );
};

export default Navbar;
