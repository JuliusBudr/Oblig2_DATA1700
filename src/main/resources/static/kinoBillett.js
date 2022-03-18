let billettReg = [];

function kjopBillett() {
    if (document.getElementById("filmMeny").value === "Velg film her" ||
        document.getElementById("antall").value.length === 0 ||
        document.getElementById("fornavn").value.length === 0 ||
        document.getElementById("etternavn").value.length === 0 ||
        document.getElementById("telefonnr").value.length === 0 ||
        document.getElementById("epost").value.length === 0) {
        billettReg.push(null);
    } else {
        billettReg = [];
    }

    if (document.getElementById("filmMeny").value === "Velg film her") {
        document.getElementById("tomFilm").innerHTML = "Velg film";
    } else {
        document.getElementById("tomFilm").innerHTML = "";
    }

    if (document.getElementById("antall").value.length === 0) {
        document.getElementById("tomAntall").innerHTML = "Må skrive noe inn i antall";
    } else {
        document.getElementById("tomAntall").innerHTML = "";
    }

    if (document.getElementById("fornavn").value.length === 0) {
        document.getElementById("tomFornavn").innerHTML = "Må skrive noe inn i fornavnet";
    } else {
        document.getElementById("tomFornavn").innerHTML = "";
    }

    if (document.getElementById("etternavn").value.length === 0) {
        document.getElementById("tomEtternavn").innerHTML = "Må skrive noe inn i etternavnet";
    } else {
        document.getElementById("tomEtternavn").innerHTML = "";
    }

    if (document.getElementById("telefonnr").value.length === 0) {
        document.getElementById("tomTelefonnr").innerHTML = "Må skrive noe inn i telefonnr";
    } else {
        document.getElementById("tomTelefonnr").innerHTML = "";
    }

    if (document.getElementById("epost").value.length === 0) {
        document.getElementById("tomEpost").innerHTML = "Må skrive noe inn i epost";
    } else {
        document.getElementById("tomEpost").innerHTML = "";
    }

    const billett = {
        film: $("#film").val(),
        antall: $("#antall").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        telefonnr: $("#telefonnr").val(),
        epost: $("#epost").val()
    };
    $.post("/lagre", billett, function() {
        hentAlle();
    });
    function hentAlle() {
        $.get("/hentAlle", function(data) {
            formaterData(data);
        });
    }

    function formaterData(billetter) {
        let ut = "<table><tr><th>Antall</th><th>Film</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>";
        for (const billett of billetter){
            ut+="<tr><td>"+billett.antall+"</td><td>"+billett.film+"</td><td>"+billett.fornavn+"</td>" +
                "<td>"+billett.etternavn+"</td><td>"+billett.telefonnr+"</td><td>"+billett.epost+"</td></tr>";
        }
        ut+="</table>";
        $("#billetter").html(ut);
    }
}

function slettBilletter() {
    $.get("/slettAlle", function() {
        hentAlle();
    });
    billettReg = [];
    document.getElementById("billetter").innerHTML = "";
}