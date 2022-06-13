import React from 'react'
import './Home.css'


const Home = (props) => {
    const dish = props.comida.map((dish) => {                  
        return (            
            <div key={dish.id} className="card">                                
                <img src={dish.image} alt="comida" className='image'/>
                <p>{dish.name}</p>
                <p>{dish.description}</p>
                <p>{dish.price} €</p>
            </div>       
        )
    })
    return (
        <div className="cards-container">
                <h2 className='title'>Bowls Poke te lo mereces</h2>   
                <div className="container">   
                {dish}                 
                </div>    
        </div>
      );    
}

export default Home
