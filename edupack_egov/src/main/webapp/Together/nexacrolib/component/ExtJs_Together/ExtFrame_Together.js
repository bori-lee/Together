pForm.ufnGetApplication = function()
{
	var objApp = nexacro.getApplication();
	return objApp;
};
 
/**
* @class form open 시 초기 처리 <br>
* @param {Object} obj - 화면
* @return N/A
* @example 
* this.gfnFormOnLoad(this);
*/
pForm.ufnFormOnLoad = function(objForm)
{
	// 부모가 divWork일때(화면일때) keyDown 이벤트 추가 및 화면 loading 시간 측정
	if (objForm.parent.name == "divWork")
	{
		var objApp     = objForm.ufnGetApplication();
		var sStartDate = objApp.sStartDate;
		var nStartTime = objApp.nStartTime;
		
		var objDate  = new Date();
		var sEndDate = objDate.getYear()
						+"-"+String(objDate.getMonth()  ).padLeft(2, '0')
						+"-"+String(objDate.getDate()   ).padLeft(2, '0')
						+" "+String(objDate.getHours()  ).padLeft(2, '0')
						+":"+String(objDate.getMinutes()).padLeft(2, '0')
						+":"+String(objDate.getSeconds()).padLeft(2, '0')
						+" "+objDate.getMilliseconds();						
		var nElapseTime = (objDate.getTime() - nStartTime)/1000;
		
		objForm.parent.parent.staLodingTime.set_text("해당 화면의 loading 시간은 " +  + nElapseTime + " Sec 입니다.");
		
		// 키다운 이벤트 추가
		objForm.addEventHandler("onkeydown", this.ufnOnkeydown, this);	
		
		//killfocus 자동 추가
		if(this.FRAME_IS_AUTOKILLFOCUS) this.ufnSetAutoKillfocus(objForm);
	}
	
	// 팝업 일때 처리
	if (objForm.opener){
		if (objForm.parent instanceof nexacro.ChildFrame){
			// 키다운 이벤트 추가
			objForm.addEventHandler("onkeydown", this.ufnOnkeydown, this);
		}
		
		//killfocus 자동 추가
		if(this.FRAME_IS_AUTOKILLFOCUS) this.ufnSetAutoKillfocus(objForm);
			
// 		// 팝업이 modeless 일때 창닫을때 콜백함수 호출하여 값을 전달 받거나,
// 		// 리턴시 기본형(Primitive type)외 데이타를 리턴받을 수 있게 처리하는 예제 - modal, modalwindow에서 callback함수 및 return 방식 수정 필요
// 		var objChild = objForm.getOwnerFrame();
// 		if (objChild.popupType == "modeless") {
// 			var sPopupId  = objChild.popupId;
// 			var sCallBack = objChild.callback;
// 			
// 			// callBack 함수가 있을 때
// 			if (this.gfnIsNull(sCallBack) == false) {			
// 				// onclose 이벤트 추가
// 				objForm.addEventHandler("onclose", 
// 										function(obj, e) {
// 											var objRtn    = objForm.opener["rtnVal"];
// 											objForm.opener.lookupFunc(sCallBack).call(sPopupId, objRtn);
// 										}
// 										, this);
// 			}
// 		}
	}

	// QuikView 일때 처리
	if (nexacro.getEnvironmentVariable("evQuikView") == "Y"){
		if (this.ufnIsNull(objForm.opener) && objForm.parent instanceof nexacro.ChildFrame){
			// 키다운 이벤트 추가
			objForm.addEventHandler("onkeydown", this.ufnOnkeydown, this);
		}
	}
	
	// Component 초기화 처리
	this.ufnInitComp(objForm);
   
	// 다국어 처리
	this.ufnInitLang(objForm);	
}; 

/**
 * @description 각 화면에서 단축키 지정
*/
pForm.ufnOnkeydown = function(obj, e)
{
	//trace("e.ctrlkey : " + e.ctrlkey + " / e.keycode : " + e.keycode);
	
	// 디버그 창 : Ctrl + Q
	if (e.ctrlkey && e.keycode == 81)
	{
		// 운영환경에서는 실행 방지
		//if (nexacro.getEnvironmentVariable("evRunMode") == "R") return;
		
		var oArg = {};
		var oOption = {popuptype:"modeless", title:"디 버 그",width:"850",height:"600"};
		this.ufnOpenPopup("debugging","Cmm::CmmDebug.xfdl",oArg,"",oOption);	
	}
};

/**
 * @class html5처럼 div/static에 클릭시에도 입력컴포넌트에 killfocus를 발생하기 위하여 최상위 form/div의 onlbuttonup 이벤트를 생성하여 처리함.
 * @param {object} 	obj 업무화면기준 최상위 form or 공통 div
 * @return String
 */ 
