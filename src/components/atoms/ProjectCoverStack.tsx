import { roleTranslate } from "@common/enums/role";
import { DEFAULT_COVER } from "@common/variables";
import { during } from "@libs/during";
import { getImageUrl } from "@libs/getResource";
import { ProjectModel } from "@models/ProjectModel";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";

interface ProjectCoverStackProps {
  projectModel: ProjectModel;
}

export const ProjectCoverStack: React.FC<ProjectCoverStackProps> = ({
  projectModel,
}) => {
  const theme = useTheme();
  const coverUrl = getImageUrl(projectModel.cover ?? DEFAULT_COVER);
  const period = during(projectModel.start, projectModel.end, "진행 중");
  const roleLabel = projectModel.roles
    .map((role) => roleTranslate[role])
    .join(" · ");

  return (
    <Box
      sx={{
        pt: { xs: 3, md: 4 },
        pb: { xs: 3, md: 5 },
        background: `linear-gradient(180deg, ${alpha(theme.palette.primary.main, theme.palette.mode === "light" ? 0.06 : 0.12)} 0%, transparent 100%)`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container sx={{ gap: { xs: 3, md: 4 }, alignItems: "center" }}>
          <Grid sx={{ width: { xs: "100%", md: "50%" } }}>
            <Box
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: theme.shadows[2],
                aspectRatio: "16 / 10",
                backgroundColor: theme.palette.background.highlight,
              }}
            >
              <Box
                component="img"
                src={coverUrl}
                alt={`${projectModel.title} 커버`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
          </Grid>

          <Grid sx={{ width: { xs: "100%", md: "50%" } }}>
            <Stack sx={{ gap: 2 }}>
              <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                <Chip
                  size="small"
                  color={projectModel.isSideProject ? "secondary" : "primary"}
                  label={
                    projectModel.isSideProject
                      ? projectModel.team === "개인"
                        ? "Personal"
                        : "Side Project"
                      : "Professional"
                  }
                />
                <Chip
                  size="small"
                  variant="outlined"
                  label={projectModel.company}
                />
              </Stack>

              <Typography
                component="h1"
                sx={{ variant: "h3", fontWeight: 700, lineHeight: 1.2 }}
              >
                {projectModel.title}
              </Typography>

              <Typography variant="body2" sx={{
                color: "text.secondary"
              }}>
                {period} · {projectModel.team} · {roleLabel}
              </Typography>

              <Stack sx={{ gap: 1 }}>
                {projectModel.description.map((desc) => (
                  <Typography
                    key={desc}
                    variant="body1"
                    sx={{
                      color: "text.primary",
                      lineHeight: 1.7
                    }}>
                    {desc}
                  </Typography>
                ))}
              </Stack>

              {(projectModel.github ||
                (projectModel.demoSites &&
                  projectModel.demoSites.length > 0)) && (
                <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                  {projectModel.github && (
                    <Button
                      component="a"
                      href={projectModel.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      size="small"
                      startIcon={<GitHubIcon />}
                      sx={{ minHeight: 40 }}
                    >
                      GitHub
                    </Button>
                  )}
                  {projectModel.demoSites?.map((demo) => (
                    <Button
                      key={demo}
                      component="a"
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      size="small"
                      startIcon={<LanguageOutlinedIcon />}
                      sx={{ minHeight: 40 }}
                    >
                      Demo
                    </Button>
                  ))}
                </Stack>
              )}

              {projectModel.relations && projectModel.relations.length > 0 && (
                <Stack
                  direction="row"
                  sx={{
                    alignItems: "center",
                    gap: 1,
                    flexWrap: "wrap",
                  }}
                >
                  <Typography
                    sx={{ variant: "caption", color: "text.secondary" }}
                  >
                    관련 프로젝트
                  </Typography>
                  {projectModel.relations.map((relation) => (
                    <Chip
                      key={relation.path}
                      component={Link}
                      to={relation.path}
                      size="small"
                      label={relation.title}
                      clickable
                      color="secondary"
                      variant="outlined"
                    />
                  ))}
                </Stack>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
