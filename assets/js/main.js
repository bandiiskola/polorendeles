function Szin()
{
    var szin=document.getElementById("valaszt").value
    document.getElementById("kep").style.filter="grayscale(0)"
    switch(szin)
    {
        case "zold":
            document.getElementById("kep").src="assets/images/polo-zold.png"
            break;
        case "kek":
            document.getElementById("kep").src="assets/images/polo-kek.png"
            break;
        case "piros":
            document.getElementById("kep").src="assets/images/polo-piros.png"
            break;
        case "narancs":
            document.getElementById("kep").src="assets/images/polo-narancs.png"
            break;
        case "szurke":
            document.getElementById("kep").style.filter="grayscale(1)"
            break;
    }
}

function Gepeles()
{
    document.getElementById("felirat").innerHTML=document.getElementById("betu").value.toUpperCase()
    if(document.getElementById("szam").value>=1&&document.getElementById("szam").value<=99)
    {
        document.getElementById("sorszam").innerHTML=document.getElementById("szam").value
    }
    else if(document.getElementById("szam").value<1)
    {
        document.getElementById("sorszam").innerHTML=1
    }
    else if(document.getElementById("szam").value>99)
    {
        document.getElementById("sorszam").innerHTML=99
    }
}