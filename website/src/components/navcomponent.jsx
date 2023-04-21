import React from "react";
import { useNavigate } from "react-router-dom";
import { ListItem, ListItemButton } from "@mui/material";
import TerminalIcon from '@mui/icons-material/Terminal';
import ListItemIcon from "@mui/material/ListItemIcon";

const NavComponent = ({title, link}) => {
    const navigate = useNavigate();
    return (
        <ListItem>
            <ListItemButton onClick={() => {
                navigate(link);
            }}>
                <ListItemIcon>
                    <TerminalIcon />
                </ListItemIcon>
                {title}
            </ListItemButton>
        </ListItem>
    );
}

export default NavComponent;