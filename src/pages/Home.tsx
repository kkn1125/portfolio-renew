import translate from "@common/translate";
import { roleTranslate } from "@common/enums/role";
import { PROFILE_IMAGE, SVG_ICON_SIZE } from "@common/variables";
import Flow from "@components/atoms/Flow";
import ScrollReveal from "@components/atoms/ScrollReveal";
import SideFlow from "@components/atoms/SideFlow";
import { usePrefersReducedMotion } from "@hooks/useScrollReveal";
import { getResumeDocuments } from "@libs/getResumeDocuments";
import { sortByEnd } from "@libs/sortBy";
import { CopyTemplate } from "@models/CopyTemplate";
import Resume from "@models/Resume";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import {
  Box,
  Button,
  Chip,
  Container,
  Paper,
  Portal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  keyframes,
  useTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { companies } from "@storage/companies";
import { companyAnder } from "@storage/companies/company.ander";
import { companyDaekyung } from "@storage/companies/company.daekyung";
import { companyFov } from "@storage/companies/company.fov";
import { companyHit } from "@storage/companies/company.hit";
import { companyOnflou } from "@storage/companies/company.onflou";
import { companyReborn } from "@storage/companies/company.reborn";
import { sideProject } from "@storage/companies/side.project";
import { Information } from "@storage/introduce/information";
import sideProjects from "@storage/side-projects";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const SLIDE_ITEM_GAP = 24;
const SLIDE_SPEED = 50;
const cheat = "copyResume";

function Home() {
  const theme = useTheme();
  const reducedMotion = usePrefersReducedMotion();
  const [openInput, setOpenInput] = useState(false);
  const [inputText, setInputText] = useState("");

  const skillItems = Information.skill.main.concat(Information.skill.sub);

  const itemWidth = SVG_ICON_SIZE + SLIDE_ITEM_GAP;
  const totalWidth = itemWidth * skillItems.length;
  const slideTime = totalWidth / SLIDE_SPEED;

  const infinitySlide = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(-${totalWidth}px); }
  `;

  const heroBackground = useMemo(
    () =>
      theme.palette.mode === "light"
        ? `radial-gradient(ellipse at 20% 20%, ${alpha(theme.palette.accent.main, 0.12)} 0%, transparent 50%),
           ${theme.palette.background.default}`
        : `radial-gradient(ellipse at 20% 20%, ${alpha(theme.palette.accent.main, 0.15)} 0%, transparent 50%),
           ${theme.palette.background.default}`,
    [theme]
  );

  useEffect(() => {
    function handleHiddenCopyData(e: KeyboardEvent) {
      if (e.key === "/") {
        setOpenInput(true);
        e.stopPropagation();
        e.preventDefault();
      }
      if (e.key === "Escape") {
        setOpenInput(false);
      }

      if (e.ctrlKey && e.shiftKey && e.altKey && e.key === "P") {
        window.print();
      }
    }

    window.addEventListener("keydown", handleHiddenCopyData);
    return () => window.removeEventListener("keydown", handleHiddenCopyData);
  }, []);

  function handleChangeInputText(e: React.ChangeEvent<HTMLInputElement>) {
    setInputText(e.currentTarget.value || "");
  }

  function handleSubmitInputText(e: React.FormEvent) {
    e.preventDefault();
    if (openInput && inputText === cheat) {
      setOpenInput(false);
      const projectGap = "\n\n";
      const result1 = sortByEnd(
        Object.values(companies).flatMap((item) => item.projects)
      )
        .map(CopyTemplate)
        .join(projectGap);
      const result2 = sortByEnd(sideProjects)
        .map(CopyTemplate)
        .join(projectGap);
      const resumeList = getResumeDocuments(
        Information.resume as unknown as Resume[]
      );
      const title = Information.title;
      const description = Information.description.join("\n\n");
      const useStacks = Information.skill.main
        .concat(Information.skill.sub)
        .map((skill) => skill.name)
        .join(", ");
      navigator.clipboard.writeText(
        `"${title}"\n\n\n${description}\n\n\n${useStacks}\n\n\n${resumeList}\n\n\n\n# 실무 경력\n\n${result1}\n\n\n# 사이드 프로젝트\n\n${result2}`
      );
    }
    setInputText("");
  }

  return (
    <Stack id="main-content" flex={1} overflow="auto" height="inherit">
      {/* Hero Section */}
      <Box py={{ xs: 4, md: 6 }} sx={{ background: heroBackground }}>
        {openInput && (
          <Portal>
            <Box component="form" onSubmit={handleSubmitInputText}>
              <TextField
                placeholder="?"
                size="small"
                autoFocus
                onChange={handleChangeInputText}
                sx={{
                  position: "absolute",
                  transform: "translateX(-50%)",
                  left: "50%",
                  bottom: 100,
                  ["& fieldset"]: {
                    backgroundColor: alpha(theme.palette.background.paper, 0.7),
                  },
                }}
              />
            </Box>
          </Portal>
        )}
        <Container maxWidth="md">
          <Paper
            elevation={0}
            sx={{
              borderRadius: 4,
              p: { xs: 3, md: 5 },
              boxShadow: theme.shadows[2],
              border: `1px solid ${theme.palette.divider}`,
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              alignItems={{ xs: "center", md: "flex-start" }}
              gap={4}
            >
              <ScrollReveal>
                <Box
                  component="img"
                  src={PROFILE_IMAGE}
                  alt="김경남 프로필"
                  width={210}
                  height={210}
                  sx={{
                    width: { xs: 160, md: 210 },
                    height: { xs: 160, md: 210 },
                    borderRadius: "50%",
                    objectFit: "cover",
                    boxShadow: `0 0 0 4px ${theme.palette.accent.main}`,
                    flexShrink: 0,
                  }}
                />
              </ScrollReveal>

              <Stack flex={1} gap={2} alignItems={{ xs: "center", md: "flex-start" }}>
                <Stack alignItems={{ xs: "center", md: "flex-start" }} gap={0.5}>
                  <Typography variant="h4" fontWeight="bold" color="text.primary">
                    {Information.name}
                  </Typography>
                  <Typography variant="h6" fontWeight={500} color="text.secondary">
                    {roleTranslate[Information.position]} 개발자
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    textAlign={{ xs: "center", md: "left" }}
                    sx={{ mt: 1, maxWidth: 520 }}
                  >
                    {Information.title}
                  </Typography>
                </Stack>

                <Box sx={{ width: "100%" }}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    sx={{ color: "accent.main", mb: 1 }}
                  >
                    핵심 역량
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {Information.coreCompetencies.map((competency, index) => (
                      <Chip
                        key={index}
                        label={competency}
                        sx={{
                          backgroundColor: theme.palette.background.highlight,
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Stack>
                </Box>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  gap={1.5}
                  flexWrap="wrap"
                  justifyContent={{ xs: "center", md: "flex-start" }}
                  sx={{ width: "100%" }}
                >
                  <Button
                    component={Link}
                    to="/portfolio"
                    variant="contained"
                    color="primary"
                    startIcon={<WorkOutlineIcon />}
                    sx={{ minHeight: 44 }}
                  >
                    Portfolio 보기
                  </Button>
                  <Button
                    component="a"
                    href={Information.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    sx={{ minHeight: 44 }}
                  >
                    GitHub
                  </Button>
                  <Button
                    component="a"
                    href={Information.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    startIcon={<ArticleOutlinedIcon />}
                    sx={{ minHeight: 44 }}
                  >
                    Blog
                  </Button>
                  <Button
                    component={Link}
                    to="/about"
                    variant="text"
                    color="secondary"
                    sx={{ minHeight: 44 }}
                  >
                    About 더보기
                  </Button>
                </Stack>
              </Stack>
            </Stack>

            <Box
              mt={3}
              sx={{
                backgroundColor: theme.palette.background.highlight,
                py: 2,
                px: 2,
                borderRadius: 2,
              }}
            >
              <Typography
                variant="body1"
                color="text.primary"
                sx={{ whiteSpace: "pre-wrap", userSelect: "text" }}
              >
                {Information.description.join("\n\n")}
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* Tech Stack Section */}
      <Box py={5} sx={{ backgroundColor: theme.palette.background.default }}>
        <Container maxWidth="lg">
          <ScrollReveal>
            <Stack alignItems="center" spacing={3}>
              <Typography variant="h4" fontWeight={600}>
                Tech Stack
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                주요 기술
              </Typography>
              <Box
                id="stacks"
                width="100%"
                sx={{
                  overflow: "hidden",
                  position: "relative",
                  "&::before, &::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    width: "100px",
                    height: "100%",
                    zIndex: 2,
                    pointerEvents: "none",
                  },
                  "&::before": {
                    left: 0,
                    background: `linear-gradient(to right, ${theme.palette.background.default}, transparent)`,
                  },
                  "&::after": {
                    right: 0,
                    background: `linear-gradient(to left, ${theme.palette.background.default}, transparent)`,
                  },
                }}
              >
                <Stack
                  direction="row"
                  flexWrap="nowrap"
                  width="max-content"
                  gap={3}
                  sx={{
                    animation: reducedMotion
                      ? "none"
                      : `${infinitySlide} ${slideTime}s linear infinite`,
                    "&:hover": {
                      animationPlayState: reducedMotion ? "running" : "paused",
                    },
                  }}
                >
                  {[...skillItems, ...skillItems].map(({ name, icon }, index) => (
                    <Tooltip
                      key={`${name}-${index}`}
                      title={translate[name]}
                      placement="top"
                    >
                      <Box
                        dangerouslySetInnerHTML={{ __html: icon }}
                        width={SVG_ICON_SIZE}
                        height={SVG_ICON_SIZE}
                        sx={{
                          opacity: 0.7,
                          transition: "opacity 150ms ease",
                          cursor: "default",
                          "&:hover": { opacity: 1 },
                        }}
                      />
                    </Tooltip>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </ScrollReveal>
        </Container>
      </Box>

      {/* Work Experiences Section */}
      <Box py={5} sx={{ background: theme.palette.impact.main }}>
        <Container maxWidth="lg">
          <ScrollReveal>
            <Typography
              fontSize={30}
              fontWeight={700}
              align="center"
              gutterBottom
            >
              Work Experiences
            </Typography>
          </ScrollReveal>

          <Stack px={1.5} pt={{ xs: 4, md: 3 }} pb={5} width="inherit">
            <Flow company={companyOnflou} />
            <Flow company={companyHit} />
            <Flow company={companyFov} />
            <Flow company={companyAnder} />
            <Flow company={companyReborn} />
            <Flow company={companyDaekyung} />
          </Stack>
        </Container>
      </Box>

      {/* Side Projects Section */}
      <Box py={5} sx={{ backgroundColor: theme.palette.background.default }}>
        <Container maxWidth="lg">
          <ScrollReveal>
            <Typography
              fontSize={30}
              fontWeight={700}
              align="center"
              gutterBottom
            >
              Side Projects
            </Typography>
          </ScrollReveal>

          <Box px={1.5} py={5}>
            {sideProject.projects.map((project, index) =>
              typeof project === "string" ? (
                <Typography key={project + index} px={2}>
                  {project}
                </Typography>
              ) : (
                <SideFlow key={project.title} project={project} />
              )
            )}
          </Box>
        </Container>
      </Box>
    </Stack>
  );
}

export default Home;
