import "./Header.scss"
import ItemsNav from "./ItemsNav.json"

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    {ItemsNav.map((item, index) => {
                        return (
                            <li key={index}><a href={item.path}>{item.name}</a></li>
                        )
                    })}
                </ul>
            </nav>
        </header>


    )
}
export default Header