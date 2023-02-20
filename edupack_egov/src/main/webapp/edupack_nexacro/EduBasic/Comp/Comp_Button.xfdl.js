(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Button");
            this.set_titletext("Component-Button");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","20","70","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","40","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text(" Basic Usage");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","220","276","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text(" Expression (Prop. expr)");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","20","250","248","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Dept Name");
            obj.set_expr("expr:\"Current time : \" + comp.parent.fn_getTime()");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","175","70","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button disable");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","130","376","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text(" Image & Icon (Prop. icon / background)");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","300","306","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text(" Status (Method setSelectStatus)");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sun","20","330","40","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Sun");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mon","65","330","40","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Mon");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tue","110","330","40","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Tue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_wed","155","330","40","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Wed");
            this.addChild(obj.name, obj);

            obj = new Button("btn_thu","200","330","40","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Thu");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fri","245","330","40","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Fri");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sat","290","330","40","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Sat");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","20","160","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Retrieve");
            obj.set_cssclass("btn_WF_RetieveIcon");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","135","160","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("AddRow");
            obj.set_cssclass("btn_WF_InsertIcon");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","250","160","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Delete");
            obj.set_cssclass("btn_WF_DeleteIcon");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","365","160","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Save");
            obj.set_cssclass("btn_WF_SaveIcon");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","480","160","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("btn_WF_PrintIcon");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","515","160","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_SettingIcon");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","10","0","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Button");
            obj.set_cssclass("sta_WF_FrmTitle");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("Comp_Button.xfdl", function() {
        this.fn_getTime = function()
        {
        	var objDate = new Date();
        	var sTime  = objDate.getHours().toString().padLeft(2, "0")   + ":";
        		sTime += objDate.getMinutes().toString().padLeft(2, "0") + ":";
        		sTime += objDate.getSeconds().toString().padLeft(2, "0");

        	return sTime;
        }

        this.fn_status = function(obj,e)
        {
        	var bStatus = obj.getSelectStatus();
        	if(bStatus){
        		obj.setSelectStatus(false);
        	}
        	else{
        		obj.setSelectStatus(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button06.addEventHandler("onclick",this.Button06_onclick,this);
            this.btn_sun.addEventHandler("onclick",this.fn_status,this);
            this.btn_mon.addEventHandler("onclick",this.fn_status,this);
            this.btn_tue.addEventHandler("onclick",this.fn_status,this);
            this.btn_wed.addEventHandler("onclick",this.fn_status,this);
            this.btn_thu.addEventHandler("onclick",this.fn_status,this);
            this.btn_fri.addEventHandler("onclick",this.fn_status,this);
            this.btn_sat.addEventHandler("onclick",this.fn_status,this);
        };
        this.loadIncludeScript("Comp_Button.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
