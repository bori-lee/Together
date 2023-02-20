(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("listUserClass_Sub");
            this.set_titletext("참여 중인 모임");
            this.set_borderRadius("35px");
            if (Form == this.constructor)
            {
                this._setFormPosition(640,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsClass", this);
            obj._setContents("<ColumnInfo><Column id=\"location_name\" type=\"STRING\" size=\"20\"/><Column id=\"title\" type=\"STRING\" size=\"50\"/><Column id=\"sumnail_img\" type=\"STRING\" size=\"200\"/><Column id=\"fileimg\" type=\"STRING\" size=\"256\"/><Column id=\"class_user_cnt\" type=\"INT\" size=\"5\"/><Column id=\"status\" type=\"INT\" size=\"256\"/><Column id=\"class_no\" type=\"INT\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJoinClass00", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"classNo\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divListUserClass","5","12","630","468",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","205","7","210","53",null,null,null,null,null,null,this.divListUserClass.form);
            obj.set_taborder("0");
            obj.set_text("참여 중인 모임");
            obj.set_textAlign("center");
            obj.set_font("18pt/normal \"휴먼모음T\"");
            this.divListUserClass.addChild(obj.name, obj);

            obj = new Button("btnLeave","513","5","52","26",null,null,null,null,null,null,this.divListUserClass.form);
            obj.set_taborder("1");
            obj.set_text("탈퇴 ");
            obj.set_background("white");
            obj.set_color("black");
            obj.set_border("1px solid black");
            this.divListUserClass.addChild(obj.name, obj);

            obj = new Button("btnUpdate","5","5","52","26",null,null,null,null,null,null,this.divListUserClass.form);
            obj.set_taborder("2");
            obj.set_text("수정");
            obj.set_background("white");
            obj.set_color("black");
            obj.set_border("1px solid black");
            this.divListUserClass.addChild(obj.name, obj);

            obj = new Grid("grdListUserClass","35","79","561","379",null,null,null,null,null,null,this.divListUserClass.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsClass");
            obj.set_autofittype("col");
            obj.set_border("1px solid darkgray");
            obj.set_nodatatext("참여중인 모임이 없습니다. ");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"324\"/></Columns><Rows><Row size=\"30\"/><Row size=\"28\"/><Row size=\"28\"/><Row size=\"28\"/></Rows><Band id=\"body\"><Cell rowspan=\"4\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" rowspan=\"4\" displaytype=\"imagecontrol\" text=\"bind:fileimg\" edittype=\"none\" imagestretch=\"fit\"/><Cell col=\"2\" text=\"모임명\" textAlign=\"center\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\"/><Cell col=\"3\" text=\"bind:title\" color=\"navy\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\"/><Cell row=\"1\" col=\"2\" text=\"활동지역\" textAlign=\"center\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\"/><Cell row=\"1\" col=\"3\" text=\"bind:location_name\"/><Cell row=\"2\" col=\"2\" text=\"회원수 \" textAlign=\"center\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\"/><Cell row=\"2\" col=\"3\" text=\"bind:class_user_cnt\" displaytype=\"normal\" edittype=\"normal\" textAlign=\"left\"/><Cell row=\"3\" col=\"2\" text=\"등급 \" textAlign=\"center\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\"/><Cell row=\"3\" col=\"3\" text=\"expr:status == 1 ? &quot;모임원&quot; : status == 2 ? &quot;방장&quot; : &quot;운영진&quot;\" edittype=\"normal\" displaytype=\"normal\"/></Band></Format></Formats>");
            this.divListUserClass.addChild(obj.name, obj);

            obj = new Button("btnDelete","570","5","52","26",null,null,null,null,null,null,this.divListUserClass.form);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_background("white");
            obj.set_color("black");
            obj.set_border("1px solid black");
            this.divListUserClass.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divListUserClass.form
            obj = new Layout("default","",0,0,this.divListUserClass.form,function(p){});
            this.divListUserClass.form.addLayout(obj.name, obj);

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
        this.registerScript("listUserClass_Sub.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\tobesoft\Documents\TOBESOFT\Nexacro N\projects\Together\Together\User
        *	@FileName listUserClass_Sub.xfdl
        *	@Creator 이수아
        *	@CreateDate 2022/11/04
        *	@Description 내가 참여한 모임 목록
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2022/11/04		이수아		최초 생성
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

        this.listUserClass_Sub_onload = function(obj,e){

        	this.dsClass.clearData();
        	this.dsClass.addRow();

        	this.ufnTransaction(
        		"getJoinClass"
        		,"getJoinClass.do"
        		,""
        		,"dsClass=out_class"
        		,"paramUserId="+this.fvObjApp.gdsUser.getColumn(0, "userId")
        		,"fnCallback")

        };

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/
        /**
        * @description 메세지 콜백
        */

        this.fnCallback = function(trId)
        {
        	if(trId == "deleteJoinClass"){
        		this.ufnAlert("msg19", ["모임탈퇴"]);

        		this.ufnTransaction(
        			"getJoinClass"
        			,"getJoinClass.do"
        			,""
        			,"dsClass=out_class"
        			,"paramUserId="+this.fvObjApp.gdsUser.getColumn(0, "userId")
        			,"fnCallback")

        	}else if(trId == "deleteClass"){
        		this.ufnAlert("msg19", ["모임삭제"]);

        		this.ufnTransaction(
        			"getJoinClass"
        			,"getJoinClass.do"
        			,""
        			,"dsClass=out_class"
        			,"paramUserId="+this.fvObjApp.gdsUser.getColumn(0, "userId")
        			,"fnCallback")

        	}

        }

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/
        /**
        * @description dsClass 데이터셋의 체크박스
        */
        this.dsClass_oncolumnchanged = function(obj,e)
        {

        	this.dsClass.set_enableevent(false);
        	for(var i = 0; i<this.dsClass.rowcount; i++){
        		if(i != e.row){
        			this.dsClass.setColumn(i, "chk", 0);
        		}

        	}
        	this.dsClass.set_enableevent(true);
        };


        /**
        * @description 모임 탈퇴 클릭
        */
        this.divListUserClass_btnLeave_onclick = function(obj,e)
        {
        	if(this.dsClass.getCaseCount("chk == '1'") == 0){
        		this.ufnAlert("msg20");
        	}else{
        		var rPos = this.dsClass.findRow("chk", '1');

        		if((this.dsClass.getColumn(rPos, "status") == 2)){
        			this.ufnAlert("msg21");
        		}else{

        			var sMsgId = "msg.exist.joinClass";				//메세지ID
        			var arrArg = "";								//메세지취환될값 배열[생략가능]
        			var sPopId = sMsgId;							//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        			var sMsgCallback = "fnMsgCallback";				//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        			// 변경된 내역을 저장 하시겠습니까?
        			//this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);

        			// function 전달
        			this.ufnAlert(sMsgId, arrArg, sPopId, function(strId, strVal) {
        					trace("strId : " + strId + " / strVal : " + strVal + " / valueOf : " + this.gfnTypeOf(strVal));
        					if (strVal == true) {

        						this.dsJoinClass00.clearData();
        						this.dsJoinClass00.addRow();
        						this.dsJoinClass00.setColumn(0, "userId", this.fvObjApp.gdsUser.getColumn(0, "userId"));
        						this.dsJoinClass00.setColumn(0, "classNo", this.dsClass.getColumn(rPos, "class_no"));

        						this.ufnTransaction(
        							"deleteJoinClass"
        							,"deleteJoinClass.do"
        							,"dsJoinClass00=dsJoinClass00"
        							,""
        							,""
        							,"fnCallback")

        					}else {

        					}
        				});

        		}

        	}
        };

        /**
        * @description 모임 수정 클릭
        */
        this.divListUserClass_btnUpdate_onclick = function(obj,e)
        {
        	if(this.dsClass.getCaseCount("chk == '1'") == 0){
        		this.ufnAlert("msg20");
        	}else{
        		var rPos = this.dsClass.findRow("chk", '1');
        		trace("rPos"+rPos);

        		if(this.dsClass.getColumn(rPos, "status") != 2){
        			this.ufnAlert("msg22", ["모임수정"]);

        		}else if(this.dsClass.getColumn(rPos, "status") == 2) {
        			this.fvApp.gvClassNo = this.dsClass.getColumn(rPos, "class_no"); //글로벌변수에 classNo값 담아주기
        			trace("클래스 넘버"+this.fvApp.gvClassNo);

        			this.fvObjApp.gvMainFrame.set_formurl("Together::Class/updateClass.xfdl");
        			this.close();

        		}

        	}

        };

        /**
        * @description 모임 삭제 클릭
        */
        this.divListUserClass_btnDelete_onclick = function(obj,e)
        {
        	var rPos = this.dsClass.findRow("chk", '1');
        	trace("rPos"+rPos)

        	if(this.dsClass.getCaseCount("chk == '1'") == 0){
        		this.ufnAlert("msg20");
        	}else if(this.dsClass.getColumn(rPos, "status") != 2) {
        		this.ufnAlert("msg22", ["모임삭제"]);

        	}else if(this.dsClass.getColumn(rPos, "class_user_cnt") >= 10){ // 회원수 10명이하는 삭제 불가능
        		this.ufnAlert("msg23");
        	}

        	else{

        		this.ufnTransaction(
        			"deleteClass"
        			,"deleteClass.do"
        			,""
        			,""
        			,"paramClassNo="+nexacro.wrapQuote(this.dsClass.getColumn(rPos, "class_no"))
        			,"fnCallback") }

        };

        /**
        * @description 그리드 내 이미지 클릭 시 모임 상세페이지로 이동
        */
        this.divListUserClass_grdListUserClass_oncellclick = function(obj,e)
        {
        	if(this.divListUserClass.form.grdListUserClass.getCellPos() == 1){
        		this.fvApp.gvClassNo = this.dsClass.getColumn(this.dsClass.rowposition, "class_no");

        		this.fvObjApp.gvMainFrame.set_formurl("");
        		this.fvObjApp.gvMainFrame.set_formurl("Together::Class/getClass.xfdl");
        		this.close();
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.listUserClass_Sub_onload,this);
            this.divListUserClass.form.btnLeave.addEventHandler("onclick",this.divListUserClass_btnLeave_onclick,this);
            this.divListUserClass.form.btnUpdate.addEventHandler("onclick",this.divListUserClass_btnUpdate_onclick,this);
            this.divListUserClass.form.grdListUserClass.addEventHandler("oncellclick",this.divListUserClass_grdListUserClass_oncellclick,this);
            this.divListUserClass.form.btnDelete.addEventHandler("onclick",this.divListUserClass_btnDelete_onclick,this);
            this.dsClass.addEventHandler("oncolumnchanged",this.dsClass_oncolumnchanged,this);
        };
        this.loadIncludeScript("listUserClass_Sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
