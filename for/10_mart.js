
let mahsulotlar = ["olma", "olcha" , "gilos" , "tarvuz"]
let narx = [30000 , 20000 , 50000 , 80000]
let yuz =100; chegirma = 10;
for (let i = 0; i < mahsulotlar.length; i++) {
    let b = mahsulotlar[i] + ": " + narx[i]
    if (narx[i]<50000) {
        console.log(b)
    }
    if (narx[i] >= 50000) {
        let foiz = narx[i] * chegirma / yuz
        let chegirmaNarhi = narx[i] - foiz
        console.log(b + " va bu maxsulot 10%li chegirmada, " + chegirmaNarhi+" so'mga harid qilishingiz mumkun ")
    }

}
