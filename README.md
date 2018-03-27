基于angular-translate 模块开发的前端国际化
===========================
[官方地址](http://angular-translate.github.io/) 
### 实现两种语言切换
### 下拉菜单项
		<select class="language-switching" ng-controller="langCtrl" ng-model="cur_lang" ng-change="switching(cur_lang)">
			<option value="en">English</option>
			<option value="cn">简体中文</option>
		</select>
### 按钮 移动端运用比较实用
		<div class="btn-group">
			<button type="button" class="btn btn-info" ng-click="togglelang()">{{lang}}</button>
		</div>
		
### 使用
{{'name' | translate}}
