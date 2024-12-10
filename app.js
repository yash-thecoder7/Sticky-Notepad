let color = document.getElementById('color');
let createBtn = document.getElementById('createBtn');
let list = document.getElementById('list');

//creating a new note...
createBtn.onclick = () =>{
    // console.log('btn working...');
    let newNote = document.createElement('div');
    newNote.classList.add('note');
    newNote.innerHTML = `
    <span class="close">x</span>
    <textarea 
    placeholder =" Write content..." rows="10" cols="30"></textarea>`;
    newNote.style.borderColor = color.value;
    list.appendChild(newNote);
}
//deleting a note...
document.addEventListener('click' , (event) =>{
    // console.log(event.target);
    if(event.target.classList.contains('close')){
        event.target.parentNode.remove();   //parentNode remove newNote element which we create...
    }
});

let cursor = {
    x: null,
    y: null
};

let note = {
    dom: null,
    x: null,
    y: null
};
//to draging a note...
document.addEventListener('mousedown' , (event) => {
    if(event.target.classList.contains('note')){
        cursor = {
            x: event.clientX,
            y: event.clientY
        }
        note = {
            dom: event.target,
            x: event.target.getBoundingClientRect().left,   //left means x-axis
            y: event.target.getBoundingClientRect().top     //top means y-axis
        }
        // console.log(note.dom);
        // console.log(note);
        // console.log(cursor);
    }
});
document.addEventListener('mousemove', (event) => {
    if(note.dom == null) return;

    let currCursor = {
        x: event.clientX,
        y: event.clientY
    }
    let distance = {
        x: currCursor.x - cursor.x,
        y: currCursor.y - cursor.y
    }

    // console.log(currCursor);
    // console.log(distance);
    note.dom.style.left = (note.x + distance.x) + 'px';
    note.dom.style.top = (note.y + distance.y) + 'px';
});

document.addEventListener('mouseup', () => {
    note.dom = null;
});