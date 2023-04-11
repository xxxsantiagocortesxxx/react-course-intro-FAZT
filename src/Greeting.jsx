//cuando hablamos de componentes en react literalmente estamos hablando de funciones

export const Greeting = (props) =>{

   return  <h1> {props.title} </h1>   

}

export const UserCard = ({name, amount, married, address}) =>{

    return (
        <div>
            <h1>  {name}  </h1>
            <p>💵{amount}</p>
            <p> {married ? "maried" : "single"} </p>
            <ul>
                <li>CITY: {address.city}</li>
                <li>ADDRESS: {address.street}   </li>
            </ul>
        </div>
    );
}