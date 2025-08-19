export const initialState={
  name:{value:"",isValid:false},
  email:{value:"",isValid:false},
  username:{value:"",isValid:false},
  password:{value:"",validation:{
    hasLowerCase:false,
    hasUpperCase:false,
    hasDigit:false,
    hasSpecialSymbol:false,
    minLengthReq:false
  },
  isValid:false
},

};
const namePattern=/^[A-Z][a-z]+$/;
const usernamePattern=/^[a-z\d]+$/
const emailPattern=/^(\w)+(@)([a-z]+\.)[a-z]{2,}$/;
const hasLower=/[a-z]/;
const hasUpper=/[A-Z]/;
const hasDigit=/[0-9]/;
const hasspecial=/[\W_]/;


export const signupReducer=(state=initialState,action)=>
{
    const{type,payload}=action;
    switch(type)
    {
      case "name":
        const copyState={...state,name:{value:payload,isValid:namePattern.test(payload)}}
        return copyState;
      case "email":
        return {...state,email:{value:payload,isValid:emailPattern.test(payload)}}
      case "username":
        return {...state,username:{value:payload,isValid:usernamePattern.test(payload)}}
      
      case "password":
        
        return {...state,password:{value:payload,validation:{
          hasLowerCase:hasLower.test(payload),
          hasUpperCase:hasUpper.test(payload),
          hasDigit:hasDigit.test(payload),
          hasSpecialSymbol:hasspecial.test(payload),
          minLengthReq:payload.length>=8
        }
        }
      };
      break;

      default:
      return state;
    }
}