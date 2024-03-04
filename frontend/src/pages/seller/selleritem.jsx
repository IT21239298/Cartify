import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import axios from "axios";
import sellerItemcard from "../../components/seller/sellerItemcard";
// import PublicConsultationbreadcrumb from "../components/publicConsultations/PublicConsultationbreadcrumb";
import { API_BASE_URL } from "../utils/constants";
import moment from "moment";

export default function selleritem() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchAllContents = async () => {
      try {
        const res = await axios.get(
          `${API_BASE_URL}/consultations/public-consultations`
        );
        setCardData(res.data);
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
              <sellerItemcard
                title={sitem.itemName}
                subheader={`${moment(sitem.created_at).format(
                  "MMMM DD, YYYY"
                )}`}
                image={sitem.content_image}
                description={sitem.itemDescription}
                // url={`/consultations/public-consultations/${content.content_url}`}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
