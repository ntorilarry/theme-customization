// // src/components/ThemeDrawer.tsx
// import React, { Fragment, useState } from "react";
// import {
//   Dialog,
//   DialogTitle,
//   Transition,
//   TransitionChild,
//   DialogBackdrop,
// } from "@headlessui/react";
// import { GiCogLock } from "react-icons/gi";
// import { useTheme } from "../utils/ThemeContext";

// const colors = ["blue", "red", "green", "yellow", "purple"]; // Add more colors as needed

// const getColor = (color: string): string => {
//   const colorMap: { [key: string]: string } = {
//     blue: "#3b82f6",
//     red: "#ef4444",
//     green: "#10b981",
//     yellow: "#f59e0b",
//     purple: "#7062F9",
//     // Add more colors as needed
//   };
//   return colorMap[color] || "#3b82f6";
// };

// const ThemeDrawer: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { theme, setTheme, color, setColor } = useTheme();

//   return (
//     <>
//       <button
//         className="fixed bottom-5 right-5 bg-primary text-white p-3 rounded-full shadow-lg"
//         onClick={() => setIsOpen(true)}
//       >
//         <GiCogLock className="h-6 w-6" />
//       </button>

//       <Transition.Root show={isOpen} as={Fragment}>
//         <Dialog
//           as="div"
//           className="fixed inset-0 overflow-hidden z-50"
//           onClose={setIsOpen}
//         >
//           <div className="absolute inset-0 overflow-hidden">
//             <TransitionChild
//               as={Fragment}
//               enter="ease-in-out duration-500"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="ease-in-out duration-500"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <DialogBackdrop className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//             </TransitionChild>

//             <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
//               <TransitionChild
//                 as={Fragment}
//                 enter="transform transition ease-in-out duration-500 sm:duration-700"
//                 enterFrom="translate-x-full"
//                 enterTo="translate-x-0"
//                 leave="transform transition ease-in-out duration-500 sm:duration-700"
//                 leaveFrom="translate-x-0"
//                 leaveTo="translate-x-full"
//               >
//                 <div className="w-screen max-w-[20rem]">
//                   <div className="h-full flex flex-col bg-white dark:bg-gray-800 shadow-xl overflow-y-scroll">
//                     <div className="px-4 py-6 sm:px-6">
//                       <div className="flex items-center justify-between">
//                         <DialogTitle className="text-lg font-medium text-gray-900 dark:text-white">
//                           Theme Settings
//                         </DialogTitle>
//                         <button
//                           className="text-gray-400 hover:text-gray-500"
//                           onClick={() => setIsOpen(false)}
//                         >
//                           <span className="sr-only">Close panel</span>
//                           {/* X Icon */}
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-6 w-6"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M6 18L18 6M6 6l12 12"
//                             />
//                           </svg>
//                         </button>
//                       </div>
//                     </div>

//                     <div className="relative flex-1 px-4 sm:px-6">
//                       {/* Content */}
//                       <div className="space-y-6">
//                         {/* Light Mode Section */}
//                         <div>
//                           <h2 className="text-md font-semibold text-gray-700 dark:text-gray-300">
//                             Light Mode
//                           </h2>
//                           <div className="mt-2 flex space-x-4">
//                             {colors.map((col) => (
//                               <button
//                                 key={col}
//                                 className="w-8 h-8 rounded-full focus:outline-none border-2 border-transparent hover:border-gray-300"
//                                 style={{ backgroundColor: getColor(col) }}
//                                 onClick={() => {
//                                   setTheme("light");
//                                   setColor(col);
//                                 }}
//                               />
//                             ))}
//                           </div>
//                         </div>

//                         {/* Dark Mode Section */}
//                         <div>
//                           <h2 className="text-md font-semibold text-gray-700 dark:text-gray-300">
//                             Dark Mode
//                           </h2>
//                           <div className="mt-2 flex space-x-4">
//                             {colors.map((col) => (
//                               <button
//                                 key={col}
//                                 className="w-8 h-8 rounded-full focus:outline-none border-2 border-transparent hover:border-gray-300"
//                                 style={{ backgroundColor: getColor(col) }}
//                                 onClick={() => {
//                                   setTheme("dark");
//                                   setColor(col);
//                                 }}
//                               />
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </TransitionChild>
//             </div>
//           </div>
//         </Dialog>
//       </Transition.Root>
//     </>
//   );
// };

