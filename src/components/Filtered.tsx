import { useState } from "react";

export function Filtered() {
  const [active, setActive] = useState("All");
  const filtered = ["All", "Active", "Inactive"];

  return (
    <div className="mx-auto mt-10 flex max-w-7xl items-center justify-between">
      <h2 className="text-2xl font-bold">Extensions List</h2>

      <div className="flex gap-2 rounded-xl p-1.5">
        {filtered.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`cursor-pointer rounded-xl border-2 border-transparent px-4 py-1.5 text-sm font-medium transition-all ${
              active === filter
                ? "bg-red-600 text-white"
                : "border-2 border-zinc-300 bg-white px-4 text-zinc-600 hover:bg-zinc-200/60 hover:text-zinc-900"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
