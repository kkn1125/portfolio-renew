import ProjectCard from "@components/atoms/ProjectCard";
import { groupBy } from "@libs/groupBy";
import {
  Container,
  Fade,
  Pagination,
  Stack,
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
        <Stack gap={4} alignItems="center">
          {groupList.map((projects, i) => (
            <Fade key={i} in={true} timeout={300 * (i + 1)}>
              <Stack
                direction="row"
                gap={3}
                flexWrap="wrap"
                justifyContent="center"
                sx={{
                  perspective: "1500px",
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
            </Fade>
          ))}
        </Stack>
      </Container>

      <Pagination
        showFirstButton
        showLastButton
        onChange={(e, newPage) => setPage(newPage)}
        page={page}
        count={Math.ceil(total / perPage)}
        sx={{
          '& .MuiPaginationItem-root': {
            color: theme.palette.text.primary,
          },
          '& .Mui-selected': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            },
          },
        }}
      />
    </Stack>
  );
}

export default Portfolio;
