import React, {useState} from "react";

function Form({onAddGallery}) {
  const [form, setForm] = useState({
    title: "",
    image: "",
    comments: "",
  });

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setForm({...form, [name]: value,});
  };

  function handleSubmit(e) {
    e.preventDefault()
    const newGallery = {
      title: form.title,
      image: form.image,
      comments: form.comments,
      };
    fetch("http://localhost:3000/creations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGallery),
    })
    .then((r) => r.json())
    .then(onAddGallery);
  };
  
    return (
        <div className="brownie-creation">
         <header className="header"></header>
         <h2 className="submission">Brownie Creations Submission Form</h2>
         <form onSubmit={handleSubmit}>
          <input 
            onChange={handleChange}
            value={form.title}
            type="text" 
            name="title" 
            placeholder="Title"
            required />
          <input 
            onChange={handleChange}
            value={form.image}
            type="text" 
            name="image" 
            placeholder="Image URL" 
            required/>
          <textarea 
            onChange={handleChange}
            value={form.comments}
            name="comments"   
            placeholder="Write something to go with your submission here..." 
            rows={5}/>
          <button className="add-gallery" type="submit">Add to Gallery</button>
         </form>
      </div>
    )
}

export default Form;