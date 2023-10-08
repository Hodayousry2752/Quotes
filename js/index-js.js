
// var quoteOne = `<p>"The best revenge is massive success."</p>
// <p>--Frank Sinatra</p>`;

// var quoteTwo = `<p>"It's not what happens to you, but how you react to it that matters."</p>
// <p>--Epictetus</p>`

// var quoteThree =`<p>"Resentment is like drinking poison and waiting for your enemies to die."</p>
// <p>--Nelson Mandela</p>`

// var quoteFour = `<p>"You miss 100% of the shots you don't take."</p>
// <p>--Wayne Gretzy</p>`

// var quoteFive = `<p>"Do not take life too seriously. You will not get out alive."</p>
// <p>--Elbert Hubbard</P>`

var allQuotes=[`<div><p>"The best revenge is massive success."</p>
 <p>--Frank Sinatra</p></div>`,
`<div><p>"It's not what happens to you, but how you react to it that matters."</p>
 <p>--Epictetus</p></div>`,`<div><p>"Resentment is like drinking poison and waiting for your enemies to die."</p>
 <p>--Nelson Mandela</p></div>`,
 `<div><p>"You miss 100% of the shots you don't take."</p>
 <p>--Wayne Gretzy</p></div>`,
 `<div><p>"Do not take life too seriously. You will not get out alive."</p>
 <p>--Elbert Hubbard</P></div>`];

function addQuote(){
    var randomValue = allQuotes[Math.floor(Math.random()*allQuotes.length)];
    document.getElementById("demo").innerHTML=randomValue;
}

