define(
[], function() {
  function Boot(game) {}

  Boot.prototype = {
    preload: function() {
      this.game.load.image('loading', 'assets/loading.png');
    }

    ,create: function() {
      this.game.state.start('Load');
    }
  }

  return Boot;
});