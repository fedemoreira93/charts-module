import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const MaterialTable = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            {props.data[0].columns.map((elem, index) => {
              return (
                <TableCell key={index} align={elem.align ? elem.align : "left"}>
                  <b>{elem.name}</b>
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data[0].values.map((arr, index) => {
            return (
              <TableRow key={index}>
                {arr.map((elem, index) => (
                  <TableCell
                    key={index}
                    align={elem.align ? elem.align : "left"}
                  >
                    {elem.value}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MaterialTable;
