import React from 'react';

 export class Child1 extends React.Component 
{
   constructor(props)
   {
       super(props)
       this.state={
          parent:'i am in parent component',
       }
   }
   render()
{

    return (
        <div>
            <h1>{this.state.parent}</h1>
        </div>
    )  
   }
}
export default Child1;