import translate from "@common/translate";
import { DEPLOY_PATH } from "@common/variables";
import { HomeButton } from "@components/atoms/HomeButton";
import { ProjectCoverStack } from "@components/atoms/ProjectCoverStack";
import { IssueCard } from "@components/moleculars/IssueCard";
import { pathJoin } from "@libs/pathJoin";
import LaunchIcon from "@mui/icons-material/Launch";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Portal,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { projects } from "@storage/projects";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Notfound from "./Notfound";
import { roleTranslate } from "@common/enums/role";
import { useEffect, useState } from "react";
import { ProjectModel } from "@models/ProjectModel";

const ExternalLink = ({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) => (
  <Stack
    direction="row"
    alignItems="center"
    gap={1}
    {...(href && {
      component: Link,
      to: href,
      target: "_blank",
    })}
    color="inherit"
    sx={{ textDecoration: "none" }}
  >
    <Typography>{children}</Typography>
    {href && <LaunchIcon fontSize="small" />}
  </Stack>
);

const getEmojiForLabel = (label: string): string => {
  switch (label) {
    case "소속":
      return "🏢";
    case "팀":
      return "👥";
    case "역할":
      return "🧑‍💼";
    case "기술 스택":
      return "💻";
    case "깃허브":
      return "🐙";
    case "데모 사이트":
      return "🌐";
    default:
      return "ℹ️";
  }
};

function PortfolioDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const page = +(location.state?.page || 1);
  const { company, project } = useParams();
  const headerHeight = 64;
  const [openPw, setOpenPw] = useState<
    {
      id: string;
      open: boolean;
    }[]
  >([]);

  const projectModel = projects.find(
    (prj) =>
      prj.path ===
      pathJoin(DEPLOY_PATH, "portfolio", company || "", project || "")
  );

  useEffect(() => {
    if (projectModel && projectModel.testAccount) {
      setOpenPw(
        projectModel.testAccount.map((account) => ({
          id: account.id,
          open: false,
        }))
      );
    }
  }, [projectModel]);

  function goToList() {
    navigate(pathJoin(DEPLOY_PATH, "/portfolio/"), { state: { page } });
  }

  if (!projectModel) {
    return <Notfound />;
  }

  function handleView(id: string) {
    setOpenPw((prev) =>
      prev.map((account) => {
        if (account.id === id) {
          account.open = !account.open;
        }
        return account;
      })
    );
  }

  const tableData = [
    { label: "소속", value: projectModel.company },
    { label: "팀", value: projectModel.team },
    {
      label: "역할",
      value: projectModel.roles.map((role) => roleTranslate[role]).join(", "),
      sx: { textTransform: "uppercase" },
    },
    {
      label: "기술 스택",
      value: (
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
                <Typography fontSize={12}>{translate[skill.name]}</Typography>
              </Stack>
            </Tooltip>
          ))}
        </Stack>
      ),
    },
    {
      label: "깃허브",
      value: projectModel.github ? (
        <ExternalLink href={projectModel.github}>
          {projectModel.github}
        </ExternalLink>
      ) : (
        <Typography>등록된 깃허브가 없습니다.</Typography>
      ),
    },
    {
      label: "데모 사이트",
      value:
        projectModel.demoSites && projectModel.demoSites.length > 0 ? (
          projectModel.demoSites.map((demo) => (
            <ExternalLink key={demo} href={demo}>
              {demo}
            </ExternalLink>
          ))
        ) : (
          <Typography>등록된 데모 사이트가 없습니다.</Typography>
        ),
    },
    ...(projectModel.testAccount
      ? [
          {
            label: "테스트 계정",
            value:
              projectModel.testAccount.length > 0 ? (
                projectModel.testAccount.map((account, index) => (
                  <Stack
                    key={account.id + index}
                    direction="row"
                    alignItems="center"
                    gap={1}
                  >
                    <Typography>ID: {account.id}</Typography>
                    {" / "}
                    <Typography>
                      PW:{" "}
                      {openPw?.[index]?.open ? account.password : "********"}
                    </Typography>
                    <Button onClick={() => handleView(account.id)}>
                      {openPw?.[index]?.open ? "숨기기" : "보기"}
                    </Button>
                  </Stack>
                ))
              ) : (
                <Typography>제공된 테스트 계정이 없습니다.</Typography>
              ),
          },
        ]
      : []),
  ];

  return (
    <Stack
      flex={1}
      gap={5}
      alignItems="center"
      overflow="auto"
      height="inherit"
    >
      <Portal container={document.body}>
        <HomeButton goToList={goToList} />
      </Portal>
      <ProjectCoverStack
        projectModel={projectModel}
        headerHeight={headerHeight}
      />

      {/* 프로젝트 정보 섹션 */}
      <Container maxWidth="lg" sx={{ flex: 1, py: 3 }}>
        <Paper elevation={3} sx={{ borderRadius: 2, overflow: "hidden" }}>
          <Table>
            <TableBody>
              {tableData.map(({ label, value, sx }) => (
                <TableRow
                  key={label}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    width={100}
                    sx={{
                      fontWeight: "bold",
                      backgroundColor: "rgba(173, 216, 230, 0.2)",
                      color: "#333",
                    }}
                  >
                    {getEmojiForLabel(label)} {label}
                  </TableCell>
                  <TableCell sx={{ ...sx, py: 2 }}>{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>

      {/* Works 섹션 */}
      <Container maxWidth="lg" sx={{ flex: 1, py: 3 }}>
        <Typography fontSize={32} fontWeight={700} gutterBottom>
          Works
        </Typography>
        <List>
          {projectModel.works.map((work) => (
            <ListItem key={work.content}>
              <ListItemText
                primary={
                  <Typography variant="body1" fontWeight="bold">
                    ✨ {work.content}
                  </Typography>
                }
                secondary={
                  work.hasSubWorks && (
                    <List>
                      {work.subWorks.map((subWork) => (
                        <ListItem key={work.content + subWork.content}>
                          <ListItemText
                            primary={
                              <Typography variant="body1" fontWeight="bold">
                                🛠️ {subWork.content}
                              </Typography>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  )
                }
              />
            </ListItem>
          ))}
        </List>
      </Container>

      {/* 문제 해결 섹션 */}
      {projectModel.issues && (
        <Container maxWidth="lg" sx={{ flex: 1, py: 3 }}>
          <Stack gap={2}>
            {projectModel.issues.map((issue) => (
              <IssueCard key={issue.problem} issue={issue} />
            ))}
          </Stack>
        </Container>
      )}

      {/* 이미지 섹션 */}
      {projectModel.images && (
        <Container maxWidth="lg" sx={{ flex: 1, py: 3 }}>
          <Stack gap={3}>
            {projectModel.images.map(({ src, alt }) => (
              <Stack
                key={src}
                component="figure"
                width="70%"
                mx="auto"
                overflow="hidden"
                boxShadow="5px 5px 1rem 0 #56565656"
                sx={{
                  borderRadius: 3,
                  transition: "box-shadow 150ms ease-in-out",
                  ["&:hover"]: {
                    boxShadow: "1px 1px 1rem 0 #56565656",
                  },
                }}
              >
                {src.endsWith(".mp4") ? (
                  <Box
                    component="video"
                    width="100%"
                    autoPlay
                    loop
                    muted
                    src={src}
                  />
                ) : (
                  <Box component="img" width="100%" src={src} alt={alt} />
                )}
                <Typography
                  component="figcaption"
                  p={1}
                  align="center"
                  fontWeight={700}
                  color="white"
                  sx={{
                    background: (theme) => theme.palette.text.disabled,
                  }}
                >
                  {alt}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Container>
      )}
    </Stack>
  );
}

export default PortfolioDetail;
