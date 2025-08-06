import translate from "@common/translate";
import { PROFILE_IMAGE, SVG_ICON_SIZE } from "@common/variables";
import Flow from "@components/atoms/Flow";
import SideFlow from "@components/atoms/SideFlow";
import { getResumeDocuments } from "@libs/getResumeDocuments";
import { sortByEnd } from "@libs/sortBy";
import { CopyTemplate } from "@models/CopyTemplate";
import Resume from "@models/Resume";
import {
  Box,
  Chip,
  Container,
  keyframes,
  Portal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { companies } from "@storage/companies";
import { companyAnder } from "@storage/companies/company.ander";
import { companyDaekyung } from "@storage/companies/company.daekyung";
import { companyFov } from "@storage/companies/company.fov";
import { companyHit } from "@storage/companies/company.hit";
import { companyReborn } from "@storage/companies/company.reborn";
import { sideProject } from "@storage/companies/side.project";
import { Information } from "@storage/introduce/information";
import sideProjects from "@storage/side-projects";
import { useEffect, useState } from "react";

const SLIDE_TIME = 50;
const SLIDE_ITEM_GAP = 5;
const cheat = "copyResume";

function Home() {
  const [openInput, setOpenInput] = useState(false);
  const [inputText, setInputText] = useState("");
  const skillItems = Information.skill.main.concat(
    Information.skill.sub,
    Information.stacks
  );

  const infinitySlide = keyframes`
    0%   {
      transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-1 * (${SVG_ICON_SIZE}px + ${
    8 * SLIDE_ITEM_GAP
  }px) * ${skillItems.length}));
        }
    `;

  useEffect(() => {
    function handleHiddenCopyData(e: KeyboardEvent) {
      if (e.key === "/") {
        setOpenInput(true);
        e.stopPropagation();
        e.preventDefault();
      }
      if (e.key === "Escape") {
        setOpenInput(false);
      }

      if (e.ctrlKey && e.shiftKey && e.altKey && e.key === "P") {
        window.print();
      }

      // if (openInput) {
      //   if (e.ctrlKey && e.shiftKey && e.altKey && e.key === "O") {
      //     const projectGap = "\n\n";
      //     const result1 = sortByEnd(
      //       Object.values(companies).flatMap((item) => item.projects)
      //     )
      //       .map(CopyTemplate)
      //       .join(projectGap);
      //     const result2 = sortByEnd(sideProjects)
      //       .map(CopyTemplate)
      //       .join(projectGap);
      //     const resumeList = getResumeDocuments(
      //       Information.resume as unknown as Resume[]
      //     );
      //     navigator.clipboard.writeText(
      //       `Resume List\n\n${resumeList}\n\n\n\n# 실무 경력\n\n${result1}\n\n\n# 사이드 프로젝트\n\n${result2}`
      //     );
      //   }
      // }
    }

    window.addEventListener("keydown", handleHiddenCopyData);

    return () => {
      window.removeEventListener("keydown", handleHiddenCopyData);
    };
  }, []);

  function handleChangeInputText(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.currentTarget;
    setInputText(target.value || "");
  }

  function handleSubmitInputText(e: React.FormEvent) {
    e.preventDefault();
    if (openInput) {
      if (inputText === cheat) {
        setOpenInput(false);
        const projectGap = "\n\n";
        const result1 = sortByEnd(
          Object.values(companies).flatMap((item) => item.projects)
        )
          .map(CopyTemplate)
          .join(projectGap);
        const result2 = sortByEnd(sideProjects)
          .map(CopyTemplate)
          .join(projectGap);
        const resumeList = getResumeDocuments(
          Information.resume as unknown as Resume[]
        );
        const title = Information.title;
        const description = Information.description.join("\n\n");
        const useStacks = Information.skill.main
          .concat(Information.skill.sub)
          .map((skill) => skill.name)
          .join(", ");
        navigator.clipboard.writeText(
          `"${title}"\n\n\n${description}\n\n\n${useStacks}\n\n\n${resumeList}\n\n\n\n# 실무 경력\n\n${result1}\n\n\n# 사이드 프로젝트\n\n${result2}`
        );
      }
      setInputText("");
    }
  }

  return (
    <Stack id="main-content" flex={1} overflow="auto" height="inherit">
      {/* Section1 */}
      <Box py={5} sx={{ backgroundColor: "#f7f8fa" }}>
        {openInput && (
          <Portal>
            <Box component="form" onSubmit={handleSubmitInputText}>
              <TextField
                placeholder="?"
                size="small"
                autoFocus
                onChange={handleChangeInputText}
                sx={{
                  position: "absolute",
                  transform: "translateX(-50%)",
                  left: "50%",
                  bottom: 100,
                  ["& fieldset"]: {
                    backgroundColor: "#ffffff56",
                  },
                }}
              />
            </Box>
          </Portal>
        )}{" "}
        <Container maxWidth="lg">
          <Box
            sx={{
              position: "relative",
              backgroundColor: "#fff",
              borderRadius: 4,
              p: { xs: 3, md: 5 },
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: 4,
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Stack
                direction={{ xs: "column-reverse", md: "row" }}
                alignItems="center"
                gap={2}
              >
                <Stack
                  direction="column"
                  gap={1}
                  flex={1}
                  justifyContent={{ xs: "space-between", md: "center" }}
                  alignItems={{ xs: "center", md: "flex-start" }}
                >
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="text.primary"
                  >
                    김경남
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight={500}
                    color="text.secondary"
                  >
                    Backend Engineer
                  </Typography>
                </Stack>

                <Box
                  sx={{
                    position: { xs: "relative", md: "absolute" },
                    top: { xs: 0, md: 20 },
                    right: { xs: 0, md: 20 },
                    width: { xs: 150, md: 210 },
                    height: { xs: 150, md: 210 },
                    borderRadius: "50%",
                    overflow: "hidden",
                    flexShrink: 0,
                    boxShadow: "0 0 0 6px rgba(255,255,255,0.8)",
                  }}
                >
                  <Box
                    // component="img"
                    // src={PROFILE_IMAGE}
                    // alt="김경남 프로필 이미지"
                    sx={{
                      width: "150%",
                      height: "150%",
                      // objectFit: "cover",
                      // objectPosition: "right",
                      backgroundRepeat: "no-repeat",
                      backgroundImage: `url(${PROFILE_IMAGE})`,
                      backgroundSize: "cover",
                      // backgroundPosition: "right center",
                      backgroundOrigin: "border-box",
                      backgroundPosition: "140% -40px",
                    }}
                  />
                </Box>
              </Stack>

              <Box
                sx={{
                  backgroundColor: "#f5f5f5",
                  py: 2,
                  pl: 2,
                  pr: { xs: 2, md: "200px" },
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{
                    wordBreak: "auto-phrase",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {Information.description.join("\n\n")}
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  color="text.primary"
                  mb={1}
                >
                  핵심 역량
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {Information.coreCompetencies.map((competency, index) => (
                    <Chip
                      key={index}
                      label={competency}
                      sx={{
                        backgroundColor: "#f0f0f0",
                        color: "#333",
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Section2 */}
      <Box py={5}>
        <Container maxWidth="lg">
          <Stack alignItems="center" spacing={3}>
            <Typography variant="h4" fontWeight={600}>
              Tech Stack
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              프로젝트에서 사용한 기술들
            </Typography>
            <Box
              id="stacks"
              width="100%"
              sx={{
                overflow: "hidden",
                position: "relative",
                "&::before, &::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  width: "100px",
                  height: "100%",
                  zIndex: 2,
                },
                "&::before": {
                  left: 0,
                  background: "linear-gradient(to right, #fff, transparent)",
                },
                "&::after": {
                  right: 0,
                  background: "linear-gradient(to left, #fff, transparent)",
                },
              }}
            >
              <Stack
                direction="row"
                flexWrap="nowrap"
                width="max-content"
                gap={3}
                sx={{
                  animation: `${infinitySlide} ${SLIDE_TIME}s linear infinite`,
                  "&:hover": {
                    animationPlayState: "paused",
                  },
                }}
              >
                {[...skillItems, ...skillItems].map(({ name, icon }, index) => (
                  <Tooltip
                    key={`${name}-${index}`}
                    title={translate[name]}
                    placement="top"
                  >
                    <Box
                      dangerouslySetInnerHTML={{ __html: icon }}
                      width={SVG_ICON_SIZE}
                      height={SVG_ICON_SIZE}
                      sx={{
                        opacity: 0.7,
                        transition: "opacity 0.3s",
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    />
                  </Tooltip>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Section3 */}
      <Box py={5} sx={{ background: (theme) => theme.palette.impact.main }}>
        <Container maxWidth="lg">
          <Stack>
            <Typography
              fontSize={30}
              fontWeight={700}
              align="center"
              gutterBottom
            >
              Work Experiences
            </Typography>

            <Stack
              px={1.5}
              pt={{ xs: 16, md: 11 }}
              pb={7}
              width="inherit"
              sx={{
                maskImage: `linear-gradient(to bottom, 
                transparent 5%,
                #000000 calc(5% + ${20}px), #000000 calc(95% - ${20}px), transparent 95%)`,
              }}
            >
              <Flow company={companyHit} />
              <Flow company={companyFov} />
              <Flow company={companyAnder} />
              <Flow company={companyReborn} />
              <Flow company={companyDaekyung} />
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Section4 */}
      <Box py={5}>
        <Container maxWidth="lg">
          <Stack>
            <Typography
              fontSize={30}
              fontWeight={700}
              align="center"
              gutterBottom
            >
              Side Projects
            </Typography>

            <Box
              px={1.5}
              py={5}
              sx={{
                maskImage: `linear-gradient(to bottom,
                transparent 60px,
                #000000 calc(60px + ${25}px), #000000 calc(100% - ${80}px), transparent calc(100% - ${50}px), transparent 100%)`,
              }}
            >
              {sideProject.projects.map((project) =>
                typeof project === "string" ? (
                  project
                ) : (
                  <SideFlow key={project.title} project={project} />
                )
              )}
            </Box>
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
}

export default Home;
