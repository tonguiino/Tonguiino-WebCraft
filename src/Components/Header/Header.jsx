import { useState } from "react"
import "./Header.scss"
import ItemsNav from "./ItemsNav.json"

const Header = () => {

    const [isMenu, setIsMenu] = useState(false)
    const handleMenu = () => setIsMenu(!isMenu)
    return (
        <header>
            <nav>
                <div className="btn-menu" onClick={handleMenu}>
                    {isMenu ? <span class="material-symbols-outlined">close</span> :
                        <span className="material-symbols-outlined">menu</span>}
                </div>
                {isMenu && (<ul>
                    {ItemsNav.map((item, index) => {
                        return (
                            <li className="list-item" key={index}><a href={item.path}>{item.name}</a></li>
                        )
                    })}
                </ul>)}

            </nav>
        </header>


    )
}
export default Header