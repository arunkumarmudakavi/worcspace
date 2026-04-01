"use client";

import Button from "./ui/Button";
import Label from "./ui/Label";
import Select from "./ui/Select";

type Props = {
  total: number;
  currentPage: number;
  setCurrentPage: (p: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (n: number) => void;
};

const Pagination = ({
  total,
  currentPage,
  setCurrentPage,
  rowsPerPage,
  setRowsPerPage,
}: Props) => {
  const totalPages = Math.ceil(total / rowsPerPage);

  return (
    <div className="flex items-center justify-between w-[80vw] p-2 text-sm bottom-0 fixed bg-white">
      {/* Left */}
      <Label
        name={`${total.toString()} rows`}
        className="text-sm text-gray-800 font-bold"
      />

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Rows per page */}
        <div className="flex items-center gap-2">
          <Label
            name="Rows per page"
            className="text-sm text-gray-800 font-bold"
          />

          <Select
            options={[3, 6, 9]}
            className="border px-2 py-1 rounded cursor-pointer"
            value={rowsPerPage}
            onChange={(value) => {
              setRowsPerPage(Number(value));
              setCurrentPage(1);
            }}
          />
        </div>

        {/* Page info */}
        <Label
          name={`Page ${currentPage} of ${totalPages}`}
          className="text-sm text-gray-800 font-bold"
        />

        {/* Controls */}
        <div className="flex gap-1">
          <Button
            value="<<"
            className="px-2 border rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
          />

          <Button
            value="<"
            className="px-2 border rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          />

          <Button
            value=">"
            className="px-2 border rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          />

          <Button
            value=">>"
            className="px-2 border rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
