"use client";
import React from "react";

export interface Column<T> {
  key: string;
  label: string;
  align?: "left" | "right" | "center";
  render?: (row: T) => React.ReactNode;
}

interface DynamicTableProps<T> {
  columns: Column<T>[];
  data: T[] | null;
  rowKey: (row: T) => string;
  emptyMessage?: string;
}

export function DynamicTable<T>({
  columns,
  data,
  rowKey,
  emptyMessage = "No hay registros",
}: DynamicTableProps<T>) {
  const safeData = Array.isArray(data) ? data : [];
  const isLoading = data === null;

  return (
    <div className="overflow-x-auto rounded-md border border-gray-200 bg-white">
      {/* 🔄 LOADING */}
      {data === null && (
        <div className="flex items-center justify-center py-12">
          <div className="flex flex-col items-center gap-3 text-gray-500">
            <span className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600" />
            <span className="text-sm">Cargando...</span>
          </div>
        </div>
      )}

      {/* 📭 EMPTY */}
      {!isLoading && safeData.length === 0 && (
        <div className="text-center py-10 text-gray-500 text-sm">
          {emptyMessage}
        </div>
      )}

      {/* 📊 TABLE */}
      {!isLoading && safeData.length > 0 && (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 text-${
                    col.align || "left"
                  }`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {safeData.map((row, index) => {
              const key = rowKey(row) ?? `row-${index}`;

              return (
                <tr key={key} className="hover:bg-gray-50 transition-colors">
                  {columns.map((col) => (
                    <td
                      key={`${key}-${col.key}`}
                      className={`px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-${
                        col.align || "left"
                      }`}
                    >
                      {col.render ? col.render(row) : (row as any)[col.key]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
