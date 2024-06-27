import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  Typography,
} from "@mui/material";
import {
  removeCategory,
  selectSelectedCategory,
} from "../../../redux/slices/categoriesSlice/categoriesSlice";
import { useDispatch, useSelector } from "react-redux";

interface CategoryProps {
  open: boolean;
  handleDelete?: VoidFunction;
  onClose?: VoidFunction;
}

const DeleteCategoryModal: React.FC<CategoryProps> = ({ open, onClose }) => {
  const selectedCategory = useSelector(selectSelectedCategory);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeCategory(selectedCategory));
    onClose && onClose();
  };
  return (
    <Dialog open={open} onClose={onClose} maxWidth={"sm"} sx={{ py: 4 }}>
      <Card sx={{ width: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Are you sure you want to delete this item?
          </Typography>
        </CardContent>
      </Card>
      <DialogActions>
        <Button variant="outlined" onClick={handleDelete}>Yes</Button>
        <Button variant="outlined" onClick={onClose}>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteCategoryModal;
