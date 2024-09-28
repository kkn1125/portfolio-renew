import { calcDiffDate } from "@libs/calcDiffDate";
import { during } from "@libs/during";
import { ProjectModel } from "@models/project.model";
import LaunchIcon from "@mui/icons-material/Launch";
import { Box, Chip, Stack, Typography } from "@mui/material";
import { useMemo } from "react";
import { Link } from "react-router-dom";

type SideFlowProps = { project: ProjectModel };

function SideFlow({ project }: SideFlowProps) {
  const calcDate = useMemo(() => {
    return calcDiffDate(project.end, project.start);
  }, [project.end, project.start]);

  return (
    <Stack
      position="relative"
      py={5}
      minHeight={120}
      sx={{
        borderRight: (theme) =>
          `3px solid ${theme.palette.secondary.main + "56"}`,
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
              <Typography component="span">Related</Typography>
              <Chip
                component={Link}
                to={project.relations[0].path}
                size="small"
                label={project.relations[0].title}
                color="error"
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
            color="GrayText"
            sx={{ textDecoration: "none" }}
          >
            {project.description}
          </Typography>
          <Typography gutterBottom fontSize={16} fontWeight={700} color="grey">
            {project.team} / {project.roles[0].toUpperCase()}
          </Typography>
        </Box>
        <Stack direction="row" gap={1} alignItems="center">
          <Typography fontSize={14}>
            {during(project.start, project.end, "진행 중")}
          </Typography>
          <Chip
            color="primary"
            size="small"
            label={calcDate + " month" + (calcDate > 1 ? "s" : "")}
            sx={{ fontSize: 12, fontWeight: 700 }}
          />
        </Stack>
      </Stack>

      <Box
        position="absolute"
        top="48px"
        right={0}
        width={20}
        height={20}
        sx={{
          borderRadius: "50%",
          background: (theme) => theme.palette.secondary.main,
          transform: "translate(calc(50% + 1.5px), 0%)",
          transition: "ease-in-out 150ms",
          ["&:hover"]: {
            boxShadow: "1px 2px 5px 1px #565656a6",
          },
        }}
      />
    </Stack>
  );
}

export default SideFlow;
