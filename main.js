$(document).ready(function () {

    document = document.getElementById("ajeuter")
    //console.log(document)



    prix = 199;
    document.addEventListener("click", function () {




        let numero = document.getElementById("num").value
        total = prix * numero
        //console.log("le montant total a payer est  : ", total)

        if (!numero) {
            //document.getElementById("total").innerHTML = "hello "
        } else {
            document.getElementById("total").innerHTML = `<p>"le montant total à payer est de  : " ${total}  €</p>`
        }
    });

    // article = 1;
    // //console.log("Vous avez",article,"dans votre panier")
    // if (article == 0) {
    //     console.log('Panier vide');
    // } else {
    //     console.log("Vous avez", article, "dans votre panier")
    // }

    //////////////////////////////////////////////////////////////////////////////////
    //// BOUTON CONVERSE








    let lesconv = document.getElementById("converse");
    //console.log(lesconv)
    let affichageart = document.getElementById("mesarticles").innerHTML
    let prixarticle = document.getElementById("prixarticle").innerHTML
    count = 0

    lesconv.addEventListener("click", function () {
        //let affichageart = document.getElementById("mesarticles")



        let conversB = document.getElementById("converse").innerHTML = "<p> Merci pour votre achat </p>"
        //let nouveautest = document.getElementById("mesarticles").innerHTML
        //console.log(nouveautest)


        affichericila = document.getElementById("articleblanc").value = affichageart //nom

        prixaffichage = document.getElementById("prixaffiche").value = prixarticle //prix

        console.log(affichericila) //nom

        console.log(prixaffichage) //prix

        //let counter = console.count("");


        count += 1;
        console.log(count);
        totall = count * prix
        console.log(totall)

        document.getElementById("total").innerHTML = `<p>"Vous avez ajouté  : " ${count} "articles ce qui vous fait : "  ${totall} € </p> `



        //console.log(counter)

        //  sessionStorage.setItem("prix", prixaffichage );
        //  sessionStorage.setItem('Nom', affichericila );



        //  let data = sessionStorage.getItem(prixaffichage)


        // console.log(data)

        //console.log(prixaffichage)


        //conversB = document.getElementById("converse").value = 1;
        //console.log(conversB)

        //alert("1 article ajouter au panier");




    });













    //// BOUTON CHAUSSURE BLANCHE

    let chaussB = document.getElementById("nikeblanche")
    chaussB.addEventListener("click", function () {

        chaussB = document.getElementById("nikeblanche").innerHTML = "<p> Merci pour votre achat </p>"
        //alert("1 article ajouter au panier");
        //console.log(chaussB)
    });



    /////////BOUTON CHAUSSURES BLEU FONCE

    let nikeBle = document.getElementById("nikebleu")
    nikeBle.addEventListener("click", function () {

        nikeBle = document.getElementById("nikebleu").innerHTML = "<p> Merci pour votre achat </p>"
        //alert("1 article ajouter au panier");
        //console.log(nikeBle)
    });




    //////BOUTON CHAUSSURES BLEU CIEL

    let nikebf = document.getElementById("nikeciel")
    nikebf.addEventListener("click", function () {

        nikebf = document.getElementById("nikeciel").innerHTML = "<p> Merci pour votre achat </p>"
        //alert("1 article ajouter au panier");
        //console.log(nikebf)
    });


    // function retourétat(lid){

    //     var lebou = document.getElementById(lid);



    // }
    // originalHTML = document.getElementById("converse")
    // console.log

    // document.getElementById("converse").addEventListener("focusout", function(){
    //     originalHTML = document.getElementById("converse")

    //     console.log(originalHTML)
    //     document.getElementById("converse").innerHTML = originalHTML


    // });


    // display: contents;
    // display: none;



});