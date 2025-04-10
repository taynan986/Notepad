import Button from "./ui/Button"
import TextInput from "./ui/TextInput"

function NavBar({onAdd}){
    var searchStr = ""
    function findNote(){
        const views = document.getElementsByClassName("note-view")
        for (let i=0; i<views.length; i++){
            if (views[i].title == searchStr) {
                views[i].scrollIntoView()
                views[i].style.backgroundColor = "lightgray"
                setTimeout((view=views[i]) => view.style.backgroundColor = "aquamarine", 1000);
            }
        }
    }
    return(
        <div className="nav-bar">
            <div className="nav-bar-search">
            <TextInput classes ="text-input" hint="Pesquisar" change={(e)=>searchStr=e}/>
            <Button classes= "button search-button" text= "Pesquisar" click={() => findNote()}/>
            </div>
            <div className="nav-bar-add">
            <Button click= {onAdd} classes= "button add-button" text= "Adicionar"/>
            </div>
        </div>
    )
}

export default NavBar