let gamePLatform = game.platform;
let gameGenre = game.genre;
let existingCategory = document.querySelector(`.${gamePLatform}-${gameGenre}`);
if (!existingCategory) {
	existingCategory = document.createElement('div'); 
	existingCategory.classList.add('genre-box', `${existingCategory}`, `${gamePLatform}`, `${gameGenre}`);
	existingCategory.id = `${existingCategory}`;
	existingCategory.innerHTML =  
	`<div class = "genre-header"><div class = "genre-name"><h3>${gameGenre}</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #e6ca7e;"></i></div>`; 
	newGameDiv.style.backgroundColor = '#a7c799';
	if(gamePlatform === 'PS3') {
		ps3GameList.appendChild(existingCategory); 
	}
	existingCategory.appendChild(newGameDiv);
	newGameDiv.style.backgroundColor = '#a7c799';
}















	
				
			if (game.platform === 'PS3' && game.genre === 'RPG') {		 
				let ps3Rpg = document.querySelector('.PS3-RPG'); 
				if (!ps3Rpg) {
					ps3Rpg = document.createElement('div');
					ps3Rpg.classList.add('genre-box', 'PS3-RPG', 'PS3', 'RPG'); 
					ps3Rpg.id = 'ps3-rpg'; 
					ps3Rpg.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>RPG</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #81cede;"></i></div>'
					ps3Rpg.appendChild(newGameDiv);
					newGameDiv.style.backgroundColor = '#81cede';				
					ps3GameList.appendChild(ps3Rpg);		
				} 
					ps3Rpg.appendChild(newGameDiv);	
					newGameDiv.style.backgroundColor = '#81cede';  
				
				} else if (game.platform === 'PS3' && game.genre === 'Horror') {
					let ps3Horror = document.querySelector('.PS3-Horror'); 
					if (!ps3Horror) {
						ps3Horror = document.createElement('div');
						ps3Horror.classList.add('genre-box', 'PS3-Horror', 'PS3', 'horror');
						ps3Horror.id = 'ps3-horror';
						ps3Horror.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Horror</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #9c676c;"></i></div>'
						ps3Horror.appendChild(newGameDiv);
						newGameDiv.style.backgroundColor = '#9c676c';					
						ps3GameList.appendChild(ps3Horror);
					} 
						ps3Horror.appendChild(newGameDiv);	
						newGameDiv.style.backgroundColor = '#9c676c';
				
				} else if (game.platform === 'PS3' && game.genre === 'Sports') {
					let ps3Sports = document.querySelector('.PS3-Sports'); 
					if (!ps3Sports) {
						ps3Sports = document.createElement('div');
						ps3Sports.classList.add('genre-box', 'PS3-Sports', 'PS3', 'sports');
						ps3Sports.id = 'ps3-sports'; 
						ps3Sports.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Sports</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #a7c799;"></i></div>'
						ps3Sports.appendChild(newGameDiv);
						newGameDiv.style.backgroundColor = '#a7c799';			
						ps3GameList.appendChild(ps3Sports);
					} 
						ps3Sports.appendChild(newGameDiv);
						newGameDiv.style.backgroundColor = '#a7c799';

				} else if (game.platform === 'PS3' && game.genre === 'Racing') {
					let ps3Racing = document.querySelector('.PS3-Racing'); 
					if (!ps3Racing) {
						ps3Racing = document.createElement('div');
						ps3Racing.classList.add('genre-box', 'PS3-Racing', 'PS3', 'racing');
						ps3Racing.id = 'ps3-racing'
						ps3Racing.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Racing</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #8b8fe0;"></i></div>'
						newGameDiv.style.backgroundColor = '#8b8fe0';
						ps3Racing.appendChild(newGameDiv);				
						ps3GameList.appendChild(ps3Racing);
					} 
						newGameDiv.style.backgroundColor = '#8b8fe0';
						ps3Racing.appendChild(newGameDiv);

				} else if (game.platform === 'PS3' && game.genre === 'Action') {
					let ps3Action = document.querySelector('.PS3-Action'); 
					if (!ps3Action) {
						ps3Action = document.createElement('div');
						ps3Action.classList.add('genre-box', 'PS3-Action', 'PS3', 'action');
						ps3Action.id = 'ps3-action'; 
						ps3Action.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Action</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #e6ca7e;"></i></div>'
						newGameDiv.style.backgroundColor = '#e6ca7e';
						ps3Action.appendChild(newGameDiv);				
						ps3GameList.appendChild(ps3Action);
					} 
						ps3Action.appendChild(newGameDiv);
						newGameDiv.style.backgroundColor = '#e6ca7e';

				} else if (game.platform === 'PS3' && game.genre === 'Adventure') {
					let ps3Adventure = document.querySelector('.PS3-Adventure'); 
					if (!ps3Adventure) {
						ps3Adventure = document.createElement('div');
						ps3Adventure.classList.add('genre-box', 'PS3-Adventure', 'PS3', 'adventure');
						ps3Adventure.id = 'ps3-adventure';
						ps3Adventure.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Adventure</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #9c755c;"></i></div>'
						newGameDiv.style.backgroundColor = '#9c755c';
						ps3Adventure.appendChild(newGameDiv);				
						ps3GameList.appendChild(ps3Adventure);
					} 
						newGameDiv.style.backgroundColor = '#9c755c';
						ps3Adventure.appendChild(newGameDiv);

				} else if (game.platform === 'PS3' && game.genre === 'Simulation') {
					let ps3Simulation = document.querySelector('.PS3-Simulation'); 
					if (!ps3Simulation) {
						ps3Simulation = document.createElement('div');
						ps3Simulation.classList.add('genre-box', 'PS3-Simulation', 'PS3', 'simulation');
						ps3Simulation.id = 'ps3-simulation'; 
						ps3Simulation.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Simulation</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #e4e9f0;"></i></div>'
						newGameDiv.style.backgroundColor = '#e4e9f0';
						ps3Simulation.appendChild(newGameDiv);				
						ps3GameList.appendChild(ps3Simulation);
					} 
						newGameDiv.style.backgroundColor = '#e4e9f0';
						ps3Simulation.appendChild(newGameDiv);

				} else if (game.platform === 'PS3' && game.genre === 'Fighting') {
					let ps3Fighting = document.querySelector('.PS3-Fighting'); 
					if (!ps3Fighting) {
						ps3Fighting = document.createElement('div');
						ps3Fighting.classList.add('genre-box', 'PS3-Fighting', 'PS3', 'fighting');
						ps3Fighting.id = 'ps3-fighting'; 
						ps3Fighting.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Fighting</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #db9865;"></i></div>'
						newGameDiv.style.backgroundColor = '#db9865';
						ps3Fighting.appendChild(newGameDiv);				
						ps3GameList.appendChild(ps3Fighting);
					} 
						ps3Fighting.appendChild(newGameDiv);
						newGameDiv.style.backgroundColor = '#db9865';

				} else if (game.platform === 'PS3' && game.genre === 'FPS') {
					let ps3Fps = document.querySelector('.PS3-FPS'); 
					if (!ps3Fps) {
						ps3Fps = document.createElement('div');
						ps3Fps.classList.add('genre-box', 'PS3-FPS', 'PS3', 'FPS');
						ps3Fps.id = 'ps3-fps'; 
						ps3Fps.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>FPS</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #bbc2c4;"></i></div>'
						newGameDiv.style.backgroundColor = '#bbc2c4';
						ps3Fps.appendChild(newGameDiv);				
						ps3GameList.appendChild(ps3Fps); 
					} 
						newGameDiv.style.backgroundColor = '#bbc2c4';
						ps3Fps.appendChild(newGameDiv);

				} else if (game.platform === 'PS3' && game.genre === 'Platformer') {
					let ps3Platformer = document.querySelector('.PS3-Platformer'); 
					if (!ps3Platformer) {
						ps3Platformer = document.createElement('div');
						ps3Platformer.classList.add('genre-box', 'PS3-Platformer', 'PS3');
						ps3Platformer.id= 'ps3-platformer'; 
						ps3Platformer.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Platformer</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #c7c2f2;"></i></div>'
						ps3Platformer.appendChild(newGameDiv);				
						ps3GameList.appendChild(ps3Platformer); 
					} 
						ps3Platformer.appendChild(newGameDiv);

				} else if (game.platform === 'PS3' && game.genre === 'Strategy') {
					let ps3Strategy = document.querySelector('.PS3-Strategy'); 
					if (!ps3Strategy) {
						ps3Strategy = document.createElement('div');
						ps3Strategy.classList.add('genre-box', 'PS3-Strategy', 'PS3', 'strategy');
						ps3Strategy.id = 'ps3-strategy'; 
						ps3Strategy.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Strategy</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #dba2e0;"></i></div>'
						newGameDiv.style.backgroundColor = '#dba2e0';
						ps3Strategy.appendChild(newGameDiv);				
						ps3GameList.appendChild(ps3Strategy);
					} 
						newGameDiv.style.backgroundColor = '#dba2e0';
						ps3Strategy.appendChild(newGameDiv);
				}









	 		if (game.platform === 'PS4' && game.genre === 'RPG') {
	 			let ps4Rpg = document.querySelector('.PS4-RPG'); 
				if (!ps4Rpg) {
					ps4Rpg = document.createElement('div');
					ps4Rpg.classList.add('genre-box', 'PS4-RPG', 'PS4', 'RPG');
					ps4Rpg.id = 'ps4-rpg'; 
					ps4Rpg.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>RPG</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #81cede;"></i></div>'
					ps4Rpg.appendChild(newGameDiv);
					newGameDiv.style.backgroundColor = '#81cede';				
					ps4GameList.appendChild(ps4Rpg);
				} 
					ps4Rpg.appendChild(newGameDiv);
					newGameDiv.style.backgroundColor = '#81cede';		
				
				} else if (game.platform === 'PS4' && game.genre === 'Horror') {
					let ps4Horror = document.querySelector('.PS4-Horror'); 
					if (!ps4Horror) {
						ps4Horror = document.createElement('div');
						ps4Horror.classList.add('genre-box', 'PS4-Horror', 'PS4', 'horror');
						ps4Horror.id = 'ps4-horror'; 
						ps4Horror.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Horror</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #9c676c;"></i></div>'
						ps4Horror.appendChild(newGameDiv);
						newGameDiv.style.backgroundColor = '#9c676c';				
						ps4GameList.appendChild(ps4Horror);
					} 
						ps4Horror.appendChild(newGameDiv);	
						newGameDiv.style.backgroundColor = '#9c676c';
				
				} else if (game.platform === 'PS4' && game.genre === 'Sports') {
					let ps4Sports = document.querySelector('.PS4-Sports'); 
					if (!ps4Sports) {
						ps4Sports = document.createElement('div');
						ps4Sports.classList.add('genre-box', 'PS4-Sports', 'PS4', 'sports');
						ps4Sports.id = 'ps4-sports'; 
						ps4Sports.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Sports</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #a7c799;"></i></div>'
						ps4Sports.appendChild(newGameDiv);
						newGameDiv.style.backgroundColor = '#a7c799';				
						ps4GameList.appendChild(ps4Sports);
					} 
						ps4Sports.appendChild(newGameDiv);
						newGameDiv.style.backgroundColor = '#a7c799';

				} else if (game.platform === 'PS4' && game.genre === 'Racing') {
					let ps4Racing = document.querySelector('.PS4-Racing'); 
					if (!ps4Racing) {
						ps4Racing = document.createElement('div');
						ps4Racing.classList.add('genre-box', 'PS4-Racing', 'PS4', 'racing');
						ps4Racing.id = 'ps4-racing'; 
						ps4Racing.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Racing</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #8b8fe0;"></i></div>'
						newGameDiv.style.backgroundColor = '#8b8fe0';
						ps4Racing.appendChild(newGameDiv);				
						ps4GameList.appendChild(ps4Racing);
					} 
						newGameDiv.style.backgroundColor = '#8b8fe0';
						ps4Racing.appendChild(newGameDiv);

				} else if (game.platform === 'PS4' && game.genre === 'Action') {
					let ps4Action = document.querySelector('.PS4-Action'); 
					if (!ps4Action) {
						ps4Action = document.createElement('div');
						ps4Action.classList.add('genre-box', 'PS4-Action', 'PS4', 'action');
						ps4Action.id = 'ps4-action'; 
						ps4Action.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Action</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #e6ca7e;"></i></div>'
						newGameDiv.style.backgroundColor = '#e6ca7e';
						ps4Action.appendChild(newGameDiv);				
						ps4GameList.appendChild(ps4Action);
					} 
						newGameDiv.style.backgroundColor = '#e6ca7e';
						ps4Action.appendChild(newGameDiv);

				} else if (game.platform === 'PS4' && game.genre === 'Adventure') {
					let ps4Adventure = document.querySelector('.PS4-Adventure'); 
					if (!ps4Adventure) {
						ps4Adventure = document.createElement('div');
						ps4Adventure.classList.add('genre-box', 'PS4-Adventure', 'PS4', 'adventure');
						ps4Adventure.id = 'ps4-adventure'; 
						ps4Adventure.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Adventure</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #9c755c;"></i></div>'
						newGameDiv.style.backgroundColor = '#9c755c';
						ps4Adventure.appendChild(newGameDiv);				
						ps4GameList.appendChild(ps4Adventure);
					} 
						newGameDiv.style.backgroundColor = '#9c755c';
						ps4Adventure.appendChild(newGameDiv);

				} else if (game.platform === 'PS4' && game.genre === 'Simulation') {
					let ps4Simulation = document.querySelector('.PS4-Simulation'); 
					if (!ps4Simulation) {
						ps4Simulation = document.createElement('div');
						ps4Simulation.classList.add('genre-box', 'PS4-Simulation', 'PS4', 'simulation');
						ps4Simalation.id = 'ps4-Simulation';
						ps4Simulation.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Simulation</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #e4e9f0;"></i></div>'
						newGameDiv.style.backgroundColor = '#e4e9f0';
						ps4Simulation.appendChild(newGameDiv);				
						ps4GameList.appendChild(ps4Simulation);
					} 
						newGameDiv.style.backgroundColor = '#e4e9f0';
						ps4Simulation.appendChild(newGameDiv);

				} else if (game.platform === 'PS4' && game.genre === 'Fighting') {
					let ps4Fighting = document.querySelector('.PS4-Fighting'); 
					if (!ps4Fighting) {
						ps4Fighting = document.createElement('div');
						ps4Fighting.classList.add('genre-box', 'PS4-Fighting', 'PS4', 'fighting');
						ps4Fighting.id = 'ps4-fighting'; 
						ps4Fighting.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Fighting</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #db9865;"></i></div>'
						newGameDiv.style.backgroundColor = '#db9865';
						ps4Fighting.appendChild(newGameDiv);				
						ps4GameList.appendChild(ps4Fighting);
					} 
						newGameDiv.style.backgroundColor = '#db9865';
						ps4Fighting.appendChild(newGameDiv);



				} else if (game.platform === 'PS4' && game.genre === 'FPS') {
					let ps4Fps = document.querySelector('.PS4-FPS'); 
					if (!ps4Fps) {
						ps4Fps = document.createElement('div');
						ps4Fps.classList.add('genre-box', 'PS4-FPS', 'PS4', 'FPS');
						ps4Fps.id = 'ps4-fps'; 
						ps4Fps.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3></div>FPS</h3><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #bbc2c4;"></i></div>'
						newGameDiv.style.backgroundColor = '#bbc2c4';
						ps4Fps.appendChild(newGameDiv);				
						ps4GameList.appendChild(ps4Fps);
					} 
						newGameDiv.style.backgroundColor = '#bbc2c4';
						ps4Fps.appendChild(newGameDiv);

				} else if (game.platform === 'PS4' && game.genre === 'Platformer') {
					let ps4Platformer = document.querySelector('.PS4-Platformer'); 
					if (!ps4Platformer) {
						ps4Platformer = document.createElement('div');
						ps4Platformer.classList.add('genre-box', 'PS4-Platformer', 'PS4');
						ps4Platformer.id = 'ps4-platformer'; 
						ps4Platformer.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Platformer</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #c7c2f2;"></i></div>'
						ps4Platformer.appendChild(newGameDiv);				
						ps4GameList.appendChild(ps4Platformer);
					} 
						ps4Platformer.appendChild(newGameDiv);

				} else if (game.platform === 'PS4' && game.genre === 'Strategy') {
					let ps4Strategy = document.querySelector('.PS4-Strategy'); 
					if (!ps4Strategy) {
						ps4Strategy = document.createElement('div');
						ps4Strategy.classList.add('genre-box', 'PS4-Strategy', 'PS4', 'strategy');
						ps4Strategy.id = 'ps4-strategy'; 
						ps4Strategy.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Strategy</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #dba2e0;"></i></div>'
						newGameDiv.style.backgroundColor = '#dba2e0';
						ps4Strategy.appendChild(newGameDiv);				
						ps4GameList.appendChild(ps4Strategy); 
					} 
						newGameDiv.style.backgroundColor = '#dba2e0';
						ps4Strategy.appendChild(newGameDiv);
				}





					if (game.platform === 'Switch' && game.genre === 'RPG') {
	 			let switchRpg = document.querySelector('.switch-RPG'); 
				if (!switchRpg) {
					switchRpg = document.createElement('div');
					switchRpg.classList.add('genre-box', 'switch-RPG', 'switch', 'RPG');
					switchRpg.id = 'switch-rpg';
					switchRpg.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>RPG</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #81cede;"></i></div>'
					switchRpg.appendChild(newGameDiv);
					newGameDiv.style.backgroundColor = '#81cede';				
					switchGameList.appendChild(switchRpg);
				} 
					switchRpg.appendChild(newGameDiv);
					newGameDiv.style.backgroundColor = '#81cede';	
				
				} else if (game.platform === 'Switch' && game.genre === 'Horror') {
					let switchHorror = document.querySelector('.switch-Horror'); 
					if (!switchHorror) {
						switchHorror = document.createElement('div');
						switchHorror.classList.add('genre-box', 'switch-Horror', 'switch', 'horror');
						switchHorror.id = 'switch-horror';
						switchHorror.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Horror</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #9c676c;"></i></div>'
						switchHorror.appendChild(newGameDiv);
						newGameDiv.style.backgroundColor = '#9c676c';				
						switchGameList.appendChild(switchHorror);
					} 
						switchHorror.appendChild(newGameDiv);
						newGameDiv.style.backgroundColor = '#9c676c';	
				
				} else if (game.platform === 'Switch' && game.genre === 'Sports') {
					let switchSports = document.querySelector('.switch-Sports'); 
					if (!switchSports) {
						switchSports = document.createElement('div');
						switchSports.classList.add('genre-box', 'switch-Sports', 'switch', 'sports');
						switchSports.id = 'switch-sports';
						switchSports.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Sports</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #a7c799;"></i></div>'
						switchSports.appendChild(newGameDiv);
						newGameDiv.style.backgroundColor = '#a7c799';				
						switchGameList.appendChild(switchSports);
					} 
						switchSports.appendChild(newGameDiv);
						newGameDiv.style.backgroundColor = '#a7c799';

				} else if (game.platform === 'Switch' && game.genre === 'Racing') {
					let switchRacing = document.querySelector('.switch-Racing'); 
					if (!switchRacing) {
						switchRacing = document.createElement('div');
						switchRacing.classList.add('genre-box', 'switch-Racing', 'switch', 'racing');
						switchRacing.id = 'switch-racing';
						switchRacing.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Racing</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #8b8fe0;"></i></div>'
						newGameDiv.style.backgroundColor = '#8b8fe0';
						switchRacing.appendChild(newGameDiv);				
						switchGameList.appendChild(switchRacing);
					} 
						newGameDiv.style.backgroundColor = '#8b8fe0';
						switchRacing.appendChild(newGameDiv);

				} else if (game.platform === 'Switch' && game.genre === 'Action') {
					let switchAction = document.querySelector('.switch-Action'); 
					if (!switchAction) {
						switchAction = document.createElement('div');
						switchAction.classList.add('genre-box', 'switch-Action', 'switch', 'action');
						switchAction.id = 'switch-action';
						switchAction.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Action</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #e6ca7e;"></i></div>'
						newGameDiv.style.backgroundColor = '#e6ca7e';
						switchAction.appendChild(newGameDiv);				
						switchGameList.appendChild(switchAction);
					} 
						newGameDiv.style.backgroundColor = '#e6ca7e';
						switchAction.appendChild(newGameDiv);

				} else if (game.platform === 'Switch' && game.genre === 'Adventure') {
					let switchAdventure = document.querySelector('.switch-Adventure'); 
					if (!switchAdventure) {
						switchAdventure = document.createElement('div');
						switchAdventure.classList.add('genre-box', 'switch-Adventure', 'switch', 'adventure');
						switchAdventure.id = 'switch-adventure';
						switchAdventure.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Adventure</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #9c755c;"></i></div>'
						newGameDiv.style.backgroundColor = '#9c755c';
						switchAdventure.appendChild(newGameDiv);				
						switchGameList.appendChild(switchAdventure);
					} 
						newGameDiv.style.backgroundColor = '#9c755c';
						switchAdventure.appendChild(newGameDiv);

				} else if (game.platform === 'Switch' && game.genre === 'Simulation') {
					let switchSimulation = document.querySelector('.switch-Simulation'); 
					if (!switchSimulation) {
						switchSimulation = document.createElement('div');
						switchSimulation.classList.add('genre-box', 'switch-Simulation', 'switch', 'simulation');
						switchSimulation.id = 'switch-simulation';
						switchSimulation.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Simulation</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #e4e9f0;"></i></div>'
						newGameDiv.style.backgroundColor = '#e4e9f0';
						switchSimulation.appendChild(newGameDiv);				
						switchGameList.appendChild(switchSimulation);
					} 
						newGameDiv.style.backgroundColor = '#e4e9f0';
						switchSimulation.appendChild(newGameDiv);

				} else if (game.platform === 'Switch' && game.genre === 'Fighting') {
					let switchFighting = document.querySelector('.switch-Fighting'); 
					if (!switchFighting) {
						switchFighting = document.createElement('div');
						switchFighting.classList.add('genre-box', 'switch-Fighting', 'switch', 'fighting');
						switchFighting.id = 'switch-fighting';
						switchFighting.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Fighting</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #db9865;"></i></div>'
						newGameDiv.style.backgroundColor = '#db9865';
						switchFighting.appendChild(newGameDiv);				
						switchGameList.appendChild(switchFighting);
					} 
						newGameDiv.style.backgroundColor = '#db9865';
						switchFighting.appendChild(newGameDiv);

				} else if (game.platform === 'Switch' && game.genre === 'FPS') {
					let switchFps = document.querySelector('.switch-FPS'); 
					if (!switchFps) {
						switchFps = document.createElement('div');
						switchFps.classList.add('genre-box', 'switch-FPS', 'switch', 'FPS');
						switchFps.id = 'switch-fps';
						switchFps.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>FPS</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #bbc2c4;"></i></div>'
						newGameDiv.style.backgroundColor = '#bbc2c4';
						switchFps.appendChild(newGameDiv);				
						switchGameList.appendChild(switchFps);
					} 
						newGameDiv.style.backgroundColor = '#bbc2c4';
						switchFps.appendChild(newGameDiv);

				} else if (game.platform === 'Switch' && game.genre === 'Platformer') {
					let switchPlatformer = document.querySelector('.switch-Platformer'); 
					if (!switchPlatformer) {
						switchPlatformer = document.createElement('div');
						switchPlatformer.classList.add('genre-box', 'switch-Platformer', 'switch');
						switchPlatformer.id = 'switch-platformer';
						switchPlatformer.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Platformer</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #c7c2f2;"></i></div>'
						switchPlatformer.appendChild(newGameDiv);				
						switchGameList.appendChild(switchPlatformer);
					} 
						switchPlatformer.appendChild(newGameDiv);

				} else if (game.platform === 'Switch' && game.genre === 'Strategy') {
					let switchStrategy = document.querySelector('.switch-Strategy'); 
					if (!switchStrategy) {
						switchStrategy = document.createElement('div');
						switchStrategy.classList.add('genre-box', 'switch-Strategy', 'switch', 'strategy');
						switchStrategy.id = 'switch-strategy';
						switchStrategy.innerHTML = '<div class = "genre-header"><div class = "genre-name"><h3>Strategy</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: #dba2e0;"></i></div>'
						newGameDiv.style.backgroundColor = '#dba2e0';
						switchStrategy.appendChild(newGameDiv);				
						switchGameList.appendChild(switchStrategy);
					} 
						newGameDiv.style.backgroundColor = '#dba2e0';
						switchStrategy.appendChild(newGameDiv);
				}





				// if console container is open, add class and collapse 
		if (!consoleContainer.classList.contains('collapsed')) {
			consoleContainer.classList.add('collapsed');
			if (consoleContainer.id === "PS3-game-list") {
				console.log('PS3 container collapsing');
				UI.updatePs3Container(140);
			} else if (consoleContainer.id === "PS4-game-list") {
				console.log('PS4 container collapsing');
				UI.updatePs4Container(140);
			} else if (consoleContainer.id === "Switch-game-list") {
				console.log('Switch container collapsing');
				UI.updateSwitchContainer(140);
			}
//if console container is already collapsed, check for new games added to the list and expand accordingly 	
		} else {
			 if (consoleContainer.id === "PS3-game-list" && consoleContainer.classList.contains('collapsed')) {
				consoleContainer.classList.remove('collapsed');
				console.log('PS3 container expanding');
				if(gamesToUpdate.length > 0) {
					gamesToUpdate.forEach((game) => {
						if(game.platform === 'PS3') { 
							UI.addGameToList(game);
							UI.removeGameFromArray(game);   
						}
					});
				}
				UI.updatePs3Container();
				console.log('PS3 Container expanded');

			} else if (consoleContainer.id === "PS4-game-list" && consoleContainer.classList.contains('collapsed')) {
				consoleContainer.classList.remove('collapsed');
				console.log('PS4 container expanding'); 
				if(gamesToUpdate.length > 0) {
					gamesToUpdate.forEach((game) => {
						if(game.platform === 'PS4') {
							UI.addGameToList(game);
							UI.removeGameFromArray(game); 
						} 
					});
				}
				UI.updatePs4Container();
				console.log('PS4 Container expanded');

			} else if (consoleContainer.id === "Switch-game-list" && consoleContainer.classList.contains('collapsed')) {
				consoleContainer.classList.remove('collapsed');
				console.log('Switch container expanding'); 
				if(gamesToUpdate.length > 0) {
					gamesToUpdate.forEach((game) => {
						if(game.platform === 'Switch') {
							UI.addGameToList(game);
							UI.removeGameFromArray(game); 
						} 
					});
				}
				UI.updateSwitchContainer();
				console.log('Switch Container expanded');
			} 	
		}
					 


		 static updatePs3Container(consoleContainer, forcedHeight) {
		const ps3Container = document.querySelector('#PS3-game-list');
		const ps3ContentDivs = document.querySelectorAll('.PS3');  
		const visibleGenreHeaders = ps3Container.querySelectorAll('.genre-header').length;
		let totalHeight = 90 + (visibleGenreHeaders * 100);  
		const titlesNumber = ps3Container.querySelector('.titles-number');
		const ps3Games = ps3Container.querySelectorAll('.placeholder-game')
		const ps3GamesLength = ps3Container.querySelectorAll('.placeholder-game').length;
		let visibleGamesHeight = 0;
		ps3Games.forEach((game) => {
			if(!game.classList.contains('is-hidden')) {
				visibleGamesHeight = visibleGamesHeight + 160;
			}
		});	
// if console container has been collapsed, there will be a forced height value. This becomes the container height
		if(forcedHeight) {
			totalHeight = forcedHeight;
			ps3Container.style.height = totalHeight + 'px'; 
		} else {
			totalHeight = totalHeight + visibleGamesHeight;
			ps3Container.style.height= totalHeight + 'px';
			titlesNumber.textContent = `${ps3GamesLength}`;  
		}
		
	}
