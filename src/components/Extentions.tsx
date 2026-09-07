import { useState } from "react";
import { data } from "../data/data";

interface ExtensionsProps {
  status: string;
}

export function Extensions({ status }: ExtensionsProps) {
  // Guarda o estado atual de cada extensão
  const [extensions, setExtensions] = useState(data);

  // Guarda as extensões removidas
  const [removed, setRemoved] = useState<string[]>([]);

  const filtered = extensions.filter((exten) => {
    // Não mostra extensões removidas
    if (removed.includes(exten.id)) {
      return false;
    }

    if (status.toLowerCase() === "all") {
      return true;
    }

    if (status.toLowerCase() === "active") {
      return exten.isActive === true;
    }

    if (status.toLowerCase() === "inactive") {
      return exten.isActive === false;
    }

    return false;
  });

  function toggleExtension(id: string) {
    setExtensions((currentExtensions) =>
      currentExtensions.map((exten) =>
        exten.id === id ? { ...exten, isActive: !exten.isActive } : exten,
      ),
    );
  }

  return (
    <div className="mx-auto mt-10 flex max-w-7xl">
      <div className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((exten) => {
          const isRemoved = removed.includes(exten.id);

          return (
            <div key={exten.id} className="rounded-2xl bg-white p-4">
              <div className="mb-6 flex gap-3">
                <img src={exten.logo} alt={exten.name} />

                <div>
                  <span className="text-base font-semibold">{exten.name}</span>

                  <p className="text-sm text-zinc-600">{exten.description}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => {
                    if (isRemoved) {
                      setRemoved((current) =>
                        current.filter((id) => id !== exten.id),
                      );
                    } else {
                      setRemoved((current) => [...current, exten.id]);
                    }
                  }}
                  className="cursor-pointer rounded-2xl bg-zinc-100 px-4 py-1"
                >
                  {isRemoved ? "Undo" : "Remove"}
                </button>

                <label className="relative inline-block h-6 w-11 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={exten.isActive}
                    onChange={() => toggleExtension(exten.id)}
                    className="peer sr-only"
                  />

                  <span className="absolute inset-0 rounded-full bg-zinc-300 transition-all duration-300 peer-checked:bg-green-500" />

                  <span className="absolute top-1 left-1 h-4 w-4 rounded-full bg-white shadow transition-all duration-300 peer-checked:translate-x-5" />
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
