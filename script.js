alert("WOIII  \n HHEHHE");

    const umur = prompt("Masukkan umur kamu");
    if(umur >= 18) {
        const studio = prompt("pilih studio yang mau dipesan \n A : Studio A \n B : Studio B \n C : Studio C");

        if(studio == "A" || studio == "B" || studio == "C") {
            const film = prompt("pilih film \n 1 : AGAK LAEN \n 2 : MCR \n 3 : ROSE");
    
            let namaFilm;
            if(film == "1") {
                namaFilm = "AGAK LAEN";
            } else if (film == "2") {
                namaFilm = "MCR";
            } else if (film == "3");{
                namaFilm = "ROSE";
            }


            if (film == "1" || film == "2" || film == "3") {
                const nama = prompt("masukkan nama");
                alert(`BERIKUT TIKET MU \n Nama : ${nama} \n Umur : ${umur} \n Studio : ${studio} \n Film : ${namaFilm}`);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
            } else {
                alert("maaf film tidak ada");
            }
        } else {
            alert(" pilih studio dulu");
        }
    } else { 
        alert("bocil dilarang disini");
    }