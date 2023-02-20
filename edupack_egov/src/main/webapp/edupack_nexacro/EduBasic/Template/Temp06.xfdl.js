(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp03");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_gender", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">E</Col><Col id=\"NAME\">전체</Col></Row><Row><Col id=\"CODE\">M</Col><Col id=\"NAME\">남자</Col></Row><Row><Col id=\"CODE\">F</Col><Col id=\"NAME\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_CHK\" type=\"STRING\" size=\"1\"/><Column id=\"법인코드\" type=\"STRING\" size=\"10\"/><Column id=\"법인명\" type=\"STRING\" size=\"10\"/><Column id=\"법인대표자\" type=\"STRING\" size=\"50\"/><Column id=\"사원수\" type=\"STRING\" size=\"10\"/><Column id=\"부서\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"법인코드\">KR</Col><Col id=\"법인명\">Korea Corp.</Col><Col id=\"법인대표자\">홍길동</Col><Col id=\"사원수\">265</Col><Col id=\"부서\">KR10</Col><Col id=\"COL_CHK\">CN</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"법인코드\">KR</Col><Col id=\"법인명\">Korea Corp.</Col><Col id=\"법인대표자\">홍길동</Col><Col id=\"사원수\">265</Col><Col id=\"부서\">KR30</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"법인코드\">KR</Col><Col id=\"법인명\">Korea Corp.</Col><Col id=\"법인대표자\">홍길동</Col><Col id=\"사원수\">265</Col><Col id=\"부서\">KR20</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"법인코드\">JP</Col><Col id=\"법인명\">Japan Corp.</Col><Col id=\"법인대표자\">일본이름</Col><Col id=\"사원수\">25</Col><Col id=\"부서\">JP10</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"법인코드\">JP</Col><Col id=\"법인명\">Japan Corp.</Col><Col id=\"법인대표자\">일본이름</Col><Col id=\"사원수\">25</Col><Col id=\"부서\">JP20</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"법인코드\">JP</Col><Col id=\"법인명\">Japan Corp.</Col><Col id=\"법인대표자\">일본이름</Col><Col id=\"사원수\">25</Col><Col id=\"부서\">JP30</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"법인코드\">CN</Col><Col id=\"법인명\">China Corp.</Col><Col id=\"법인대표자\">중국이름</Col><Col id=\"사원수\">600</Col><Col id=\"부서\">CN10</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"법인코드\">CN</Col><Col id=\"법인명\">China Corp.</Col><Col id=\"법인대표자\">중국이름</Col><Col id=\"사원수\">600</Col><Col id=\"부서\">CN20</Col></Row><Row><Col id=\"COL_CHK\">0</Col><Col id=\"법인코드\">CN</Col><Col id=\"법인명\">China Corp.</Col><Col id=\"법인대표자\">중국이름</Col><Col id=\"사원수\">600</Col><Col id=\"부서\">CN30</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","10","650",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","250","0","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("h40");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","0","118","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("MasterDetail");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","5","47","110","43",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Grid Master");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","469","640","120","10",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h10");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_02","250","40","120","43",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h43");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","23","83","547","557",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","83","545","260",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"84\"/><Column size=\"91\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"COL_CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"법인코드\"/><Cell col=\"2\" text=\"법인명\"/><Cell col=\"3\" text=\"법인대표자\"/><Cell col=\"4\" text=\"사원수\"/><Cell col=\"5\" text=\"부서\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_CHK\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:법인코드\" suppress=\"1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:법인명\" suppress=\"1\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:법인대표자\" suppress=\"1\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:사원수\" suppress=\"1\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:부서\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","555","0","10","300",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00","565","40","110","43",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Grid Master");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","410","50","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","485","50","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
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
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
            this.sta01.addEventHandler("onclick",this.sta01_onclick,this);
            this.sta01_00.addEventHandler("onclick",this.sta01_onclick,this);
        };
        this.loadIncludeScript("Temp06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
