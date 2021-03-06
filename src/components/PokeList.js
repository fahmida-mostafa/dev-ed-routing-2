import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PokeList = ({ match }) => {
    const [list, setList] = useState([]);
    const [pages, setPages] = useState([]);
    useEffect(() => {
        fetchPokeList();
    }, [match.params.num]);
    const fetchPokeList = async () => {
        try {
            const currentPage = match.params.num - 1;
            const dataJSON = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${currentPage * 20}&limit=20`);
            const dataObj = await dataJSON.json();
            setList([...dataObj.results]);

            const count = Math.ceil(dataObj.count / 20);
            const pageList = Array.from(Array(count + 1).keys())
            pageList.shift();
            setPages([...pageList]);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="pokelist">
            <ul>
                {list.map(pokemon => (
                    <li key={pokemon.name}>
                        <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
                    </li>
                ))}
            </ul>
            <div className="pagination">
                <ul>
                    {pages.map(num => (
                        <li key={num}>
                            <Link to={`/pokelist/${num}`}>{num}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
 
export default PokeList;