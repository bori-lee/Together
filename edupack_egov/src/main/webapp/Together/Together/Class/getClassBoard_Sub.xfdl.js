(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("getClassBoard");
            this.set_titletext("게시판 상세조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,590);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBoard", this);
            obj._setContents("<ColumnInfo><Column id=\"board_no\" type=\"INT\" size=\"256\"/><Column id=\"board_id\" type=\"INT\" size=\"256\"/><Column id=\"class_no\" type=\"INT\" size=\"256\"/><Column id=\"user_id\" type=\"STRING\" size=\"256\"/><Column id=\"nick\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/><Column id=\"image\" type=\"STRING\" size=\"256\"/><Column id=\"like_count\" type=\"INT\" size=\"256\"/><Column id=\"pin\" type=\"INT\" size=\"256\"/><Column id=\"reg_date\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBoard00", this);
            obj._setContents("<ColumnInfo><Column id=\"boardNo\" type=\"INT\" size=\"256\"/><Column id=\"boardId\" type=\"INT\" size=\"256\"/><Column id=\"classNo\" type=\"INT\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"nick\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/><Column id=\"image\" type=\"STRING\" size=\"256\"/><Column id=\"likeCount\" type=\"INT\" size=\"256\"/><Column id=\"pin\" type=\"INT\" size=\"256\"/><Column id=\"regDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComment", this);
            obj._setContents("<ColumnInfo><Column id=\"comment_no\" type=\"INT\" size=\"256\"/><Column id=\"board_no\" type=\"INT\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/><Column id=\"user_id\" type=\"STRING\" size=\"256\"/><Column id=\"reg_date\" type=\"STRING\" size=\"256\"/><Column id=\"nick\" type=\"STRING\" size=\"256\"/><Column id=\"profile_img\" type=\"STRING\" size=\"256\"/><Column id=\"fileimg\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComment00", this);
            obj._setContents("<ColumnInfo><Column id=\"commentNo\" type=\"INT\" size=\"256\"/><Column id=\"boardNo\" type=\"INT\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"regDate\" type=\"STRING\" size=\"256\"/><Column id=\"nick\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divGetClassBoard","0","0",null,"488","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("0px none");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","12","58","38","30",null,null,null,null,null,null,this.divGetClassBoard.form);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_font("bold 10pt/normal \"Yu Gothic UI Semibold\"");
            this.divGetClassBoard.addChild(obj.name, obj);

            obj = new Edit("edtTitle","61","58","590","30",null,null,null,null,null,null,this.divGetClassBoard.form);
            obj.set_taborder("1");
            this.divGetClassBoard.addChild(obj.name, obj);

            obj = new Static("Static00_00","12","248","38","30",null,null,null,null,null,null,this.divGetClassBoard.form);
            obj.set_taborder("2");
            obj.set_text("내용");
            obj.set_font("bold 10pt/normal \"Yu Gothic UI Semibold\"");
            this.divGetClassBoard.addChild(obj.name, obj);

            obj = new Edit("edtBoardId","7","8","127","34",null,null,null,null,null,null,this.divGetClassBoard.form);
            obj.set_taborder("3");
            obj.set_font("15pt/normal \"휴먼모음T\"");
            obj.set_border("0px none");
            obj.set_readonly("true");
            obj.set_background("white");
            this.divGetClassBoard.addChild(obj.name, obj);

            obj = new WebBrowser("webBrowResult","61","112","590","326",null,null,null,null,null,null,this.divGetClassBoard.form);
            obj.set_taborder("4");
            this.divGetClassBoard.addChild(obj.name, obj);

            obj = new MaskEdit("maeRegDate","549","16","104","37",null,null,null,null,null,null,this.divGetClassBoard.form);
            obj.set_taborder("5");
            obj.set_type("string");
            obj.set_format("@@@@/@@/@@");
            obj.set_border("0px none");
            obj.set_textAlign("right");
            this.divGetClassBoard.addChild(obj.name, obj);

            obj = new Div("divGetComment","0","570",null,"520","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Grid("grdGetComment","0","0",null,null,"0","150",null,null,null,null,this.divGetComment.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsComment");
            obj.set_autofittype("col");
            obj.set_border("1px black");
            obj.set_background("white");
            obj.set_nodatatext("작성된 댓글이 없습니다. ");
            obj.set_scrolltype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"81\"/><Column size=\"62\"/><Column size=\"411\"/><Column size=\"66\"/><Column size=\"68\"/></Columns><Rows><Row size=\"28\"/><Row size=\"38\"/><Row size=\"25\"/></Rows><Band id=\"body\"><Cell rowspan=\"3\" textAlign=\"center\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\" border=\"0px none\" text=\"bind:fileimg\" displaytype=\"imagecontrol\" imagestretch=\"fit\"/><Cell col=\"1\" text=\"expr:status == 1 ? &quot;모임원&quot; : status == 2 ? &quot;방장&quot; : &quot;운영진&quot;\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\"/><Cell col=\"2\" text=\"bind:nick\" border=\"1px solid #d8d9da, 1px none #d8d9da, 1px solid #d8d9da, 1px solid #d8d9da\"/><Cell col=\"3\" colspan=\"2\" text=\"bind:reg_date\" displaytype=\"date\" edittype=\"date\" textAlign=\"right\"/><Cell row=\"1\" col=\"1\" colspan=\"4\" border=\"0px none\" text=\"bind:content\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\" edittype=\"normal\" wordWrap=\"char\"/><Cell row=\"2\" col=\"1\" colspan=\"2\" border=\"1px solid #d8d9da, 0px none #d8d9da, 1px solid #d8d9da, 1px solid #d8d9da\"/><Cell row=\"2\" col=\"3\" edittype=\"expr:comp.parent.parent.parent.fnUpdateComment2(user_id)\" text=\"expr:comp.parent.parent.parent.fnUpdateComment4(user_id)\" displaytype=\"expr:comp.parent.parent.parent.fnUpdateComment(user_id)\" color=\"black\" background=\"white\" border=\"1px solid #d8d9da, 0px none #d8d9da, 1px solid #d8d9da, 1px solid #d8d9da\"/><Cell row=\"2\" col=\"4\" displaytype=\"expr:comp.parent.parent.parent.fnUpdateComment(user_id)\" edittype=\"expr:comp.parent.parent.parent.fnUpdateComment2(user_id)\" text=\"expr:comp.parent.parent.parent.fnUpdateComment3(user_id)\" color=\"black\" background=\"white\"/></Band></Format></Formats>");
            this.divGetComment.addChild(obj.name, obj);

            obj = new Button("btnAddComment","623","450","54","32",null,null,null,null,null,null,this.divGetComment.form);
            obj.set_taborder("1");
            obj.set_text("작성");
            obj.set_background("white");
            obj.set_border("1px solid coral");
            obj.set_color("#ff6128");
            this.divGetComment.addChild(obj.name, obj);

            obj = new TextArea("txaAddComment","13","435","603","59",null,null,null,null,null,null,this.divGetComment.form);
            obj.set_taborder("2");
            this.divGetComment.addChild(obj.name, obj);

            obj = new Static("Static00","13","413","57","22",null,null,null,null,null,null,this.divGetComment.form);
            obj.set_taborder("3");
            obj.set_text("댓글 작성");
            obj.set_font("bold 10pt/normal \"Yu Gothic UI Semibold\"");
            obj.set_color("navy");
            this.divGetComment.addChild(obj.name, obj);

            obj = new Button("btnGetComment","5","517","111","33",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("댓글접기");
            obj.set_background("#ff6128");
            obj.set_color("white");
            obj.set_font("13pt/normal \"휴먼모음T\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpdate","569","517","51","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("수정");
            obj.set_visible("false");
            obj.set_background("white");
            obj.set_color("#ff6128");
            obj.set_border("1px solid coral");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete","632","517","51","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_visible("false");
            obj.set_background("white");
            obj.set_border("1px solid coral");
            obj.set_color("#ff6128");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGetClassBoard.form
            obj = new Layout("default","",0,0,this.divGetClassBoard.form,function(p){});
            this.divGetClassBoard.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGetComment.form
            obj = new Layout("default","",0,0,this.divGetComment.form,function(p){});
            this.divGetComment.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",700,590,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divGetClassBoard.form.edtTitle","value","dsBoard","title");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divGetClassBoard.form.maeRegDate","value","dsBoard","reg_date");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("getClassBoard_Sub.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\tobesoft\Documents\TOBESOFT\Nexacro N\projects\Together\Together\Class
        *	@FileName getClassBoard_Sub.xfdl
        *	@Creator 이수아
        *	@CreateDate 2022/11/17
        *	@Description 게시판을 상세조회 할 수 있는 폼
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2022/11/17		이수아		최초 생성
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

        this.getClassBoard_onload = function(obj,e)
        {

        	this.fvBoardNo = this.parent.param1;
        	var sUrl = this.ufnGetServerUrl() + "web/inner2.html?time=" + this.ufnGetDate(); // 이클립스에있는 웹 불러서 초기화...
        	trace("sUrl" + sUrl);
        	this.divGetClassBoard.form.webBrowResult.set_url(sUrl);

        };

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/
        /**
        * @description 메세지 콜백
        */

        this.fnCallback = function(trId)
        {
        	if(trId == "getDetailBoard"){
        		this.fn_search();

        		if(this.fvObjApp.gdsUser.getColumn(0, "userId") == this.dsBoard.getColumn(this.dsBoard.rowposition, "user_id")){
        			this.btnUpdate.set_visible(true);
        			this.btnDelete.set_visible(true);
        		}else{
        			this.btnUpdate.set_visible(false);
        			this.btnDelete.set_visible(false);
        		}
        		trace(this.fvObjApp.gdsUser.getColumn(0, "userId") + "--------" + this.dsBoard.getColumn(this.dsBoard.rowposition, "user_id"));
        		trace(this.dsBoard.saveXML());
        	}else if(trId == "getComment"){

        	}else if(trId == "updateComment"){
        		this.ufnAlert("msg.update.success");
        		this.selectComment(this.fvBoardNo);
        	}else if(trId == "deleteComment"){
        		this.ufnAlert("msg.delete.success");
        		this.selectComment(this.fvBoardNo);
        	}else if(trId == "addComment"){
        		this.selectComment(this.fvBoardNo);
        		this.ufnAlert("msg.save.success");
        		this.divGetComment.form.txaAddComment.set_value("");
        	}else if(trId == "updateBoard") {
        		this.ufnAlert("msg.update.success");
        	}else if(trId == "deleteBoard"){
        		this.ufnAlert("msg.delete.success");
        		this.close();
        		this.fvObjApp.gvMainFrame.set_formurl("");
        		this.fvObjApp.gvMainFrame.set_formurl("Together::Class/getClass.xfdl");
        	}
        };

        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/
        /**
        * @description 게시판의 이름을 설정하는 함수
        */
        this.fnInit = function()
        {
        	if(this.fvApp.gvClassTabId == 0){
        		this.divGetClassBoard.form.edtBoardId.set_value("공지사항");
        	}else if(this.fvApp.gvClassTabId == 1){
        		this.divGetClassBoard.form.edtBoardId.set_value("가입인사");
        	}else if(this.fvApp.gvClassTabId == 2){
        		this.divGetClassBoard.form.edtBoardId.set_value("자유글");
        	}else if(this.fvApp.gvClassTabId == 3){
        		this.divGetClassBoard.form.edtBoardId.set_value("Q&A");}

        	this.btnGetComment_onclick(this.btnGetComment,{});
        }


        /**
        * @description 웹브라우저를 가져오는 함수
        */
        this.fn_search = function()
        {
        	// 웹브라우져 document Body 객체 가져오는 법
        	//this.doc = this.webBrowResult.getProperty("document"); // html 전용 script
        	this.docBody = this.divGetClassBoard.form.webBrowResult.getProperty("document").getProperty("body");
        	this.docEle = this.divGetClassBoard.form.webBrowResult.getProperty("document").getProperty("documentElement");

        	// 웹브라우져 document Body 변경 처리
        	//this.doc.handle.body.innerHTML = strHtml;	// html 전용 script
        	this.docBody.setProperty("innerHTML", this.dsBoard.getColumn(0, "content"));
        	//trace("strHtml===" + strHtml);

        	// document Body의 크기를 가지고 웹브라우져 size 변경 처리
        	//var nHeight = this.doc.handle.body.offsetHeight;	// html 전용 script
        	var nHeight;
        	// 런타임 접속
        	if (system.navigatorname == "nexacro")
        	{
        		nHeight = this.docBody.getProperty("offsetHeight");
        		trace("nHeight===" + nHeight);
        		this.divGetClassBoard.form.webBrowResult.setOffsetHeight(nHeight+220); // 높이에맞게 브라우저 높이를 키워준것. 그래서 스크롤이 안생김...
        		this.divGetClassBoard.setOffsetHeight(nHeight+260)
        	}
        	// 웹브라우져 접속
        	else {
        		nHeight = this.docBody.getProperty("offsetHeight");
        		//trace("nHeight===" + nHeight);
        		this.divGetClassBoard.form.webBrowResult.setOffsetHeight(nHeight+140);
        		this.divGetClassBoard.setOffsetHeight(nHeight+260)
        	}
        	this.resetScroll();
        }


        /**
        * @description 댓글 상세조회를 가져오는 함수
        */
        this.selectComment = function(boardNo)
        {
        	this.ufnTransaction(
        		"getComment"
        		,"getComment.do"
        		,""
        		,"dsComment=out_comment"
        		,"paramBoardNo="+nexacro.wrapQuote(boardNo)
        		,"fnCallback")
        }

        /**
        * @description 자신이 쓴 댓글만 버튼이 보이게끔 하는 함수
        */
        this.fnUpdateComment = function(user_id)
        {
         	if(user_id == this.fvObjApp.gdsUser.getColumn(0, "userId")){

        		return "buttoncontrol";
        	}else{

        		return "none";
        	}
        }

        /**
        * @description 자신이 쓴 댓글만 버튼이 보이게끔 하는 함수
        */
        this.fnUpdateComment2 = function(user_id)
        {

        	if(user_id == this.fvObjApp.gdsUser.getColumn(0, "userId")){

        		return "button";
        	}else{

        		return "none";
        	}
        }

        /**
        * @description 자신이 쓴 댓글에만 수정이 보이게끔 하는 함수
        */
        this.fnUpdateComment3 = function(user_id)
        {

        	if(user_id == this.fvObjApp.gdsUser.getColumn(0, "userId")){

        		return "수정";
        	}else{

        		return "";
        	}
        }

        /**
        * @description 자신이 쓴 댓글에만 삭제가 보이게끔 하는 함수
        */
        this.fnUpdateComment4 = function(user_id)
        {

        	if(user_id == this.fvObjApp.gdsUser.getColumn(0, "userId")){

        		return "삭제";
        	}else{

        		return "";
        	}
        }


        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/
        /**
        * @description 웹브라우저가 로딩되었을 떄 발생하는 이벤트
        */
        this.divGetClassBoard_webBrowResult_onloadcompleted = function(obj,e)
        {
        	this.dsBoard00.clearData();
        	this.dsBoard00.addRow();

        	this.dsBoard.addRow();

        	this.ufnTransaction(
        		"getDetailBoard"
        		,"getDetailBoard.do"
        		,""
        		,"dsBoard=out_board"
        		,"paramBoardNo="+nexacro.wrapQuote(this.parent.param1)
        		,"fnCallback")
        	this.fnInit();

        };


        /**
        * @description 댓글 접기, 댓글 보기 클릭
        */
        this.btnGetComment_onclick = function(obj,e)
        {

        	if(obj.text == "댓글접기")
        	{
        		this.divGetComment.setOffsetHeight(0);
        		obj.set_text("댓글보기");
        	}
        	else
        	{
        		this.divGetComment.setOffsetHeight(510);
        		obj.set_text("댓글접기");
        	}

        	this.resetScroll();
        	this.selectComment(this.parent.param1);
        };

        /**
        * @description 댓글 그리드의 수정/클릭 시
        */
        this.divGetComment_grdGetComment_oncellclick = function(obj,e)
        {

        	if(e.cell == 7){ // 수정
        		trace("e.row???????"+e.row);
        		if(this.dsComment.getColumn(e.row, "user_id") != this.fvObjApp.gdsUser.getColumn(0, "userId")){
        		}else{
        			this.ufnTransaction(
        				"updateComment"
        				,"updateComment.do"
        				,"dsComment=dsComment:U"
        				,"dsComment=out_comment"
        				,""
        				,"fnCallback")}


        	}else if(e.cell == 6){ // 삭제
        		trace("e.row??????==========="+e.row);

        		if(this.dsComment.getColumn(e.row, "user_id") != this.fvObjApp.gdsUser.getColumn(0, "userId")){
        		}else{
        			this.ufnTransaction(
        				"deleteComment"
        				,"deleteComment.do"
        				,""
        				,"dsComment=out_comment"
        				,"paramCommentNo="+this.dsComment.getColumn(e.row, "comment_no")
        				,"fnCallback")}

        	}

        };

        /**
        * @description 댓글 작성 클릭 시
        */
        this.divGetComment_btnAddComment_onclick = function(obj,e)
        {
        	// 		this.dsComment.clearData();
        	this.dsComment.addRow();
        	this.dsComment.setColumn(this.dsComment.rowposition, "board_no", this.dsBoard.getColumn(0, "board_no"));
        	this.dsComment.setColumn(this.dsComment.rowposition, "content", this.divGetComment.form.txaAddComment.value);
        	this.dsComment.setColumn(this.dsComment.rowposition, "user_id", this.fvObjApp.gdsUser.getColumn(0, "userId"));

        	this.ufnTransaction(
        		"addComment"
        		,"addComment.do"
        		,"dsComment=dsComment:U"
        		,""
        		,""
        		,"fnCallback")
        };


        /**
        * @description 게시물 수정 클릭 시
        */
        this.btnUpdate_onclick = function(obj,e)
        {
        	this.fvApp.gvBoardNo =  this.parent.param1;
        	this.fvObjApp.gvMainFrame.set_formurl("Together::Class/updateClassBoard.xfdl");
        	this.close();

        };

        /**
        * @description 게시물 삭제 클릭 시
        */
        this.btnDelete_onclick = function(obj,e)
        {

        	this.ufnTransaction(
        		"deleteBoard"
        		,"deleteBoard.do"
        		,""
        		,"dsBoard=out_board"
        		,"paramBoardNo="+nexacro.wrapQuote((this.parent.param1))
        		,"fnCallback")

        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.getClassBoard_onload,this);
            this.divGetClassBoard.form.webBrowResult.addEventHandler("onusernotify",this.Div00_webBrowResult_onusernotify,this);
            this.divGetClassBoard.form.webBrowResult.addEventHandler("onloadcompleted",this.divGetClassBoard_webBrowResult_onloadcompleted,this);
            this.divGetComment.form.grdGetComment.addEventHandler("oncellclick",this.divGetComment_grdGetComment_oncellclick,this);
            this.divGetComment.form.btnAddComment.addEventHandler("onclick",this.divGetComment_btnAddComment_onclick,this);
            this.divGetComment.form.txaAddComment.addEventHandler("onchanged",this.Div01_TextArea00_onchanged,this);
            this.btnGetComment.addEventHandler("onclick",this.btnGetComment_onclick,this);
            this.btnUpdate.addEventHandler("onclick",this.btnUpdate_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
        };
        this.loadIncludeScript("getClassBoard_Sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
