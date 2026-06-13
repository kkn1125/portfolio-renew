import translate from "@common/translate";
import { DEPLOY_PATH } from "@common/variables";
import { ProjectCoverStack } from "@components/atoms/ProjectCoverStack";
import { IssueCard } from "@components/moleculars/IssueCard";
import { roleTranslate } from "@common/enums/role";
import { during } from "@libs/during";
import { pathJoin } from "@libs/pathJoin";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { ProjectModel } from "@models/ProjectModel";
import { projects } from "@storage/projects";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Notfound from "./Notfound";

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <Stack gap={0.5} mb={2.5}>
      <Typography
        variant="overline"
        sx={{ color: "accent.main", fontWeight: 700, letterSpacing: 1.2 }}
      >
        {title}
      </Typography>
      {description && (
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      )}
    </Stack>
  );
}

function MetaRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  const theme = useTheme();

  return (
    <Stack direction="row" gap={1.5} alignItems="flex-start">
      <Box
        sx={{
          mt: 0.25,
          color: "accent.main",
          display: "flex",
        }}
      >
        <Icon fontSize="small" />
      </Box>
      <Stack gap={0.5} flex={1} minWidth={0}>
        <Typography variant="caption" color="text.secondary" fontWeight={600}>
          {label}
        </Typography>
        <Box sx={{ color: theme.palette.text.primary }}>{children}</Box>
      </Stack>
    </Stack>
  );
}

function WorkCard({ work }: { work: ProjectModel["works"][number] }) {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderRadius: 2,
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Typography variant="subtitle1" fontWeight={600} gutterBottom>
        {work.content}
      </Typography>
      {work.hasSubWorks && (
        <Stack
          component="ul"
          gap={0.75}
          sx={{ m: 0, pl: 2.5, color: "text.secondary" }}
        >
          {work.subWorks.map((subWork) => (
            <Typography
              key={subWork.content}
              component="li"
              variant="body2"
              sx={{ lineHeight: 1.6 }}
            >
              {subWork.content}
            </Typography>
          ))}
        </Stack>
      )}
    </Paper>
  );
}

