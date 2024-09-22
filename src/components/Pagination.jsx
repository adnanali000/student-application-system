import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const renderPageNumbers = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i}>
          <button
            onClick={() => onPageChange(i)}
            className={`flex items-center justify-center px-3 h-8 leading-tight ${
              currentPage === i
                ? 'text-appRed bg-gradient-to-r from-red-50 via-gray-100 to-red-50'
                : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'
            } border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          >
            {i}
          </button>
        </li>
      );
    }

    return pages;
  };

  return (
    <div className='my-4 flex items-center justify-center'>
      <nav aria-label="Page navigation example">
        <ul className="flex items-center -space-x-px h-8 text-sm">
          <li>
            <button
              onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
              className={`flex items-center justify-center px-3 h-8 leading-tight ${
                currentPage === 1
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'
              } border border-e-0 border-gray-300 rounded-s-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
              disabled={currentPage === 1}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </button>
          </li>

          {renderPageNumbers()}

          <li>
            <button
              onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
              className={`flex items-center justify-center px-3 h-8 leading-tight ${
                currentPage === totalPages
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'
              } border border-gray-300 rounded-e-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
              disabled={currentPage === totalPages}
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
