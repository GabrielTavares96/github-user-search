import React from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../core/components/ButtonIcon';
import './styles.css';

const Home = () => (
    <div className="home-content">
        <div className="home-title">
            <h1>Desafio do Capítulo 3, <br />Bootcamp DevSuperior</h1>
        </div>
        <div className="home-text">
            Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br />
            Favor observar as instruções passadas no capítulo sobre a <br /> elaboração deste projeto. <br />
            Este design foi adaptado a partir de Ant Design System for Figma, de <br />
            Mateusz Wierzbicki: <a href="" className="home-text-color">antforfigma@gmail.com</a>
        </div>
        <Link className="home-btn" to="/search">
            <ButtonIcon text="Começar" />
        </Link>
    </div>
);

export default Home;