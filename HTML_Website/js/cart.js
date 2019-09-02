function checkBrowserEnableCookie(){var cookieEnabled=(navigator.cookieEnabled)?true:false
if(typeof navigator.cookieEnabled=="undefined"&&!cookieEnabled){document.cookie="testcookie";cookieEnabled=(document.cookie.indexOf("testcookie")!=-1)?true:false}if(cookieEnabled)return true;else return false;}function createCookie(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString();}else var expires="";document.cookie=name+"="+value+expires+"; path=/";}function readCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}return"";}function eraseCookie(name){createCookie(name,"",-1);}function countShoppingCart(name){if(readCookie(name)==""){return 0;}else{var current_cart=readCookie(name);var ca=current_cart.split('%2c');var number_product=0;for(var i=1;i<ca.length;i++){var ele=ca[i].split('-');number_product=number_product+parseInt(ele[1]);}return number_product;}}function addToCartRedirect(productSubId,quantity,namePro){if(readCookie('shopping_cart')==null){createCookie('shopping_cart','',1);}var current_cart=readCookie('shopping_cart');var keySearchOldProduct='%2c'+productSubId+'-';if(current_cart.search(keySearchOldProduct)==-1){var new_cart=current_cart+'%2c'+productSubId+'-'+quantity;createCookie('shopping_cart',new_cart,1);noty({text:'<h4>Thành công</h4><p>Sản phẩm '+namePro+' đã được thêm vào giỏ hàng!</p>',type:'success',theme:'metroui',layout:'topRight',timeout:3000,progressBar:true});$('#cart-count-header').html("("+countShoppingCart("shopping_cart")+")");}else{var strCurrrentCart="";var lstStr=current_cart.split('%2c');for(i=1;i<=lstStr.length-1;i++){eleChild=lstStr[i];var eleSplitChild=eleChild.split('-');var proSubIDToCookie=eleSplitChild[0];var countProSubIDToCookie=eleSplitChild[1];if(proSubIDToCookie==productSubId){countProSubIDToCookie=parseInt(countProSubIDToCookie)+parseInt(quantity);}strCurrrentCart=strCurrrentCart+'%2c'+proSubIDToCookie+'-'+countProSubIDToCookie;}createCookie('shopping_cart',strCurrrentCart,1);noty({text:'<h4>Không thành công</h4><p>Sản phẩm '+namePro+' đã có trong giỏ hàng!</p>',type:'error',theme:'metroui',layout:'topRight',timeout:3000,progressBar:true,killer:true,animation:{open:'animated fadeIn',speed:200}});}}$(".add-to-cart").click(function(e){e.preventDefault();var id=$(this).data("id");var name=$(this).data("name");addToCartRedirect(id,1,name);});function deleteFromCart(productId,quantity,namePro){noty({text:'Bạn có muốn xóa sản phẩm '+namePro+' trong giỏ hàng?',theme:'metroui',layout:'center',timeout:3000,progressBar:true,killer:true,modal:true,animation:{open:'animated fadeIn',speed:200},buttons:[{addClass:'btn btn-primary',text:'Có',onClick:function($noty){console.log($noty.$bar.find('input#example').val());var current_cart=readCookie('shopping_cart');new_cart=current_cart.replace("%2c"+productId+'-'+quantity,"");new_cart=new_cart.replace("%2c"+productId+'-',"0");createCookie('shopping_cart',new_cart,1);noty({text:'<h4>Thành công</h4><p>Sản phẩm '+namePro+' đã bị xóa khỏi giỏ hàng!</p>',type:'success',theme:'metroui',layout:'topRight',timeout:3000,progressBar:true,killer:true,animation:{open:'animated fadeIn',speed:200}});setInterval(function(){window.location.href="gio-hang.html";},500);}},{addClass:'btn btn-danger',text:'Không',onClick:function($noty){noty({text:'Sản phẩm '+namePro+' chưa bị xóa, hãy tiếp tục mua hàng!',type:'information',theme:'metroui',layout:'topRight',timeout:3000,progressBar:true,killer:true,animation:{open:'animated fadeIn',speed:200}});}}]});}function updateCart(productId,quantity,namePro,edit,typecart){var elementThis="#item_"+productId;var newquantity=$(elementThis).val();newquantity=parseInt(newquantity);if(newquantity<1){noty({text:'Nếu số lượng <= 0, sản phẩm '+namePro+' sẽ bị xóa khỏi giỏ hàng!',theme:'metroui',layout:'center',timeout:3000,progressBar:true,killer:true,modal:true,animation:{open:'animated fadeIn',speed:200},buttons:[{addClass:'btn btn-primary',text:'Có',onClick:function($noty){console.log($noty.$bar.find('input#example').val());$noty.close();var current_cart=readCookie('shopping_cart');new_cart=current_cart.replace("%2c"+productId+'-'+quantity,"");new_cart=new_cart.replace("%2c"+productId+'-',"0");createCookie('shopping_cart',new_cart,1);noty({text:'<h4>Thành công</h4><p>Sản phẩm '+namePro+' đã bị xóa khỏi giỏ hàng!</p>',type:'success',theme:'metroui',layout:'topRight',timeout:3000,progressBar:true,killer:true,animation:{open:'animated fadeIn',speed:200}});setInterval(function(){window.location.href="gio-hang.html";},500);}},{addClass:'btn btn-danger',text:'Không',onClick:function($noty){$noty.close();noty({text:'Sản phẩm '+namePro+' chưa bị xóa, hãy tiếp tục mua hàng!',type:'information',theme:'metroui',layout:'topRight',timeout:3000,progressBar:true,killer:true,animation:{open:'animated fadeIn',speed:200}});newquantity=quantity;window.location.reload();}}]});}else{if(newquantity>999){newquantity=999;noty({text:'<h4>Không thành công</h4><p>Bạn chỉ được phép mua tối đa số lượng 999 cho mỗi sản phẩm</p>',type:'warning',theme:'metroui',layout:'topRight',timeout:3000,progressBar:true,killer:true,animation:{open:'animated fadeIn',speed:200}});}var current_cart=readCookie('shopping_cart');new_cart=current_cart.replace("%2c"+productId+'-'+quantity,"%2c"+productId+'-'+newquantity);createCookie('shopping_cart',new_cart,1);if(edit=="1"){loadCartViewPayEdit2("2",typecart);return false;}if(edit=="0"){loadCartViewPayEdit2("",typecart);return false;}setInterval(function(){window.location.reload();},1500);}}function setCartUrlBack(url){debugger
$.cookie('CartUrlBack',url,{expires:1,path:'/'});}$("#add-to-cart-to-payment").click(function(e){e.preventDefault();var linkPayment=$(this).data("link");var resultCheck=initCheckInputCount($(".total-mask"));if(resultCheck!=true){var cookieUrlCallBack=$(this).data("modulenameascii");setCartUrlBack(cookieUrlCallBack);$(".total-mask").each(function(){var productSubId=$(this).data("idsub");var quantity=$(this).val();if(quantity!="0"){addToCartRedirect(productSubId,quantity);};});window.location.href=linkPayment;}else{noty({text:'<h4>Không thành công</h4><p>Bạn chưa nhập số lượng!</p>',type:'error',theme:'metroui',layout:'topRight',timeout:3000,progressBar:true,killer:true,animation:{open:'animated fadeIn',speed:200}});$('#cart-small>span:last-child label').html(countShoppingCart("shopping_cart"));}});$(document).ready(function(){$('#cart-count-header').html("("+countShoppingCart("shopping_cart")+")");});$(document).ready(function(){$("#VorcherCodeSubmit").click(function(){var vorchercode=$("#VorcherCode").val();if(vorchercode.length<=4){noty({text:'<h4>Thiếu ký tự</h4><p>Mã Vorcher ít nhất 4 ký tự</p>',type:'error',theme:'metroui',layout:'topRight',timeout:3000,progressBar:true,killer:true,animation:{open:'animated fadeIn',speed:200}});}else{var urlLoadCheckVorcherCode="/Ajax/Cart/CheckVorcherCode";var urlLoadPayment="/Ajax/Cart/CartPayment";$.ajax({type:"POST",url:urlLoadCheckVorcherCode,data:{vorchercode:vorchercode},success:function(data){if(data.errorcode=="1"){noty({text:'<h4>Mã hợp lệ</h4><p>Mã này có thể sử dụng</p>',type:'success',theme:'metroui',layout:'topRight',timeout:3000,progressBar:true,killer:true,animation:{open:'animated fadeIn',speed:200}});}else{noty({text:'<h4>Lỗi</h4><p>Mã không hợp lệ</p>',type:'error',theme:'metroui',layout:'topRight',timeout:3000,progressBar:true,killer:true,animation:{open:'animated fadeIn',speed:200}});}}});$.ajax({type:"POST",url:urlLoadPayment,data:{vorchercode:vorchercode},success:function(data){$("#for-voucher").html(data);}});}});});function loadCartViewPayEdit(edit){$.ajax({type:"GET",url:"/ajax/Cart/CartData",data:{edit:edit},success:function(data){$(".cart-view").html(data);}});}function loadCartViewPayEdit2(edit,typecart){$.ajax({type:"GET",url:"/ajax/Cart/CartData",data:{edit:edit,typecart:typecart},success:function(data){$(".cart-view").html(data);}});}function upInputVal($input){if($.isNumeric($input.val())){$input.val(parseInt($input.val())+1);}else if($input.val()==""){$input.val(1);}}function downInputVal($input){if($.isNumeric($input.val())&&$input.val()>0){$input.val(parseInt($input.val())-1);}else if($input.val()==""){$input.val(1);}}