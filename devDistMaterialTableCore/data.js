const getData = (_setLoadingMethod, _setDataMethod) => {
  setTimeout(function () {
    _setDataMethod({
      appColumns,
      appData,
      appTitle,
      appActions,
      appIcons,
      appComponents,
      appDetailPanel,
      appEditable,
      appParent,
      appSummary,
    });
    _setLoadingMethod(false);
    console.log("No longer loading");
  }, 2000);
};

/*
          columns={tableData.appColumns}
          data={tableData.appData}
          title={tableData.appTitle}
          options={tableData.appOptions}
          actions={tableData.appActions}
          icons={tableData.appIcons}
          components={tableData.appComponents}
          detailPanel={tableData.appDetailPanel}
          editable={tableData.appEditable}
          parentChildData={tableData.appParent}
          renderSummaryRow={tableData.appSummary}

*/

let appColumns = [
  { title: "First Name", field: "name" },
  { title: "Last Name", field: "surname" },
  { title: "Year Born", field: "birthYear" },
  {
    title: "City of Bith",
    field: "birthCity",
    lookup: { 34: "Tacoma", 63: "Seattle", 16: "Renton", 05: "Auburn" },
  },
];
let appData = [
  {
    name: "Sammy",
    surname: "Baran",
    birthYear: 1993,
    birthCity: 63,
  },
  {
    name: "Michael",
    surname: "Banthe",
    birthYear: 1987,
    birthCity: 34,
  },
  {
    name: "Lisa",
    surname: "Wetook",
    birthYear: 1958,
    birthCity: 16,
  },
  {
    name: "Michelle",
    surname: "Waterson",
    birthYear: 1947,
    birthCity: 05,
  },
  {
    name: "Michael",
    surname: "Banthe",
    birthYear: 1987,
    birthCity: 34,
  },
  {
    name: "Lisa",
    surname: "Wetook",
    birthYear: 1958,
    birthCity: 16,
  },
  {
    name: "Michelle",
    surname: "Waterson",
    birthYear: 1947,
    birthCity: 05,
  },
];
let appTitle = "Student Table";

let appActions = [
  {
    disabled: true, //make false to allow onClick
    hidden: true, //make false to reveal button
    icon: "refresh",
    tooltip: "Refresh Data",
    isFreeAction: true,
    onClick: () => {
      //tableRef.current && tableRef.current.onQueryChange();
      console.log("Clicked refresh");
    },
  },
];

let appIcons = null;

let appComponents = null;

let appDetailPanel = null;

let appEditable = null;

let appParent = null;

let appSummary = ({ column, data }) =>
  column.field === "birthYear"
    ? {
        value: data.reduce((agg, row) => agg + row.birthYear, 0),
        style: { background: "red" },
      }
    : undefined;

/*
let appSummary = ({ columns, data }) => {
  return columns.field === 'birthYear'
    ? {
        value: data.reduce((previous, current) => previous + current.birthYear),
        style: { background: 'red' }
      }
    : 'undefined';
};

let renderSummaryRow={({ column, data }) =>
        column.field === "birthYead"
          ? {
              value: data.reduce((agg, row) => agg + row.birthYear, 0),
              style: { background: "red" },
            }
          : undefined
      }

      */
