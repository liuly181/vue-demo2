<template>
    <div class="header">
    	<h1>心愿</h1>
    </div>
     <div class="main">
		<section class="section">
			<scroller lock-x :scrollbar-y="true" height="100%" use-pulldown id='secHeight'>
				<div class="scroller">
					<div class="contents">
						<div class="contents_box">
							<div class="contents_box_bod">
								<div class="contents_box_bod_min">
									<h2>房源推荐</h2>
									<p>我们为您准备了一些房源，希望您能喜欢</p>
								</div>
							</div>
						</div>
						<div class="contents_box">
							<div class="contents_box_bod">
								<div class="contents_box_bod_min">
									<h2>浏览记录</h2>
									<p><span>0</span>套房源</p>
								</div>
							</div>
						</div>
						<div class="contents_box">
							<div class="contents_box_bod">
								<div class="contents_box_bod_min">
									<h2>收藏房源</h2>
									<p><span>0</span>套房源</p>
								</div>
							</div>
						</div>
						<div class="contents_box">
							<div class="contents_box_bod">
								<div class="contents_box_bod_min">
									<h2>最近拨号</h2>
									<p><span>0</span>套房源</p>
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
        data () {
            return {
            }
        },
        components: {
        },
		ready () {
			
		}
    }
</script>

<style scoped lang="scss">
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
    .contents{
		background: #fff;
		h2{
			height: 1.46rem;
			line-height: 1.46rem;
			color: #000;
			font-size: .44rem;
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
			}
			p{
				color: #6F7179;
				font-size: .38rem;
			}
		}
	}
</style>