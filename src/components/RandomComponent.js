// import React, { Component } from 'react';
import React from 'react';
import '../App.css';
// import { listenerCount } from 'cluster';

const RandomComponent = ({randomList}) => (
  <div className="random-recipe">
    <table className="table">
      <tbody>
        {randomList.map(item =>(
          <tr key={item._id}>
            <td>
              <div>
                <img className="rounded-circle" width={400} height={400} src={`${item.recipeImage}`} />
              </div>
              <div>
                <h2><strong>RECIPE SUBMITTED BY:<h5>{item.email}</h5> </strong></h2>
              </div>
              <div>
                <h5><strong>NAME: </strong></h5>{item.recipesName}
              </div>
              <div>
                <h5><strong>COOK TIME: </strong></h5>{item.recipeTime} minutes
              </div>
              <div>
                <h5><strong>INGREDIENTS:</strong></h5> {item.recipeIngredients}
              </div>
              <div>
                <h5><strong>INSTRUCTIONS: </strong></h5>
                {item.recipeInstructions}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)


export default RandomComponent;