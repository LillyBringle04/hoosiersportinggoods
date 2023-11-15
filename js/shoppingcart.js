function initListaOrcamento() {
    var products = $.CestaFeira({
        debug: true
      }).getItems(),
      totalValueTemp = 0,
      $cartItems = $('#cart-items');
  
    if (!products) {
      console.log("No items in cart!");
      return;
    }
  
    function updateTotalValue() {
  
      var totalValue = 0;
  
      $.each($('[data-item-total-value]'), function (index, item) {
        totalValue += $(item).data('item-total-value');
      });
  
      $('#total-value').html("$" + parseFloat(totalValue).toFixed(2));
    }
  
    function mountLayout(index, data) {
      var totalValueTemp = parseFloat(data.unity_price) * parseInt(data.quantity);
  
      var $layout = "<tr id='product-"+ index +"'><td class='card-flex-container'><div class='media'>" +
        "<img class='d-flex align-self-center mr-3' src='http://placehold.it/72x72?text="+index+"' alt=''>" +
        "<div class='media-body'>" +
        "<h5 class='mt-0'>"+ data.product_name +"</h5>" +
        "</div></div></td><td class='col-sm-1 col-md-1' style='text-align: center'>" + data.quantity +
        "<td class='col-sm-1 col-md-1 text-center'><strong>$"+ data.unity_price +"</strong></td>" +
        "<td class='col-sm-1 col-md-1 text-center' data-item-total-value='"+totalValueTemp+"'><strong>$"+parseFloat(totalValueTemp).toFixed(2)+"</strong></td>" +
        "<td class='col-sm-1 col-md-1'>" +
        "<a href='javascript:;' class='btn btn-danger fa fa-trash' data-cesta-feira-delete-item='"+ index +"'><span class='sr-only'>Remove</span></a>" +
        "</td></tr>";
  
      $cartItems.append($layout);
    }
  
  
    $.each(products, function (index, value) {
      mountLayout(index, value);
    });
  
    updateTotalValue();
  
    $(document).on('click', 'a[data-cesta-feira-delete-item]', function(e) {
      e.preventDefault();
  
      var productId = $(this).data('cesta-feira-delete-item');
  
      if($(document).on('cesta-feira-item-deleted')){
        $('#product-'+productId).fadeOut(500, function() {
          $(this).remove();
          updateTotalValue();
        });
      }
    });
  
    $(document).on('cesta-feira-clear-basket', function (e) {
      $('#cart-items tr').each(function (index, value) {
        $(value).fadeOut(500, function() {
          $(this).remove();
          updateTotalValue();
        });
      });
    });
  
  }
  
  $(document).ready(function () {
  
    initListaOrcamento();
  
  });