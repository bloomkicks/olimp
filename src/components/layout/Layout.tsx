import Header from "./header/Header";
import Box from "@mui/material/Box";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box pt="68px">
      <Header />
      <Box component="main" pb={8}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
