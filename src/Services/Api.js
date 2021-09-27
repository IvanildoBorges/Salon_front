import AsyncStorage from '@react-native-async-storage/async-storage';
const BASE_API = 'http://10.0.2.2:3000';

export default {
    
     getToken: async (token) => {
        try {
            const req = await fetch(`${BASE_API}/auth/refresh`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({token})
            });
            const json = await req.json();

            return json;
        } catch (error) {
            console.error("Erro de fetch: ", error);
        }
    },
    loginConta: async (email, senha) => {
        try {
            let req = await fetch(`${BASE_API}/auth/login`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, senha})
            });
            let json = await req.json();

            return json;
        } catch (error) {
            console.error("Erro ao requisitar api: ", error);
        }
    },
    cadastroConta: async (isAdm, nome, endereco, email, senha, avatar) => {
        try {
            const req = await fetch(`${BASE_API}/usuario/cadastro`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({isAdm, nome, endereco, email, senha, avatar})
            });
            const json = await req.json();
    
            return json;
        } catch (error) {
            console.error("Erro: ", error);
        }
    },
    getAvaliacoes: async () => {
        try {
            const tokenString = await AsyncStorage.getItem('token');
            const token = JSON.parse(tokenString);
            const req = await fetch(`${BASE_API}/feedback/`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            console.error("Erro de fetch: ", error);
        }
    },
    getServicos: async (token) => {

    },
}