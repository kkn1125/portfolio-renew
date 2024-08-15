import { format } from "@libs/format";
import { Project } from "@models/project";
import { Box, Chip, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useMemo } from "react";

type FlowProps = {
  title: string;
  team: string;
  role: string;
  description: string;
  // works: string[];
  projects: Project[];
  start: Date;
  end?: Date;
};

function Flow({
  title,
  team,
  role,
  description,
  // works,
  projects,
  start,
  end,
}: FlowProps) {
  const calcDate = useMemo(() => {
    const diff = dayjs(end).diff(dayjs(start), "month");
    return diff;
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
          {title}
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
          {team} / {role}
        </Typography>
        <Stack direction="row" gap={1} alignItems="center">
          <Typography fontSize={14}>
            {format(start, "YYYY. MM.")} ~{" "}
            {end ? format(end, "YYYY. MM.") : "재직 중"}
          </Typography>
          <Chip
            color="primary"
            size="small"
            label={calcDate + " month" + (calcDate > 1 ? "s" : "")}
            sx={{ fontSize: 12, fontWeight: 700 }}
          />
        </Stack>
        <Stack gap={1} my={2}>
          {projects.map(({ title }, i) => (
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
              <Typography>{title}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Flow;
