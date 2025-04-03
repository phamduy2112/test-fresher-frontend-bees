import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

 

  return (
    <div className="flex items-center">
        <button 
      className="   disabled:opacity-50 cursor-pointer
"
      onClick={() => onPageChange(1)}

      disabled={currentPage === 1}
    >
      <svg 
         width={10}
         height={10}
      fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill-rule="evenodd"> <path d="M1052 92.168 959.701 0-.234 959.935 959.701 1920l92.299-92.43-867.636-867.635L1052 92.168Z"></path> <path d="M1920 92.168 1827.7 0 867.766 959.935 1827.7 1920l92.3-92.43-867.64-867.635L1920 92.168Z"></path> </g> </g></svg>
    </button>
    <button 
      className=" disabled:opacity-50 cursor-pointer
"
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      <svg viewBox="0 0 24 24"
      width={20}
      height={20}
      className="bold"
       fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 7L10 12L15 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </button>

    <span className="text-gray-700 ">
      Page <span className="font-[500]"> {currentPage} </span>  of <span className="font-[500]">{totalPages}</span>
    </span>

    
    <button 
      className="   disabled:opacity-50 cursor-pointer
"
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      <svg viewBox="0 0 24 24"
            className="bold "

      width={20}
      height={20}
      fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path d="M9.5 7L14.5 12L9.5 17" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </button>
    <button 
      className="   disabled:opacity-50 cursor-pointer
"
      onClick={() => onPageChange(totalPages)}
      disabled={currentPage === totalPages}
    >
    <svg 
      width={10}
      height={10}
    fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill-rule="evenodd"> <path d="M0 92.168 92.299 0l959.931 959.935L92.299 1920 0 1827.57l867.636-867.635L0 92.168Z"></path> <path d="M868 92.168 960.299 0l959.931 959.935L960.299 1920 868 1827.57l867.64-867.635L868 92.168Z"></path> </g> </g></svg>

    </button>
  </div>
  );
};

export default Pagination;
