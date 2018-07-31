window.onload = function (event) {
  var btn = document.getElementsByClassName("Page_footer_box_spanBtn")[0].lastElementChild;
  var btn1 = document.getElementsByClassName("Page_footer_box_spanBtn")[1].lastElementChild;
  var alertDiv = document.getElementById("alertDiv");
  var returnBtn = document.getElementById("returnBtn");
  var herad_Button = document.getElementsByClassName("Page_herad_box_Top_button")[0];
  var thisBody = document.getElementsByTagName("body")[0];
  var openVideo = document.getElementsByClassName("openVideo");
  var Page_footer_zan = document.getElementsByClassName('Page_footer_zan')[0];
  var Page_footer_zan1 = document.getElementsByClassName('Page_footer_zan')[1];
  console.log(openVideo);
  console.log(document.documentElement.clientWidth);
  var date = new Date();
  var dateMonth = date.getMonth() + 1;
  var datezhou = dateMonth + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
  console.log(datezhou);
  herad_Button.onclick = function () {
    if (herad_Button.innerHTML == "关注") {
      herad_Button.innerHTML = "取消";
    } else {
      herad_Button.innerHTML = "关注";
    }
  };

  // var time = show();
  function Alert(id, xu, bd) {
    id.onclick = function () {
      setTimeout(function () {
        bd.style.boxShadow = "400px 0px 100px #888888 inset";
      }, 1800);
      xu.style.display = 'block';
      xu.style.position = "absolute";
    }
  }

  Alert(btn, alertDiv, thisBody);
  Alert(btn1, alertDiv, thisBody);

  // clearTimeout(time);
  function returnSbtn(bt, xu, bd) {
    bt.onclick = function () {
      xu.style.display = "none";
      bd.style.boxShadow = "none";
    }
  }

  returnSbtn(returnBtn, alertDiv, thisBody);

  for (let i = 0; i < openVideo.length; i++) {
    openVideo[i].onclick = function () {
      show('https://n5-pl-agv.autohome.com.cn/video-48/171EFBDF78B7568A/2018-06-27/A102837B3B8B5071-300.mp4?key=358C57AF67FE76B41A1EC26E23CA345E&time=1530103326')
    };

    function show(src) {
      var page = window.open();
      var html = "<body style='background:orange;'><div style='width:100%;'><video controls width='100%' autoplay src='" + src + "'></video></div></body>";
      page.document.write(html);
    };
    // show('');
  }

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
  //创建对象 渲染数据;
  var template = {
    'video': 'http://video.699pic.com/videos/57/62/25/Xw1P1UjJPkEW1510576225.mp4',
    'userName': "康师傅说他只做泡面",
    'userImage': "image/userImage.jpg",
    'SourceInfo': {
      'text_H1': "英国将派舰巡南海刷存在感，暗示可能发生对抗",
      'timesOfplay': "1234次播放",
      'lis_h1': "留学生如何在美国办理结婚手续",
      'lis_span': "法制中国",
      'From_what': '来自地球外星',
      "content_management": '清醒的时候放不下矜持，不敢说我喜欢你，只有在某个夜晚多愁善感又萦绕在心头，或是朋友聚会上的大醉，才敢借着情绪说，我喜欢你，喜欢了好久好久。'
    },
    'SourceType': 1,
    'UserName': "TaskFlow"
  };
  // for (var i = 0; i<=template.length; i++){
  //       var x = data.push(Mock.mock(template));
  //       console.log(x);
  //       console.log(template[i]);
  // }

  //return id 以及 calss;
  function fn() {
    return {
      ids: function rtid(id) {
        return document.getElementById(id);
      },
      snames: function rtClasName(sname) {
        return document.getElementsByClassName(sname);
      }
    }
  }


  //渲染数据;
  var fs = fn();
  console.log(fs.ids('video_s'));
  console.log(fs.snames('Page_herad_box_Top_h3'));
  var videoId = fs.ids('video_s');
  videoId.src = template['video'];
  var top3 = fs.snames('Page_herad_box_Top_h3')[0];
  top3.innerHTML = template['userName'];
  var image = fs.snames('Page_herad_box_Top_rdius')[0];
  console.log(image.children[0]['src']);
  image.children[0]['src'] = template['userImage'];
  var span_date = fs.snames('Page_herad_box_Top_span');
  //     console.log();
  span_date[0]['innerHTML'] = datezhou;
  var Page_herad_box_content_strong = fs.snames('Page_herad_box_content_strong')[0];
  Page_herad_box_content_strong.innerHTML = template['SourceInfo']['text_H1'];
  var Page_herad_box_content_span = fs.snames('Page_herad_box_content_span')[0];
  Page_herad_box_content_span.innerHTML = template['SourceInfo']['timesOfplay'];
  var Page_mid_box_content = fs.snames('Page_mid_box_content');
  //     console.log(Page_mid_box_content[0].childNodes[1].children);
  var lis = Page_mid_box_content[0].childNodes[1].children;
  //     // console.log(lis.length);
  //            // lis[0].children[0].innerHTML = template['SourceInfo']['lis_h1'];
  //            // lis[1].children[1].innerHTML = template['SourceInfo']['lis_span'];
  for (let i = 0; i < lis.length; i++) {
    lis[i].children[0].innerHTML = template['SourceInfo']['lis_h1'];
    lis[i].children[1].innerHTML = template['SourceInfo']['lis_span'];
    // console.log(lis[i]);
  }
  var Page_footer_box_userDivTop = fs.snames('Page_footer_box_userDivTop');
  var Page_footer_box_userDiv = fs.snames('Page_footer_box_userDiv');
  //     // console.log(Page_footer_box_userDiv);
  //     // console.log(Page_footer_box_userDivTop);
  var allDiv = Page_footer_box_userDivTop;
  var allPicture = Page_footer_box_userDivTop[0].children[0];
  for (let i = 0; i < allDiv.length; i++) {
    allDiv[i].children[0].src = template['userImage'];
    allDiv[i].children[1].children[0].innerHTML = template['userName'];
    allDiv[i].children[1].children[1].innerHTML = template['SourceInfo']['From_what'];
  }
  ;
  for (let i = 0; i < Page_footer_box_userDiv.length; i++) {
    Page_footer_box_userDiv[i].children[1].innerHTML = template['SourceInfo']['content_management'];
  }
  ;

  //
  // function count(arr) {
  //   var newArr = [];
  //   for (var i = 0; i < arr.length; i++) {
  //     if (newArr.indexOf(arr[i]) == -1) {
  //       newArr.push(arr[i]);
  //     }
  //   }
  //   // newArr.sort(function(a,b){
  //   //   return a-b;
  //   // });
  //   return newArr;
  // }
  //
  // var newAr1 = [1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 65, 6, 6, 6];
  // console.log(count(newAr1))

};
