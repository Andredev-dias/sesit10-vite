import style from './Menu.module.css'

export default function Menu(){
    return(
        <div className={style.wrapMenu}>
            <p>
                <a href={'/'}>Cards</a>
            </p>
            <p>
                <a href={'/contact'}>Contato</a>
            </p>
            <p>
                <a href={'/calc'}>Cálculos</a>
            </p>
        </div>
    )
}