import {
    FETCH_USER_REQUEST, 
      FETCH_USER_SUCCES,  
      FETCH_USER_FAILURE
    }  from './usertype'



const initialstate =
{
    loading:true,
    user:[],
    error:''
}




export const reducer =(state=initialstate,action)=>
{
    switch(action.type)
    {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading:false,
            }
            case FETCH_USER_SUCCES:
            return {
                ...state,
                loading:true,
                user:action.payload
            }
            case FETCH_USER_FAILURE:
            return {
                ...state,
                loading:true,
                user:'',
                error:action.payload
            }
            default : return state
        }
    }



