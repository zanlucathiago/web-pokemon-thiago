import POKEMON from './POKEMON.json';

export default class Pokemon {
  constructor(specie, level = 1) {
    const { name } = POKEMON[specie];
    this.name = name;
    this.level = level;
  }
  getName = () => this.name;
  getLevel = () => this.level;
  gainLevel = () => {
    this.level++;
  };
}
