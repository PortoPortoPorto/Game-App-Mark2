//array to contain games added to list when collapsed 
let gamesToUpdate = []; 

// Game constructor class, used for storing, and displaying games in UI  
class Game {
	constructor(title, platform, genre, studio) {
		this.title = title; 
		this.platform = platform;
		this.genre = genre;
		this.studio= studio; 
	}
}

class UI { 
// display games in DOM
	static displayGames(gamesToRefresh) {
		if(gamesToRefresh === true) {
			console.log('REMOVING OLD GAMES')
			const oldGames = document.querySelectorAll('.placeholder-game');
			console.log(oldGames); 
			oldGames.forEach(game => game.remove());    
		}
		 
		const games = Store.getGames();
		games.forEach((game) => { 
			UI.addGameToList(game); 
		});
		UI.updateTotalGames(); 
	}
//Remove game from gamesToUpdate array, after being displayed in UI 
	static removeGameFromArray(game) {
		gamesToUpdate.forEach((g, index) => {
			if(g.title === game.title) {
				const indexToRemove = gamesToUpdate.indexOf(game)			
				gamesToUpdate.splice(indexToRemove, 1); 
				console.log(`${game.title} removed from array`); 
				return; 
			}
		});
	}	

// add game to list 
	static addGameToList(game) {
		console.log(`ADDING ${game.title} TO LIST`); 
		const currentList = document.querySelector(`#${game.platform}-game-list`);
		let gameDuplicated ; 
//If console container is collapsed, check to see if there are 1 or more games in the gameToUpdate array	
		if(currentList.classList.contains('collapsed')) {
			console.log(gamesToUpdate);
			if(gamesToUpdate.length >= 1) {  
//check through gamesToUpdate array for a duplicate of the game. Remove it from the array if so
				gamesToUpdate.forEach((g, index) => {
					if(g.title === game.title) {
						gameDuplicated = true; 
					}
// if it is a duplicate, console log and return					
					if (gameDuplicated === true) {
						console.log(`${game.title} duplicated`); 
						return; 
// if it isn't a duplicate, push it onto the gamesToUpdate array 					
					} else {
						gamesToUpdate.push(game);
						console.log(gamesToUpdate); 
						console.log(`${game.title} added to array`); 
						return;
					}
			    });
// if there are no gamesToUpdate in the array, simply push to array.
			} else {
				gamesToUpdate.push(game);
				console.log(gamesToUpdate); 
				console.log(`${game.title} added to array`); 
				return;
			}
//if console container isn't collapsed, update the games list as normal				
		} else {
			console.log(game.title); 
			let gamePlatform = game.platform;
			console.log(gamePlatform); 
			let gameGenre = game.genre;
			const ps3GameList = document.querySelector('#PS3-game-list');
			const ps4GameList = document.querySelector('#PS4-game-list');
			const switchGameList = document.querySelector('#Switch-game-list');
            let newGameDiv = document.createElement('div'); 
			newGameDiv.classList.add('placeholder-game', `game-div-${gameGenre}`);   
			newGameDiv.innerHTML= `
				<div name = "thumb-container" class = "thumb-container"></div>
				<div class = "game-info-box">	
					<div name = "title" class = "title">${game.title}</div>
					<div name = "studio" class = "studio">${game.studio}</div>
				</div>
				<div name = "remove" class = "delete"><i class="fa-solid fa-trash" style="color: #2c2936;"></i></div>
				`;
//check for the added game's genre and platform to see if a new div must be created. Apply classes / inner HTML if necessary
			let existingCategory = document.querySelector(`.${gamePlatform}-${gameGenre}`);
			if (!existingCategory) {
				existingCategory = document.createElement('div'); 
				existingCategory.classList.add('genre-box', `${gamePlatform}-${gameGenre}`, `${gamePlatform}`, `${gameGenre}`);
				existingCategory.id = `${gamePlatform}-${gameGenre}`;
				existingCategory.innerHTML =  
				`<div class = "genre-header"><div class = "genre-name"><h3>${gameGenre}</h3></div><i class="fa-solid fa-caret-up fa-lg menu-up" style="color: ${gameGenre};"></i></div>`; 
				if(gamePlatform === 'PS3') {
					ps3GameList.appendChild(existingCategory); 
				} else if (gamePlatform === 'PS4') {
					ps4GameList.appendChild(existingCategory);
				} else if (gamePlatform === 'Switch') {
					switchGameList.appendChild(existingCategory); 
				}
			}
			existingCategory.appendChild(newGameDiv);
			UI.updateGenreBoxes();
			UI.updateContainer(game.platform);				
			UI.updateTotalGames(); 			
		}
	}
	
		

//Update total number of titles and display atop games container 
	static updateTotalGames() {
		const ps3Container = document.querySelector('#PS3-game-list');
		const ps4Container = document.querySelector('#PS4-game-list');
		const switchContainer = document.querySelector('#Switch-game-list');
		const ps3GamesLength = ps3Container.querySelectorAll('.placeholder-game').length;
		const ps4GamesLength = ps4Container.querySelectorAll('.placeholder-game').length;
		const switchGamesLength = switchContainer.querySelectorAll('.placeholder-game').length;
		const totalGamesLength = ps3GamesLength + ps4GamesLength + switchGamesLength;
		const totalCollection = document.querySelector('#total-collection');
		totalCollection.innerHTML = `${totalGamesLength} titles`

	}

//dynamically update height of PS3 container, based on the amount of visible genre headers and games 	
	 static updateContainer(platform, forcedHeight) {
		console.log(`UPDATE ${platform} CONT INITIATED`);
		const consoleContainer = document.querySelector(`#${platform}-game-list`);
		const ContentDivs = document.querySelectorAll(`.${platform}`);  
		const visibleGenreHeaders = consoleContainer.querySelectorAll('.genre-header').length;
		let totalHeight = 90 + (visibleGenreHeaders * 100);  
		const titlesNumber = consoleContainer.querySelector('.titles-number');
		const consoleGames = consoleContainer.querySelectorAll('.placeholder-game')
		const consoleGamesLength = consoleContainer.querySelectorAll('.placeholder-game').length;
		let visibleGamesHeight = 0;
		consoleGames.forEach((game) => {
			if(!game.classList.contains('is-hidden')) {
				visibleGamesHeight = visibleGamesHeight + 160;
			}
		});	
// if console container has been collapsed, there will be a forced height value. This becomes the container height
		if(forcedHeight) {
			totalHeight = forcedHeight;
			consoleContainer.style.height = totalHeight + 'px'; 
		} else {
			totalHeight = totalHeight + visibleGamesHeight;
			consoleContainer.style.height= totalHeight + 'px';
			titlesNumber.textContent = `${consoleGamesLength}`;  
		}		
	}

//update height of genre-box based on the amount of visible divs within
	static updateGenreBox(el) {
		const boxContentDivs = el.querySelectorAll('.placeholder-game'); 
		const seenDivs = [];
		let totalHeight = 90;

		boxContentDivs.forEach((div) =>{
			if(!div.classList.contains('is-hidden')) {
				totalHeight += div.offsetHeight;
			}			
		});
		el.style.height= totalHeight + 'px'; 
	}

