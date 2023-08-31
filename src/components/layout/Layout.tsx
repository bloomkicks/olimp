import Box from "@mui/material/Box";

import GoUpButton from "../general-page/GoUpButton";
import PageProgressBar from "../general-page/PageProgressBar";
import Header from "./header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box pt="68px">
      <Header />
      <Box component="main" pb={8} maxWidth={1300} mx="auto" px={{ md: 2 }}>
        {children}
      </Box>
      <PageProgressBar />
      <GoUpButton />
    </Box>
  );
};

export default Layout;