pForm.ufnSetAutoKillfocus = function(obj)
{
	//1회만 이벤트를 적용하기 위해서 userpropertie를 사용하여 체크함.
	if (obj.u_autOnkillYn != "Y"  ) {
		obj.addEventHandler("onlbuttonup", function(obj,e) 
		{
			obj.u_autOnkillYn = "Y";

			//현재포커스를 컴포넌트 찾음 
			var objComp = obj.getFocus();
			
			if (objComp == null) return;
			if (objComp == e.fromreferenceobject) return;
			
			//focus를 이동할수 있는 컴포넌트는 제외
			if (String(e.fromreferenceobject) != "[object Static]"
			 && String(e.fromreferenceobject) != "[object Div]"
			 && String(e.fromreferenceobject) != "[object Tab]"
			 && String(e.fromreferenceobject) != "[object Form]"
			 )
			 {
				return;
			 }
			 
			 
			//현재 포커스의 컴포넌트기준으로 가상의 컴포넌트생성후 focus를 준다.
			var sComp = this._ufnGetKiilFocusObj(objComp);								
			sComp.setFocus(false);	//콤포넌트를 기준으로 스크롤을 재설정 안함.
		}, obj);
	}
}

/**
 * @class [내부호출함수] static / div 클릭시 이전컴포넌트 killfocus를 생성하기 위한 focus용 컴포넌트 반환
 * @private
 * @param  {object} objComp 대상컴포넌트
 * @return {object} killfocus를 생성하기 위한 focus용 컴포넌트
*/ 
pForm._ufnGetKiilFocusObj = function(objComp)
{
	//var objComp = obj;
	var nLeft = objComp.getOffsetLeft();
	var nTop  = objComp.getOffsetTop();
	var sKillFocusComp = "sImgKillFocus";
	var sComp = objComp.parent[sKillFocusComp];

	if (sComp == null){	
		var objImageViewer = new ImageViewer(sKillFocusComp, "absolute", nLeft, nTop, 0, 0, null, null);
		objComp.parent.addChild(sKillFocusComp, objImageViewer); 
		objImageViewer.show(); 
		objImageViewer.set_tabstop(false);
		objImageViewer.set_taborder(parseInt(objComp.taborder) + 1);
		sComp = objImageViewer;
	}
	else{
		sComp.move(nLeft, nTop)
	}
	return sComp;
};


/**
* @class form open 시 Component 초기화 처리 <br>
* @param {Object} obj - 화면
* @return N/A
* @example 
* this.gfnInitComp(this);
*/
pForm.ufnInitComp = function(objForm)
{
	var arrComp = objForm.components;
	var nLength = arrComp.length;

	for (var i=0; i<nLength; i++)
	{
		if (arrComp[i] instanceof nexacro.Div){
			// URL로 링크된 경우에는 존재하는 경우에는 해당 링크된 Form Onload에서 처리하도록 한다.
			if (this.ufnIsNull(arrComp[i].url)) this.ufnInitComp(arrComp[i].form);
		}
		else if (arrComp[i] instanceof nexacro.Tab){
			var nPages = arrComp[i].tabpages.length;
			
			for (var j=0; j<nPages;j++)
			{	
				// URL로 링크된 경우에는 존재하는 경우에는 해당 링크된 Form Onload에서 처리하도록 한다.
				if (this.ufnIsNull(arrComp[i].tabpages[j].url)) this.ufnInitComp(arrComp[i].tabpages[j].form);
			}
		}
		else{
			// Grid 처리
			if (arrComp[i] instanceof nexacro.Grid) {
				this.ufnSetGrid(arrComp[i]);
			}
			
			// Edit 처리
			if (arrComp[i] instanceof nexacro.Edit)	{
				// _ms_clear user property가 true 일때만
				if (arrComp[i]._ms_clear == "true") {
					this._gfnSetEditMsClear(arrComp[i]);
				}
			}
			
			// Calendar 처리
			if (arrComp[i] instanceof nexacro.Calendar) {
				// 월달력 Popup Div 호출 이벤트 추가
				if (arrComp[i].uCalType == "MM") {
					arrComp[i].addEventHandler("ondropdown", this.gfnCalMMOndropdown, this);
				}
			}
		}
	}
};


/**
 * @class 해당화면 데이터셋에 추가 <br>
 * @param {String} 	sName : winKey, menuId, menuNm, pageUrl, oArgs
 * @return String
 */
pForm.ufnGetServerUrl = function()
{
	var urlPath = "";
    if (system.navigatorname == "nexacro"){
	    var objEnv = nexacro.getEnvironment();
		urlPath = objEnv.services["SvcUrl"].url;
	}
	else{
		urlPath = window.location.protocol + "//" + window.location.host;
		urlPath+="/edupack_egov/";
	}
	trace("urlPath : " + urlPath);
	return urlPath;
};


/**
 * @class 해당화면 데이터셋에 추가 <br>
 * @param {String} 	sName : winKey, menuId, menuNm, pageUrl, oArgs
 * @return String
 */
pForm.ufnGetArgument = function(sName)
{
	return this.getOwnerFrame().arguments[sName];
};