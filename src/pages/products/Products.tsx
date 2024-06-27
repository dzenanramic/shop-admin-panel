import { useState } from "react";
import {
  Table,
  TableBody,
  Container,
  Card,
  TableContainer,
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import TableEmptyRows from "../../table/TableEmptyRows";
import TableHeadCustom from "../../table/TableHeadCustom";
import TablePaginationCustom from "../../table/TablePaginationCustom";
import { useTable, emptyRows, TableNoData } from "../../table";
import ProductsTableRow from "./table/ProductsTableRow";
import ProductModal from "./modal/ProductModal";
import NewProductModal from "./modal/NewProductModal";
import { RootState } from "../../redux/store";
import {
  setBikeModel,
  selectBikes,
} from "../../redux/slices/productSlice/productsSlice";

type Row = {
  id: string;
  model: string;
  category: string;
  engine: string;
  horsepower: string;
  torque: string;
  image: string;
  availability: number;
};

function Products() {
  const allProducts = useSelector(selectBikes);
  const [showProductDetailsModal, setShowProductDetailsModal] = useState(false);
  const [showNewProductModal, setShowNewProductModal] = useState(false);
  const [toogleDelete, setToogleDelete] = useState(false);
  const dispatch = useDispatch();
  const bikeModel = useSelector((state: RootState) => state.products.bikeModel);

  const handleShowModal = (row: Row) => {
    setShowProductDetailsModal(true);
    dispatch(setBikeModel({ ...row }));
  };

  const handleToogleDelete = () => {
    setToogleDelete(!toogleDelete);
  };

  const handleAddNewProduct = () => {
    setShowNewProductModal(true);
  };

  const handleClose = () => {
    setShowProductDetailsModal(false);
  };

  const handleCloseModal = () => {
    setShowNewProductModal(false);
  };

  const {
    page,
    rowsPerPage,
    dense,
    order,
    orderBy,
    selected,
    onSelectRow,
    onSelectAllRows,
    onSort,
    onChangeDense,
    onChangeRowsPerPage,
    onChangePage,
  } = useTable({
    defaultOrderBy: "createdAt",
  });

  const denseHeight = dense ? 60 : 80;

  const TABLE_HEAD = [
    { id: "model", label: "Model", align: "left" },
    { id: "category", label: "Category", align: "left" },
    { id: "horsepower", label: "Horsepower", align: "left" },
    { id: "engine", label: "Engine", align: "left" },
    { id: "torque", label: "Torque", align: "left" },
    { id: "availability", label: "Availability", align: "left" },
  ];

  const filteredBikes = allProducts.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Container>
      <Card>
        <TableContainer sx={{ position: "relative", overflow: "unset" }}>
          <Button onClick={handleAddNewProduct}>Add new product</Button>
          <Table size={dense ? "small" : "medium"}>
            <TableHeadCustom
              order={order}
              orderBy={orderBy}
              headLabel={TABLE_HEAD}
              rowCount={allProducts.length}
              numSelected={selected.length}
              onSort={onSort}
              onSelectAllRows={(checked) =>
                onSelectAllRows(
                  checked,
                  allProducts.map((row) => row.id)
                )
              }
            />
            <TableBody>
              {filteredBikes.map((row) => (
                <ProductsTableRow
                  key={row.id}
                  row={row}
                  selected={selected.includes(row.id)}
                  onSelectRow={() => onSelectRow(row.id)}
                  onShowDetails={() => console.log("Shown")}
                  onBackgroundClick={handleShowModal}
                />
              ))}

              <TableEmptyRows
                height={denseHeight}
                emptyRows={emptyRows(page, rowsPerPage, allProducts.length)}
              />

              <TableNoData isNotFound={filteredBikes.length === 0} />
            </TableBody>
          </Table>
        </TableContainer>
        <TablePaginationCustom
          count={allProducts.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={onChangePage}
          onRowsPerPageChange={onChangeRowsPerPage}
          dense={dense}
          onChangeDense={onChangeDense}
        />
      </Card>
      <ProductModal
        open={showProductDetailsModal}
        handleClose={handleClose}
        client={bikeModel}
        toogleDelete={toogleDelete}
        handleToogleDelete={handleToogleDelete}
        onEditComplete={handleClose}
      />
      <NewProductModal
        open={showNewProductModal}
        handleClose={handleCloseModal}
      />
    </Container>
  );
}

export default Products;
