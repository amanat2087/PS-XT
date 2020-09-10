import axios from 'axios';

const url = `https://api.spaceXdata.com/v3/launches?limit=100`;


export const getprograms=(params)=>{
    return dispatch=>{
        return getReq(url, params).then(function(response){
            dispatch({type:'GET_PROGRAMS', data: response.data})
        })
        .catch(function(error){
            console.log(error);
        });
    }
}
const getReq=(url, body)=>{
    return axios.get(url, {params : body});
}