import React, { useState } from 'react';
import ButtonIcon from '../../core/components/ButtonIcon';
import ResultItem from './components/ResultItem';
import './styles.css';
import { makeRequest } from '../../core/utils/request';
import Loaders from './components/Loaders/Loaders';


const Search = () => {

    type User = {
        avatar_url: string;
        public_repos: number;
        followers: number;
        following: number;
        company: string;
        blog: string;
        location: string;
        created_at: string;
    }


    const [searchValue, setSearchValue] = useState('');
    const [userData, setUserData] = useState<User>();
    const [isLoading, setIsLoading] = useState(false);




    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setUserData(undefined);
        setIsLoading(true);


        makeRequest({ url: '/' + searchValue, data: userData, method: 'GET' })
            .then(response => setUserData(response.data))
            .finally(() => {
                setIsLoading(false);
            })
            .catch(() => console.error('Houve um errro ao buscar os dados!'));
    }

    return (
        <div className="container-wrapper">
            <div className="container">
                <form onSubmit={handleSubmit} className="search-form">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Usuário Github"
                        value={searchValue}
                        onChange={event => setSearchValue(event.target.value)}
                    />
                    <ButtonIcon text="Encontrar" />
                </form>
            </div>
            {!userData ? (
                <>
                    {isLoading ? <Loaders/> : (
                        <>
                        </>
                    )}
                </>
            ) : (
                <div className="container-result">
                    <div className="result-form">
                        <div className="result-col1">
                            <img className="result-img" src={userData?.avatar_url} alt="img_perfil" />
                            <div className="result-btn">
                                <ButtonIcon text="Ver Perfil" />
                            </div>
                        </div>
                        <div className="result-col2">
                            <div className="result-label">
                                <span className="result-label-item">{`Repositorio ${userData?.public_repos}`} </span>
                                <span className="result-label-item">{`Seguindo: ${userData?.following}`} </span>
                                <span className="result-label-item">{`Seguidores: ${userData?.followers}`} </span>
                            </div>

                            <div className="info-container">
                                <div className="result-title">
                                    Informações
                        </div>
                                <div className="result-item">
                                    <ResultItem text={`Empresa: ${userData?.company}`} />
                                    <ResultItem text={`Website/Blog: ${userData?.blog}`} />
                                    <ResultItem text={`Localidade: ${userData?.location}`} />
                                    <ResultItem text={`Membro desde: ${userData?.created_at}`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div >
    )
}

export default Search;

