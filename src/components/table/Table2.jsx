import axios from "axios";
import moment from "moment";
import { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
// import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
 
// const { SearchBar } = Search;


// const { ExportCSVButton } = CSVExport;

function App() 

{
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

  const columns = [
    {
      dataField: "name",
      text: "Name",
      // sort: true,
      filter: textFilter(),
      // formatter: emailFormatter,
      editable: false,
    },
    {
      dataField: "rank",
      text: "Rank",
      filter: textFilter(),
      editable: false,
      // sort: true,
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
      // sort: true,
      editable: false,
    },
    {
      dataField: "adharno",
      text: "Aadhar Card ",
      // sort: true,
      editable: false,
    },
    {
      dataField: "snumber",
      text: "Snumber",
      // sort: true,
      editable: false,
    },
    {
      dataField: "blacklist",
      text: "Blacklist",
      // sort: true,
      editable: false,
    }, {
      dataField: "place",
      text: "Place",
      // sort: true,
      editable: false,
    }, {
      dataField: "supervisor",
      text: "Supervisor",
      // sort: true,
      editable: false,
    },
    {
      dataField: "timein",
      text: "Time In",
      sort: true,
      editable: false,
    }, {
      dataField: "datein",
      text: "Date In",
      sort: true,
      editable: false,
      // dataFormat:{dateFormatter}
    },
    {
      dataField: "timeout",
      text: "Time Out",
      sort: true,
      editable: false,
    },
    {
      dataField: "dateout",
      text: "Date Out",
      sort: true,
      editable: false,
      // dataFormat:{dateFormatter}
   
    },
  ];
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
        // rowClasses={ rowClasses } 

        
        // expandRow={ expandRow }

      />
       
    </div>
  );
}

export default App;
