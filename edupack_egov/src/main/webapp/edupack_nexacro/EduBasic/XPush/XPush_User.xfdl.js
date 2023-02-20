(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_User");
            this.set_titletext("TOPIC 참고사항");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("Grid00","10","11","780","359",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("gds_Topic");
            obj.set_treeinitstatus("expand,all");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"155\"/><Column size=\"80\"/><Column size=\"190\"/><Column size=\"103\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"GUBUN\"/><Cell col=\"1\" text=\"USER_ID\"/><Cell col=\"2\" text=\"TOPIC_ID\"/><Cell col=\"3\" text=\"TOPIC_NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:GUBUN\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LEVEL\" treecheck=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:USER_ID\"/><Cell col=\"2\" text=\"bind:TOPIC_ID\"/><Cell col=\"3\" text=\"bind:TOPIC_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","370","491","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Topic 작성시 참고사항");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","25","410","165","135",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("USER_ID(User01)\r\n->TOBEEDU01(사용자1)\r\n->A100100 (개발자교육)\r\n->A100 (교육서비스팀)\r\n->ALL (전체)");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("XPush_User.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("XPush_User.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
