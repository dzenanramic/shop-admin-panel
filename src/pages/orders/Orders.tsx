import {
  Table,
  TableBody,
  Container,
  Card,
  TableContainer,
} from "@mui/material";

import TableEmptyRows from "../../table/TableEmptyRows";
import TableHeadCustom from "../../table/TableHeadCustom";
import TablePaginationCustom from "../../table/TablePaginationCustom";
import { useTable, emptyRows, TableNoData } from "../../table";
import ProductsTableRow from "./table/OrdersTableRow";
import { allOrders } from "../../redux/slices/orderSlice/orderSlice";
import { useSelector } from "react-redux";

function Orders() {
  const orders = useSelector(allOrders);

  const {
    page,
    rowsPerPage,
    dense,
    order,
    orderBy,
    //
    selected,
    onSelectRow,
    onSelectAllRows,
    //
    onSort,
    onChangeDense,
    onChangeRowsPerPage,
    onChangePage,
  } = useTable({
    defaultOrderBy: "date",
  });

  const denseHeight = dense ? 60 : 80;

  const TABLE_HEAD = [
    {
      id: "order",
      label: "Order",
      align: "left",
    },
    {
      id: "date",
      label: "Date",
      align: "left",
    },
    {
      id: "user",
      label: "User",
      align: "left",
    },
    {
      id: "payment",
      label: "Payment",
      align: "left",
    },
    {
      id: "price",
      label: "Price",
      align: "left",
    },
    {
      id: "delivered",
      label: "Delivered",
      align: "left",
    },
  ];

  const filteredOrders = orders.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Container>
      <Card>
        <TableContainer sx={{ position: "relative", overflow: "unset"}}>
          <Table size={dense ? "small" : "medium"}>
            <TableHeadCustom
              order={order}
              orderBy={orderBy}
              headLabel={TABLE_HEAD}
              rowCount={orders.length}
              numSelected={selected.length}
              onSort={onSort}
              onSelectAllRows={(checked) =>
                onSelectAllRows(
                  checked,
                  orders.map((row) => row.order)
                )
              }
            />

            <TableBody>
              {filteredOrders.map((row) => (
                <ProductsTableRow
                  key={row.order}
                  row={row}
                  selected={selected.includes(row.order)}
                  onSelectRow={() => onSelectRow(row.order)}
                  onShowDetails={() => console.log("Shown")}
                  onBackgroundClick={() => console.log("Shown")}
                />
              ))}

              <TableEmptyRows
                height={denseHeight}
                emptyRows={emptyRows(page, rowsPerPage, orders.length)}
              />

              <TableNoData isNotFound={filteredOrders.length === 0} />
            </TableBody>
          </Table>
        </TableContainer>
        <TablePaginationCustom
          count={orders.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={onChangePage}
          onRowsPerPageChange={onChangeRowsPerPage}
          //
          dense={dense}
          onChangeDense={onChangeDense}
        />
      </Card>
    </Container>
  );
}

export default Orders;
