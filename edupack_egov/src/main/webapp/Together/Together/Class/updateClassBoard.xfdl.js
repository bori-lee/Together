(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("updateClassBoard");
            this.set_titletext("게시판 수정");
            this.set_background("whitesmoke");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBoard", this);
            obj._setContents("<ColumnInfo><Column id=\"board_no\" type=\"INT\" size=\"256\"/><Column id=\"board_id\" type=\"INT\" size=\"256\"/><Column id=\"class_no\" type=\"INT\" size=\"256\"/><Column id=\"user_id\" type=\"STRING\" size=\"256\"/><Column id=\"nick\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/><Column id=\"image\" type=\"STRING\" size=\"256\"/><Column id=\"like_count\" type=\"INT\" size=\"256\"/><Column id=\"pin\" type=\"INT\" size=\"256\"/><Column id=\"reg_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBoard00", this);
            obj._setContents("<ColumnInfo><Column id=\"boardNo\" type=\"INT\" size=\"256\"/><Column id=\"boardId\" type=\"INT\" size=\"256\"/><Column id=\"classNo\" type=\"INT\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"nick\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/><Column id=\"image\" type=\"STRING\" size=\"256\"/><Column id=\"likeCount\" type=\"INT\" size=\"256\"/><Column id=\"pin\" type=\"INT\" size=\"256\"/><Column id=\"regDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBoardId", this);
            obj._setContents("<ColumnInfo><Column id=\"board_id\" type=\"INT\" size=\"256\"/><Column id=\"board_name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"board_name\">게시판 선택 </Col><Col id=\"board_id\">0</Col></Row><Row><Col id=\"board_id\">1</Col><Col id=\"board_name\">공지사항</Col></Row><Row><Col id=\"board_id\">2</Col><Col id=\"board_name\">가입인사</Col></Row><Row><Col id=\"board_id\">3</Col><Col id=\"board_name\">자유글</Col></Row><Row><Col id=\"board_id\">4</Col><Col id=\"board_name\">Q&amp;A</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsClass", this);
            obj._setContents("<ColumnInfo><Column id=\"host_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","4","75","50.00%","131",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divUpdateClassBoard","Static00_00:-576","85","1145","550",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("white");
            obj.set_borderRadius("20px");
            obj.set_border("1px solid darkgray");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","24","128","38","30",null,null,null,null,null,null,this.divUpdateClassBoard.form);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.divUpdateClassBoard.addChild(obj.name, obj);

            obj = new Edit("edtTitle","87","125","1003","37",null,null,null,null,null,null,this.divUpdateClassBoard.form);
            obj.set_taborder("1");
            obj.set_maxlength("50");
            obj.set_text("20자이내로 작성해주세요");
            this.divUpdateClassBoard.addChild(obj.name, obj);

            obj = new Static("Static00_00","24","289","38","30",null,null,null,null,null,null,this.divUpdateClassBoard.form);
            obj.set_taborder("3");
            obj.set_text("내용");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.divUpdateClassBoard.addChild(obj.name, obj);

            obj = new WebBrowser("webEditor","87","178","1003","252",null,null,null,null,null,null,this.divUpdateClassBoard.form);
            obj.set_taborder("2");
            this.divUpdateClassBoard.addChild(obj.name, obj);

            obj = new TextArea("txt00","22","460","115","30",null,null,null,null,null,null,this.divUpdateClassBoard.form);
            obj.set_taborder("4");
            obj.set_visible("false");
            this.divUpdateClassBoard.addChild(obj.name, obj);

            obj = new Button("btn01","114","420","121","98",null,null,null,null,null,null,this.divUpdateClassBoard.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_ShuttleR");
            obj.set_visible("false");
            this.divUpdateClassBoard.addChild(obj.name, obj);

            obj = new Button("btn00","202","420","120","98",null,null,null,null,null,null,this.divUpdateClassBoard.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_ShuttleL");
            obj.set_visible("false");
            this.divUpdateClassBoard.addChild(obj.name, obj);

            obj = new Button("btnUpdateClassBoard","499","475","147","50",null,null,null,null,null,null,this.divUpdateClassBoard.form);
            obj.set_taborder("7");
            obj.set_text("수정");
            obj.set_background("#ff6128");
            obj.set_color("white");
            obj.set_font("15pt/normal \"휴먼모음T\"");
            this.divUpdateClassBoard.addChild(obj.name, obj);

            obj = new Edit("edtBoardId","19","50","133","36",null,null,null,null,null,null,this.divUpdateClassBoard.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_font("bold 13pt/normal \"Yu Gothic UI Semibold\"");
            obj.set_background("white");
            obj.set_border("0px none");
            this.divUpdateClassBoard.addChild(obj.name, obj);

            obj = new Edit("edtCheckTitle","1012","133","36","26",null,null,null,null,null,null,this.divUpdateClassBoard.form);
            obj.set_taborder("9");
            obj.set_border("0px none");
            obj.set_font("12px/normal \"Vedana\",\"Malgun Gothic\"");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            obj.set_background("white");
            this.divUpdateClassBoard.addChild(obj.name, obj);

            obj = new Static("Static03","1048","130","36","32",null,null,null,null,null,null,this.divUpdateClassBoard.form);
            obj.set_taborder("10");
            obj.set_text("/ 50)");
            obj.set_font("12px/normal \"Vedana\",\"Malgun Gothic\"");
            this.divUpdateClassBoard.addChild(obj.name, obj);

            obj = new Div("divbottom","0","divUpdateClassBoard:65",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_border("0px none");
            obj.set_url("Frame::Bottom.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divUpdateClassBoard.form
            obj = new Layout("default","",0,0,this.divUpdateClassBoard.form,function(p){});
            this.divUpdateClassBoard.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divbottom
            obj = new Layout("default","",0,0,this.divbottom.form,function(p){});
            this.divbottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,760,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divUpdateClassBoard.form.edtTitle","value","dsBoard","title");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame::Bottom.xfdl");
        };
        
        // User Script
        this.registerScript("updateClassBoard.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\tobesoft\Documents\TOBESOFT\Nexacro N\projects\Together\Together\Class
        *	@FileName updateClassBoard.xfdl
        *	@Creator 이수아
        *	@CreateDate 2022/11/26
        *	@Description 모임의 게시판을 수정하는 폼
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2022/11/26		이수아		최초 생성
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
        this.updateClassBoard_onload = function(obj,e)
        {
        	//this.gfnFormOnLoad(this);

        	var sUrl = this.ufnGetServerUrl() + "smartEditor/SmartEditor2.html";

        	this.divUpdateClassBoard.form.webEditor.set_url(sUrl);

        };

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/
        /**
        * @description 메세지 콜백
        */

        this.fnCallback = function(trId) {

        	if(trId == "getDetailBoard"){

        		var sContents =this.dsBoard.getColumn(this.dsBoard.rowposition,"content");
        		this.fvDocWeb.getProperty("ir1").setProperty("value",sContents);
        		this.fvDocWeb.getProperty("editorSetBtn").callMethod("click");

        		this.fnInit();

        	}else if(trId == "updateBoard"){
        		this.gfnAlert("msg.update.success");
        		this.fvObjApp.gvMainFrame.set_formurl("Together::Class/getClass.xfdl");

        	}
        }

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
        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/
        /**
        * @description EDIT에 게시판의 종류를 담는 함수
        */
        this.fnInit = function()
        {
        	trace(this.dsBoard.saveXML());
        	if(this.dsBoard.getColumn(this.dsBoard.rowposition, "board_id") == "1"){
        		this.divUpdateClassBoard.form.edtBoardId.set_value("공지사항");
        	}else if(this.dsBoard.getColumn(0, "board_id") == "2"){
        		this.divUpdateClassBoard.form.edtBoardId.set_value("가입인사");
        	}else if(this.dsBoard.getColumn(0, "board_id") == "3"){
        		this.divUpdateClassBoard.form.edtBoardId.set_value("자유글");
        	}else if(this.dsBoard.getColumn(0, "board_id") == "4"){
        		this.divUpdateClassBoard.form.edtBoardId.set_value("Q&A")};
        }

        /**
        * @description 웹브라우저 함수
        */
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
        * @description 웹브라우저가 로딩된 후 발생하는 이벤트
        */
        this.divUpdateClassBoard_webEditor_onloadcompleted = function(obj,e)
        {
        	this.fvDocWeb = this.divUpdateClassBoard.form.webEditor.getProperty("document").getProperty("all");

        	this.ufnTransaction(
        		"getDetailBoard"
        		,"getDetailBoard.do"
        		,""
        		,"dsBoard=out_board"
        		,"paramBoardNo="+nexacro.wrapQuote(this.fvApp.gvBoardNo)
        		,"fnCallback")


        };

        /**
        * @description WebBrowser 에 로드된 웹페이지에서 넥사크로 쪽으로 정보를 전달할 때 발생하는 이벤트
        */
        this.divUpdateClassBoard_webEditor_onusernotify = function(obj,e)
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
        				var initHeight = this.divUpdateClassBoard.form.webEditor.getOffsetHeight();
        				this.fnResize(obj.getOffsetWidth(), initHeight-this.fvRtnHeight);
        			}

        			oForm.fnEditorCallback(e.userdata);
        		}
        	}
        	catch(e){
        		trace("addClassBoard.xfdl :: webEditor_onusernotify() => " + e.message);
        	}
        };


        // this.divUpdateClassBoard_btn00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	var sContents = this.divUpdateClassBoard.form.txt00.value;
        //
        // 	if(this.ufnIsNull(sContents)) sContents = "";
        // 	this.fvDocWeb.getProperty("ir1").setProperty("value",sContents);
        // 	this.fvDocWeb.getProperty("editorSetBtn").callMethod("click");
        // };
        //
        //
        // this.divUpdateClassBoard_btn01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	this.fvDocWeb.getProperty("editorGetBtn").callMethod("click");
        //  	var sEditorData = this.fvDocWeb.getProperty("ir1").getProperty("value");
        //
        // 	this.dsBoard.setColumn(this.dsBoard.rowposition,"content",sEditorData);
        // 	trace(this.dsBoard.saveXML());
        // };


        /**
        * @description 수정 클릭
        */
        this.divUpdateClassBoard_btnUpdateClassBoard_onclick = function(obj,e)
        {
        	this.fvDocWeb.getProperty("editorGetBtn").callMethod("click");
         	var sEditorData = this.fvDocWeb.getProperty("ir1").getProperty("value");

        	if(this.ufnIsNull(this.divUpdateClassBoard.form.edtTitle.value)){
        		this.ufnAlert("msg.err.validator.required", ["제목"]);
        		this.divUpdateClassBoard.form.edtTitle.setFocus();
        		return;
        	}

        	this.dsBoard.setColumn(this.dsBoard.rowposition,"content",sEditorData);
        	trace(this.dsBoard.saveXML());

        	this.ufnTransaction(
        		"updateBoard"
        		,"updateBoard.do"
        		,"dsBoard=dsBoard"
        		,"dsBoard=out_board"
        		,""
        		,"fnCallback")
        };

        /**
        * @description 제목 글자 수 체크
        */
        this.divUpdateClassBoard_edtTitle_onkeyup = function(obj,e)
        {
        	this.divUpdateClassBoard.form.edtCheckTitle.set_value("(" + this.divUpdateClassBoard.form.edtTitle.value.length);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.updateClassBoard_onload,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.divUpdateClassBoard.form.edtTitle.addEventHandler("onkeyup",this.divUpdateClassBoard_edtTitle_onkeyup,this);
            this.divUpdateClassBoard.form.webEditor.addEventHandler("onsize",this.Div00_webEditor_onsize,this);
            this.divUpdateClassBoard.form.webEditor.addEventHandler("onloadcompleted",this.divUpdateClassBoard_webEditor_onloadcompleted,this);
            this.divUpdateClassBoard.form.webEditor.addEventHandler("onusernotify",this.divUpdateClassBoard_webEditor_onusernotify,this);
            this.divUpdateClassBoard.form.txt00.addEventHandler("onchanged",this.Div00_txt00_onchanged,this);
            this.divUpdateClassBoard.form.btn01.addEventHandler("onclick",this.divUpdateClassBoard_btn01_onclick,this);
            this.divUpdateClassBoard.form.btn00.addEventHandler("onclick",this.divUpdateClassBoard_btn00_onclick,this);
            this.divUpdateClassBoard.form.btnUpdateClassBoard.addEventHandler("onclick",this.divUpdateClassBoard_btnUpdateClassBoard_onclick,this);
            this.divUpdateClassBoard.form.edtCheckTitle.addEventHandler("onchanged",this.Div00_Edit01_00_onchanged,this);
        };
        this.loadIncludeScript("updateClassBoard.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
