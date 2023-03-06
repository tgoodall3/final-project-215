import { changePageContent } from "../model/model.js";


function initlisteners(){

    $("nav #links a").click(function(e){
        let btnID = e.currentTarget.id;
        changePageContent(btnID);
        detaillisteners();
        bloglisteners();
    });

}

function detaillisteners(){
    $(".gallery a").click(function(e){
        let btnID = e.currentTarget.id;
        changePageContent(btnID);
     
    });
    
}

function bloglisteners(){
    $(".events a").click(function(e){
        let btnID = e.currentTarget.id;
        changePageContent(btnID);
    });
    
}





$(document).ready(function(){
    initlisteners();
    changePageContent("home");

})