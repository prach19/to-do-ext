

//adding functionality to the buttons
document.querySelector('.create').addEventListener('click', function(){ 
document.querySelector('.new-item').style.display='block';
});

//adding a new item
document.querySelector('.new-item button').addEventListener('click', function(){
   var itemName = document.querySelector('.new-item input').value;
   if (itemName != ''){

        var itemsStorage = localStorage.getItem('items');

        if(itemsStorage == null){
            itemsStorage = '[]';
        }
        var itemsArray = JSON.parse(itemsStorage);
        itemsArray.push({"item":itemName, "status":0});
        saveItems(itemsArray);
        receiveItems();
        document.querySelector('.new-item input').value='';
        document.querySelector('.new-item').style.display='none';
    }
    });

    // recalling stored items
function receiveItems(){

    const itemsList =  document.querySelector('ul.items');
    itemsList.innerHTML='';
    var newItemsHTML = '';

    try{
        var itemsStorage = localStorage.getItem('items');
        if(itemsStorage == null){
            itemsStorage = '[]';
          }
        var itemsArray = JSON.parse(itemsStorage);

        for (var i = 0; i < itemsArray.length; i++) {
            var status ='';
            //setting the status
            if (itemsArray[i].status == 1){
            status = 'class="done"';
            }
    
            //adding the icons/buttons
            newItemsHTML += `<li data-itemindex="${i}" ${status}>
            <span class="item">${itemsArray[i].item}</span> 
            <div><span class="itemComplete"> <img src="img/check.png" alt= "check" width = 15px height = 15px> </span>
            <span class="itemDelete"> <img src="img/bin.png" alt= "delete" width = 15px height = 15px> </span></div>
            </li>`;
        }
        itemsList.innerHTML = newItemsHTML;

        //functionality to the check and bin buttons
        var itemsListUL = document.querySelectorAll('ul li');
        for (var i = 0; i < itemsArray.length; i++) {
            itemsListUL[i].querySelector('.itemComplete').addEventListener('click', function(){
                var index = this.parentNode.parentNode.dataset.itemindex;
                itemComplete(index);
            });

            itemsListUL[i].querySelector('.itemDelete').addEventListener('click', function(){
                var index = this.parentNode.parentNode.dataset.itemindex;
                itemDelete(index);
            });
        }
        } catch(e) {     
}
}

//function for completed tasks
function itemComplete(index){
    var itemsStorage = localStorage.getItem('items');

        if(itemsStorage == null){
        itemsStorage = '[]';
        }
    var itemsArray = JSON.parse(itemsStorage);
        itemsArray[index].status = 1;
        saveItems(itemsArray);

        document.querySelector('ul.items li[data-itemindex="'+index+'"]').className='done';
}

//function for deleted items
function itemDelete(index){
    var itemsStorage = localStorage.getItem('items');
    if(itemsStorage == null){
        itemsStorage = '[]';
      }
    var itemsArray = JSON.parse(itemsStorage);

    itemsArray.splice(index, 1);
    saveItems(itemsArray);
    document.querySelector('ul.items li[data-itemindex="'+index+'"]').remove();
}

//function for saving items
function saveItems(obj){
var string = JSON.stringify(obj);
localStorage.setItem('items', string);
}

receiveItems();

