(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleButton");
            this.set_titletext("Slide & Toggle Button");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_01","510","332","188","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("2) Toggle Button");
            obj.set_cssclass("sta_WF_Title13");
            this.addChild(obj.name, obj);

            obj = new Div("divToggle","520","372","76","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_url("Cmm::CmmToggle.xfdl");
            obj.getSetter("callbackfunc").set("divToggle_onitemchanged");
            obj.getSetter("onText").set("On");
            obj.getSetter("offText").set("Off");
            this.addChild(obj.name, obj);

            obj = new Button("btnGet","520","455","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new Button("btnSet","625","455","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new Div("divSlide","10","372","400","140",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_url("Cmm::CmmSlide.xfdl");
            obj.getSetter("max").set("99");
            obj.getSetter("lable").set("년");
            obj.getSetter("callbackfunc").set("divSlide_onvaluechanged");
            obj.getSetter("callbackfunc2").set("divSlide_onvaluechange");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetSilde","17","540","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetSilde","122","540","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new Edit("edtValue","227","540","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("50");
            obj.set_inputtype("digit");
            obj.set_text("50");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","10","50",null,"242","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("1. Slide Button 사용방법(Default)\r\r\n  1) div를 추가한다.(width:400 X height:130 )\r\r\n  2) div에 url 속성에 \"Cmm::CmmSlide.xfdl\"  를 적용한다.\r\r\n  3) div에 User Property를 추가한다.\r\r\n    - label: 값의 단위\r\n    - max: slide max 값\r\n\r\n2. Toggle Button 사용방법(Default)\r\r\n  1) div를 추가한다.(width:135 X height:50 )\r\r\n  2) div에 url 속성에 \"Cmm::CmmToggle.xfdl\"  를 적용한다.");
            obj.set_cssclass("sta_WF_Description");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","332","188","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("1) Slide");
            obj.set_cssclass("sta_WF_Title13");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk00","750","372","85","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("chk_WF_Toggle");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","10","0","221","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Slide & Toggle Button");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divToggle
            obj = new Layout("default","",0,0,this.divToggle.form,function(p){});
            this.divToggle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSlide
            obj = new Layout("default","",0,0,this.divSlide.form,function(p){});
            this.divSlide.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Cmm::CmmToggle.xfdl");
            this._addPreloadList("fdl","Cmm::CmmSlide.xfdl");
        };
        
        // User Script
        this.registerScript("SampleButton.xfdl", function() {
        /**
        *  Necacro EduPack
        *  @MenuPath    개발가이드 > 컴포넌트 연동 > Slide & Toggle Button
        *  @FileName 	SampleButton.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2022.05.01
        *  @Desction    Slide & Toggle Buttonn
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022.05.01     	Education	        최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.Form_onload = function(obj,e)
        {
            this.gfnFormOnLoad(obj);
        };

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        this.divToggle_onitemchanged = function(obj, value)
        {
        	trace(obj + " , "+ value);
        };

        this.divSlide_onvaluechange = function(obj, value)
        {
        	trace("divSlide_onvaluechange "+ obj + " , "+ value);
        };

        this.divSlide_onvaluechanged = function(obj, value)
        {
        	trace("divSlide_onvaluechanged "+ obj + " , "+ value);
        };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        this.btnGet_onclick = function(obj,e)
        {
        	alert(this.divToggle.form.getValue());
        };

        this.btnSet_onclick = function(obj,e)
        {
        	this.divToggle.form.setValue(!this.divToggle.form.getValue());
        };

        this.btnGetSilde_onclick = function(obj,e)
        {
        	alert(this.divSlide.form.getValue());
        };

        this.btnSetSilde_onclick = function(obj,e)
        {
        	this.divSlide.form.setValue(this.edtValue.value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_ontimer,this);
            this.btnGet.addEventHandler("onclick",this.btnGet_onclick,this);
            this.btnSet.addEventHandler("onclick",this.btnSet_onclick,this);
            this.btnGetSilde.addEventHandler("onclick",this.btnGetSilde_onclick,this);
            this.btnSetSilde.addEventHandler("onclick",this.btnSetSilde_onclick,this);
        };
        this.loadIncludeScript("SampleButton.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
