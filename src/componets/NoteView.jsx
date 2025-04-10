import { Link } from "react-router-dom"
import { MdDelete } from "react-icons/md";

function NoteView({onDelete, uid, title, content}){

    function deleteNote(e){
        onDelete(uid);
        e.preventDefault();
    }
    return(
        <Link style={{textDecoration: 'none', color: 'inherit'}} to= "/editor" state={{uid: uid}}>
            <div className="note-view" title={title}>
                <div className="note-title"><h1>{title}</h1><MdDelete className="delete-ico" onClick={(e)=>deleteNote(e)} size={30} style={{float: "right"}}/></div>
                <div className="note-content" dangerouslySetInnerHTML={{__html: content}}></div>
            </div>
        </Link>
    )
}

export default NoteView