var item1 = false;
var item2 = false;
var item3 = false;

var nameItem1 = "";
var nameItem2 = "";
var nameItem3 = "";

var valueItem1 = 0;
var valueItem2 = 0;
var valueItem3 = 0;
var sum = 0;

function onlyOne(checkbox, price) {
  var checkboxes = document.getElementsByName('food1');
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
    else {
      if(item.checked) {
        item1 = true
        nameItem1 = checkbox.value;
        valueItem1 = price;
      }
      else {
        item1 = false;
        nameItem1 = "";
        valueItem1 = 0;
      }
    }
  });
  
  opacityButton();
}

function onlyOne2(checkbox, price) {
  var checkboxes = document.getElementsByName('food2')
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
    else {
      if(item.checked) {
        item2 = true
        nameItem2 = checkbox.value;
        valueItem2 = price;
      }
      else {
        item2 = false;
        nameItem2 = "";
        valueItem2 = 0;
      }
    }
  });

  opacityButton();
}

function onlyOne3(checkbox, price) {
  var checkboxes = document.getElementsByName('food3')
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
    else {
      if(item.checked) {
        item3 = true
        nameItem3 = checkbox.value;
        valueItem3 = price;
      }
      else {
        item3 = false;
        nameItem3 = "";
        valueItem3 = 0;
      }
    }
  });

  opacityButton();
}

function opacityButton(){
  var buttonNext = document.getElementById('active');

  if(item1 & item2 & item3) buttonNext.style.opacity = 1;
  else buttonNext.style.opacity = 0.5;
  
  sum = valueItem1 + valueItem2 + valueItem3;
  
  var element = document.getElementById('valuePrice');
  element.innerHTML = ' R$ ' + sum.toFixed(2)
}

function submitWhatsapp() {
  sum = valueItem1 + valueItem2 + valueItem3;

  var str = "";
  str += "Olá, gostaria de fazer o pedido: \n"
  str += "- Prato: " + nameItem1 + "\n"
  str += "- Bebida: " + nameItem2 + "\n"
  str += "- Sobremesa: " + nameItem3 + "\n"
  str += "Total: " + sum + "\n"

  const message = "https://api.whatsapp.com/send?phone=5583987140201&text=" + encodeURIComponent(str);
  location.href = message
}