function Szin()
{
    var szin=document.getElementById("valaszt").value
    console.log(szin)
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
        case "szuke":
            break;
    }
}