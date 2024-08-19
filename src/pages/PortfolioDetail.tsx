import translate from "@common/translate";
import { DEFAULT_COVER, DEPLOY_PATH } from "@common/variables";
import { pathJoin } from "@libs/pathJoin";
import LaunchIcon from "@mui/icons-material/Launch";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { projects } from "@storage/projects";
import { Link, useParams } from "react-router-dom";
import Notfound from "./Notfound";

function PortfolioDetail() {
  const { company, project } = useParams();

  const projectModel = projects.find(
    (prj) =>
      prj.path ===
      pathJoin(DEPLOY_PATH, "portfolio", company || "", project || "")
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
          fontSize={50}
          fontWeight={700}
          color="white"
          sx={{ zIndex: 500 }}
        >
          {projectModel.title}
        </Typography>
        <Stack gap={1} alignItems="center" width="70%">
          {projectModel.description.map((desc) => (
            <Typography
              key={desc}
              component="h6"
              whiteSpace="balance"
              fontSize={24}
              fontWeight={700}
              align="center"
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
              {projectModel.github && (
                <TableRow>
                  <TableCell component="th" scope="row" width={75}>
                    깃허브
                  </TableCell>
                  <TableCell>
                    <Stack
                      direction="row"
                      alignItems="center"
                      gap={1}
                      component={Link}
                      to={projectModel.github}
                      target="_blank"
                      color="inherit"
                      sx={{ textDecoration: "none" }}
                    >
                      <Typography>{projectModel.github}</Typography>
                      <LaunchIcon fontSize="small" />
                    </Stack>
                  </TableCell>
                </TableRow>
              )}
              {projectModel.demoSites && (
                <TableRow>
                  <TableCell component="th" scope="row" width={75}>
                    데모 사이트
                  </TableCell>
                  <TableCell>
                    {projectModel.demoSites.map((demo) => (
                      <Stack
                        key={demo}
                        direction="row"
                        alignItems="center"
                        gap={1}
                        component={Link}
                        to={demo}
                        target="_blank"
                        color="inherit"
                        sx={{ textDecoration: "none" }}
                      >
                        <Typography color="inherit">{demo}</Typography>
                        <LaunchIcon fontSize="small" />
                      </Stack>
                    ))}
                  </TableCell>
                </TableRow>
              )}
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

      {/* Section 3 */}
      {projectModel.issues && (
        <Container maxWidth="lg" sx={{ flex: 1, py: 3 }}>
          <Stack gap={2}>
            <Typography fontSize={32} fontWeight={700} gutterBottom>
              Solve Issues
            </Typography>
            <Stack gap={3}>
              {projectModel.issues.map((issue) => (
                <Stack key={issue.problem} gap={1}>
                  <Typography fontSize={18} fontWeight={700}>
                    🤔 {issue.problem}
                  </Typography>
                  <Stack ml={2}>
                    {issue.processes.map((process) => (
                      <Typography key={process} fontSize={14}>
                        💡 {process}
                      </Typography>
                    ))}
                  </Stack>
                  <Stack>
                    {issue.solves.map((solve) => (
                      <Typography key={solve} fontWeight={700}>
                        🛠️ {solve}
                      </Typography>
                    ))}
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Container>
      )}
    </Stack>
  );
}

export default PortfolioDetail;
