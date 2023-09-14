import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material";
import EmailOutlined from "@mui/icons-material";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Dashboard"
          subtitle="Welcome to your dashboard, kindly sort
        through the user base"
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
