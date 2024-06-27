import React from "react";
import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { addCategory } from "../../../redux/slices/categoriesSlice/categoriesSlice";
import { useDispatch } from "react-redux";

type CategortyFormFields = {
  name: string;
  description: string;
};

interface ProductProps {
  open: boolean;
  handleClose: VoidFunction;
}

const AddNewCategoryModal: React.FC<ProductProps> = ({ open, handleClose }) => {
  const { register, handleSubmit, reset } = useForm<CategortyFormFields>();
  const dispatch = useDispatch();

  const handleAddCategory = (newCategory: CategortyFormFields) => {
    dispatch(addCategory(newCategory));
    handleClose();
    reset();
  };

  const onClose = () => {
    handleClose();
    reset();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xl" sx={{ py: 4 }}>
      <Card sx={{ width: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Dodaj novu kategoriju
          </Typography>
          <form onSubmit={handleSubmit(handleAddCategory)}>
            <TextField
              {...register("name")}
              id="category"
              label="Kategorija"
              variant="standard"
              fullWidth
              margin="normal"
            />
            <TextField
              {...register("description")}
              id="description"
              label="Opis"
              variant="standard"
              fullWidth
              margin="normal"
            />
            <DialogActions>
              <Button variant="outlined" type="submit">
                Dodaj
              </Button>
              <Button variant="outlined" onClick={onClose}>
                Odustani
              </Button>
            </DialogActions>
          </form>
        </CardContent>
      </Card>
    </Dialog>
  );
};

export default AddNewCategoryModal;
