define(
[]

,function() {
  function Load(game) {}

  Load.prototype = {
    preload: function() {
      // load game assets here

      var preloading = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 15, 'loading');
      preloading.x -= preloading.width/2;
      this.game.load.setPreloadSprite(preloading);

      this.game.load.image('logo', 'assets/phaser.png');
    }

    ,create: function() {
      // add game assets to the game here.

      var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
      logo.anchor.setTo(0.5, 0.5);

      // launch menu
      // this.game.state.start('Menu');
    }
  }

  return Load;
})