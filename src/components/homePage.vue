<template>
    <div class="header">
    	<h1>北京<span></span></h1>
    	<i class="iconfont icon-sousuo_sousuo"></i>
    </div>
    <div class="border"></div>
    <div class="main">
		<section class="section">
			<scroller lock-x :scrollbar-y="true" height="100%">
				<div class="scroller">
					<div class="banner swiper-container">
						<ul class="swiper-wrapper">
							<li class="swiper-slide"><img src="../assets/img/3.jpg" alt="第一张"></li>
							<li class="swiper-slide"><img src="../assets/img/3.jpg" alt="第二张"></li>
							<li class="swiper-slide"><img src="../assets/img/3.jpg" alt="第三张"></li>
						</ul>
					</div>
					<div class="nav">
						<div class="navTop">
							<dl>
								<dt><img src="../assets/img/pp.png" alt="品牌专区"></dt>
								<dd>品牌专区</dd>
							</dl>
							<dl>
								<dt><img src="../assets/img/hz.png" alt="合租"></dt>
								<dd>合租</dd>
							</dl>
							<dl>
								<dt><img src="../assets/img/zz.png" alt="整租"></dt>
								<dd>整租</dd>
							</dl>
						</div>
						<div class="navTop">
							<dl>
								<dt><img src="../assets/img/yh.png" alt="优惠专题"></dt>
								<dd>优惠专题</dd>
							</dl>
							<dl>
								<dt><img src="../assets/img/tq.png" alt="通勤找房"></dt>
								<dd>通勤找房</dd>
							</dl>
							<dl>
								<dt><img src="../assets/img/fj.png" alt="附近找房"></dt>
								<dd>附近找房</dd>
							</dl>
						</div>
					</div>
					<div class="content">
						<div class="content_txt">
							<h2>优选品牌</h2>
							<span>查看全部</span>
						</div>
						<div class="content_box">
							<dl>
								<dt><img src="../assets/img/contentImg1.png" alt="住房一"></dt>
								<dd>
									<h2>优派公寓</h2>
									<ul>
										<li>￥2300起</li>
										<li>通州区</li>
										<li>精装标配</li>
									</ul>
								</dd>
							</dl>
						</div>
						<div class="content_box">
							<dl>
								<dt><img src="../assets/img/contentImg2.png" alt="住房一"></dt>
								<dd>
									<h2>南方地产</h2>
									<ul>
										<li>￥2100起</li>
										<li>丰台区</li>
										<li>精装标配</li>
									</ul>
								</dd>
							</dl>
						</div>
						<div class="content_box">
							<dl>
								<dt><img src="../assets/img/contentImg3.png" alt="住房一"></dt>
								<dd>
									<h2>大熊公寓</h2>
									<ul>
										<li>￥2200起</li>
										<li>朝阳区</li>
										<li>精装标配</li>
									</ul>
								</dd>
							</dl>
						</div>
						<div class="content_box">
							<dl>
								<dt><img src="../assets/img/contentImg1.png" alt="住房一"></dt>
								<dd>
									<h2>蛋壳公寓</h2>
									<ul>
										<li>￥2600起</li>
										<li>海淀区</li>
										<li>精装标配</li>
									</ul>
								</dd>
							</dl>
						</div>
					</div>
					<div class="contents">
						<h2>秋夕月，遇见你</h2>
						<div class="contents_box">
							<div class="contents_box_bod">
								<div class="contents_box_bod_min">
									<h2>新上线·优质好房</h2>
									<p>最新上线热门好房</p>
								</div>
							</div>
						</div>
						<div class="contents_box">
							<div class="contents_box_bod">
								<div class="contents_box_bod_min">
									<h2>通州区·新青年聚集地</h2>
									<p>热门区域，一房难求</p>
								</div>
							</div>
						</div>
						<div class="contents_box">
							<div class="contents_box_bod">
								<div class="contents_box_bod_min">
									<h2>丰台区·精品好房</h2>
									<p>丰台区精品好房</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</scroller>
		</section>
	</div>
</template>

<script>
    export default {
		ready () {
			var project = {
				init () {
					this._swiper();
					this._initDom();
				},
				_swiper () {
					new Swiper('.swiper-container', {
						loop: true, //无缝滚动
						//pagination: ".pagination", //显示分页器
						autoplay: 5000, //自动轮播时长
						autoplayDisableOnInteraction: false //当手动播时，自动播停止，手指滑动离开后继续自动播
					});
				},
				_initDom () {
					this._box = $(".content_box");
					this._boxLen = $(".content_box").length;
					let i = 0;
					for(i;i<this._boxLen;i++){
						if(i % 2 !== 0){
							this._box.eq(i).find("dl").css("-webkit-flex-direction","row-reverse")
										  .find("dt").css("margin","0");
						}
					}
				}
			}
			project.init();
		}
    }