	static updateGenreBoxes() {
		const genreBoxes = document.querySelectorAll('.genre-box');

		genreBoxes.forEach((genreBox) => {
			UI.updateGenreBox(genreBox); 
		}); 
	}


//remove game 
	static removeGame (el) {
		console.log('REMOVE GAME METHOD INITIATED');
		const parentGenre = el.closest('.genre-box');
		const consoleContainer = parentGenre.parentElement.id;
		if (consoleContainer === "PS3-game-list") {
			const plat = "PS3"
			return plat; 
		} else if (consoleContainer === "PS4-game-list") {
			const plat = "PS4"
			console.log(plat); 
			return plat; 
		}else if (consoleContainer === "Switch-game-list") {
			const plat = "Switch"
			return plat; 
		}
	
		if(el.classList.contains('delete')) {
			el.parentElement.remove(); 
		}else if (el.classList.contains('fa-trash')) {
			el.parentElement.parentElement.remove(); 
		}

		if (parentGenre.childNodes.length === 1) {
			parentGenre.remove(); 
		}

		UI.updateGenreBoxes();
		UI.updateTotalGames();
		UI.updateContainer(plat);				
	}

// collapse/expand the container for a specific console 
static collapseConsole(e) {
		console.log('COLLAPSE CONSOLE INITIATED'); 
		let consoleContainer = e.parentElement.parentElement.parentElement;
		console.log(consoleContainer); 
		const consoleContent = Array.from(consoleContainer.querySelectorAll('.genre-box')); 
		const gameList = consoleContainer.querySelector('.game-list'); 
		console.log(consoleContent); 
// if console container is open, add class and collapse 
		if (!consoleContainer.classList.contains('collapsed')) {
			consoleContainer.classList.add('collapsed');
			if (consoleContainer.id === "PS3-game-list") {
				console.log('PS3 container collapsing');
				UI.updateContainer('PS3', 140);
			} else if (consoleContainer.id === "PS4-game-list") {
				console.log('PS4 container collapsing');
				UI.updateContainer('PS4', 140);
			} else if (consoleContainer.id === "Switch-game-list") {
				console.log('Switch container collapsing');
				UI.updateContainer('Switch', 140);
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
				UI.updateContainer('PS3');
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
				UI.updateContainer('PS4');
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
				UI.updateContainer('Switch');
				console.log('Switch Container expanded');
			} 					 
	}

}
// collapse/expand genre within a console container 
 static collapseGenre(el) {
		const genreChildren = Array.from(el.parentElement.parentElement.children);
		const totalGenreBoxes = genreChildren.length - 1; 
		const totalGenreHeight = totalGenreBoxes * 155;
		const genreBox = el.parentElement.parentElement;
		const caret = genreBox.querySelector('.menu-up');
		genreChildren.forEach((genreChild) =>{
			if (genreChild.classList.contains('placeholder-game') && genreChild.classList.contains('is-hidden')) { 
				genreChild.style.transform = `translateY(0px)`;
				genreChild.style.transition = 'all 0.5s ease-in-out'; 
				genreChild.classList.remove('is-hidden'); 
				caret.classList.remove('fa-caret-down');
				caret.classList.add('fa-caret-up');
			} else if (genreChild.classList.contains('placeholder-game') && !genreChild.classList.contains('is-hidden')) {
				genreChild.style.transform = `translateY(${totalGenreHeight}px)`;
				genreChild.style.transition = 'all 0.5s ease-in-out'; 
				genreChild.classList.add('is-hidden');
				caret.classList.remove('fa-caret-up');  
				caret.classList.add('fa-caret-down'); 
			}
		});
		if (genreBox.classList.contains('PS3')) {
			UI.updateContainer('PS3');
		} else if (genreBox.classList.contains('PS4')) {
			UI.updateContainer('PS4');
		} else {
			UI.updateContainer('Switch');
		}
		UI.updateGenreBoxes();
	}


//clear modal input fields 
	static clearFields () {
		document.querySelector('#game-title-input').value= ''; 
		document.querySelector('#platform-select').value= ''; 
		document.querySelector('#genre-select').value= ''; 
		document.querySelector('#studio-input').value= ''; 
	}

//show alert
	static showAlert(message, className) {
		const alert = document.createElement('div'); 
		alert.className = `alert alert-${className}`; 
		alert.appendChild(document.createTextNode(message));
			if(alert.classList.contains('alert-success')) {
				document.body.appendChild(alert); 
				setTimeout(() => document.querySelector('.alert').remove(),2000); 
			} else {
				const modalContainer = document.querySelector('.modal-container');
				modalContainer.appendChild(alert);
				setTimeout(() => document.querySelector('.alert').remove(),2000);  
			}
	}

//Clear Modal Visibility 
	static closeModal() {
		const modalContainer = document.querySelector('.modal-container');
		modalContainer.style.display = 'none'; 
	}

