import axios from 'axios';
const myaxios = {};
myaxios.install = function(Vue){
   const instance = axios.create({
     baseURL:"http://localhost8888/api/private/v1/",
     timeout:1000,
    //  headers:{'X-Custom-Header':'foobar'}  
   });
   Vue.prototype.$http = instance;
};
export default myaxios111;