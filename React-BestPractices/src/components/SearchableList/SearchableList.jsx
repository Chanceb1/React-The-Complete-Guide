import { useState, useRef } from 'react';

export default function SearchableList({ items, itemKeyFn, children }) {
    const lastChange = useRef(null);

    const [searchTerm, setSearchTerm] = useState(''); // set the initial search term to an empty string

    const searchResults = items.filter((item) => (
        JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
    ));

    function handleChange(event) {
        if (lastChange.current) {
            clearTimeout(lastChange.current);
        }

        lastChange.current = setTimeout(() => {
            lastChange.current = null;
            setSearchTerm(event.target.value); // set the search term to the value of text set by user in the input
        }, 500);
    }

    return (
        <div className="searchable-list">
            <input type="search" placeholder="Search" onChange={handleChange} />
            <ul>
                {searchResults.map((item) => (
                    <li key={itemKeyFn(item)}>
                        {children(item)}
                    </li>
                ))}
            </ul>
        </div>
    );
}