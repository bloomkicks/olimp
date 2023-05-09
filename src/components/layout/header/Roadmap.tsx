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
      sx={{ maxWidth: 350, mx: "auto", mt: 8 }}
    >
      {links.map((link, i) => (
        <Box
          component={Link}
          href={link.href}
          key={link.title}
          sx={{
            position: "relative",
            alignSelf: i % 2 === 1 ? "flex-end" : "flex-start",
            px: 2,
            py: 1.25,
            maxWidth: 250,
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
                width: "19%",
                height: 50,
                borderTopRightRadius: i % 2 === 0 ? "13px" : 0,
                borderTopLeftRadius: i % 2 === 0 ? 0 : "13px",
                borderTop: "2px solid black",
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
