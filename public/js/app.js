require(
[
'phaser'
,'boot'
,'load'
,'menu'
,'play'
]

, function(Phaser, Boot, Load, Menu, Play) {
  var game = new Phaser.Game(800, 600, Phaser.AUTO, '');

  game.state.add('Boot', Boot);
  game.state.add('Load', Load);
  game.state.add('Menu', Menu);
  game.state.add('Play', Play);

  game.state.start('Boot');
});
