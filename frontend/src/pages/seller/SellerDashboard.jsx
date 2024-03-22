import React, { useEffect, useRef } from "react";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import Chart from "chart.js/auto"; // Import Chart.js

// TotalItemsCard Component
const TotalItemsCard = ({ totalItems }) => (
  <Card sx={{ bgcolor: "#67C6E3" }}>
    <CardContent>
      <Typography variant="h4" component="h2">
        Total Items
      </Typography>
      <Typography
        sx={{ fontSize: "30px", fontWeight: "bold" }}
        variant="body2"
        component="p"
      >
        {totalItems}
      </Typography>
    </CardContent>
  </Card>
);

// TotalSellItemsCard Component
const TotalSellItemsCard = ({ totalSellItems }) => (
  <Card sx={{ bgcolor: "#67C6E3" }}>
    <CardContent>
      <Typography variant="h4" component="h2">
        Total Sell Items
      </Typography>
      <Typography
        sx={{ fontSize: "30px", fontWeight: "bold" }}
        variant="body2"
        component="p"
      >
        {totalSellItems}
      </Typography>
    </CardContent>
  </Card>
);

// AllItemsCard Component
const AllItemsCard = ({ allItems }) => (
  <Card sx={{ bgcolor: "#67C6E3" }}>
    <CardContent>
      <Typography variant="h4" component="h2">
        All Items
      </Typography>
      <Typography
        sx={{ fontSize: "30px", fontWeight: "bold" }}
        variant="body2"
        component="p"
      >
        {allItems}
      </Typography>
    </CardContent>
  </Card>
);

// SellerBarChart Component
const SellerBarChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }
    const ctx = document.getElementById("sellerBarChart");
    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [data]);

  return <canvas id="sellerBarChart" />;
};

// SellerDashboard Component
const SellerDashboard = () => {
  // Mock data for demonstration
  const totalItems = 100;
  const totalSellItems = 50;
  const allItems = 150;
  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <Grid sx={{ mt: "20px" }} container spacing={2}>
        <Grid item xs={12}>
          <Button
            href="/item"
            variant="contained"
            sx={{
              bgcolor: "rgb(23, 37, 84)",
              color: "white",
              "&:hover": {
                bgcolor: "#121c40",
              },
              ml: "20px",
            }}
          >
            Add Items
          </Button>
          <Button
            href="/selleritem"
            variant="contained"
            sx={{
              bgcolor: "rgb(23, 37, 84)",
              color: "white",
              "&:hover": {
                bgcolor: "#121c40",
              },
              ml: "20px",
            }}
          >
            My Items
          </Button>
          <Button
            href="/reviewrating"
            variant="contained"
            sx={{
              bgcolor: "rgb(23, 37, 84)",
              color: "white",
              "&:hover": {
                bgcolor: "#121c40",
              },
              ml: "20px",
            }}
          >
            My Reviews
          </Button>
        </Grid>

        <Grid item xs={4}>
          <TotalItemsCard totalItems={totalItems} />
        </Grid>
        <Grid item xs={4}>
          <TotalSellItemsCard totalSellItems={totalSellItems} />
        </Grid>
        <Grid item xs={4}>
          <AllItemsCard allItems={allItems} />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" sx={{ mt: "20px", mb: "20px" }}>
        <Grid item xs={10}>
          <SellerBarChart data={chartData} />
        </Grid>
      </Grid>
    </div>
  );
};

export default SellerDashboard;
