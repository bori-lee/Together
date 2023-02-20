(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Bottom");
            this.set_titletext("New Form");
            this.set_background("white");
            this.set_border("1px solid whitesmoke, 0px none, 0px none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,60);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMessage", this);
            obj._setContents("<ColumnInfo><Column id=\"TOPIC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPIC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","0","230","53",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("고객문의 : help@together.co.kr");
            obj.set_font("10pt/normal \"맑은고딕\",\"맑은 고딕\"");
            obj.set_color("gray");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00",null,"0","180","53","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("사업자번호 : 219 - 86941328");
            obj.set_font("10pt/normal \"맑은고딕\",\"맑은 고딕\"");
            obj.set_color("gray");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00",null,"0","140","53","Static00_00_00:15",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("대표이사 : 이수아");
            obj.set_font("10pt/normal \"맑은고딕\",\"맑은 고딕\"");
            obj.set_color("gray");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,60,this,function(p){});
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
            this.addEventHandler("onload",this.Bottom_onload,this);
            this.Static00_00_00.addEventHandler("onclick",this.Static00_00_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_00_onclick,this);
        };
        this.loadIncludeScript("Bottom.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
