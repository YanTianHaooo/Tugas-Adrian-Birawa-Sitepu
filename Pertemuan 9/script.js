function konversi(){

    let angka =
    parseInt(document.getElementById("angka").value);

    if(isNaN(angka)){

        document.getElementById("hasil").innerHTML =
        "Masukkan angka yang valid";

    }

    else{

        let biner = angka.toString(2);

        let oktal = angka.toString(8);

        let heksa = angka.toString(16).toUpperCase();

        document.getElementById("hasil").innerHTML =
        "Biner : " + biner + "<br>" +
        "Oktal : " + oktal + "<br>" +
        "Heksadesimal : " + heksa;

    }

}