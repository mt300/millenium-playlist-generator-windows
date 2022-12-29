

// document.addEventListener('DOMContentLoaded', () => {
//     const infoDisplay = document.getElementById('resultado');    

//     // window.addEventListener('DOMContentLoaded', function () {
//     //     // chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
//     //     //     chrome.tabs.sendMessage(tabs[0].id, {}, function (result) {
//     //     //         infoDisplay.innerHTML = result
//     //     //     });
//     //     //});
//     // });

// });
// let key = document.getElementById('text').value;
// let value = document.getElementById('').value;
let btn = document.getElementById("btn");
let search = document.getElementById("search");

let dict = {};


// merda nenhuma
// chrome.storage.sync.get("color", ({ color }) => {
//   btn.style.backgroundColor = color;
// });




chrome.storage.sync.get("dict", ({dict}) => {
	let keys =  Object.keys(dict);
	let values = Object.values(dict);
	// keys[1] = "teste";
	// values[1] = "picanha";
	// for (var i=0; i < keys.length; i++){
	// 	dict[keys[i]] = values[i];
	// };
	// dict[keys[1]] =  values[1];
	document.getElementById('result').innerHTML = keys ;

});

search.addEventListener("click", () => {
	chrome.storage.sync.get("dict",({dict}) =>{
		let inputKey = document.getElementById('key').value;
		let keys = Object.keys(dict);
		//let values = Object.values(dict);
			
		document.getElementById('message').innerHTML = "Chave encontrada";
		document.getElementById('result').innerHTML = "Chave:" + keys.find(key => dict[key] === dict[inputKey]) +
														"<br/>Texto:" + dict[inputKey];
	});
});

btn.addEventListener("click",() =>{
	let key = document.getElementById('key').value;
	let value = document.getElementById('value').value;
	chrome.storage.sync.get("dict",({dict}) => {
		dict[key] = value;
		document.getElementById('message').innerHTML = "Novo atalho cadastrado!!" + "<br/>" ;
		document.getElementById('result').innerHTML =  "Chave: " + key + "<br/>" + "Texto:" + value;
		
		chrome.storage.sync.set({dict});
		// let keys = Object.keys(dict);
		// let values = Object.values(dict);
	});

	// chrome.runtime.sendMessage('click', (response) =>{
	// 	 document.getElementById('result').innerHTML = response + key.value + value.value;

	// });

})



// document.addEventListener('DOMContentLoaded', () => {
// 	let button = document.getElementById('btn');
// 	if(button){


// 		console.log("tudo certo na bahia");
// 		button.addEventListener("click", () => {
// 			//querying chrome tabs??
// 			// let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
// 			//send message to background.js
// 			chrome.runtime.sendMessage('click', (response) => {
// 				let dict = response;
// 				console.log(dict["receita"]);
// 			});
			
// 		});
// 	}else{
// 		console.log("tudo merda")
// 	}
// });



// document.addEventListener('DOMContentLoaded', function(){

// document.getElementById('#btn').addEventListener('click', function(){

// 	document.getElementById('#resultado').innerHTML =  key;
// })

// // document.querySelector('#btn').addEventListener('click', function(){
// let key = document.getElementById('#text-key').value;
// // 	let key = document.querySelector('#text-key').value;
// // 	let value = document.querySelector('#text_value').value;
// // })

// // var dict = {};

// // function append(text_key, text_value){
	
// //     dict[text_key] = text_value;
// //     console.log("printmsg");
// // }
// })