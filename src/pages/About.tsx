import { Container, Divider, Stack, Typography } from "@mui/material";
import { Information } from "@storage/introduce/information";
import { Link } from "react-router-dom";

function About() {
  return (
    <Stack py={8} flex={1} alignItems="center" overflow="auto" height="inherit" bgcolor="#f5f5f5">
      <Container maxWidth="lg" sx={{ flex: 1 }}>
        <Typography variant="h2" fontWeight={700} mb={4} color="primary">
          About Me
        </Typography>
        <Typography variant="body1" mb={4}>
          포트폴리오 및 이력을 정리한 페이지입니다.
        </Typography>
        <Divider sx={{ mb: 4 }} />
        <Stack spacing={3}>
          {[
            { label: "Github", value: Information.github },
            { label: "Blog", value: Information.blog },
            { label: "Email", value: Information.email },
          ].map((item) => (
            <Stack key={item.label} direction="row" alignItems="center" spacing={2}>
              <Typography variant="subtitle1" fontWeight={600} minWidth={80}>
                {item.label}
              </Typography>
              <Typography
                component={Link}
                to={item.label === "Email" ? `mailto:${item.value}` : item.value}
                target="_blank"
                sx={{
                  color: "text.secondary",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {item.value}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Stack>
  );
}

export default About;
