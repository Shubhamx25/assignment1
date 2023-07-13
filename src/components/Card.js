import { Link } from "react-router-dom";

const Card = ({...user}) => {
  return (
     <div className="card">
        <Link to={`/cards/${user.id}`} state={{user: {...user}}} >
        <img src={user.avatar } alt='avatar'/>
        <p>id: {user.id}</p>
        <p>Name: {`${user.first_name} ${user.last_name}`} </p>
        <p>Title: {user.employment.title} </p>
        </Link>
        
     </div> 
  )
}

export default Card