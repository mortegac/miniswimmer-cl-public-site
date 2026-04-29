"use client";

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="inline-flex items-center gap-2 rounded-full border border-stroke bg-white px-8 py-3 font-inter font-semibold text-dark shadow-1 transition-colors hover:border-primary hover:text-primary dark:border-stroke-dark dark:bg-gray-dark dark:text-white dark:hover:border-primary dark:hover:text-primary"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.354 2.646a.5.5 0 0 1 0 .708L3.707 7H13.5a.5.5 0 0 1 0 1H3.707l3.647 3.646a.5.5 0 0 1-.708.708l-4.5-4.5a.5.5 0 0 1 0-.708l4.5-4.5a.5.5 0 0 1 .708 0z"
        />
      </svg>
      Volver
    </button>
  );
}
