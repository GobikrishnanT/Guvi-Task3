let request = new XMLHttpRequest();
request.open("GET" , "https://restcountries.eu/rest/v2/all" , true);
request.send();
request.onload = function() {
    var myRestCountry = JSON.parse(this.response);
    //console.log(myRestCountry);
    let myCountryinAsia = myRestCountry.filter((item) => item["region"] === "Asia");
    console.log(myCountryinAsia);

   
}
