import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";

// Mock data - replace this with your actual data fetching logic
const advertisements = [
  {
    _id: "ad1",
    name: "Iphone 15",
    description: "Apple ka iphone 15",
    price: "10000",
    rating: 4.5,
    active: true,
  },
  {
    _id: "ad2",
    name: "Bugatti",
    description: "Bugatti Gold plated",
    price: "15000000",
    rating: 5,
    active: false,
  },
  // Add more advertisements as needed
];

// Advertisement component
const Advertisement = ({ name, description, price, rating, active }) => {
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
      {/* Example action buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: theme.spacing(2) }}>
        <Button variant="contained" color="primary" sx={{ marginRight: theme.spacing(1) }}>
          Edit
        </Button>
        <Button variant="outlined" color="error">
          {active ? "Deactivate" : "Activate"}
        </Button>
      </Box>
    </Card>
  );
};

// Main component to list paid advertisements
const PaidAdvertisements = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box sx={{ padding: isNonMobile ? "2rem" : "1rem" }}>
      <Typography variant="h4" sx={{ marginBottom: "2rem" }}>
        Paid Advertisements
      </Typography>
      {advertisements.map((ad) => (
        <Advertisement key={ad._id} {...ad} />
      ))}
    </Box>
  );
};

export default PaidAdvertisements;
