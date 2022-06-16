import axios from "axios";
import { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios("http://localhost:2500/users/").then((res) => {
      console.log(res.data);
      setData(res.data);
      res.data.forEach((element,index) =>element.__id2=index);
    });
  };
  const emailFormatter = (data, row) => {
    return <span>Email = {data}</span>;
  };
  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    selected: [1, 3],
    clickToEdit: true,
  };
  const columns = [
    {
      dataField: "name",
      text: "Name",
      sort: true,
      filter: textFilter(),
      // formatter: emailFormatter,
    },
    {
      dataField: "rank",
      text: "rank",
      filter: textFilter(),

      sort: true,
      validator: (newValue, row, column) => {
        if (isNaN(newValue)) {
          return {
            valid: false,
            message: "Please enter numeric value",
          };
        }
        return true;
      },
    },
    {
      dataField: "number",
      text: "Number",
      sort: true,
      editable: false,
    },
    {
      dataField: "datein",
      text: "Datein",
      // editor: {
      //   type: Type.SELECT,
      //   options: [
      //     {
      //       value: "A",
      //       label: "A",
      //     },
      //     {
      //       value: "B",
      //       label: "B",
      //     },
      //   ],
      // },
    },
  ];

  const expandRow = {
    onlyOneExpanding: true,
    renderer: row => (
      <div>
        <p> {`This Expand row is belong to rowKey ${row.id2}`}</p>
        <p>You can render anything here, also you can add additional data on every row object</p>
        <p>expandRow.renderer callback will pass the origin row object to you</p>
      </div>
    )
  };

  return (
    <div className="App">
      <BootstrapTable
        keyField="id2"
        data={data}
        columns={columns}
        striped
        hover
        condensed
        pagination={paginationFactory()}
        cellEdit={cellEditFactory({
          mode: "dbclick",
          blurToSave: true,
          nonEditableRows: () => [1, 2, 3],
        })}
        // selectRow={selectRow}
        filter={filterFactory()}
        expandRow={ expandRow }

      />
    </div>
  );
}

export default App;
