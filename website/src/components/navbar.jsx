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
                    <Link to="contact">Contact</Link>
                </nav>
                <div style={{color: "white"}}>Sunny Tang</div>
                <div
                    style={{
                        display: "flex",
                        width: "20%",
                        justifyContent: "space-evenly",
                    }}
                >
                    <SocialIcon
                        style={{
                            width: "30px",
                            height: "30px",
                            color: "white",
                        }}
                        url="https://www.linkedin.com/in/sunny-tang-728bb6231/"
                    />
                    <a href="https://github.com/sunnytang00"><GitHubIcon
                        sx={{
                            color: "white",
                            height: "30px",
                            width: "30px",
                        }}
                    /></a>
                    
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navbar;
