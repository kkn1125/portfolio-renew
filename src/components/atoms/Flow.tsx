import { calcDiffDate } from "@libs/calcDiffDate";
import { during } from "@libs/during";
import { CompanyModel } from "@models/company.model";
import LaunchIcon from "@mui/icons-material/Launch";
import {
  Box,
  Chip,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";

type FlowProps = { company: CompanyModel };

function Flow({ company }: FlowProps) {
  const { isIt, name, team, roles, description, projects, start, end } =
    company;
  const navigate = useNavigate();
  const theme = useTheme();
  const calcDate = useMemo(() => calcDiffDate(end, start), [end, start]);

  return (
    <Box
      position="relative"
      sx={{
        "&::before": {
          content: '""',
          position: "absolute",
          left: "20px",
          top: 0,
          bottom: 0,
          width: "2px",
          background: theme.palette.primary.main,
        },
      }}
    >
      <Stack direction="row" gap={4} sx={{ py: 4 }}>
        <Box
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: theme.palette.primary.main,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: theme.palette.primary.contrastText,
            fontWeight: "bold",
            fontSize: "1.2rem",
            zIndex: 1,
          }}
        >
          {name.replace(/\(주\)/, "")[0]}
        </Box>
        <Stack gap={2} flex={1}>
          <Stack direction="row" gap={1} alignItems="center">
            <Typography variant="h5" fontWeight="bold" color="primary">
              {name}
            </Typography>
            {!isIt && <Chip label="비개발" size="small" color="warning" />}
          </Stack>
          <Typography variant="subtitle1" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body1">
            {team} / {roles[0].toUpperCase()}
          </Typography>
          <Stack direction="row" gap={1} alignItems="center">
            <Typography variant="body2">{during(start, end)}</Typography>
            <Chip
              color="primary"
              size="small"
              label={`${calcDate} month${calcDate > 1 ? "s" : ""}`}
            />
          </Stack>
          <Stack gap={1}>
            {/* <Typography variant="h6" fontWeight="bold">
              Projects
            </Typography> */}
            {projects.map((project, i) => (
              <Stack
                key={
                  typeof project === "string" ? project + i : project.title + i
                }
                direction="row"
                alignItems="center"
                gap={1}
                sx={{
                  ["&:hover .point"]: {
                    transform: "translate(0%, 0%) scale(1.2)",
                  },
                }}
              >
                <Box
                  className="point"
                  sx={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    backgroundColor: theme.palette.primary.main,
                    position: "absolute",
                    left: "13px",
                    transform: "translate(0%, 0%)",
                    zIndex: 2,
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
                {typeof project === "string" ? (
                  <Typography
                    sx={{
                      textDecoration: "none",
                      color: "inherit",
                      "&:hover": { color: theme.palette.primary.main },
                      ml: 4,
                      "&::before": {
                        content: '"📄 "',
                      },
                    }}
                  >
                    {project}
                  </Typography>
                ) : (
                  <>
                    <Typography
                      component={Link}
                      to={project.path}
                      sx={{
                        textDecoration: "none",
                        color: "inherit",
                        "&:hover": { color: theme.palette.primary.main },
                        ml: 4,
                        "&::before": {
                          content: '"📄 "',
                        },
                      }}
                    >
                      {project.title}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() => navigate(project.path)}
                    >
                      <LaunchIcon fontSize="small" />
                    </IconButton>
                  </>
                )}
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Flow;
