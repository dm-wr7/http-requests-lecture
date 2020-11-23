import React from 'react'
import PokemonListItem from './PokemonListItem'

const PokemonList = (props) => {
  const pokeList = props.pokemonList.map((element) => {
    return <PokemonListItem key={element.id} pokemon={element} />
  })

  return <div className="pokemon-list">{pokeList}</div>
}
export default PokemonList