//dynamically update height of PS4 container, based on the amount of visible genre headers and games
	static updatePs4Container(forcedHeight) {
		const ps4Container = document.querySelector('#PS4-game-list');
		const ps4ContentDivs = document.querySelectorAll('.PS4'); 
		const visibleGenreHeaders = ps4Container.querySelectorAll('.genre-header').length;
		let totalHeight = 90 + (visibleGenreHeaders * 100);  
		const titlesNumber = ps4Container.querySelector('.titles-number'); 
		const ps4Games = ps4Container.querySelectorAll('.placeholder-game');
		const ps4GamesLength = ps4Container.querySelectorAll('.placeholder-game').length;
		let visibleGamesHeight = 0;
		ps4Games.forEach((game) => {
			if(!game.classList.contains('is-hidden')) {
				visibleGamesHeight = visibleGamesHeight + 160;
			}
		});	
// if console container has been collapsed, there will be a forced height value. This becomes the container height
		if(forcedHeight) {
			totalHeight = forcedHeight;
			ps4Container.style.height = totalHeight + 'px';
		} else {
			totalHeight = totalHeight + visibleGamesHeight;
			ps4Container.style.height= totalHeight + 'px'; 
			titlesNumber.textContent = `${ps4GamesLength}`; 
		}
	}
	