</script>

<style scoped lang="scss">
    @import url(../assets/font/iconfont.css);
	.header{
		height: 1.3rem;
		background: #fff;
		text-align: center;
		position: relative;
		h1{
			width: 100%;
			height: 100%;
			line-height: 1.3rem;
			color: #000;
			font-size: .47rem;
		}
		span{
			width: 0;
			height: 0;
			border: .2rem solid transparent;
			border-top-color: #666;
			position: absolute;
			top: .6rem;
			left: 55%;
		}
		i{
			position: absolute;
			right: .7rem;
			top: 0;
			bottom: 0;
			margin: auto 0;
			line-height: 1.3rem;
			font-size: .6rem;
			color: #F65000;
		}
	}
	.border{
		width: 100%;
		height: 1px;
		background: #C0C0C0;
		-webkit-transform:scaleY(0.5);
		-webkit-transform-origin:0 0;
		overflow: hidden;
	}
	.main{
		-webkit-flex:1 0;
		height: 100%;
		overflow: hidden;
		background: #EFEFF4;
		.section{
			height: 100%;
			overflow: hidden;
		}
	}
	.banner{
		height:6.3rem;
		ul{
			width: 100%;
			height: 100%;
			display: -webkit-box;
			li{
				width: 100%;
				height: 100%;
				img{
					width: 100%;
					height: 100%;
					display: block;
				}
			}
		}
	}
	.nav{
		background: #fff;
	}
	.navTop{
		width: 100%;
		height: 2.84rem;
		display: -webkit-flex;
		dl{
			-webkit-flex:1 0;
			text-align: center;
		}
		dt{
			width: 1rem;
			height: 1rem;
			margin: 0 auto;
			margin-top: .68rem;
			margin-bottom: .25rem;
			&:first-child{
				width: .9rem;
			}
			img{
				width: 100%;
				height: 100%;
			}
		}
		dd{
			color: #585858;
			font-size: .34rem;
		}
	}
	.content{
		background: #fff;
		margin-top: .28rem;
		padding-bottom: .2rem;
		.content_txt{
			height: 1.26rem;
			line-height: 1.26rem;
			position: relative;
			h2{
				font-size: .44rem;
				color: #000;
				padding-left: .47rem;
			}
			span{
				position: absolute;
				right: .47rem;
				color: #F03906;
				font-size: .36rem;
				top: 0;
			}
		}
		.content_box{
			width: 11.82rem;
			height: 5.84rem;
			margin: 0 auto;
			border: 1px solid #F0F0F0;
			border-radius: .2rem;
			margin-bottom: .3rem;
			padding: .28rem;
			dl{
				display: -webkit-flex;
				
			}
			dt{
				width: 5.31rem;
				height: 5.31rem;
				margin-right: .32rem;
				img{
					width: 100%;
					height: 100%;
					display: block;
				}
			}
			dd{
				-webkit-flex:1 0;
				padding-left: .28rem;
				padding-top: 1rem;
				h2{
					color: #383838;
					font-size: .54rem;
					font-weight: bold;
					line-height: 1.2rem;
				}
				li{
					color: #5E5E5E;
					font-size: .35rem;
					line-height: .6rem;
				}
			}
		}
	}
	.contents{
		background: #fff;
		margin-top: .32rem;
		h2{
			height: 1.46rem;
			line-height: 1.46rem;
			color: #000;
			font-size: .44rem;
			padding-left: .48rem;
		}
		.contents_box{
			height: 5.94rem;
			background: url(../assets/img/3.jpg) no-repeat;
			background-size: 100% 100%;
			position: relative;
			margin-bottom: .03rem;
		}
		.contents_box_bod{
			width: 10.33rem;
			height: 3.86rem;
			border: .06rem solid #333;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			margin:auto;
			background: #F9F9F8;
			opacity: .8;
		}
		.contents_box_bod_min{
			width: 9.88rem;
			height: 3.4rem;
			border: .02rem solid #333;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			margin:auto;
			padding-top: .52rem;
			text-align: center;
			h2{
				color: #333;
				font-size: .54rem;
				font-weight: bold;
				padding: 0;
			}
			p{
				color: #6F7179;
				font-size: .38rem;
			}
		}
	}
</style>