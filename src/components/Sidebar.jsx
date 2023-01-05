import React from "react";

const Sidebar = () => {
  return (
    <div>
      <aside className="w-100" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-green-700">
          <ul className="space-y-0 space-x-7 flex flex-row justify-center items-center">
            <li className="">
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal rounded-lg dark:text-black hover:text-white uppercase hover:bg-green-100 dark:hover:bg-green-600"
              >
                <svg
                  area-aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-green-500 transition duration-75 dark:text-green-400 group-hover:text-green-900 dark:group-hover:text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  strokeColor="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"></path>
                </svg>
                <span className="ml-3">printer</span>
              </a>
            </li>

            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white uppercase hover:bg-green-100 dark:hover:bg-green-600"
              >
                <svg
                  area-aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-green-500 transition duration-75 dark:text-green-400 group-hover:text-green-900 dark:group-hover:text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  strokeColor="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"></path>
                </svg>
                <span className="ml-3">scanning</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white uppercase hover:bg-green-100 dark:hover:bg-green-600"
              >
                <svg
                  area-aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-green-500 transition duration-75 dark:text-green-400 group-hover:text-green-900 dark:group-hover:text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  strokeColor="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"></path>
                </svg>
                <span className="ml-3">inspection</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white uppercase hover:bg-green-100 dark:hover:bg-green-600"
              >
                <svg
                  area-aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-green-500 transition duration-75 dark:text-green-400 group-hover:text-green-900 dark:group-hover:text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  strokeColor="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"></path>
                </svg>
                <span className="ml-3">rfid</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white uppercase hover:bg-green-100 dark:hover:bg-green-600"
              >
                <svg
                  area-aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-green-500 transition duration-75 dark:text-green-400 group-hover:text-green-900 dark:group-hover:text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  strokeColor="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"></path>
                </svg>
                <span className="ml-3">automation</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white uppercase hover:bg-green-100 dark:hover:bg-green-600"
              >
                <svg
                  area-aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-green-500 transition duration-75 dark:text-green-400 group-hover:text-green-900 dark:group-hover:text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  strokeColor="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"></path>
                </svg>
                <span className="ml-3">industrial tablet</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
