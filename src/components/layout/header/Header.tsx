import Link from "next/link";
import NavMenu from "./NavMenu";
import { useState } from "react";
import Image from "next/image";
import MenuSetter from "./MenuSetter";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

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
        zIndex: 100,
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: "1366px",
          justifyContent: "space-between",
          alignItems: "center",
          px: 3.5,
        }}
      >
        <Box
          component={Link}
          href="/main"
          sx={{
            position: "relative",
            bottom: 2,
          }}
        >
          <Image
            unoptimized
            src="./long-logo.png"
            alt="ОЛИМП"
            width={149.5}
            height={42.5}
          />
        </Box>
        <MenuSetter onClick={setMenuHandler} isCross={isMenuOpen} />
        <NavMenu open={isMenuOpen} onClose={setMenuHandler} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
