import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useCart } from "../../contexts/CartContexProvider";
import { useAuth } from "../../contexts/AuthContextProvider";
import { ADMIN } from "../../helpers/consts";

export default function ProductCard({ item }) {
  const { deleteProduct } = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();

  const navigate = useNavigate();

  const {
    user: { email },
  } = useAuth();

  return (
    <Card sx={{ width: "20rem", margin: "2rem", marginTop: "3rem" }}>
      <CardMedia
        sx={{ height: "320px" }}
        image={item.picture}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {item.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", flexDirection: "column" }}>
        {email === ADMIN ? (
          <>
            <Button size="small" onClick={() => deleteProduct(item.id)}>
              Delete
            </Button>
            <Button size="small">Details</Button>
            <Button onClick={() => navigate(`/edit/${item.id}`)} size="small">
              Edit
            </Button>
          </>
        ) : (
          <IconButton onClick={() => addProductToCart(item)}>
            <ShoppingCartRoundedIcon
              color={checkProductInCart(item.id) ? "primary" : ""}
            />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}
