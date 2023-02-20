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
            this.set_titletext("회원 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(960,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsJoinClass", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"profile_img\" type=\"STRING\" size=\"256\"/><Column id=\"nick\" type=\"STRING\" size=\"256\"/><Column id=\"birth\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"INT\" size=\"256\"/><Column id=\"fileimg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProvider", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PUSH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOPIC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOPIC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsClass", this);
            obj._setContents("<ColumnInfo><Column id=\"status\" type=\"INT\" size=\"256\"/><Column id=\"user_id\" type=\"STRING\" size=\"256\"/><Column id=\"class_no\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divGetClassUser","0","10","935","468",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","205","7","210","53",null,null,null,null,null,null,this.divGetClassUser.form);
            obj.set_taborder("0");
            obj.set_text("회원 목록");
            obj.set_textAlign("center");
            obj.set_font("18pt/normal \"휴먼모음T\"");
            this.divGetClassUser.addChild(obj.name, obj);

            obj = new Grid("grdGetClassUser","44","77","509","368",null,null,null,null,null,null,this.divGetClassUser.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsJoinClass");
            obj.set_autofittype("col");
            obj.set_border("0px none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"81\"/><Column size=\"176\"/><Column size=\"144\"/><Column size=\"108\"/></Columns><Rows><Row size=\"17\"/><Row size=\"32\"/><Row size=\"17\"/></Rows><Band id=\"body\"><Cell rowspan=\"3\" displaytype=\"imagecontrol\" text=\"bind:fileimg\" edittype=\"none\" imagestretch=\"fit\" border=\"0px none\"/><Cell col=\"1\" rowspan=\"3\" text=\"bind:nick\" border=\"0px none\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\"/><Cell col=\"2\" rowspan=\"3\" text=\"bind:birth\" border=\"0px none\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\"/><Cell col=\"3\" rowspan=\"3\" text=\"expr:status == 1 ? &quot;모임원&quot; : status == 2 ? &quot;방장&quot; : &quot;운영진&quot;\" color=\"navy\" border=\"0px none\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\"/></Band></Format></Formats>");
            this.divGetClassUser.addChild(obj.name, obj);

            obj = new TextArea("taMSG","590","77","333","290",null,null,null,null,null,null,this.divGetClassUser.form);
            obj.set_taborder("2");
            obj.set_displaynulltext("전송할 메시지를 입력해주세요.");
            obj.set_visible("false");
            this.divGetClassUser.addChild(obj.name, obj);

            obj = new Button("btnSend","590","385","333","71",null,null,null,null,null,null,this.divGetClassUser.form);
            obj.set_taborder("3");
            obj.set_text("메시지 발송");
            obj.set_visible("false");
            obj.set_background("#ff6128");
            obj.set_color("white");
            obj.set_font("15pt/normal \"휴먼모음T\"");
            this.divGetClassUser.addChild(obj.name, obj);

            obj = new Grid("grdGetClassUserHide","106","68","385","48",null,null,null,null,null,null,this.divGetClassUser.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsJoinClass");
            obj.set_autofittype("col");
            obj.set_border("1px solid none");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"184\"/><Column size=\"105\"/><Column size=\"178\"/></Columns><Rows><Row size=\"30\"/><Row size=\"28\"/></Rows><Band id=\"body\"><Cell text=\"닉네임\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\" textAlign=\"center\"/><Cell col=\"1\" text=\"생년월일\" textAlign=\"center\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\"/><Cell col=\"2\" text=\"등급\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\" textAlign=\"center\"/><Cell row=\"1\" text=\"bind:nick\"/><Cell row=\"1\" col=\"1\" textAlign=\"center\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\" text=\"bind:birth\"/><Cell row=\"1\" col=\"2\" text=\"expr:status == 1 ? &quot;모임원&quot; : status == 2 ? &quot;방장&quot; : &quot;운영진&quot;\"/></Band></Format></Formats>");
            this.divGetClassUser.addChild(obj.name, obj);

            obj = new Static("staExcel","10","3","25","34",null,null,null,null,null,null,this.divGetClassUser.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_background("url(\'theme://images/file_icon_XLS.png\') ");
            this.divGetClassUser.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGetClassUser.form
            obj = new Layout("default","",0,0,this.divGetClassUser.form,function(p){});
            this.divGetClassUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",960,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("getClassUser_Sub.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\tobesoft\Documents\TOBESOFT\Nexacro N\projects\Together\Together\Class
        *	@FileName getClassUser_Sub.xfdl
        *	@Creator 이수아
        *	@CreateDate 2022/11/20
        *	@Description 모임의 회원목록을 볼 수 있는 폼, 엑셀로 내려받기를 할 수 있고, 방장/운영진은 모임원들에게 메세지를 보낼수있다.
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
        this.fvClassNo= this.parent.param1;
        /**************************************************************************
        * FORM EVENT 영역(onload, onclose)
        **************************************************************************/
        /**
        * @description 화면 화면이 load될 때 처리할 로직(필수)
        */

        this.getClassUser_Sub_onload = function(obj,e)
        {
        	if(this.fvObjApp.gdsUser.getColumn(0, "userId") == null){
        		this.fn_hide();
        	}


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

        this.fnCallback = function(trId)
        {
        	if(trId == "getUserJoinClass"){

        		this.dsClass.clearData();
        		this.dsClass.addRow();
        		this.dsClass.setColumn(0, "user_id", this.fvObjApp.gdsUser.getColumn(0, "userId"));
        		this.dsClass.setColumn(0, "class_no", this.parent.param1);
        		this.ufnTransaction(  // 방장 및 운영자 확인
        			"getHostId"
        			,"getHostId.do"
        			,"dsClass=dsClass"
        			,"dsClass=out_result"
        			,""
        			,"fnCallback")

        	}else if(trId == "getHostId"){

        		trace(this.dsClass.saveXML());

        		if(this.dsClass.getColumn(0, "status") == 2
        			|| this.dsClass.getColumn(this.dsClass.rowposition, "status") == 3){

        			this.divGetClassUser.form.taMSG.set_visible(true);
        			this.divGetClassUser.form.btnSend.set_visible(true);
        		}
        		else if(this.dsClass.getColumn(this.dsClass.rowposition, "status") != 2  // 방장이 아닐때
        			|| this.dsClass.getColumn(this.dsClass.rowposition, "status") != 3  // 운영진이 아닐때
        			|| this.fvObjApp.gdsUser.getColumn(0, "userId") == null){ // 미로그인일떄

        			this.fn_hide();

        		}





        	}

        }

        this.fn_callback = function(svcid, ecd, emsg)
        {
        	if(ecd >= 0)
        	{
        		this.ufnAlert("msg30");
        	} else {
        		this.ufnAlert("msg31");
        	}
        }


        this.fnMsgCallback = function (strId, strVal)
        {

        	if(strId == "msg33"){
        		if(strVal){

        			if(this.divGetClassUser.form.taMSG.text == "")
        		{

        			this.ufnAlert("msg32");
        			this.divGetClassUser.form.taMSG.setFocus();
        			return;
        		}

        		this.dsProvider.clearData();

        		this.dsProvider.addRow();
        		this.dsProvider.setColumn(this.dsProvider.rowposition,"PROJECT_ID","TOBE_EDU");
        		this.dsProvider.setColumn(this.dsProvider.rowposition,"PUSH_TYPE","RELI");
        		this.dsProvider.setColumn(this.dsProvider.rowposition,"TOPIC_TYPE","9999");
        		this.dsProvider.setColumn(this.dsProvider.rowposition,"TOPIC_ID","E"+this.parent.param1);
        		this.dsProvider.setColumn(this.dsProvider.rowposition,"CODE","");
        		this.dsProvider.setColumn(this.dsProvider.rowposition,"MSG",this.divGetClassUser.form.taMSG.text);


        		this.transaction("SendMsg","SvcUrl3::Service_XPush.jsp","in_Provider=dsProvider:U","","argPUSH_TYPE=RELI" + " argPUSH_MSG=" + this.divGetClassUser.form.taMSG.text,"fn_callback");
        	}


        		}

        };


        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/
        /**
        * @description 미로그인, 회원이 아닐때, 등급이 방장/운영진이 아닐때는 메세지 발송란 보이지 않게하는 함수
        */
        this.fn_hide = function(){

        	this.divGetClassUser.set_width(570);
        	this.set_width(580);
        	this.parent.set_width(580);
        	this.resetScroll();
        	trace("====!!" + this.divGetClassUser.width);

        }
        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/
        /**
        * @description  엑셀 이미지 클릭 시 엑셀로 회원명단이 내려받기 됨
        */
        this.divGetClassUser_staExcel_onclick = function(obj,e)
        {
        	this.ufnExcelExport(this.divGetClassUser.form.grdGetClassUserHide, "회원명단", "회원명단");
        };

        /**
        * @description 메세지 발송 클릭 시
        */
        this.btnSend_onclick = function(obj,e)
        {

        	var sMsgId = "msg33";			//메세지ID
        	var arrArg = "";						//메세지취환될값 배열[생략가능]
        	var sPopId = sMsgId;					//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        	var sMsgCallback = "fnMsgCallback";		//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        	// 로그아웃 하시겠습니까?
        	this.ufnAlert(sMsgId, arrArg, sPopId, sMsgCallback);

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.getClassUser_Sub_onload,this);
            this.divGetClassUser.form.grdGetClassUser.addEventHandler("oncellclick",this.Div00_Grid00_oncellclick,this);
            this.divGetClassUser.form.btnSend.addEventHandler("onclick",this.btnSend_onclick,this);
            this.divGetClassUser.form.grdGetClassUserHide.addEventHandler("oncellclick",this.Div00_Grid00_oncellclick,this);
            this.divGetClassUser.form.staExcel.addEventHandler("onclick",this.divGetClassUser_staExcel_onclick,this);
        };
        this.loadIncludeScript("getClassUser_Sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
