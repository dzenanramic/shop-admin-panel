import { TableRow, TableCell, Checkbox, Button } from "@mui/material";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

import {
  toggleDeleteCategory,
  setSelectedCategory
} from "../../../redux/slices/categoriesSlice/categoriesSlice";
import { useDispatch,  } from "react-redux";

type Props = {
  row: {
    name: string;
    description: string;
  };
  selected?: boolean;
  onSelectRow: VoidFunction;
  onShowDetails: VoidFunction;
  onBackgroundClick: VoidFunction;
};

export default function CategoriesTableRow({
  row,
  selected,
  onSelectRow,
  onBackgroundClick,
}: Props) {
  const { name, description } = row;
  const dispatch = useDispatch();


  const handleSelectCategory = () => {
    dispatch(setSelectedCategory(name))
    dispatch(toggleDeleteCategory());
  };
 

  return (
    <>
      <TableRow hover selected={selected} onClick={onBackgroundClick}>
        <TableCell padding="checkbox">
          <Checkbox
            checked={selected}
            onClick={(e) => {
              e.stopPropagation();
              onSelectRow();
            }}
          />
        </TableCell>
        <TableCell align="left">{name}</TableCell>
        <TableCell align="left">{description}</TableCell>
        <Button onClick={handleSelectCategory}>
          <DeleteOutlineRoundedIcon />
        </Button>
      </TableRow>
    </>
  );
}
