import React, { useState } from 'react';
import { FiLogIn } from "react-icons/fi"; // importa os icones como componentes
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css'
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
    const [id, setId] = useState('');

    const history = useHistory();

    async function login(e) {
        e.preventDefault();

        const data = {
            id,
        }

        try {
            const response = await api.post('sessions', data);
            
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('profile');

        } catch (error) {
            alert(error)
        }

    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={login} >
                    <h1>Faça Seu Logon</h1>
                    <input placeholder="Sua ID" value={id} onChange={ e => setId(e.target.value)} />
                    <button type="submit" className="button">Entrar</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size="16" color="#e02041" />
                        Não tenho Cadastro
                    </Link>
                </form>

            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}