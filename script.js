(()=>{
    let todoListArray=[];

    const form =document.querySelector(".form");
    const input =form.querySelector(".form-input");
    const ul= document.querySelector(".todoList");

    form.addEventListener("submit" , (e) =>{
        e.preventDefault();
        let itemId =String(Date.now());
        let todoItem =input.value;
        addItemToDOM(itemId, todoItem);
        addItemToArray(itemId, todoItem);
        input.value= "";
    })


    ul.addEventListener( "click", (e) => {
        let id=e.target.getAttribute( "data-id");
        if (!id) return;//
        removeItemFromDOM(id);
        removeItemFromArray(id);

    });

    function addItemToDOM(itemId, todoItem){
        const li = document.createElement("li");
        li.setAttribute("data-id", itemId);
        li.innerText= todoItem;
        ul.appendChild(li);
    }

    function addItemToArray (itemId, todoItem){
        todoListArray.push({itemId, todoItem});
        console.log(todoListArray);
    }

    function removeItemFromDOM(id) {
        var li = document.querySelector('[data-id="' + id +'"]');
        if (li) {
            ul.removeChild(li); // Remove the li element from the ul
        } else {
            console.log('Element with data-id "' + id + '" not found in the DOM.');
        
    }
    

    }

    function removeItemFromArray (id){
        todoListArray = todoListArray.filter((item) => item.itemId !== id);
        console.log(todoListArray);
    }

})();