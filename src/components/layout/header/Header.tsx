import NavMenu from "./NavMenu";
import { useState } from "react";
import Image from "next/image";
import MenuSetter from "./MenuSetter";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function setMenuHandler() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <AppBar
      sx={{
        bgcolor: "#F2ECFF",
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
        <Image
          unoptimized
          src="/long-logo.png"
          alt="ОЛИМП"
          width={149.5}
          height={42.5}
          style={{ position: "relative", bottom: 3 }}
        />
        <MenuSetter onClick={setMenuHandler} isCross={isMenuOpen} />
        <NavMenu open={isMenuOpen} onClose={setMenuHandler} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
