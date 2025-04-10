import TextInput from "../componets/ui/TextInput"
import { useLocation } from "react-router-dom"
import { FcPicture } from "react-icons/fc";
import { FaImage } from "react-icons/fa6";

function Editor(){
    const location = useLocation();
    const state = location.state;
    const ls = window.localStorage;

    function uploadTitle(title){
        //alert(state.uid)
        const notes = JSON.parse(ls.getItem("notes"));
        const newNotes = [];
        const noteIndex = notes.findIndex((n, index)=>{if(n.uid==state.uid) return index})
        notes[noteIndex].title = title
        ls.setItem("notes", JSON.stringify([...notes]))
    }

    function uploadContent(content){
        const notes = JSON.parse(ls.getItem("notes"));
        const newNotes = [];
        const noteIndex = notes.findIndex((n, index)=>(n.uid==state.uid))
        notes[noteIndex].content = content
        ls.setItem("notes", JSON.stringify([...notes]))
    }

    function addImage(){
        const editArea = document.getElementById("edit-area");
        const select = document.createElement("input");
        const fileReader = new FileReader();
        select.type = "file"
        select.addEventListener("change", function(e){
            fileReader.readAsDataURL(select.files[0]);
        });
        fileReader.addEventListener("load", function(e){
            const img = document.createElement("img");
            img.className = "edit-img"
            img.src = fileReader.result;
            editArea.insertAdjacentElement("beforeend", img);
            uploadContent(editArea.innerHTML);
        });
        select.click();
    }

    const notes = JSON.parse(ls.getItem("notes"));
    const noteIndex = notes.findIndex((n, index)=>(n.uid==state.uid));
    const title = notes[noteIndex].title;
    const content = notes[noteIndex].content;

    return (
        <>
        <div>
            <TextInput classes="title-input" value={title} change={uploadTitle}/>
        </div>
            <FaImage className="img-ico" size={42} onClick={addImage}/>
        <div className= "edit-area-div">
            <div id="edit-area" className= "edit-area" contentEditable= {true} onInput={(e)=>uploadContent(e.target.innerHTML)} dangerouslySetInnerHTML={{__html: content}}></div>
        </div>
        </>
    )
}

export default Editor