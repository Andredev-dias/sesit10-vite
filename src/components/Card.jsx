import style from './Card.module.css'

export default function Card({title, image, text1, text2}){
    return(
        <div className={style.card}>
            <h2>{title}</h2>
            <img src={image}
                 alt={title}
                 width={200}
                 height="auto"/>
            <p>{text1}</p>
            <p>{text2}</p>
        </div>
    )
}