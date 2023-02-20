(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameBottom");
            this.set_titletext("frameBottom");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,30);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMessage", this);
            obj._setContents("<ColumnInfo><Column id=\"TOPIC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPIC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_topicType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1000</Col><Col id=\"NAME\">긴급</Col></Row><Row><Col id=\"CODE\">2000</Col><Col id=\"NAME\">공지사항</Col></Row><Row><Col id=\"CODE\">9999</Col><Col id=\"NAME\">일반 메시지</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Info", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROTOCAL_VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PROJECT_ID\">TOBE_EDU</Col><Col id=\"PROTOCAL_VERSION\">3</Col><Col id=\"ADDRESS\">tcp://localhost:50001, http://localhost:50001</Col><Col id=\"HTML5\">tcp://172.10.11.14:50001, http://172.10.11.14:50000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new XPush("XPush00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staStatus","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_BF_Bg");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"6","32","18","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("연장");
            obj.set_cssclass("btn_BF_Extend");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"1","143","29","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_BF_Section");
            obj.set_text("세션만료시간 | 26:30");
            this.addChild(obj.name, obj);

            obj = new Button("btnNotice",null,"6","52","18","203",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("알림 1");
            obj.set_cssclass("btn_BF_Extend");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","940","6","70","19",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("전체메세지");
            obj.set_cssclass("btn_BF_Extend");
            this.addChild(obj.name, obj);

            obj = new TextArea("taLog","450","10","440","114",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1278,30,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FrameBottom.xfdl", function() {
        /**
        *  Necacro EduPack
        *  @MenuPath    frame > frameBottom
        *  @FileName 	frameBottom.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2022.05.02
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022.05.02     	Education 	            	최초 생성
        *  2022.08.10     	Education 	            	스크립트 정비
        *******************************************************************************
        */


        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);

        	//XPush Message 송/수신을 위한 Layout세팅

        	if ((nexacro._OS == "Android" || nexacro._OS == "iOS") && (nexacro._Browser == "Runtime"))
        	{
        		this.XPush00.set_layouturl("%USERAPP%XPushUrl/XPush_Message_Layout.xml"); // WRE 환경일 떄
        	} else
        	{
        		this.XPush00.set_layouturl("XPushUrl::XPush_Message_Layout.xml");
        	}

        	//  if(this.dsMessage.getRowCount() > 0)

              this.XPush00.set_projectid("TOBE_EDU");     //ProjectName
              this.XPush00.set_protocolversion(3);   //Protocal

        	 this.XPush00.set_iplist( "tcp://localhost:50001, http://localhost:50000"); // nre와 wre로 보내는 차이

        	/*
        	 * connection 성공, 실패는 event 에서 발생
        	 */
        	this.XPush00.connect("User04", "..."); //비번은 의미없음

        };
        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * @description  알림여부에 맞게 알림창 초기화
         * @param  {object} objTargetForm 타겟form
         * @return none
         */
        this.fnInitNoticeShow = function(objTargetForm)
        {
        	var objForm = objTargetForm;
        	var bShow   = this.fnGetNoticeShow();
        	var bAni    = false;
        	this.fnSetNoticeShow(objForm, bShow, bAni);
        }


        /**
         * @description  현재알림상태 정보 리턴
         * @param  none
         * @return {boolean} 여부
         */
        this.fnGetNoticeShow = function()
        {
        	if (this.btnNotice.u_showYn == "Y"){
        		return true;
        	}
        	return false;
        }

        /**
         * @description  현재알림상태 정보 셋팅
         * @param  {object} objForm 적용form
         * @param  {boolean} bShow 표시여부
         * @param  {boolean} bAni 애니메이션 적용여부
         * @return none
         */
        this.fnSetNoticeShow = function(objForm, bShow, bAni)
        {
        	//표시여부 셋팅 및 디자인적용
        	if(this.dsMessage.getRowCount() == 0) return;
        	var sMsg = this.dsMessage.getColumn(this.dsMessage.getRowCount()-1, "MSG");

        	if (bShow){
        		this.btnNotice.u_showYn = "Y";									//알림적용여부(u_showYn : 유저프로퍼티로 사용)
        		this.btnNotice.set_border("1px solid red");						//알림강조라인
        		objForm.divNotice.form.staNotice.set_text(sMsg);				//알림내용

        	}
        	else{
        		this.btnNotice.u_showYn = "N";
        		this.btnNotice.set_border("");
        	}

        	//animation 이용여부에 따른 표시 동작호출
        	if (bAni){
        		this.fnCreateAniObject(objForm);
        		if (bShow){
        			objForm.aniShow.play();
        		}
        		else{
        			objForm.aniHide.play();
        		}
        	}
        	else{
        		if (bShow){
        			objForm.divNotice.set_height(150);
        		}
        		else{
        			objForm.divNotice.set_height(0);
        		}
        	}
        }



        /**
         * @description Left 접고/펼치기 (frameWorkTitle에서 호출)
        */
        this.fnCreateAniObject = function(objForm)
        {
        	//animation 미존재시 추가
        	if (!objForm.aniShow){
        		var objAniShow = new nexacro.Animation("aniShow", objForm);
        		objForm.addChild("aniShow", objAniShow);
        		objForm.aniShow.addTarget("AniItem01", objForm.divNotice, "height:150");
        		objForm.aniShow.setEventHandler("oncomplete"
        									, 	function(obj,e)
        										{
        											//trace("끝1");
        										}
        									, objForm);

        		objForm.aniShow.set_duration(500);

        		var aniObj01 = new nexacro.Animation("aniHide", objForm);
        		objForm.addChild("aniHide", aniObj01);
        		objForm.aniHide.addTarget("AniItem01", objForm.divNotice, "height:0");
        		objForm.aniHide.setEventHandler("oncomplete"
        									, 	function(obj,e)
        										{
        											//trace("끝2");
        										}
        									, objForm);
        		objForm.aniHide.set_duration(500);
        	}
        };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description 알림오픈버튼 클릭
        */
        this.btnNotice_onclick = function(obj,e)
        {

        	//notice 표시가능한 화면존재시 노티스를 한다.
        	var objTagetForm = null;
        	var objApp  = this.gfnGetApplication();

        	//FrameMain 활성화시
        	if (objApp.gvVFrameSet1.separatesize == "30,*,0"){
        		objTagetForm = objApp.gvMainFrame.form;
        	}
        	//업무화면 활성화시
        	else{
        		objTagetForm = objApp.gvWorkFrame.getActiveFrame().form;
        	}

        	var bAni = true;
        	//this.btnNotice.u_showYn 으로 표시 여부 제어
        	if (this.btnNotice.u_showYn == "Y"){
        		this.fnSetNoticeShow(objTagetForm, false, bAni)
        	}
        	else{
        		this.fnSetNoticeShow(objTagetForm, true, bAni)
        	}

        };

        //xpush 서버에 요청된 작업이 실패했을 때 발생되는 이벤트
        this.XPush00_onerror = function(obj,e)
        {

        //	this.taLog.set_value("");
        	this.taLog.set_value(this.taLog.value + "\n" + "XPush00_onerror Event\n" +
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
        		this.taLog.set_value( "e.message != null\n" +
        			" - e.message.messagetype: " + e.message.messagetype + "\n" +
        			" - e.message.messagekey: " + e.message.messagekey + "\n" +
        			" - e.message.messageid: " + e.message.messageid + "\n" +
        			" - e.message.devicetoken: " + e.message.devicetoken
        		)
        	}

        	if( e.action == 0 ) {
        		this.taLog.set_value(this.taLog.value + "\n" +  "connect() error");
        	}
        	if( e.action == 1 ) {
        		this.taLog.set_value(this.taLog.value + "\n" + "disconnect() error");
        	}
        	if( e.action == 2) {
        		this.taLog.set_value(this.taLog.value + "\n" + "subscribe() error");
        	}
        	if( e.action == 3) {
        		this.taLog.set_value(this.taLog.value + "\n" + "unsubscribe() error");
        	}
        	if( e.action == 4) {
        		this.taLog.set_value(this.taLog.value + "\n" + "requestMessage() error");
        	}
        	if( e.action == 5) {
        		this.taLog.set_value(this.taLog.value + "\n" + "sendResponse() error");
        	}
        	if( e.action == 6) {
        		this.taLog.set_value(this.taLog.value + "\n" + "reqisterDevice() error");
        	}
        	if( e.action == 7) {
        		this.taLog.set_value(this.taLog.value + "\n" + "unreqisterDevice() error");
        	}
        	if( e.action == 8) {
        		this.taLog.set_value(this.taLog.value + "\n" + "reqisterUser() error");
        		this.XPush00.subscribe("9999", "ALL", this, this.dsMessage, "append", "fn_push_callback") //신뢰성 관련..
        		//this.XPush00.subscribe("9999", "TOBEEDU04", this, this.dsMessage, "append", "fn_push_callback")
        	}
        	if( e.action == 9) {
        		this.taLog.set_value(this.taLog.value + "\n" + "unreqisterUser() error");
        	}
        };


        this.XPush00_onkeepalive = function(obj,e)
        {
        	this.taLog.set_value("KEEP");
        };

        //xpush 서버에 요청된 작업이 성공했을 때 발생되는 이벤트
        this.XPush00_onsuccess = function(obj,e)
        {
        	//trace(this.dsMessage.saveXML());
        /*
        	alert("XPush00_onsuccess Event\n" +
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
        */
        	if(e.message != null) {
        		this.taLog.set_value( "e.message != null\n" +
        			" - e.message.messagetype: " + e.message.messagetype + "\n" +
        			" - e.message.messagekey: " + e.message.messagekey + "\n" +
        			" - e.message.messageid: " + e.message.messageid + "\n" +
        			" - e.message.returnvalue: " + e.message.returnvalue + "\n" +
        			" - e.message.devicetoken: " + e.message.devicetoken
        		)
        	}

        	if( e.action == 0 ) {
        		this.taLog.set_value("connect() success");

        		var ret = this.XPush00.registerTopic("9999", "ALL"); // 신뢰성
        		if(ret)
        		{
        			this.XPush00.subscribe("9999", "ALL", this, this.dsMessage, "append", "fn_push_callback");

        		}
        		//this.XPush00.subscribe("9999", "TOBEEDU04", this, this.dsMessage, "append", "fn_push_callback")

        	}
        	if( e.action == 1 ) {
        		this.taLog.set_value("disconnect() success");
        	}
        	if( e.action == 2) {
        		this.taLog.set_value("subscribe() success");
        		this.XPush00.requestMessage("9999", "ALL");

        	}
        	if( e.action == 3) {
        		this.taLog.set_value("unsubscribe() success");
        	}
        	if( e.action == 4) {
        		this.taLog.set_value("requestMessage() success");
        	//	trace("e4 : " + this.dsMessage.saveXML());
        	}
        	if( e.action == 5) {
        		this.taLog.set_value("sendResponse() success");
        	}
        	if( e.action == 6) {
        		this.taLog.set_value("reqisterDevice() success");
        	}
        	if( e.action == 7) {
        		this.taLog.set_value("unreqisterDevice() success");
        	}
        	if( e.action == 8) {
        		this.taLog.set_value("reqisterUser() success");
        		this.XPush00.subscribe("9999", "ALL", this, this.dsMessage, "append", "fn_push_callback");
        	}
        	if( e.action == 9) {
        		this.taLog.set_value("unreqisterUser() success");
        	}
        	if( e.action == 10) {
        		this.taLog.set_value("requestMessageCount() success");
        		if(e.message.returnvalue != undefined || e.message.returnvalue != null) {
        			var returnvalue = e.message.returnvalue;
        			this.taLog.set_value("length : " + returnvalue.length);
        			for(var i = 0; i < returnvalue.length; i++) {
        				this.taLog.set_value("index:" + i + " : " + returnvalue[i].topictype + " : " + returnvalue[i].topicid + " : " + returnvalue[i].count);
        			}
        		}
        	}

        };

        this.fn_push_callback = function(Row, ChangeColumn, AllColumns, Type, ActionType, MessageId)
        {
        	this.taLog.set_value("XPush00_push_callback\n" +
        		" - ActionType : " + ActionType + "\n" +
        		" - Row : " + Row + "\n" +
        		" - MessageId : " + MessageId + "\n" +
        		"\n" +
        		this.dsMessage.saveXML()
        	);


        	if(this.btnNotice.u_showYn == "Y"){
        		this.btnNotice_onclick();  // 닫아주는 것
        	}

        		this.btnNotice_onclick(); //열어주는 것





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


        this.btn00_onclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("chf_popup1"
        	                  , 0 //vleft
        					  , 0 // vtop
        					  , 400 // 넓이
        					  , 400 // 높이
        					  , null
        					  , null
        					  , "EduBasic::XPush\\XPush_Popup.xfdl");

        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)") // 컬러값
        	objChildFrame.set_dragmovetype("all");


        	var objParam = {
        					 param1:this.dsMessage};

        	objChildFrame.showModal( this.getOwnerFrame() // 현재 자신의 폼에
        	                       , objParam // 파라미터 전달
        						   , this // 폼에대한 정보 넘겨주고
        						   , "fn_popupCallback");	// 값을 전달받기위한 callback
        };

        this.fn_popupCallback = function(strPopupID, strReturn)
        {
        	if(strReturn == undefined){
        		return;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnNotice.addEventHandler("onclick",this.btnNotice_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.XPush00.addEventHandler("onsuccess",this.XPush00_onsuccess,this);
            this.XPush00.addEventHandler("onerror",this.XPush00_onerror,this);
            this.XPush00.addEventHandler("onkeepalive",this.XPush00_onkeepalive,this);
        };
        this.loadIncludeScript("FrameBottom.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
