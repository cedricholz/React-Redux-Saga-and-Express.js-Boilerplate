import axios from 'axios';

export const fetchData = async (username, email, password) => {


    return  await axios.post("http://localhost:8000/Client/sign_up", {
        method: "POST",

        "username": username,
        "email": email,
        "password": password


    });

};