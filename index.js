var tabs;
var content;

var tableEntries = [
	{
		date: "2/25/2024", 
		text: "The site is nearly complete, and I hope to have it published by the end of the month. There isn't much to put here yet, but I've got a lot planned."
	}, 
	{
		date: "11/11/2024",
		text: "Been very busy, but finally came back to this. Hopefully there'll be time to get the links up and this pushed out before too long - although, that's what I said last time."
	}, 
	{
		date: "12/15/2024",
		text: "Added a section for Deadlands."
	}, 
	{
		date: "3/22/2025",
		text: "Fixed the photos section and added a bunch of text. Also started thinking about fixing the other comic pages since they're still not very good. The World of Dust one still works fine, but it's kinda slow to load for some reason and doesn't have an archive. The others still need styling."
	}
];

var photos = [
	{
		filename: "unnamed.png",
		alt: "Oblivion Wave",
		title: "OG Oblivion Wave - approx. 12/10/18",
		text: "One of the oldest surviving drawings I have with an actual date estimation. Was originally made for my first ever original story, though it didn't end up getting very far. But for 2018, it didn't end up turning out that badly, especially the perspective on the slab. The rocks, however, were traced from a photo."
	},
	{
		filename: "technowolves.jpg",
		alt: "Techno Wolves",
		title: "Techno Wolves - 12/21/20",
		text: "The one and only drawing I did based on DSMP, back when that was really a thing. I really only watched Technoblade's perspective, having been a viewer well before any of that, even before MCMonday, back when he was known for skywars. I miss those days. Rest in peace."
	},
	{
		filename: "nether1.png",
		alt: "Emsevell in the Nether",
		title: "Emsevell in the Nether - 1/19/2021",
		text: "One of the first drawings I ever made on the reMarkable, just a few days after I had gotten my hands on it. It had originally meant to be a Christmas gift, but didn't arrive until January. It's meant to be in the nether wastes, complete with lava falling from above."
	},
	{
		filename: "woddude1.png",
		alt: "Construction Guy",
		title: "Construction Guy - 4/23/21",
		text: "A character later introduced into World of Dust. It's been so long I honestly don't remember his name. Will update if/when I do remember."
	},
	{
		filename: "emsevell_ref.png",
		alt: "Emsevell Artfight Reference",
		title: "Emsevell Artfight Reference - 7/2/22",
		text: "A reference for emsevell I made for Artfight. I don't remember if I actually participated in 2022, maybe just one or two drawings."
	},
	{
		filename: "dirttower.png",
		alt: "Dirt Towers",
		title: "Binky and the Dirt Towers - 7/16/22",
		text: "Quick drawing from a long time ago about my sister (the plant)'s method of dealing with the night in Minecraft, which involved building 3-5 block dirt towers. ABSOLUTELY. EVERYWHERE. It's honestly pretty funny, there's a whole field of them outside spawn that are still there on our server (though the server is currently down for technical reasons involving getting a little too handsy with the code)."
	},
	{
		filename: "grenades.png",
		alt: "grenades",
		title: "Grenades - 8/21/22",
		text: "\"That's interesting. Do you know what else is interesting? Grenades.\" Just a redraw of a meme with my old Pathfinder character, Meuric the 3 charisma grenade-happy alchemist, and Bruiser, a friend's barbarian/brawler. Meuric had a higher (accidental) PC kill count than any other source combined, and we lost count of how many times Bruiser specifically was downed by an errant bomb. Needless to say, I had not taken the \"Precise Bombs\" discovery."
	},
	{
		filename: "chroma1.png",
		alt: "Chroma",
		title: "Chroma - 11/28/22",
		text: "An old drawing of Chroma, when I was still developing the deep shadows of what became World of Dust. Actually maybe this was drawn later, just for fun. Who knows."
	},
	{
		filename: "bruiserandbrick.png",
		alt: "Failed Entry",
		title: "Failed Entry - 12/11/22",
		text: "A drawing from Pathfinder of a before-and-after of the worst ever door breaking down of all time."
	},
	{
		filename: "boulderdodge.png",
		alt: "Boulder Dodge",
		title: "Boulder Dodge - 12/18/22",
		text: "A drawing from Pathfinder. With enough dodge bonus to AC, many things are possible. A related event is what spawned the phrase \"The stone giant has taken his rockubine.\""
	},
	{
		filename: "reftest.png",
		alt: "Northwest Academy Reference Test",
		title: "Northwest Academy Reference Test - 1/5/23",
		text: "A quick test where I was trying to finalize designs for the Northwest Academy cast. Probably going to adjust this some anyways, I would like it to have more visual cohesion and be less gray."
	},
	{
		filename: "Damien_2023.png",
		alt: "Damien, by -zilly-",
		title: "Damien, by -zilly- - 7/15/23",
		text: "The first Artfight attack I put actual effort into. Thought it turned out alright. I did quite a few attacks in 2024, they can be found on Artfight since I can't be bothered uploading them all here."
	},
	{
		filename: "dl1.png",
		alt: "Deadlands OG Sketch",
		title: "Deadlands OG Sketch - 11/20/23",
		text: "This is the actual first drawing of the party, trying to get some designs down. Unfortunately Rainman is no longer with us (the player moved away) but the rest of us are still truckin', multiple years later."
	},
	{
		filename: "hog.png",
		alt: "Deadlands OG Party",
		title: "Deadlands OG Party - 12/25/23",
		text: "This was the second drawing I ever did with the Deadlands party, and was a Christmas gift to the table (but mostly my brother). From left to right, the characters are Slip Wesley, Horace \"Hog\" Donovan, Buster Scruggs (no, not that one. yes, named after him), and Jerry \"Rainman\" Raw. This took way longer than it maybe should've, but I'm still pretty happy with it."
	},
	{
		filename: "rodgeandbum.png",
		alt: "Rodge, Bum, and Thud",
		title: "Rodge, Bum, and Thud - 1/4/24",
		text: "This is a sketch of a few characters from a short 5e campaign. On the left is my brother's character, Rodge, a cleric/bard performer(?) with a Minnesotan accent and glorious hair, next to my character Bum, a thawed-out mild-mannered caveman barbarian, and his friend Thud. \"He name Thud since that sound Thud make.\" Once, when we were stopped in a town at one point, as the party fanned out to find things to do, Bum put his 20 strength to work and worked an honest 9 to 5 lugging logs around. Later, we were trying to get past some giants during a blizzard. They asked us who was there in Giant. Bum, the only one who could speak Giant since he was a giant barbarian, answered, of course, \"No one\". Things went downhill from there. Fortunately, his friend Thud was a bit more well-spoken."
	},
	{
		filename: "dan1.png",
		alt: "Dan, by Amber",
		title: "Dan, by Amber - 1/24/24",
		text: "Quick drawing of Dan, from DMFA."
	},
	{
		filename: "thumbsup.png",
		alt: "thumbsup.png - 3/5/24",
		title: "👍️",
		text: "👍️"
	},
	{
		filename: "kitt.png",
		alt: "Kitt",
		title: "Title: Kitt, by What Lies Beyond - 12/31/24",
		text: "This drawing, as well as several of the others, have been a long time coming. A long time ago, I was an enjoyer of certain stories set in the Pokemon universe, chiefly one called \"Shifters and Shadows\" by What Lies Beyond. It's set in its own universe and introduces some interesting concepts. The premise of the story (and the others set in the same universe) is that there exist a class of so-called \"shifters\" within the Pokemon universe, who are capable of transforming into Pokemon. Some were natural, some were lab-created, some were \"awakened\", but all were hunted. The story meanders quite a bit, but so do the stories of the Pokemon games so that's kinda to be expected, and the prose is actually pretty good. It was a pretty neat read, and despite its lack of popularity (compared to some of the biggest stories, though it was received well) spawned several alternate stories in the same universe, even by other authors. I had considered writing one myself, and spent quite a while exchanging messages with the author, but I got busy with classes and other projects. Honestly what really happened is I discovered webcomics, but that's neither here nor there.\nIn any case, this is a drawing of Kitt, a Pikachu shifter and the main character of the main story, as well as her Pikachu form and a small Shinx named Anakin."
	},
	{
		filename: "emma.png", 
		alt: "Emma",
		title: "Emma, by What Lies Beyond - 12/31/24",
		text: "Emma is from \"Shifters and Shadows\" (see Kitt for details), and is a Charmander shifter. I did my best with each of these, but the story doesn't actually have very much in the way of physical descriptions of the characters."
	},
	{
		filename: "david.png",
		alt: "David",
		title: "David, by What Lies Beyond - 12/31/24",
		text: "This is David, a Piplup shifter from \"Shifters and Shadows\". See the description of Kitt's drawing for details."
	},
	{
		filename: "jake.png",
		alt: "Jake",
		title: "Jake, by What Lies Beyond - 12/31/24",
		text: "This is Jake, a special shifter from \"Shifters and Shadows\". See the description of Kitt's drawing for details on the story. Off the top of my head, he was a lab-raised clone, and his Pokemon form is a mix of Jolteon and Vaporeon. He's able to take on forms between full human and full Pokemon."
	},
	{
		filename: "cameron.png",
		alt: "Cameron",
		title: "Cameron, by What Lies Beyond - 12/31/24",
		text: "This is Cameron, a Riolu shifter from \"Shifters and Shadows\". If memory serves, he was an aura guardian in training before his untimely awakening got him exiled. Or he got found out, something like that. See the description of Kitt's drawing for details on the story."
	},
	{
		filename: "michael.png",
		alt: "Michael",
		title: "Michael, by What Lies Beyond - 12/31/24",
		text: "This is Michael, a special \"awakened\" shifter from \"Shifters and Shadows\". See the description of Kitt's drawing for details on the story. His Pokemon form is another special case, sort of a lanky Eevee with wings. I don't think anyone in-story really knows why."
	},
	{
		filename: "bane.png",
		alt: "Bane",
		title: "Bane, by What Lies Beyond - 12/31/24",
		text: "This is Bane, a Growlith hybrid from \"Shifters and Shadows\". See the description of Kitt's drawing for details. Hybrids are like shifters, but can't transform and can't hide. He's had it pretty rough. Probably can be considered the most fleshed-out character in the story, when including the other side stories. It really has been a long time - I should probably give those a read again."
	},
	{
		filename: "rain.png",
		alt: "Rain",
		title: "Rain - 2/2/25",
		text: "Just a quick sketch. Not much to this one. Drawn on the reMarkable 2, like much of my old work, and inverted in Gimp."
	},
	{
		filename: "chroma2.png",
		alt: "Chroma sketch",
		title: "Chroma sketch - 3/5/25",
		text: "Recent sketch of Chroma, just trying to get back into drawing in general."
	},
	{
		filename: "emsevell1.png",
		alt: "Emsevell sketch",
		title: "Emsevell sketch - 3/5/25",
		text: "Recent sketch of emsevell. No real reason."
	},
	{
		filename: "cammy1.png",
		alt: "Cammy sketch",
		title: "Cammy sketch - 3/5/25",
		text: "Quick sketch of Cammy. Again, no real reason."
	},
];

