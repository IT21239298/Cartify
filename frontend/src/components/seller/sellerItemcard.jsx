// SellerItemCard component
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
import Carousel from "react-material-ui-carousel"; // Import Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SellerItemCard({
  id,
  title,
  subheader,
  images,
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
      {images && images.length > 0 && (
        <Carousel
          autoPlay={false} // Set to true if you want autoplay
          animation="slide" // Set to "fade" for fade effect
          indicators={true} // Show indicators
          timeout={500} // Transition time
          navButtonsAlwaysVisible={true} // Show navigation buttons always
        >
          {images.map((image, index) => (
            <CardMedia
              key={index}
              component="img"
              maxWidth="345px"
              height="194px"
              src={`http://localhost:8082/${image}`}
              alt={`${title} - ${index}`}
            />
          ))}
        </Carousel>
      )}
      <CardContent>
        <Typography
          sx={{ color: "#222831", fontSize: "1opx" }}
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
          variant="body2"
        >
          {description}
        </Typography>

        <div style={{ display: "flex", marginTop: "10px" }}>
          <Typography
            sx={{ color: "#222831", fontSize: "15px", fontWeight: "bold" }}
            variant="body2"
          >
            Price:$<br></br> {price}
          </Typography>
          <Typography
            sx={{
              ml: "140px",
              color: "#222831",
              fontSize: "15px",
              fontWeight: "bold",
            }}
            variant="body2"
          >
            Quantity:<br></br>
            {quantity}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          sx={{
            bgcolor: "#CAA6A6",
            color: "#FFFFFF",
            fontSize: 13,
            "&:hover": {
              bgcolor: "#B47B84",
            },
          }}
          onClick={() => onEdit(id)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          sx={{
            bgcolor: "#D04848",
            color: "#FFFFFF",
            ml: "10px",
            fontSize: 13,
            "&:hover": {
              bgcolor: "#A0153E",
            },
          }}
          onClick={() => onDelete(id)}
        >
          <DeleteIcon />
        </IconButton>
        <Link to={`/seller/${id}`} style={{ marginLeft: "auto" }}>
          <IconButton
            sx={{
              bgcolor: "#747264",
              color: "#FFFFFF",
              fontSize: 13,
              "&:hover": {
                bgcolor: "#2A487E",
              },
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  );
}
