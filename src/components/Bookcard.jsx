export default function Bookcard({ title, cover_edition_key, first_publish_year, author_name, ratings_average, id_amazon }) {

    console.log("Title:", title)
    console.log("cover", cover_edition_key)
    console.log("First Publish Year:", first_publish_year)
    console.log("Author Name:", author_name)
    console.log("Ratings Average:", ratings_average)
    console.log("amazon ID", id_amazon)

    return (
        <div className="book-card">
            <h3>{title}</h3>
            {cover_edition_key && (<img src={`https://covers.openlibrary.org/b/olid/${cover_edition_key}-M.jpg`} alt="Book Cover" />)}
            <p>By {author_name}</p>
            <p>First Published: {first_publish_year}</p>
            <p>Average Rating: {ratings_average}</p>
            {id_amazon && (<a href={`https://www.amazon.com/s?k=${id_amazon}`}>Get on Amazon</a>
            )}
        </div>
    );
}


/*
Brukte chat gpt for å ordne slik at det kun vises en 'knapp' på bookcardet hvis det var en id_amazon som kunne hentes

Spørsmål til chat gpt:
export default function Bookcard({ title, first_publish_year, author_name, ratings_average, id_amazon }) {

    console.log("Title:", title);
    console.log("First Publish Year:", first_publish_year);
    console.log("Author Name:", author_name);
    console.log("Ratings Average:", ratings_average);
    console.log("amazon ID", id_amazon)



    return (
        <div className="book-card">
            <h3>{title}</h3>
            <p>Author: {author_name}</p>
            <p>First Published: {first_publish_year}</p>
            <p>Average Rating: {ratings_average}</p>
            <a href={`https://www.amazon.com/s?k=${id_amazon}`}>Buy on Amazon</a>
        </div>
    );
}

how can i make it so it api call is 'undefined' no button is shown

resultat tilbake:
You can conditionally render the "Buy on Amazon" link based on whether the id_amazon is provided or not. If id_amazon is undefined, you can choose not to render the link. Here's how you can modify your Bookcard component to achieve this:

export default function Bookcard({ title, first_publish_year, author_name, ratings_average, id_amazon }) {
    console.log("Title:", title);
    console.log("First Publish Year:", first_publish_year);
    console.log("Author Name:", author_name);
    console.log("Ratings Average:", ratings_average);
    console.log("amazon ID:", id_amazon);

    return (
        <div className="book-card">
            <h3>{title}</h3>
            <p>Author: {author_name}</p>
            <p>First Published: {first_publish_year}</p>
            <p>Average Rating: {ratings_average}</p>
            {id_amazon && (
                <a href={`https://www.amazon.com/s?k=${id_amazon}`}>Buy on Amazon</a>
            )}
        </div>
    );
}
In this modified version, the "Buy on Amazon" link will only be rendered if id_amazon is truthy (i.e., not undefined). If id_amazon is undefined, the link won't be rendered at all. This way, the button will only be shown if there's a valid Amazon ID available.
*/