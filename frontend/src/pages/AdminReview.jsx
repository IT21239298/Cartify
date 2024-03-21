import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import Rating from "@mui/material/Rating";

const SellerPage = () => {
  const DummySellerData = [
    { sellerName: "Kavindu Thennakoon", rating: 4.0 },
    { sellerName: "Kavindu Thennakoon", rating: 4.0 },
    { sellerName: "Kavindu Thennakoon", rating: 4.0 },
  ];

  const handleWarningClick = () => {
    // Add your warning button click logic here
    console.log("Warning button clicked");
  };

  return (
    <div>
      {DummySellerData.map((seller, index) => (
        <Card
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            bgcolor: "rgb(147, 197, 253)",
            marginBottom: 2,
            mt: "20px",
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {seller.sellerName}
            </Typography>
          </CardContent>
          <CardContent sx={{ display: "flex", alignItems: "center" }}>
            <Rating name="read-only" value={seller.rating} readOnly />
            <Button
              variant="contained"
              onClick={handleWarningClick}
              sx={{
                bgcolor: "#ff6347",
                "&:hover": {
                  bgcolor: "#E72929",
                },
                color: "white",
                marginLeft: "10px",
              }}
            >
              Warning
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SellerPage;
