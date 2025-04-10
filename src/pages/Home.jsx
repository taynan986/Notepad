import NavBar from "../componets/NavBar"
import NotesList from "../componets/NotesList"
import { useState } from "react"

function Home(){
    const ls = window.localStorage
    const [notes, setState] = useState(JSON.parse(ls.getItem("notes"))||[]);

    const lorem = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa blanditiis voluptate iusto voluptatum accusantium quae eum? Quod aliquam nobis quia perferendis asperiores dolore, nesciunt atque placeat tenetur, minima iure."

    function addNote(title="New Note", content=lorem){
        const lastUID = parseInt(ls.getItem("lastUID"));
        const note = {uid: lastUID+1, title: title, content: content}
        setState([...notes, note]);
        ls.setItem("lastUID", lastUID + 1);
        ls.setItem("notes", JSON.stringify([...notes, note]));
        //alert(notes.length);
    }

    return(
        <>
        <NavBar onAdd= {addNote}/>
        <NotesList notesList={notes}/>
        </>
    )
}

export default Home