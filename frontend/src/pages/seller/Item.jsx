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

import Lottie from "react-lottie";

import { ImagetoBase64 } from "../../utility/ImagetoBase64";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import animationData from "../../assets/json/shop.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultTheme = createTheme();

export default function SignIn() {
  const handleChange = (event) => {
    setCategories(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
      description: event.target.description.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      categories: categories,
      images: [],
    };

    const files = event.target.image.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const base64Image = await ImagetoBase64(file);
      data.images.push(base64Image);
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/api/seller/add`, data);

      toast.success("Item added successfully!");

      navigate("/selleritem");

      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);

      toast.error("Error adding item. Please try again.");
    }
  };

  const [categories, setCategories] = React.useState("");
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: "20px",
            mb: "15px",
          }}
        >
          {/* Animation or content for the left side */}
          <Box
            sx={{
              width: "50%",
              backgroundColor: "rgb(147, 197, 253)",
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
            }}
          >
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
              }}
            />
            {/* Add your animation or content here */}
          </Box>

          {/* Form on the right side */}
          <Box
            sx={{
              width: "50%",
              backgroundColor: "#F5F7F8",
              padding: 3,
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
            component="form"
            onSubmit={handleSubmit}
            noValidate
            encType="multipart/form-data"
          >
            <Typography component="h1" variant="h5" sx={{ fontWeight: "bold" }}>
              SELL ITEM
            </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="image"
              name="image"
              type="file"
              inputProps={{ multiple: true, accept: "image/*" }}
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
                <MenuItem value="Shoes">Shoes</MenuItem>
                <MenuItem value="Luuggage & Bags">Luuggage & Bags</MenuItem>
                <MenuItem value="Accessories">Accessories</MenuItem>
                <MenuItem value="Toys">Toys</MenuItem>
                <MenuItem value="Phone Accessories">Phone Accessories</MenuItem>
                <MenuItem value="Jewelry & Watches">Jewelry & Watches</MenuItem>
                <MenuItem value="Consumer Electronics">
                  Consumer Electronics
                </MenuItem>
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
      </Container>
    </ThemeProvider>
  );
}