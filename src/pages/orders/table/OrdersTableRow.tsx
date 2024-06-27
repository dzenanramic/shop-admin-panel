import {
  TableRow,
  TableCell,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

type Props = {
  row: {
    order: string;
    date: string;
    user: string;
    payment: boolean;
    price: number;
    delivered: boolean;
    items: string[];
  };
  selected?: boolean;
  onSelectRow: VoidFunction;
  onShowDetails: VoidFunction;
  onBackgroundClick: VoidFunction;
};

export default function ProductsTableRow({
  row,
  selected,
  onSelectRow,
  onBackgroundClick,
}: Props) {
  const { order, date, user, price } = row;

  const [payment, setPayment] = useState("");
  const [delivery, setDelivery] = useState("");
  const handleChangePayment = (event: SelectChangeEvent) => {
    setPayment(event.target.value as string);
  };
  const handleChangeDelivery = (event: SelectChangeEvent) => {
    setDelivery(event.target.value as string);
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
        <TableCell align="left">{order}</TableCell>
        <TableCell align="left">{date}</TableCell>
        <TableCell align="left">{user}</TableCell>
        <TableCell align="left">
          <FormControl sx={{ minWidth: "150px" }}>
            <InputLabel id="demo-simple-select-label">
              Payment Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={payment}
              label="Age"
              onChange={handleChangePayment}
            >
              <MenuItem value={10}>Succes</MenuItem>
              <MenuItem value={20}>Pending</MenuItem>
              <MenuItem value={30}>Failed</MenuItem>
            </Select>
          </FormControl>
        </TableCell>
        <TableCell align="left">{price}</TableCell>
        <TableCell align="left">
          <FormControl sx={{ minWidth: "150px" }}>
            <InputLabel id="demo-simple-select-label">
              Delivery Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={delivery}
              label="Age"
              onChange={handleChangeDelivery}
            >
              <MenuItem value={10}>Delivered</MenuItem>
              <MenuItem value={20}>Pending</MenuItem>
              <MenuItem value={30}>Failed</MenuItem>
            </Select>
          </FormControl>
        </TableCell>
      </TableRow>
    </>
  );
}
