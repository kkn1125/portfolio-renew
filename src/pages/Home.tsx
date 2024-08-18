import translate from "@common/translate";
import { PROFILE_IMAGE, SVG_ICON_SIZE } from "@common/variables";
import Flow from "@components/atoms/Flow";
import SideFlow from "@components/atoms/SideFlow";
import {
  Box,
  Container,
  keyframes,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { companyAnder } from "@src/storage/companies/company.ander";
import { companyFov } from "@src/storage/companies/company.fov";
import { companyReborn } from "@src/storage/companies/company.reborn";
import { Information } from "@src/storage/introduce/information";
import { sideProject } from "@storage/companies/side.project";

const SLIDE_TIME = 30;
const SLIDE_ITEM_GAP = 5;

function Home() {
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

  return (
    <Stack flex={1} overflow="auto" height="inherit">
      {/* Section1 */}
      <Box py={5} sx={{ background: (theme) => theme.palette.impact.main }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column-reverse", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "center", md: "flex-start" }}
            gap={{ xs: 1, md: 20 }}
            p={3}
          >
            <Stack flex={1} gap={1}>
              <Typography fontSize={40} fontWeight={700}>
                {Information.name}
              </Typography>
              <Typography fontSize={32} fontWeight={700} color="GrayText">
                {Information.position}
              </Typography>
              <Typography fontSize={20} color="grey">
                {Information.description}
              </Typography>
            </Stack>

            <Stack
              component={Paper}
              direction="row"
              justifyContent="flex-end"
              maxWidth={270}
              height={280}
              sx={{
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                height="100%"
                src={PROFILE_IMAGE}
                alt="profile"
                sx={{
                  filter: "brightness(1.2)",
                }}
              />
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Section2 */}
      <Box py={5}>
        <Container maxWidth="lg">
          <Stack alignItems="center">
            <Typography fontSize={30} fontWeight={700} gutterBottom>
              Tech Stacks
            </Typography>
            <Typography fontSize={24} color="GrayText" gutterBottom>
              현재까지 프로젝트에서 사용한 기술입니다.
            </Typography>
            <Box
              position="relative"
              mt={3}
              width="100%"
              sx={{
                overflow: "hidden",
                maskImage: `linear-gradient(to left,
                transparent 5%,
                #000000 calc(5% + ${20}px), #000000 calc(95% - ${20}px), transparent 95%)`,
              }}
            >
              <Stack
                direction="row"
                flexWrap="nowrap"
                width="max-content"
                gap={SLIDE_ITEM_GAP}
                sx={{
                  ["&:hover"]: {
                    animationPlayState: "paused",
                  },
                  animation: `${infinitySlide} ${SLIDE_TIME}s linear both infinite`,
                }}
              >
                {skillItems.map(({ name, icon }) => (
                  <Tooltip key={name} title={translate[name]} placement="top">
                    <Stack
                      dangerouslySetInnerHTML={{ __html: icon }}
                      width={SVG_ICON_SIZE}
                      height={SVG_ICON_SIZE}
                      direction="row"
                      alignItems="center"
                    />
                  </Tooltip>
                ))}
                {skillItems.map(({ name, icon }) => (
                  <Tooltip key={name} title={translate[name]} placement="top">
                    <Stack
                      dangerouslySetInnerHTML={{ __html: icon }}
                      width={SVG_ICON_SIZE}
                      height={SVG_ICON_SIZE}
                      direction="row"
                      alignItems="center"
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
        <Container maxWidth="md">
          <Stack alignItems="center">
            <Typography fontSize={30} fontWeight={700} gutterBottom>
              Work Experiences
            </Typography>

            <Box
              px={1.5}
              py={5}
              width="100%"
              sx={{
                maskImage: `linear-gradient(to bottom, 
                transparent 5%,
                #000000 calc(5% + ${20}px), #000000 calc(95% - ${20}px), transparent 95%)`,
              }}
            >
              <Flow company={companyFov} />
              <Flow company={companyAnder} />
              <Flow company={companyReborn} />
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Section4 */}
      <Box py={5} sx={{ background: (theme) => theme.palette.impact.main }}>
        <Container maxWidth="md">
          <Stack alignItems="center">
            <Typography fontSize={30} fontWeight={700} gutterBottom>
              Side-Project
            </Typography>

            <Box
              px={1.5}
              py={5}
              width="100%"
              sx={{
                maskImage: `linear-gradient(to bottom,
                transparent 60px,
                #000000 calc(60px + ${25}px), #000000 calc(100% - ${80}px), transparent calc(100% - ${50}px), transparent 100%)`,
              }}
            >
              {sideProject.projects.map((project) => (
                <SideFlow key={project.title} project={project} />
              ))}
            </Box>
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
}

export default Home;
