import { PROFILE_IMAGE, SVG_ICON_SIZE } from "@common/variables";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Information } from "@src/storage/introduce/information";

const fixedStyle = { flexBasis: 90, flexGrow: 0, flexShrink: 0 };

function Home() {
  return (
    <Stack flex={1} gap={3}>
      <Container maxWidth="md">
        <Stack
          component={Paper}
          direction="row"
          alignItems="center"
          p={3}
          sx={{
            backgroundColor: (theme) => theme.palette.background.highlight,
          }}
        >
          <Box
            component="img"
            src={PROFILE_IMAGE}
            alt="profile"
            width="auto"
            height={150}
            sx={{ borderRadius: 1 }}
          />
          <List component={Stack} dense disablePadding gap={1} sx={{ flex: 1 }}>
            <ListItem>
              <ListItemText sx={fixedStyle}>이름</ListItemText>
              <ListItemText>{Information.name}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText sx={fixedStyle}>연령</ListItemText>
              <ListItemText>{Information.age}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText sx={fixedStyle}>주요 기술</ListItemText>
              <Stack direction="row" gap={2}>
                {Information.skill.main.map(({ name, icon }) => (
                  <Tooltip key={name} title={name} placement="top">
                    <Box
                      dangerouslySetInnerHTML={{ __html: icon }}
                      width={SVG_ICON_SIZE}
                      height={SVG_ICON_SIZE}
                    />
                  </Tooltip>
                ))}
              </Stack>
            </ListItem>
            <ListItem>
              <ListItemText sx={fixedStyle}>서브 기술</ListItemText>
              <Stack direction="row" gap={2}>
                {Information.skill.sub.map(({ name, icon }) => (
                  <Tooltip key={name} title={name} placement="top">
                    <Box
                      dangerouslySetInnerHTML={{ __html: icon }}
                      width={SVG_ICON_SIZE}
                      height={SVG_ICON_SIZE}
                    />
                  </Tooltip>
                ))}
              </Stack>
            </ListItem>
            <ListItem sx={{ alignItems: "flex-start" }}>
              <ListItemText sx={fixedStyle}>경험한 기술</ListItemText>
              <Stack direction="row" flexWrap="wrap" gap={2}>
                {Information.stacks.map(({ name, icon }) => (
                  <Tooltip key={name} title={name} placement="top">
                    <Box
                      dangerouslySetInnerHTML={{ __html: icon }}
                      width={SVG_ICON_SIZE}
                      height={SVG_ICON_SIZE}
                    />
                  </Tooltip>
                ))}
              </Stack>
            </ListItem>
          </List>
        </Stack>
      </Container>
      <Container maxWidth="md">
        <Paper>
          <Typography>test</Typography>
        </Paper>
      </Container>
    </Stack>
  );
}

export default Home;
