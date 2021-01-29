import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import { render } from "react-dom";

import { useDispatch, useSelector } from "react-redux";
import { listCases } from "../actions/caseActions";

function Table() {
  const dispatch = useDispatch();
  const caseList = useSelector((state) => state.caseList);
  const { loading, error, cases } = caseList;

  useEffect(() => {
    dispatch(listCases());
  }, [dispatch]);

  const columnas = [
    { name: "Caso", selector: "number_case", sortable: true },
    { name: "Nombre", selector: "name", sortable: true },
    { name: "Direccion", selector: "adress", sortable: true },
  ];

  return (
    <div className="table-responsive">
      <DataTable
        columns={columnas}
        data={cases}
        title="Inmobiliaria Bogota"
        pagination
        fixedHeader
        responsive
      />
    </div>
  );
}

export default Table;
