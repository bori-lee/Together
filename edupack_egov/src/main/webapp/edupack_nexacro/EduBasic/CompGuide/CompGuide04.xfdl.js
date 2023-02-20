(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Guide");
            this.set_titletext("검색영역, 상세영역");
            if (Form == this.constructor)
            {
                this._setFormPosition(1048,1220);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Rdo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">All</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">Female</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">Male</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Cbo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">Static</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">Edit</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">MaskEdit</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">TextArea</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"data\">Button</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"data\">Radio</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"data\">Combo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Rdo00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">All</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">Female</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">Male</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","9","80","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("[1단]");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01","9","200","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("[2단]");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01","9","360","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("[Popup 검색영역]");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00","535","754","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("[Popup 상세영역]");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00","10","1019","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("[Tab 화면 상세영역]");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01","10","510","360","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("[ListDetail01 상세정보 영역]");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01_00","10","754","199","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("[ListDetail02 상세정보 영역]");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_01","12","876","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("[ListDetailList01 Master Info 영역]");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01_00_01","10","0","550","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("컴포넌트 가이드 04");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01_01","10","632","360","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("[ListDetail01 부가정보 영역]");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","9","40","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("검색영역");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01","9","472","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("상세영역");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00_00_00_00","52","1176","9","10",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_00_00_00_00_00","63","1174","29","14",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("H 7");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Div("div00","10","110","1028","46",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","8","58","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00","58","8","102","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn00","165","8","28","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Find");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt01","198","8","162","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00","460","8","58","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdo00","518","8","260","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            var div00_form_rdo00_innerdataset = new nexacro.NormalDataset("div00_form_rdo00_innerdataset", obj);
            div00_form_rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col><Col id=\"codecolumn\">A</Col></Row><Row><Col id=\"datacolumn\">남자</Col><Col id=\"codecolumn\">M</Col></Row><Row><Col id=\"datacolumn\">여자</Col><Col id=\"codecolumn\">W</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_rdo00_innerdataset);
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_01_00","924","126","29","14",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("H 46");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01_00_00","917","110","9","46",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01_00_00_01","298","111","9","8",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_01_00_01","300","96","29","14",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("H 8");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","10","230","1028","79",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","8","58","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("법인");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_LabelTxt");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_corp","86","8","150","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_corp");
            obj.set_codecolumn("CORP_CODE");
            obj.set_datacolumn("CORP_NAME");
            obj.set_cssclass("essential");
            obj.set_visible("true");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dept","422","8","150","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CODE");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_visible("true");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","336","8","58","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("부서");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_LabelTxt");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","672","8","58","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_LabelTxt");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_name","730","8","150","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","336","41","86","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("입사일자");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_LabelTxt");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","0","41","86","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("사원번호");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_LabelTxt");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","422","41","150","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit00","86","41","123","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_28","208","41","28","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Find");
            obj.set_visible("true");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_01_00_00","931","263","29","14",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("H 79");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01_00_00_00","920","230","9","79",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01_00_00_01_00","224","231","9","8",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_01_00_01_00","226","216","29","14",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("H 8");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01_00_00_01_00_00","243","267","9","5",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_01_00_01_00_00","256","263","29","14",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("H 5");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Div("div_search00","17","410","470","46",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_dept","58","8","140","28",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CODE");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_visible("true");
            obj.set_text("Combo00");
            this.div_search00.addChild(obj.name, obj);

            obj = new Static("Static01","0","8","58","28",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("1");
            obj.set_text("부서");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_LabelTxt");
            obj.set_visible("true");
            this.div_search00.addChild(obj.name, obj);

            obj = new Static("Static00","248","8","58","28",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("2");
            obj.set_text("성명");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_LabelTxt");
            obj.set_visible("true");
            this.div_search00.addChild(obj.name, obj);

            obj = new Edit("edt_name","306","8","140","28",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("3");
            obj.set_visible("true");
            this.div_search00.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_01","402","138","39","14",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("W 100");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_01","371","129","100","9",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_01_00","220","436","39","14",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("W 50");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_01_00","216","427","50","9",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_01","129","547","224","38",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_02","471","547","224","38",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","813","547","225","38",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","547","120","38",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","352","547","120","38",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_dept","135","552","154","28",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CODE");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_visible("true");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","694","547","120","38",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("결혼여부");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_01_00","210","530","21","14",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("H 4");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01_00","200","548","9","4",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00_00","95","547","9","38",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_00_00_00","102","556","29","14",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("H 38");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00","471","573","224","9",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00","556","558","39","14",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("W 224");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","10","672","120","38",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03_01","129","672","396","38",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","524","672","120","38",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("결혼기념일");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03_00_00","643","672","395","38",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_00","352","573","120","9",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_00","430","558","39","14",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("W 120");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_02","129","697","396","9",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_02","288","683","39","14",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("W 396");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","10","794","120","38",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","129","794","336","38",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_02_00","129","821","336","9",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_02_00","259","806","39","14",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("W 336");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00","618","796","141","38",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","524","796","95","38",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00","758","796","95","38",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","852","796","142","38",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_01_00_00_00","583","810","32","14",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("W 95");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_01_00_00","524","821","95","9",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_01_00_00_00_00","669","810","39","14",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("W 141");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_01_00_00_00","618","821","141","9",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","10","912","120","38",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("GROUP 코드");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03_02","129","912","221","38",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03_00_01","468","912","221","38",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","349","912","120","38",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("GROUP 명칭");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_00_01","129","937","221","9",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_00_01","219","920","39","14",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("W 221");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_06_00","706","1064","332","38",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_06_00","587","1064","120","38",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00","257","1064","331","38",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_00","139","1064","120","38",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("사원번호");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img00","10","1064","130","112",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_01_00_00_00_01_00","57","1082","39","14",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("W 130");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_01_00_00_01_00","10","1093","130","9",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00_00_00_01","27","1064","9","112",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_00_00_00_00_01","35","1144","37","14",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("H 112");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_01_00_00_00_00","257","1086","331","9",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_01_00_00_00_00_00","391","1067","39","14",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("W 331");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_01_01","171","111","5","9",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_01_01","161","95","39","14",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("W 5");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search00.form
            obj = new Layout("default","",0,0,this.div_search00.form,function(p){});
            this.div_search00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1048,1220,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div00.form.btn00.addEventHandler("onclick",this.div00_btn00_onclick,this);
            this.div_search.form.cmb_corp.addEventHandler("onitemchanged",this.div_search_cmb_corp_onitemchanged,this);
            this.div_search.form.Static02.addEventHandler("onclick",this.div_search_Static02_onclick,this);
            this.div_search.form.btn_28.addEventHandler("onclick",this.div_search_btn_28_onclick,this);
            this.div_search00.form.cmb_dept.addEventHandler("onitemchanged",this.div_search_cmb_dept_onitemchanged,this);
        };
        this.loadIncludeScript("CompGuide04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
