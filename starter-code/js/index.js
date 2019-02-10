function deleteItem(e){
  var btn = document.querySelector('.btn-container'),
      containerItem = document.querySelectorAll('.item-container'),
      container = document.querySelector('.container'),
      deleteButtons = document.getElementsByClassName('btn-delete'),
      createItemButton = document.getElementById('new-item-create'),
      inputPrice = document.querySelector('.newitem-price'),
      inputName = document.querySelector('.newitem-name'),
      calculatePriceButton = document.getElementById('calc-prices-button');
  
    for(var i = 0; i<deleteButtons.length ; i++){
      deleteButtons[i].onclick = deleteItem;
    }
  }
  
  function deleteItem(e){
    var itemDel = document.getElementById(e.currentTarget.parentElement.parentElement.id)
    container.removeChild(itemDel) 
  }

  
  function getTotalPrice() {
  
    var itemPrice = document.querySelectorAll('.item-price')     
    var total = document.querySelector('.totalprice')
    var itemQty = document.getElementsByClassName('qtyInput')
    var itemTotal = document.querySelectorAll('.item-totalprice');
    var sum = 0
    for(var i = 0; i < itemPrice.length; i++){
      itemTotal[i].innerHTML = itemPrice[i].innerHTML*itemQty[i].value.toFixed(2)
      sum += parseInt(itemPrice[i].innerHTML*itemQty[i].value)
    }
    total.innerHTML = sum.toFixed(2) 
  }


  function createNewItem(){
    var newItem = document.createElement("div")
    newItem.className = "item-container"
    newItem.innerHTML = '<div><span class="item-name">' + inputName.value + '</span></div><div>$<span class="item-price">' + inputPrice.value + '</span></div><div><span class="item-amount">QTY</span><input type="text" class="qtyInput"></div><div>$<span class="item-totalprice">0</span></div><div><button class=" btn btn-delete item-delete new-delBtn">Delete</button></div>'
    newItem.id = 'item'+(containerLength+1)
    container.insertBefore(newItem, container.lastChild)
    containerLength++
    var newDelbtn = document.querySelector('.new-delBtn')
    newDelbtn.onclick = deleteItem;
  }
  
  window.onload = function(){
    var calculatePriceButton = document.getElementById('calc-prices-button');
    var createItemButton = document.getElementById('new-item-create');
    var deleteButtons = document.getElementsByClassName('btn-delete');
  
  
    calculatePriceButton.onclick = getTotalPrice;
    createItemButton.onclick = createNewItem;
  
    for(var i = 0; i<deleteButtons.length ; i++){
      deleteButtons[i].onclick = deleteItem;
    }
  
  };