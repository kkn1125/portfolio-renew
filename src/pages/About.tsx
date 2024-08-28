import { Container, Divider, Stack, Typography } from "@mui/material";
import { Information } from "@storage/introduce/information";
import { Link } from "react-router-dom";

function About() {
  return (
    <Stack py={5} flex={1} alignItems="center" overflow="auto" height="inherit">
      <Container maxWidth="lg" sx={{ flex: 1 }}>
        <Typography component="div" fontSize={32} fontWeight={700}>
          📚 About
        </Typography>
        <Typography>포트폴리오 및 이력을 정리한 페이지입니다.</Typography>
        <Divider sx={{ my: 2 }} />
        <Stack>
          <Typography fontWeight={700}>Github:</Typography>
          <Typography component={Link} to={Information.github} target="_blank">
            {Information.github}
          </Typography>
        </Stack>
        <Stack>
          <Typography fontWeight={700}>Blog:</Typography>
          <Typography component={Link} to={Information.blog} target="_blank">
            {Information.blog}
          </Typography>
        </Stack>
        <Stack>
          <Typography fontWeight={700}>Email:</Typography>
          <Typography
            component={Link}
            to={"mailto:" + Information.email}
            target="_blank"
          >
            {Information.email}
          </Typography>
        </Stack>
      </Container>
    </Stack>
  );
}

export default About;
