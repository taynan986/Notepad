import { useState } from "react"
import NoteView from "./NoteView";

function NotesList({addNote, notesList}){
    const ls = window.localStorage;
    const [notes, setState] = useState(notesList);

    function deleteNote(uid){
        const index = notesList.findIndex((n, i)=>n.uid===uid);
        notesList.splice(index, 1);
        ls.setItem("notes", JSON.stringify(notesList));
        setState([...notesList]);
        //alert(JSON.stringify(notesList))
    }

    return(
        <div className="notes-container">
            <div className="notes-list">
                {
                    notesList.map((n, index) => <NoteView onDelete={deleteNote} uid= {n.uid} key= {index} title= {n.title} content= {n.content}/>)
                }
            </div>
        </div>
    )
}

export default NotesList