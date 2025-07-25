import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GroupIcon from "@mui/icons-material/Group";
import MessageIcon from "@mui/icons-material/Message";

const Sidebar = () => (
  <Box
    sx={{
      width: "60px",
      height: "100vh",
      backgroundColor: "#f5f5f5",
      borderRight: "1px solid #ddd",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      pt: 2,
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1100,
    }}
  >
    <List>
      {[<HomeIcon />, <ShoppingCartIcon />, <GroupIcon />, <MessageIcon />].map(
        (icon, index) => (
          <ListItem button key={index} sx={{ justifyContent: "center", p: 1 }}>
            <ListItemIcon sx={{ minWidth: "auto", color: "gray" }}>
              {icon}
            </ListItemIcon>
          </ListItem>
        )
      )}
    </List>
  </Box>
);

export default Sidebar;
