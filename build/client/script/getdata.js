var zhuantext="";
var zuihost="";
var zuihosttag="";
var Hottopic="";
var navtext="";
var tagtext="";
var swiperli="";
var content="";
//��������
$.ajax({
    url:"http://localhost:5000/data1",
    async:true,
    dataType:"json",
    success:function(res){
        for(var i =0;i<res.dataList2.length;i++){
            navtext+="<li><a href='javascript:;'>"+res.dataList2[i].channel.name+"</a></li>"
        }
        $(".navtext").append(navtext);
    },
    error:function(){
        alert("��������ʧ��")
    }
})
$(".navtext").on("click","li",function(){
    $(".navtext").children().children().css("color","#333")
    $(this).children().css("color","red")
})

//����(��ѡ)Ƶ������
$.ajax({
    url:"http://localhost:5000/data",
    async:true,
    dataType:"json",
    success:function(res){
        for(var i =0;i<res.dataList.ads.length;i++){
        swiperli+="<li><a href='"+res.dataList.ads[i].protocol+"'><img src='"+res.dataList.ads[i].imgUrl+"' alt=''/></a></li>"
        }
      $(".swiper>ul").append(swiperli);
        for(var i=0;i<res.dataList.contents.length;i++){
            content+="<li title='"+res.dataList.contents[i].content.title+"' width='"+res.dataList.contents[i].content.imageWidth+"' class='contentimage'><a href='javascript:;'><img src='"+res.dataList.contents[i].content.image+"'></a><div class='contenttext-title'><h2 title='"+res.dataList.contents[i].content.title+"'>"+res.dataList.contents[i].content.title+"</h2><div class='content-name'><a href='javascript:;' title='"+res.dataList.contents[i].author.nickName+"'>"+res.dataList.contents[i].author.nickName+"</a><div class='share'><a href='javascript:;' title='��������΢��'></a><a href='javascript:;' title='����QQ�ռ�'></a><a href='javascript:;' title='����QQ����'></a><a href='javascript:;' title='����΢��'></a></div></div></div></li>"
        }
      $(".contenttextleft>ul").append(content)
    },
    error:function(){
        alert("��������ʧ��")
    }
})

//ר����������
$.ajax({
    url:"http://localhost:5000/data3",
    async:true,
    dataType:"json",
    success:function(res){
        for(var i= 0;i<res.dataList3.contents.length;i++){
            zhuantext+="<li><a class='list-pic'><img src='"+res.dataList3.contents[i].content.image+"'alt='"+res.dataList3.contents[i].content.title+"' title='"+res.dataList3.contents[i].content.title+"'/></a><div class='list-inner'><div class='list-cont'><h2 title='"+res.dataList3.contents[i].content.title+"'><a href='javascript:;' class='line2'>"+res.dataList3.contents[i].content.title+"</a></h2><p class='line2'>"+res.dataList3.contents[i].content.summary+"</p></div>"+"<div class='list-fn'><div class='fl'><a href='javascript:;' class='user'><img src='"+res.dataList3.contents[i].author.avatar+"' width='22' height='22'/><span>"+res.dataList3.contents[i].author.nickName+"</span></a><span class='heat'>"+res.dataList3.contents[i].content.heatCount+"�ȶ�"+"</span></div><div class='share share-fn fr'><a title='��������΢��' class='shareBox tsina'></a><a class='shareBox qzone' title='����QQ�ռ�'></a><a class='shareBox cqq' title='�����QQ����'></a><div title='����΢��' class='wx-qrcode'><a class='weixin'></a></div></div></div></div>"
        }
        for(var i=0;i<res.dataList3.hotContents.length;i++){
            zuihost+="<li><a href='javascript:;' title='"+res.dataList3.hotContents[i].content.title+"'><img src='"+res.dataList3.hotContents[i].content.image+"' alt='"+res.dataList3.hotContents[i].content.title+"'/><strong>"+res.dataList3.hotContents[i].content.title+"</strong></a></li>"
        }
        for(var i=0;i<res.dataList3.hotTag.length;i++){
            zuihosttag+="<a>"+res.dataList3.hotTag[i].name+"</a>"
        }
        for(var i=0;i<res.dataList3.hotTopics.length;i++){
            Hottopic+="<li><a href='"+res.dataList3.hotTopics[i].protocol+"' class='clearfix'><img src='"+res.dataList3.hotTopics[i].imgUrl+"' alt='"+res.dataList3.hotTopics[i].title+"'<span>"+res.dataList3.hotTopics[i].title+"</span></a></li>"
        }
        $(".columns-list").append(zhuantext);
        $(".zuihostcontent").append(zuihost);
        $(".zuihosttaglist").append(zuihosttag);
        $(".Hottopiclist").append(Hottopic);
    }
})

//��ǩҳ����
$.ajax({
    url:"http://localhost:5000/data4",
    async:true,
    dataType:"json",
    success:function(res){
        for(var i =0;i<res.dataList4.length;i++){
            tagtext+="<a href=''>"+res.dataList4[i].name+"</a>"
        }
        $(".hosttaglist").append(tagtext);
    },
    error:function(){
        alert("��������ʧ��")
    }
})

