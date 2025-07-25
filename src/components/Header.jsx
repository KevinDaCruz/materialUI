import { AppBar, Toolbar, Typography, Box, Avatar } from "@mui/material";

const Header = () => (
  <AppBar
    position="static"
    color="primary"
    sx={{ ml: "60px", width: "calc(100% - 60px)" }}
  >
    <Toolbar sx={{ justifyContent: "space-between" }}>
      <Typography variant="h6">Tableau de bord</Typography>
      <Box>
        <Avatar
          alt="Utilisateur"
          src="https://i.pravatar.cc/300"
          sx={{ width: 32, height: 32 }}
        />
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
