let edit = document.getElementById('edit');
let show = document.getElementById('show');
let form = document.getElementById('form');
let back = document.getElementById('back');
let del = document.getElementById('del');

edit.addEventListener('click', function(evt){
    evt.preventDefault()
    form.classList = '';
    show.classList = 'hide';    
})

back.addEventListener('click', function(evt){
    evt.preventDefault();
    form.classList = 'hide';
    show.classList = 'card container px-0 mt-4';
})

del.addEventListener('click', function(evt){
    console.log('heard the click!!!')
    let delPost = confirm("Are you sure you want to delete?");
    alert( delPost );
//     evt.preventDefault()
//    evt.Window.confirm("Are you sure you want to delete?")
})