import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

let links = [
  {
    title: "Программирование на языке Python",
    href: "/python",
  },
  {
    title: "Алгоритмы и структуры данных",
    href: "#",
  },
  {
    title: "Разборы задач и практика",
    href: "#",
  },
  {
    title: "Полезные советы",
    href: "#",
  },
  {
    title: "Дальнейшее изучение",
    href: "#",
  },
];

const Roadmap = () => {
  return (
    <Stack
      id="roadmap"
      alignItems="center"
      spacing={1.5}
      sx={{ maxWidth: 350, mx: "auto", mt: 8 }}
    >
      {links.map((link, i) => (
        <Box
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
          }}
          key={link.title}
        >
          {link.title}
          {i !== 4 && (
            <Box
              position="absolute"
              sx={{
                left: i % 2 === 0 ? "100%" : "",
                right: i % 2 === 0 ? "" : "100%",
                top: "50%",
                width: i === 3 ? "55%" : "19%",
                height: 50,
                borderTopRightRadius: i % 2 === 0 ? "13px" : 0,
                borderTopLeftRadius: i % 2 === 0 ? 0 : "13px",
                borderTop: "2px solid black",
                borderRight: i % 2 === 0 ? "2px solid black" : 0,
                borderLeft: i % 2 === 0 ? 0 : "2px solid black",
              }}
            ></Box>
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Roadmap;
