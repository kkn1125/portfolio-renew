import ProjectCard from "@components/atoms/ProjectCard";
import { groupBy } from "@libs/groupBy";
import {
  Container,
  Pagination,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { projects } from "@storage/projects";
import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

const perPage = 8;

function Portfolio() {
  const location = useLocation();
  const [page, setPage] = useState(+(location.state?.page || 1));
  const theme = useTheme();
  const total = projects.length;
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const groupAmount = isLgUp ? 4 : isMdUp ? 2 : 1;

  const groupList = useMemo(() => {
    return groupBy(
      projects.slice((page - 1) * perPage, page * perPage),
      groupAmount
    );
  }, [groupAmount, page]);

  return (
    <Stack py={5} flex={1} alignItems="center" overflow="auto" height="inherit">
      <Container maxWidth="lg" sx={{ flex: 1, mb: 5 }}>
        <Typography fontSize={30} fontWeight={700} gutterBottom>
          🗂️ Projects
        </Typography>
        <Stack gap={2} alignItems="center">
          {groupList
            .map((projects, i) => (
              <Stack
                key={i}
                direction="row"
                gap={3}
                position="relative"
                alignItems="flex-start"
                sx={{
                  perspective: "1500px",
                  boxSizing: "border-box",
                  width: "100%",
                }}
              >
                {projects.map((project, q) => (
                  <ProjectCard
                    key={project?.title || q}
                    project={project}
                    page={page}
                  />
                ))}
              </Stack>
            ))
            .concat()}
        </Stack>
      </Container>

      <Pagination
        showFirstButton
        showLastButton
        onChange={(e, newPage) => setPage(newPage)}
        page={page}
        count={Math.ceil(total / perPage)}
      />
    </Stack>
  );
}

export default Portfolio;
