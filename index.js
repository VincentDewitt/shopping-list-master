//submit items
$('#js-shopping-list-form').on( 'submit', function( event){
    event.preventDefault();
   
  let newItem = $('#shopping-list-entry').val()
  $('.shopping-list').append(` <li>
  <span class="shopping-item">${newItem}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
</li>`)
 
});

//check items
$('.shopping-list').on('click', '.shopping-item-toggle', function( event){
    if ($(this).closest("li").find(".shopping-item").hasClass("shopping-item__checked")){
        $(this).closest("li").find(".shopping-item").removeClass("shopping-item__checked")
    }
    else {
   $(this).closest("li").find(".shopping-item").addClass("shopping-item__checked")
    }
});

//delete items 
$('.shopping-list').on('click', '.shopping-item-delete', function ( event){
   $(this).closest("li").remove()
});
 