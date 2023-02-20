(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Top");
            this.set_titletext("Top");
            this.set_scrollbartype("none");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,80);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMessage", this);
            obj._setContents("<ColumnInfo><Column id=\"TOPIC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPIC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new XPush("XPush00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ImageViewer("imgLogo","0","10","200","60",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_image("url(\'theme://images/btn_TF_Together.png\')");
            obj.set_stretch("fit");
            obj.set_border("0px none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Menu("mnuCateg","imgLogo:0","24","135","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("gdsMenu");
            obj.set_captioncolumn("MENU_NAME");
            obj.set_idcolumn("MENU_ID");
            obj.set_levelcolumn("MENU_LEVEL");
            obj.set_enablecolumn("MENU_ENABLE");
            obj.set_hotkeycolumn("MENU_KEY");
            obj.set_iconcolumn("MENU_ICON");
            obj.set_positionstep("0");
            obj.set_background("white");
            obj.set_font("15pt/normal \"휴먼모음T\"");
            this.addChild(obj.name, obj);

            obj = new Static("staLogout",null,"24","80","37","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("로그아웃");
            obj.set_textAlign("center");
            obj.set_font("12pt/normal \"휴먼모음T\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnNotice",null,"24","97","34","80",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("알림");
            obj.set_font("12pt/normal \"휴먼모음T\"");
            obj.set_color("navy");
            obj.set_background("white");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Static("staLogin",null,"24","80","37","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("로그인");
            obj.set_textAlign("center");
            obj.set_font("12pt/normal \"휴먼모음T\"");
            this.addChild(obj.name, obj);

            obj = new Menu("mnuMyClass",null,"24","97","34","btnNotice:-24",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("gdsMenu00");
            obj.set_captioncolumn("MENU_NAME");
            obj.set_idcolumn("MENU_ID");
            obj.set_levelcolumn("MENU_LEVEL");
            obj.set_enablecolumn("MENU_ENABLE");
            obj.set_hotkeycolumn("MENU_KEY");
            obj.set_iconcolumn("MENU_ICON");
            obj.set_positionstep("0");
            obj.set_background("white");
            obj.set_font("12pt/normal \"휴먼모음T\"");
            this.addChild(obj.name, obj);

            obj = new Static("staAddClass",null,"24","64","34","btnNotice:91",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("모임 등록");
            obj.set_textAlign("center");
            obj.set_font("12pt/normal \"휴먼모음T\"");
            this.addChild(obj.name, obj);

            obj = new Static("staMyInfo",null,"24","64","37","btnNotice:179",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("내 정보");
            obj.set_textAlign("center");
            obj.set_font("12pt/normal \"휴먼모음T\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearch","mnuCateg:0","23","280","37",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_displaynulltext("찾으시는 모임이 있으신가요?");
            obj.set_color("black");
            obj.set_text("찾으시는 모임이 있으신가요?");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","edtSearch:0","23","45","37",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_cssclass("btn_WF_Find");
            this.addChild(obj.name, obj);

            obj = new Div("divNotice",null,"8","177","50","423",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("div_WF_Notice");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","23","9","146","32",null,null,null,null,null,null,this.divNotice.form);
            obj.set_taborder("0");
            obj.set_text("새 메세지 도착! \r\n알림창을 확인해주세요");
            this.divNotice.addChild(obj.name, obj);

            obj = new Button("btnClose","147","2","25","16",null,null,null,null,null,null,this.divNotice.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_LOGIN_Close");
            this.divNotice.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divNotice.form
            obj = new Layout("default","",0,0,this.divNotice.form,function(p){});
            this.divNotice.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,80,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","edtSearch","accessibilityaction","ds_class","title");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Top.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\tobesoft\Documents\TOBESOFT\Nexacro N\projects\Together\Frame
        *	@FileName Top.xfdl
        *	@Creator 이수아
        *	@CreateDate 2022/11/20
        *	@Description 해당 폼 정보 설명
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2022/11/20		이수아		최초 생성
        *
        *
        */

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/
        this.fvApp = nexacro.getApplication();
        this.fvObjApp = this.ufnGetApplication();


        /**************************************************************************
        * FORM EVENT 영역(onload, onclose)
        **************************************************************************/
        /**
        * @description 화면 화면이 load될 때 처리할 로직(필수)
        */

        this.Top_onload = function(obj,e)
        {
        	// 알림창 숨기기
        	this.divNotice.set_height(0);
        };


        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/
        /**
        * @description 메세지 콜백
        */

        this.fn_popupCallback = function(strPopupID, strReturn)
        {
        	if(strReturn == undefined){
        		return;
        	}

        	if(strPopupID == "chf_popup1"){
        		var arrRtn = strReturn.split(":");
        		trace(arrRtn[0]  + arrRtn[1]);
        	}
        };

        this.fnMsgCallback = function (strId, strVal)
        {

        	if(strId == "confirm.logout"){
        		if(strVal){
        			this.fvObjApp.gvLogOut = "Y";
        			this.fvObjApp.gdsUser.clear();
        			this.fvObjApp.gdsClass.clear();
        			this.dsMessage.clearData();
        			this.fvObjApp.gvMainFrame.set_formurl("");
        			this.fvObjApp.gvMainFrame.set_formurl("Frame::Main.xfdl");
        			this.staLogout.set_visible(false);
        			this.staLogin.set_visible(true);

        			for(var i =0; i < this.fvObjApp.gdsClass.getRowCount(); i++){
        				trace("disconnect");
        				this.XPush00.unsubscribe("9999", "E"+this.fvObjApp.gdsClass.getColumn(i, "class_no"), this, this.dsMessage, "append", "fn_push_callback");
        			}

        			this.XPush00.disconnect();


        		}
        		else{
        			this.fvObjApp.gvLogOut = "N";
        		}
        	}
        };


        this.fn_push_callback = function(Row, ChangeColumn, AllColumns, Type, ActionType, MessageId)
        {
        	trace("XPush00_push_callback\n" +
        		" - ActionType : " + ActionType + "\n" +
        		" - Row : " + Row + "\n" +
        		" - MessageId : " + MessageId + "\n" +
        		"\n"
        		//this.dsMessage.saveXML()
        	);
        	trace("fn_push_callback 들어오는지 확인");

        	this.divNotice_show();   // 알림 보여주기

        	if(ActionType == "PUSH") //실시간
        	{
        		//trace(this.dsMessage.saveXML());
        	}
        	if(ActionType == "RELI") // 2번으로 바꿔주는 작업
        	{
        		// 수신 확인 메시지 전송
        		this.XPush00.sendResponse(MessageId)
        	}
        }


        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/
        /**
        * @description 알림창 보여주는 함수
        */
        this.divNotice_show = function()
        {
        	this.divNotice.set_height(50);
        }

        /**
        * @description xPush 연결
        */
        this.fn_setPush = function(){

        	trace("로그인성공");

        	//XPush Message 송/수신을 위한 Layout세팅

        	if ((nexacro._OS == "Android" || nexacro._OS == "iOS") && (nexacro._Browser == "Runtime"))
        	{
        		this.XPush00.set_layouturl("%USERAPP%XPushUrl/XPush_Message_Layout.xml"); // WRE 환경일 떄
        	} else
        	{
        		this.XPush00.set_layouturl("XPushUrl::XPush_Message_Layout.xml");
        	}

        	this.XPush00.set_projectid("TOBE_EDU");     //ProjectName
        	this.XPush00.set_protocolversion(3);   //Protocal

        	this.XPush00.set_iplist( "tcp://172.10.14.142:50001, http://172.10.14.142:50000"); // nre와 wre로 보내는 차이

        	/*
        	* connection 성공, 실패는 event 에서 발생
        	*/
        	this.XPush00.connect(this.fvObjApp.gdsUser.getColumn(0, "userId"), "..."); //비번은 의미없음
        	this.XPush00.set_userid(this.fvObjApp.gdsUser.getColumn(0, "userId"));
        	trace("fn_setPush" + this.fvObjApp.gdsUser.getColumn(0, "userId"));

        }

        /**
        * @description xpush subscribe, 토픽 등록
        */
        this.fn_setPush1 = function()
        {

        	for(var i =0; i < this.fvObjApp.gdsClass.getRowCount(); i++){

        		trace("push" + "E"+this.fvObjApp.gdsClass.getColumn(i, "class_no"));
        		this.XPush00.subscribe("9999", "E"+this.fvObjApp.gdsClass.getColumn(i, "class_no"), this, this.dsMessage, "append", "fn_push_callback");
        	}

        }

        /**
        * @description xpush 서버에 요청된 작업이 실패했을 때 발생되는 이벤트
        */
        this.XPush00_onerror = function(obj,e)
        {

        	//	trace("");
        	trace("value" + "\n" + "XPush00_onerror Event\n" +
        		" - eventid: " + e.eventid + "\n" +
        		" - statuscode: " + e.statuscode + "\n" +
        		" - errormsg: " + e.errormsg + "\n" +
        		" - reason: " + e.reason + "\n" +
        		" - action: " + e.action + "\n" +
        		" - serverip: " + e.serverip + "\n" +
        		" - serverport: " + e.serverport + "\n" +
        		" - e.message: " + e.message + "\n" +
        		" - e.command : " + e.command + "\n" +
        		" - e.message : " + e.message + "\n" +
        		" - e.returnvalue : " + e.returnvalue);
        	if(e.message != null) {
        		trace( "e.message != null\n" +
        			" - e.message.messagetype: " + e.message.messagetype + "\n" +
        			" - e.message.messagekey: " + e.message.messagekey + "\n" +
        			" - e.message.messageid: " + e.message.messageid + "\n" +
        			" - e.message.devicetoken: " + e.message.devicetoken
        		)
        	}

        	if( e.action == 0 ) {
        		trace("value" + "\n" +  "connect() error");
        	}
        	if( e.action == 1 ) {
        		trace("value" + "\n" + "disconnect() error");
        	}
        	if( e.action == 2) {
        		trace("value" + "\n" + "subscribe() error");
        	}
        	if( e.action == 3) {
        		trace("value" + "\n" + "unsubscribe() error");
        	}
        	if( e.action == 4) {
        		trace("value" + "\n" + "requestMessage() error");
        	}
        	if( e.action == 5) {
        		trace("value" + "\n" + "sendResponse() error");
        	}
        	if( e.action == 6) {
        		trace("value" + "\n" + "reqisterDevice() error");
        	}
        	if( e.action == 7) {
        		trace("value" + "\n" + "unreqisterDevice() error");
        	}
        	if( e.action == 8) {
        		trace("value" + "\n" + "reqisterUser() error");
        		//this.XPush00.subscribe("9999", "ALL", this, this.dsMessage, "append", "fn_push_callback") //신뢰성 관련..
        		//this.XPush00.subscribe("9999", "TOBEEDU04", this, this.dsMessage, "append", "fn_push_callback")
        	}
        	if( e.action == 9) {
        		trace("value" + "\n" + "unreqisterUser() error");
        	}
        };


        /**
        * @description xpush가 계속 살아있을 때 trace 처리
        */
        this.XPush00_onkeepalive = function(obj,e)
        {
        	trace("KEEP");
        };

        /**
        * @description xpush 서버에 요청된 작업이 성공했을 때 발생되는 이벤트
        */
        this.XPush00_onsuccess = function(obj,e)
        {
        	trace("XPush00_onsuccess Event\n" +
        		" - eventid: " + e.eventid + "\n" +
        		" - statuscode: " + e.statuscode + "\n" +
        		" - errormsg: " + e.errormsg + "\n" +
        		" - reason: " + e.reason + "\n" +
        		" - action: " + e.action + "\n" +
        		" - serverip: " + e.serverip + "\n" +
        		" - serverport: " + e.serverport + "\n" +
        		" - e.message: " + e.message + "\n" +
        		" - e.command : " + e.command + "\n" +
        		" - e.message : " + e.message + "\n" +
        		" - e.returnvalue : " + e.returnvalue);

        	if(e.message != null) {
        		trace("메세지없음");

        	}

        	if( e.action == 0 ) {
        		trace("@@@@@@@@@@@@@@@@@@connect() success");
        		this.fn_setPush1();
        	}
        	if( e.action == 1 ) {
        		trace("disconnect() success");
        	}
        	if( e.action == 2) {
        		trace("subscribe() success");
        		//	this.XPush00.requestMessage("9999", "ALL");
        		var ret = this.XPush00.registerTopic(e.message.messagetype, e.message.messagekey); // 신뢰성
        	}
        	if( e.action == 3) {
        		trace("unsubscribe() success");
        	}
        	if( e.action == 4) {
        		trace("requestMessage() success");
        		//	trace("e4 : " + this.dsMessage.saveXML());
        	}
        	if( e.action == 5) {
        		trace("sendResponse() success");
        	}
        	if( e.action == 6) {
        		trace("reqisterDevice() success");
        	}
        	if( e.action == 7) {
        		trace("unreqisterDevice() success");
        	}
        	if( e.action == 8) {
        		trace("reqisterUser() success");
        		//this.XPush00.subscribe("9999", "ALL", this, this.dsMessage, "append", "fn_push_callback");
        	}
        	if( e.action == 9) {
        		trace("unreqisterUser() success");
        	}
        	if( e.action == 10) {
        		trace("requestMessageCount() success");
        		if(e.message.returnvalue != undefined || e.message.returnvalue != null) {
        			var returnvalue = e.message.returnvalue;
        			trace("length : " + returnvalue.length);
        			for(var i = 0; i < returnvalue.length; i++) {
        				trace("index:" + i + " : " + returnvalue[i].topictype + " : " + returnvalue[i].topicid + " : " + returnvalue[i].count);
        			}
        		}
        	}

        };


        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/
        /**
        * 전체 카테고리 메뉴 클릭 시
        */
        this.mnuCateg_onmenuclick = function(obj,e)
        {
        	nexacro.getApplication().gvCategNo = e.id; //글로벌 변수 카테고리 넘버값 담아주기
        	this.fvObjApp.gvMainFrame.set_formurl(""); //초기화
        	this.fvObjApp.gvMainFrame.set_formurl("Together::Class/listClass.xfdl");
        };


        /**
        * @description 내 모임 메뉴 클릭 시
        */
        this.mnuMyClass_onmenuclick = function(obj,e)
        {
        	if(this.fvObjApp.gdsUser.getRowCount() == 0) {
        		this.ufnAlert("msg1");
        		this.fvObjApp.gvMainFrame.set_formurl("Together::User/Login.xfdl");
        	}else{
        		if(e.id == 1) {

        			var objChildFrame = new ChildFrame();
        			objChildFrame.init("chf_popup1"
        				, 0 //vleft
        				, 0 // vtop
        				, 600 // 넓이
        				, 600 // 높이
        				, null
        				, null
        				, "Together::User/listUserClass_Sub.xfdl");

        			objChildFrame.set_openalign("center middle");
        			objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)") // 컬러값
        			objChildFrame.set_dragmovetype("all");

        			objChildFrame.showModal( this.getOwnerFrame() // 현재 자신의 폼에
        				, "" // 파라미터 전달
        				, this // 폼에대한 정보 넘겨주고
        				, "fn_popupCallback");	// 값을 전달받기위한 callback

        		}else if(e.id == 2) {

        			var objChildFrame = new ChildFrame();
        			objChildFrame.init("chf_popup2"
        				, 0 //vleft
        				, 0 // vtop
        				, 600 // 넓이
        				, 600 // 높이
        				, null
        				, null
        				, "Together::User/listUserWishClass_Sub.xfdl");

        			objChildFrame.set_openalign("center middle");
        			objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)") // 컬러값
        			objChildFrame.set_dragmovetype("all");

        			objChildFrame.showModal( this.getOwnerFrame() // 현재 자신의 폼에
        				, "" // 파라미터 전달
        				, this // 폼에대한 정보 넘겨주고
        				, "fn_popupCallback");	// 값을 전달받기위한 callback

        		}

        	}

        };


        /**
        * @description 로그인 클릭 시 페이지 이동
        */
        this.staLogin_onclick = function(obj,e)
        {
        	this.fvObjApp.gvMainFrame.set_formurl("Together::User/Login.xfdl");
        };

        /**
        * @description 내 정보 클릭 시 페이지 이동
        */
        this.staMyInfo_onclick = function(obj,e)
        {

        	if(this.fvObjApp.gdsUser.getRowCount() == 0) {
        		this.ufnAlert("msg1");
        		this.fvObjApp.gvMainFrame.set_formurl("Together::User/Login.xfdl");
        	}else{
        		this.fvObjApp.gvMainFrame.set_formurl("Together::User/updateUser.xfdl");
        	}
        };


        /**
        * @description 모임 등록 클릭 시
        */
        this.staAddClass_onclick = function(obj,e)
        {
        	if(this.fvObjApp.gdsUser.getRowCount() == 0) {
        		this.ufnAlert("msg1");
        		this.fvObjApp.gvMainFrame.set_formurl("Together::User/Login.xfdl")
        	}else{
        		this.fvObjApp.gvMainFrame.set_formurl("Together::Class/addClass.xfdl");
        	}
        };


        /**
        * @description 검색 아이콘 클릭 시
        */
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fvApp.gvSearch = this.edtSearch.value; 	// 글로벌변수에 검색값 담아주기

        	if(this.edtSearch.value == null || this.edtSearch.value.length < 1){
        		this.ufnAlert("msg2");
        	}else{
        		this.fvObjApp.gvMainFrame.set_formurl("");
        		this.fvObjApp.gvMainFrame.set_formurl("Together::Class/listSearchClass.xfdl");
        	}
        };

        /**
        * @description 로고 클릭 시 메인페이지로 이동
        */
        this.imgLogo_onclick = function(obj,e)
        {
        	this.fvObjApp.gvMainFrame.set_formurl("");
        	this.fvObjApp.gvMainFrame.set_formurl("Frame::Main.xfdl");
        };

        /**
        * @description 로그아웃 클릭 시
        */
        this.staLogout_onclick = function(obj,e)
        {

        	var sMsgId = "confirm.logout";			//메세지ID
        	var arrArg = "";						//메세지취환될값 배열[생략가능]
        	var sPopId = sMsgId;					//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        	var sMsgCallback = "fnMsgCallback";		//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        	// 로그아웃 하시겠습니까?
        	this.ufnAlert(sMsgId, arrArg, sPopId, sMsgCallback);

        };


        /**
        * @description 내 알림 클릭 시
        */
        this.btnNotice_onclick = function(obj,e)
        {
        	if(this.fvObjApp.gdsUser.getRowCount() == 0) {
        		this.ufnAlert("msg1");
        		this.fvObjApp.gvMainFrame.set_formurl("Together::User/Login.xfdl");
        	}else{
        		var objChildFrame = new ChildFrame();
        		objChildFrame.init("chf_popup1"
        			, 0 //vleft
        			, 0 // vtop
        			, 600 // 넓이
        			, 600 // 높이
        			, null
        			, null
        			, "Together::Class/getClassMsg_Sub.xfdl");

        		objChildFrame.set_openalign("center middle");
        		objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)") // 컬러값
        		objChildFrame.set_dragmovetype("all");

        		objChildFrame.showModal( this.getOwnerFrame() // 현재 자신의 폼에
        			, "" // 파라미터 전달
        			, this // 폼에대한 정보 넘겨주고
        			, "fn_popupCallback");	// 값을 전달받기위한 callback

        	}
        };

        /**
        * @description 검색 keycode 사용
        */
        this.edtSearch_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.btnSearch_onclick();
        	}

        };

        /**
        * @description 검색 알림창 닫기
        */
        this.divNotice_btnClose_onclick = function(obj,e)
        {
        	//알림창 닫기
        	this.divNotice.set_height(0);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onrbuttondown",this.Top_onrbuttondown,this);
            this.addEventHandler("onload",this.Top_onload,this);
            this.imgLogo.addEventHandler("onclick",this.imgLogo_onclick,this);
            this.mnuCateg.addEventHandler("onmenuclick",this.mnuCateg_onmenuclick,this);
            this.staLogout.addEventHandler("onclick",this.staLogout_onclick,this);
            this.btnNotice.addEventHandler("onclick",this.btnNotice_onclick,this);
            this.staLogin.addEventHandler("onclick",this.staLogin_onclick,this);
            this.mnuMyClass.addEventHandler("onmenuclick",this.mnuMyClass_onmenuclick,this);
            this.staAddClass.addEventHandler("onclick",this.staAddClass_onclick,this);
            this.staMyInfo.addEventHandler("onclick",this.staMyInfo_onclick,this);
            this.edtSearch.addEventHandler("onchanged",this.edtSearch_onchanged,this);
            this.edtSearch.addEventHandler("onkeyup",this.edtSearch_onkeyup,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.divNotice.form.btnClose.addEventHandler("onclick",this.divNotice_btnClose_onclick,this);
            this.XPush00.addEventHandler("onsuccess",this.XPush00_onsuccess,this);
            this.XPush00.addEventHandler("onerror",this.XPush00_onerror,this);
            this.XPush00.addEventHandler("onkeepalive",this.XPush00_onkeepalive,this);
        };
        this.loadIncludeScript("Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
