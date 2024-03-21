import React, { useState, useEffect } from "react";
import { Box, Button, Grid } from "@mui/material";
import axios from "axios";
import SellerItemCard from "../../components/seller/sellerItemcard";
import { API_BASE_URL } from "../../utils/constants";
import moment from "moment";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SellerItem() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [cardData, setCardData] = useState([]);

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/seller/delete/${itemId}`);
      toast.success("successfully Deleted!");
      navigate("/selleritem");
      setCardData(cardData.filter((item) => item._id !== itemId));
    } catch (err) {
      console.log(err);
    }
  };

  // Define handleEdit function to navigate to edit page
  const handleEdit = (itemId) => {
    // Navigate to edit page using useNavigate
    navigate(`/UpdateItem/${itemId}/edit`);
  };

  useEffect(() => {
    const fetchAllContents = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/seller/get`);
        setCardData(res.data);
        console.log("res card dtaaaa", res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllContents();
  }, []);

  return (
    <div>
      <Button
        href="/item"
        sx={{
          marginLeft: "90%",
          marginTop: "10px",
          bgcolor: "rgb(23, 37, 84)",
          color: "white",
          "&:hover": {
            bgcolor: "#121c40",
          },
        }}
      >
        Add Items
      </Button>
      <Grid container spacing={2}>
        {cardData.map((sitem, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Box marginTop={1} marginBottom={2}>
              <SellerItemCard
                title={sitem.title}
                price={sitem.price}
                images={sitem.images}
                description={sitem.description}
                quantity={sitem.quantity}
                onDelete={() => handleDelete(sitem._id)}
                onEdit={() => handleEdit(sitem._id)} // Pass item ID to handleEdit
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
