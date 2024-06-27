import {
  Table,
  TableBody,
  Container,
  Card,
  TableContainer,
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCategories,
  selectDeleteCategory,
  toggleDeleteCategory,
} from "../../redux/slices/categoriesSlice/categoriesSlice";
import TableEmptyRows from "../../table/TableEmptyRows";
import TableHeadCustom from "../../table/TableHeadCustom";
import TablePaginationCustom from "../../table/TablePaginationCustom";
import { useTable, emptyRows, TableNoData } from "../../table";
import ProductsTableRow from "./table/CategoriesTableRow";
import AddNewCategoryModal from "./modal/AddNewCategoryModal";
import DeleteCategoryModal from "./modal/DeleteCategoryModal";
import { useState } from "react";

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  
  const [showNewProductModal, setShowNewProductModal] = useState(false);
  const deleteCategory = useSelector(selectDeleteCategory);


  const handleToogle = () => {
    dispatch(toggleDeleteCategory());
  };
  const handleAddNewProduct = () => {
    setShowNewProductModal(true);
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
    defaultOrderBy: "createdAt",
  });

  const denseHeight = dense ? 60 : 80;

  const TABLE_HEAD = [
    {
      id: "categories",
      label: "Kategorije",
      align: "left",
    },
  ];

  const filteredBikes = categories.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Container>
      <Card>
        <TableContainer sx={{ position: "relative", overflow: "unset" }}>
          <Button onClick={handleAddNewProduct}>Add new category</Button>
          <Table size={dense ? "small" : "medium"}>
            <TableHeadCustom
              order={order}
              orderBy={orderBy}
              headLabel={TABLE_HEAD}
              rowCount={categories.length}
              numSelected={selected.length}
              onSort={onSort}
              onSelectAllRows={(checked) =>
                onSelectAllRows(
                  checked,
                  categories.map((row: { name: string }) => row.name)
                )
              }
            />

            <TableBody>
              {filteredBikes.map(
                (row: { name: string; description: string }) => (
                  <ProductsTableRow
                    key={row.name}
                    row={row}
                    selected={selected.includes(row.name)}
                    onSelectRow={() => onSelectRow(row.name)}
                    onShowDetails={() => console.log("Shown")}
                    onBackgroundClick={() => console.log("Shown")}
                  />
                )
              )}

              <TableEmptyRows
                height={denseHeight}
                emptyRows={emptyRows(page, rowsPerPage, categories.length)}
              />

              <TableNoData isNotFound={filteredBikes.length === 0} />
            </TableBody>
          </Table>
        </TableContainer>
        <TablePaginationCustom
          count={categories.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={onChangePage}
          onRowsPerPageChange={onChangeRowsPerPage}
          //
          dense={dense}
          onChangeDense={onChangeDense}
        />
      </Card>
      <AddNewCategoryModal
        open={showNewProductModal}
        handleClose={handleCloseModal}
      />
      <DeleteCategoryModal
        open={deleteCategory}
        onClose={handleToogle}
        handleDelete={handleToogle}
      />
    </Container>
  );
}

export default Categories;
