<template>
	<view class="content">
		<view :style="{ height: tabHeight + 1 + 'px' }">
			<view :class="topFixed ? 'select-tab-fixed-top' : 'select-tab'" :style="{ height: tabHeight + 'px' }">
				<view class="select-tab-item" :style="{ width: itemWidth }" v-for="(item, index) in titleList" :key="index" @tap="showMenuClick(index)">
					<text class="" :class="statusList[index].isActive ? Yes : No">{{ item.title }}</text>
					<text class="arrows sl-font" :class="statusList[index].isActive ? up : down"></text>
				</view>
			</view>
		</view>
		<popup-layer ref="popupRef" :direction="'bottom'" @close="close" :isTransNav="isTransNav" :tabHeight="50">
			<view style="padding: 0px 0px;" :independence="independence" :themeColor="themeColor" @confirm="filterResult">
				<view class="filter-content" v-for="(item, index) in menuList" :key="index" v-if="menuIndex == index">
					<view v-if="item.isSort">
						<view class="filter-content-list">
							<view
								v-for="(detailItem, idx) in selectDetailList"
								:class="detailItem.isSelected ? 'danxuancheck' : 'danxuan'"
								@tap="sortTap(idx, selectDetailList, item.id)"
							>
								<text>{{ detailItem.title }}</text>
							</view>
						</view>
					</view>
					<view v-else>
						<view class="filter-content-title" v-if="item.detailList.length">
							<text>{{ item.detailTitle }}</text>
						</view>
						<view class="filter-content-detail flex">
							<text
								v-for="(detailItem, idx) in selectDetailList"
								:key="idx"
								:class="detailItem.isSelected?'filter-content-list-item-active':'filter-content-detail-item-default'"
								:style="{ 'background-color': detailItem.isSelected ? themeColor : '#FFFFFF'}"
								@tap="itemTap(idx, selectDetailList, item.isMutiple, item.id)"
							>
								{{ detailItem.title }}
							</text>
						</view>
						<view class="filter-content-footer flex_item">
							<view class="chongz" @tap="resetClick(selectDetailList, item.id)">重置</view>
							<view class="chongz" :style="{'color': '#030B0B', 'background-color': '#53CAC6'}" @tap="sureClick">确定</view>
						</view>
					</view>
				</view>
			</view>
		</popup-layer>
	</view>
</template>

