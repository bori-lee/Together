(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Debug");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn00","48","16","89","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("alert");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","50","100","108","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("trace");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","56","160","112","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("column 0 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","68","228","128","77",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("console");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Debug.xfdl", function() {

        this.btn00_onclick = function(obj,e)
        {
        	var sName = "TOBESOFT";
        	var sName2 = "TOBESOFT2";
        	alert(sName);
        };

        this.btn01_onclick = function(obj,e)
        {
        	var sName = "TOBESOFT";
        	for(var i=0; i<10; i++)
        	{
        		trace(sName);
        	}
        };

        this.ds00_cancolumnchange = function(obj,e)
        {
        	trace("cancolumnchange");

        };

        this.ds00_oncolumnchanged = function(obj,e)
        {
        	trace("oncolumnchanged");
        };

        this.btn02_onclick = function(obj,e)
        {
        	this.ds00.setColumn(0, "Column0", "mod");
        	this.ds00.setColumn(1, "Column0", "mod");
        };

        this.btn03_onclick = function(obj,e)
        {
        	console.log("test");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.ds00.addEventHandler("cancolumnchange",this.ds00_cancolumnchange,this);
            this.ds00.addEventHandler("oncolumnchanged",this.ds00_oncolumnchanged,this);
        };
        this.loadIncludeScript("Debug.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
