$(function () {
  var moreBtn = $('.more_btn')
  var closeBtn = $('.close_btn')
  var dimm = $('.dimm')
  var modal = $('.modal')

  moreBtn.click(function () {
    dimm.show()
    modal.show()
  })

  closeBtn.click(function () {
    dimm.hide()
    modal.hide()
  })
})
