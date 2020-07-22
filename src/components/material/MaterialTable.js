import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TablePagination from "@material-ui/core/TablePagination";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const MaterialTable = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: props.data[0].tableHeaderBackgroundColor,
    },
    body: {
      backgroundColor: props.data[0].tableBodyBackgroundColor,
    },
  }))(TableCell);

  const StyledTablePagination = styled(TablePagination)((theme) => ({
    backgroundColor: props.data[0].tableFooterBackgroundColor,
  }));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer style={{ maxHeight: props.height }}>
        <Table stickyHeader size="small" style={{ backgroudColor: "red" }}>
          <TableHead>
            <TableRow>
              {props.data[0].columns.map((elem, index) => {
                return (
                  <StyledTableCell
                    key={index}
                    align={elem.align ? elem.align : "left"}
                  >
                    <b>{elem.name}</b>
                  </StyledTableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data[0].values
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((arr, index) => {
                return (
                  <TableRow key={index}>
                    {arr.map((elem, index) => (
                      <StyledTableCell
                        key={index}
                        align={elem.align ? elem.align : "left"}
                      >
                        {elem.value}
                      </StyledTableCell>
                    ))}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <StyledTablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={props.data[0].values.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default MaterialTable;
