import logo from '../assets/logo.svg'
import iconMoon from '../assets/icon-moon.svg'

export function Header() {
    return (
        <div className="max-w-7xl flex mx-auto bg-amber-200 p-5 rounded-2xl">
            <img src={logo} className='' alt="" />

            <div>
                <button>
                    <img src={iconMoon} alt="" />
                </button>
            </div>
        </div>
    )
}