/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("GenderDropdown").classList.toggle("gender-show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    filter = input.value.toUpperCase();
    div = document.getElementById("GenderDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
