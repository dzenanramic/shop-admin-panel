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
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateBike } from "../../../redux/slices/productSlice/productsSlice";

type FormFields = {
  id: string;
  model: string;
  category: string;
  engine: string;
  horsepower: string;
  torque: string;
  image: string;
  availability: number;
};

interface EditProductModalProps {
  open: boolean;
  handleClose: VoidFunction;
  bike: FormFields;
}

const EditProductModal: React.FC<EditProductModalProps> = ({
  open,
  handleClose,
  bike,
}) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm<FormFields>({
    defaultValues: bike,
  });

  const onClose = () => {
    handleClose();
    reset();
  };

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    dispatch(updateBike(data));
    handleClose();
    reset();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth={"xl"} sx={{ py: 4 }}>
      <Card sx={{ width: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Edit Product
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("model")}
              id="model"
              label="Model"
              variant="standard"
              fullWidth
              margin="normal"
            />
            <TextField
              {...register("category")}
              id="category"
              label="Category"
              variant="standard"
              fullWidth
              margin="normal"
            />
            <TextField
              {...register("horsepower")}
              id="horsepower"
              label="Horsepower"
              variant="standard"
              fullWidth
              margin="normal"
            />
            <TextField
              {...register("engine")}
              id="engine"
              label="Engine"
              variant="standard"
              fullWidth
              margin="normal"
            />
            <TextField
              {...register("torque")}
              id="torque"
              label="Torque"
              variant="standard"
              fullWidth
              margin="normal"
            />
            <TextField
              {...register("image")}
              id="image"
              label="Image URL"
              variant="standard"
              fullWidth
              margin="normal"
            />
            <TextField
              {...register("availability")}
              id="availability"
              label="Availability"
              type="number"
              variant="standard"
              fullWidth
              margin="normal"
            />
            <DialogActions>
              <Button variant="outlined" type="submit">
                Save
              </Button>
              <Button variant="outlined" onClick={onClose}>
                Cancel
              </Button>
            </DialogActions>
          </form>
        </CardContent>
      </Card>
    </Dialog>
  );
};

export default EditProductModal;
