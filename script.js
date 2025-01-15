const btne1=document.getElementById("btn");
const appe1=document.getElementById("app");

getNotes().forEach((note)=>{
    const noteEl = createNotee1(note.id,note.content);
    appe1.insertBefore(noteEl,btne1);
});


function createNotee1(id,content){
    const element=document.createElement("textarea");
    element.classList.add("note");
    element.placeholder="Empty note";
    element.value=content;

    element.addEventListener("dblclick",()=>{
        const warning=confirm("Do you want to delete this");
        if(warning){
            deleteNode(id,element)
        }
    });

    element.addEventListener("input",()=>{
        updateNote(id,element.value);
    });


    return element;
}


function deleteNode(id,element){
    notes=getNotes().filter((note)=>note.id!==id);
    saveNote(notes);
    appe1.removeChild(element);

}


function updateNote(id,content){
    const notes = getNotes();
    const target = notes.filter((note)=> note.id==id)[0]; 
    target.content = content; 
    saveNote(notes);
 }



let addNote=()=>{

    const notes=getNotes();
    
    const noteobj={
        id:Math.floor(Math.random()*10000),
        content:""
    };
    const notee1=createNotee1(noteobj.id,noteobj.content);
    appe1.insertBefore(notee1,btne1);
    notes.push(noteobj);
    saveNote(notes)
}


function saveNote(notes){
    localStorage.setItem("note-app",JSON.stringify(notes));
}

function getNotes(){
    return JSON.parse(localStorage.getItem("note-app")||"[]")
}

btne1.addEventListener("click",addNote);


