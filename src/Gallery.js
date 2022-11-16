import React, {useEffect, useState} from "react";
import Form from "./Form";

function Gallery() {
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/creations")
        .then((r) => r.json())
        .then((gallery) => setGallery(gallery))
    }, [])

    function handleAddGallery(newGallery) {
        setGallery([...gallery, newGallery])
    }

    const displayGallery = gallery.map((g) => {
        return <figure key={g.id}>
                <figcaption className="gtitle">{g.title}</figcaption>
                <figcaption className="gcomments">{g.comments}</figcaption>
                <img className="gimage" src={g.image} alt={g.title}></img>
                <div class="gap"></div>
                <hr></hr>
               </figure>
    })

    return (
        <div>
            <Form addAddGallery={handleAddGallery}/>
            <header className="header"></header>
            {displayGallery}
        </div>
    )
}

export default Gallery;