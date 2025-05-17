'use strict';
/* global Monogatari */
/* global monogatari */

/**
 * =============================================================================
 * This is the file where you should put all your custom JavaScript code,
 * depending on what you want to do, there are 3 different places in this file
 * where you can add code.
 *
 * 1. Outside the $_ready function: At this point, the page may not be fully
 *    loaded yet, however you can interact with Monogatari to register new
 *    actions, components, labels, characters, etc.
 *
 * 2. Inside the $_ready function: At this point, the page has been loaded, and
 *    you can now interact with the HTML elements on it.
 *
 * 3. Inside the init function: At this point, Monogatari has been initialized,
 *    the event listeners for its inner workings have been registered, assets
 *    have been preloaded (if enabled) and your game is ready to be played.
 *
 * You should always keep the $_ready function as the last thing on this file.
 * =============================================================================
 **/

const { $_ready, $_ } = Monogatari;

// 1. Outside the $_ready function:


$_ready (() => {
	// 2. Inside the $_ready function:

	monogatari.init ('#monogatari').then (() => {
		// 3. Inside the init function:
		const tituloJogo = document.createElement('h1');
		tituloJogo.innerText = "NA PELE DE ALGUÉM";
		tituloJogo.setAttribute('id', 'titulo');
		const divLucasETextoEBotoes = document.createElement("div");
		const imagemLucas = document.createElement("img");
		imagemLucas.src="./assets/ui/lucas.png"
		const textoInicial = document.createElement("span");
		textoInicial.innerText = "Você é Lucas, 17 anos, prestes a terminar o ensino médio."; 
		const textoMeio = document.createElement("span");
		textoMeio.innerText = "\nVocê está em um momento da vida em que as escolhas parecem mais difíceis e o futuro incerto.";
		const textoFinal = document.createElement("p");
		textoFinal.innerText = "Suas escolhas terão consequências.";

		const menu = document.querySelector('[data-screen="main"]');
		menu.appendChild(tituloJogo);
		divLucasETextoEBotoes.appendChild(imagemLucas);
		
		const divTextoEBotoes = document.createElement("div");
		divTextoEBotoes.appendChild(textoInicial);
		divTextoEBotoes.appendChild(textoMeio);
		const divBotoes = document.querySelector(`[data-component="main-menu"]`);
		divTextoEBotoes.appendChild(divBotoes);
		divTextoEBotoes.appendChild(textoFinal)
		divLucasETextoEBotoes.appendChild(divTextoEBotoes);
		divLucasETextoEBotoes.setAttribute("class", "conteudoMenu")
		
		menu.appendChild(divLucasETextoEBotoes);

		const botaoCarregar = document.querySelector('[string="Load"]');
		botaoCarregar.style.display = 'none';
		const botaoOpcoes = document.querySelector('[string="Settings"]');
		botaoOpcoes.style.display = 'none';
		const botaoAjuda = document.querySelector('[string="Help"]');
		botaoAjuda.style.display = 'none';
	});
});
