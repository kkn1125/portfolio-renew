import { DEFAULT_COVER } from "@common/variables";
import { ProjectModel } from "@models/project.model";
import { Box, Chip, Grow, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const skillLimit = 3;

type ProjectCardProps = {
  project: ProjectModel | null;
  page: number;
};

function ProjectCard({ project, page }: ProjectCardProps) {
  if (!project) return null;

  return (
    <Grow in={true} timeout={500}>
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
          transition: "all 150ms ease-in-out !important",
          "&:hover": {
            transform: "translateY(-10px) !important",
            boxShadow: (theme) => theme.shadows[10],
          },
        }}
      >
        <Box
          sx={{
            height: "60%",
            backgroundImage: `url(${project.cover ?? DEFAULT_COVER})`,
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
    </Grow>
  );
}

export default ProjectCard;
