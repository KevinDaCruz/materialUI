import { Box } from "@mui/material";
import Header from "./components/Header";
import InfoCards from "./components/InfoCards";
import FakeChart from "./components/FakeChart";
import OrdersTable from "./components/OrdersTable";
import Sidebar from "./components/SideBar";

const App = () => (
  <>
    <Header />
    <Sidebar />
    <Box sx={{ ml: "60px", mt: 4, px: 3 }}>
      <InfoCards />
      <FakeChart />
      <OrdersTable />
    </Box>
  </>
);

export default App;
