(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleArrangement");
            this.set_titletext("아코디언 (Arrangement 방식)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"SSN\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"DECIMAL\" type=\"STRING\" size=\"256\"/><Column id=\"COMPARE_1\" type=\"STRING\" size=\"256\"/><Column id=\"COMPARE_2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">kimyk</Col><Col id=\"DATE_FROM\">20171101</Col><Col id=\"DATE_TO\">20171130</Col><Col id=\"MAX_NUM\">10</Col><Col id=\"DECIMAL\">1.25</Col><Col id=\"COMPARE_1\">10</Col><Col id=\"COMPARE_2\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_NUM\" type=\"INT\" size=\"256\"/><Column id=\"MIN_NUM\" type=\"INT\" size=\"256\"/><Column id=\"LENGTH_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"RANGE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSample", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">red</Col><Col id=\"Column3\">1</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">yellow</Col><Col id=\"Column3\">2</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">blue</Col><Col id=\"Column3\">3</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">navy</Col><Col id=\"Column3\">4</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">lemon</Col><Col id=\"Column3\">5</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">orange</Col><Col id=\"Column3\">6</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">test</Col><Col id=\"Column3\">7</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">strawberry</Col><Col id=\"Column3\">8</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">banana</Col><Col id=\"Column3\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSample00", this);
            obj.set_keystring("G:Column0");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">red</Col><Col id=\"Column3\">1</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">yellow</Col><Col id=\"Column3\">2</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">blue</Col><Col id=\"Column3\">3</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">navy</Col><Col id=\"Column3\">4</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">lemon</Col><Col id=\"Column3\">5</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">orange</Col><Col id=\"Column3\">6</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">test</Col><Col id=\"Column3\">7</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">strawberry</Col><Col id=\"Column3\">8</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">banana</Col><Col id=\"Column3\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","10","140","1018","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"126","28","1","1",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("close");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","1","178","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("1) Validation Check");
            obj.set_cssclass("sta_WF_Title13");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","10","177","1018","269",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid #d4d4d4");
            this.addChild(obj.name, obj);

            obj = new Grid("grdVali","0","0",null,null,"0","120",null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_nodatatext("No Data");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"118\"/><Column size=\"80\"/><Column size=\"115\"/><Column size=\"137\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"필수,길이(5)\"/><Cell col=\"1\" text=\"주민등록번호\"/><Cell col=\"2\" colspan=\"2\" text=\"from ~ to\"/><Cell col=\"4\" text=\"최대값(10)\"/><Cell col=\"5\" text=\"소숫점2자리\"/><Cell col=\"6\" colspan=\"2\" text=\"비교\"/><Cell row=\"1\" text=\"ID\"/><Cell row=\"1\" col=\"1\" text=\"SSN\"/><Cell row=\"1\" col=\"2\" text=\"DATE_FROM\"/><Cell row=\"1\" col=\"3\" text=\"DATE_TO\"/><Cell row=\"1\" col=\"4\" text=\"MAX_NUM\"/><Cell row=\"1\" col=\"5\" text=\"DECIMAL\"/><Cell row=\"1\" col=\"6\" text=\"COMPARE_1\"/><Cell row=\"1\" col=\"7\" text=\"COMPARE_2\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" edittype=\"normal\" editautoselect=\"true\"/><Cell col=\"1\" text=\"bind:SSN\" edittype=\"normal\" editautoselect=\"true\"/><Cell col=\"2\" text=\"bind:DATE_FROM\" edittype=\"normal\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:DATE_TO\" edittype=\"normal\" editautoselect=\"true\"/><Cell col=\"4\" text=\"bind:MAX_NUM\" edittype=\"normal\" editautoselect=\"true\"/><Cell col=\"5\" text=\"bind:DECIMAL\" edittype=\"normal\" editautoselect=\"true\"/><Cell col=\"6\" text=\"bind:COMPARE_1\" edittype=\"normal\" editautoselect=\"true\"/><Cell col=\"7\" text=\"bind:COMPARE_2\" edittype=\"normal\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","516","157","100","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("필수(Edit)");
            obj.set_cssclass("sta_WF_LabelE");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt01","621","157","150","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static08","20","157","100","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("필수(날짜)");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("cal","125","157","150","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static30","21","192","100","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("최대값100");
            obj.set_cssclass("sta_WF_Label");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edtMax","126","192","150","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static29","517","192","100","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("최소값10");
            obj.set_cssclass("sta_WF_Label");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edtMin","622","192","150","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static20","21","227","100","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("최소길이3");
            obj.set_cssclass("sta_WF_Label");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edtLegthMin","126","227","150","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static54","517","227","100","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("범위(1~5)");
            obj.set_cssclass("sta_WF_Label");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edtRange","622","227","150","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","10","Div01:10",null,"30","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"126","28","1","1",null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("close");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","228","28",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("2) Grid Sum");
            obj.set_cssclass("sta_WF_Title13");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div03","10","496","1018","510",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","10","10",null,"30","10",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"126","28","1","1",null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("close");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","178","28",null,null,null,null,null,null,this.Div03.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("가) Suppress");
            obj.set_cssclass("sta_WF_Title13");
            this.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","10","47",null,"208","10",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #d4d4d4");
            this.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0",null,"206","0",null,null,null,null,null,this.Div03.form.Div01.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsSample");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:Column1\" suppress=\"2\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.Div03.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","10","Div01:10",null,"30","10",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"126","28","1","1",null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("close");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","178","28",null,null,null,null,null,null,this.Div03.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("나) 소계,합계");
            obj.set_cssclass("sta_WF_Title13");
            this.Div03.form.Div02.addChild(obj.name, obj);

            obj = new Div("Div03","10","Div02:10",null,"204","10",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #d4d4d4");
            this.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","0",null,"200","0",null,null,null,null,null,this.Div03.form.Div03.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsSample00");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"64\"/><Column size=\"153\"/><Column size=\"153\"/><Column size=\"153\"/><Column size=\"153\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"rowLevel\"/><Cell col=\"1\" text=\"Column0\"/><Cell col=\"2\" text=\"Column1\"/><Cell col=\"3\" text=\"Column2\"/><Cell col=\"4\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"expr:dataset.getRowLevel(currow)\"/><Cell col=\"1\" text=\"bind:Column0\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:Column1\" suppress=\"2\"/><Cell col=\"3\" text=\"expr:dataset.getRowLevel(currow) == 0 ? Column2 : &apos;소계&apos;\"/><Cell col=\"4\" text=\"bind:Column3\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"3\" text=\"합계\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&apos;Column3&apos;)\"/></Band></Format></Formats>");
            this.Div03.form.Div03.addChild(obj.name, obj);

            obj = new Static("sta02","10","0","281","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("아코디언 (Arrangement 방식)");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","10","50",null,"70","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("1. Design탭에서 상대적으로 적용하기 위해 기준이 되는 컴포넌트의 ID 를 설정한다.\r\n2. 숨길때 Div의 height를 0 으로 지정하고, 펼치때는 원래 Div의 height로 지정한다.");
            obj.set_cssclass("sta_WF_Description");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03.form.Div00.form
            obj = new Layout("default","",0,0,this.Div03.form.Div00.form,function(p){});
            this.Div03.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03.form.Div01.form
            obj = new Layout("default","",0,0,this.Div03.form.Div01.form,function(p){});
            this.Div03.form.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03.form.Div02.form
            obj = new Layout("default","",0,0,this.Div03.form.Div02.form,function(p){});
            this.Div03.form.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03.form.Div03.form
            obj = new Layout("default","",0,0,this.Div03.form.Div03.form,function(p){});
            this.Div03.form.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03.form
            obj = new Layout("default","",0,0,this.Div03.form,function(p){});
            this.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div01.form.edt01","value","dsList2","EDIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div01.form.cal","value","dsList2","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div01.form.edtMax","value","dsList2","MAX_NUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div01.form.edtMin","value","dsList2","MIN_NUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div01.form.edtLegthMin","value","dsList2","LENGTH_MIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div01.form.edtRange","value","dsList2","RANGE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleArrangement.xfdl", function() {
        /**
        *  Necacro EduPack
        *  @MenuPath    개발가이드 > 컴포넌트 연동 > 아코디언 (Arrangement 방식)
        *  @FileName 	SampleArrangement.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2022.05.01
        *  @Desction    아코디언 (Arrangement 방식)
        ************** 소스 수정 이력 ***********************************************
        *  date          	Modifier            Description
        *******************************************************************************
        *  2022.05.01     	Education 	        최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);

        	this.Div02_Button00_onclick(this.Div02.form.Button00,{});
        };

        this.Div00_Button00_onclick = function(obj,e)
        {
        	if(obj.text == "close")
        	{
        		this.Div01.setOffsetHeight(0); //사이즈 조절
        		obj.set_text("open");
        	}
        	else
        	{
        		this.Div01.setOffsetHeight(269);
        		obj.set_text("close");
        	}
        	this.resetScroll();
        };

        this.Div02_Button00_onclick = function(obj,e)
        {
        	if(obj.text == "close")
        	{
        		this.Div03.setOffsetHeight(0);
        		obj.set_text("open");
        	}
        	else
        	{
        		this.Div03.setOffsetHeight(510);
        		obj.set_text("close");
        	}
        	this.resetScroll();
        };

        this.Div03_Div00_Button00_onclick = function(obj,e)
        {
        	if(obj.text == "close")
        	{
        		this.Div03.form.Div01.setOffsetHeight(0);
        		obj.set_text("open");
        	}
        	else
        	{
        		this.Div03.form.Div01.setOffsetHeight(206);
        		obj.set_text("close");
        	}
        	this.Div03.form.resetScroll();
        };

        this.Div03_Div02_Button00_onclick = function(obj,e)
        {
        	if(obj.text == "close")
        	{
        		this.Div03.form.Div03.setOffsetHeight(0);
        		obj.set_text("open");
        	}
        	else
        	{
        		this.Div03.form.Div03.setOffsetHeight(200);
        		obj.set_text("close");
        	}
        	this.Div03.form.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
            this.Div02.form.Button00.addEventHandler("onclick",this.Div02_Button00_onclick,this);
            this.Div03.form.Div00.form.Button00.addEventHandler("onclick",this.Div03_Div00_Button00_onclick,this);
            this.Div03.form.Div02.form.Button00.addEventHandler("onclick",this.Div03_Div02_Button00_onclick,this);
            this.sta03.addEventHandler("onclick",this.sta03_onclick,this);
        };
        this.loadIncludeScript("SampleArrangement.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
