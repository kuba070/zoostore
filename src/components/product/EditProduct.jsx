import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

const EditProduct = () => {
  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  console.log(productDetails);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  const [product, setProduct] = useState(productDetails);

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
        EDIT PRODUCT
      </Typography>
      <TextField
        onChange={handleInput}
        fullWidth
        name="name"
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={product.name || ""}
      />
      <TextField
        value={product.description || ""}
        sx={{ marginBottom: "1rem" }}
        onChange={handleInput}
        fullWidth
        name="description"
        id="outlined-basic"
        label="Description"
        variant="outlined"
      />
      <TextField
        value={product.price || ""}
        sx={{ marginBottom: "1rem" }}
        onChange={handleInput}
        fullWidth
        name="price"
        id="outlined-basic"
        label="Price"
        variant="outlined"
      />
      <TextField
        value={product.picture || ""}
        sx={{ marginBottom: "1rem" }}
        onChange={handleInput}
        fullWidth
        name="picture"
        id="outlined-basic"
        label="Picture"
        variant="outlined"
      />
      <TextField
        value={product.type || ""}
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
          saveEditedProduct(product);
          navigate("/products");
        }}
        variant="outlined"
        fullWidth
        size="large"
      >
        SAVE CHANGES
      </Button>
    </Box>
  );
};

export default EditProduct;
