import React from "react";
import { useNavigate } from "react-router-dom";
import { ListItem, ListItemButton } from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import CodeIcon from "@mui/icons-material/Code";
import ListItemText from "@mui/material/ListItemText";

const NavComponent = ({ title, link }) => {
    const navigate = useNavigate();
    return (
        <ListItem sx={{ marginTop: "5%", marginBottom: "5%" }} disablePadding>
            <ListItemButton
                onClick={() => {
                    if (title === "Source Code") {
                        window.location.href =
                            "https://github.com/sunnytang00/sunnytang00.github.io/tree/main";
                    } else {
                        navigate(link);
                    }
                }}
            >
                <ListItemIcon>
                    {title === "About Me" && (
                        <EmojiPeopleIcon sx={{ color: "#6A8084" }} />
                    )}
                    {title === "Home" && <HomeIcon sx={{ color: "#6A8084" }} />}
                    {title === "Projects" && (
                        <TerminalIcon sx={{ color: "#6A8084" }} />
                    )}
                    {title === "Source Code" && (
                        <CodeIcon sx={{ color: "#6A8084" }} />
                    )}
                </ListItemIcon>
                <ListItemText
                    sx={{ color: "#8dadb3", fontFamily: "Cascadia Code" }}
                    primary={title}
                />
            </ListItemButton>
        </ListItem>
    );
};

export default NavComponent;
