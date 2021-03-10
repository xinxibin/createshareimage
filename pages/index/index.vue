<template>
	<view class="content">
		<view class="bg-image">
			<image style="width: 100%; height: 100%; opacity: 1;" src="@/static/bgimage.jpg" mode="aspectFill"
				id="bgCover"></image>
				
				
				<view class="bottom-view">
					<view class="left-view">
						<image mode="widthFix" class="header-img" src="@/static/head-normal.png" />
						<view class="title-view">
							<view class="title">名称</view>
							<view class="title">ID: 66666</view>
						</view>
					</view>
					<view class="code-bg-view">
						<view class="qrimg">
							<tki-qrcode ref="qrcode" :val="address" :size="166" unit="upx" :onval="true" :showLoading="true"
								@result="qrR" />
						</view>
					</view>
				</view>
				
		</view>
		<canvas @longtap="onLongTapClick" canvas-id="myCanvas" id="myCanvas"></canvas>


		
	</view>
</template>


<script>
	// 二维码生成插件时长： https://ext.dcloud.net.cn/plugin?id=39
	import tkiQrcode from "@/components/tki-qrcode/tki-qrcode.vue"
	export default {
		components: {
			tkiQrcode
		},
		data() {
			return {
				tempSrc: "",
				address: ""
			}
		},
		onLoad() {
			let that = this
			setTimeout(()=> {
				that.address = "http://www.baidu.com"
			},100)
		},
		onReady() {

		},
		onNavigationBarButtonTap(e) {
			console.log(e);
			this.drawShareImg()
		},
		methods: {
			qrR(res) {
				console.log("------------------------------------");
				console.log(res);
				this.tempSrc = res;
			},
			onLongTapClick() {
				console.log("长按事件触发了");
				this.onSaveImage()
			},
			onSaveImage() {
				console.log(this.tempSrc);
				let that = this;

				uni.saveImageToPhotosAlbum({
					filePath: this.tempSrc,
					success: function() {
						uni.showToast({
							title: "保存成功",
							icon: "none"
						})
					},
				});
			},
			drawShareImg() {
				let that = this
				let ww, hh;
				const ctx = uni.createCanvasContext('myCanvas')
				console.log("--------");
				const query = uni.createSelectorQuery().in(this);
				query.select("#bgCover").boundingClientRect(data => {
					console.log("得到布局位置信息" + JSON.stringify(data));
					ww = data.width; //准确的宽高
					hh = data.height;
					ctx.drawImage("../../static/bgimage.jpg", 0, 0, ww, hh)
					ctx.drawImage("../../static/head-normal.png", 30, hh - 87, 50, 50)
					ctx.drawImage(this.tempSrc, ww - 90, hh - 92, 60, 60)
					ctx.setFontSize(16)
					ctx.setFillStyle('#FFFFFF')
					ctx.fillText('非官方用户', 90, hh - 65)
					ctx.fillText('ID：135487', 90, hh - 43)
					ctx.draw()

					setTimeout(() => {
						uni.canvasToTempFilePath({
							canvasId: 'myCanvas',
							success: function(res) {
								// 在H5平台下，tempFilePath 为 base64
								console.log(res.tempFilePath)
							}
						})
					}, 1000);
				}).exec();
			}
		}
	}
</script>

<style lang="less">
	page {
		width: 100%;
		height: 100%;
	}

	#myCanvas {
		width: 100%;
		height: 100%;
	}

	.content {
		width: 100%;
		height: 100%;
	}
	.code-bg-view {
		height: 3 * 40rpx;
		width: 3 * 40rpx;
		margin-right: 1.5 * 40rpx;
		padding: 10rpx;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.qrimg {
		width: 166rpx;
		height: 166rpx;
	}

	.bg-image {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	
	.bottom-view {
		position: fixed;
		bottom: 1.6 * 40rpx;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 3 * 40rpx;
	
		.left-view {
			display: flex;
			align-items: center;
			margin-left: 1.5 * 40rpx;
	
			.header-img {
				width: 2.5 * 40rpx;
				height: 2.5 * 40rpx;
				margin-right: 0.5 * 40rpx;
			}
	
			.title-view {
				.title {
					font-size: 0.8 * 40rpx;
					font-weight: bold;
					line-height: 27px;
					color: #ffffff;
				}
			}
		}
	
		.right-view {
			height: 3 * 40rpx;
			width: 3 * 40rpx;
			margin-right: 1.5 * 40rpx;
			padding: 10rpx;
			background-color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
	
			img {
				height: 3 * 40rpx;
				width: 3 * 40rpx;
			}
		}
	}
</style>
