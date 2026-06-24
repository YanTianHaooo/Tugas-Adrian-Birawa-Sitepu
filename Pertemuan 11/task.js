class Search {
    constructor(data) {
        this.data = data;
    }

    // Return true jika keyword TIDAK COCOK dengan teks target
    equal(text, keyword) {
        return text.toLowerCase().indexOf(keyword.toLowerCase()) === -1;
    }

    // Fungsi filter utama mencakup semua radio button kriteria Task
    filterData(keyword, type, yearTarget = "") {
        for (let i = 0; i < this.data.length; i++) {
            let book = this.data[i];
            let matchText = "";
            let isMatch = false;

            if (type === "title") {
                matchText = book.querySelector(".title").innerText;
                isMatch = !this.equal(matchText, keyword);
            } 
            else if (type === "author") {
                matchText = book.querySelector(".author").innerText;
                isMatch = !this.equal(matchText, keyword);
            } 
            else if (type === "publisher") {
                matchText = book.querySelector(".publisher").innerText;
                isMatch = !this.equal(matchText, keyword);
            } 
            else if (type === "title_year") {
                let titleText = book.querySelector(".title").innerText;
                let yearText = book.querySelector(".year").innerText;
                // Cocok jika judul mengandung keyword DAN tahunnya persis sama
                let titleMatch = !this.equal(titleText, keyword);
                let yearMatch = yearText.trim() === yearTarget.trim();
                isMatch = titleMatch && yearMatch;
            }

            // Atur tampilan DOM berdasarkan kecocokan pencarian
            if (isMatch) {
                book.style.display = ""; // Tampilkan (tetap menyamping)
            } else {
                book.style.display = "none"; // Sembunyikan
            }
        }
    }
}

// Inisialisasi Element DOM
const keywordInput = document.querySelector("#keyword");
const yearInput = document.querySelector("#year_input");
const filterRadios = document.querySelectorAll('input[name="filter"]');

function runningSearch() {
    const books = document.querySelectorAll(".book");
    const searchObj = new Search(books);
    
    // Cari tahu radio button mana yang aktif saat ini
    let activeFilter = "title";
    filterRadios.forEach(radio => {
        if (radio.checked) {
            activeFilter = radio.value;
        }
    });

    searchObj.filterData(keywordInput.value, activeFilter, yearInput.value);
}

// EVENT LISTENERS

// 1. Trigger ketika pengguna mengetik kata kunci
keywordInput.addEventListener("keyup", runningSearch);

// 2. Trigger ketika pengguna mengubah angka tahun
yearInput.addEventListener("keyup", runningSearch);
yearInput.addEventListener("change", runningSearch);

// 3. Trigger langsung saat pengguna mengklik opsi filter (Radio Button)
filterRadios.forEach(radio => {
    radio.addEventListener("change", runningSearch);
});