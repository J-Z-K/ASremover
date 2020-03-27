chrome.runtime.onMessage.addListener(function(reqest) {

})
let tags = document.querySelectorAll("#formWiadomosci > div > div > table > tbody > tr > td:nth-child(2) > table.decorated.stretch > tbody > tr")
let dleteButton = document.querySelector("#formWiadomosci > div > div > table > tbody > tr > td:nth-child(2) > table:nth-child(1) > tbody > tr > td:nth-child(1) > input");
let toDelete = false;
console.log(tags)
tags.forEach(x => {
    if(x.innerText.includes("Aneta")){
        x.querySelector("td > input").click()
        toDelete = true;
    }
})

if(toDelete){
    dleteButton.click()
    document.querySelector("div.warning-box.draggable.scrollable.question.ui-draggable > div.warning-buttons > input:nth-child(1)").click()
}
