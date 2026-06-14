import { DEFAULT_COVER } from "@common/variables";
import { getImageUrl } from "@libs/getResource";
import { ProjectModel } from "@models/ProjectModel";
import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const skillLimit = 3;

type ProjectCardProps = {
  project: ProjectModel | null;
  page: number;
};

function ProjectCard({ project, page }: ProjectCardProps) {
  if (!project) return null;

  return (
    <Paper
      component={Link}
      to={project.path}
      state={{ page }}
      elevation={3}
      sx={{
        display: "block",
        width: { xs: "100%", lg: "calc((100% - 72px) / 4)" },
        height: 350,
        overflow: "hidden",
        position: "relative",
        textDecoration: "none",
        transition: "box-shadow 150ms ease-in-out, transform 150ms ease-in-out",
        backgroundColor: (theme) => theme.palette.background.paper,
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: (theme) =>
            theme.palette.mode === "light"
              ? theme.shadows[6]
              : theme.shadows[4],
        },
      }}
    >
      <Chip
        size="small"
        color={project.isSideProject ? "secondary" : "primary"}
        label={
          project.isSideProject
            ? project.team === "개인"
              ? "Personal"
              : "Team"
            : "Professional"
        }
        sx={{ position: "absolute", right: 5, top: 5 }}
      />
      <Box
        sx={{
          height: "60%",
          backgroundImage: `url(${getImageUrl(project.cover ?? DEFAULT_COVER)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom noWrap>
          {project.title}
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
          {project.description.join(" ")}
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          mt={1}
          flexWrap="nowrap"
          overflow="auto"
          sx={{
            ["&::-webkit-scrollbar"]: {
              display: "none",
            },
          }}
        >
          {project.skills.slice(0, skillLimit).map((skill) => (
            <Chip
              key={skill.name}
              label={skill.name}
              size="small"
              sx={{ fontSize: 10, mt: 0.5 }}
            />
          ))}
          {project.skills.length > skillLimit && (
            <Chip
              label={`+${project.skills.length - skillLimit}`}
              size="small"
              sx={{ fontSize: 10, mt: 0.5 }}
            />
          )}
        </Stack>
      </Box>
    </Paper>
  );
}

export default ProjectCard;
