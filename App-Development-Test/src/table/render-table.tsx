import { useState } from "react";
import TableItem from "./component/table-item";
import Spinner from "./component/spinner";
import MySelect from "./component/option-select";
import Pagination from "./component/render-page-table";
import useFetchData from "./hooks/useFetchUser.hooks";
import StatusDropdown from "./component/status-dropdown";
import useDragScroll from "./hooks/useDragScroll.hooks";

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

  const { tableRef, handleMouseDown, handleMouseMove, handleMouseUp, handleMouseLeave } = useDragScroll(); // Sử dụng hook

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

  // Pagination
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
    <div className="w-full max-w-[80rem] mx-auto px-4">
      {loading ? (
 <div className="flex items-center justify-center h-screen">
 <Spinner />
</div>
      
      ) : filteredUsers.length > 0 ? (
        <div>
          <h1 className="text-center my-[2rem] font-bold text-[1.5rem]">Table of users</h1>

          {/* Thêm sự kiện mouse để kéo bảng */}
          <div
            ref={tableRef}
            className="overflow-x-auto bg-white rounded-lg "
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <table className="w-full border-collapse border border-gray-200 min-w-[800px]">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Name</th>
                  <th className="border border-gray-300 p-2">
                    <div className="flex items-center justify-center cursor-pointer" onClick={handleSortBalance}>
                      Balance {isSorted && (sortOrder === "asc" ? (
                        <svg viewBox="0 0 24 24" width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 18L12 6M12 6L7 11M12 6L17 11" stroke="#000" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      ) : (
                        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 6L12 18M12 18L17 13M12 18L7 13" stroke="#000" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      ))}
                    </div>
                  </th>
                  <th className="border border-gray-300 p-2">Email</th>
                  <th className="border border-gray-300 p-2">Registration Date</th>
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
          </div>

          {/* Pagination phần dưới */}
          <div className="flex flex-col sm:flex-row items-center mt-4 gap-4 justify-end">
            <MySelect handleRowsPage={handleRowsPage} />
            <div className="text-sm">
              <span className="font-medium">{currentPage}</span> to{" "}
              <span className="font-medium">{rowsPerPage}</span> of{" "}
              <span className="font-medium">{filteredUsers.length}</span>
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </div>
        </div>
      ) : (
        <div>Lỗi khi chạy dữ liệu hoặc không có kết quả phù hợp</div>
      )}
    </div>
  );
}

export default RenderTable;
