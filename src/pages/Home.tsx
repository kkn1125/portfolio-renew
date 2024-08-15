import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { PROFILE_IMAGE, SVG_ICON_SIZE } from "@common/variables";
import Flow from "@components/atoms/Flow";
import {
  Box,
  Container,
  keyframes,
  Paper,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Information } from "@src/storage/introduce/information";
import { anderImomApi } from "@src/storage/projects/ander/ander.imom.api";
import { anderImomBackoffice } from "@src/storage/projects/ander/ander.imom.backoffice";
import { anderMetaverseSocket } from "@src/storage/projects/ander/ander.metaverse.socket";
import { anderStreaming } from "@src/storage/projects/ander/ander.streaming";
import { anderUglymews } from "@src/storage/projects/ander/ander.uglymews";
import { anderWebRtc } from "@src/storage/projects/ander/ander.webrtc";
import { fovDbupdater } from "@src/storage/projects/fov/fov.dbupdater";
import { fovKalis } from "@src/storage/projects/fov/fov.kalis";
import { rebornBlockChain } from "@src/storage/projects/reborn/reborn.blockchain";

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
    <Stack flex={1}>
      {/* Section1 */}
      <Box py={5} sx={{ background: (theme) => theme.palette.impact.main }}>
        <Container maxWidth="lg">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            gap={20}
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
                #000000 ${10}%, #000000 ${100 - 10}%, transparent 95%)`,
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
                  <Tooltip key={name} title={name} placement="top">
                    <Box
                      dangerouslySetInnerHTML={{ __html: icon }}
                      width={SVG_ICON_SIZE}
                      height={SVG_ICON_SIZE}
                    />
                  </Tooltip>
                ))}
                {skillItems.map(({ name, icon }) => (
                  <Tooltip key={name} title={name} placement="top">
                    <Box
                      dangerouslySetInnerHTML={{ __html: icon }}
                      width={SVG_ICON_SIZE}
                      height={SVG_ICON_SIZE}
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
          <Stack alignItems="center">
            <Typography fontSize={30} fontWeight={700} gutterBottom>
              Work Experiences
            </Typography>

            <Box
              px={1.5}
              py={5}
              sx={{
                maskImage: `linear-gradient(to bottom, 
                transparent 5%, 
                #000000 ${8}%, #000000 ${100 - 8}%, transparent 95%)`,
              }}
            >
              <Flow
                title={Company.Fov}
                team={Team.Development}
                role={Role.Server}
                description="서버 관리 및 API, DB 개발 담당"
                projects={[fovKalis, fovDbupdater]}
                start={new Date(2024, 4)}
              />
              <Flow
                title={Company.Ander}
                team={Team.Produce}
                role={Role.Backend}
                description="개발서버 관리 및 API, DB 설계 제작과 백오피스 개발 담당"
                projects={[
                  anderUglymews,
                  anderImomBackoffice,
                  anderStreaming,
                  anderImomApi,
                  anderWebRtc,
                  anderMetaverseSocket,
                ]}
                start={new Date(2022, 8)}
                end={new Date(2023, 8)}
              />
              <Flow
                title={Company.Reborn}
                team={Team.Backend}
                role={Role.Backend}
                description="블록체인 웹 페이지 제작 담당"
                projects={[rebornBlockChain]}
                start={new Date(2022, 4)}
                end={new Date(2022, 6)}
              />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Toolbar />
    </Stack>
  );
}

export default Home;
