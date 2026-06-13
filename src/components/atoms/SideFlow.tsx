import { during } from "@libs/during";
import { sliceMultiLine } from "@libs/sliceMultiLine";
import { ProjectModel } from "@models/ProjectModel";
import LaunchIcon from "@mui/icons-material/Launch";
import { Box, Chip, Stack, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

type SideFlowProps = { project: ProjectModel };

function SideFlow({ project }: SideFlowProps) {
  const theme = useTheme();

  return (
    <Box
      position="relative"
      py={4}
      pr={2}
      sx={{
        "&::before": {
          content: '""',
          position: "absolute",
          right: "20px",
          top: 0,
          bottom: 0,
          width: "2px",
          background: theme.palette.secondary.main,
        },
      }}
    >
      <Stack pr={5} alignItems="flex-end" textAlign="right">
        <Stack mb={1}>
          <Stack direction="row" alignItems="center" gap={1}>
            <Box
              component={Link}
              to={project.path}
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                gap: 1,
                color: "inherit",
              }}
            >
              <Typography component="span" fontSize={24} fontWeight={700}>
                {project.title}
              </Typography>
              <LaunchIcon />
            </Box>
          </Stack>
          {project.relations && (
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              gap={1}
            >
              <Typography component="span">관련 프로젝트</Typography>
              <Chip
                component={Link}
                to={project.relations[0].path}
                size="small"
                label={project.relations[0].title}
                color="secondary"
                sx={{ cursor: "pointer" }}
              />
            </Stack>
          )}
        </Stack>

        <Box>
          <Typography
            gutterBottom
            fontSize={20}
            fontWeight={700}
            color="text.secondary"
            sx={{ textDecoration: "none" }}
            title={project.description.join("\n")}
          >
            {sliceMultiLine(project.description, 30)}
          </Typography>
          <Typography
            gutterBottom
            fontSize={16}
            fontWeight={700}
            color="text.secondary"
          >
            {project.team} / {project.roles[0].toUpperCase()}
          </Typography>
        </Box>
        <Typography fontSize={14}>
          {during(project.start, project.end, "진행 중")}
        </Typography>
      </Stack>

      <Box
        position="absolute"
        top="50px"
        right={0}
        width={40}
        height={40}
        sx={{
          color: (theme) => theme.palette.secondary.contrastText,
          fontWeight: "bold",
          fontSize: "1.2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          backgroundColor: (theme) => theme.palette.secondary.main,
          transform: "translateY(-50%)",
          zIndex: 2,
        }}
      >
        {project.title[0]}
      </Box>
    </Box>
  );
}

export default SideFlow;
