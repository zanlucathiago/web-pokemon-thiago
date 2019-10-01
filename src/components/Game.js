import React, { Component } from 'react';
import backgroundImage from './background.jpg';
// import Location from './Location';
import Locations from './Locations.json';
import {
  // AppBar,
  Button,
  ButtonGroup,
  Chip
  // Toolbar,
  // IconButton,
  // Typography
} from '@material-ui/core';
import Pokemon from './Pokemon';
// import MenuIcon from '@material-ui/icons/Menu';

export class Game extends Component {
  state = {
    location: 'newBarkTown'
  };
  render() {
    const { location } = this.state;
    // const { connectingLocations } = location;
    const { connectingLocations } = Locations[location];
    const {
      northExit,
      southExit,
      eastExit,
      westExit,
      accessTo
    } = connectingLocations;

    let _accessTo = accessTo
      ? Array.isArray(accessTo)
        ? accessTo
        : [accessTo]
      : [];

    console.log(location);
    // console.log(Locations[northExit]);
    // console.log(Locations[southExit]);
    // console.log(Locations[eastExit]);
    // console.log(Locations[westExit]);
    return (
      <div
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          height: window.innerHeight - 48,
          padding: 24
        }}
      >
        <Chip color="primary" label={Locations[location].name} />
        <Button
          onClick={() => {
            const random = Math.random();
            let period;
            const hours = new Date().getHours();
            if (4 <= hours && hours < 10) {
              period = 'morning';
            } else if (10 <= hours && hours < 8) {
              period = 'day';
            } else {
              period = 'night';
            }
            let sum = 0;
            let chosen;
            const { wildPokemon } = Locations[location];
            if (wildPokemon) {
              wildPokemon.standardWalking[period].some(pkmn => {
                sum += pkmn.ratio;
                if (sum > random) {
                  chosen = pkmn;
                  return true;
                }
                return false;
              });
              console.log(chosen);
              const { level } = chosen;
              const instance = new Pokemon(
                chosen.name,
                Math.floor(Math.random() * (level[1] - level[0] + 1) + level[0])
              );
              alert(
                `Um Pokemon selvagem apareceu! Nome: ${instance.getName()}, level: ${instance.getLevel()}`
              );
            } else {
              alert('Caminhando ...');
            }
          }}
          style={{ position: 'absolute', top: 400 }}
          variant="contained"
        >
          Walk around
        </Button>
        <ButtonGroup
          variant="contained"
          color="secondary"
          size="large"
          style={{ bottom: 24, position: 'absolute' }}
        >
          {northExit && (
            <Button
              onClick={() => this.setState({ location: northExit })}
              variant="contained"
            >
              Saída norte para {Locations[northExit].name}
            </Button>
          )}
          {southExit && (
            <Button
              onClick={() => this.setState({ location: southExit })}
              variant="contained"
            >
              Saída sul para {Locations[southExit].name}
            </Button>
          )}
          {eastExit && (
            <Button
              onClick={() => this.setState({ location: eastExit })}
              variant="contained"
            >
              Saída leste para {Locations[eastExit].name}
            </Button>
          )}
          {westExit && (
            <Button
              onClick={() => this.setState({ location: westExit })}
              variant="contained"
            >
              Saída oeste para {Locations[westExit].name}
            </Button>
          )}
          {_accessTo.map(access => (
            <Button
              onClick={() => this.setState({ location: access })}
              variant="contained"
            >
              Acesso para {Locations[access].name}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    );
  }
}

export default Game;