//dynamically update height of Switch container, based on the amount of visible genre headers and games
	static updateSwitchContainer(forcedHeight) {
		const switchContainer = document.querySelector('#Switch-game-list');
		const switchContentDivs = document.querySelectorAll('.switch'); 
		const visibleGenreHeaders = switchContainer.querySelectorAll('.genre-header').length;
		let totalHeight = 90 + (visibleGenreHeaders * 100);  
		const titlesNumber = switchContainer.querySelector('.titles-number'); 
		const switchGames = switchContainer.querySelectorAll('.placeholder-game');
		const switchGamesLength = switchContainer.querySelectorAll('.placeholder-game').length;
		let visibleGamesHeight = 0;
		switchGames.forEach((game) => {
			if(!game.classList.contains('is-hidden')) {
				visibleGamesHeight = visibleGamesHeight + 160;
			}
		});	
// if console container has been collapsed, there will be a forced height value. This becomes the container height
		if (forcedHeight) {
			totalHeight = forcedHeight;
			switchContainer.style.height = totalHeight + 'px'; 
		} else {
			totalHeight = totalHeight + visibleGamesHeight;
			switchContainer.style.height= totalHeight + 'px'; 
			titlesNumber.textContent = `${switchGamesLength}`;
		}
	}











	//dynamically update height of PS3 container, based on the amount of visible genre headers and games 	
	 static updatePs3Container(forcedHeight) {
		console.log('UPDATE PS3 CONT INITIATED');
		const ps3Container = document.querySelector('#PS3-game-list');
		const ps3ContentDivs = document.querySelectorAll('.PS3');  
		const visibleGenreHeaders = ps3Container.querySelectorAll('.genre-header').length;
		let totalHeight = 90 + (visibleGenreHeaders * 100);  
		const titlesNumber = ps3Container.querySelector('.titles-number');
		const ps3Games = ps3Container.querySelectorAll('.placeholder-game')
		const ps3GamesLength = ps3Container.querySelectorAll('.placeholder-game').length;
		let visibleGamesHeight = 0;
		ps3Games.forEach((game) => {
			if(!game.classList.contains('is-hidden')) {
				visibleGamesHeight = visibleGamesHeight + 160;
			}
		});	
// if console container has been collapsed, there will be a forced height value. This becomes the container height
		if(forcedHeight) {
			totalHeight = forcedHeight;
			ps3Container.style.height = totalHeight + 'px'; 
		} else {
			totalHeight = totalHeight + visibleGamesHeight;
			ps3Container.style.height= totalHeight + 'px';
			titlesNumber.textContent = `${ps3GamesLength}`;  
		}
		
	}
