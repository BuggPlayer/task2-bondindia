import {ADDDATA} from '../Type';

// const Initial_State = {

//   errors: {},
// };

export default (state = {}, action) => {
  console.log(action.type);
  switch (action.type) {
   
    case 'ADD_USER_REQUEST':
      // console.log('action', action.payload);
      return {
        ...state,
       isLoading:true
      };
      case 'ADD_USER_SUCCESS':
      alert(JSON.stringify(action.payload));
      return {
        ...state,
       isLoading:false,
       ...action.payload

      };

    default:
      return state;
  }
};
