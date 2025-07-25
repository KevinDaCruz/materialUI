import { Grid, Paper, Typography, Box } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PeopleIcon from "@mui/icons-material/People";
import MessageIcon from "@mui/icons-material/Message";

const cards = [
  {
    icon: <MonetizationOnIcon fontSize="large" />,
    label: "Ventes",
    value: "1000",
  },
  { icon: <PeopleIcon fontSize="large" />, label: "Clients", value: "300" },
  { icon: <MessageIcon fontSize="large" />, label: "Messages", value: "5" },
];

const InfoCards = () => (
  <Grid container spacing={3} sx={{ mt: 2 }}>
    {cards.map((card, index) => (
      <Grid item xs={12} key={index}>
        <Paper
          elevation={3}
          sx={{ p: 2, display: "flex", alignItems: "center", gap: 2 }}
        >
          {card.icon}
          <Box>
            <Typography variant="h6">{card.value}</Typography>
            <Typography variant="body2">{card.label}</Typography>
          </Box>
        </Paper>
      </Grid>
    ))}
  </Grid>
);

export default InfoCards;
