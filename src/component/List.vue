<template>
    <div class="wrap">
    <header>
    <nav></nav>
    <div class="nav">
        <div class="navcontent">
            <img src="http://static.17getfun.com/2017s3/image/publish/index2/logo.png" alt="" title="盖饭GetFun">
            <ul>
            <!--<li v-for="i in list"><a href="">{{i.channel.name}}</a></li> -->
            <li class="on"><a href="javascript:;">精选</a></li>
            <li><a href="javascript:;">专栏</a></li>
            <li><a href="javascript:;">娱乐</a></li>
            <li><a href="javascript:;">极限挑战3</a></li>
            <li><a href="javascript:;">影视</a></li>
            <li><a href="javascript:;">动漫</a></li>
            <li><a href="javascript:;">奇趣</a></li>
            <li><a href="javascript:;">搞笑</a></li>
            <li><a href="javascript:;">自拍</a></li>
            <li><a href="javascript:;">福利</a></li>
            <li><a href="javascript:;">历史</a></li>
            <li><a href="javascript:;">养生</a></li>
            <li><a href="javascript:;">表情</a></li>
            </ul>
     </div>
    </div> 
 </header>
    <div id="div"></div>
    <div class="content">
      <div class="contenttext">
      <div class="textleft">
          <div class="contenttextleft clearfix">
          <ul class="clearfix">
            <li class="swiper clearfix">
            <ul>
              <li v-for="i in list.ads">
                <a :href="i.protocol"><img :src="i.imgUrl" alt=""></a>
              </li>
            </ul>
            </li>
            <li v-for="i in list.contents" :title="i.content.title" :width="i.content.imageWidth" class="contentimage">
                 <a href="javascript:;">
                 <img :src="i.content.image">
                 </a>
                 <div class="contenttext-tltle">
                   <h2 :title="i.content.title">{{i.content.title}}</h2>
                   <div class="content-name">
                     <a href="javascript:;" :title="i.author.nickName">{{i.author.nickName}}</a>
                     <div class="share">
                     <a href="javascript:;" title="分享到新浪微博"></a>
                     <a href="javascript:;" title="分享到QQ空间"></a>
                     <a href="javascript:;" title="分享到QQ好友"></a>
                     <a href="javascript:;" title="分享到微信"></a>
                     </div>
                   </div>
                 </div>
            </li>
          </ul>
        </div>
      </div>
        <div class="contenttextright">
          <div class="zuihost">
            <strong><i></i>最热门</strong>
            <ul class="zuihostcontent clearfix">
              <li v-for="i in list.hotContents">
                <a href="javascript:;" :title="i.content.title">
                <img :src="i.content.image" :alt="i.content.title">
                <strong>{{i.content.title}}</strong>
                </a>
              </li>
            </ul>
          </div>
                <div class="zuihosttag">
            <strong class="clearfix"><i></i>热门标签<a href="javascript:;">更多</a></strong>
            <div class="zuihosttaglist">
              <a v-for="i in list.hotTag">{{i.name}}</a>
            </div>
          </div>
            <div class="Hottopic">
            <strong class="clearfix"><i></i>热门专题</strong>
            <ul class="Hottopiclist">
              <li v-for="i in list.hotTopics">
              <a :href="i.protocol" class="clearfix">
              <img :src="i.imgUrl" alt="i.title">
              <span>{{i.title}}</span>
              </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="gotop">
    </div>
    <footer>
       <div class="footer">
         <p>旭峰海波科技（北京）有限公司 Copyright ©2016 All Rights Reserved. &nbsp;&nbsp;&nbsp;京ICP备15059087号</p>
         <p>
            <a target="_blank" href="http://www.17getfun.com/publish/index">关于我们</a> &nbsp; | &nbsp;
            <a target="_blank" href="http://www.17getfun.com/publish/index">联系我们</a> &nbsp; | &nbsp;
            <a target="_blank" href="http://www.17getfun.com/publish/index">APP下载</a>
        </p>
       </div>
    </footer>
    </div>
