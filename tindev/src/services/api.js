import axios from 'axios';

const api = axios.create({
    //  rodar comando "adb reverse tcp:3333 tcp:3333"
    //  adb é um comando do sdk que avisa o android para quando ele tentar acessar a porta X ele utilizar a porta Y 
    //  dessa forma posso continuar utilizando o endereço localhost:3333

    baseURL: 'http://localhost:3333'
});

export default api;
