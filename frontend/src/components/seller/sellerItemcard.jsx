import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import { API_IMG_URL } from "../../utils/constants";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Parser } from "html-to-react";
import { Link } from "react-router-dom";
export default function sellerItemcard({
  title,
  subheader,
  image,
  description,
  url,
}) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const [hovered, setHovered] = React.useState(false);
  return (
    <motion.div initial="hidden" animate="visible" variants={cardVariants}>
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
            style: { lineHeight: "1", minHeight: "4em", fontWeight: "bold" },
          }}
          title={title}
          subheader={subheader}
        />
        <CardMedia
          component="img"
          maxWidth="345px"
          height="194px"
          //   src={`${API_IMG_URL}/${image}`} // Accessing image from props
          alt={title}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {new Parser().parse(description)}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={url}>
            <IconButton
              component={Link}
              to={url}
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
    </motion.div>
  );
}
