import { Issue } from "@models/Issue";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import { Box, Divider, Paper, Stack, Typography } from "@mui/material";

export const IssueCard: React.FC<{ issue: Issue }> = ({ issue }) => (
  <Paper elevation={3} sx={{ borderRadius: 2, overflow: "hidden" }}>
    <Box p={2}>
      <Typography
        variant="h6"
        fontWeight="bold"
        display="flex"
        alignItems="center"
        gap={1}
      >
        <ErrorOutlineIcon color="error" /> 문제 상황
      </Typography>
      <Typography>{issue.problem}</Typography>
    </Box>
    <Box p={2}>
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        mb={1}
        display="flex"
        alignItems="center"
        gap={1}
      >
        <LightbulbOutlinedIcon color="warning" /> 해결 과정
      </Typography>
      <Stack spacing={1} ml={3}>
        {issue.processes.map((process, index) => (
          <Typography key={index} variant="body2">
            {index + 1}. {process}
          </Typography>
        ))}
      </Stack>
    </Box>
    <Divider />
    <Box p={2}>
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        mb={1}
        display="flex"
        alignItems="center"
        gap={1}
      >
        <BuildOutlinedIcon color="success" /> 해결 결과
      </Typography>
      <Stack spacing={1} ml={3}>
        {issue.solves.map((solve, index) => (
          <Typography key={index} variant="body2">
            • {solve}
          </Typography>
        ))}
      </Stack>
    </Box>
  </Paper>
);
