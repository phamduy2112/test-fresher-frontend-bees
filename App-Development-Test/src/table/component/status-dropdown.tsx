import { useState, useRef, useEffect } from "react";

interface StatusDropdownProps {
  statusFilter: boolean[];
  onStatusChange: (status: boolean) => void;
}

const StatusDropdown: React.FC<StatusDropdownProps> = ({ statusFilter, onStatusChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsLoading(true);
    setIsDropdownOpen(!isDropdownOpen);
    setTimeout(() => setIsLoading(false), 1000); // Giả lập tải dữ liệu
  };

  // Đóng dropdown khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        className="w-full text-center flex items-center justify-center gap-[.2rem]"
        onClick={toggleDropdown}
      >
        Status
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM9 17C9 16.4477 9.44772 16 10 16H14C14.5523 16 15 16.4477 15 17C15 17.5523 14.5523 18 14 18H10C9.44772 18 9 17.5523 9 17Z"
            fill="#000000"
          ></path>
        </svg>
      </button>

      {isDropdownOpen && (
        <div ref={dropdownRef} className="absolute bg-white border border-white shadow-md p-2 mt-1 w-32">
          {isLoading ? (
            <div className="flex justify-center p-2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-500"></div>
            </div>
          ) : (
            <>
              <label className="flex items-center font-normal">
                <input
                  type="checkbox"
                  checked={statusFilter.includes(true)}
                  onChange={() => onStatusChange(true)}
                  className="mr-2 text-[.8rem]"
                />
                Active
              </label>
              <label className="flex items-center mt-1 font-normal">
                <input
                  type="checkbox"
                  checked={statusFilter.includes(false)}
                  onChange={() => onStatusChange(false)}
                  className="mr-2 text-[.8rem]"
                />
                Inactive
              </label>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default StatusDropdown;
