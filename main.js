
document = document.getElementById("ajeuter")



prix = 199;
document.addEventListener("click", function () {




    let numero = document.getElementById("num").value
    total = prix * numero
    console.log("le montant total a payer est  : ",total )

    if (!numero) {
        //document.getElementById("total").innerHTML = "hello "
    } else {
        document.getElementById("total").innerHTML = `<p>"le montant total à payer est de  : " ${total}  </p>`
    }
});