// export default ThemeDrawer;
// src/components/ThemeDrawer.tsx
import React, { Fragment, useState } from "react";
import {
  Dialog,
  DialogTitle,
  Transition,
  TransitionChild,
  DialogBackdrop,
} from "@headlessui/react";
import { GiCogLock } from "react-icons/gi";
import { useTheme } from "../utils/ThemeContext";

const colors = ["blue", "red", "green", "yellow", "purple", "pink", "indigo"]; // Add more colors as needed

const getColor = (color: string): string => {
  const colorMap: { [key: string]: string } = {
    blue: "#3b82f6",
    red: "#ef4444",
    green: "#10b981",
    yellow: "#f59e0b",
    purple: "#8b5cf6",
    pink: "#ec4899",
    indigo: "#6366f1",
    // Add more colors as needed
  };
  return colorMap[color] || "#3b82f6";
};

const ThemeDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    theme,
    setTheme,
    primaryColor,
    setPrimaryColor,
    secondaryColor,
    setSecondaryColor,
  } = useTheme();

  return (
    <>
      <button
        className="fixed bottom-5 right-5 bg-primary text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsOpen(true)}
        aria-label="Open theme settings"
      >
        <GiCogLock className="h-6 w-6" />
      </button>

      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden z-50"
          onClose={() => setIsOpen(false)}
        >
          <div className="absolute inset-0 overflow-hidden">
            <TransitionChild
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <DialogBackdrop className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <TransitionChild
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen max-w-[20rem]">
                  <div className="h-full flex flex-col bg-white dark:bg-gray-800 shadow-xl overflow-y-scroll">
                    <div className="px-4 py-6 sm:px-6">
                      <div className="flex items-center justify-between">
                        <DialogTitle className="text-lg font-medium text-gray-900 dark:text-white">
                          Theme Settings
                        </DialogTitle>
                        <button
                          className="text-gray-400 hover:text-gray-500"
                          onClick={() => setIsOpen(false)}
                          aria-label="Close theme settings"
                        >
                          <span className="sr-only">Close panel</span>
                          {/* X Icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="relative flex-1 px-4 sm:px-6">
                      {/* Content */}
                      <div className="space-y-6">
                        {/* Light Mode Section */}
                        <div>
                          <h2 className="text-md font-semibold text-gray-700 dark:text-gray-300">
                            Primary Color
                          </h2>
                          <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Light Mode
                          </h2>
                          <div className="mt-2 flex gap-2 flex-wrap">
                            {colors.map((col) => (
                              <button
                                key={`light-${col}`}
                                className={`w-8 h-8 rounded-full focus:outline-none border-2 ${
                                  primaryColor === col
                                    ? "border-gray-900"
                                    : "border-transparent"
                                } hover:border-gray-300`}
                                style={{ backgroundColor: getColor(col) }}
                                onClick={() => {
                                  setTheme("light");
                                  setPrimaryColor(col);
                                }}
                                aria-label={`Set primary color to ${col} in light mode`}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Dark Mode Section */}
                        <div>
                          <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Dark Mode
                          </h2>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {colors.map((col) => (
                              <button
                                key={`dark-${col}`}
                                className={`w-8 h-8 rounded-full focus:outline-none border-2 ${
                                  primaryColor === col
                                    ? "border-gray-900"
                                    : "border-transparent"
                                } hover:border-gray-300`}
                                style={{ backgroundColor: getColor(col) }}
                                onClick={() => {
                                  setTheme("dark");
                                  setPrimaryColor(col);
                                }}
                                aria-label={`Set primary color to ${col} in dark mode`}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Secondary Color Selection (Optional) */}
                        <div>
                          <h2 className="text-md font-semibold text-gray-700 dark:text-gray-300">
                            Secondary Color
                          </h2>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {colors.map((col) => (
                              <button
                                key={`secondary-${col}`}
                                className={`w-8 h-8 rounded-full focus:outline-none border-2 ${
                                  secondaryColor === col
                                    ? "border-gray-900"
                                    : "border-transparent"
                                } hover:border-gray-300`}
                                style={{ backgroundColor: getColor(col) }}
                                onClick={() => {
                                  setSecondaryColor(col);
                                }}
                                aria-label={`Set secondary color to ${col}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ThemeDrawer;
