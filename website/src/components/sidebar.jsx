import React from "react";
import { Outlet } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useLocation } from "react-router-dom";
import NavComponent from "./navcomponent";
import List from "@mui/material/List";

const drawerWidth = 200;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    })
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
    const [pageTitle, setPageTitle] = React.useState("");
    const path = useLocation().pathname;
    React.useEffect(() => {
        switch (path) {
            case "/":
                setPageTitle("Home");
                break;
            case "/projects":
                setPageTitle("Projects");
                break;
            case "/aboutme":
                setPageTitle("About Me");
                break;
            default:
                break;
        }
    }, [path]);
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                sx={{ backgroundColor: "#002B36" }}
                position="fixed"
                open={open}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: "none" }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div>{pageTitle}</div>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
                PaperProps={{
                    sx: {
                        color: "white",
                        backgroundColor: "#073642",
                    },
                }}
            >
                <DrawerHeader>
                    <div style={{ color: "#8dadb3", marginRight: "8%", fontWeight: "bolder" }}>Navigation</div>
                    <IconButton
                        sx={{ color: "white" }}
                        onClick={handleDrawerClose}
                    >
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <List disablePadding>
                    <Divider sx={{ backgroundColor: "#6A8084" }} />
                    <NavComponent title="Home" link="/" />
                    <Divider sx={{ backgroundColor: "#6A8084" }} />
                    <NavComponent title="Projects" link="/projects" />
                    <Divider sx={{ backgroundColor: "#6A8084" }} />
                    <NavComponent title="About Me" link="/aboutme" />
                    <Divider sx={{ backgroundColor: "#6A8084" }} />
                </List>
                <List sx={{ marginTop: "auto" }}>
                    <Divider sx={{ backgroundColor: "#6A8084" }} />
                    <NavComponent
                        sx={{ color: "white", fontWeight: "normal" }}
                        title="Source Code"
                    />
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Outlet />
            </Main>
        </Box>
    );
}
