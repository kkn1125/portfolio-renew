import { PROFILE_IMAGE, SVG_ICON_SIZE } from "@common/variables";
import {
  Box,
  Chip,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { Information } from "@src/storage/introduce/information";

function Home() {
  return (
    <Stack flex={1} gap={3}>
      <Container maxWidth="md">
        <Stack direction="row">
          <Box
            component="img"
            src={PROFILE_IMAGE}
            alt="profile"
            width="auto"
            height={200}
            sx={{ borderRadius: 1 }}
          />
          <List>
            <ListItem>
              <ListItemText>{Information.name}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>{Information.age}</ListItemText>
            </ListItem>
            <ListItem>
              {Information.skill.main.map(({ name, icon }) => (
                <Box key={name}>
                  <Box
                    dangerouslySetInnerHTML={{ __html: icon }}
                    width={SVG_ICON_SIZE}
                    height={SVG_ICON_SIZE}
                  />
                  <Chip
                  size="small"
                  label={name}
                  />
                </Box>
              ))}
            </ListItem>
            <ListItem>
              {Information.skill.sub.map(({ name, icon }) => (
                <Box key={name}>
                  <Box
                    dangerouslySetInnerHTML={{ __html: icon }}
                    width={SVG_ICON_SIZE}
                    height={SVG_ICON_SIZE}
                  />
                  <Chip
                  size="small"
                  label={name}
                  />
                </Box>
              ))}
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
