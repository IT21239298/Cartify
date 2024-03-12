import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

export default function SellerItemCard({
  id,
  title,
  subheader,
  image,
  description,
  price,
  quantity,
  onEdit,
  onDelete,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      sx={{
        border: "6px solid #e0e0e0",
        maxWidth: 350,
        "&:hover": {
          bgcolor: hovered ? "#D3D3D3" : "#",
        },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardHeader
        titleTypographyProps={{
          variant: "h6",
          style: { fontWeight: "bold" },
        }}
        title={title}
        subheader={subheader}
      />
      <CardMedia
        component="img"
        maxWidth="345px"
        height="194px"
        src={image}
        alt={title}
      />
      <CardContent style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Typography variant="body2" color="text.secondary">
            Price: {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Quantity: {quantity}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={onEdit}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(id)}>
          <DeleteIcon />
        </IconButton>
        <Link to={`/seller/${id}`} style={{ marginLeft: "auto" }}>
          <IconButton
            sx={{
              bgcolor: "#0178ba",
              color: "#FFFFFF",
              fontSize: 13,
              "&:hover": {
                bgcolor: "#2A487E",
              },
            }}
            size="small"
          >
            <ArrowForwardIcon />
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  );
}
