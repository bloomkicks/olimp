import { useState } from "react";

import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";

import MenuSetter from "./MenuSetter";
import NavMenu from "./NavMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function setMenuHandler() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <AppBar
      sx={{
        bgcolor: "#FFFFFF",
        alignItems: "center",
        height: "68px",
        position: "fixed",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          zIndex: 100,
          height: "100%",
          maxWidth: "1366px",
          justifyContent: "space-between",
          alignItems: "center",
          px: 3.5,
        }}
      >
        <Box
          component={Link}
          href="/"
          sx={{
            position: "relative",
            bottom: 1.5,
            color: "black",
            fontWeight: "bold",
            fontSize: "2rem",
            textDecoration: "underline",
          }}
        >
          <Image
            unoptimized
            src={process.env.ASSET_PREFIX + "/long-logo.png"}
            alt="ОЛИМП"
            width={149.5}
            height={42.5}
          />
        </Box>
        <MenuSetter onClick={setMenuHandler} isCross={isMenuOpen} />
      </Toolbar>
      <NavMenu open={isMenuOpen} onClose={setMenuHandler} />
    </AppBar>
  );
};

export default Header;
