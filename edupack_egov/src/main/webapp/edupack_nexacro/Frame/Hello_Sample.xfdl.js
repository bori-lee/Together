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
            obj = new Button("Button00","60","77","250","73",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Hello World");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","66","-133","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Desktop Screen");
            obj.set_font("normal bold 14px \"Arial\"");
            obj.set_color("red");
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

                p.Button00.set_taborder("0");
                p.Button00.set_text("Hello World");
                p.Button00.move("60","77","250","73",null,null);

                p.Static00.set_taborder("1");
                p.Static00.set_text("Desktop Screen");
                p.Static00.set_font("normal bold 14px \"Arial\"");
                p.Static00.set_color("red");
                p.Static00.move("66","-133","240","30",null,null);
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
                p.Static00.set_text("Phone Screen");
                p.Static00.move("176","77","120","30",null,null);

                p.Button00.move("170","107","130","73",null,null);
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
        /* 프 로 그 램 : Hello_Sample.xfldl
        /* 작 성 일 자 : 2020.04.01
        /* 작  성   자 : 홍 길 동
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





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Hello_Sample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
