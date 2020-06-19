const config = {
			type: Phaser.AUTO,
			backgroundColor: "b9eaff",
      width: 960,
      height: 960,
      plugins: {},
      physics: {
        default: 'matter',
        matter: {
					gravity: { y: 0.2 },
				},
			},
			
			scene: [GameScene]
}

const game = new Phaser.Game(config);