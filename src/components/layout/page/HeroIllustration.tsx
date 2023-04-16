import Box from "@mui/material/Box";

const HeroIllustration = ({
  src,
  alt,
  sx,
}: {
  src: string;
  alt: string;
  sx?: any;
}) => {
  return (
    <Box component="img" src={src} alt={alt} sx={sx || {}}></Box>
  );
};

export default HeroIllustration;
