(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Base_Sub");
            this.set_titletext("Components Sub");
            if (Form == this.constructor)
            {
                this._setFormPosition(370,150);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static12","119","50","241","44",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","119","91","241","44",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","10","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Linked Form");
            obj.set_cssclass("sta_WF_Title13");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","10","50","110","44",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","125","57","186","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Nexacro");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","10","91","110","44",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Edit");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","125","98","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("Nexacro");
            obj.set_text("Nexacro");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",370,150,this,function(p){});
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

        };
        this.loadIncludeScript("Comp_Base_Sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
