import { v4 as uuidv4 } from 'uuid';
export const getUserUUID = ()=>{
    //先从本地存储获取用户标识，最开始没有
    let userID =  localStorage.getItem('USER_TEMPID'); 
    //没有用户的标识
    if(!userID){
       //生成一个用户标识
       userID = uuidv4();
       //立马保存本地存储
       localStorage.setItem('USER_TEMPID',userID)  
    } 
    return userID;
 }