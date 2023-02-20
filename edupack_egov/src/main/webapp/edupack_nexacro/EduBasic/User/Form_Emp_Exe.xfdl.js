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
            
            // UI Components Initialize
            obj = new Button("btnQuery","600","14","94","36",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","708","14","94","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("입력");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete","816","14","94","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","924","14","94","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","14","12","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("사원관리");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div00","16","54","1004","56",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_background("white");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","24","17","98","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00","86","15","87","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn00","173","15","50","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("btn_WF_Find");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00","223","15","160","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01","500","18","61","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdo00","544","12","236","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_gender");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_columncount("3");
            obj.set_text("");
            obj.set_value("A");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn01","162","-46","82","29",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("테스트2번");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd00","19","128","520","425",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"81\"/><Column size=\"71\"/><Column size=\"84\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"108\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"No2\"/><Cell col=\"2\" text=\"var1\"/><Cell col=\"3\" text=\"var2\"/><Cell col=\"4\" text=\"fn\"/><Cell col=\"5\" text=\"사원정보\"/><Cell col=\"6\" text=\"사번\"/><Cell col=\"7\" text=\"성명\"/><Cell col=\"8\" text=\"부서\"/><Cell col=\"9\" text=\"직위\"/><Cell col=\"10\" text=\"입사일자\"/><Cell col=\"11\" text=\"급여\"/><Cell col=\"12\" text=\"성별\"/><Cell col=\"13\" text=\"결혼여부\"/><Cell col=\"14\" text=\"MEMO\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"expr:dataset.getRowCount() - currow\"/><Cell col=\"2\" text=\"expr:comp.parent.var1\"/><Cell col=\"3\" text=\"expr:comp.parent.var2\"/><Cell col=\"4\" text=\"expr:comp.parent.fn_name(currow+1)\"/><Cell col=\"5\" text=\"expr:EMPL_ID + &quot;-&quot; + FULL_NAME\"/><Cell col=\"6\" displaytype=\"mask\" edittype=\"mask\" maskedittype=\"string\" maskeditformat=\"AA-###\" maskeditimeaction=\"none\" textAlign=\"center\" text=\"bind:EMPL_ID\"/><Cell col=\"7\" text=\"bind:FULL_NAME\" tooltiptext=\"bind:FULL_NAME\"/><Cell col=\"8\" text=\"bind:DEPT_CD\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\" combodataset=\"ds_dept\"/><Cell col=\"9\" text=\"bind:POS_CD\" displaytype=\"combocontrol\" edittype=\"combo\" combocodecol=\"POS_CD\" combodatacol=\"POS_NAME\" combodataset=\"ds_pos\"/><Cell col=\"10\" text=\"bind:HIRE_DATE\"/><Cell col=\"11\" text=\"bind:SALARY\"/><Cell col=\"12\" text=\"expr:GENDER == &quot;M&quot; ? &quot;남성&quot; : GENDER == &quot;W&quot; ? &quot;여성&quot; : &quot;기타&quot;\"/><Cell col=\"13\" text=\"bind:MARRID\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"14\" text=\"bind:MEMO\"/></Band><Band id=\"summary\"><Cell text=\"expr:dataset.getRowCount() + &apos;건&apos;\"/><Cell col=\"1\" text=\"expr:comp.parent.ds_emp.getRowCount() + &apos;건&apos;\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&quot;SALARY&quot;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

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

            obj = new Button("btn00","256","11","133","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("btn00");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","118","9","93","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","404","14","68","33",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("221012");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","483","14","68","33",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("테스트01");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","47","576","54","31",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("btn03");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","117","574","43","29",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("btn04");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01.form
            obj = new Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Emp_Exe.xfdl", function() {
        this.var1 = "abc"; // var var1 으로 하면 안나옴 .. var변수는 오로지 스크립트 안에서만 쓸수있기때문에. component에서 접근 불가능 그런 제한없이 접근할려고하면 this변수를 사용해야한다.
        this.var2 = "123";

        this.fn_name = function(arg)
        {
        	return arg + 'pos';
        }

        this.btn00_onclick = function(obj,e)
        {
        	trace(this.roundDight(1000/3, 1));
        };

        this.roundDight = function(n, digits)
        {
        	if (digits >= 0) {
        		return parseFloat(n.toFixed(digits));
        	} else {
        		digits = Math.pow(10, digits);
        		var t = Math.round(n * digits); // digits;
        		return parseFloat(t.toFixed(0));
        	}
        }

        //트랙잭션
        this.btnQuery_onclick = function(obj,e)
        {
        	this.transaction(
        		"strSelect", // 서비스 구분 ID
        		"SvcUrl2::select_emp.jsp?a=b&c=d", // 호출할 서비스 url
        		"", // 저장 서버 server ds = client ds
        		"ds_emp=out_emp", // 조회 client ds = server ds
        		"a=b c=" + nexacro.wrapQuote("d e"), // 전달값(get방식은 위처럼 쓰면된다) 포스트는 여기다가 쓰면 된다.  wrapQuote로 감싸주면 하나의 값으로 인식??
        		"fn_call"); // 서비스 결과를 return 받는 함수
        };

        this.fn_call = function(svcId, ecd, emsg)
        {
        	if(ecd >=0)
        	{
        		if(svcId == "strSelect")
        		{

        			alert(this.ds_emp.getRowCount() + '건');
        		} else if(svcId == "strSave")
        		{
        			alert("저장 성공");
        		}

        	} else{
        		alert("실패 : " + ecd + ":" + emsg);
        	}
        }


        this.btnAdd_onclick = function(obj,e)
        {
        	this.ds_emp.addRow();
        	this.ds_emp.setColumn(this.ds_emp.rowposition, "HIRE_DATE", "20220923");
        	this.ds_emp.setColumn(this.ds_emp.rowposition, "MEMO", "black");
        };

        this.btnDelete_onclick = function(obj,e)
        {
        	if(this.confirm("삭제하시겠습니까?")) // 사용자에게 선택을 부여하는 메소드 confirm
        	{
        	this.ds_emp.deleteRow(this.ds_emp.rowposition);
        	}

        };

        //트랜잭션은 보통 코드스니핏 사용해서 많이 씀
        this.btnSave_onclick = function(obj,e)
        {
        		this.transaction(
        		"strSave", // 서비스 구분 ID
        		"SvcUrl2::save_emp.jsp?a=b&c=d", // 호출할 서비스 url
        		"in_emp=ds_emp:U", // 저장 서버 server ds = client ds, :U --> insert, update, delete 같이 변경된 것만 넘기겠따. 갱신된 정보만을 보냅니다. :A는 모든 정보(특별한 사유가없는데 :A를 쓰면 잘못쓴거)
        		"", // 조회 client ds = server ds
        		"", // 전달값(get방식은 위처럼 쓰면된다) 포스트는 여기다가 쓰면 된다.  wrapQuote로 감싸주면 하나의 값으로 인식??
        		"fn_call"); // 서비스 결과를 return 받는 함수
        };

        //폼이 로딩될 때 자동으로 데이터 가져옴
        //sync방식보다 async방식으로 써야 좋다
        this.Form_Emp_Exe_onload = function(obj,e)
        {

        	this.gfnFormOnLoad(this);

        	//상황에 따라 url를 바꿀수있다. 개발서버일때는 어떤걸로, 운영서버일때는 어떤걸로.. (일단안됨)
        	//http:localhost:8088/edupack_egov/edu/edupack_jsp/
        // 	var objEnv = nexacro.getEnvironment();
        // 	var objSvcUrl2 = objEnv.services["SvcUrl2"];
        // 	trace("@@@"+objSvcUrl2.url);
        //
        // 	objEnv.services["SvcUrl2"].set_url("http:localhost:8088/edupack_egov/edu/edupack_jsp/");
        // 	trace("###"+objSvcUrl2.url);




        	this.transaction(
        			"strCode", // 서비스 구분 ID
        			"SvcUrl2::select_code.jsp?a=b&c=d", // 호출할 서비스 url
        			"", // 저장 서버 server ds = client ds
        			"ds_dept=out_dept ds_pos=out_pos ", // 조회 client ds = server ds
        			"a=b c=" + nexacro.wrapQuote("d e"), // 전달값(get방식은 위처럼 쓰면된다) 포스트는 여기다가 쓰면 된다.  wrapQuote로 감싸주면 하나의 값으로 인식??
        			"fn_call"); // 서비스 결과를 return 받는 함수
        };


        this.edt00_onkeydown = function(obj,e)
        {
        	trace(e.keycode); //키보드 텍스트의 키값에대한 키코드정보가 들어옴.
        };

        this.btn01_onclick = function(obj,e)
        {

        	//trace(this.ds_emp.getColumn(this.ds_emp.rowposition, "POS_CD")); //undefined는 값이 없을때 출력.

        	//더편한 방법
        	for(var i =0; i<this.ds_emp.getColCount(); i++)
        	{
        		trace(this.ds_emp.getColumn(this.ds_emp.rowposition, this.ds_emp.getColID(i)));
        	}
        };

        this.btn02_onclick = function(obj,e)
        {
        	alert(system.navigatorname); // 실행환경을 알 수 있는 메소드

        };


        this.btn00_onkillfocus = function(obj,e)
        {
        	this.btnSave.setFocus(); // 버튼이 떠날때 포커스를 이쪽으로 옮겨줌..
        };

        this.btn03_onclick = function(obj,e)
        {
        	var rtn = this.div01.form.rdo00.getInnerDataset();
        	var nCnt = rtn.getRowCount();
        	for(var i =0; i<nCnt; i++)
        	{
        		trace(rtn.getColumn(i, "codecolumn"));
        		trace(rtn.getColumn(i, "datacolumn"));
        	}
        };

        this.btn04_onclick = function(obj,e)
        {
        	var rtn = this.div01.form.rdo00.getInnerDataset();
        	rtn.insertRow(0);
        	rtn.setColumn(rtn.rowposition, "codecolumn", "0");
        	rtn.setColumn(rtn.rowposition, "datacolumn", "아저씨");
        	rtn.addRow();
        	rtn.setColumn(rtn.rowposition, "codecolumn", "1");
        	rtn.setColumn(rtn.rowposition, "datacolumn", "아줌마");
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
            this.div00.form.btn00.addEventHandler("onclick",this.div00_btn00_onclick,this);
            this.div00.form.rdo00.addEventHandler("onitemchanged",this.div00_rdo00_onitemchanged,this);
            this.div00.form.btn01.addEventHandler("onclick",this.div00_btn01_onclick,this);
            this.div01.form.edt00.addEventHandler("onchanged",this.div01_edt00_onchanged,this);
            this.div01.form.rdo00.addEventHandler("onitemchanged",this.div01_rdo00_onitemchanged,this);
            this.div01.form.chk00.addEventHandler("onclick",this.div01_chk00_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn00.addEventHandler("onkillfocus",this.btn00_onkillfocus,this);
            this.edt00.addEventHandler("onkeydown",this.edt00_onkeydown,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.btn04.addEventHandler("onclick",this.btn04_onclick,this);
        };
        this.loadIncludeScript("Form_Emp_Exe.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
