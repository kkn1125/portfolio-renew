import { DEFAULT_COVER } from "@common/variables";
import { ProjectModel } from "@models/project.model";
import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const skillLimit = 2;

type ProjectCardProps = {
  project: ProjectModel | null;
};

function ProjectCard({ project }: ProjectCardProps) {
  if (!project) return <Box flex={1} width={270} height={170} />;

  return (
    <Paper
      component={Link}
      to={project.path}
      sx={{
        flex: 1,
        display: "block",
        overflow: "hidden",
        position: "relative",
        textDecoration: "none",
        width: { xs: "auto", lg: 270 },
        height: 170,
        transformStyle: "preserve-3d",
        transition: "300ms ease-in-out",
        ["&::after"]: {
          transition: "300ms ease-in-out",
          content: '""',
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          top: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          filter: "brightness(0.5)",
          backgroundImage: "var(--cover-img)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          clipPath: "polygon(0 0, 50.5% 0, 50.5% 100%, 50% 100%, 0 100%)",
          "--cover-img": `url(${project.cover ?? `${DEFAULT_COVER}`})`,
        },
        ["&::before"]: {
          content: `""`,
          transition: "300ms ease-in-out",
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          top: 0,
          left: 0,
          bottom: 0,
          width: "100%",
          filter: "brightness(0.5)",
          backgroundImage: "var(--cover-img)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          clipPath: "polygon(49.5% 0, 100% 0, 100% 100%, 50% 100%, 49.5% 100%)",
          "--cover-img": `url(${project.cover ?? `${DEFAULT_COVER}`})`,
        },
        ["&>.MuiTypography-root"]: {
          transition: "300ms ease-in-out",
        },
        ["&:hover"]: {
          ["&::before"]: {
            transform: "translateX(100%)",
          },
          ["&::after"]: {
            transform: "translateX(-100%)",
          },
          ["&>.MuiTypography-root"]: {
            transform: "translateY(-100%)",
            opacity: 0,
          },
        },
      }}
    >
      <Typography
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        color={(theme) => theme.palette.secondary.contrastText}
        whiteSpace="balance"
        textAlign="center"
        zIndex={2}
        fontSize={16}
        fontWeight={700}
        sx={{ wordBreak: "keep-all", opacity: 1 }}
      >
        <Box p={2}>{project.title}</Box>
      </Typography>
      <Box m={3}>
        <Typography component="div" fontSize={16} fontWeight={700} gutterBottom>
          {project.title}
        </Typography>

        <Typography
          component="div"
          fontSize={14}
          gutterBottom
          title={project.description.join("\n")}
        >
          {project.description.join("\n").slice(0, 25)}
          {project.description.join("\n").length >= 25 && "..."}
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
      </Box>
    </Paper>
  );
}

export default ProjectCard;
