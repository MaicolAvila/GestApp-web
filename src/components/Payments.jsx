import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listPayments } from "../actions/payActions";
import DataTable from "react-data-table-component";

function Payments(props) {
  const dispatch = useDispatch();
  const payList = useSelector((state) => state.payList);
  const { loading, error, payments } = payList;

  useEffect(() => {
    dispatch(listPayments());
  }, [dispatch]);

  const operation = () => {
    <div>
      <button>eliminar</button>
    </div>;
  };

  const columnas = [
    { name: "Caso", selector: "number_case", sortable: true },
    { name: "Pago", selector: "pay", sortable: true },
  ];

  return (
    <div>
      <DataTable
        columns={columnas}
        data={payments}
        title="Inmobiliaria Bogota"
        pagination
        fixedHeader
        responsive
      />
    </div>
  );
}

export default Payments;
