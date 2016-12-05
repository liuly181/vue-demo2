<template>
   <scroller lock-x :scrollbar-y="false" height="100%">
		<div class="header">
			<dl>
				<dt><img src="../assets/img/tx.jpg" alt="头像"></dt>
				<dd id="phone"></dd>
			</dl>
			<div class="meInfo">
				<p>
					<i class="iconfont icon-qianbao"></i>
					<span>钱包</span>
				</p>
				<p>
					<i class="iconfont icon-icon066"></i>
					<span>消息</span>
				</p>
			</div>
		</div>
		 <div class="main">
			<ul>
				<li><i class="iconfont icon-fangzu"></i><span>支付房租</span></li>
				<li><i class="iconfont icon-iconmingchengpaixu65-copy"></i><span>查看租约</span></li>
				<li><i class="iconfont icon-shouhoufuwu"></i><span>售后服务</span></li>
				<li><i class="iconfont icon-zhimaxinyongpingfenmiaobian"></i><span>芝麻信用</span></li>
				<li><i class="iconfont icon-shezhi"></i><span>系统设置</span></li>
			</ul>
		</div>
	</scroller>
</template>

<script>
    export default {
        data () {
            return {
				phone:"18701000903"
            }
        },
        components: {
        },
		ready () {
			let str = this.phone;
			let phone = str.substring(0,3)+"****"+str.substring(7,11);
			$("#phone").text(phone);
		}
    }
</script>

<style scoped lang="scss">
	@import url(../assets/font/iconfont.css);
	.header{
		width: 100%;
		height: 7.77rem;
		background: url(../assets/img/meBg.png) repeat-x;
		background-size: auto 100%;
		dl{
			padding-top: 1.82rem;
		}
		dt{
			width: 2.1rem;
			height: 2.1rem;
			border: .07rem solid #868686;
			border-radius: 50%;
			margin: 0 auto;
			overflow: hidden;
			img{
				width: 100%;
				height: 100%;
				display: block;
			}
		}
		dd{
			text-align: center;
			font-size: .46rem;
			color: #fff;
			line-height: 1.06rem;
		}
		.meInfo{
			width: 6.3rem;
			display: -webkit-flex;
			-webkit-justify-content: space-between;
			margin: 0 auto;
			margin-top: 1.04rem;
			p{
				width: 2.7rem;
				height: .8rem;
				border: 1px solid #fff;
				border-radius: .4rem;
				color: #fff;
				font-size: .38rem;
				text-align: center;
				span{
					line-height: .8rem;
				}
			}
		}
	}
	.main{
		-webkit-flex:1 0;
		height: 100%;
		background: #fff;
		overflow: hidden;
		ul{
			text-align: center;
			li{
				line-height: 1.8rem;
				&:nth-of-type(5){
					i{
						font-size: .6rem;
					}
				}
				span{
					color: #000;
					font-size: .48rem;
				}
				i{
					color: #353535;
					font-size: .68rem;
					margin-right: .5rem;
				}
			}
			
		}
	}
</style>