import { pathJoin } from "@libs/pathJoin";
import {
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { projects } from "@storage/projects";
import { useParams } from "react-router-dom";
import Notfound from "./Notfound";
import translate from "@common/translate";
import { DEFAULT_COVER } from "@common/variables";

function PortfolioDetail() {
  const { company, project } = useParams();
  const projectModel = projects.find(
    (prj) => prj.path === pathJoin("portfolio", company || "", project || "")
  );

  if (!projectModel) {
    return <Notfound />;
  }

  return (
    <Stack
      flex={1}
      gap={5}
      alignItems="center"
      overflow="auto"
      height="inherit"
    >
      <Stack
        position="relative"
        width="100%"
        justifyContent="center"
        alignItems="center"
        minHeight="calc(100vh - 68.5px - 72px)"
        height="calc(100vh - 68.5px - 72px)"
        overflow="hidden"
      >
        <Box
          position="absolute"
          width="inherit"
          height="inherit"
          sx={{
            filter: "brightness(0.35)",
            backgroundImage: "var(--cover-img)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            backgroundSize: "cover",
            "--cover-img": `url(${projectModel.cover ?? `${DEFAULT_COVER}`})`,
          }}
        />
        <Typography
          component="h1"
          fontSize={64}
          fontWeight={700}
          color="white"
          sx={{ zIndex: 500 }}
        >
          {projectModel.title}
        </Typography>
        <Stack gap={1} alignItems="center">
          {projectModel.description.map((desc) => (
            <Typography
              key={desc}
              component="h6"
              fontSize={24}
              fontWeight={700}
              color="#ffffff96"
              sx={{ zIndex: 500 }}
            >
              {desc}
            </Typography>
          ))}
        </Stack>
      </Stack>
      {/* Section 1 */}
      <Container maxWidth="lg" sx={{ flex: 1, py: 3 }}>
        <Stack gap={2}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row" width={75}>
                  소속
                </TableCell>
                <TableCell>{projectModel.company}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row" width={75}>
                  팀
                </TableCell>
                <TableCell>{projectModel.team}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row" width={75}>
                  역할
                </TableCell>
                <TableCell sx={{ textTransform: "uppercase" }}>
                  {projectModel.roles.join(", ")}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row" width={75}>
                  기술 스택
                </TableCell>
                <TableCell>
                  <Stack direction="row" gap={1}>
                    {projectModel.skills.map((skill) => (
                      <Tooltip key={skill.name} title={translate[skill.name]}>
                        <Stack alignItems="center">
                          <IconButton>
                            <Box
                              width={24}
                              height={24}
                              dangerouslySetInnerHTML={{ __html: skill.icon }}
                            />
                          </IconButton>
                          <Typography fontSize={12}>
                            {translate[skill.name]}
                          </Typography>
                        </Stack>
                      </Tooltip>
                    ))}
                  </Stack>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Stack>
      </Container>

      {/* Section 2 */}
      <Container maxWidth="lg" sx={{ flex: 1, py: 3 }}>
        <Stack gap={2}>
          <Typography fontSize={32} fontWeight={700} gutterBottom>
            Works
          </Typography>
          <Stack gap={1}>
            {projectModel.works.map((work) => (
              <Typography key={work}>✨ {work}</Typography>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}

export default PortfolioDetail;
