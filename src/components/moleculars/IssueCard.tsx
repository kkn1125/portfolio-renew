import { Issue } from "@models/Issue";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import { Box, Divider, Paper, Stack, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";

export const IssueCard: React.FC<{ issue: Issue }> = ({ issue }) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 2,
        border: `1px solid ${theme.palette.divider}`,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          px: 2.5,
          py: 2,
          borderLeft: `4px solid ${theme.palette.error.main}`,
          backgroundColor: alpha(theme.palette.error.main, 0.06),
        }}
      >
        <Stack direction="row" alignItems="center" gap={1} mb={1}>
          <ErrorOutlineIcon fontSize="small" color="error" />
          <Typography variant="subtitle2" fontWeight={700} color="error.main">
            문제 상황
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
          {issue.problem}
        </Typography>
      </Box>

      <Divider />

      <Box sx={{ px: 2.5, py: 2 }}>
        <Stack direction="row" alignItems="center" gap={1} mb={1.5}>
          <LightbulbOutlinedIcon fontSize="small" color="warning" />
          <Typography variant="subtitle2" fontWeight={700}>
            해결 과정
          </Typography>
        </Stack>
        <Stack component="ol" gap={1} sx={{ m: 0, pl: 2.5 }}>
          {issue.processes.map((process, index) => (
            <Typography
              key={index}
              component="li"
              variant="body2"
              sx={{ lineHeight: 1.7 }}
            >
              {process}
            </Typography>
          ))}
        </Stack>
      </Box>

      <Divider />

      <Box
        sx={{
          px: 2.5,
          py: 2,
          borderLeft: `4px solid ${theme.palette.success.main}`,
          backgroundColor: alpha(theme.palette.success.main, 0.05),
        }}
      >
        <Stack direction="row" alignItems="center" gap={1} mb={1.5}>
          <CheckCircleOutlineIcon fontSize="small" color="success" />
          <Typography variant="subtitle2" fontWeight={700} color="success.main">
            해결 결과
          </Typography>
        </Stack>
        <Stack gap={0.75}>
          {issue.solves.map((solve, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{ lineHeight: 1.7, pl: 0.5 }}
            >
              {solve}
            </Typography>
          ))}
        </Stack>
      </Box>
    </Paper>
  );
};
