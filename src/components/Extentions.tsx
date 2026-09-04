import { data } from "../data/data";

export function Extensions() {
  return (
    <div className="mx-auto mt-10 flex max-w-7xl">
      <div className="grid grid-cols-3 gap-3">
        {data.map((extention) => (
          <div key={extention.id} className="rounded-2xl bg-white p-4">
            <div className="flex gap-3">
              <div>
                <img src={extention.logo} alt="" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold">{extention.name}</span>
                <span className="text-[13px] text-zinc-500">
                  {extention.description}
                </span>
              </div>
            </div>
            <div className="mt-7 flex items-center justify-between">
              <button className="cursor-pointer rounded-2xl border-2 border-zinc-200 px-3 py-1">
                Remove
              </button>
              <label className="relative inline-flex cursor-pointer">
                <input type="checkbox" className="peer sr-only" />

                <div className="h-6 w-11 rounded-full bg-gray-300 peer-checked:bg-blue-500 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-5" />
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
