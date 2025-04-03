import React, { useEffect, useState, useRef } from "react";
import TableItem from "./component/table-item";
import { TUser } from "./type/table.user.type";
import { fetchFakeData } from "./service/user.service";
import Spinner from "./component/spinner";
import MySelect from "./component/option-select";
import Pagination from "./component/render-page-table";
import useFetchData from "./hooks/useFetchUser.hooks";
import StatusDropdown from "./component/status-dropdown";

function RenderTable() {
  // Hook call api
  const { users, loading, setUsers } = useFetchData();

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPage] = useState(10);
  // Checkbox status active
  const [statusFilter, setStatusFilter] = useState<boolean[]>([true, false]); 
  // sort Data balance
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [isSorted, setIsSorted] = useState(false); 

  const handleRowsPage = (item: number) => {
    setRowsPage(item);
  };
  // Handle toggle checkbox filter
  const handleStatusChange = (status: boolean) => {
    setStatusFilter(prev =>
      prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]
    );
  };

  const filteredUsers = users.filter(user => statusFilter.includes(user.active));

  //  Pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredUsers.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);

  const handleSortBalance = () => {
    const sortedUsers = [...users].sort((a, b) => {
      return sortOrder === "asc" ? a.balance - b.balance : b.balance - a.balance;
    });

    setUsers(sortedUsers);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setIsSorted(true); 
  };
  return (
    <div className="w-[80rem] m-auto">
      {loading ? (
        <Spinner />
      ) : filteredUsers.length > 0 ? (
        <div>
          <h1 className="text-center my-[2rem] font-bold text-[1.5rem]">Table of users</h1>

          <table className="w-[100%] border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">
                  <div className="flex items-center justify-center cursor-pointer"
                    onClick={handleSortBalance}
                  >
                    Balance {isSorted && (sortOrder === "asc" ?
                      <svg viewBox="0 0 24 24"
                        width={20} height={20}
                        fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path d="M12 18L12 6M12 6L7 11M12 6L17 11" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> :
                      <svg
                        width={20} height={20}
                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path d="M12 6L12 18M12 18L17 13M12 18L7 13" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    )}
                  </div>
                </th>
                <th className="border border-gray-300 p-2">Email</th>
                <th className="border border-gray-300 p-2">Registration Date</th>

                {/* Cột Status có dropdown */}
                <th className="border border-gray-300 p-2 relative">
                  <StatusDropdown statusFilter={statusFilter} onStatusChange={handleStatusChange} />
                </th>

                <th className="border border-gray-300 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((user, index) => (
                <TableItem key={index} index={index} user={user} />
              ))}
            </tbody>
          </table>

          <div className="flex items-center mt-4 gap-[1.5rem] justify-end">
            <MySelect handleRowsPage={handleRowsPage} />
            <div>
              <span className="font-[500]">{currentPage}</span> to{" "}
              <span className="font-[500]">{rowsPerPage}</span> of{" "}
              <span className="font-[500]">{filteredUsers.length}</span>
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      ) : (
        <div>Lỗi khi chạy dữ liệu hoặc không có kết quả phù hợp</div>
      )}
    </div>
  );
}

export default RenderTable;
