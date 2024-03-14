import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { API_BASE_URL } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const defaultTheme = createTheme();

export default function SignIn() {
  const handleChange = (event) => {
    setCategories(event.target.value);
  };
  // Ensure your form submission to use FormData for sending files
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    const files = event.target.image.files;

    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }

    formData.append("title", event.target.title.value);
    formData.append("description", event.target.description.value);
    formData.append("price", event.target.price.value);
    formData.append("quantity", event.target.quantity.value);
    formData.append("categories", categories); // Include categories in the form data

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
  const [categories, setCategories] = React.useState("");
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#747264" }}>
            <StorefrontIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sell Item
          </Typography>
          <Box
            sx={{
              marginTop: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#F5F7F8", // Change the background color here
              padding: 3,

              borderRadius: "10px",
              // boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
            }}
            component="form"
            onSubmit={handleSubmit}
            noValidate
            // sx={{ mt: 1 }}
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
            <FormControl fullWidth>
              <InputLabel id="categories">Categories</InputLabel>
              <Select
                labelId="categories"
                id="categories"
                value={categories}
                label="Categories"
                onChange={handleChange}
              >
                <MenuItem value="Clothes">Clothes</MenuItem>
                <MenuItem value="Electronics">Electronics</MenuItem>
                <MenuItem value="Toys">Toys</MenuItem>
              </Select>
            </FormControl>
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
