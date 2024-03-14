import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";
import { API_BASE_URL } from "../../utils/constants";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

const defaultTheme = createTheme();

export default function EditSellerItem() {
  const { id } = useParams(); // Get the item ID from the URL
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    quantity: "",
    categories: "", // Initialize categories field
  });

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/seller/get/${id}`);
        setFormData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchItemDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "categories" ? e.target.value : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_BASE_URL}/api/seller/update/${id}`, formData);
      navigate("/selleritem");
    } catch (err) {
      console.error(err);
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
            Edit Item
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
            encType="multipart/form-data" // Add this line if you have file upload
          >
            <TextField
              margin="normal"
              fullWidth
              id="title"
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              autoComplete="title"
            />
            <TextField
              margin="normal"
              fullWidth
              id="description"
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              autoComplete="description"
            />
            <FormControl fullWidth>
              <InputLabel id="categories">Categories</InputLabel>
              <Select
                labelId="categories"
                id="categories"
                value={formData.categories}
                label="Categories"
                name="categories"
                onChange={handleChange}
              >
                <MenuItem value="Clothes">Clothes</MenuItem>
                <MenuItem value="Electronics">Electronics</MenuItem>
                <MenuItem value="Toys">Toys</MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="normal"
              fullWidth
              id="price"
              label="Price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              fullWidth
              id="quantity"
              label="Quantity"
              name="quantity"
              type="number"
              value={formData.quantity}
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update Item
            </Button>
          </Box>
        </Box>
        <Box sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
