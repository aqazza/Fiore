import {
  Box,
  Typography,
  useTheme,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlined from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlined from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlined from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { useState } from "react";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [access, setAccess] = useState("");

  // State variable for showing/hiding the form
  const [isFormVisible, setFormVisibility] = useState(false);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column-cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "Admin"
                ? colors.greenAccent[600]
                : access === "Manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="5px"
          >
            {access === "admin" && <AdminPanelSettingsOutlined />}
            {access === "manager" && <SecurityOutlined />}
            {access === "user" && <LockOpenOutlined />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  // Function to handle form submission
  const handleAddUser = () => {
    // Perform actions to add the user with the provided information
    // You can use the state variables (name, age, id, email, access) here
    // Then, clear the form and hide it
    clearForm();
    setFormVisibility(false);
  };
  // Function to clear the form fields
  const clearForm = () => {
    setName("");
    setAge("");
    setId("");
    setEmail("");
    setAccess("");
  };
  return (
    <Box m="20px">
      <Header
        title="Team"
        subtitle="Welcome to your Team page, kindly sort through the user base"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => setFormVisibility(!isFormVisible)}
        >
          {isFormVisible ? "Close Form" : "Add User"}
        </Button>
        {isFormVisible && (
          <form onSubmit={handleAddUser}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              label="Age"
              variant="outlined"
              fullWidth
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />

            <TextField
              label="ID"
              variant="outlined"
              fullWidth
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />

            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <FormControl fullWidth variant="outlined">
              <InputLabel>Access Level</InputLabel>
              <Select
                label="Access Level"
                value={access}
                onChange={(e) => setAccess(e.target.value)}
                required
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="manager">Manager</MenuItem>
                <MenuItem value="user">User</MenuItem>
              </Select>
            </FormControl>

            <Button type="submit" variant="contained" color="primary">
              Add User
            </Button>
          </form>
        )}
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
