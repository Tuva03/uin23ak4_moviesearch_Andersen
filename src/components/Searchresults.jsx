import { useState } from "react"
import Bookcard from "./Bookcard"

export default function Searchresults({ content, setQuery }) {
    const [search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.length > 2) {
            setQuery(search)
        }
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search up book:</label>
                <input type="text" id="search" placeholder="Write here..." onChange={handleChange}></input>
                <input type="submit" value="Søk"></input>
            </form>
            <ul className="book-list">
                {content?.map(book => (
                    <li key={book.key}>
                        <Bookcard
                            title={book.title}
                            cover_edition_key={book.cover_edition_key}
                            first_publish_year={book.first_publish_year}
                            author_name={book.author_name}
                            ratings_average={book.ratings_average}
                            id_amazon={book.id_amazon}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}
