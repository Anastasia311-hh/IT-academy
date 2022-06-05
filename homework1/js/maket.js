var cards=[
    {
        imgUrl:"img/blackboard.png",
        titel: "Niche:",
        secondtitel:"Nightshade Snowboard - Women's - 2019/2020",

    }
]
var contentdiv = document.querySelector ('#contentdiv ');
var htmlStr = '';

for(var i=0;cards.length; i++){
    htmlStr+=
    <div id='one'>
         <img src="${cards[i].imgUrl}" widht='240px' height= '334px' alt=''></img>
        <a><span>${cards[i].titel}</span>${cards[i].secondtitel}</a>
    </div>  
}
div.innerHTML = htmlStr