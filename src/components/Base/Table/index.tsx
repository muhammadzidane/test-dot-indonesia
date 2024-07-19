"use client";

import React from "react";

import { TableHeader, TableBody } from "./components";

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-1">
        <TableHeader columns={columns} />
        <TableBody columns={columns} data={data} />
      </table>
    </div>
  );
};

export default Table;
