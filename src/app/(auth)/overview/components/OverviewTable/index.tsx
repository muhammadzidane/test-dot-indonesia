import React from "react";

import { Table } from "@/components";

/**
 * OverviewTable Component
 */
const OverviewTable: React.FC<OverviewTableProps> = ({ data }) => {
  const columns = [{ accessor: "title", header: "Title" }];

  return (
    <>
      <div className="mb-4 font-semibold text-lg">Overview</div>
      <Table columns={columns} data={data} />
    </>
  );
};

export default OverviewTable;
