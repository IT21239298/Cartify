import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import axios from "axios";
import SellerItemCard from "../../components/seller/sellerItemcard"; // Corrected import statement
import { API_BASE_URL } from "../../utils/constants";

export default function SellerItem() {
  // Corrected component name to match conventions
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchAllContents = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/seller/get`);
        setCardData(res.data); // Corrected setting card data from API response
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllContents();
  }, []);

  return (
    <div>
      <Grid container spacing={2} justifyContent="center">
        {cardData.map((sitem, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Box marginTop={1}>
              <SellerItemCard
                title={sitem.title}
                subheader={sitem.price}
                image={`http://localhost:8082/${sitem.image}`}
                description={sitem.description}
                // url={`/consultations/public-consultations/${content.content_url}`}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
