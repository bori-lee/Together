(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("addNotice");
            this.set_titletext("게시판 작성");
            this.set_background("whitesmoke");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,810);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBoard00", this);
            obj._setContents("<ColumnInfo><Column id=\"boardNo\" type=\"INT\" size=\"256\"/><Column id=\"boardId\" type=\"INT\" size=\"256\"/><Column id=\"classNo\" type=\"INT\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"nick\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/><Column id=\"image\" type=\"STRING\" size=\"256\"/><Column id=\"likeCount\" type=\"INT\" size=\"256\"/><Column id=\"pin\" type=\"INT\" size=\"256\"/><Column id=\"regDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBoardId", this);
            obj._setContents("<ColumnInfo><Column id=\"board_id\" type=\"INT\" size=\"256\"/><Column id=\"board_name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"board_name\">게시판 선택 </Col><Col id=\"board_id\">0</Col></Row><Row><Col id=\"board_id\">1</Col><Col id=\"board_name\">공지사항</Col></Row><Row><Col id=\"board_id\">2</Col><Col id=\"board_name\">가입인사</Col></Row><Row><Col id=\"board_id\">3</Col><Col id=\"board_name\">자유글</Col></Row><Row><Col id=\"board_id\">4</Col><Col id=\"board_name\">Q&amp;A</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsClass", this);
            obj._setContents("<ColumnInfo><Column id=\"status\" type=\"INT\" size=\"256\"/><Column id=\"user_id\" type=\"STRING\" size=\"256\"/><Column id=\"class_no\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","4","75","50.00%","131",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divAddNotice","Static00_00:-576","95","1145","550",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("white");
            obj.set_borderRadius("20px");
            obj.set_border("1px solid darkgray");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","24","128","38","30",null,null,null,null,null,null,this.divAddNotice.form);
            obj.set_taborder("1");
            obj.set_text("제목");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.divAddNotice.addChild(obj.name, obj);

            obj = new Edit("edtTitle","87","125","1003","37",null,null,null,null,null,null,this.divAddNotice.form);
            obj.set_taborder("0");
            obj.set_maxlength("50");
            obj.set_tabstop("true");
            obj.set_text("20자이내로 작성해주세요");
            this.divAddNotice.addChild(obj.name, obj);

            obj = new Static("Static00_00","24","289","38","30",null,null,null,null,null,null,this.divAddNotice.form);
            obj.set_taborder("5");
            obj.set_text("내용");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.divAddNotice.addChild(obj.name, obj);

            obj = new Combo("cboBoardId","25","68","124","30",null,null,null,null,null,null,this.divAddNotice.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsBoardId");
            obj.set_codecolumn("board_id");
            obj.set_datacolumn("board_name");
            obj.set_text("게시판 선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divAddNotice.addChild(obj.name, obj);

            obj = new WebBrowser("webEditor","87","178","1003","252",null,null,null,null,null,null,this.divAddNotice.form);
            obj.set_taborder("2");
            this.divAddNotice.addChild(obj.name, obj);

            obj = new TextArea("txt00","22","460","115","30",null,null,null,null,null,null,this.divAddNotice.form);
            obj.set_taborder("7");
            obj.set_visible("false");
            this.divAddNotice.addChild(obj.name, obj);

            obj = new Button("btn01","114","420","121","98",null,null,null,null,null,null,this.divAddNotice.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_ShuttleR");
            obj.set_visible("false");
            this.divAddNotice.addChild(obj.name, obj);

            obj = new Button("btn00","202","420","120","98",null,null,null,null,null,null,this.divAddNotice.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_ShuttleL");
            obj.set_visible("false");
            this.divAddNotice.addChild(obj.name, obj);

            obj = new Button("btnAddNotice","499","475","147","50",null,null,null,null,null,null,this.divAddNotice.form);
            obj.set_taborder("3");
            obj.set_text("등록");
            obj.set_background("#ff6128");
            obj.set_color("white");
            obj.set_font("15pt/normal \"휴먼모음T\"");
            this.divAddNotice.addChild(obj.name, obj);

            obj = new Static("Static01","159","70","290","28",null,null,null,null,null,null,this.divAddNotice.form);
            obj.set_taborder("10");
            obj.set_text("* 공지사항은 방장 및 운영자만 작성 가능합니다. ");
            obj.set_color("red");
            this.divAddNotice.addChild(obj.name, obj);

            obj = new Static("Static02","25","17","173","41",null,null,null,null,null,null,this.divAddNotice.form);
            obj.set_taborder("11");
            obj.set_text("게시판 작성");
            obj.set_font("bold 15pt/normal \"Yu Gothic UI Semibold\"");
            this.divAddNotice.addChild(obj.name, obj);

            obj = new Static("Static03","1048","128","36","32",null,null,null,null,null,null,this.divAddNotice.form);
            obj.set_taborder("12");
            obj.set_text("/ 50)");
            obj.set_font("12px/normal \"Vedana\",\"Malgun Gothic\"");
            this.divAddNotice.addChild(obj.name, obj);

            obj = new Edit("edtCheckTitle","1012","131","36","26",null,null,null,null,null,null,this.divAddNotice.form);
            obj.set_border("0px none");
            obj.set_font("12px/normal \"Vedana\",\"Malgun Gothic\"");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            obj.set_background("white");
            obj.set_taborder("4");
            this.divAddNotice.addChild(obj.name, obj);

            obj = new Div("divbottom","0","divAddNotice:115",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_border("0px none");
            obj.set_url("Frame::Bottom.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divAddNotice.form
            obj = new Layout("default","",0,0,this.divAddNotice.form,function(p){});
            this.divAddNotice.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divbottom
            obj = new Layout("default","",0,0,this.divbottom.form,function(p){});
            this.divbottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,810,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divAddNotice.form.txt00","value","dsBoard00","content");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divAddNotice.form.edtTitle","value","dsBoard00","title");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame::Bottom.xfdl");
        };
        
        // User Script
        this.registerScript("addClassBoard.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\tobesoft\Documents\TOBESOFT\Nexacro N\projects\Together\Together\Class
        *	@FileName addClassBoard.xfdl
        *	@Creator 이수아
        *	@CreateDate 2022/11/15
        *	@Description 모임의 게시판을 등록하는 폼
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2022/11/15		이수아		최초 생성
        *
        *
        */

        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/
        this.fvApp = nexacro.getApplication();
        this.fvObjApp = this.ufnGetApplication();
        this.fvDocWeb = "";
        this.fvRtnHeight=382; //버튼사이즈

        /************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/
        /**
        * @description 화면 onload시 처리내역(필수)
        */
        this.addNotice_onload = function(obj,e)
        {
        	this.dsBoard00.clearData();
        	this.dsBoard00.addRow();

        	this.divAddNotice.form.cboBoardId.set_index(0);
        	var sUrl = this.ufnGetServerUrl() + "smartEditor/SmartEditor2.html";

        	this.divAddNotice.form.webEditor.set_url(sUrl);

        };

        /************************************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        ************************************************************************************************/
        this.fnEditorCallback = function(sType)
        {
        	switch (sType)
        	{
        	case "onload" :
        		var sContents = "";
        		this.fvDocWeb.getProperty("ir1").setProperty("value",sContents);
        		this.fvDocWeb.getProperty("editorSetBtn").callMethod("click");
        		break;
        	}
        };

        this.fnCallback = function(trId)
        {
        	if(trId == "addBoard"){
        		this.fvObjApp.gvMainFrame.set_formurl("Together::Class/getClass.xfdl");
        	}else if(trId == "getHostId") {


        		if(this.dsClass.getColumn(this.dsClass.rowposition, "status") == 1){
        			this.ufnAlert("msg3");
        		}else{

        			if(this.ufnIsNull(this.divAddNotice.form.edtTitle.value)){
        				this.ufnAlert("msg.err.validator.required", ["제목"]);
        				this.divAddNotice.form.edtTitle.setFocus();
        				return;
        			}

        			this.dsBoard00.setColumn(0, "classNo", this.fvApp.gvClassNo);
        			this.dsBoard00.setColumn(0, "userId", this.fvObjApp.gdsUser.getColumn(0, "userId"));
        			this.dsBoard00.setColumn(0, "boardId", this.divAddNotice.form.cboBoardId.value);

        			trace("게시판 아이디" + this.divAddNotice.form.cboBoardId.value);

        			this.ufnTransaction(
        				"addBoard"
        				,"addBoard.do"
        				,"dsBoard00=dsBoard00"
        				,""
        				,""
        				,"fnCallback")}

        	}
        }


        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        this.fnResize = function(nWidth, nHeight)
        {
        	var sValue = nWidth+","+nHeight;

        	this.fvDocWeb.getProperty("resize").setProperty("value",sValue);
        	this.fvDocWeb.getProperty("btnResize").callMethod("click");
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /**
        * @description 웹브라우저에 웹페이지가 로딩되었을 때 발생하는 이벤트
        */
        this.divAddNotice_webEditor_onloadcompleted = function(obj,e)
        {
        	this.fvDocWeb = this.divAddNotice.form.webEditor.getProperty("document").getProperty("all");
        };

        /**
        * @description  WebBrowser 에 로드된 웹페이지에서 넥사크로 쪽으로 정보를 전달할 때 발생하는 이벤트
        */
        this.divAddNotice_webEditor_onusernotify = function(obj,e)
        {
        	trace("???"+e.userdata);

        	try
        	{
        		// parent의 최상의 Form에 이벤트 발생시킴
        		var oForm = this;
        		if (oForm && oForm.fnEditorCallback)
        		{
        			if (e.userdata == "onload")
        			{
        				var initHeight = this.divAddNotice.form.webEditor.getOffsetHeight();
        				this.fnResize(obj.getOffsetWidth(), initHeight-this.fvRtnHeight);
        			}

        			oForm.fnEditorCallback(e.userdata);
        		}
        	}
        	catch(e){
        		trace("addClassBoard.xfdl :: webEditor_onusernotify() => " + e.message);
        	}
        };


        // this.divAddNotice_btn00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	var sContents = this.divAddNotice.form.txt00.value;
        //
        // 	if(this.ufnIsNull(sContents)) sContents = "";
        // 	this.fvDocWeb.getProperty("ir1").setProperty("value",sContents);
        // 	this.fvDocWeb.getProperty("editorSetBtn").callMethod("click");
        // };
        //
        // this.divAddNotice_btn01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	this.fvDocWeb.getProperty("editorGetBtn").callMethod("click");
        //  	var sEditorData = this.fvDocWeb.getProperty("ir1").getProperty("value");
        //
        // 	this.divAddNotice.form.txt00.set_value(sEditorData);
        // };


        /**
        * @description 등록 클릭 시
        */
        this.divAddNotice_btnAddNotice_onclick = function(obj,e)
        {
        	this.fvDocWeb.getProperty("editorGetBtn").callMethod("click");
         	var sEditorData = this.fvDocWeb.getProperty("ir1").getProperty("value");

        	this.divAddNotice.form.txt00.set_value(sEditorData);

        	//alert(this.dsBoardId.getColumn(this.dsBoardId.rowposition, "board_id"));

        	if(this.divAddNotice.form.cboBoardId.value == 0) {
        		this.ufnAlert("msg.err.validator.required", ["게시판"]);

        	}else if(this.divAddNotice.form.cboBoardId.value == 1) {    // 공지사항

        		this.dsClass.clearData();
        		this.dsClass.addRow();
        		this.dsClass.setColumn(0, "user_id", this.fvObjApp.gdsUser.getColumn(0, "userId"));
        		this.dsClass.setColumn(0, "class_no", this.fvApp.gvClassNo);
        		this.ufnTransaction(  // 방장 및 운영자 확인
        			"getHostId"
        			,"getHostId.do"
        			,"dsClass=dsClass"
        			,"dsClass=out_result"
        			,""
        			,"fnCallback")

        	}else{ // 나머지 게시판 작성

        		this.dsBoard00.setColumn(0, "classNo", this.fvApp.gvClassNo);
        		this.dsBoard00.setColumn(0, "userId", this.fvObjApp.gdsUser.getColumn(0, "userId"));
        		this.dsBoard00.setColumn(0, "boardId", this.divAddNotice.form.cboBoardId.value);

        		this.ufnTransaction(
        			"addBoard"
        			,"addBoard.do"
        			,"dsBoard00=dsBoard00"
        			,""
        			,""
        			,"fnCallback")

        	}

        };


        /**
        * @description 제목 글자 수 체크
        */
        this.divAddNotice_edtTitle_onkeyup = function(obj,e)
        {
        	this.divAddNotice.form.edtCheckTitle.set_value("(" + this.divAddNotice.form.edtTitle.value.length);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.addNotice_onload,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.divAddNotice.form.edtTitle.addEventHandler("onkeyup",this.divAddNotice_edtTitle_onkeyup,this);
            this.divAddNotice.form.webEditor.addEventHandler("onloadcompleted",this.divAddNotice_webEditor_onloadcompleted,this);
            this.divAddNotice.form.webEditor.addEventHandler("onusernotify",this.divAddNotice_webEditor_onusernotify,this);
            this.divAddNotice.form.txt00.addEventHandler("onchanged",this.Div00_txt00_onchanged,this);
            this.divAddNotice.form.btn01.addEventHandler("onclick",this.divAddNotice_btn01_onclick,this);
            this.divAddNotice.form.btn00.addEventHandler("onclick",this.divAddNotice_btn00_onclick,this);
            this.divAddNotice.form.btnAddNotice.addEventHandler("onclick",this.divAddNotice_btnAddNotice_onclick,this);
            this.divAddNotice.form.edtCheckTitle.addEventHandler("onchanged",this.Div00_Edit01_00_onchanged,this);
        };
        this.loadIncludeScript("addClassBoard.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
