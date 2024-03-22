import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import Rating from "@mui/material/Rating";

const ItemCard = ({ itemName, rating }) => {
  return (
    <Grid item xs={12} sm={6}>
      <Box mt={2} mb={2} ml={2}>
        <Card
          sx={{ display: "flex", bgcolor: "rgb(147, 197, 253)", width: "100%" }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {itemName}
            </Typography>
          </CardContent>
          <CardContent sx={{ display: "flex", alignItems: "center" }}>
            <Rating name="read-only" value={rating} readOnly />
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
};

const DummyData = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <ItemCard itemName="Classic Leather Wallet" rating={4.5} />
          <ItemCard itemName="Stainless Steel Water Bottle" rating={3.8} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <ItemCard itemName="Wireless Bluetooth Earphones" rating={4.2} />
          <ItemCard itemName="Cotton Bed Sheets Set" rating={4.7} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <ItemCard itemName="Portable Power Bank Charger" rating={4.0} />
          <ItemCard itemName="Scented Candles Gift Set" rating={4.9} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <ItemCard itemName="Foldable Laptop Stand" rating={4.3} />
          <ItemCard itemName="Organic Green Tea Leaves" rating={4.6} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <ItemCard itemName="Sports Water Bottle with Straw" rating={4.1} />
          <ItemCard itemName="Noise Cancelling Headphones" rating={4.8} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DummyData;
