import React, { useState, useEffect } from "react";
import {
  Box, Card, CardContent, Typography, Button, useTheme, useMediaQuery
} from "@mui/material";
import { useGetAdvertisementsQuery, useUpdateAdvertisementStatusMutation } from '../../state/api'; // Adjust the import path as needed

// Advertisement component
const Advertisement = ({ ad, toggleActiveStatus }) => {
  const { _id, name, description, price, rating, active } = ad;
  const theme = useTheme();

  return (
    <Card
      sx={{
        marginBottom: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Price: ${price}
        </Typography>
        <Typography variant="body2">{description}</Typography>
        <Typography sx={{ mt: 1.5 }}>
          Rating: {rating} {active ? "(Active)" : "(Inactive)"}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: theme.spacing(2) }}>
        <Button variant="outlined" color="error" onClick={() => toggleActiveStatus(_id)}>
          {active ? "Deactivate" : "Activate"}
        </Button>
      </Box>
    </Card>
  );
};

// Main component to list paid advertisements
const PaidAdvertisements = () => {
  const [refresh, setRefresh] = useState(false); // State to trigger refresh
  const { data: ads, error, isLoading, refetch } = useGetAdvertisementsQuery();
  const [updateStatus] = useUpdateAdvertisementStatusMutation();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const toggleActiveStatus = async (id) => {
    await updateStatus({ adId: id }).unwrap()
      .then(() => {
        setRefresh(!refresh); // Toggle state to force re-fetch
      })
      .catch((error) => console.error('Failed to update status:', error));
  };

  // Effect to re-fetch advertisements when refresh state changes
  useEffect(() => {
    refetch();
  }, [refresh, refetch]);

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error fetching advertisements!</Typography>;

  return (
    <Box sx={{ padding: isNonMobile ? "2rem" : "1rem" }}>
      <Typography variant="h4" sx={{ marginBottom: "2rem" }}>
        Paid Advertisements
      </Typography>
      {ads?.map((ad) => (
        <Advertisement key={ad._id} ad={ad} toggleActiveStatus={toggleActiveStatus} />
      ))}
    </Box>
  );
};

export default PaidAdvertisements;
