// CRIO_SOLUTION_START_MODULE_PRODUCTS
// CRIO_SOLUTION_END_MODULE_PRODUCTS
import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
  FormControl,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Dialog from "@mui/material/Dialog";
import "./SizeChartShoe.css";
import React, { useState } from "react";
import "./ProductCard.css";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(6, 6, 40, 9.8),
  createData(7, 7, 41, 10.2),
  createData(8, 8, 42, 10.6),
  createData(9, 9, 43, 11),
  createData(10, 10, 44, 11.5),
  createData(11, 11, 45, 12.2),
  createData(12, 12, 46, 12.6),
];

const ProductCard = ({ product, handleAddToCart }) => {
  const [open, setOpen] = useState(false);

  const sizeChart = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card className="card">
      {/* CRIO_SOLUTION_START_MODULE_PRODUCTS */}
      <CardMedia component="img" alt={product.name} image={product.image} />
      <CardContent>
        <Typography>{product.name}</Typography>
        <Typography paddingY="0.5rem" fontWeight="700">
          ${product.cost}
        </Typography>
        <Rating
          name="read-only"
          value={product.rating}
          precision={0.5}
          readOnly
        />
        {product.sizeChartType ? (
          <>
            <Button onClick={sizeChart}>Size chart</Button>
            <Dialog open={open} onClose={handleClose}>
              <Typography
                className="table heading"
                style={{
                  fontSize: "1.5rem",
                  color: "rgb(58, 57, 57)",
                  marginLeft: "20px",
                  marginBottom: "30px",
                }}
              >
                Shoe's Size Chart
              </Typography>

              <TableContainer style={{ width: "100%" }} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="table heading" align="left">
                        Size
                      </TableCell>
                      <TableCell className="table heading" align="left">
                        UK/INDIA
                      </TableCell>
                      <TableCell className="table heading" align="left">
                        EU
                      </TableCell>
                      <TableCell className="table heading" align="left">
                        HEEL TO TOE
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell className="table" align="left">
                          {row.name}
                        </TableCell>
                        <TableCell className="table" align="left">
                          {row.calories}
                        </TableCell>
                        <TableCell className="table" align="left">
                          {row.fat}
                        </TableCell>
                        <TableCell className="table" align="left">
                          {row.carbs}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Dialog>
          </>
        ) : (
          <></>
        )}
      </CardContent>
      <CardActions className="card-actions">
        {product.length ? (
          <>
            <FormControl
              style={{ width: "30%", paddingRight: "10px", marginTop: "-10px" }}
            >
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Size
              </InputLabel>
              <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: "age",
                  id: "uncontrolled-native",
                }}
              >
                {product.sizes.map((i) => (
                  <option>{i}</option>
                ))}
              </NativeSelect>
            </FormControl>

            <Button
              className="card-button"
              fullWidth
              variant="contained"
              startIcon={<AddShoppingCartOutlined />}
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
          </>
        ) : (
          <Button
            className="card-button"
            fullWidth
            variant="contained"
            startIcon={<AddShoppingCartOutlined />}
            onClick={handleAddToCart}
          >
            Add to cart
          </Button>
        )}
      </CardActions>
      {/* CRIO_SOLUTION_END_MODULE_PRODUCTS */}
    </Card>
  );
};

export default ProductCard;
