import { Container, Stack, Typography } from "@mui/material";

function About() {
  return (
    <Stack py={5} flex={1} alignItems="center" overflow="auto" height="inherit">
      <Container maxWidth="lg" sx={{ flex: 1 }}>
        <Typography component="div" fontSize={32} fontWeight={700}>
          About
        </Typography>
        <Typography>포트폴리오 및 이력을 정리한 페이지입니다.</Typography>
      </Container>
    </Stack>
  );
}

export default About;