</template>
<script>
    import Vue from 'vue'
    import {
        mapGetters
    } from 'vuex'
    import {
        LIST
    } from '../store/mutation-types'
    const computed = {
        ...mapGetters([
            'list'
        ])
    }
    export default {
      name:'list',
        data() {
            return {
               
            }
        },
       computed
    }
</script>
<style scoped>
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    list-style:none;
    text-decoration:none;
}
.clearfix{
  content:"";
  display:"block";
  clear:both;
}
.wrap{
width:100%;
height:100%;
}
#div{
  width:100%;
  height:80px;
}
header{
width:100%;
border-bottom:1px solid #ccc;
z-index:10;
background:#fff;
position: fixed;
top: 0;
left:0;
}
header>nav{
width:100%;
height:2px;
background:-webkit-linear-gradient(left,#ec66e9,#efd655);
}
.nav{
width:100%;
}
.nav>.navcontent{
padding:15px 0px;
width:1110px;
margin:0 auto;
display:flex;
}
.nav>.navcontent>img{
display:block;
width:135px;
height:33.5px;
margin-right:250px;
}
.nav>.navcontent>ul{
display:flex;
list-style:none;
}
.nav>.navcontent>ul>li{
padding:10px 0px;
margin-left:20px;
}
.nav>.navcontent>ul>li>a{
text-decoration:none;
color:#000;
font-size:15px;
}
.nav>.navcontent>ul>.on>a{
color:#e7497a;
font-weight:bold;
}
.content{
  width:100%;
  height:100%;
  overflow:hidden;
}
.contenttext{
  width:1110px;
  margin:0 auto;
  display: flex;
}
.textleft{
  width: 820px;
}
.contenttextleft{
  width:820px;
}
.contenttextright{
  -webkit-flex-grow:1;
  padding:10px;
}
.contenttextleft>ul{
width:100%;
}
.contenttextleft>ul>li{
  display:inline-block;
  width:260px;
  float:left;
  margin:5px;
}
.contenttextleft>ul>.contentimage>a{
  display:block;
  width:260px;
  max-height:464px;
  overflow: hidden;
}
.contenttextleft>ul>.contentimage>a>img{
  display:block;
  width: 100%;
  height: 100%;
}
.contenttextleft>ul>.swiper{
  width:532px;
  height:220px; 
}
.contenttextleft>ul>.swiper>ul{
  width:532px;
  height:220px; 
   position: relative; 
}
.contenttextleft>ul>.swiper>ul>li{
   width:100%;
   height:100%;
   position: absolute;
}
.contenttextleft>ul>.swiper>ul>li>a>img{
    width:532px;
    height:220px; 
}
.contenttextleft>ul>li>a{
  display:block;
  overflow: hidden;
}
.contenttextleft>ul>li>a>img:hover{
  transform:scale(1.04);
  transition:0.5s;
}
.contenttextleft>ul>li>.contenttext-tltle>h2{
  color:#666;
  font-size:12px;
  padding: 5px;
  border-bottom:1px solid #ccc;

}
.contenttextleft>ul>li>.contenttext-tltle{
  background:#fff;
  width:100%;
  padding:8px;
}
.contenttextleft>ul>li>.contenttext-tltle>.content-name{
  padding:8px 0px;
}
.contenttextleft>ul>li>.contenttext-tltle>.content-name>a{
  color:#B5B5B5;
  font-size:12px;
  text-decoration: none;
  display:inline-block;
  padding:5px 0px;
}
.contenttextleft>ul>li>.contenttext-tltle>.content-name>.share{
   float:right; 
   margin-right:10px;
}
.contenttextleft>ul>li>.contenttext-tltle>.content-name>.share>a{
   background:url("//static.17getfun.com/2017s3/image/publish/index2/share-icon.png");
  background-size:150%;
  background-repeat: no-repeat;
  display: inline-block;
  width:32px;
   height:31px;
  cursor: pointer;
  opacity:0.4;
}
.contenttextleft>ul>li>.contenttext-tltle>.content-name>.share>a:hover{
  opacity:1;
}
.contenttextleft>ul>li>.contenttext-tltle>.content-name>.share>a:nth-child(1){
      background-position:4px -21px;
}
.contenttextleft>ul>li>.contenttext-tltle>.content-name>.share>a:nth-child(2){
      background-position:4px -46px;
}
.contenttextleft>ul>li>.contenttext-tltle>.content-name>.share>a:nth-child(3){
      background-position:2px -94px;
}
.contenttextleft>ul>li>.contenttext-tltle>.content-name>.share>a:nth-child(4){
      background-position:5px -69px;
}
.contenttextright>.zuihost{
  width:260px;
  height:318px;
 /*overflow: hidden;*/
}
.contenttextright>.zuihost>strong{
   font-size:14px;
   vertical-align:top;
}
.contenttextright>.zuihost>strong>i{
  display:inline-block;
 width:2px;
 height:14px;
 background:#FF6250;
 margin-right:3px;
}
.contenttextright>.zuihost>.zuihostcontent{
  width:100%;
  margin-top:10px;
}
.contenttextright>.zuihost>.zuihostcontent>li{
  width:128px;
  height:160px;
  float:left;
  margin-bottom:15px;
  margin-right:2px;
}
.contenttextright>.zuihost>.zuihostcontent>li>a>img{
  width:100%;
  height:123px;
}
.contenttextright>.zuihost>.zuihostcontent>li>a>strong{
  display: block;
  width: 123px;
  font-size:14px;
  margin-top: 10px;
  color:#333;
  font-weight: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

}
.contenttextright>.zuihosttag{
   width:260px;
   margin-top:30px;
}
.contenttextright>.zuihosttag>strong{
   font-size:14px;
   vertical-align:top;
}
.contenttextright>.zuihosttag>strong>i{
  display:inline-block;
 width:2px;
 height:14px;
 background:#FF6250;
 margin-right:3px;
}
.contenttextright>.zuihosttag>strong>a{
  float: right;
  color:#666;
  font-size:14px;
}
 .contenttextright>.zuihosttag>.zuihosttaglist>a{
    font-size: 14px;
    color: #fd7a2f;
    line-height: 25px;
    display: inline;
    padding:2px;
    cursor: pointer;
 }
 .contenttextright>.Hottopic{
   width:260px;
   margin-top:30px;
}
.contenttextright>.Hottopic>strong{
   font-size:14px;
   vertical-align:top;
}
.contenttextright>.Hottopic>strong>i{
  display:inline-block;
 width:2px;
 height:14px;
 background:#FF6250;
 margin-right:3px;
}
.Hottopiclist{
  width:100%;
}
.Hottopiclist>li{
  width:260px;
  height:60px;
  margin:10px;
}

.Hottopiclist>li>a>img{
 width:75px;
 height:60px;
 margin-right:10px;
 float:left;
}
.Hottopiclist>li>a>span{
  font-size:14px;
  color:#333;
}
footer{
  width:100%;
  height:54px;
  background-color: #575757;
  margin: 0;
}
.footer{
  width:1100px;
  height:54px;
  margin:0 auto;
  height:54px;
  text-align: center;
  font-size:12px;
  line-height:54px;
    color:#999;
}
.footer>p:first-child{
  float:left;
}
.footer>p:last-child{
  float:right;
}
.footer>p:last-child>a{
  color:#999;
}
#gotop{
    width: 55px;
    height: 45px;
    background: rgba(0,0,0,.3);
    bottom: 54px;
    background-image: url(//static.17getfun.com/2017s3/image/publish/index2/dirImg.png);
    background-repeat: no-repeat;
    background-position: 11px -190px;
    transition: all .5s ease;
    cursor:pointer;
    position: fixed;
    right: 0;
    bottom:64px;
    z-index:1111;
}
</style>