"use strict";

window.addEventListener("DOMContentLoaded", (event) => {



function validateForm(){

    let submit = document.getElementById('submit_form');
    let emptyStatus;
    let emptyField;
    let nameEmpty;
    let emailEmpty;
    let phoneEmpty;
    let urlEmpty;
    let dateEmpty;
    let regxName;
    let regxPhone;
    let regxUrl;
    let regEmail;


    submit.addEventListener("click", function(event){

        event.preventDefault();

        let status = document.getElementById('status-select').value;
        let name = document.getElementById('input-name').value;
        let email = document.getElementById('input-email').value;
        let phone = document.getElementById('input-phone').value;
        let url = document.getElementById('input-url').value;
        let date = document.getElementById('input-date').value;


        if(status=== "Select option"){

            emptyStatus="Merci de renseigner votre status";

        }else{
            emptyStatus="merci";

        }
            regxName=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        if (regxName.test(name)) {
            nameEmpty = "Votre nom est valide";
            document.getElementById('input-name').classList.add("validate-form");
            document.getElementById('input-name').classList.remove("invalid-form");
        }else {
            nameEmpty="Vous devez rentrer un nom valide";
            document.getElementById('input-name').classList.remove("validate-form");
            document.getElementById('input-name').classList.add("invalid-form");
        }
        regEmail=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        if (regEmail.test(email)) {
            emailEmpty = "Email Valide";
            document.getElementById('input-email').classList.add("validate-form");
            document.getElementById('input-email').classList.remove("invalid-form");

        }else {
            emailEmpty="Ceci n'est pas un email valide";
            document.getElementById('input-email').classList.remove("validate-form");
            document.getElementById('input-email').classList.add("invalid-form");
        }
        regxPhone=/^((\+)33|0)[1-9](\d{2}){4}$/;
        if (regxPhone.test(phone)){

           phoneEmpty = " numéro de téléphone valide";
            document.getElementById('input-phone').classList.add("validate-form");
            document.getElementById('input-phone').classList.remove("invalid-form");
        }else {
            phoneEmpty="champ non valide";
            document.getElementById('input-phone').classList.add("invalid-form");
            document.getElementById('input-phone').classList.remove("validate-form");
        }
        regxUrl=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
        if (regxUrl.test(url)){
           urlEmpty = "Url Valid";
            document.getElementById('input-url').classList.add("validate-form");
            document.getElementById('input-url').classList.remove("invalid-form");

        }else {
           urlEmpty="Le champs est non valide";
            document.getElementById('input-url').classList.add("invalid-form");
            document.getElementById('input-url').classList.remove("validate-form");
        }
        if (date===""){
           dateEmpty = "Vous devez renseignez votre date de naissance";
            document.getElementById('input-date').classList.add("invalid-form");
            document.getElementById('input-date').classList.remove("validate-form");

        }else {
           dateEmpty="champ Valide";
            document.getElementById('input-date').classList.add("validate-form");
            document.getElementById('input-date').classList.remove("invalid-for");
        }
        if(status !== "Select option" &&  regxName.test(name) && regEmail.test(email) && regxPhone.test(phone) && regxUrl.test(url) && date !==""){


            emptyField="Votre enregistrement à bien été effectué";
        }else{
            emptyField="Tous les champs doivent etre remplis";
        }



              document.getElementById('blank_status').innerHTML=emptyStatus;
           document.getElementById('blank_name').innerHTML=nameEmpty;
           document.getElementById('blank_email').innerHTML=emailEmpty;
           document.getElementById('blank_phone').innerHTML=phoneEmpty;
           document.getElementById('blank_url').innerHTML=urlEmpty;
           document.getElementById('blank_date').innerHTML=dateEmpty;
           document.getElementById('blank_subcription').innerHTML=emptyField;


    });

}
validateForm()


});