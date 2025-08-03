import React from "react";
import SupplierForm from "../components/SupplierForm";
import { createSupplier } from "../api/supplierApi";

const SupplierPage = () => {
  const handleAddSupplier = async (supplierData) => {
    try {
      await createSupplier(supplierData);
      alert("Supplier added successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to add supplier.");
    }
  };

  return (
    <div>
      <SupplierForm onSubmit={handleAddSupplier} />
    </div>
  );
};

export default SupplierPage;