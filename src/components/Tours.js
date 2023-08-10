import  Card from "./Card";
import React from "react";
function Tours({tours, removeTour}){
     return (
        <div className="container">
                <div><h2  className="title"> Plan With Vrinda </h2> </div>

                <div className="cards">
                {
                   tours.map( (tour,index) =>
                    {
                         return <Card key={index} {...tour} removeTour={removeTour}></Card>
                    } )
                }
                </div>
        </div>
     );

  
}
export default Tours;