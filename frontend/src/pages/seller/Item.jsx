import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { API_BASE_URL } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const defaultTheme = createTheme();

export default function SignIn() {
  // Ensure your form submission to use FormData for sending files
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    const files = event.target.image.files; // Access all selected files

    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]); // Append each file to the FormData object
    }

    formData.append("title", event.target.title.value);
    formData.append("description", event.target.description.value);
    formData.append("price", event.target.price.value);
    formData.append("quantity", event.target.quantity.value);

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/seller/add`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/selleritem");
      console.log("Server response:", response.data);
      // Handle success response from the server
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error response from the server
    }
  };
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sell Item
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
            encType="multipart/form-data" // Add this line
          >
            {/* Replace the existing TextField components with the new fields */}
            <TextField
              margin="normal"
              fullWidth
              id="image"
              name="image"
              type="file"
              inputProps={{ multiple: true, accept: "image/*" }} // Allow multiple files
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoComplete="title"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="description"
              label="Description"
              name="description"
              autoComplete="description"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="price"
              label="Price"
              name="price"
              type="number"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="quantity"
              label="Quantity"
              name="quantity"
              type="number"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sell Item
            </Button>
          </Box>
        </Box>
        <Box sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
