import { DEFAULT_COVER } from "@common/variables";
import { ProjectModel } from "@models/ProjectModel";
import { Box, Chip, Stack, Typography } from "@mui/material";

interface ProjectCoverStackProps {
  projectModel: ProjectModel;
  headerHeight: number;
}

export const ProjectCoverStack: React.FC<ProjectCoverStackProps> = ({
  projectModel,
  headerHeight,
}) => {
  return (
    <Stack
      position="relative"
      width="100%"
      justifyContent="center"
      alignItems="center"
      minHeight={`calc(100vh - ${headerHeight}px - 64px)`}
      height={`calc(100vh - ${headerHeight}px - 64px)`}
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
        {/* {projectModel.description.map((desc) => (
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
        ))} */}
        <Typography
          component="h6"
          // whiteSpace="balance"
          fontSize={24}
          fontWeight={700}
          align="center"
          color="#ffffff96"
          sx={{ zIndex: 500, wordBreak: "auto-phrase" }}
        >
          {projectModel.description[0]}
        </Typography>
      </Stack>
    </Stack>
  );
};
