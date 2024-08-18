import { ProjectModel } from "@models/project.model";
import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const skillLimit = 2;

type ProjectCardProps = {
  project: ProjectModel | null;
};

function ProjectCard({ project }: ProjectCardProps) {
  if (!project) return <Stack flex={1} p={5}></Stack>;

  return (
    <Paper
      component={Link}
      to={project.path}
      sx={{ flex: 1, p: 5, textDecoration: "none", width: "fit-content" }}
    >
      <Typography component="div" fontSize={16} fontWeight={700} gutterBottom>
        {project.title}
      </Typography>

      <Typography component="div" fontSize={14} gutterBottom>
        {project.description[0].slice(0, 25)}...
      </Typography>
      <Typography component="div" fontSize={16} fontWeight={700}>
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={1}
          alignItems="center"
          title={project.skills.map((skill) => skill.name).join(", ")}
        >
          {project.skills.slice(0, skillLimit).map((skill) => (
            <Chip
              key={skill.name}
              label={skill.name}
              size="small"
              color="info"
              sx={{ fontSize: 10 }}
            />
          ))}
          {project.skills.slice(skillLimit).length > 0 && (
            <Typography component="div" fontSize={10} fontWeight={700}>
              {"+" + project.skills.slice(skillLimit).length}
            </Typography>
          )}
        </Stack>
      </Typography>
    </Paper>
  );
}

export default ProjectCard;