function PortfolioDetail() {
  const navigate = useNavigate();
  const theme = useTheme();
  const location = useLocation();
  const page = +(location.state?.page || 1);
  const { company, project } = useParams();
  const [openPw, setOpenPw] = useState<{ id: string; open: boolean }[]>([]);

  const projectModel = projects.find(
    (prj) =>
      prj.path ===
      pathJoin(DEPLOY_PATH, "portfolio", company || "", project || "")
  );

  useEffect(() => {
    if (projectModel?.testAccount) {
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

  function handleTogglePassword(id: string) {
    setOpenPw((prev) =>
      prev.map((account) =>
        account.id === id ? { ...account, open: !account.open } : account
      )
    );
  }

  if (!projectModel) {
    return <Notfound />;
  }

  const roleLabel = projectModel.roles
    .map((role) => roleTranslate[role])
    .join(", ");

  return (
    <Stack flex={1} height="inherit" overflow="hidden">
      <Box
        flexShrink={0}
        sx={{
          borderBottom: `1px solid ${theme.palette.divider}`,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            py={1.5}
            gap={2}
          >
            <Button
              onClick={goToList}
              startIcon={<ArrowBackIcon />}
              color="inherit"
              sx={{ minHeight: 44, fontWeight: 600 }}
            >
              Portfolio
            </Button>

            <Stack direction="row" gap={1} flexWrap="wrap" justifyContent="flex-end">
              {projectModel.github && (
                <Button
                  component="a"
                  href={projectModel.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  sx={{ minHeight: 40 }}
                >
                  GitHub
                </Button>
              )}
              {projectModel.demoSites?.map((demo) => (
                <Button
                  key={demo}
                  component="a"
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  variant="outlined"
                  startIcon={<LanguageOutlinedIcon />}
                  sx={{ minHeight: 40 }}
                >
                  Demo
                </Button>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box flex={1} overflow="auto" height="inherit">
        <ProjectCoverStack projectModel={projectModel} />

        <Container maxWidth="lg" sx={{ pb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={8}>
            <Box mb={5}>
              <SectionHeading
                title="Contributions"
                description="프로젝트에서 맡은 역할과 주요 기여"
              />
              <Stack gap={1.5}>
                {projectModel.works.map((work) => (
                  <WorkCard key={work.content} work={work} />
                ))}
              </Stack>
            </Box>

            {projectModel.issues && projectModel.issues.length > 0 && (
              <Box mb={5}>
                <SectionHeading
                  title="Problem Solving"
                  description="문제 정의부터 해결까지의 과정"
                />
                <Stack gap={2}>
                  {projectModel.issues.map((issue) => (
                    <IssueCard key={issue.problem} issue={issue} />
                  ))}
                </Stack>
              </Box>
            )}

            {projectModel.images && projectModel.images.length > 0 && (
              <Box>
                <SectionHeading
                  title="Screenshots"
                  description="서비스 화면 및 구현 결과"
                />
                <Stack gap={3}>
                  {projectModel.images.map(({ src, alt }) => (
                    <Box
                      key={src}
                      component="figure"
                      sx={{
                        m: 0,
                        borderRadius: 2,
                        overflow: "hidden",
                        border: `1px solid ${theme.palette.divider}`,
                        backgroundColor: theme.palette.background.paper,
                      }}
                    >
                      {src.endsWith(".mp4") ? (
                        <Box
                          component="video"
                          width="100%"
                          autoPlay
                          loop
                          muted
                          playsInline
                          src={src}
                        />
                      ) : (
                        <Box
                          component="img"
                          width="100%"
                          src={src}
                          alt={alt}
                          loading="lazy"
                          sx={{ display: "block" }}
                        />
                      )}
                      {alt && (
                        <Typography
                          component="figcaption"
                          variant="caption"
                          color="text.secondary"
                          sx={{ px: 2, py: 1.5, display: "block" }}
                        >
                          {alt}
                        </Typography>
                      )}
                    </Box>
                  ))}
                </Stack>
              </Box>
            )}
          </Grid>

          <Grid item xs={12} lg={4}>
            <Paper
              elevation={0}
              sx={{
                p: 2.5,
                borderRadius: 2,
                border: `1px solid ${theme.palette.divider}`,
                position: { lg: "sticky" },
                top: { lg: 16 },
              }}
            >
              <Typography variant="subtitle1" fontWeight={700} mb={2}>
                프로젝트 정보
              </Typography>

              <Stack gap={2} divider={<Divider />}>
                <MetaRow icon={BusinessOutlinedIcon} label="소속">
                  <Typography variant="body2">{projectModel.company}</Typography>
                </MetaRow>

                <MetaRow icon={CalendarTodayOutlinedIcon} label="개발 기간">
                  <Typography variant="body2">
                    {during(projectModel.start, projectModel.end, "진행 중")}
                  </Typography>
                </MetaRow>

                <MetaRow icon={GroupsOutlinedIcon} label="팀">
                  <Typography variant="body2">{projectModel.team}</Typography>
                </MetaRow>

                <MetaRow icon={PersonOutlineOutlinedIcon} label="역할">
                  <Typography variant="body2" sx={{ textTransform: "uppercase" }}>
                    {roleLabel}
                  </Typography>
                </MetaRow>

                <MetaRow icon={GroupsOutlinedIcon} label="기술 스택">
                  <Stack direction="row" flexWrap="wrap" gap={0.75}>
                    {projectModel.skills.map((skill) => (
                      <Tooltip key={skill.name} title={translate[skill.name]}>
                        <Chip
                          size="small"
                          label={translate[skill.name]}
                          sx={{
                            height: 28,
                            "& .MuiChip-label": { px: 1 },
                          }}
                        />
                      </Tooltip>
                    ))}
                  </Stack>
                </MetaRow>

                {projectModel.github && (
                  <MetaRow icon={GitHubIcon} label="깃허브">
                    <Typography
                      component="a"
                      href={projectModel.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="body2"
                      sx={{
                        color: "primary.main",
                        textDecoration: "none",
                        wordBreak: "break-all",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      {projectModel.github}
                    </Typography>
                  </MetaRow>
                )}

                {projectModel.demoSites && projectModel.demoSites.length > 0 && (
                  <MetaRow icon={LanguageOutlinedIcon} label="데모 사이트">
                    <Stack gap={0.5}>
                      {projectModel.demoSites.map((demo) => (
                        <Typography
                          key={demo}
                          component="a"
                          href={demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="body2"
                          sx={{
                            color: "primary.main",
                            textDecoration: "none",
                            wordBreak: "break-all",
                            "&:hover": { textDecoration: "underline" },
                          }}
                        >
                          {demo}
                        </Typography>
                      ))}
                    </Stack>
                  </MetaRow>
                )}

                {projectModel.testAccount && projectModel.testAccount.length > 0 && (
                  <MetaRow icon={PersonOutlineOutlinedIcon} label="테스트 계정">
                    <Stack gap={1.5}>
                      {projectModel.testAccount.map((account, index) => (
                        <Stack key={account.id} gap={0.5}>
                          <Typography variant="body2">
                            ID: {account.id}
                          </Typography>
                          <Stack direction="row" alignItems="center" gap={0.5}>
                            <Typography variant="body2">
                              PW:{" "}
                              {openPw[index]?.open
                                ? account.password
                                : "••••••••"}
                            </Typography>
                            <IconButton
                              size="small"
                              onClick={() => handleTogglePassword(account.id)}
                              aria-label={
                                openPw[index]?.open
                                  ? "비밀번호 숨기기"
                                  : "비밀번호 보기"
                              }
                              sx={{ minWidth: 44, minHeight: 44 }}
                            >
                              {openPw[index]?.open ? (
                                <VisibilityOffIcon fontSize="small" />
                              ) : (
                                <VisibilityIcon fontSize="small" />
                              )}
                            </IconButton>
                          </Stack>
                        </Stack>
                      ))}
                    </Stack>
                  </MetaRow>
                )}
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      </Box>
    </Stack>
  );
}

export default PortfolioDetail;
