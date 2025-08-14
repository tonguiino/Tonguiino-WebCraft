import "./card.scss"
const Card = ({ title, tech, info, link, nameBtn }) => {
    return (
        <>
            <article className="card-container">
                <h2 className="card-title">{title || 'Titulo por defecto'}</h2>
                <div className="card-info-container">
                    <div className="card-info-text">
                        <h3>{tech || 'Tecnologias utilizadas'}</h3>
                        <p>{info || 'Parrafo por defecto, mona mointa nom  fncoefire asddsd oeiofnwejfned wef we dpfwienf fgh qpohfnow  pasr comer salchichas de limosn atun y ajos en latas '}</p>
                    </div>
                </div>
                <a className="card-btn" href={link || '#'} target="_blank" >{nameBtn || 'Ver Repositorio'}</a>
            </article>
        </>
    )
}

export default Card