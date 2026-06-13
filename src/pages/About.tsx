import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Information } from "@storage/introduce/information";
import ScrollReveal from "@components/atoms/ScrollReveal";

const contactItems = [
  {
    label: "Email",
    value: Information.email,
    href: `mailto:${Information.email}`,
    icon: EmailOutlinedIcon,
    external: false,
  },
  {
    label: "Github",
    value: Information.github,
    href: Information.github,
    icon: GitHubIcon,
    external: true,
  },
  {
    label: "Blog",
    value: Information.blog,
    href: Information.blog,
    icon: ArticleOutlinedIcon,
    external: true,
  },
] as const;

function About() {
  const theme = useTheme();

  return (
    <Stack
      py={8}
      flex={1}
      alignItems="center"
      overflow="auto"
      height="inherit"
      sx={{ backgroundColor: theme.palette.background.default }}
    >
      <Container maxWidth="lg" sx={{ flex: 1 }}>
        <ScrollReveal>
          <Typography variant="h3" fontWeight={700} mb={4} color="primary">
            About Me
          </Typography>
        </ScrollReveal>

        <Stack spacing={2} mb={6}>
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <Paper
                key={item.label}
                component="a"
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                elevation={0}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: 2.5,
                  minHeight: 64,
                  textDecoration: "none",
                  color: "inherit",
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 2,
                  transition: "border-color 150ms ease, background-color 150ms ease",
                  "&:hover": {
                    borderColor: theme.palette.accent.main,
                    backgroundColor: theme.palette.background.highlight,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    backgroundColor: theme.palette.background.highlight,
                    color: theme.palette.accent.main,
                  }}
                >
                  <Icon />
                </Box>
                <Stack flex={1}>
                  <Typography variant="subtitle2" color="text.secondary">
                    {item.label}
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    {item.value}
                  </Typography>
                </Stack>
              </Paper>
            );
          })}
        </Stack>

        <Typography variant="h5" fontWeight={700} mb={2} color="primary">
          상세 이력
        </Typography>

        <Stack spacing={1}>
          {Information.resume.map((resume, index) => (
            <Accordion
              key={resume.title}
              elevation={0}
              sx={{
                border: `1px solid ${theme.palette.divider}`,
                "&:before": { display: "none" },
                borderRadius: "8px !important",
                overflow: "hidden",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`resume-${index}-content`}
                id={`resume-${index}-header`}
                sx={{ minHeight: 56 }}
              >
                <Stack gap={0.5}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {resume.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {resume.contents[0]}
                  </Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 0 }}>
                <Stack spacing={2}>
                  {resume.contents.map((paragraph, pIndex) => (
                    <Typography
                      key={pIndex}
                      variant="body2"
                      color="text.primary"
                      sx={{ whiteSpace: "pre-wrap", userSelect: "text" }}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Container>
    </Stack>
  );
}

export default About;
