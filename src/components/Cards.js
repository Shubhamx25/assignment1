import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Cards = () => {
  const noOfCards = useSelector((state) => state.counter.value);
  const [cardData, setCardData] = useState([]);

    const fetchUserData = () => {
        for(let i = 1; i <= noOfCards; i++){
            axios.get("https://random-data-api.com/api/v2/users")
            .then(response => {
                 
                 setCardData(prevCardData => ([...prevCardData, response.data]) );
            })
            
            .catch((error) => console.log(error.message));
        }
    }

  useEffect(() => {
    fetchUserData();
    // eslint-disable-next-line
  }, []);
  
  let displayCards = cardData?.map((user) => <Card key={user.id} {...user}/>)


  return (
    <div className='cards-container'>
        {displayCards}
    </div>
  )
}

export default Cards