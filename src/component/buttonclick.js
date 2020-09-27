import React from 'react';
import {Child1} from './child1';
import {Child2} from './child2';

 export class Buttons extends React.Component 
{
   constructor(props)
   {
       super(props)
       this.state={
          isState:true
       }
       this.call=this.call.bind(this)
   }
   call()
   {
           this.setState(state=>({isState:!state.isState}))
           
}
   render()
{
    // if(this.state.isState===true)
    // {
    //     return(
    //     <div>
    //         <button onClick={this.call}>CLICK ME </button>
    //         <Child1 />
    //     </div>
    //     )
    // }
    // if(this.state.isState===false)
    // {
    //     return(
    //     <div>
    //         <button onClick={this.call}>CLICK ME </button>
    //         <Child2 />
    //     </div>
    //     )
    // }  
    return (
        <div>
            <button onClick={this.call}>Click me</button>
            {this.state.isState && <Child1 />}
            {!this.state.isState && <Child2 />}
            
        </div>
    )
   }
}
export default Buttons;