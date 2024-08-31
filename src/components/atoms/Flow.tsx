import { calcDiffDate } from "@libs/calcDiffDate";
import { during } from "@libs/during";
import { CompanyModel } from "@models/company.model";
import LaunchIcon from "@mui/icons-material/Launch";
import { Box, Chip, IconButton, Stack, Typography } from "@mui/material";
import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";

type FlowProps = { company: CompanyModel };

function Flow({ company }: FlowProps) {
  const { name, team, roles, description, projects, start, end } = company;
  const navigate = useNavigate();
  const calcDate = useMemo(() => {
    return calcDiffDate(end, start);
  }, [end, start]);

  return (
    <Stack
      position="relative"
      py={5}
      minHeight={120}
      sx={{
        borderLeft: (theme) => `3px solid ${theme.palette.primary.main + "56"}`,
      }}
    >
      <Box
        position="absolute"
        top="48px"
        left={0}
        width={20}
        height={20}
        sx={{
          borderRadius: "50%",
          background: (theme) => theme.palette.primary.main,
          transform: "translate(calc(-50% - 1.5px), 0%)",
          transition: "ease-in-out 150ms",
          ["&:hover"]: {
            boxShadow: "1px 2px 5px 1px #565656a6",
          },
        }}
      />
      <Stack pl={5}>
        <Typography gutterBottom fontSize={24} fontWeight={700}>
          {name}
        </Typography>
        <Typography
          gutterBottom
          fontSize={20}
          fontWeight={700}
          color="GrayText"
        >
          {description}
        </Typography>
        <Typography gutterBottom fontSize={16} fontWeight={700} color="grey">
          {team} / {roles[0].toUpperCase()}
        </Typography>
        <Stack direction="row" gap={1} alignItems="center">
          <Typography fontSize={14}>{during(start, end)}</Typography>
          <Chip
            color="primary"
            size="small"
            label={calcDate + " month" + (calcDate > 1 ? "s" : "")}
            sx={{ fontSize: 12, fontWeight: 700 }}
          />
        </Stack>
        <Stack gap={1} my={2}>
          {projects.map(({ title, path }, i) => (
            <Stack key={title + i} direction="row" alignItems="center">
              <Box
                position="absolute"
                left={0}
                width={12}
                height={12}
                sx={{
                  borderRadius: "50%",
                  background: (theme) => theme.palette.primary.light,
                  transform: "translateX(calc(-50% - 1.5px))",
                  transition: "ease-in-out 150ms",
                  ["&:hover"]: {
                    boxShadow: "1px 2px 5px 1px #565656a6",
                  },
                }}
              />
              <Typography
                component={Link}
                to={path}
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                {title}
              </Typography>
              <IconButton size="small" onClick={() => navigate(path)}>
                <LaunchIcon fontSize="small" />
              </IconButton>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Flow;