/* 
template:

	{
		filename: "",
		alt: "",
		title: "",
		text: ""
	},

*/


var imgdivs = [];


window.onload = function() {


	console.log("Test Function Onload");

	tabs = document.getElementsByClassName("tab");
	content = document.getElementsByClassName("content");

	for (var i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener("click", tabListener);
	}


	tabListener();

	populateTable();

	populateImages();

};

function tabListener(evt) {

	var target = evt ? evt.currentTarget : document.getElementById("abouttab");
	
	for (var i = 0; i < tabs.length; i++) {
		if (tabs[i].id == target.id) {
			tabs[i].setAttribute("style", "z-index: 1;font-weight:bold;");
			content[i].setAttribute("style", "display:block");
		} else {
			tabs[i].setAttribute("style", "background-color: grey; z-index: -1; border: 0px;");
			content[i].setAttribute("style", "display:none");
		}
	}

//	target.setAttribute("style", "background-color: white");
//	target.setAttribute("style", "display:block");

}


function populateTable() {


	var table = document.getElementById("log");


	var row;
	var entrycell;
	var datecell;
	var textcell;


	for (var i = tableEntries.length - 1; i > -1; i--) {

		row = document.createElement("tr");
		entrycell = document.createElement("td");
		datecell = document.createElement("td");
		textcell = document.createElement("td");


		entrycell.innerHTML = i + 1;
		datecell.innerHTML = tableEntries[i].date;
		textcell.innerHTML = tableEntries[i].text;


		row.appendChild(entrycell);
		row.appendChild(datecell);
		row.appendChild(textcell);
		table.appendChild(row);

	}
}

