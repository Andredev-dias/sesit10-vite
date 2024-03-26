
export default function Card(props){
    return(
        <div>
            <h2>{props.title}</h2>
            <img src={props.image}
                 alt={props.title}
                 width={200}
                 height="auto"/>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
        </div>
    )
}