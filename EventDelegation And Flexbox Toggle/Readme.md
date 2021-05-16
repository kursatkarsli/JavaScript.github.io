<!-- Event Delegetion yani sona yazılan Boolean
    EventCapture=>(
    True İçin =>

    Bunun anlamı eklenen event ve çalıştırılan fonksiyonun Önce En dıştaki Event Çalışır Enson içteki Element Çalışır.)
    EventBubble(
    False için =>
    Bunun anlamı ise Önce İçteki Event Çalışır Sonra Dıştaki Çalışır. )

    Event Delegation =>

        Bunda ise add eventlistener mapping yaparak tüm childleri alır ve bir control stateti yazarak id-tag-name gibi parametreler yoluyla tüm childlara ortak event ekleyebilirsin


     <!-- document.querySelector(".anaclas").addEventListener("click", e => {
                if (e.target.tagName === "div") {
                    console.log(`Kutu-1 Tıklandı,\nKutu-2 Tıklandı,\nKutu-3 Tıklandı`)
                }
            }, true); -->
