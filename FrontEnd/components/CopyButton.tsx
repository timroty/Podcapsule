"use client";

const handleCopy = (copyValue: string) => {
  navigator.clipboard.writeText(copyValue);
};

export default function CopyButton({ copyValue }: { copyValue: string }) {
  return (
    <button
      className="px-4 py-2 bg-[#01357b] text-white rounded hover:bg-white hover:text-[#01357b] border border-[#01357b] transition-colors duration-300"
      onClick={() => handleCopy(copyValue)}
    >
      Copy
    </button>
  );
}
