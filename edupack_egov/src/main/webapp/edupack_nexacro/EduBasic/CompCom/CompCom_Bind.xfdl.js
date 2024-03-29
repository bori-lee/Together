(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CompCom_Bind");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pos", this);
            obj._setContents("<ColumnInfo><Column id=\"POS_CD\" type=\"string\" size=\"32\"/><Column id=\"POS_NAME\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"POS_CD\">04</Col><Col id=\"POS_NAME\">Officer</Col></Row><Row><Col id=\"POS_CD\">03</Col><Col id=\"POS_NAME\">Assistant Manager</Col></Row><Row><Col id=\"POS_CD\">02</Col><Col id=\"POS_NAME\">Division Manager</Col></Row><Row><Col id=\"POS_CD\">01</Col><Col id=\"POS_NAME\">Chairman</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/><Column id=\"IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PERCENT\" type=\"INT\" size=\"256\"/><Column id=\"COLOR\" type=\"STRING\" size=\"256\"/><Column id=\"FONT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"IMAGE\">imagerc::img_na_korea.png</Col><Col id=\"PERCENT\">20</Col><Col id=\"COLOR\">ivory</Col><Col id=\"FONT\">normal 20px/normal &quot;Verdana&quot;,&quot;Arial&quot;,&quot;sans-serif&quot;</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">AA002</Col><Col id=\"IMAGE\">imagerc::img_na_canada.png</Col><Col id=\"PERCENT\">40</Col><Col id=\"COLOR\">greenyellow</Col><Col id=\"FONT\">normal 18px/normal &quot;Verdana&quot;,&quot;Arial&quot;,&quot;sans-serif&quot;</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">BB001</Col><Col id=\"IMAGE\">imagerc::img_na_china.png</Col><Col id=\"PERCENT\">60</Col><Col id=\"COLOR\">lightpink</Col><Col id=\"FONT\">normal 14px/normal &quot;Verdana&quot;,&quot;Arial&quot;,&quot;sans-serif&quot;</Col></Row><Row><Col id=\"FULL_NAME\">Maia</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">BB002</Col><Col id=\"IMAGE\">imagerc::img_na_usa.png</Col><Col id=\"PERCENT\">70</Col><Col id=\"COLOR\">aliceblue</Col><Col id=\"FONT\">normal 24px/normal &quot;Verdana&quot;,&quot;Arial&quot;,&quot;sans-serif&quot;</Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">CC001</Col><Col id=\"IMAGE\">imagerc::img_na_korea.png</Col><Col id=\"PERCENT\">100</Col><Col id=\"COLOR\">ivory</Col><Col id=\"FONT\">normal 12px/normal &quot;Verdana&quot;,&quot;Arial&quot;,&quot;sans-serif&quot;</Col></Row><Row><Col id=\"FULL_NAME\">Ray</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">DD001</Col><Col id=\"IMAGE\">imagerc::img_na_canada.png</Col><Col id=\"PERCENT\">90</Col><Col id=\"COLOR\">greenyellow</Col><Col id=\"FONT\">normal 20px/normal &quot;Verdana&quot;,&quot;Arial&quot;,&quot;sans-serif&quot;</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","10","70",null,"223","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_data");
            obj.set_enable("true");
            obj.set_positionstep("-1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NAME\"/><Cell col=\"1\" text=\"DEPT_CD\"/><Cell col=\"2\" text=\"ID\"/><Cell col=\"3\" text=\"HIRE_DATE\"/><Cell col=\"4\" text=\"SALARY\"/><Cell col=\"5\" text=\"GENDER\"/><Cell col=\"6\" text=\"MARRIED\"/><Cell col=\"7\" text=\"MEMO\"/><Cell col=\"8\" text=\"IMAGE\"/><Cell col=\"9\" text=\"PERCENT\"/><Cell col=\"10\" text=\"COLOR\"/><Cell col=\"11\" text=\"FONT\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\"/><Cell col=\"1\" text=\"bind:DEPT_CD\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:EMPL_ID\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\"/><Cell col=\"4\" text=\"bind:SALARY\"/><Cell col=\"5\" text=\"bind:GENDER\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:MARRIED\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:MEMO\"/><Cell col=\"8\" text=\"bind:IMAGE\"/><Cell col=\"9\" text=\"bind:PERCENT\"/><Cell col=\"10\" text=\"bind:COLOR\"/><Cell col=\"11\" text=\"bind:FONT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","40","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text(" Full Bind - Grid");
            obj.set_cssclass("sta_WF_TypeTitle");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","30","384","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","213","417","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","30","417","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_format("AA-###");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","30","450","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_format("#,###");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","213","483","170","58",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","423","384","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","213","384","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">Male</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">Female</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","30","516","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("CheckBox00");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","213","450","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","30","483","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","715","384","170","70",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_stretch("fixaspectratio");
            obj.set_border("1px solid #9c9c9c");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00","423","503","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_min("0");
            obj.set_max("100");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","318","290","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text(" Property Bind - Components");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","715","503","190","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Button00");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","169","606","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","785","606","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_positionstep("0");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02","477","606","170","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_format("AA-###");
            obj.set_type("string");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","30","606","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Edit");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","338","606","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("MaskEdit");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","646","606","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Combo");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bind","290","573","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Script Bind");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","20","351","230","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Property Bind - value속성");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","413","351","190","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Property Bind - text속성");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","705","473","290","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Property Bind - text, background, font 속성");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","413","473","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Property Bind - pos속성(ProgressBar)");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","705","351","270","28",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Property Bind - image속성(Imageviewer)");
            obj.set_cssclass("sta_WF_LabelTxt12");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","10","573","280","28",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text(" Property Bind - 스크립트로 Bind 처리");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","10","0","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Bind");
            obj.set_cssclass("sta_WF_FrmTitle");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","ds_data","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Button00","text","ds_data","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Combo00","value","ds_data","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","MaskEdit00","value","ds_data","EMPL_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","MaskEdit01","value","ds_data","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","TextArea00","value","ds_data","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Static00","text","ds_data","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Radio00","value","ds_data","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","CheckBox00","value","ds_data","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Spin00","value","ds_data","PERCENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Calendar00","value","ds_data","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","ImageViewer00","image","ds_data","IMAGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","ProgressBar00","pos","ds_data","PERCENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Button00","background","ds_data","COLOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Button00","font","ds_data","FONT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CompCom_Bind.xfdl", function() {


        this.btn_bind_onclick = function(obj,e)
        {
        	var objBindItem = new BindItem();
        	objBindItem.init("item00", "Edit01", "value", "ds_data", "FULL_NAME");
        	this.addChild("item00", objBindItem);
        	objBindItem.bind();

        	objBindItem = new BindItem();
        	objBindItem.init("item01", "Combo01", "value", "ds_data", "DEPT_CD");
        	this.addChild("item01", objBindItem);
        	objBindItem.bind();

        	objBindItem = new BindItem();
        	objBindItem.init("item02", "MaskEdit02", "value", "ds_data", "EMPL_ID");
        	this.addChild("item02", objBindItem);
        	objBindItem.bind();

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.btn_bind.addEventHandler("onclick",this.btn_bind_onclick,this);
            this.ds_data.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_data.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_data.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
        };
        this.loadIncludeScript("CompCom_Bind.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
