const getData = (_setLoadingMethod, _setDataMethod) => {
  setTimeout(function () {
    _setDataMethod({ appColumns, appData, appTitle, appOptions, appActions });
    _setLoadingMethod(false);
    console.log("No longer loading");
  }, 2000);
};

let appColumns = [
  { title: "First Name", field: "name" },
  { title: "Last Name", field: "surname" },
  { title: "Year Born", field: "birthYear", type: "numeric" },
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
];
let appTitle = "Student Table";

let appOptions = {
  exportButton: true,
};

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
