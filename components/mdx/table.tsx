import React from "react";

interface TableProps {
  children: React.ReactNode;
}

interface TableHeadProps {
  children: React.ReactNode;
}

interface TableBodyProps {
  children: React.ReactNode;
}

interface TableRowProps {
  children: React.ReactNode;
}

interface TableHeaderProps {
  children: React.ReactNode;
}

interface TableCellProps {
  children: React.ReactNode;
}

export function Table({ children }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
        {children}
      </table>
    </div>
  );
}

export function TableHead({ children }: TableHeadProps) {
  return <thead className="bg-gray-50">{children}</thead>;
}

export function TableBody({ children }: TableBodyProps) {
  return <tbody className="bg-white">{children}</tbody>;
}

export function TableRow({ children }: TableRowProps) {
  return <tr className="border-b border-gray-200 last:border-b-0">{children}</tr>;
}

export function TableHeader({ children }: TableHeaderProps) {
  return (
    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-r border-gray-200 last:border-r-0">
      {children}
    </th>
  );
}

export function TableCell({ children }: TableCellProps) {
  return (
    <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200 last:border-r-0">
      {children}
    </td>
  );
} 