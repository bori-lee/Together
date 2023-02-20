(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("WebBrowser");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("web00","27","20","467","224",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","510","18","102","42",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("tobesoft");
            this.addChild(obj.name, obj);

            obj = new WebView("WebView00","32","260","468","184",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","510","320","110","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("btn01");
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
        this.registerScript("WebBrowser.xfdl", function() {

        this.btn00_onclick = function(obj,e)
        {
        	this.web00.set_url("https://www.tobesoft.com/Index.do");
        };

        this.btn01_onclick = function(obj,e)
        {
        	this.WebView00.set_url("https://www.tobesoft.com/Index.do");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
        };
        this.loadIncludeScript("WebBrowser.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