//dynamically update height of PS4 container, based on the amount of visible genre headers and games
	static updatePs4Container(forcedHeight) {
		console.log('UPDATE PS4 CONT INITIATED');
		const ps4Container = document.querySelector('#PS4-game-list');
		const ps4ContentDivs = document.querySelectorAll('.PS4'); 
		const visibleGenreHeaders = ps4Container.querySelectorAll('.genre-header').length;
		let totalHeight = 90 + (visibleGenreHeaders * 100);  
		const titlesNumber = ps4Container.querySelector('.titles-number'); 
		const ps4Games = ps4Container.querySelectorAll('.placeholder-game');
		const ps4GamesLength = ps4Container.querySelectorAll('.placeholder-game').length;
		let visibleGamesHeight = 0;
		ps4Games.forEach((game) => {
			if(!game.classList.contains('is-hidden')) {
				visibleGamesHeight = visibleGamesHeight + 160;
			}
		});	
// if console container has been collapsed, there will be a forced height value. This becomes the container height
		if(forcedHeight) {
			totalHeight = forcedHeight;
			ps4Container.style.height = totalHeight + 'px';
		} else {
			totalHeight = totalHeight + visibleGamesHeight;
			ps4Container.style.height= totalHeight + 'px'; 
			titlesNumber.textContent = `${ps4GamesLength}`; 
		}
	}




				let listToSearch; 	
// CHECK IF THE GAME IS ALREADY LISTED. IF SO, RETURN WITHOUT APPENDING DOM 			
			if (gamePlatform === 'PS3') {
				listToSearch = ps3GameList;
			} else if (gamePlatform === 'PS4') {
				listToSearch = ps4GameList
			} else if (gamePlatform === 'Switch') {
				listToSearch = switchGameList; 
			}
			const displayedGames = listToSearch.querySelectorAll('.placeholder-game');
			displayedGames.forEach((displayedGame) => {
				if(!displayedGame.innerHTML === game.title)





	class UI { 
// display games in DOM
	static displayGames(displayedGames) {
		const games = Store.getGames();
		games.forEach((game) => { 			
			UI.addGameToList(game); 			
		});
		UI.updateTotalGames(); 
	}

	static resetDisplay() {
		let displayedGames = []; 
		const allGames = document.querySelectorAll('.title');
		allGames.forEach((AG) => {
			displayedGames.push(AG.innerHTML);
		});
		UI.displayGames(displayedGames); 
	}	