	static displayModal() {
		const modalContainer = document.querySelector('.modal-container'); 
		modalContainer.style.display = 'block'; 
	}

	static toggleCollection() {
		const gameLists = document.querySelectorAll('.game-list');
		gameLists.forEach((list, index) => {
			if(list.style.display === 'none') {
				list.style.display = 'block';
			} else if (list.style.display = 'block') {
				list.style.display = 'none'; 
			}
		});
		console.log('collection toggled');
	}
}

	


// STORAGE STUFF 
	class Store {
	
// Get games from local storage
		static getGames() {
			let games; 
			if(localStorage.getItem('games') === null) {
				games = [];
			} else {
				games = JSON.parse(localStorage.getItem('games'));
			}
			return games; 
		}
//Add game to storage 
		static addGame(game) {
			const games =Store.getGames();
			games.push(game);
			localStorage.setItem('games', JSON.stringify(games));
		}

//add genre to storage (don't need? part of the constructor class?)

//remove game from storage 
		static removeGame(title) {
			const games = Store.getGames();
			games.forEach((game, index) => {
				if (game.title === title) {
					games.splice(index, 1); 
				}
			});
			localStorage.setItem('games', JSON.stringify(games)); 
		}
//remove genre from storage (also don't need?)
}

//EVENT LISTENERS

