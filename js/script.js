/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {
	'pupilaDilatando': 'pupilaDilatando.mp4'
});

// Define the images used in the game.
monogatari.assets ('images', {
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'a': 'a.png',
	'festa': 'festa.png',
	'quarto': 'quarto.png',
	'corredor': 'corredor.png',
	'cama': 'cama.jpg',
	'sala_de_estar': 'sala_de_estar.png',
	'redemoinho': 'redemoinho.png',
	'salaDeJantar': 'salaDeJantar.jpg',
	'festaEmbacada': 'festaEmbacada.png',
	'salaDeAula': 'aula.png',
	'patio': 'patio.png',
	'rua': 'rua.jpg',
	'entradaParque': 'entradaParque.jpg',
	'ruaNoite': 'ruaNoite.jpg',
	'teatro': 'teatro.jpg',
	'celular_vazio': 'celular_vazio.png',
	'maoPilula': 'maoPilula.png',
	'celular_conversa_daniel_1': 'celular_conversa_daniel_1.png',
	'celular_conversa_daniel_2': 'celular_conversa_daniel_2.png',
	'celular_conversa_daniel_3': 'celular_conversa_daniel_3.png',
	'celular_conversa_daniel_4': 'celular_conversa_daniel_4.png',
	'celular_conversa_bianca_1': 'celular_conversa_bianca_1.png',
	'celular_conversa_bianca_2': 'celular_conversa_bianca_2.png',
	'celular_conversa_bianca_3': 'celular_conversa_bianca_3.png',
	'celular_conversa_bianca_4': 'celular_conversa_bianca_4.png',
	'prova': 'prova.png',
	'efeitosEcstasy': 'celular_pesquisa.png',
});


// Define the Characters
monogatari.characters ({
	'l': {
		name: 'Lucas',
		color: '#91b5bf',
		directory: 'lucas',
		sprites: {
			normal: 'normal.png',
			arrependido: 'arrependido.png',
			irritado: 'irritado.png',
			olhandoParaBaixo: 'olhandoParaBaixo.png',
			assustado: 'assustado.png',
			triste: 'triste.png',
			arrependido_2: 'arrependido_2.png',
			feliz: 'feliz.png',
			neutro: 'neutro.png',
			bravo: 'bravo.png',
			aborrecido: 'aborrecido.png',
			mendigo: 'mendigo.png'
		}
	},
	'm': {
		name: 'Mãe',
		color: '#e97432',
		directory: 'pais',
		sprites: {
			preocupada: 'preocupada.png'
		}
	},
	'r': {
		name: 'Rafael',
		color: '#d19118',
		directory: 'rafael',
		sprites: {
			normal: 'normal.png',
			preocupado: 'preocupado.png',
			feliz: 'feliz.png'
		}
	},
	'd': {
		name: 'Daniel',
		color: '#d70707',
		directory: 'daniel',
		sprites: {
			frustrado: 'frustrado.png',
			frustrado_2: 'frustrado_2.png',
			normal: 'normal.png',
			preocupado: 'preocupado.png',
			feliz: 'feliz.png'
		}
	},
	'c': {
		name: 'Caio',
		color: '#008bf6',
		directory: 'caio',
		sprites: {
			normal: 'normal.png',
			feliz: 'feliz.png',
			animado: 'animado.png',
			frustrado: 'frustrado.png',
			neutro: 'neutro.png',
			revirandoOsOlhos: 'revirandoOsOlhos.png',
			frustrado_2: 'frustrado_2.png'
		}
	},
	'b': {
		name: 'Bianca',
		color: '#ee8ab9',
		directory: 'bianca',
		sprites: {
			revirandoOsOlhos: 'revirandoOsOlhos.png',
			normal: 'normal.png'
		}
	},
	'p': {
		name: 'Pai',
		color: '#5bcaff',
		directory: 'pais',
		sprites: {
			decepcionado: 'decepcionado.png'
		}
	}
});

