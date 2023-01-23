import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";

const AddProduct = () => {
  const { addProduct } = useProducts();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    picture: "",
    type: "",
  });

  function clearInputs() {
    setProduct({
      name: "",
      description: "",
      price: 0,
      picture: "",
      type: "",
    });
  }

  function handleInput(e) {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  }

  return (
    <Box sx={{ width: "60vw", margin: "10vh auto" }}>
      <Typography variant="h4" element="h2" align="center">
        ADMIN PAGE
      </Typography>
      <TextField
        value={product.name}
        sx={{ marginBottom: "1rem" }}
        onChange={handleInput}
        fullWidth
        name="name"
        id="outlined-basic"
        label="Name"
        variant="outlined"
      />
      <TextField
        value={product.description}
        sx={{ marginBottom: "1rem" }}
        onChange={handleInput}
        fullWidth
        name="description"
        id="outlined-basic"
        label="Description"
        variant="outlined"
      />
      <TextField
        value={product.price}
        sx={{ marginBottom: "1rem" }}
        onChange={handleInput}
        fullWidth
        name="price"
        id="outlined-basic"
        label="Price"
        variant="outlined"
      />
      <TextField
        value={product.picture}
        sx={{ marginBottom: "1rem" }}
        onChange={handleInput}
        fullWidth
        name="picture"
        id="outlined-basic"
        label="Picture"
        variant="outlined"
      />
      <TextField
        value={product.type}
        sx={{ marginBottom: "1rem" }}
        onChange={handleInput}
        fullWidth
        name="type"
        id="outlined-basic"
        label="Type"
        variant="outlined"
      />
      <Button
        onClick={() => {
          addProduct(product);
          clearInputs();
        }}
        variant="outlined"
        fullWidth
        size="large"
      >
        CREATE PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;
