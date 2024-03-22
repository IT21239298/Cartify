import React from "react";
import { Card, CardContent, Button, Typography } from "@mui/material";

const TwoCardsWithButtons = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Card sx={{ width: 300, marginBottom: 2 }}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Typography gutterBottom variant="h5" component="div">
              Card 1
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </Typography>
          </div>
          <Button variant="contained" color="primary">
            Button 1
          </Button>
        </CardContent>
      </Card>

      <Card sx={{ width: 300 }}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Typography gutterBottom variant="h5" component="div">
              Card 2
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </Typography>
          </div>
          <Button variant="contained" color="primary">
            Button 2
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TwoCardsWithButtons;
