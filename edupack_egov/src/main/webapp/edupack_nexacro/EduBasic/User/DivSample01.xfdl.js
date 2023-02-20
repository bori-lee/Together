(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DivSample01");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div00","36","37","416","207",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_background("aquamarine");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","18","19","158","61",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn01","24","99","157","48",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("btn01");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn02","26","167","160","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("btn02");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div01","546","50","308","206",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div01");
            obj.set_url("Cmm::CmmAlert.xfdl");
            this.addChild(obj.name, obj);

            obj = new Tab("tab00","44","370","381","248",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab00);
            obj.set_text("Tabpage1");
            this.tab00.addChild(obj.name, obj);

            obj = new Button("btn00","44","24","179","72",null,null,null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo00","57","119","178","57",null,null,null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("cbo00");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","275","21","68","83",null,null,null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_taborder("2");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab00);
            obj.set_text("Tabpage2");
            this.tab00.addChild(obj.name, obj);

            obj = new Button("btn00","15","8","162","68",null,null,null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt00","21","99","163","39",null,null,null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_taborder("1");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Tab("tab01","523","389","315","223",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            obj.set_preload("false");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab01);
            obj.set_text("Tabpage1");
            obj.set_url("Cmm::CmmAlert.xfdl");
            this.tab01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab01);
            obj.set_text("Tabpage2");
            obj.set_url("EduBasic::Comp/Comp_Dataset.xfdl");
            this.tab01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01
            obj = new Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.tab00.Tabpage1.form,function(p){});
            this.tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage2.form
            obj = new Layout("default","",0,0,this.tab00.Tabpage2.form,function(p){});
            this.tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab01.Tabpage1
            obj = new Layout("default","",0,0,this.tab01.Tabpage1.form,function(p){});
            this.tab01.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab01.Tabpage2
            obj = new Layout("default","",0,0,this.tab01.Tabpage2.form,function(p){});
            this.tab01.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Cmm::CmmAlert.xfdl");
            this._addPreloadList("fdl","EduBasic::Comp/Comp_Dataset.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("DivSample01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
