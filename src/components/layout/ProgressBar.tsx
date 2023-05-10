import { useState, useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function scrollHandler(e: any) {
      const docHeight = document.documentElement.scrollHeight;
      const viewHeight = window.innerHeight;
      const scroll = window.scrollY;

      const progressVal = Math.ceil((scroll / (docHeight - viewHeight)) * 100);
      if (progress !== progressVal) {
        setProgress(Math.ceil(progressVal));
      }
    }
    document.addEventListener("scroll", scrollHandler);
    window.addEventListener("resize", scrollHandler);
  }, []);

  return (
    <LinearProgress
      variant="determinate"
      color="primary"
      value={progress}
      sx={{
        position: "fixed",
        zIndex: 81,
        bottom: 0,
        left: 0,
        height: 10,
        width: "100%",
        "& .MuiLinearProgress-bar": {
          transition: "transform 300ms linear",
        },
      }}
    />
  );
};

export default ProgressBar;
