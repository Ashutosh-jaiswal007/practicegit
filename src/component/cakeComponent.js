import React from 'react'
import {buyCake} from '../redux/cakes/cakeaction.js'
import {connect} from 'react-redux'

export const CakeContainer = (props)=>
{
    return (
        <div>
            <h2>number of cake {props.noOfCake}</h2>
            <button onClick={props.buyCake}>Cake</button> 
            </div>
    )
}

const mapStateToProps = (state)=>
{
return {
    noOfCake:state.noOfCake
}
}

const mapDispatchToProps = (dispatch)=>
{
    return {
       buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)