// src/components/Table.tsx
import React from 'react';
import { ReactNode } from 'react';

interface TableProps {
  headers: string[];
  data: Record<string, ReactNode>[];
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-[#356646] rounded-t-lg">
        <tr>
          {headers.map((header, index) => (
            <th key={index} scope="col" className="px-6 py-3 text-left text-base font-semibold font-roboto text-white uppercase tracking-wider">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, colIndex) => (
              <td key={colIndex} className="px-6 py-4 whitespace-nowrap">
                {row[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
