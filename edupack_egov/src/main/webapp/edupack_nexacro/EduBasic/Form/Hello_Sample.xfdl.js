(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Hello");
            this.set_titletext("New Form");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn00","-170","30","144","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","79","120","150","66",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","284","123","140","65",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("btn02");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","270","49","181","61",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("btn03");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");
                p.set_scrolltype("none");

                p.btn00.set_taborder("0");
                p.btn00.set_text("btn00");
                p.btn00.move("-170","30","144","60",null,null);

                p.btn01.set_taborder("1");
                p.btn01.set_text("btn01");
                p.btn01.move("79","120","150","66",null,null);

                p.btn02.set_taborder("2");
                p.btn02.set_text("btn02");
                p.btn02.move("284","123","140","65",null,null);

                p.btn03.set_taborder("3");
                p.btn03.set_text("btn03");
                p.btn03.move("270","49","181","61",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,768,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Hello_Sample.xfdl","Lib::Lib_Comm.xjs");
        this.registerScript("Hello_Sample.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : C:\EduPack\workspace\edupack_egov\src\main\edupack_nexacro\EduBasic\Form\Hello_Sample.xfdl
        /* 작 성 일 자 : 2022/09/20
        /* 작  성   자 :
        /* 설       명 :
        /***********************************************************/

        this.executeIncludeScript("Lib::Lib_Comm.xjs"); /*include "Lib::Lib_Comm.xjs"*/

        this.Button00_onclick = function(obj,e)
        {
        	this.alert("Hello World");
        	trace("log Hello World");
        	if(e.altkey)
        	{
        		this.alert("true");
        	} else {
        		this.alert("false");
        	}
        };



        /********* 주요단축키 설명 ***********/
        /* 블럭이동 : Ctrl+]
        /* 블럭선택 : Ctrl+Shift+]
        /* 블럭주석 : Ctrl+/
        /* 주석해제 : Alt+/

        /* Options -> Environment->Script-> AutoComplete (Auto-insert-closing brace)
        /* Options -> Environment->Font and Color -> Source ->View Indent Guide
        /* Copy ID : Div 및 Tabpage의 Depth가 있는 컴포넌트 복사기능
        /****************************************/




        this.tab00_onchanged = function(obj,e)
        {
        	this.tab00.Tabpage1.form.btn00.set_text("투비소프트");
        	this.tab00.Tabpage1.form.btn00.set_text("안녕");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Hello_Sample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
