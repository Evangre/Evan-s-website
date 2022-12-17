function navigateToPageAlgo() {
    window.location = "algorithmsAndProblemSolving.html";
}
function navigateToPageDatabase() {
    window.location = "DatabaseConceptsDesign.html";
}
function navigateToPageFundamentalsNumericComputing() {
    window.location = "FundamentalsNumericComputing.html";
}
function navigateToPageOS() {
    window.location = "OperatingSystems.html"
}

function scrollToTop() {
    var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentScroll - currentScroll / 5);
    }
}