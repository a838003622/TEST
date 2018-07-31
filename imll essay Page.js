window.onload = function (event) {
  var btn = document.getElementsByClassName("Page_footer_box_spanBtn")[0].lastElementChild;
  var btn1 = document.getElementsByClassName("Page_footer_box_spanBtn")[1].lastElementChild;
  var alertDiv = document.getElementById("alertDiv");
  var returnBtn = document.getElementById("returnBtn");
  var herad_Button = document.getElementsByClassName("Page_herad_box_Top_button")[0];
  var Page_footer_zan = document.getElementsByClassName('Page_footer_zan')[0];
  var Page_footer_zan1 = document.getElementsByClassName('Page_footer_zan')[1];
  console.log(herad_Button);
  var thisBody = document.getElementsByTagName("body")[0];
  console.log(btn);
  // btn.onclick = function () {
  //   alertDiv.style.display = 'block';
  //   alertDiv.style.position = "absolute";
  // }

  console.log("11111111111111111111111111111111111111111111111111111111");
  herad_Button.onclick = function () {
    if (herad_Button.innerHTML == "关注") {
      herad_Button.innerHTML = "取消";
    } else {
      herad_Button.innerHTML = "关注";
    }
  };

  // var time = show();
  function Alert(id, xu) {
    id.onclick = function () {
      // setTimeout(function () {
      //   bd.style.boxShadow = "400px 0px 100px #888888 inset";
      // },1000);
      console.log("1111111111111111111111");
      console.log(alertDiv);
      xu.style.display = 'block';
      xu.style.position = "absolute";
    }
  }

  Alert(btn, alertDiv);
  Alert(btn1, alertDiv);

  // clearTimeout(time);
  function returnSbtn(bt, xu) {
    bt.onclick = function () {
      xu.style.display = "none";
    }
  }

  returnSbtn(returnBtn, alertDiv);

  var i = 0;
  Page_footer_zan.addEventListener('click', function () {
    let Page_footer_zan_b = document.getElementById('Page_footer_zan_b');
    i++;
    if (i == 0) {
      Page_footer_zan_b.innerHTML = i;
      i++;
    } else if (i <= 99 || i == 99) {
      Page_footer_zan_b.innerHTML = i;
    }
  });
  var x = 0;
  Page_footer_zan1.addEventListener('click', function () {
    let Page_footer_zan_bs = document.getElementById('Page_footer_zan_b1');
    x++;
    if (x == 0) {
      Page_footer_zan_bs.innerHTML = x;
      x++;
    } else if (x <= 99 || x == 99) {
      Page_footer_zan_bs.innerHTML = x;
    }
  });
}
