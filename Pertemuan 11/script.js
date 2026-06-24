class Search {
    constructor(data) {
        this.data = data;
    }

    equal(text, keyword) {
        return text.toLowerCase().indexOf(keyword.toLowerCase()) === -1;
    }

    byTitle(keyword) {
        for (let i = 0; i < this.data.length; i++) {
            let book = this.data[i];
            let title = book.querySelector(".title").innerText;
            
            if (this.equal(title, keyword)) {
                book.style.display = "none";
            } else {
                book.style.display = "";
            }
        }
    }
}

let keyword = document.querySelector("#keyword");

function searching() {
    let books = document.querySelectorAll(".book");
    let search = new Search(books);
    
    search.byTitle(keyword.value);
}

keyword.addEventListener("keyup", searching);