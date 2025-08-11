const noteInput = document.getElementById("noteInput");
const saveNoteBtn = document.getElementById("saveNote");
const noteList = document.getElementById("noteList");

// Load saved notes from localStorage
window.onload = () => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    savedNotes.forEach(note => addNoteToList(note));
};

saveNoteBtn.addEventListener("click", () => {
    const noteText = noteInput.value.trim();
    if (noteText) {
        addNoteToList(noteText);
        saveNoteToLocalStorage(noteText);
        noteInput.value = "";
    }
});

function addNoteToList(note) {
    const li = document.createElement("li");
    li.textContent = note;
    noteList.appendChild(li);
}

function saveNoteToLocalStorage(note) {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
}
