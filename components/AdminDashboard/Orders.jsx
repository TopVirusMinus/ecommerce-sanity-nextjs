import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";

const Orders = () => {
  const VISIBLE_FIELDS = [
    "name",
    "rating",
    "country",
    "dateCreated",
    "isAdmin",
  ];
  const { data } = useDemoData({
    dataSet: "Employee",
    visibleFields: VISIBLE_FIELDS,
    rowLength: 200,
  });

  console.log(data);
  return (
    <div style={{ height: "90vh", width: "100%" }}>
      <DataGrid {...data} components={{ Toolbar: GridToolbar }} />
    </div>
  );
};

export default Orders;
