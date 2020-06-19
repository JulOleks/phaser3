class GameScene extends Phaser.Scene{
	constructor(){
		super({key:'GameScene'})
	}

	preload(){
		this.load.image('bg', 'assets/images/bg_main.png');
	}

	create(){
		this.add.text( 0, 0, 'Click to start!', {fill: '#000000', fontSize: '20px'});

	this.bg =	this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'bg').setOrigin(0.5);

		
		this.scale.on('resize', this.resize, this);
	}

	resize({width, height}){
		this.camera.resize(width, height);

		if (width > height) {
      this.resize(width, 0, width, height);
    } else {
      this.resize(0, height, width, height);
		}
		this.bg.setSize(width, height);
	}
	
}