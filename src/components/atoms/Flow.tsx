import { during } from "@libs/during";
import { CompanyModel } from "@models/CompanyModel";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LaunchIcon from "@mui/icons-material/Launch";
import {
  Box,
  Chip,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

type FlowProps = { company: CompanyModel };

function Flow({ company }: FlowProps) {
  const {
    isIt,
    name,
    team,
    roles,
    description,
    projects,
    simpleProjects,
    start,
    end,
  } = company;
  const navigate = useNavigate();
  const theme = useTheme();

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
          <Typography variant="body2">{during(start, end)}</Typography>
          <Stack gap={1}>
            {[...projects, ...simpleProjects].map((project, i) => (
              <Stack
                key={
                  typeof project === "string" ? project + i : project.title + i
                }
                direction="row"
                alignItems="center"
                gap={1}
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
                    zIndex: 2,
                  }}
                />
                {typeof project === "string" ? (
                  <Stack direction="row" alignItems="center" gap={0.5} ml={4}>
                    <DescriptionOutlinedIcon
                      fontSize="small"
                      sx={{ color: "text.secondary" }}
                    />
                    <Typography
                      sx={{
                        textDecoration: "none",
                        color: "inherit",
                        "&:hover": { color: theme.palette.primary.main },
                      }}
                    >
                      {project}
                    </Typography>
                  </Stack>
                ) : (
                  <>
                    <Stack direction="row" alignItems="center" gap={0.5} ml={4}>
                      <DescriptionOutlinedIcon
                        fontSize="small"
                        sx={{ color: "text.secondary" }}
                      />
                      <Typography
                        component={Link}
                        to={project.path}
                        sx={{
                          textDecoration: "none",
                          color: "inherit",
                          "&:hover": { color: theme.palette.primary.main },
                        }}
                      >
                        {project.title}
                      </Typography>
                    </Stack>
                    <IconButton
                      size="small"
                      onClick={() => navigate(project.path)}
                      aria-label={`${project.title} 상세 보기`}
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
