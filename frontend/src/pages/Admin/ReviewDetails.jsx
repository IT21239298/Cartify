import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const SellerPage = () => {
  const DummySellerData = [
    { sellerName: "Hansaja Gunasekara" },
    { sellerName: "Kavindu Thennakoon" },
    { sellerName: "Rashini Dahanayake" },
  ];

  const handleWarningClick = () => {
    // Add your warning button click logic here
    console.log("Warning button clicked");
  };

  return (
    <div>
      {/* New Cards for Total Success and Cancel Orders */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <Card
          sx={{
            bgcolor: "rgb(147, 197, 253)",
            width: "400px",
            height: "200px",
            ml: "400px",
            mt: "20px",
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Total Success Orders
            </Typography>
            {/* Your content for Total Success Orders */}
          </CardContent>
        </Card>
        <Card
          sx={{
            bgcolor: "rgb(147, 197, 253)",
            width: "400px",
            height: "200px",
            mr: "400px",
            mt: "20px",
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Total Cancel Orders
            </Typography>
            {/* Your content for Total Cancel Orders */}
          </CardContent>
        </Card>
      </div>

      {/* Seller Cards */}
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
            <Button
              variant="contained"
              onClick={handleWarningClick}
              sx={{
                bgcolor: "#124076",
                "&:hover": {
                  bgcolor: "#E72929",
                },
                color: "white",
                marginLeft: "10px",
              }}
            >
              Pending
            </Button>
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
