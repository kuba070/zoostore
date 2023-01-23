import { Box, Grid } from "@mui/material";
import React from "react";
import ProductList from "../components/product/ProductList";
import SideBar from "../components/product/SideBar";

const ProductsPage = () => {
  return (
    <Box p={5} sx={{ marginTop: "5rem" }}>
      Products Page
      <Grid container spacing={3}>
        <ProductList />
        <SideBar />
      </Grid>
    </Box>
  );
};

export default ProductsPage;
