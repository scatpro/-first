
function getTitleAndCompare(expectedTitle) {
    return browser.getTitle().then(title => {
        return title === expectedTitle;
    });
}


module.exports = getTitleAndCompare;
