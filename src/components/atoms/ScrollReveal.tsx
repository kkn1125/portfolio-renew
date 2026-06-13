import { useScrollReveal } from "@hooks/useScrollReveal";
import { Box, Fade } from "@mui/material";
import { ReactNode } from "react";

const REVEAL_DURATION = 200;

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
  threshold?: number;
};

function ScrollReveal({
  children,
  delay = 0,
  threshold = 0.15,
}: ScrollRevealProps) {
  const { ref, visible, reducedMotion } = useScrollReveal(threshold);

  if (reducedMotion) {
    return <Box>{children}</Box>;
  }

  return (
    <Box ref={ref}>
      <Fade
        in={visible}
        timeout={REVEAL_DURATION}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <Box>{children}</Box>
      </Fade>
    </Box>
  );
}

export default ScrollReveal;
