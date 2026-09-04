import logo from "../assets/logo.svg";
import iconMoon from "../assets/icon-moon.svg";

export function Header() {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl bg-white/80 p-5 backdrop-blur-md">
      <img src={logo} className="h-8" alt="Logo da Empresa" />

      <div>
        {/* Adicionado flex e items-center para garantir que o ícone fica perfeitamente centrado */}
        <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-zinc-200 transition-colors hover:bg-zinc-300">
          <img src={iconMoon} alt="Alternar tema" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
