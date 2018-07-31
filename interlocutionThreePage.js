window.onload = function () {
  var content_userId_input = document.getElementsByClassName('content_userId_input')[0];
  var Page_footer_zan = document.getElementsByClassName('Page_footer_zan')[0];

  console.log(content_userId_input);

  content_userId_input.addEventListener("click", function () {
    if (content_userId_input.value == "关注") {
      content_userId_input.value = "取消";
    } else {
      content_userId_input.value = "关注";
    }
  });
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
    // var script = document.createElement("script");
    //     script.src = "http://120.79.163.179/mobile/problem/problemDetail";
    //     console.log(script);
  // function ajax(url){
  //   xmlhttp = new XMLHttpRequest();
  //   xmlhttp.open("GET",url, true);
  //   xmlhttp.send(null);
  //   xmlhttp.onreadystatechange = stateFn;
  //   // xmlhttp.callback = stateFn;
  // }
  // ajax('http://120.79.163.179/mobile/problem/problemDetail?tokenId=df3198d937d7cf9a76e0d07a07bf595a&id=4028832864ba81590164ba8238b20001');
  // function stateFn() {
  //   if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
  //     console.log(xmlhttp.responseText);
  //   } else {
  //     alert("错误");
  //   }
  // }

  $.ajax({
    type:"GET",
    url:"http://120.79.163.179/mobile/problem/problemDetail",
    data:{'tokenId':'df3198d937d7cf9a76e0d07a07bf595a','id':'4028832864ba81590164ba8238b20001'},
    dateType:"jsonp",
    success:function(data){
      console.log(data.data);
    }
  })
};
