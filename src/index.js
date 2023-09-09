//the entry point needs to be index.js as per create-react-app
import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
     {
       name: "Focaccia",
       ingredients: "Bread with italian olive oil and rosemary",
       price: 6,
       photoName: "pizzas/focaccia.jpg",
       soldOut: false,
     },
     {
       name: "Pizza Margherita",
       ingredients: "Tomato and mozarella",
       price: 10,
       photoName: "pizzas/margherita.jpg",
       soldOut: false,
     },
     {
       name: "Pizza Spinaci",
       ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
       price: 12,
       photoName: "pizzas/spinaci.jpg",
       soldOut: false,
     },
     {
       name: "Pizza Funghi",
       ingredients: "Tomato, mozarella, mushrooms, and onion",
       price: 12,
       photoName: "pizzas/funghi.jpg",
       soldOut: false,
     },
     {
       name: "Pizza Salamino",
       ingredients: "Tomato, mozarella, and pepperoni",
       price: 15,
       photoName: "pizzas/salamino.jpg",
       soldOut: true,
     },
     {
       name: "Pizza Prosciutto",
       ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
       price: 18,
       photoName: "pizzas/prosciutto.jpg",
       soldOut: false,
     },
   ];
   
   



function App(){   //components needs to start with uppercase and the function needs to return something  
  
 return (
     <div className='container'>
       <Header/>
       <Menu />
       <Footer />
     </div>
     )
}



function Header()
{
    
     return(
    <header className='header'>
       <h1> Fast React Pizza Co. </h1>
    </header>
     );

}


function Menu()
{

   const pizzas=pizzaData;
   const pizzaLength=pizzas.length;
    return (
    <main className='menu'>
          <h2>Our Menu</h2>
        
          { pizzaLength>0 ? ( 
          <>
            <p>
            Authentic Italian cuisine.6 creative dishes to choose from.All from our stone oven,all organic,all delicous.
            </p>

            <ul className='pizzas'>
               { pizzas.map( (pizza)=> <Pizza pizzaobject={pizza} key={pizza.name} />)  }
             </ul>
          </>  
             ) : <p> We are still working on our menu</p>
          }
    </main> 
    );
}


function Pizza( {pizzaobject})        
{
  

    return  (
    <li className= { `pizza ${ pizzaobject.soldOut? "sold-out" :" " } ` }  >
      <img alt ={pizzaobject.name} src={pizzaobject.photoName}/>
     <div>
        <h3>{pizzaobject.name}</h3>
        <h3>{pizzaobject.ingredient}</h3>
        <span>
            { pizzaobject.soldOut?"SOLD OUT ": pizzaobject.price  }
        </span>
     </div>
     
   </li>
    );

}



function Footer()
{
     const hour = new Date().getHours();
     const openHour = 13;
     const closeHour = 23;
     const isOpen= hour>=openHour && hour<closeHour;

     return(  <footer className='footer'> 
     { isOpen ?(
           <Order closeHour={closeHour}  /> 
        ):<p>We are closed now </p>
      } 
       </footer> );
}

function Order( {closeHour} )
{
   return (
    <div className='order'>
      <p> We are Open until {closeHour}:00.Come visit us or order online.</p>
      <button className='btn'>Order</button>
   </div>
   );
}





//  1 && 2   //if  1 is true it return 2 else returns 1
//  1 || 2  //if 1 is true it retuns 1 else returns 2



//React V18

//react strict mode during development it renders the component twice in order to find certain bugs and also react will check it are using outdated parts of the react API
const root = ReactDOM.createRoot(document.getElementById('root'));        
   root.render( <React.StrictMode>                                              
        <App/>
   </React.StrictMode>  );

//Before react react18
// root.render(<App/>,document.getElementById("root"));

//All the assests needs to be in public folder