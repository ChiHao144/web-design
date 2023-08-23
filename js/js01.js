// tạo hiệu ứng header khi trượt màn hình qua 60px
window.addEventListener("scroll", function(){
    if(this.scrollY > 60){
        document.querySelector(".container").classList.add("active");
    } else {
       this.document.querySelector(".container").classList.remove("active");
    }
});
// tạo hiệu ứng cùng header cho class tool
window.addEventListener("scroll", function(){
    if(this.scrollY > 60){
        document.querySelector(".tool").classList.add("active-menu");
    } else {
       this.document.querySelector(".tool").classList.remove("active-menu");
    }
    var tool = document.querySelector(".tool");
    var toolPosition = tool.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;
  
    if (toolPosition < screenHeight) {
        tool.classList.add("active-scroll");
    } else {
        tool.classList.remove("active-scroll");
    }

});
// tạo hiệu ứng thông báo ẩn hiện và các button 
$(document).ready(() => {
    let n =$(".thongbao > div").length;
    let h = "";
    for (let i = 0; i < n; i++)
    h +=      
   ` <button class = "digit">${i + 1}</button>   
    `;
    $(".thongbao-button :first-child").after(h);
    $(".thongbao").height($(".thongbao img").height() + 5);
    let current = -1;
let showThongbao = (current) =>{
    $(".thongbao > div").hide();
    $(".thongbao > div").eq(current).show();

    $("button.digit").removeClass("active");
    $("button.digit").eq(current).addClass("active");
}
$("button.digit").click(function(){
    current = parseInt($(this).text()) - 1;
    showThongbao(current);
});

$(".next").click(function() {
    current++;
    if (current === n)
    current = 0;
showThongbao(current);

    clearInterval(timer);
    runThongbao();

});

$(".prev").click(function() {
    current--;
    if (current < 0)
    current = n - 1;
showThongbao(current);
});

let timer = null;
let runThongbao = () => {
    timer = setInterval(() => {
        $(".next").click();
    }, 3000);
};
runThongbao();

});
// tạo hiệu ứng nhảy số cho ou và những con số
window.addEventListener('scroll', function() {
    var numberElements = document.querySelectorAll('.number');
    var windowHeight = window.innerHeight;
  
    numberElements.forEach(function(numberElement) {
        var numberValue = 0;
        var elementTop = numberElement.getBoundingClientRect().top;
    
        if (elementTop < windowHeight) {
            numberElement.classList.add('ou-active');
            var count = parseInt(numberElement.getAttribute('data-count'));
            var increment = Math.ceil(count / 100); // Số lần tăng trong khoảng thời gian
            var interval = setInterval(function() {
                numberValue += increment;
                if (numberValue >= count) {
                    numberValue = count;
                    clearInterval(interval);
                }
                numberElement.innerText = numberValue;
            }, 10);
        }
    });
});

// go to top
window.onscroll = function(){
    console.info(document.documentElement.scrollTop);
    var gototop = document.getElementById("go-to-top");
    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
      gototop.style.display = "block";
    } else{
      gototop.style.display = "none";
    }
  }
  function goToTop(){
      var timer = setInterval(function(){
        document.documentElement.scrollTop-=20;
  
        if(document.documentElement.scrollTop <= 0)
          clearInterval(timer);
      }, 1);
  }

// tìm kiếm
$(document).ready(() => {
  // Lấy các phần tử cần thao tác
  const searchIcon = document.querySelector("#search-icon");
  const searchForm = document.querySelector("#search-form");
  const closeButton = document.querySelector("#close");
  
  // Sự kiện click vào biểu tượng tìm kiếm
  searchIcon.addEventListener("click", function() {
    searchForm.style.display = "flex";
  });
  
  // Sự kiện click vào dấu X
  closeButton.addEventListener("click", function() {
    searchForm.style.display = "none";
  });
  });
  
  function loadResults() {
      //Tải danh sách kết quả từ tệp JSON sử dụng fetch
      fetch("data/results.json")
        .then((res) => res.json()) //Chuyển đổi phản hồi thành đối tượng JSON
        .then((data) => { //Tiếp tục xử lý dữ liệu sau khi được chuyển đổi
          let searchBox = document.getElementById("search-box"); //Lấy thẻ input tìm kiếm
          let resultsDiv = document.getElementById("results"); //Lấy thẻ chứa kết quả tìm kiếm
          let searchValue = searchBox.value.toLowerCase(); //Lấy giá trị tìm kiếm và chuyển thành chữ thường
    
          //Lọc danh sách kết quả theo nội dung tìm kiếm
          let matchingResults = data.filter((result) => {
            return (
              result.title.toLowerCase().includes(searchValue) || //Kiểm tra nếu tiêu đề chứa nội dung tìm kiếm
              result.content.toLowerCase().includes(searchValue) //Kiểm tra nếu nội dung chứa nội dung tìm kiếm
            );
          });
    
          //Sắp xếp kết quả tìm kiếm, đưa những kết quả tương tự lên đầu danh sách
          matchingResults.sort((a, b) => {
            let aTitle = a.title.toLowerCase();
            let bTitle = b.title.toLowerCase();
            let aContent = a.content.toLowerCase();
            let bContent = b.content.toLowerCase();
    
            //Các trường hợp sắp xếp và ưu tiên
            if (
              aTitle.startsWith(searchValue) && !bTitle.startsWith(searchValue)
            ) {
              return -1; //Đưa kết quả a lên đầu
            } else if (
              !aTitle.startsWith(searchValue) && bTitle.startsWith(searchValue)
            ) {
              return 1; //Đưa kết quả b lên đầu
            } else if (
              aContent.startsWith(searchValue) && !bContent.startsWith(searchValue)
            ) {
              return -1; //Đưa kết quả a lên đầu
            } else if (
              !aContent.startsWith(searchValue) && bContent.startsWith(searchValue)
            ) {
              return 1; //Đưa kết quả b lên đầu
            } else {
              return 0; //Giữ nguyên thứ tự của hai kết quả
            }
          });
    
          let h = "";
          for (let p of matchingResults) {
            //Tạo nội dung HTML cho từng kết quả tìm kiếm
            h += `
            <div class="result">
                <img src="images/${p.image}" alt="">
                <div class="result-title">${p.title}</div>
                <div class="result-content">${p.content}</div>
            </div> `;
          }
          resultsDiv.innerHTML = h; //Cập nhật kết quả tìm kiếm lên trang
        });
    }
    
    window.onload = function () {
      let searchBox = document.getElementById("search-box"); //Lấy thẻ input tìm kiếm
      searchBox.addEventListener("input", loadResults); //Gắn sự kiện người dùng nhập để tải kết quả tìm kiếm
      loadResults(); //Tải kết quả tìm kiếm ban đầu
    };
    