// Submit 
document.querySelector('#visible-submit-button').addEventListener('click', (e) => {
	const title = document.querySelector('#game-title-input').value; 
	const platform = document.querySelector('#platform-select').value;
	const genre = document.querySelector('#genre-select').value;
	const studio = document.querySelector('#studio-input').value; 
	console.log(platform); 
	if(title === '' || platform === '' || genre === '' || studio === '') {
		UI.showAlert('please fill all fields', 'failure');
	} else {
		const game = new Game(title, platform, genre, studio);
		UI.addGameToList(game);
		Store.addGame(game);
		UI.closeModal();  
		UI.showAlert('Game added to collection!', 'success'); 
		UI.clearFields(); 
	}
}); 

document.querySelector('#hidden-submit-button').addEventListener('click', (e) => {
	const title = document.querySelector('#game-title-input').value; 
	const platform = document.querySelector('#platform-select').value;
	const genre = document.querySelector('#genre-select').value;
	const studio = document.querySelector('#studio-input').value; 
	if(title === '' || platform === '' || genre === '' || studio === '') {
		UI.showAlert('please fill all fields', 'failure');
	} else {
		const game = new Game(title, platform, genre, studio);
		UI.addGameToList(game);
		Store.addGame(game); 
		UI.showAlert('Game added to collection!', 'success'); 
		UI.clearFields(); 
	}
}); 




//DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
	UI.displayGames(); 	
	UI.updateGenreBoxes();
}); 

// remove game from collection
document.querySelector('.game-collection-container',).addEventListener('click', (e) => {
	if (e.target.classList.contains('delete') || e.target.classList.contains('fa-trash')) {
		console.log('REMOVE TITLE CLICKED');
		const gameTitle = e.target.closest('.placeholder-game').querySelector('.title').textContent; 
		UI.removeGame(e.target);
		console.log(gameTitle); 
		Store.removeGame(gameTitle);
		console.log('DISPLAY GAMES NOT YET CLICKED'); 
		UI.displayGames(true); 
		console.log('DISPLAY GAMES CLICKED'); 
		UI.showAlert('Game removed from collection', 'success')		
	}
});

//collapse menu on click
document.querySelector('.game-collection-container').addEventListener('click', (e) => {
	if (e.target.classList.contains('menu-up')) {
		UI.collapseGenre(e.target);

	}
});

//display add game modal on button click 
	const addGameBtn = document.querySelector('#add-game-btn');
	addGameBtn.addEventListener('click', () => {
		UI.displayModal(); 
	});

//close modal on X click or click outside modal box	
	const closeBtn = document.querySelector('.close-btn');
	closeBtn.addEventListener('click', () => {
		UI.closeModal(); 
	}); 
	window.addEventListener('click', (e) => {
		if(e.target.classList.contains('modal-container')) {
			UI.closeModal(); 
		}
	});


const platform = document.querySelector('#platform-select');
const ps3GamesContainer = document.querySelector('#PS3-game-list');
const ps4GamesContainer = document.querySelector('#PS4-game-list');
const SwitchGamesContainer = document.querySelector('#Switch-game-list'); 

platform.addEventListener('change', () => {
	const platformSelected = platform.value; 
	console.log(platformSelected);
});

// initiate collapse/expand console function on caret click 
const bigCarets = Array.from(document.querySelectorAll('.big-caret'));
	bigCarets.forEach((caret, index)  => {
		caret.addEventListener('click', (e) => {
			UI.collapseConsole(e.target); 
			console.log(ps3GamesContainer);
			console.log(ps4GamesContainer);
			console.log(SwitchGamesContainer);

		}); 
	});



window.addEventListener('resize', () => {
	UI.updateGenreBoxes();
	UI.updateContainer('PS3');
	UI.updateContainer('PS4');
	UI.updateContainer('Switch'); 
});

//localStorage.clear();