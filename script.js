function getCookiesAsObject() {
    let cookiesArray = document.cookie.split("; ");
    let cookieObject = {};

    cookiesArray.forEach((element) => {
        let cookieData = element.split("=");
        cookieObject[cookieData[0]] = cookieData[1];
    })
    return cookieObject;
}

document.cookie = "_name=Andrei Oiegar; expires=Mon, 25 May 2020 12:00:00 UTC; path=/";

function cookiesSetting(){
    const cookieObject = getCookiesAsObject();

    const radioBtns = document.getElementsByName("language");


    console.log(radioBtns);


    for(let i = 0; i < radioBtns.length; i++){
        if(radioBtns[i].value === cookieObject.language){
            radioBtns[i].checked = "checked";
        }

        radioBtns[i].addEventListener("click", (event) => {
            document.cookie = `language=${event.target.value}`
        })
    }
}
cookiesSetting();
// console.log(document.cookie)


