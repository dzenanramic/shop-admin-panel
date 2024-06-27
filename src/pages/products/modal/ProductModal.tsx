import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { removeBike } from "../../../redux/slices/productSlice/productsSlice";
import EditProductModal from "./EditProductModal";

interface Bike {
  id: string;
  model: string;
  category: string;
  engine: string;
  horsepower: string;
  torque: string;
  image: string;
  availability: number;
}

interface ProductProps {
  open?: boolean;
  handleClose?: VoidFunction;
  handleToogleDelete: VoidFunction;
  toogleDelete?: boolean;
  client?: Bike | null;
  onEditComplete: VoidFunction;
}

const ProductModal: React.FC<ProductProps> = ({
  open,
  handleClose,
  client,
  toogleDelete,
  handleToogleDelete,
  onEditComplete,
}) => {
  const dispatch = useDispatch();
  const [isEditOpen, setIsEditOpen] = useState(false);

  const onClose = () => {
    handleClose && handleClose();
  };

  const onConfirmDelete = () => {
    if (client) {
      dispatch(removeBike(client.model));
    }
    handleToogleDelete();
    onClose();
  };

  const handleEditClick = () => {
    setIsEditOpen(true);
  };

  const handleEditClose = () => {
    setIsEditOpen(false);
    onEditComplete();
  };

  return (
    <>
      {open && (
        <Dialog open={open} onClose={onClose} maxWidth={"xl"} sx={{ py: 4 }}>
          <Card sx={{ width: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={client?.image}
              title={client?.model}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {client?.model}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Category: {client?.category}
                <br />
                Engine: {client?.engine}
                <br />
                Horsepower: {client?.horsepower}
                <br />
                Torque: {client?.torque || "N/A"}
                <br />
                Availability: {client?.availability}
                <br />
              </Typography>
            </CardContent>
          </Card>
          <DialogActions>
            <Button variant="outlined" onClick={handleEditClick}>
              Edit
            </Button>
            <Button variant="outlined" onClick={handleToogleDelete}>
              Delete
            </Button>
          </DialogActions>

          {toogleDelete && (
            <Dialog
              open={toogleDelete}
              onClose={handleToogleDelete}
              maxWidth={"sm"}
              sx={{ py: 4 }}
            >
              <Card sx={{ width: 345 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Are you sure you want to delete this item?
                  </Typography>
                </CardContent>
              </Card>
              <DialogActions>
                <Button variant="outlined" onClick={onConfirmDelete}>
                  Yes
                </Button>
                <Button variant="outlined" onClick={handleToogleDelete}>
                  No
                </Button>
              </DialogActions>
            </Dialog>
          )}
        </Dialog>
      )}

      {client && (
        <EditProductModal
          open={isEditOpen}
          handleClose={handleEditClose}
          bike={client}
        />
      )}
    </>
  );
};

export default ProductModal;
