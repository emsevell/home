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
	}
];

var photos = [
	"1.png", 
	"2.png", 
	"3.png",
	"4.png",
	"5.png",
	"6.png",
	"7.png"
];


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
	var a;

	var container = document.getElementById("artcontent");

	for (var i = photos.length-1; i > -1; i--) {
		
		div = document.createElement("div");
		img = document.createElement("img");
		a = document.createElement("a");
		
		div.setAttribute("class", "imagediv");
		img.setAttribute("src", "photos/" + photos[i]);
		a.setAttribute("href", "photos/" + photos[i]);

		a.appendChild(img);
		div.appendChild(a);
		container.appendChild(div);

	}

}
