document.getElementById("more-info-btn").addEventListener("click", function() {
    const moreInfo = document.getElementById("more-info");
    moreInfo.classList.toggle("hidden");
    this.innerText = moreInfo.classList.contains("hidden") ? "More Info" : "Less Info";
});