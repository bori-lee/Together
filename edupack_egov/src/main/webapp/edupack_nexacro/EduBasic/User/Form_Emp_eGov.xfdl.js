(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Emp_Exe");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"SALARY\" type=\"INT\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRID\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pos", this);
            obj._setContents("<ColumnInfo><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gender", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">M</Col><Col id=\"NAME\">남성</Col></Row><Row><Col id=\"CODE\">W</Col><Col id=\"NAME\">여성 </Col></Row><Row><Col id=\"CODE\">E</Col><Col id=\"NAME\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"S_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"S_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_code", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch00", this);
            obj._setContents("<ColumnInfo><Column id=\"records\" type=\"INT\" size=\"256\"/><Column id=\"page\" type=\"INT\" size=\"256\"/><Column id=\"recordsOffset\" type=\"INT\" size=\"256\"/><Column id=\"pageCount\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPagingInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnQuery","626","12","94","36",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","735","10","94","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("입력");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete","843","10","94","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","951","10","94","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","14","12","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("사원관리");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div00","16","54","1004","56",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_background("white");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","24","17","98","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtDept","86","17","87","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01","194","17","61","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn01","162","-46","82","29",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("테스트2번");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtName","241","17","172","29",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div01","550","121","479","429",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","139","3","320","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("15");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00","0","2","140","35",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00","-1","37","141","35",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_text("사원번호");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","-1","72","141","35",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","0","107","141","92",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00","0","234","141","35",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_text("결혼여부");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00_00","0","268","141","35",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_text("입사일");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00_00_00","0","303","141","35",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("6");
            obj.set_text("급여");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00_00_00_00","0","338","141","91",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("7");
            obj.set_text("비고사항");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt00","152","5","296","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("8");
            obj.set_cssclass("edt_WF_Essential");
            this.div01.addChild(obj.name, obj);

            obj = new ListBox("lst00","140","107","318","90",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_pos");
            obj.set_codecolumn("POS_CD");
            obj.set_datacolumn("POS_NAME");
            this.div01.addChild(obj.name, obj);

            obj = new Radio("rdo00","147","206","273","27",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("3");
            obj.set_direction("vertical");
            obj.set_accessibilityrole("radio");
            var div01_form_rdo00_innerdataset = new nexacro.NormalDataset("div01_form_rdo00_innerdataset", obj);
            div01_form_rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남성</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">여성</Col></Row><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">기타</Col></Row></Rows>");
            obj.set_innerdataset(div01_form_rdo00_innerdataset);
            this.div01.addChild(obj.name, obj);

            obj = new CheckBox("chk00","152","237","28","28",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("12");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Calendar("cal00","150","271","280","28",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("13");
            obj.set_backgroundcolumn("backgroundcolumn");
            obj.set_bordercolumn("bordercolumn");
            obj.set_datecolumn("datecolumn");
            obj.set_textcolorcolumn("textcolorcolumn");
            var div01_form_cal00_innerdataset = new nexacro.NormalDataset("div01_form_cal00_innerdataset", obj);
            div01_form_cal00_innerdataset._setContents("<ColumnInfo><Column id=\"backgroundcolumn\" size=\"256\"/><Column id=\"bordercolumn\" size=\"256\"/><Column id=\"datecolumn\" size=\"256\"/><Column id=\"textcolorcolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datecolumn\">20220701</Col><Col id=\"backgroundcolumn\">black</Col><Col id=\"bordercolumn\">yellow</Col><Col id=\"textcolorcolumn\">pink</Col></Row></Rows>");
            obj.set_innerdataset(div01_form_cal00_innerdataset);
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_01","0","199","141","35",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("14");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta01_00","139","38","320","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("16");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta01_01","141","72","318","37",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("17");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cbo00","156","77","294","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","154","44","294","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("18");
            obj.set_format("AA-###");
            obj.set_type("string");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("msk02","151","311","291","29",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("19");
            obj.set_format("#,##0,00");
            this.div01.addChild(obj.name, obj);

            obj = new TextArea("txt01","151","352","286","62",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("20");
            this.div01.addChild(obj.name, obj);

            obj = new Calendar("cal01","174","240","257","25",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("21");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btn00","110","46","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("부서코드 조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","218","41","141","27",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("부서코드, 성명");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","369","44","132","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("조회조건 DS전송");
            this.addChild(obj.name, obj);

            obj = new Grid("grd01","445","560","172","152",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_dept");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DEPT_CD\"/><Cell col=\"1\" text=\"DEPT_NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CD\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd02","628","560","164","152",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("ds_pos");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"POS_CD\"/><Cell col=\"1\" text=\"POS_NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:POS_CD\"/><Cell col=\"1\" text=\"bind:POS_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","511","43","94","29",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("부서, 직급조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","11","560","122","37",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("공통코드 가져오기");
            this.addChild(obj.name, obj);

            obj = new Grid("grd03","170","560","236","79",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_binddataset("ds_code");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn05","952","574","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("중복체크 ");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskID","862","568","80","44",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_autoskip("true");
            obj.set_type("string");
            obj.set_format("AA-###");
            obj.set_value("AA888");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","100","6","468","34",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("div02");
            obj.set_background("antiquewhite");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","18","2","106","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("목록개수");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCnt","Static01:24","5","145","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_text("");
            obj.set_value("5");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divPage","10","607","520","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_background("antiquewhite");
            obj.set_url("Cmm::CmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","10","126","520","425",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"DEPT_CD\"/><Cell col=\"3\" text=\"POS_CD\"/><Cell col=\"4\" text=\"HIRE_DATE\"/><Cell col=\"5\" text=\"SALARY\"/><Cell col=\"6\" text=\"GENDER\"/><Cell col=\"7\" text=\"MARRID\"/><Cell col=\"8\" text=\"MEMO\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_CD\"/><Cell col=\"3\" text=\"bind:POS_CD\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:SALARY\"/><Cell col=\"6\" text=\"bind:GENDER\"/><Cell col=\"7\" text=\"bind:MARRID\"/><Cell col=\"8\" text=\"bind:MEMO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01.form
            obj = new Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPage
            obj = new Layout("default","",0,0,this.divPage.form,function(p){});
            this.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div01.form.edt00","value","ds_emp","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div01.form.msk00","value","ds_emp","EMPL_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div01.form.cal00","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div01.form.msk02","value","ds_emp","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div01.form.chk00","value","ds_emp","MARRID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div01.form.txt01","value","ds_emp","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div01.form.cal01","visible","ds_emp","MARRID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div01.form.txt01","background","ds_emp","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div01.form.cbo00","value","ds_emp","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div01.form.lst00","value","ds_emp","POS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div01.form.rdo00","value","ds_emp","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div00.form.edtDept","value","dsSearch","S_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div00.form.edtName","value","dsSearch","S_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Cmm::CmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("Form_Emp_eGov.xfdl", function() {
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvRecords=0; 			//목록갯수
        this.fvPage=0;	 			//페이지번호
        this.fvRecordsOffset=0;		//시작rownum
        this.fvTotalCount=0;		//전체데이터갯수
        this.fvPageCount=0; 		//실제표출페이지갯수

        this.Form_Emp_Exe_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        	//this.btn03_onclick();
        };


        //조회 버튼
        this.fnSearch = function(obj,e)
        {

        	// 조회조건 설정
        	//데이터를 넘길 경우 데이터셋에 추가해서 넘기는 방식과
        	//아규먼트를 추가해서 넘기는 방식 모두 사용가능
        	this.dsSearch00.clearData();
        	var nRow = this.dsSearch00.addRow();
        	this.dsSearch00.setColumn(nRow, "records", this.fvRecords);
        	this.dsSearch00.setColumn(nRow, "recordsOffset", this.fvRecordsOffset);

        	trace(this.dsSearch00.saveXML());

         	var strSvcId    = "search";
        	var strSvcUrl   = "selectPagingSample.do";
        	var inData      = "dsSearch00=dsSearch00"; // 조회조건으로 넘어갈때는 :u를 붙이지않는다.
        	var outData     = "ds_emp=ds_emp dsPagingInfo=dsPagingInfo";
        	var strArg      = "";
        	var callBackFnc = "fnCallback00";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]

        };


        this.fnCallback00 = function(svcID,errorCode,errorMsg)
        {
        	switch(svcID)
        	{
        		case "search":
        			this.fnPagingSetting(); //make paging
        			break;
        	}
        };

         this.fnPageInit = function () // 페이징처리 기본 세팅값
         {
         	//pagin info init setting
        	this.fvRecords=this.divSearch.form.cboCnt.value; //목록갯수
        	this.fvPage=0;	 								 //페이지번호
        	this.fvRecordsOffset=0;							 //시작rownum
        	this.fvPageCount = 0;							 //실제표출페이지갯수

        	this.fnSearch();
         };

        this.fnPagingSetting = function ()
        {
        	this.fvTotalCount = nexacro.toNumber(this.dsPagingInfo.getColumn("totalCount")); //전체로우갯수
        	//create page
        	this.divPage.form.fnCreatePage("fnPagingCallback",
        									this.fvTotalCount,
        									this.fvRecords,
        									this.fvPage,
        									this.fvPageCount);
        };

        this.fnPagingCallback = function(nPage, nRecordsOffset)
        {
        	this.fvPage = nPage;
        	this.fvRecordsOffset = nRecordsOffset;

        	this.fnSearch(); //조회함수호출
        };

          /*var strSvcId  = "strSelect" ; //서비스 호출 ID
          var strSvcUrl = "selectEmpListAll.do" ; //server에서 호출할 .do 의 url
          var inData    = "" ; // server단의로 넘길 dataset
          var outData   = "ds_emp=out_emp" ; //server에서 결과로 넘어오는 명칭
          var callBackFnc = "fnCallback";   //콜백함수명 지정
          var isAsync     = true;           //동기 OR 비동기 설정

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, callBackFnc, isAsync);*/



        this.btn00_onclick = function(obj,e)
        {
        	var sDeptCd = this.div00.form.edtDept.value;
        	this.gfnTransaction("trSelect"
        						,"selectEmpListParam1.do"
        						,""
        						,"ds_emp=out_emp"
        						,"paramDept="+sDeptCd
        						,"fnCallback")

        };


        this.btn02_onclick = function(obj,e)
        {
        	var sDeptCd = this.div00.form.edtDept.value;
        	var sName = this.div00.form.edtName.value;
        	this.gfnTransaction("trSelect2"
        						,"selectEmpListParam2.do"
        						,""
        						,"ds_emp=out_emp"
        						,"paramDept="+sDeptCd + " paramName="+ nexacro.wrapQuote(sName) // 감싸서 공백있어도 데이터잘넘겨줄수있게..
        						,"fnCallback")



        };

        //데이터셋으로 파라미터를 넘기는방법
        this.btn01_onclick = function(obj,e)
        {

        	this.gfnTransaction("trSelect3"
        						,"selectEmpListDs.do"
        						,"paramDs=dsSearch"
        						,"ds_emp=out_emp"
        						,"" // 감싸서 공백있어도 데이터잘넘겨줄수있게..
        						,"fnCallback")

        };

        this.btn03_onclick = function(obj,e)
        {

        	this.gfnTransaction("trSelect4"
        						,"selectEmpListDsPos.do"
        						,""
        						,"ds_dept=out_dept ds_pos=out_pos"
        						,""// 감싸서 공백있어도 데이터잘넘겨줄수있게..
        						,"fnCallback2")


        };
        this.fnCallback2 = function()
        {
        	this.grd03.createFormat();

        	//trace(this.ds_dept.saveXML());
        }

        //공통코드 가져오기 > B001, C001, D001 그룹코드
        this.btn04_onclick = function(obj,e)
        {
        	//var arrCode = ["B001", "C001", "D001"]; // 화면단에서도 데이터를 받아올수있다.
        	this.gfnTransaction("trSelect5"
        						,"selectCommonCode.do"
        						,""
        						,"ds_code=out_code"
        						,""// 감싸서 공백있어도 데이터잘넘겨줄수있게..   // "paramCode="+nexacro.wrapQuote(arrCode.toString())
        						,"fnCallback2")

        };


        this.btnSave_onclick = function(obj,e)
        {
        	this.gfnTransaction("trSave"
        						,"saveEmpData.do"
        						,"in_emp=ds_emp:U"
        						,""
        						,""
        						,"fnCallback3")

        };

        this.fnCallback3 = function(trdId,errCd, errMsg)
        {
        	if(trId = "trSave"){
        		alert("저장되었습니다");
        	}
        }

        this.btnDelete_onclick = function(obj,e)
        {
        	this.ds_emp.deleteRow(this.ds_emp.rowposition);
        };


        this.btnAdd_onclick = function(obj,e)
        {
        	this.ds_emp.addRow();
        };

        this.btn05_onclick = function(obj,e)
        {
        	var sId = this.mskID.value;
        	this.gfnTransaction("trSelect6"
        						,"checkEmpID.do"
        						,""
        						,""
        						,"paramID="+ nexacro.wrapQuote(sId)
        						,"fnCallback4")
        };

        this.rtn_cnt = 0;
        this.fnCallback4 = function(trId, errCd, errMsg)
        {

        	if(trId == "trSelect6")
        	{
        		if(this.rtn_cnt > 0)
        			alert("이미 중복된 사원번호입니다");
        	}
        }

        this.btnQuery_onclick = function(obj,e)
        {
        	cthis.fnPageInit(); //최초조회조건세팅
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Emp_Exe_onload,this);
            this.addEventHandler("onkillfocus",this.Form_Emp_Exe_onkillfocus,this);
            this.btnQuery.addEventHandler("onclick",this.btnQuery_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.div00.form.edtDept.addEventHandler("onchanged",this.div00_edtDept_onchanged,this);
            this.div00.form.btn01.addEventHandler("onclick",this.div00_btn01_onclick,this);
            this.div01.form.edt00.addEventHandler("onchanged",this.div01_edt00_onchanged,this);
            this.div01.form.rdo00.addEventHandler("onitemchanged",this.div01_rdo00_onitemchanged,this);
            this.div01.form.chk00.addEventHandler("onclick",this.div01_chk00_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.btn04.addEventHandler("onclick",this.btn04_onclick,this);
            this.btn05.addEventHandler("onclick",this.btn05_onclick,this);
        };
        this.loadIncludeScript("Form_Emp_eGov.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