monogatari.script ({
	// The game starts here.
	'Português': {
		'Start': [
		'Você é Lucas, 17 anos, prestes a terminar o ensino médio.',
		'Você está em um momento da vida em que as escolhas parecem mais difíceis e o futuro incerto.',
		'Suas escolhas terão consequências.',
		'show scene festa with fadeIn 2s',
		// 'show notification Welcome',
		// {
		// 	'Input': {
		// 		'Text': 'What is your name?',
		// 		'Validation': function (input) {
		// 			return input.trim ().length > 0;
		// 		},
		// 		'Save': function (input) {
		// 			this.storage ({
		// 				player: {
		// 					name: input
		// 				}
		// 			});
		// 			return true;
		// 		},
		// 		'Revert': function () {
		// 			this.storage ({
		// 				player: {
		// 					name: ''
		// 				}
		// 			});
		// 		},
		// 		'Warning': 'You must enter a name!'
		// 	}
		// },
		'Você e seus amigos estão em uma festa de aniversário. A música está alta, as luzes piscando e o ambiente é animado.',
		'No meio da festa, Caio, te oferece algo.',
		'show character c feliz at left',
		'show character l normal at center with virado',

		'c Ei, Lucas! Experimenta isso aqui. Você vai aproveitar ainda mais... confia em mim.',

		'show character d frustrado at right with virado',
		'hide character c',
		'd Não faz isso, cara.',
		'show scene maoPilula with fadeIn 2s',
		{
			'Choice': {
				'Dialog': 'Você aceita experimentar?',
				'aceita': {
					'Text': 'Aceita experimentar',
					'Do': 'jump Aceita'
				},
				'recusaEducadamente': {
					'Text': 'Recusa educadamente',
					'Do': 'jump RecusaEducadamente'
				},
				'recusaAgressivamente': {
					'Text': 'Recusa agressivamente e vai embora da festa',
					'Do': 'jump RecusaAgressivamente'
				}
			}
		}
	],

	'Aceita': [
		'Você segura a cápsula.',
		'show scene festa',
		'show character c animado at left',
		'show character l feliz at center with virado',
		'show character d preocupado at right with virado',
		'c Boa garoto! Agora sim vai curtir de verdade.',
		'Você engole.',
		'show scene #000',
		'show video pupilaDilatando immersive close',
		// function(){
		// 	document.querySelector('[data-component="text-box"]').style.opacity='0';
		// 	return false;
		// },
		'show scene redemoinho',
		'Euforia. Uma explosão de sensações. Mas por trás da máscara da diversão, germina a semente do desequilíbrio. Ninguém avisa que o paraíso pode cobrar caro a entrada.',
		'show scene sala_de_estar with fadeIn 2s',
		'show character m preocupada at left with fadeIn 2.5s',
		'show character l feliz at right with fadeIn 2.5s virado',
		'm  “Lucas? Você chegou tarde. Tá tudo bem?”',
		'l Está tudo sim, mãe.',
		'show scene quarto with fadeIn 2s',
		'Mais tarde, em seu quarto',
		'A parede gira devagar. O coração dispara. Suor frio.',
		'show character l arrependido',
		'l O que foi isso? Meu Deus, por que eu fiz isso? Era só uma festa...',
		{
			'Choice': {
				'Dialog': 'Você escolhe:',
				'repetir': {
					'Text': 'Achar que foi só "diversão" e querer repetir',
					'Do': 'jump Repetir'
				},
				'pesquisar': {
					'Text': 'Ficar preocupado e pesquisar sobre os efeitos',
					'Do': 'jump Pesquisar'
				},
			}
		},
		'end'
	],

	'Repetir': [
		'show scene corredor with fadeIn 2s',
		'Na escola:',
		'show character r preocupado at left',
		'show character l normal at right with virado',
		'r Cara, você tá diferente. Andando com o Caio direto… tá tudo bem?',
		'hide character l',
		'show character l irritado at right with virado',
		'l Relaxa, eu sei o que estou fazendo.',
		{
			'Choice': {
				'Dialog': 'Você escolhe:',
				'manterSobControle': {
					'Text': 'Tentar manter o uso "sob controle"',
					'Do': 'jump ManterSobControle'
				},
				'usarMais': {
					'Text': 'Ir a festas todos os fins de semana, usando mais',
					'Do': 'jump UsarMais'
				},
			}
		},
	],

	'ManterSobControle': [
		'show scene #000 with fadeIn 2s',
		'centered O que começou como curiosidade virou hábito.',
		'show scene corredor with fadeIn 2s',
		'show character l olhandoParaBaixo',
		'Os olhos de Lucas perdem o brilho.',
		'show scene prova with fadeIn 2s',
		'As notas despencam.',
		'show scene salaDeJantar with fadeIn 2s',
		'show character m preocupada at left',
		'show character p decepcionado at right with virado',
		'Os pais discutem no jantar, perguntando "onde foi que erramos?".',
		'show scene redemoinho with fadeIn 2s',
		'Mas Lucas já está longe, em um mundo que gira mais rápido do que ele consegue acompanhar.',
		'centered <h3> FINAL 1 DE 9: No Controle… Até Perder </h3> O uso recreativo de drogas pode começar de forma ocasional, mas muitas substâncias psicoativas possuem alto potencial de reforço positivo, levando à repetição do comportamento. A exposição frequente altera os circuitos dopaminérgicos de recompensa no cérebro, diminuindo o prazer por estímulos naturais e levando ao uso compulsivo. O comprometimento da memória, atenção e motivação, somado ao isolamento social, pode agravar quadros de ansiedade e depressão.',
		'end'
	],

	'UsarMais': [
		'show scene festaEmbacada with fadeIn 2s',
		'Em uma festa, Lucas cai, inconsciente. Ambulâncias. Sirenes. Gritos.',
		'show scene cama with fadeIn 2s',
		'O corpo frágil, a mente confusa. Uma overdose. O preço da liberdade falsa. O hospital agora é seu novo cenário. Os sonhos? Eles estão em coma, assim como ele.',
		'centered <h3> FINAL 2 DE 9: COMA</h3> A overdose ocorre quando a dose ingerida ultrapassa a capacidade do organismo de metabolizar ou excretar a substância, levando à toxicidade aguda. No caso de drogas estimulantes como o MDMA (ecstasy), os riscos incluem hipertermia, arritmias, convulsões e falência de múltiplos órgãos. A ausência de controle de pureza em substâncias ilícitas aumenta o risco de reações adversas graves, potencialmente fatais. Intervenções de emergência são cruciais, mas nem sempre evitam sequelas neurológicas permanentes.',
		'end'
	],

	'Pesquisar': [
		'hide character l',
		'show scene efeitosEcstasy',
		'show character l arrependido at left',
		'l Efeitos de ecstasy...',
		'l ansiedade, risco de dependência',
		'show character l assustado at left',
		'l danos ao cérebro!?',
		'hide character l',
		'show character l triste at left',
		'l ...',
		'show scene celular_vazio with fadeIn 2s',
		'wait',
		'show scene celular_conversa_daniel_1',
		'wait',
		'show scene celular_conversa_daniel_2',
		'wait',
		'show scene celular_conversa_daniel_3',
		'wait',
		'show scene celular_conversa_daniel_4',
		{
			'Choice': {
				'Dialog': 'Você escolhe: ',
				'conversarComAlguem': {
					'Text': 'Conversar com alguém de confiança sobre o que aconteceu',
					'Do': 'jump ConversarComAlguem'
				},
				'ignorar': {
					'Text': 'Ignorar e seguir a vida como se nada tivesse ocorrido',
					'Do': 'jump Ignorar'
				}

			}
		}
	],

	'ConversarComAlguem': [
		'show scene salaDeAula with fadeIn 2s',
		'show character l arrependido_2 at right with virado',
		'show character r preocupado at left',
		'show character d preocupado at center',
		'Você conversa com Rafael e Daniel.',
		'show character r feliz at left',
		'show character d feliz at at center',
		'show character l normal at right with virado',
		'd Você não tá sozinho. Vamos te ajudar.',
		'hide character l',
		'show character l feliz at right',
		'hide character r',
		'show character r feliz at left',
		'hide character d',
		'show character d feliz at center',
		'E assim, Lucas decide recomeçar. O futuro ainda é incerto, mas pela primeira vez em muito tempo… ele sente que está no caminho certo.',
		'hide character r',
		'hide character d',
		'hide character l',
		'centered <h3> FINAL 3 DE 9: Recomeço <h3> Reconhecer os riscos e buscar ajuda precoce pode interromper o ciclo da dependência antes que ele se consolide. A prevenção secundária, com suporte de pares e orientação correta, permite a reversão de danos iniciais e reforça a resiliência emocional. O envolvimento em redes de apoio, como amigos e profissionais da saúde, é essencial para a reestruturação dos vínculos sociais e retomada de metas pessoais e acadêmicas.',
		'end'
	],

	'Ignorar': [
		'show scene corredor with fadeIn 2s',
		'show character l triste at left',
		'show character c frustrado at right with virado',
		'Você se distancia de Caio, mas também evita confrontos.',
		'hide character c with virado with fadeOut 3s',
		'l <i>Pelo menos não estou pior. Mas... isso basta?</i>',
		'hide character l with fadeOut',
		'centered <h3>FINAL 4 DE 9: Entre o Certo e o Vazio</h3>A evasão de grupos de risco pode ser uma forma de autopreservação, mas, sem reflexão crítica e apoio, o jovem pode se manter em um estado de vulnerabilidade latente. O uso de drogas é multifatorial e inclui aspectos sociais, emocionais e contextuais. Mesmo sem o uso direto, a falta de engajamento com redes de proteção e desenvolvimento pessoal pode manter o indivíduo suscetível a recaídas ou novas situações de risco.',
		'end'
	],

	'RecusaEducadamente': [
		'show scene festa',
		'show character c feliz at left',
		'show character d frustrado_2 at right with virado',
		'show character l neutro at center with virado',
		'l Valeu, Caio. Mas eu tô de boa.',
		'hide character c',
		'show character c neutro at left',
		'c Ah, só uma vez, cara! Ninguém vai saber...',

		{
			'Choice': {
				'Dialog': 'Você escolhe: ',
				'cederAPressao': {
					'Text': 'Ceder à pressão',
					'Do': 'jump Aceita'
				},
				'firmementeManterARecusa': {
					'Text': 'Firmemente manter a recusa',
					'Do': 'jump FirmementeManterARecusa'
				}
			}
		},
	],

	'FirmementeManterARecusa': [
		'show character c revirandoOsOlhos at left',
		'c *Revira os olhos*',
		'hide character d',
		'show character b revirandoOsOlhos at right with virado',
		'b Nossa, que moralista. Vai viver um pouco, Lucas...',
		'l Fiz o certo. Mas por que parece que estou perdendo algo?',
		{
			'Choice': {
				'Dialog': 'Você escolhe: ',
				'sentirSeBem': {
					'Text': 'Sentir-se bem por manter seus valores',
					'Do': 'jump SentirSeBem'
				},
				'sentirSeIsolado': {
					'Text': 'Sentir-se isolado e tentar se encaixar em outro grupo',
					'Do': 'jump SentirSeIsolado'
				}
			}
		}
	],

	'SentirSeBem': [
		'show scene patio with fadeIn 2s',
		'show character l feliz at center',
		'show character r feliz at left',
		'show character d feliz at right',
		'Você se aproxima ainda mais de Rafael e Daniel.',
		'show scene salaDeAula with fadeIn 1s',
		'show character l feliz',
		'Entra num cursinho. Participa de debates.',
		'show scene rua with fadeIn 2s',
		'show character l feliz',
		'Seu mundo se expande. Sem fugir da realidade, você começa a moldar o próprio futuro.',
		'centered <h3>FINAL 5 DE 9 - Escolhas com Futuro</h3>Manter os próprios valores diante da pressão social demonstra autonomia e maturidade emocional. A literatura aponta que jovens com forte senso de identidade, autoestima e envolvimento em atividades extracurriculares (como debates, cursinhos e projetos sociais) têm menor probabilidade de se envolver com drogas. Isso se relaciona à prevenção primária, que visa fortalecer o senso crítico antes do contato com substâncias.',
		'end'
	],

	'SentirSeIsolado': [
		'show scene entradaParque',
		'show character l normal',
		'Você encontra um novo grupo mais calmo. Mas sente falta da adrenalina das festas.',
		'show scene festaEmbacada',
		'show character l triste',
		'l Será que dá pra ser certo e ainda assim... sentir que se vive de verdade?',
		'centered <h3>FINAL 6 DE 9 - Faltava Algo</h3>O distanciamento de influências negativas sem encontrar novas fontes de realização pode gerar vazio existencial e sensação de que “falta algo”. Isso ressalta a importância de promover educação emocional e projetos de vida que valorizem o bem-estar sem depender de estímulos externos artificiais. A prevenção eficaz precisa oferecer alternativas concretas de pertencimento e prazer saudável.',
		'end'
	],

	'RecusaAgressivamente': [
		'show scene festa',
		'show character l bravo with virado',
		'show character c feliz at left',
		'show character d frustrado at right with virado',
		'l Você tá maluco? Nem ferrando.',
		'show scene #000 with fadeIn 2s',
		'Sai da festa. Portas batem. Silêncio no ar.',
		'show scene ruaNoite with fadeIn 5s',
		'show character l triste',
		'Enquanto as luzes da festa continuam girando, Lucas caminha pelas ruas escuras, com os próprios pensamentos como companhia. O silêncio fala mais do que qualquer música alta.',
		'show scene celular_conversa_bianca_1 with fadeIn 2s',
		'wait',
		'show scene celular_conversa_bianca_2',
		'wait',
		'show scene celular_conversa_bianca_3',
		'wait',
		'show scene celular_conversa_bianca_4',
		'wait',
		{
			'Choice': {
				'Dialog': 'Você escolhe:',
				'ignorarMensagens': {
					'Text': 'Ignorar as mensagens e seguir focado em seus objetivos',
					'Do': 'jump IgnorarMensagens'
				},
				'tentarSeDesculpar': {
					'Text': 'Tentar "se desculpar" e voltar às festas',
					'Do': 'jump TentarSeDesculpar'
				}
			}
		}
	],

	'IgnorarMensagens': [
		'show scene teatro with fadeIn 1s',
		'show character l feliz',
		'Lucas se junta ao grupo de teatro.',
		'show character r feliz at right with fadeIn 2s',
		'Rafael apresenta um projeto social.',
		'Palcos, cenas, falas. Lucas descobre outra forma de ser ouvido — sem precisar se destruir. Com o projeto, conquista uma bolsa. O mundo lá fora continua barulhento, mas ele encontrou sua voz.',
		'centered <h3>FINAL 7 DE 9 - Voz no Palco</h3>Envolver-se com arte, cultura ou projetos sociais é uma forma comprovada de reduzir fatores de risco e fortalecer fatores de proteção ao uso de substâncias. Essas atividades promovem dopamina de maneira natural, sem os riscos neuroquímicos da droga. Além disso, aumentam habilidades de comunicação, autoestima e capacidade de lidar com frustrações — componentes chave na prevenção ao uso abusivo.',
		'end'
	],

	'TentarSeDesculpar': [
		'show scene corredor with fadeIn 2s',
		'show character l arrependido at left',
		'show character c neutro at right with virado',
		'l talvez eu tenha exagerado naquela noite... foi mal.',
		'show character c frustrado_2 at right with virado',
		'c Tranquilo, só não faz isso de novo, se não...',
		'c ...não irá ter uma próxima.',
		{
			'Choice': {
				'Dialog': 'Você escolhe',
				'fazerUsoModerado': {
					'Text': 'Fazer uso moderado de substâncias',
					'Do': 'jump FazerUsoModerado'
				},
				'perceberGrupoAfastar': {
					'Text': 'Perceber que esse grupo não é para você e se afastar',
					'Do': 'jump PerceberGrupoAfastar'
				}
			}
		}
	],

	'FazerUsoModerado': [
		'show scene festa with fadeIn 2s',
		'show character l normal',
		'l Só em festas. Nada demais. Eu sei parar.',
		'Mas o corpo cobra. As doses aumentam.',
		'show scene salaDeAula with fadeIn 2s',
		'Logo, você começa a faltar na escola. Perde oportunidades.',
		'show scene quarto with fadeIn 2s',
		'show character l aborrecido',
		'show character m preocupada at right with virado',
		'show character p decepcionado at left',
		'Os pais não sabem mais como conversar com ele.',
		'show scene ruaNoite',
		'show character l mendigo at center',
		'O brilho das luzes virou sombra nos olhos. Você agora precisa da droga para sentir qualquer coisa. Os amigos de verdade se afastaram. E você… já não sabe quem é sem a euforia sintética.',
		'centered <h3>FINAL 8 DE 9 - Ilusão de Controle</h3>O uso moderado de drogas pode rapidamente evoluir para dependência devido à tolerância farmacológica — necessidade de doses maiores para obter o mesmo efeito. A negação é um dos principais obstáculos ao tratamento, pois o indivíduo acredita estar no controle. A dependência química é uma doença crônica com componente neuroadaptativo, que exige intervenção multidisciplinar para controle e recuperação.',
		'end'
	],

	'PerceberGrupoAfastar': [
		'show scene festa with fadeIn 2s',
		'show character l aborrecido at center with virado',
		'show character c normal at left',
		'show character b normal at right with virado',
		'Você percebe que Caio e Bianca só o puxam para baixo. Você se afasta.',
		'hide character c with fadeOut 2s',
		'hide character b with fadeOut 2s with virado',
		'wait',
		'show scene entradaParque with fadeIn 2s',
		'show character l feliz with fadeIn 2s',
		'Foi preciso tropeçar para enxergar. Mas ele se levanta. E caminha, dessa vez, para longe do abismo.',
		'centered <h3>FINAL 9 DE 9 - Despertar</h3>A percepção crítica sobre relações tóxicas e ambientes de risco é um passo essencial na prevenção terciária, que visa impedir recaídas e consolidar a mudança de comportamento. Romper com vínculos prejudiciais pode ser doloroso, mas abre espaço para o autoconhecimento e novas oportunidades. A reestruturação dos objetivos de vida é um fator protetivo para manter a abstinência e promover saúde mental.',
		'end'
	]
	},

	'English': {
		'Start': []
	}
});