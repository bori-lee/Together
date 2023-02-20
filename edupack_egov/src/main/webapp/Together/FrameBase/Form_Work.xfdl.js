(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,830);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divTop","0","0",null,"120","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("antiquewhite");
            obj.set_url("Frame::Top.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"100","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("whitesmoke");
            obj.set_url("Frame::Bottom.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divBody","0","divTop:4","1280",null,null,"divBottom:10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_background("whitesmoke");
            obj.set_url("Frame::Main.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTop
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBody
            obj = new Layout("default","",0,0,this.divBody.form,function(p){});
            this.divBody.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,830,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame::Top.xfdl");
            this._addPreloadList("fdl","Frame::Bottom.xfdl");
            this._addPreloadList("fdl","Frame::Main.xfdl");
        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {

        this.fn_setUrl = function(sUrl)
        {
        	trace("sUrl==" + sUrl);
        	this.divBody.set_url(sUrl);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
