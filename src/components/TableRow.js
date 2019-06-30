import React from "react";
import { Table } from "semantic-ui-react";
import LINES_KEY from "./../misc/LINES_KEY";

const TableRow = props => {
  const {
    TrainId,
    TrainNumber,
    LineCode,
    ServiceType,
    CarCount,
    CircuitId,
    SecondsAtLocation
  } = props.trainObj;

  return (
    <Table.Row>
      <Table.Cell>{TrainId}</Table.Cell>
      <Table.Cell>{TrainNumber}</Table.Cell>
      <Table.Cell
        style={{ backgroundColor: LineCode ? LINES_KEY[LineCode] : null }}
      >
        {LineCode ? LineCode : " N / A"}
      </Table.Cell>
      <Table.Cell>{ServiceType}</Table.Cell>
      <Table.Cell>{CarCount}</Table.Cell>
      <Table.Cell>{CircuitId}</Table.Cell>
      <Table.Cell>{SecondsAtLocation}</Table.Cell>
    </Table.Row>
  );
};

export default TableRow;
