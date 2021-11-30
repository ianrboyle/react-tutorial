import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};
const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      // You'll notice I've added a key index to each table row. You should always use keys when making lists in React, as they help identify each list item. We'll also see how this is necessary in a moment when we want to manipulate list items.
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  const { characterData, removeCharacter } = props;

  return (
    <table>
      <TableHeader />
      <TableBody characterData={characterData} removeCharacter={removeCharacter} />
    </table>
  );
};

//the above const Table replaces the below class Table

// class Table extends Component {
//   render() {
//     const { characterData } = this.props;
//     return (
//       <table>
//         <TableHeader />
//         <TableBody characterData={characterData} />
//       </table>
//     );
//   }
// }

export default Table;
