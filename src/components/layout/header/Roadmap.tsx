import { useRouter } from "next/router";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Link from "next/link";

let links = [
  {
    title: "Программирование на языке Python",
    href: "/python",
  },
  {
    title: "Алгоритмы и структуры данных",
    href: "/algorithms",
  },
  {
    title: "Разборы задач и практика",
    href: "/practice",
  },
  {
    title: "Компьютерные науки и математика",
    href: "/science",
  },
  {
    title: "Советы от победителей",
    href: "/advice",
  },
];

const Roadmap = () => {
  const router = useRouter();

  return (
    <Stack
      id="roadmap"
      alignItems="center"
      spacing={1.5}
      sx={{
        maxWidth: { xs: 350, md: 300 },
        mx: "auto",
        mt: 8,
        width: "90%",
      }}
    >
      {links.map((link, i) => (
        <Box
          component={Link}
          href={link.href}
          key={link.title}
          sx={{
            position: "relative",
            width: "100%",
            alignSelf: i % 2 === 1 ? "flex-end" : "flex-start",
            px: 2,
            py: 1.25,
            maxWidth: { xs: 250, md: "none" },
            fontSize: "16px",
            textAlign: "center",
            borderRadius: "10px",
            border: "1px solid black",
            bgcolor: "white",
            cursor: "pointer",
            color: router.pathname === link.href ? "primary.main" : "black",
            textDecoration: "none",
          }}
        >
          {link.title}
          {i !== 4 && (
            <Box
              position="absolute"
              sx={{
                left: i % 2 === 0 ? "100%" : "",
                right: i % 2 === 0 ? "" : "100%",
                top: "50%",
                width: { xs: "19%", md: 35 },
                height: { xs: 50, md: 58 },
                borderTopRightRadius: i % 2 === 0 ? "20px" : 0,
                borderTopLeftRadius: i % 2 === 0 ? 0 : "20px",
                borderBottomLeftRadius: i % 2 === 0 ? 0 : { md: "20px" },
                borderBottomRightRadius: i % 2 === 1 ? 0 : { md: "20px" },
                borderTop: "2px solid black",
                borderBottom: { md: "2px solid black" },
                borderRight: i % 2 === 0 ? "2px solid black" : 0,
                borderLeft: i % 2 === 0 ? 0 : "2px solid black",
                pointerEvents: "none",
              }}
            ></Box>
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Roadmap;
