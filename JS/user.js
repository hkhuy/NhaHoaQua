const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length
const inputElement = document.getElementById('search');
function search(inputValue){
  if (inputValue == "vải" || inputValue == "vải nhập khẩu"){
    alert("Vải nhập khẩu có xuất xứ tại Mỹ và có giá 59.000VNĐ")
  } else if (inputValue == "táo" || inputValue == "táo nhập khẩu"){
    alert("Táo nhập khẩu có xuất xứ tại Mỹ và có giá 69.000VNĐ")
  } else if (inputValue == "cà chua" || inputValue == "cà chua đà lạt"){
    alert("Cà chua Đà Lạt có xuất xứ tại Việt Nam và có giá 79.000VNĐ")
  } else if (inputValue == "bom" || inputValue == "bom mỹ"){
    alert("Bom Mỹ có xuất xứ tại Mỹ và có giá 179.000VNĐ")
  } else if (inputValue == "dâu" || inputValue == "dâu đà lạt"){
    alert("Dâu Đà Lạt có xuất xứ tại Việt Nam và có giá 249.000VNĐ")
  } else if (inputValue == "ổi" || inputValue == "ổi đài loan"){
    alert("Ổi Đài Loan có xuất xứ tại Đài Loan và có giá 59.000VNĐ")
  } else{
    alert("Không tìm thấy sản phẩm")
  }
  
}
// Lấy tham chiếu đến phần tử button
const buttonElement = document.querySelector('button[type="submit"]');

// Đăng ký sự kiện click cho button và gắn kết với hàm search()
buttonElement.addEventListener('click', function() {
  const inputValue = document.getElementById('search').value;
  search(inputValue);
});



next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    // Xem hết bình luận
    return false
  }
  translateY += -400
  comment.style.transform = `translateY(${translateY}px)`
  count--
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
    // Xem hết bình luận
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})