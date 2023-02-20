(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("getClass");
            this.set_titletext("모임 상세조회");
            this.set_background("whitesmoke");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsClass", this);
            obj._setContents("<ColumnInfo><Column id=\"sumnail_img\" type=\"STRING\" size=\"256\"/><Column id=\"location_name\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"wish_count\" type=\"INT\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/><Column id=\"class_user_cnt\" type=\"INT\" size=\"8\"/><Column id=\"fileimg\" type=\"STRING\" size=\"256\"/><Column id=\"profile_img\" type=\"STRING\" size=\"256\"/><Column id=\"fileimg1\" type=\"STRING\" size=\"256\"/><Column id=\"nick\" type=\"STRING\" size=\"256\"/><Column id=\"intro\" type=\"STRING\" size=\"256\"/><Column id=\"personnel\" type=\"INT\" size=\"256\"/><Column id=\"categ_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJoinClass", this);
            obj._setContents("<ColumnInfo><Column id=\"profile_img\" type=\"STRING\" size=\"256\"/><Column id=\"nick\" type=\"STRING\" size=\"256\"/><Column id=\"birth\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"INT\" size=\"256\"/><Column id=\"fileimg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMeet", this);
            obj._setContents("<ColumnInfo><Column id=\"joinClassNo\" type=\"INT\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"classNo\" type=\"INT\" size=\"256\"/><Column id=\"status\" type=\"INT\" size=\"256\"/><Column id=\"regDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWish", this);
            obj._setContents("<ColumnInfo><Column id=\"wishNo\" type=\"INT\" size=\"256\"/><Column id=\"classNo\" type=\"INT\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"wishCheck\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBoard", this);
            obj._setContents("<ColumnInfo><Column id=\"board_no\" type=\"INT\" size=\"256\"/><Column id=\"board_id\" type=\"INT\" size=\"256\"/><Column id=\"class_no\" type=\"INT\" size=\"256\"/><Column id=\"user_id\" type=\"STRING\" size=\"256\"/><Column id=\"nick\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/><Column id=\"image\" type=\"STRING\" size=\"256\"/><Column id=\"like_count\" type=\"INT\" size=\"256\"/><Column id=\"pin\" type=\"INT\" size=\"256\"/><Column id=\"reg_date\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"INT\" size=\"256\"/><Column id=\"profile_img\" type=\"STRING\" size=\"256\"/><Column id=\"fileimg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","4","75","50.00%","131",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divGetClass","Static00_00:-564","48","1140","1042",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("1px solid darkgray");
            obj.set_background("white");
            obj.set_borderRadius("20px");
            this.addChild(obj.name, obj);

            obj = new Edit("edtLocation","757","254","133","36",null,null,null,null,null,null,this.divGetClass.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_background("white");
            obj.set_text("지역");
            this.divGetClass.addChild(obj.name, obj);

            obj = new Edit("edtTitle","19","17","977","40",null,null,null,null,null,null,this.divGetClass.form);
            obj.set_taborder("1");
            obj.set_value("모임 이름");
            obj.set_font("bold 15pt/normal \"Yu Gothic UI Semibold\"");
            obj.set_border("0px none");
            obj.set_readonly("true");
            obj.set_background("white");
            obj.set_text("모임 이름");
            this.divGetClass.addChild(obj.name, obj);

            obj = new ImageViewer("imgSumnailImg","29","150","500","298",null,null,null,null,null,null,this.divGetClass.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_background("white");
            obj.set_stretch("fit");
            this.divGetClass.addChild(obj.name, obj);

            obj = new Edit("edtMember","757","306","57","36",null,null,null,null,null,null,this.divGetClass.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_background("white");
            obj.set_text("회원수 ");
            this.divGetClass.addChild(obj.name, obj);

            obj = new Static("Static00","656","303","68","33",null,null,null,null,null,null,this.divGetClass.form);
            obj.set_taborder("4");
            obj.set_text("회원 수");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.divGetClass.addChild(obj.name, obj);

            obj = new Button("btnJoinClass","1066","10","63","27",null,null,null,null,null,null,this.divGetClass.form);
            obj.set_taborder("5");
            obj.set_text("참여하기");
            obj.set_background("#ff6128");
            obj.set_color("white");
            this.divGetClass.addChild(obj.name, obj);

            obj = new Button("btnWish","993","10","63","27",null,null,null,null,null,null,this.divGetClass.form);
            obj.set_taborder("6");
            obj.set_text("찜하기");
            obj.set_background("#ff6128");
            obj.set_color("white");
            this.divGetClass.addChild(obj.name, obj);

            obj = new Tab("tabBoard","20","892","1094","110",null,null,null,null,null,null,this.divGetClass.form);
            obj.set_taborder("7");
            obj.set_tabindex("0");
            obj.set_font("bold 10pt/normal \"Yu Gothic UI Semibold\"");
            obj.set_border("0px none");
            this.divGetClass.addChild(obj.name, obj);

            obj = new Tabpage("Tpg1",this.divGetClass.form.tabBoard);
            obj.set_text("공지사항");
            this.divGetClass.form.tabBoard.addChild(obj.name, obj);

            obj = new Grid("grdBoard01","0","0",null,null,"0","0",null,null,null,null,this.divGetClass.form.tabBoard.Tpg1.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsBoard");
            obj.set_autofittype("col");
            obj.set_border("0px none");
            obj.set_nodatatext("작성된 게시글이 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"74\"/><Column size=\"49\"/><Column size=\"53\"/><Column size=\"59\"/><Column size=\"596\"/><Column size=\"111\"/></Columns><Rows><Row size=\"34\"/><Row size=\"39\"/></Rows><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:fileimg\" displaytype=\"imagecontrol\" imagestretch=\"fit\"/><Cell col=\"1\" textAlign=\"center\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\" text=\"expr:status == 1 ? &quot;모임원&quot; : status == 2 ? &quot;방장&quot; : &quot;운영진&quot;\" color=\"navy\"/><Cell col=\"2\" colspan=\"3\" text=\"bind:nick\"/><Cell col=\"5\" text=\"bind:reg_date\" displaytype=\"date\" edittype=\"date\"/><Cell row=\"1\" col=\"1\" colspan=\"5\" border=\"1px none whitesmoke, 1px solid #d8d9da, 1px solid #d8d9da, 1px none whitesmoke\" text=\"bind:title\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\"/></Band></Format></Formats>");
            this.divGetClass.form.tabBoard.Tpg1.addChild(obj.name, obj);

            obj = new Tabpage("tpg2",this.divGetClass.form.tabBoard);
            obj.set_text("가입인사");
            this.divGetClass.form.tabBoard.addChild(obj.name, obj);

            obj = new Grid("grdBoard02","0","0",null,null,"0","0",null,null,null,null,this.divGetClass.form.tabBoard.tpg2.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsBoard");
            obj.set_autofittype("col");
            obj.set_border("0px none");
            obj.set_nodatatext("작성된 게시글이 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"74\"/><Column size=\"49\"/><Column size=\"53\"/><Column size=\"59\"/><Column size=\"596\"/><Column size=\"111\"/></Columns><Rows><Row size=\"34\"/><Row size=\"39\"/></Rows><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:fileimg\" displaytype=\"imagecontrol\" imagestretch=\"fit\"/><Cell col=\"1\" textAlign=\"center\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\" text=\"expr:status == 1 ? &quot;모임원&quot; : status == 2 ? &quot;방장&quot; : &quot;운영진&quot;\" color=\"navy\"/><Cell col=\"2\" colspan=\"3\" text=\"bind:nick\"/><Cell col=\"5\" text=\"bind:reg_date\" displaytype=\"date\" edittype=\"date\"/><Cell row=\"1\" col=\"1\" colspan=\"5\" border=\"1px none whitesmoke, 1px solid #d8d9da, 1px solid #d8d9da, 1px none whitesmoke\" text=\"bind:title\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\"/></Band></Format></Formats>");
            this.divGetClass.form.tabBoard.tpg2.addChild(obj.name, obj);

            obj = new Tabpage("tpg3",this.divGetClass.form.tabBoard);
            obj.set_text("자유글 ");
            this.divGetClass.form.tabBoard.addChild(obj.name, obj);

            obj = new Grid("grdBoard03","0","0",null,null,"0","0",null,null,null,null,this.divGetClass.form.tabBoard.tpg3.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsBoard");
            obj.set_autofittype("col");
            obj.set_border("0px none");
            obj.set_nodatatext("작성된 게시글이 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"74\"/><Column size=\"49\"/><Column size=\"53\"/><Column size=\"59\"/><Column size=\"596\"/><Column size=\"111\"/></Columns><Rows><Row size=\"34\"/><Row size=\"39\"/></Rows><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:fileimg\" displaytype=\"imagecontrol\" imagestretch=\"fit\"/><Cell col=\"1\" textAlign=\"center\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\" text=\"expr:status == 1 ? &quot;모임원&quot; : status == 2 ? &quot;방장&quot; : &quot;운영진&quot;\" color=\"navy\"/><Cell col=\"2\" colspan=\"3\" text=\"bind:nick\"/><Cell col=\"5\" text=\"bind:reg_date\" displaytype=\"date\" edittype=\"date\"/><Cell row=\"1\" col=\"1\" colspan=\"5\" border=\"1px none whitesmoke, 1px solid #d8d9da, 1px solid #d8d9da, 1px none whitesmoke\" text=\"bind:title\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\"/></Band></Format></Formats>");
            this.divGetClass.form.tabBoard.tpg3.addChild(obj.name, obj);

            obj = new Tabpage("tpg4",this.divGetClass.form.tabBoard);
            obj.set_text("Q&A");
            this.divGetClass.form.tabBoard.addChild(obj.name, obj);

            obj = new Grid("grdBoard04","0","0",null,null,"0","0",null,null,null,null,this.divGetClass.form.tabBoard.tpg4.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsBoard");
            obj.set_autofittype("col");
            obj.set_border("0px none");
            obj.set_nodatatext("작성된 게시글이 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"74\"/><Column size=\"49\"/><Column size=\"53\"/><Column size=\"59\"/><Column size=\"596\"/><Column size=\"111\"/></Columns><Rows><Row size=\"34\"/><Row size=\"39\"/></Rows><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:fileimg\" displaytype=\"imagecontrol\" imagestretch=\"fit\"/><Cell col=\"1\" textAlign=\"center\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\" text=\"expr:status == 1 ? &quot;모임원&quot; : status == 2 ? &quot;방장&quot; : &quot;운영진&quot;\" color=\"navy\"/><Cell col=\"2\" colspan=\"3\" text=\"bind:nick\"/><Cell col=\"5\" text=\"bind:reg_date\" displaytype=\"date\" edittype=\"date\"/><Cell row=\"1\" col=\"1\" colspan=\"5\" border=\"1px none whitesmoke, 1px solid #d8d9da, 1px solid #d8d9da, 1px none whitesmoke\" text=\"bind:title\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\"/></Band></Format></Formats>");
            this.divGetClass.form.tabBoard.tpg4.addChild(obj.name, obj);

            obj = new Static("Static00_02","656","352","68","33",null,null,null,null,null,null,this.divGetClass.form);
            obj.set_taborder("8");
            obj.set_text("찜 개수");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.divGetClass.addChild(obj.name, obj);

            obj = new Edit("edtWish","757","356","81","36",null,null,null,null,null,null,this.divGetClass.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_background("white");
            obj.set_text("찜 개수");
            this.divGetClass.addChild(obj.name, obj);

            obj = new ImageViewer("imgProfileImg","25","67","68","67",null,null,null,null,null,null,this.divGetClass.form);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_stretch("fit");
            obj.set_borderRadius("40px");
            obj.set_border("0px none");
            this.divGetClass.addChild(obj.name, obj);

            obj = new Edit("Edit02","imgProfileImg:3","78","127","40",null,null,null,null,null,null,this.divGetClass.form);
            obj.set_taborder("11");
            obj.set_font("12pt/normal \"Yu Gothic UI Semibold\"");
            obj.set_border("0px none");
            obj.set_readonly("true");
            obj.set_background("white");
            this.divGetClass.addChild(obj.name, obj);

            obj = new Static("Static00_03","656","254","104","33",null,null,null,null,null,null,this.divGetClass.form);
            obj.set_taborder("12");
            obj.set_text("활동 지역");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.divGetClass.addChild(obj.name, obj);

            obj = new Edit("edtIntro","243","68","736","60",null,null,null,null,null,null,this.divGetClass.form);
            obj.set_taborder("13");
            obj.set_border("0px none");
            obj.set_font("12pt/normal \"Yu Gothic UI Semibold\"");
            obj.set_color("navy");
            obj.set_readonly("true");
            obj.set_background("white");
            this.divGetClass.addChild(obj.name, obj);

            obj = new Static("Static02","edtMember:-4","303","52","43",null,null,null,null,null,null,this.divGetClass.form);
            obj.set_taborder("14");
            obj.set_text("/");
            obj.set_textAlign("center");
            obj.set_font("15pt/normal \"Yu Gothic UI Semibold\"");
            this.divGetClass.addChild(obj.name, obj);

            obj = new Edit("edtPersonnel","862","306","57","36",null,null,null,null,null,null,this.divGetClass.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_background("white");
            obj.set_text("회원수 ");
            this.divGetClass.addChild(obj.name, obj);

            obj = new Static("Static03","20","482","297","41",null,null,null,null,null,null,this.divGetClass.form);
            obj.set_taborder("16");
            obj.set_text("모임소개");
            obj.set_font("bold 15pt/normal \"Yu Gothic UI Semibold\"");
            this.divGetClass.addChild(obj.name, obj);

            obj = new Button("btnAddNotice","1056","891","57","30",null,null,null,null,null,null,this.divGetClass.form);
            obj.set_taborder("17");
            obj.set_text("작성");
            obj.set_background("#ff6128");
            obj.set_color("white");
            this.divGetClass.addChild(obj.name, obj);

            obj = new Button("btnGetClassUser","939","306","91","36",null,null,null,null,null,null,this.divGetClass.form);
            obj.set_taborder("18");
            obj.set_text("회원 목록보기");
            obj.set_background("#ff6128");
            obj.set_color("white");
            this.divGetClass.addChild(obj.name, obj);

            obj = new TextArea("txaDetail","20","531","1094","311",null,null,null,null,null,null,this.divGetClass.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_background("white");
            this.divGetClass.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","656","205","104","33",null,null,null,null,null,null,this.divGetClass.form);
            obj.set_taborder("20");
            obj.set_text("카테고리");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.divGetClass.addChild(obj.name, obj);

            obj = new Edit("edtCateg","757","202","133","36",null,null,null,null,null,null,this.divGetClass.form);
            obj.set_taborder("21");
            this.divGetClass.addChild(obj.name, obj);

            obj = new Div("divbottom","0","divGetClass:50",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_border("0px none");
            obj.set_url("Frame::Bottom.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGetClass.form.tabBoard.Tpg1.form
            obj = new Layout("default","",0,0,this.divGetClass.form.tabBoard.Tpg1.form,function(p){});
            this.divGetClass.form.tabBoard.Tpg1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGetClass.form.tabBoard.tpg2.form
            obj = new Layout("default","",0,0,this.divGetClass.form.tabBoard.tpg2.form,function(p){});
            this.divGetClass.form.tabBoard.tpg2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGetClass.form.tabBoard.tpg3.form
            obj = new Layout("default","",0,0,this.divGetClass.form.tabBoard.tpg3.form,function(p){});
            this.divGetClass.form.tabBoard.tpg3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGetClass.form.tabBoard.tpg4.form
            obj = new Layout("default","",0,0,this.divGetClass.form.tabBoard.tpg4.form,function(p){});
            this.divGetClass.form.tabBoard.tpg4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGetClass.form
            obj = new Layout("default","",0,0,this.divGetClass.form,function(p){});
            this.divGetClass.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divbottom
            obj = new Layout("default","",0,0,this.divbottom.form,function(p){});
            this.divbottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,1200,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divGetClass.form.edtLocation","value","dsClass","location_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divGetClass.form.edtTitle","value","dsClass","title");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divGetClass.form.edtWish","value","dsClass","wish_count");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divGetClass.form.edtMember","accessibilityaction","dsClass","class_user_cnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divGetClass.form.imgSumnailImg","image","dsClass","fileimg");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divGetClass.form.edtMember","value","dsClass","class_user_cnt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divGetClass.form.imgProfileImg","image","dsClass","fileimg1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divGetClass.form.Edit02","value","dsClass","nick");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divGetClass.form.edtIntro","value","dsClass","intro");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divGetClass.form.edtPersonnel","value","dsClass","personnel");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divGetClass.form.edtPersonnel","accessibilitydesclevel","dsClass","personnel");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divGetClass.form.txaDetail","value","dsClass","content");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divGetClass.form.edtCateg","value","dsClass","categ_name");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame::Bottom.xfdl");
        };
        
        // User Script
        this.registerScript("getClass.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\tobesoft\Documents\TOBESOFT\Nexacro N\projects\Together\Together\Class
        *	@FileName getClass.xfdl
        *	@Creator 이수아
        *	@CreateDate 2022/11/15
        *	@Description 모임을 상세조회하는 폼
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2022/11/15		이수아		최초 생성
        *
        *
        */

        /**************************************************************************
        * FORM 변수 선언 영역
        **************************************************************************/
        this.fvApp = nexacro.getApplication();
        this.fvObjApp = this.ufnGetApplication();
        this.nFindIndex = this.divGetClass.form.tabBoard.tabindex
        this.fvBoardId;

        /**************************************************************************
        * FORM EVENT 영역(onload, onclose)
        **************************************************************************/
        /**
        * @description 화면 화면이 load될 때 처리할 로직(필수)
        */

        this.getClass_onload = function(obj,e)
        {

        	this.fvtabHeight = this.divGetClass.form.tabBoard.height;
        	this.fvgridHeight = this.divGetClass.form.tabBoard.Tpg1.form.grdBoard01.height;
        	this.fvgridHeight1 = this.divGetClass.form.tabBoard.tpg2.form.grdBoard02.height;
        	this.fvgridHeight2 = this.divGetClass.form.tabBoard.tpg3.form.grdBoard03.height;
        	this.fvgridHeight3 = this.divGetClass.form.tabBoard.tpg4.form.grdBoard04.height;
        	this.fvdivHeight = this.divGetClass.height;
        	this.fvformHeight = this.height;

        	this.cnt = 0;

        	this.nFindIndex = this.divGetClass.form.tabBoard.tabindex;
        	this.fvApp.gvClassTabId = this.divGetClass.form.tabBoard.tabindex;

        	trace(this.fvApp.gvClassTabId);


        	this.dsBoard.clearData();
        	this.dsBoard.addRow();

        	this.nFindIndex = this.divGetClass.form.tabBoard.tabindex;

        	if(this.nFindIndex == 0){
        		this.dsBoard.setColumn(0, "board_id", 1);
        	}else if(this.nFindIndex == 1){
        		this.dsBoard.setColumn(0, "board_id", 2);
        	}else if(this.nFindIndex == 2){
        		this.dsBoard.setColumn(0, "board_id", 3);
        	}else if(this.nFindIndex == 3){
        		this.dsBoard.setColumn(0, "board_id", 4);
        	}

        	this.dsBoard.setColumn(0, "class_no", this.fvApp.gvClassNo);

        	this.ufnTransaction(
        		"getClass"
        		,"getClass.do"
        		,"dsBoard=dsBoard"
        		,"dsClass=out_class dsBoard=out_board"
        		,"paramClassNo="+nexacro.wrapQuote(this.fvApp.gvClassNo)
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
        	this.fvNull();

        	//모임 찜하기 로그인 예외처리
        	if(trId == "checkWishCount"){

        		if(this.fvObjApp.gdsUser.getRowCount() == 0) {
        			this.ufnAlert("msg1");

        		}else if(this.cnt > 0){
        			this.ufnAlert("msg4");
        		}else{ // 찜등록 처리

        			this.dsWish.clearData();
        			this.dsWish.addRow();
        			this.dsWish.setColumn(0, "classNo", this.fvApp.gvClassNo);
        			this.dsWish.setColumn(0, "userId", this.fvObjApp.gdsUser.getColumn(0, "userId"));

        			this.ufnTransaction(
        				"addWish"
        				,"addWish.do"
        				,"dsWish=dsWish"
        				,""
        				,"paramClassNo="+nexacro.wrapQuote(this.fvApp.gvClassNo)
        				,"fnCallback") }

        	}else if(trId == "addWish") {
        		this.ufnAlert("msg5");
        		this.fvObjApp.gvMainFrame.set_formurl("");
        		this.fvObjApp.gvMainFrame.set_formurl("Together::Class/getClass.xfdl");

        	}else if(trId == "getClass"){

        		var i = this.dsBoard.getRowCount(); // 건수당 75씩 증가

        		var tabHeight = this.fvtabHeight;
        		var gridHeight = this.fvgridHeight;
        		var divHeight = this.fvdivHeight;
        		var formHeight = this.fvformHeight;


        		trace("tabHeight==" + tabHeight);
        		trace("gridHeight==" + gridHeight);
        		trace("divHeight==" + divHeight);
        		trace("formHeight==" + divHeight);

        		this.divGetClass.form.tabBoard.set_height( (nexacro.toNumber(i) * 75) + nexacro.toNumber(tabHeight) );
        		trace("원래tab높이" +tabHeight);

        		this.divGetClass.form.tabBoard.Tpg1.form.grdBoard01.set_height( (nexacro.toNumber(i) * 75) + nexacro.toNumber(gridHeight) );
        		trace("원래grid높이" + gridHeight);

        		this.divGetClass.set_height( (nexacro.toNumber(i) * 75)  + nexacro.toNumber(divHeight) );
        		trace("원래div높이" + divHeight);
        		this.divGetClass.form.resetScroll();

        		trace(nexacro.toNumber(divHeight) + 200);

        		trace("parent==" + this.parent.id);
        		trace("this.id===" + this.id);

        		this.resetScroll();

        	}else if(trId == "checkJoinClass"){  // 모임참여 예외 처리

        		if(this.fvObjApp.gdsUser.getRowCount() == 0) {
        			this.ufnAlert("msg1");
        		}else if(this.cnt > 0){
        			this.ufnAlert("msg6");
        		}else if(this.divGetClass.form.edtMember.value == this.divGetClass.form.edtPersonnel.value){ // 정원초과
        			this.ufnAlert("msg7");
        		}else{ //모임 참여 트랜잭션

        			this.dsMeet.clearData();
        			this.dsMeet.addRow();
        			this.dsMeet.setColumn(0, "status", 1);
        			this.dsMeet.setColumn(0, "classNo", this.fvApp.gvClassNo);
        			this.dsMeet.setColumn(0, "userId", this.fvObjApp.gdsUser.getColumn(0, "userId"));

        			this.ufnTransaction(
        				"addJoinClass"
        				,"addJoinClass.do"
        				,"dsMeet=dsMeet:U"
        				,""
        				,""
        				,"fnCallback")};

        	}else if(trId == "addJoinClass"){
        		this.ufnAlert("msg8");
        		this.fvObjApp.gvMainFrame.set_formurl("");
        		this.fvObjApp.gvMainFrame.set_formurl("Together::Class/getClass.xfdl");

        	}else if(trId == "checkUserClass"){
        		if(this.cnt != 1){
        			this.ufnAlert("msg27");
        		}else{
        			this.fvObjApp.gvMainFrame.set_formurl("Together::Class/addClassBoard.xfdl");
        		}

        	}else if(trId == "checkUserClass1"){
        		if(this.cnt != 1){
        			this.ufnAlert("msg9");
        		}else if(this.divGetClass.form.tabBoard.Tpg1.form.grdBoard01.getCellPos() == 4 ||
        			this.divGetClass.form.tabBoard.tpg2.form.grdBoard02.getCellPos() == 4 ||
        			this.divGetClass.form.tabBoard.tpg3.form.grdBoard03.getCellPos() == 4 ||
        			this.divGetClass.form.tabBoard.tpg4.form.grdBoard04.getCellPos() == 4){

        			// 인덱스 0부터 시작
        			var objChildFrame = new ChildFrame();
        			objChildFrame.init("chf_popup1"
        				, 0 //vleft
        				, 0 // vtop
        				, 700 // 넓이
        				, 600 // 높이
        				, null
        				, null
        				, "Together::Class/getClassBoard_Sub.xfdl");

        			objChildFrame.set_openalign("center middle");
        			objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)") // 컬러값
        			objChildFrame.set_dragmovetype("all");
        			var objParam = { param1:this.fvBoardId,
        				param2:this.fvApp.gvClassNo};

        			objChildFrame.showModal( this.getOwnerFrame() // 현재 자신의 폼에
        				, objParam // 파라미터 전달
        				, this // 폼에대한 정보 넘겨주고
        				, "fn_popupCallback");	// 값을 전달받기위한 callback

        		}

        	}

        }


        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/
        /**
        * @description 찜개수 null일때 0으로 표기
        */
        this.fvNull = function() {

        	for(var i=0; i<this.dsClass.getRowCount(); i++)
        	{
        		if(this.dsClass.getColumn(i, "wish_count") == null){
        			this.divGetClass.form.edtWish.set_value("0");
        		}

        	}
        };


        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/
        /**
        * @description 참여하기 클릭 시 (중복방지, 미로그인, 회원 수 정원 처리)
        */
        this.divGetClass_btnJoinClass_onclick = function(obj,e)
        {

        	this.dsMeet.clearData();
        	this.dsMeet.addRow();
        	this.dsMeet.setColumn(0, "classNo", this.fvApp.gvClassNo);
        	this.dsMeet.setColumn(0, "userId", this.fvObjApp.gdsUser.getColumn(0, "userId"));

        	this.ufnTransaction(  // 참여 중복방지
        		"checkJoinClass"
        		,"checkJoinClass.do"
        		,"dsMeet=dsMeet"
        		,""
        		,""
        		,"fnCallback")

        };


        /**
        * @description 찜하기 클릭 시 (중복방지, 미로그인 처리)
        */
        this.divGetClass_btnWish_onclick = function(obj,e)
        {

        	//중복방지 먼저..
        	this.dsWish.clearData();
        	this.dsWish.addRow();
        	this.dsWish.setColumn(0, "userId", this.fvObjApp.gdsUser.getColumn(0, "userId"));
        	this.dsWish.setColumn(0, "classNo", this.fvApp.gvClassNo);
        	this.ufnTransaction(
        		"checkWishCount"
        		,"checkWishCount.do"
        		,"dsWish=dsWish"
        		,""
        		,""
        		,"fnCallback");


        };

        /**
        * @description 게시판 작성 클릭 시
        */
        this.divGetClass_btnAddNotice_onclick = function(obj,e)
        {
        	if(this.fvObjApp.gdsUser.getColumn(0, "userId") == null)
        	this.ufnAlert("msg1");
        	else{
        		this.dsMeet.clearData();
        		this.dsMeet.addRow();
        		this.dsMeet.setColumn(0, "classNo", this.fvApp.gvClassNo);
        		this.dsMeet.setColumn(0, "userId", this.fvObjApp.gdsUser.getColumn(0, "userId"));
        		this.ufnTransaction(   // 모임 회원인지 확인
        			"checkUserClass"
        			,"checkUserClass.do"
        			,"dsMeet=dsMeet"
        			,""
        			,""
        			,"fnCallback")
        	}
        };



        /**
        * @description 게시판 제목 클릭 시, 해당 게시판 상세폼으로 이동
        */
        this.divGetClass_tabBoard_Tpg1_grdBoard01_oncellclick = function(obj,e)
        {
        	this.fvBoardId = this.dsBoard.getColumn(e.row,"board_no");
        	trace("게시판 아이디" + this.fvBoardId);

        	if(this.fvObjApp.gdsUser.getColumn(0, "userId") == null){
        		this.ufnAlert("msg1");
        	}else{
        		this.dsMeet.clearData();
        		this.dsMeet.addRow();
        		this.dsMeet.setColumn(0, "classNo", this.fvApp.gvClassNo);
        		this.dsMeet.setColumn(0, "userId", this.fvObjApp.gdsUser.getColumn(0, "userId"));
        		this.ufnTransaction(   // 모임 회원인지 확인
        			"checkUserClass1"
        			,"checkUserClass.do"
        			,"dsMeet=dsMeet"
        			,""
        			,""
        			,"fnCallback")
        	}
        };

        /**
        * @description 회원 목록보기 클릭 시
        */
        this.divGetClass_btnGetClassUser_onclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("chf_popup1"
        		, 0 //vleft
        		, 0 // vtop
        		, 600 // 넓이
        		, 600 // 높이
        		, null
        		, null
        		, "Together::Class/getClassUser_Sub.xfdl");

        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)") // 컬러값
        	objChildFrame.set_dragmovetype("all");
        	var objParam = { param1:this.fvApp.gvClassNo};

        	objChildFrame.showModal( this.getOwnerFrame() // 현재 자신의 폼에
        		, objParam // 파라미터 전달
        		, this // 폼에대한 정보 넘겨주고
        		, "fn_popupCallback");	// 값을 전달받기위한 callback
        };

        /**
        * @description 게시판 탭페이지 데이터 건수만큼 사이즈 조절
        */
        this.divGetClass_tabBoard_onchanged = function(obj,e)
        {
        	this.dsBoard.addRow();

        	this.nFindIndex = e.postindex;

        	if(this.nFindIndex == 0){
        		this.dsBoard.setColumn(0, "board_id", 1);
        	}else if(this.nFindIndex == 1){
        		this.dsBoard.setColumn(0, "board_id", 2);
        	}else if(this.nFindIndex == 2){
        		this.dsBoard.setColumn(0, "board_id", 3);
        	}else if(this.nFindIndex == 3){
        		this.dsBoard.setColumn(0, "board_id", 4);
        	}

        	this.dsBoard.setColumn(0, "class_no", this.fvApp.gvClassNo);

        	this.ufnTransaction(
        		"getClass"
        		,"getClass.do"
        		,"dsBoard=dsBoard"
        		,"dsClass=out_class dsBoard=out_board"
        		,"paramClassNo="+nexacro.wrapQuote(this.fvApp.gvClassNo)
        		,"fnCallback")

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.getClass_onload,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.divGetClass.form.imgSumnailImg.addEventHandler("onclick",this.Div00_ImageViewer00_00_onclick,this);
            this.divGetClass.form.btnJoinClass.addEventHandler("onclick",this.divGetClass_btnJoinClass_onclick,this);
            this.divGetClass.form.btnWish.addEventHandler("onclick",this.divGetClass_btnWish_onclick,this);
            this.divGetClass.form.tabBoard.addEventHandler("onchanged",this.divGetClass_tabBoard_onchanged,this);
            this.divGetClass.form.tabBoard.Tpg1.form.grdBoard01.addEventHandler("oncellclick",this.divGetClass_tabBoard_Tpg1_grdBoard01_oncellclick,this);
            this.divGetClass.form.tabBoard.tpg2.form.grdBoard02.addEventHandler("oncellclick",this.divGetClass_tabBoard_Tpg1_grdBoard01_oncellclick,this);
            this.divGetClass.form.tabBoard.tpg3.form.grdBoard03.addEventHandler("oncellclick",this.divGetClass_tabBoard_Tpg1_grdBoard01_oncellclick,this);
            this.divGetClass.form.tabBoard.tpg4.form.grdBoard04.addEventHandler("oncellclick",this.divGetClass_tabBoard_Tpg1_grdBoard01_oncellclick,this);
            this.divGetClass.form.edtPersonnel.addEventHandler("onchanged",this.Div00_Edit00_02_01_onchanged,this);
            this.divGetClass.form.Static03.addEventHandler("onclick",this.Div00_Static03_onclick,this);
            this.divGetClass.form.btnAddNotice.addEventHandler("onclick",this.divGetClass_btnAddNotice_onclick,this);
            this.divGetClass.form.btnGetClassUser.addEventHandler("onclick",this.divGetClass_btnGetClassUser_onclick,this);
            this.divGetClass.form.txaDetail.addEventHandler("onchanged",this.Div00_TextArea00_onchanged,this);
        };
        this.loadIncludeScript("getClass.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
