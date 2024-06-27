import {
  TableRow,
  TableCell,
  Checkbox,
} from "@mui/material";


type Props = {
  row: {
    id: string;
    model: string;
    category: string;
    engine: string;
    horsepower: string;
    torque: string;
    image: string;
    availability: number;
  };
  selected?: boolean;
  onSelectRow: VoidFunction;
  onShowDetails: VoidFunction;
  onBackgroundClick: (row: {
    id: string;
    model: string;
    category: string;
    engine: string;
    horsepower: string;
    torque: string;
    image: string;
    availability: number;
  }) => void;
};


export default function ProductsTableRow({
  row,
  selected,
  onSelectRow,
  onBackgroundClick,
}: Props) {
  const { model, category, engine, horsepower, torque, availability } =
    row;

  return (
    <>
      <TableRow
        hover
        selected={selected}
        onClick={() => onBackgroundClick(row)}
        sx={{ cursor: "pointer" }}
      >
        <TableCell padding="checkbox">
          <Checkbox
            checked={selected}
            onClick={(e) => {
              e.stopPropagation();
              onSelectRow();
            }}
          />
        </TableCell>
        <TableCell align="left">{model}</TableCell>
        <TableCell align="left">{category}</TableCell>
        <TableCell align="left">{engine}</TableCell>
        <TableCell align="left">{horsepower}</TableCell>
        <TableCell align="left">{torque}</TableCell>
        <TableCell align="left">{availability}</TableCell>
      </TableRow>
    </>
  );
}
