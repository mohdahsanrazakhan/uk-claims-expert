import * as React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
// import ToggleColorMode from "./ToggleColorMode";
import logo from '../assets/logo.svg'

const logoStyle = {
  width: "160px",
  height: "auto",
  cursor: "pointer",
  margin: "0 0 7px 15px"
};

function Navbar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    sectionElement.scrollIntoView({ behavior: 'smooth' })
    // const offset = 128;
    // if (sectionElement) {
    //   const targetScroll = sectionElement.offsetTop - offset;
    //   sectionElement.scrollIntoView({ behavior: "smooth" });
    //   window.scrollTo({
    //     top: targetScroll,
    //     behavior: "smooth",
    //   });
    //   setOpen(false);
    // }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor: "rgba(116, 133, 152, 0.9)",
              border: "1px solid rgba(0, 0, 0, 0.5)",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)"
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
              }}
            >
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "auto 0"}}>
              <img
                src={logo}
                style={logoStyle}
                alt="logo of mmdf"
              />
              </div>
              <Box sx={{ display: { xs: "none", md: "flex" }, ml: "auto" }}>
                <MenuItem
                  onClick={() => scrollToSection("home")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="#f5f5f5" fontSize="18px" >
                    Home
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("aboutus")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="#f5f5f5" fontSize="18px" >
                    About Us
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("services")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="#f5f5f5" fontSize="18px" >
                    Services
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("testimonials")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="#f5f5f5" fontSize="18px" >
                    Testimonials
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("contactus")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="#f5f5f5" fontSize="18px" >
                    Contact Us
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
                style={{ color: "#f5f5f5" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "rgba(116, 133, 152, 0.5)",
                    color: "#000",
                    flexGrow: 1,
                  }}
                >
                  <MenuItem onClick={() => scrollToSection("home")}>
                    Home
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("aboutus")}>
                    About Us
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("services")}>
                    Services
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("testimonials")}>
                    Testimonials
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("contactus")}>
                    Contact Us
                  </MenuItem>
                  <Divider />
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default Navbar;