const addNoteBtn = document.querySelector('.add');

const notes = JSON.parse(localStorage.getItem('notes'));

addNoteBtn.addEventListener('click', () => {

    addNote();

    updateLocalStorage();
})

if(notes) {

    notes.forEach((note) => addNote(note))
}

 function addNote(text = '') {

     const note = document.createElement('div');

     note.classList.add('note');
     
     note.innerHTML = `

          <div class="notes">

           <div class="controls">

            <button class="save-btn">Save</button>

            <button class="delete-btn">Delete</button>

         </div>

          <div class="main"></div>
          
             <textarea placeholder="Add a note"></textarea>

          </div>

     `

     const saveBtn = note.querySelector('.save-btn');

     const deleteBtn = note.querySelector('.delete-btn');

     const textarea = note.querySelector('textarea');

     textarea.value = text;

     deleteBtn.addEventListener('click', () => {

        note.remove();

        updateLocalStorage();
     })

     saveBtn.addEventListener('click', () => {

        updateLocalStorage();

     } );

     document.body.appendChild(note);
 }

 function updateLocalStorage() {

    const allNotes = document.querySelectorAll('textarea');

    const notes = [];

    allNotes.forEach((note) => {
        notes.push(note.value);
    });

    localStorage.setItem('notes', JSON.stringify(notes));
 }