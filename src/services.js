

export function findMonsterImg(monster) {
  if (monster.index.includes('dragon')) {
    if (monster.index.includes('half')) return 'half-red-dragon';
    else if (monster.index.includes('black')) return'black-dragon';
    else if (monster.index.includes('blue')) return 'blue-dragon';
    else if (monster.index.includes('brass')) return 'brass-dragon';
    else if (monster.index.includes('bronze')) return 'bronze-dragon';
    else if (monster.index.includes('copper')) return 'copper-dragon';
    else if (monster.index.includes('gold')) return 'gold-dragon';
    else if (monster.index.includes('green')) return 'green-dragon';
    else if (monster.index.includes('red')) return 'red-dragon';
    else if (monster.index.includes('silver')) return 'silver-dragon';
    else if (monster.index.includes('white')) return 'white-dragon';
  }
  else if (monster.index.toLowerCase().includes('were')) {
    if (monster.index.toLowerCase().includes('werebear')) return 'wereBear';
    else if (monster.index.toLowerCase().includes('wereboar')) return 'wereBoar';
    else if (monster.index.toLowerCase().includes('wererat')) return 'wereRat';
    else if (monster.index.toLowerCase().includes('weretiger')) return 'wereTiger';
    else if (monster.index.toLowerCase().includes('werewolf')) return 'wereWolf';
  }
  else if (monster.index.toLowerCase().includes('vampire')) {
    if (monster.index.toLowerCase().includes('spawn')) return 'vampire-spawn';
    else return 'vampire';
  }
  else return monster.index;
}