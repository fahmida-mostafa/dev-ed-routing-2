import React, { Fragment, useEffect, useState } from 'react';

const PokeDetail = ({ match }) => {
    const [detail, setDetail] = useState(null);
    useEffect(() => {
        fetchPokeDetail();
    }, []);
    const fetchPokeDetail = async () => {
        try {
            const dataJSON = await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.name}`);
            const dataObj = await dataJSON.json();
            setDetail({...dataObj});
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="pokedetail">
            {detail && (
                <Fragment>
                    <h1>{detail.name}</h1>
                    <img src={detail.sprites.front_default} alt={detail.name} />
                    <div>
                        <strong>Types: </strong>
                        {detail.types.map(type => (
                            <span key={type.type.name}>{type.type.name}</span>
                        ))}
                    </div>
                    <div>
                        <strong>Abilities:</strong>
                        {detail.abilities.map(ability => (
                            <span key={ability.ability.name}>{ability.ability.name}</span>
                        ))}
                    </div>
                </Fragment>
            )}
        </div>
    );
}
 
export default PokeDetail;