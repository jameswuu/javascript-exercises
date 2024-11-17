const getTheTitles = function(books) {
    let titles = []
    for (let book of books) {
        // Store the title in a list
        titles.push(book.title);
    }
    return (titles);

    // Alternative
    return books.map(book => book.title);

};

// Do not edit below this line
module.exports = getTheTitles;