<script>
import popupLayer from '@/components/sl-filter/popup-layer.vue';
import slFilterView from '@/components/sl-filter/filter-view.vue';
export default {
	components: {
		popupLayer,
		slFilterView
	},
	props: {
		menuList: {
			type: Array,
			default() {
				return [];
			}
		},
		themeColor: {
			type: String,
			default() {
				return '#000000';
			}
		},
		color: {
			type: String,
			default() {
				return '#666666';
			}
		},
		// true	     独立菜单。筛选菜单每个子菜单选择完毕点击确定回传当前菜单结果
		// false	并列菜单：筛选菜单各个子菜单选择完毕点击确定后回传所有结果
		independence: {
			type: Boolean,
			default: false
		},
		navHeight: {
			//弹出层距离顶部的高度，需先设置:isTransNav="true"
			type: Number,
			default: 0
		},
		topFixed: {
			type: Boolean,
			default: false
		},
		isTransNav: '' //是否需要设置距离顶部的高度。比如你的导航栏为沉浸式导航栏或者自定义导航栏。如果不需要，则不用设置此属性
	},
	computed: {
		itemWidth() {
			return 'calc(100%/2)';
		},
		selectedObj: {
			get() {
				return this.getSelectedObj();
			},
			set(newObj) {
				return newObj;
			}
		},
		selectedTitleObj() {
			let obj = {};
			for (let i = 0; i < this.menuList.length; i++) {
				let item = this.menuList[i];
				obj[item.id] = item.title;
			}
			return obj;
		},
		defaultSelectedObj() {
			// 保存初始状态
			console.log('defaultSelectedObj');
			return this.getSelectedObj();
		}
	},
	created: function() {
		let arr = [];
		let titleArr = [];
		let r = {};
		for (let i = 0; i < this.menuList.length; i++) {
			arr.push({
				isActive: false
			});
			r[this.menuList[i].id] = this.menuList[i].title;

			if (this.menuList[i].reflexTitle && this.menuList[i].defaultSelectedIndex > -1) {
				titleArr.push({
					title: this.menuList[i].detailList[this.menuList[i].defaultSelectedIndex].title,
					id: this.menuList[i].id
				});
			} else {
				titleArr.push({
					title: this.menuList[i].title,
					id: this.menuList[i].id
				});
			}
		}
		this.statusList = arr;
		this.titleList = titleArr;
		this.tempTitleObj = r;
	},
	data() {
		return {
			tabHeight: 50,
			No: 'titleListNo',
			Yes: 'titleListYes',
			down: 'sl-down',
			up: 'sl-up',
			statusList: [],
			selectedIndex: '',
			titleList: [],
			tempTitleObj: {},
			selectArr: [],
			result: {},
			menuIndex: 0,
			selectDetailList: [],
			independenceObj: {},
			selectedKey: '',
			cacheSelectedObj: {},
			defaultSelectedTitleObj: {}
		};
	},
	methods: {
		//一级分类点击
		showMenuClick(index) {
			this.selectedIndex = index;
			if (this.statusList[index].isActive == true) {
				this.$refs.popupRef.close();
				this.statusList[index].isActive = false;
			} else {
				this.TabClick(index);
				this.$refs.popupRef.show();
			}
		},
		TabClick(index) {
			this.menuTabClick(index);
			for (let i = 0; i < this.statusList.length; i++) {
				if (index == i) {
					this.statusList[i].isActive = true;
				} else {
					this.statusList[i].isActive = false;
				}
			}
		},
		//二级分类
		menuTabClick(index) {
			this.menuIndex = index;
			this.selectDetailList = this.menuList[index].detailList;
			this.selectedKey = this.menuList[index].id;
			// 如果是独立菜单
			if (this.independence && !this.menuList[index].isSort) {
				//为多选筛选方式
				if (JSON.stringify(this.independenceObj) == '{}') {
					this.initIndependenceObj(index);
				} else {
					for (let id in this.independenceObj) {
						if (id != this.selectedKey) {
							this.initIndependenceObj(index);
							this.resetSelected(this.menuList[index].detailList, this.selectedKey);
						}
					}
				}
			}
			if (this.independence && this.menuList[index].isSort) {
				//为单选筛选方式
				this.independenceObj = {};
			}
			if (this.independence) {
				let idx = this.menuList[index].defaultSelectedIndex;
				if (idx != null && idx.toString().length > 0) {
					if (this.menuList[index].isMutiple) {
						//又是多选，又有默认值
						for (let i = 0; i < idx.length; i++) {
							if (this.menuList[index].detailList[idx[i]].isSelected == false) {
								this.itemTap(idx[i], this.menuList[index].detailList, true, this.selectedKey);
							}
						}
					} else {
						//单选
						console.log(this.menuList[index].detailList[idx], 'isSelected');
						if (this.menuList[index].detailList[idx].isSelected == false) {
							this.itemTap(idx, this.menuList[index].detailList, false, this.selectedKey);
						}
					}
				}
			}
			// #ifdef H5
			this.selectedObj = this.selectedObj;
			this.$forceUpdate();
			// #endif
		},
		//选择单选二级分类内容
		sortTap(index, list, id) {
			if (this.independence) {
				this.independenceObj[this.selectedKey] = list[index].value;
				this.result = this.independenceObj;
			} else {
				//
				this.selectedObj[id] = list[index].value;
				this.result = this.selectedObj;
				this.selectedTitleObj[id] = list[index].title;
			}
			for (let i = 0; i < list.length; i++) {
				if (index == i) {
					list[i].isSelected = true;
				} else {
					list[i].isSelected = false;
				}
			}
			let obj = {
				result: this.result,
				titles: this.selectedTitleObj,
				isReset: false
			};
			this.filterResult(obj);
		},
		//并列选择
		itemTap(index, list, isMutiple, id) {
			//判断并列选择为单选还是双选
			if (isMutiple == true) {
				//console.log('并列多选')
				console.log(index)
				list[index].isSelected = !list[index].isSelected;
				if (index == 0) {
					console.log('限')
					//当选择为不限时
					this.resetSelected(list, id);
					if (!this.independence) {
						this.selectedTitleObj[id] = list[index].title;
					}
				} else {
					//当选择为其他时
					list[0].isSelected = false;
					if (list[index].isSelected) {
						//console.log('并列多选')
						if (this.independence) {
							this.independenceObj[this.selectedKey].push(list[index].value);
						} else {
							this.selectedObj[id].push(list[index].value);
						}
					} else {
						console.log('66');
						list[index].isSelected = false;
						if (this.independence) {
							console.log('77');
							var idx = this.independenceObj[this.selectedKey].indexOf(list[index].value);
							this.independenceObj[this.selectedKey].splice(idx, 1);
						} else {
							console.log('88');
							var idx = this.selectedObj[id].indexOf(list[index].value);
							this.selectedObj[id].splice(idx, 1);
						}
					}
					if (this.independence) {
						console.log('99');
						this.result = this.independenceObj;
					} else {
						// console.log('并列多选')
						this.result = this.selectedObj;
					}
				}
			} else {
				//console.log('并列单选')
				if (index == 0) {
					this.resetSelected(list, id);
					if (!this.independence) {
						this.selectedTitleObj[id] = list[index].title;
					}
				} else {
					list[0].isSelected = false;
					if (this.independence) {
						this.independenceObj[this.selectedKey] = list[index].value;
						this.result = this.independenceObj;
					} else {
						this.selectedObj[id] = list[index].value;
						this.result = this.selectedObj;
						this.selectedTitleObj[id] = list[index].title;
					}

					for (let i = 0; i < list.length; i++) {
						if (index == i) {
							list[i].isSelected = true;
						} else {
							list[i].isSelected = false;
						}
					}
				}
			}
			// #ifdef H5
			this.$forceUpdate();
			// #endif
		},
		//当并列多选为 '不限' 选择时
		resetSelected(list, id) {
			console.log(list,id)
			if (typeof this.result[id] == 'object') {
				this.result[id] = [];
				this.selectedTitleObj[id] = list[0].title;
			} else {
				this.result[id] = '';
				this.selectedTitleObj[id] = list[0].title;
			}
			for (let i = 0; i < list.length; i++) {
				if (i == 0) {
					list[i].isSelected = true;
				} else {
					list[i].isSelected = false;
				}
			}
			// #ifdef H5
			this.$forceUpdate();
			// #endif
		},
		getMenuListTemp() {
			let arr = this.menuList;
			for (let i = 0; i < arr.length; i++) {
				let item = arr[i];
				for (let j = 0; j < item.detailList.length; j++) {
					let d_item = item.detailList[j];
					if (j == 0) {
						d_item.isSelected = true;
					} else {
						d_item.isSelected = false;
					}
				}
			}
			return arr;
		},
		// 重置所有选项，包括默认选项，并更新result
		resetAllSelect(callback) {
			this.$refs.slFilterView.resetAllSelect(function(e) {
				callback(e);
			});
		},
		// 重置选项为设置的默认值，并更新result
		resetSelectToDefault(callback) {
			this.$refs.slFilterView.resetSelectToDefault(function(e) {
				callback(e);
			});
		},
		resetMenuList(val) {
			this.menuList = val;
			this.$emit('update:menuList', val);
			this.$forceUpdate();
			this.$refs.slFilterView.resetMenuList(val);
		},
		filterResult(obj) {
			let val = obj.result;
			let titlesObj = obj.titles;
			// 处理选项映射到菜单title
			if (this.independence) {
				if (!this.menuList[this.selectedIndex].isMutiple || this.menuList[this.selectedIndex].isSort) {
					let tempTitle = '';
					for (let i = 0; i < this.menuList[this.selectedIndex].detailList.length; i++) {
						let item = this.menuList[this.selectedIndex].detailList[i];
						if (item.value == val[this.menuList[this.selectedIndex].id]) {
							tempTitle = item.title;
						}
					}
					if (this.menuList[this.selectedIndex].reflexTitle) {
						this.titleList[this.selectedIndex].title = tempTitle;
					}
				}
			} else {
				//
				for (let id in titlesObj) {
					if (!Array.isArray(titlesObj[id])) {
						this.tempTitleObj[id] = titlesObj[id];
					}
				}
				for (let id in this.tempTitleObj) {
					for (let i = 0; i < this.titleList.length; i++) {
						if (this.titleList[i].id == id) {
							this.titleList[i].title = this.tempTitleObj[id];
						}
					}
				}
			}
			this.$refs.popupRef.close();
			if (obj.isReset) {
			} else {
				this.$emit('result', val);
			}
		},
		// 处理并列菜单默认值
		getSelectedObj() {
			let obj = {};
			for (let i = 0; i < this.menuList.length; i++) {
				let item = this.menuList[i];
				//如果默认值 != '',或者默认值大于0
				if (!this.independence && item.defaultSelectedIndex != null && item.defaultSelectedIndex.toString().length > 0) {
					//如果为多选
					if (item.isMutiple) {
						obj[item.id] = [];
						item.detailList[0].isSelected = false;
						// 并列单选默认值
						if (!Array.isArray(item.defaultSelectedIndex)) {
							console.log(11);
							item.defaultSelectedIndex = [item.defaultSelectedIndex];
						}
						// 并列多选默认值
						for (let j = 0; j < item.defaultSelectedIndex.length; j++) {
							item.detailList[item.defaultSelectedIndex[j]].isSelected = true;
							obj[item.id].push(item.detailList[item.defaultSelectedIndex[j]].value);
						}
					} else {
						//如果为单选
						obj[item.id] = item.detailList[item.defaultSelectedIndex].value;
						this.selectedTitleObj[item.id] = item.detailList[item.defaultSelectedIndex].title;
						this.defaultSelectedTitleObj[item.id] = item.detailList[item.defaultSelectedIndex].title;
						item.detailList[0].isSelected = false;
						item.detailList[item.defaultSelectedIndex].isSelected = true;
					}
				} else {
					if (item.isMutiple) {
						obj[item.id] = [];
					} else {
						obj[item.id] = '';
					}
				}
			}
			//所有选中的默认值
			this.result = obj;
			return obj;
		},
		// 重置所有选项，包括默认选项，并更新result
		resetAllSelect(callback) {
			let titles = [];
			for (let i = 0; i < this.menuList.length; i++) {
				this.resetSelected(this.menuList[i].detailList, this.menuList[i].id);
				titles[this.menuList[i].id] = this.menuList[i].title;
			}
			let obj = {
				result: this.result,
				titles: titles,
				isReset: true
			};
			this.filterResult(obj);
			callback(this.result);
		},
		// 重置选项为设置的默认值，并更新result
		resetSelectToDefault(callback) {
				for (let i = 0; i < this.menuList.length; i++) {
					this.selectDetailList = this.menuList[i].detailList;
					if (this.menuList[i].defaultSelectedIndex) {
						if (Array.isArray(this.menuList[i].defaultSelectedIndex)) { // 把所有默认的为false的点为true
							for (let j = 0; j < this.menuList[i].defaultSelectedIndex.length; j++) {
								if (this.selectDetailList[this.menuList[i].defaultSelectedIndex[j]].isSelected == false) {
									this.itemTap(this.menuList[i].defaultSelectedIndex[j], this.selectDetailList, this.menuList[i].isMutiple, this
										.menuList[i].id)
								}
							}
						} else {
							this.itemTap(this.menuList[i].defaultSelectedIndex, this.selectDetailList, this.menuList[i].isMutiple, this.menuList[
								i].id)
						}
						// 获取非默认项的下标
						let unDefaultSelectedIndexArr = this.getUnDefaultSelectedIndex(this.menuList[i])
						// 把所有不是默认的为true的点为false
						for (let j = 0; j < unDefaultSelectedIndexArr.length; j++) {
							if (this.selectDetailList[unDefaultSelectedIndexArr[j]].isSelected == true) {
								this.itemTap(unDefaultSelectedIndexArr[j], this.selectDetailList, this.menuList[i].isMutiple, this
										.menuList[i].id)
							}
						}
					}
				}
				this.selectedObj = this.defaultSelectedObj;
				this.result = this.defaultSelectedObj;
				let obj = {
					'result': this.result,
					'titles': this.defaultSelectedTitleObj,
					'isReset': true
				}
				this.filterResult(obj);
				callback(this.result)
		},
		getUnDefaultSelectedIndex(menuListItem) {
			// 获取非默认项
			let tempDefault = menuListItem.defaultSelectedIndex;
			if (!Array.isArray(tempDefault)) {
				tempDefault = [tempDefault];
			}
			// 获取所有项的下标 组成新的数组
			let all = [];
			for (let i = 0; i < menuListItem.detailList.length; i++) {
				all.push(i);
			}
			// 将默认选中的数组与所有项的数组的不同值合并为一个新数组
			var unDefaultSelectedIndex = tempDefault
				.filter(function(v) {
					return !(all.indexOf(v) > -1);
				})
				.concat(
					all.filter(function(v) {
						return !(tempDefault.indexOf(v) > -1);
					})
				);
			return unDefaultSelectedIndex;
		},
		resetMenuList(val) {
			this.menuList = val;
			this.$emit('update:menuList', val);
		},
		initIndependenceObj(index) {
			this.independenceObj = {};
			if (this.menuList[index].isMutiple) {
				this.independenceObj[this.selectedKey] = [];
			} else {
				this.independenceObj[this.selectedKey] = '';
			}
		},
		sureClick() {
			let obj = {
				result: this.result,
				titles: this.selectedTitleObj,
				isReset: false
			};
			this.filterResult(obj);
		},
		resetClick(list, id) {
			this.resetSelected(list, id);
		},
		close() {
			for (let i = 0; i < this.statusList.length; i++) {
				this.statusList[i].isActive = false;
			}
		}
	}
};
</script>

