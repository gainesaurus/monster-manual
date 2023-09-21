

export function findMonsterImg(monster) {
  if (!monster.index.toLowerCase().includes('dragon') && !monster.index.toLowerCase().includes('were') && !monster.index.toLowerCase().includes('vampire')) {
  return monster.index;
}
else if (monster.index.includes('black-dragon')) return'black-dragon';
else if (monster.index.includes('blue-dragon')) return 'blue-dragon';
else if (monster.index.includes('brass-dragon')) return 'brass-dragon';
else if (monster.index.includes('bronze-dragon')) return 'bronze-dragon';
else if (monster.index.includes('copper-dragon')) return 'copper-dragon';
else if (monster.index.includes('gold-dragon')) return 'gold-dragon';
else if (monster.index.includes('green-dragon')) return 'green-dragon';
else if (monster.index.includes('red-dragon')) return 'red-dragon';
else if (monster.index.includes('silver-dragon')) return 'silver-dragon';
else if (monster.index.includes('white-dragon')) return 'white-dragon';
else if (monster.index.toLowerCase().includes('werebear')) return 'wereBear';
else if (monster.index.toLowerCase().includes('wereboar')) return 'wereBoar';
else if (monster.index.toLowerCase().includes('wererat')) return 'wereRat';
else if (monster.index.toLowerCase().includes('weretiger')) return 'wereTiger';
else if (monster.index.toLowerCase().includes('werewolf')) return 'wereWolf';
else if (monster.index.toLowerCase().includes('vampire-spawn')) return 'vampire-spawn';
else if (monster.index.toLowerCase().includes('vampire')) return 'vampire';
else return monster.index;
}