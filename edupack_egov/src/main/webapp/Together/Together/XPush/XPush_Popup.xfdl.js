(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("XPush_Popup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grd00","20","13","320","267",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMessage");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"TOPIC_ID\"/><Cell col=\"1\" text=\"TOPIC_TYPE\"/><Cell col=\"2\" text=\"CODE\"/><Cell col=\"3\" text=\"MSG\"/></Band><Band id=\"body\"><Cell text=\"bind:TOPIC_ID\"/><Cell col=\"1\" text=\"bind:TOPIC_TYPE\"/><Cell col=\"2\" text=\"bind:CODE\"/><Cell col=\"3\" text=\"bind:MSG\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("taLog","20","290","320","114",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,450,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","taLog","value","dsMessage","MSG");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("XPush_Popup.xfdl", function() {

        this.XPush_Popup_onload = function(obj,e)
        {
        	var objParamDs = this.parent.param1; // 부모에서 param1로 데이터를 가져와서
        	this.grd00.set_binddataset(objParamDs); // 그리드에 파람을 바인드해줌.
        };

        this.XPush_Popup_onclose = function(obj,e)
        {
        	this.closePopup();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.XPush_Popup_onload,this);
            this.addEventHandler("onclose",this.XPush_Popup_onclose,this);
        };
        this.loadIncludeScript("XPush_Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