<style>
@import 'iconfont/iconfont.css';

.select-tab {
	border-bottom: #f7f7f7 1px solid;
	background-color: #ffffff;
	display: flex;
	width: 100%;
}

.select-tab-fixed-top {
	border-bottom: #f7f7f7 1px solid;
	background-color: #ffffff;
	display: flex;
	width: 100%;
	/* position: fixed; */
	/* #ifdef H5 */
	top: 130px;
	/* #endif */
	/* #ifndef H5 */
	top: 0;
	/* #endif */
}

.arrows {
	margin-left: 5px;
}
.sl-up {
	color: #55cbc7 !important;
}
.select-tab .select-tab-item,
.select-tab-fixed-top .select-tab-item {
	display: flex;
	justify-content: center;
	align-items: center;
}
.titleListNo {
	color: #4D4D4D !important;
}
.titleListYes {
	color: #53cac6 !important;
}
.titleListch .select-tab .select-tab-item text,
.select-tab-fixed-top .select-tab-item text {
	color: #4D4D4D;
	font-size: 12px;
}
.filter-content {
	background-color: #ffffff;
}

.filter-content-title {
	border-bottom: #eeeeee 1px solid;
	padding: 10px 15px;
	font-size: 12px;
	color: #484848;
}

.filter-content-detail {
	padding: 5px 15px;
	border-bottom: 2rpx solid #F4F4F4;
}

