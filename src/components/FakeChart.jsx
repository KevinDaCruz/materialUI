import { Box, Typography } from "@mui/material";

const FakeChart = () => (
  <Box sx={{ mt: 4 }}>
    <Typography variant="subtitle1" sx={{ mb: 2 }}>
      Graphique
    </Typography>
    <Box
      sx={{
        width: 500,
        height: 200,
        background: "linear-gradient(to right, #80deea, #00bcd4)",
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold",
      }}
    >
      Zone graphique
    </Box>
  </Box>
);

export default FakeChart;
