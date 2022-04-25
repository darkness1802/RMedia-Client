import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

function Home() {
    let [searchInput, setSearchInput] = useState("")
    let [searchResults, setSearchResults] = useState([])

    const search = async () => {
        try {
            let res = await axios.post("http://localhost:8888/api/search", { keyword: searchInput })
            console.log(res.data)
            // RESPONSE trả về sau 5 giây, set được state nhưng không thể hiển thị
            setSearchResults(res.data)
        } catch (err) {
            setSearchResults([])
        }
    }
    return (
        <div>
            <input type="text" onChange={({ target }) => setSearchInput(target.value)} />
            <button onClick={search}>Search</button>

            {searchResults && searchResults.map((item, index) => {
                return <div key={index}>
                    <h4>{item?.title}</h4>
                    <small>{item?.ago} <Link to={`/play=${item?.videoId}`}>PLAY</Link></small>
                </div>
            })}

        </div>
    )
}

export default Home