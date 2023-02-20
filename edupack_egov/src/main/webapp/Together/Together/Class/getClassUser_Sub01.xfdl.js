(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("getClassUser_Sub");
            this.set_titletext("회원 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(640,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsJoinClass", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"profile_img\" type=\"STRING\" size=\"256\"/><Column id=\"nick\" type=\"STRING\" size=\"256\"/><Column id=\"birth\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"INT\" size=\"256\"/><Column id=\"fileimg\" type=\"STRING\" size=\"256\"/><Column id=\"user_id\" type=\"STRING\" size=\"256\"/><Column id=\"host_id\" type=\"STRING\" size=\"256\"/><Column id=\"class_no\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJoinClassDB", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"profile_img\" type=\"STRING\" size=\"256\"/><Column id=\"nick\" type=\"STRING\" size=\"256\"/><Column id=\"birth\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"INT\" size=\"256\"/><Column id=\"fileimg\" type=\"STRING\" size=\"256\"/><Column id=\"user_id\" type=\"STRING\" size=\"256\"/><Column id=\"host_id\" type=\"STRING\" size=\"256\"/><Column id=\"class_no\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divGetClassUser","5","12","630","468",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","205","7","210","53",null,null,null,null,null,null,this.divGetClassUser.form);
            obj.set_taborder("0");
            obj.set_text("회원 관리");
            obj.set_textAlign("center");
            obj.set_font("18pt/normal \"휴먼모음T\"");
            this.divGetClassUser.addChild(obj.name, obj);

            obj = new Grid("grdGetClassUser","61","79","509","379",null,null,null,null,null,null,this.divGetClassUser.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsJoinClass");
            obj.set_autofittype("col");
            obj.set_border("0px none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"61\"/><Column size=\"159\"/><Column size=\"71\"/><Column size=\"58\"/><Column size=\"80\"/><Column size=\"77\"/></Columns><Rows><Row size=\"17\"/><Row size=\"32\"/><Row size=\"17\"/></Rows><Band id=\"body\"><Cell rowspan=\"3\" displaytype=\"imagecontrol\" text=\"bind:fileimg\" edittype=\"none\" imagestretch=\"fit\" border=\"0px none\" borderRadius=\"20px\"/><Cell col=\"1\" colspan=\"5\" border=\"0px none\"/><Cell row=\"1\" col=\"1\" text=\"bind:nick\" border=\"0px none\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\"/><Cell row=\"1\" col=\"2\" text=\"bind:birth\" border=\"0px none\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\"/><Cell row=\"1\" col=\"3\" suppressalign=\"middle\" text=\"expr:status == 1 ? &quot;모임원&quot; : status == 2 ? &quot;방장&quot; : &quot;운영진&quot;\" border=\"0px none\" color=\"navy\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\"/><Cell row=\"1\" col=\"4\" edittype=\"expr:comp.parent.parent.parent.fnUpdateStatus2(status)\" text=\"expr:comp.parent.parent.parent.fnUpdateStatus3(status)\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\" border=\"0px none\" displaytype=\"expr:comp.parent.parent.parent.fnUpdateStatus(status)\"/><Cell row=\"1\" col=\"5\" displaytype=\"expr:comp.parent.parent.parent.fnUpdateStatus(status)\" edittype=\"expr:comp.parent.parent.parent.fnUpdateStatus2(status)\" text=\"expr:comp.parent.parent.parent.fnUpdateStatus4(status)\" border=\"0px none\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\"/><Cell row=\"2\" col=\"1\" colspan=\"5\" displaytype=\"normal\" edittype=\"normal\" textAlign=\"left\" border=\"0px none\"/></Band></Format></Formats>");
            this.divGetClassUser.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGetClassUser.form
            obj = new Layout("default","",0,0,this.divGetClassUser.form,function(p){});
            this.divGetClassUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",640,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("getClassUser_Sub01.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\tobesoft\Documents\TOBESOFT\Nexacro N\projects\Together\Together\Class
        *	@FileName getClassUser_Sub01.xfdl
        *	@Creator 이수아
        *	@CreateDate 2022/11/20
        *	@Description 방장만이 볼 수 있는 회원관리 폼, 모임장양도/운영진임명 및 해제를 할 수 있다.
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

        this.getClassUser_Sub_onload = function(obj,e)
        {
        	this.fvClassNo= this.parent.param1; // updateClass에서
        	this.ufnTransaction(
        		"getUserJoinClass"
        		,"getUserJoinClass.do"
        		,""
        		,"dsJoinClass=out_join_class"
        		,"paramClassNo="+nexacro.wrapQuote(this.fvClassNo)
        		,"fnCallback")

        };

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/
        /**
        * @description 메세지 콜백
        */

        this.fnMsgCallback = function (strId, strVal){
        	if(strId == "msg.update.host.status"){ // 모임장 양도
        		if(strVal){
        			this.dsJoinClassDB.clearData();
        			this.dsJoinClassDB.addRow();
        			this.dsJoinClassDB.setColumn(0,"user_id", this.dsJoinClass.getColumn(this.dsJoinClass.rowposition,"user_id"));
        			this.dsJoinClassDB.setColumn(0,"class_no", this.dsJoinClass.getColumn(this.dsJoinClass.rowposition,"class_no"));
        			this.dsJoinClassDB.setColumn(0, "host_id", this.dsJoinClass.getColumn(this.dsJoinClass.rowposition, "host_id"));

        			if(this.dsJoinClass.getColumn(this.dsJoinClass.rowposition, "status") != 2) { // 방장이 아닐때..
        				this.dsJoinClassDB.setColumn(0, "status", 2);  // 방장으로 임명
        			}

        			this.ufnTransaction(
        				"updateHostClass"
        				,"updateHostClass.do"
        				,"dsJoinClass=dsJoinClassDB:U:"
        				,"dsJoinClass=out_class dsJoinClass=out_class1 dsJoinClass=out_class2"
        				,""
        				,"fnCallback2")

        		}
        	}else if(strId == "msg.update.manager.status"){ // 운영진 임명
        		if(strVal){
        			this.dsJoinClassDB.clearData();
        			this.dsJoinClassDB.addRow();

        			this.dsJoinClassDB.setColumn(0,"user_id", this.dsJoinClass.getColumn(this.dsJoinClass.rowposition,"user_id"));
        			this.dsJoinClassDB.setColumn(0,"class_no", this.dsJoinClass.getColumn(this.dsJoinClass.rowposition,"class_no"));

        			if(this.dsJoinClass.getColumn(this.dsJoinClass.rowposition, "status") == 1) { // 일반회원일때만
        				this.dsJoinClassDB.setColumn(0, "status", 3);  // 운영진으로 임명
        			}
        			this.ufnTransaction(
        				"updateManagerStatus"
        				,"updateManagerStatus.do"
        				,"dsJoinClass=dsJoinClassDB:U:"
        				,"dsJoinClass=out_class"
        				,""
        				,"fnCallback2")
        		}



        	}else if(strId == "msg.delete.manager.status"){ // 운영진 해제
        		if(strVal){
        			this.dsJoinClassDB.clearData();
        			this.dsJoinClassDB.addRow();

        			this.dsJoinClassDB.setColumn(0,"user_id", this.dsJoinClass.getColumn(this.dsJoinClass.rowposition,"user_id"));
        			this.dsJoinClassDB.setColumn(0,"class_no", this.dsJoinClass.getColumn(this.dsJoinClass.rowposition,"class_no"));

        			if(this.dsJoinClass.getColumn(this.dsJoinClass.rowposition, "status") == 3) { // 운영진일때만
        				this.dsJoinClassDB.setColumn(0, "status", 1);  // 운영진해제, 다시 일반으로
        			}

        			this.ufnTransaction(
        				"updateManagerStatus1"
        				,"updateManagerStatus.do"
        				,"dsJoinClass=dsJoinClassDB:U:"
        				,"dsJoinClass=out_class"
        				,""
        				,"fnCallback2")
        		}

        	}

        }

        this.fnCallback2= function(trId)
        {
        	if(trId == "updateHostClass"){ // 모임장 양도
        		this.ufnAlert("msg28", ["변경"]);
        		trace(this.dsJoinClassDB.saveXML());
        		this.close();
        		this.fvObjApp.gvMainFrame.set_formurl("Together::Class/getClass.xfdl");
        	}else if(trId == "updateManagerStatus"){ // 운영진 임명
        		this.ufnAlert("msg28", ["운영진 임명"]);
        		this.fvClassNo= this.parent.param1; // updateClass에서
        		this.ufnTransaction(
        			"getUserJoinClass"
        			,"getUserJoinClass.do"
        			,""
        			,"dsJoinClass=out_join_class"
        			,"paramClassNo="+nexacro.wrapQuote(this.fvClassNo)
        			,"fnCallback")

        	}else if(trId == "updateManagerStatus1"){ // 운영진 해제
        		this.ufnAlert("msg28", ["운영진 해제"]);
        		this.fvClassNo= this.parent.param1; // updateClass에서
        		this.ufnTransaction(
        			"getUserJoinClass"
        			,"getUserJoinClass.do"
        			,""
        			,"dsJoinClass=out_join_class"
        			,"paramClassNo="+nexacro.wrapQuote(this.fvClassNo)
        			,"fnCallback")

        	}
        }



        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/
        /**
        * @description 모임원/운영진일때만 버튼이 보이게
        */
        this.fnUpdateStatus = function(status)
        {
         	if(status == 1 || status == 3){

        		return "buttoncontrol";
        	}else {

        		return "none";
        	}
        }

        /**
        * @description 모임원/운영진일때만 버튼이 보이게
        */
        this.fnUpdateStatus2 = function(status)
        {

        	if(status == 1 || status == 3){

        		return "button";
        	}else {

        		return "none";
        	}
        }

        /**
        * @description 모임원/운영진일때만 모임장양도가 보이게
        */
        this.fnUpdateStatus3 = function(status)
        {

        	if(status == 1 || status == 3){

        		return "모임장양도";
        	}else{

        		return "";
        	}
        }

        /**
        * @description 모임원일때만 운영진 임명이 보이게, 운영진일때만 운영진해제가 보이게
        */
        this.fnUpdateStatus4 = function(status)
        {

        	if(status == 1){

        		return "운영진 임명";
        	}else if(status == 3){

        		return "운영진 해제";
        	}else{
        		return "";
        	}
        }

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/
        /**
        * @description 모임장 양도 / 운영진 임명 및 해제
        */
        this.divGetClassUser_grdGetClassUser_oncellclick = function(obj,e)
        {
        	if(this.divGetClassUser.form.grdGetClassUser.getCellPos() == 5) { // 모임장 양도

        		var sMsgId = "msg.update.host.status";	//메세지ID
        		var arrArg = "";						//메세지취환될값 배열[생략가능]
        		var sPopId = sMsgId;					//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnMsgCallback";		//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        		this.ufnAlert(sMsgId, arrArg, sPopId, sMsgCallback);

        	}else if(this.divGetClassUser.form.grdGetClassUser.getCellPos() == 6 && this.dsJoinClass.getColumn(this.dsJoinClass.rowposition, "status") != 3){ // 운영진 양도


        		var sMsgId = "msg.update.manager.status";	//메세지ID
        		var arrArg = "";							//메세지취환될값 배열[생략가능]
        		var sPopId = sMsgId;						//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnMsgCallback";			//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        		this.ufnAlert(sMsgId, arrArg, sPopId, sMsgCallback);

        	}else if(this.divGetClassUser.form.grdGetClassUser.getCellPos() == 6 && this.dsJoinClass.getColumn(this.dsJoinClass.rowposition, "status") == 3){ // 운영진 해제


        		var sMsgId = "msg.delete.manager.status";	//메세지ID
        		var arrArg = "";							//메세지취환될값 배열[생략가능]
        		var sPopId = sMsgId;						//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnMsgCallback";			//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        		this.ufnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.getClassUser_Sub_onload,this);
            this.divGetClassUser.form.grdGetClassUser.addEventHandler("oncellclick",this.divGetClassUser_grdGetClassUser_oncellclick,this);
        };
        this.loadIncludeScript("getClassUser_Sub01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
