import AsyncStorage from '@react-native-async-storage/async-storage';
const BASE_API = 'http://10.0.2.2:3000';

export default {
    saudacao: async () => {
        try {
            let req = await fetch(`${BASE_API}/`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            });
            let json = await req.json();

            return json;
        } catch (error) {
            console.error("Erro de fetch: ", error);
        }
    },
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
    getServicos: async (nome) => {
        try {
            const tokenString = await AsyncStorage.getItem('token');
            const token = JSON.parse(tokenString);
            const req = await fetch(`${BASE_API}/servicos/filter/${nome}`, {
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
    getServico: async(name) => {
        try {
            const tokenString = await AsyncStorage.getItem('token');
            const token = JSON.parse(tokenString);
            const req = await fetch(`${BASE_API}/servicos/filter/nome/${name}`, {
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
    getServicoById: async(id) => {
        try {
            const tokenString = await AsyncStorage.getItem('token');
            const token = JSON.parse(tokenString);
            const req = await fetch(`${BASE_API}/servicos/${id}`, {
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
    getUserById: async (id) => {
        try {
            const tokenString = await AsyncStorage.getItem('token');
            const token = JSON.parse(tokenString);
            const req = await fetch(`${BASE_API}/usuario/user/${id}`, {
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
    getAgenda: async () => {
        try {
            const tokenString = await AsyncStorage.getItem('token');
            const token = JSON.parse(tokenString);
            const req = await fetch(`${BASE_API}/agenda/`, {
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
}