import React, { useEffect, useState } from 'react';

const AnimeHeader2 = () => {  
  const [date, setDate] = useState("")
  const Background = "https://media.giphy.com/media/Id71NFYfSBOKv2IexE/giphy.gif"

  useEffect(() => { 
    // const list = "http://localhost:3000/Animate/data/anime_list.json"
    const list = "https://s20016.github.io/Animate/data/anime_list.json"
    fetch(list)
      .then(res => res.json())
      .then(json => { setDate(json.update) })

  }, [])

  return (
    <div className="header2" style={{backgroundImage: "url(" + Background + ")"}}>
      <header id="title">
        <div className="mainHeader">Anime List</div>
      </header>
      <section className="subHeader">
        <div className="update">
          <p>Updated: {date}</p>
        </div>
        <div className="legend">
          <ul>
            <li className="legendM">Movie</li>
            <li className="legendR">Watch Count</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default AnimeHeader2
