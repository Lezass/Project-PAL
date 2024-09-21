let list = []

function Addlist() {
    list.push({
        barang: document.getElementById("NamaBarang").value,
        harga: document.getElementById("HargaBarang").value,
    });

    this.showlist();
}

function showlist() {
    let content="";
    let total=0;
    console.log(list);
    list.forEach((listen, index) => {
        content+=`
        <div class="hasil">
        <h4>${listen.barang}</h4>
        <h4>${listen.harga}</h4>
        <button onclick="Remove(${index})" class="RemoveBtn">Remove</button>
        </div>`;
        total+=parseInt(listen.harga)
    });
    document.getElementById("barangbarang").innerHTML = content;
    document.querySelector("h3").textContent = `Total: Rp. ${total}`;
}

function Remove(index) {
    list.splice(index,1);
    showlist();
}