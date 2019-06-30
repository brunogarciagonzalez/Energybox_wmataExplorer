import React from "react";
import TableRow from "./TableRow";
import { Table } from "semantic-ui-react";

const TableContainer = props => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Train ID</Table.HeaderCell>
          <Table.HeaderCell>Train No.</Table.HeaderCell>
          <Table.HeaderCell>Line Code</Table.HeaderCell>
          <Table.HeaderCell>Service Type</Table.HeaderCell>
          <Table.HeaderCell>Car Count</Table.HeaderCell>
          <Table.HeaderCell>Circuit ID</Table.HeaderCell>
          <Table.HeaderCell>Seconds At Location</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {props.trains.map((trainObj, index) => (
          <TableRow key={trainObj.TrainId} trainObj={trainObj} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default TableContainer;
// <div>
//   <table>
//     <thead>
//       <tr>
//         <th>Train ID</th>
//         <th>Train No.</th>
//         <th>Line Code</th>
//         <th>Service Type</th>
//         <th>Car Count</th>
//         <th>Circuit ID</th>
//         <th>Desitnation Station Code</th>
//         <th>Direction No.</th>
//         <th>Seconds At Location</th>
//       </tr>
//     </thead>
//     <tbody>
//       {props.trainData.map(trainObj => <TableRow trainObj={trainObj} />)}
//     </tbody>
//   </table>
// </div>