function populateImages() {

	var div;
	var img;
//	var a;
	var pdiv;
	var titlep;
	var bodyp;
	

	var container = document.getElementById("artcontent");

	for (var i = photos.length-1; i > -1; i--) {
		
		div = document.createElement("div");
		img = document.createElement("img");
		pdiv = document.createElement("div");
		titlep = document.createElement("p");
		bodyp = document.createElement("p");
//		a = document.createElement("a");
		
		div.setAttribute("class", "imagediv");
		img.setAttribute("src", "photos/" + photos[i].filename);
		img.setAttribute("alt", photos[i].alt);
		titlep.innerHTML = photos[i].title;
		titlep.setAttribute("class", "phototitle");
		bodyp.innerHTML = photos[i].text;
		bodyp.setAttribute("class", "phototext");
//		p.setAttribute("style", "display:none");
//		a.setAttribute("href", "photos/" + photos[i].filename); 
//		going to instead enlarge the picture when it is clicked on

//		a.appendChild(img);
//		div.appendChild(a);
		pdiv.appendChild(titlep);
		pdiv.appendChild(bodyp);
		div.appendChild(img);
		div.appendChild(pdiv);
		container.appendChild(div);
		img.addEventListener("click", enlargeImage);

		imgdivs[i] = div;

	}

}

function enlargeImage(event) {

	console.log(event);
	console.log(event.target);

	// this function enlarges the image and shows the text. Clicking on the image again, or clicking another image, will shrink it again. 
	var caller = event.target.parentElement;
	var ptemp;
	var imgtemp;
	var isAlreadyEnlarged = false;

	if (caller.hasAttribute("style")) {
		isAlreadyEnlarged = true;
	}

	// make sure all other ones have been 
	for (var i = 0; i < imgdivs.length; i++) {

		imgtemp = imgdivs[i].firstChild;
		ptemp = imgdivs[i].lastChild;
		imgdivs[i].removeAttribute("style");
		imgtemp.removeAttribute("style");
		ptemp.removeAttribute("style");

	}

	if (!isAlreadyEnlarged) {

		caller.setAttribute("style", "width:100%");
		caller.firstChild.setAttribute("style", "width: 35%");
		caller.lastChild.setAttribute("style", "width: 50%;display:inline-block;");

	}

}





