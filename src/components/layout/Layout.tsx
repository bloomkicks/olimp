import UpButton from "./UpButton";
import ProgressBar from "./ProgressBar";
import Header from "./header/Header";
import Box from "@mui/material/Box";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box pt="68px">
      <Header />
      <Box component="main" pb={8} maxWidth={1366} mx="auto" px={2}>
        {children}
      </Box>
      <ProgressBar />
      <UpButton sx={{}} />
    </Box>
  );
};

export default Layout;
