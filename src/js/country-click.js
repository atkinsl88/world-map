// When a user clicks on the country it takes them through to theat country page.
// Click function on class ... 'Argentina'

const countryBtns = document.querySelectorAll('#country')

countryBtns.forEach(function (btn) {

  btn.addEventListener("click", function (e) {

    countryName = btn.classList
    console.log(countryName)

    window.location.href = 'countries' + '/' + countryName + '/' + countryName + '.html';

  })

})