.filter-content-detail-item-active {
	background-color: #d1372c;
	color: #ffffff;
	padding: 5px 15px;
	border-radius: 20px;
	margin-right: 10px;
	margin-top: 10px;
	display: inline-block;
	font-size: 14px;
}

.filter-content-footer {
	width: 100%;
	text-align: center;
	margin-left: 55%;
	height: 60px;
}
.chongz{
		text-align: center;
		padding: 8px 15px;
		border: 2rpx solid #CECECE;
		border-radius: 10rpx;
		margin-right: 15px;
		
	}
	.submit{
		text-align: center;
		padding: 15px 35px;
	}
.filter-content-list {
	padding: 0px 15px;
}

.filter-content-list-item-default {
	color: #4D4D4D;
	width: 100%;
	padding: 10px 20px;
	border-bottom: 2rpx solid #DFDFDF;
}

.filter-content-list-item-default text {
	width: 90%;
	font-size: 12px;
	display: inline-block;
}
.filter-content-detail-item-default {
	background-color: #ffffff;
	color: #4D4D4D;
	padding: 5px 15px;
	border-radius: 5px;
	margin: 10px 0;
	display: inline-block;
	font-size: 12px;
	border: 2rpx solid #F0F0F0;
	font-size: 12px;
}
.danxuancheck{
	padding: 10px 0px;
	color:#53CAC6;
	font-size: 12px;
	border-bottom: 2rpx solid #F4F4F4;
}
.danxuan{
	padding: 10px 0px;
	font-size: 12px;
	color:#4D4D4D;
	border-bottom: 2rpx solid #F4F4F4;
}
.filter-content-list-item-active {
	color: #505454;
	background-color:#EDFAF9;
	padding: 5px 15px;
	border-radius: 5px;
	margin: 10px 0;
	border: 2rpx solid #53CAC6;
}

.filter-content-list-item-active text {
	font-size: 12px;
	width: 90%;
	display: inline-block;
}

.filter-content-list-item-active:after {
	content: '';
}
</style>
