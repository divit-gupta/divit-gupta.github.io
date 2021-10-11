// var home = document.getElementById("home");
// var about = document.getElementById("about");
// var education = document.getElementById("education");
// var achievements = document.getElementById("achievements");
// const tabs=[ home , about , education , achievements ];
// about.style.display="none";
// education.style.display="none";
// achievements.style.display="none";

const months=[ "January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December" ];
const nav_tabs=[ document.getElementById("nav_home") , document.getElementById("nav_about") , document.getElementById("nav_education") , document.getElementById("nav_achievements") ];
const tabs=[ document.getElementById("home") , document.getElementById("about") , document.getElementById("education") , document.getElementById("achievements") ];
var curr_tab=0; 
for(let i=0;i<tabs.length;i++)
{
    tabs[i].style.display="none";
}
tabs[curr_tab].style.display="block";
nav_tabs[curr_tab].style.backgroundColor = "black";
nav_tabs[curr_tab].style.color = "white";

function show(new_tab)
{
    tabs[curr_tab].style.display="none";
    if(new_tab==2)
    tabs[new_tab].style.display="flex";
    else
    tabs[new_tab].style.display="block";
    nav_tabs[curr_tab].style.backgroundColor = "transparent";
    nav_tabs[curr_tab].style.color = "rgb(173, 173, 173)";
    // nav_tabs[curr_tab].style.opacity = 0.8;
    nav_tabs[new_tab].style.backgroundColor = "black";
    nav_tabs[new_tab].style.color = "white";
    curr_tab=new_tab;
}

function hover_entry(hov_in)
{
    if(curr_tab!=hov_in)
        nav_tabs[hov_in].style.backgroundColor = "rgb(83, 83, 83)";
}

function hover_leave(hov_out)
{
    if(curr_tab!=hov_out)
        nav_tabs[hov_out].style.backgroundColor = "rgb(47, 47, 47)";
}

function date_time()
{
    let timer=970;
    let curr_date = new Date()
    let h = curr_date.getHours() ;
    let ampm = h >= 12 ? "PM" : "AM" ;
    h = ( h > 12 ) ? h-12 : h ;
    h = ( h == 0 ) ? 12 : h ;
    h = ( h.toString().length == 1 ) ? "0" + h.toString() : h ;

    let m = curr_date.getMinutes() ;
    m = ( m.toString().length == 1 ) ? "0" + m.toString() : m ;

    let s =curr_date.getSeconds() ;
    s = ( s.toString().length == 1 ) ? "0" + s.toString() : s ;
    
    let M = months[curr_date.getMonth()] ;

    let D = curr_date.getDate() ;

    let Y = curr_date.getFullYear() ;

    let final= h + ":" + m + ":" + s + " " + ampm + "\n" + M + " " + D + ", " + Y ;
    document.getElementById("dt").innerText = final;
    setTimeout('date_time()',timer)
}