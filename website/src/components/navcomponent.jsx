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
                        <EmojiPeopleIcon sx={{ color: "white" }} />
                    )}
                    {title === "Home" && <HomeIcon sx={{ color: "white" }} />}
                    {title === "Projects" && (
                        <TerminalIcon sx={{ color: "white" }} />
                    )}
                    {title === "Source Code" && (
                        <CodeIcon sx={{ color: "white" }} />
                    )}
                </ListItemIcon>
                <ListItemText primary={title} />
            </ListItemButton>
        </ListItem>
    );
};

export default NavComponent;
