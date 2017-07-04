
var page = 1;
var count = Math.ceil(document.getElementsByClassName('project').length/3);
var right = document.getElementById('rarr');
var left= document.getElementById('larr');
var counter = document.getElementById('count');
var  pr= document.getElementById('prwrap')

right.onclick=function () {
    page+=page<count?1:0;
    counter.textContent = page;
    pr.scrollBy({
        top: 0, // could be negative value
        left: 600,
        behavior: 'smooth'
    });
};
left.onclick=function () {
    page-=page>1?1:0;
    counter.textContent = page;
    pr.scrollBy({
        top: 0, // could be negative value
        left: -600,
        behavior: 'smooth'
    });
};

var anchors = document.getElementsByClassName('nav_el');
for(var i = 0; i < anchors.length; i++) {
    var anchor = anchors[i];
    anchor.onclick = function(e) {
        for(var j = 0; j < anchors.length; j++) {
            var a = anchors[j];
            a.style.color="white";
        };
        var off = document.getElementById(e.target.id.replace("n_", "")).getBoundingClientRect().top-180;
        document.getElementById("pgwr").scrollBy({
            top: off,
            left: 0,
            behavior: 'smooth'
        });
         e.target.style.color="gold";
    }
};

document.getElementById("pgwr").onscroll=function () {
   var wr=document. getElementById("pgwr");
    var title=document. getElementById("title");

    var els = ["intro", "projects", "contacts"];
    var titles =  ["Welcome", "Projects", "Contacts"];
    for(var i=0;i<els.length;i++){
        if(document.getElementById(els[i]).getBoundingClientRect().top<wr.scrollTop){
            title.textContent=titles[i];
        }
    }
};
