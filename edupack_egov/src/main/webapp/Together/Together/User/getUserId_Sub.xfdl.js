(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("getUserId");
            this.set_titletext("아이디 찾기 조회");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(510,320);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divGetUserId","9","34","491","266",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","181","51","130","49",null,null,null,null,null,null,this.divGetUserId.form);
            obj.set_taborder("0");
            obj.set_text("고객님의 아이디는 ");
            this.divGetUserId.addChild(obj.name, obj);

            obj = new Edit("edtUserId","161","96","145","48",null,null,null,null,null,null,this.divGetUserId.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_background("white");
            obj.set_font("bold 12pt/normal \"Yu Gothic UI Semibold\"");
            obj.set_border("1px solid darkgray");
            this.divGetUserId.addChild(obj.name, obj);

            obj = new Static("Static00_00","321","86","130","49",null,null,null,null,null,null,this.divGetUserId.form);
            obj.set_taborder("2");
            obj.set_text("입니다");
            this.divGetUserId.addChild(obj.name, obj);

            obj = new Button("btnLogin","166","196","150","40",null,null,null,null,null,null,this.divGetUserId.form);
            obj.set_taborder("3");
            obj.set_text("로그인 하러가기");
            obj.set_background("#ff6128");
            obj.set_color("white");
            obj.set_font("15pt/normal \"휴먼모음T\"");
            this.divGetUserId.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGetUserId.form
            obj = new Layout("default","",0,0,this.divGetUserId.form,function(p){});
            this.divGetUserId.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",510,320,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divGetUserId.form.edtUserId","accessibilityaction","user","userId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("getUserId_Sub.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\tobesoft\Documents\TOBESOFT\Nexacro N\projects\Together\Together\User
        *	@FileName getUserId_Sub.xfdl
        *	@Creator 이수아
        *	@CreateDate 2022/11/02
        *	@Description 아이디 찾기 성공 시, 회원의 아이디를 보여주는 폼
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2022/11/02	이수아		최초 생성
        *
        *
        */

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/
        this.fvApp = nexacro.getApplication();
        this.fvObjApp = this.ufnGetApplication();


        /**************************************************************************
        * FORM EVENT 영역(onload, onclose)
        **************************************************************************/
        /**
        * @description 화면 화면이 load될 때 처리할 로직(필수)
        */

        this.getUserId_onload = function(obj,e)
        {
        	this.fVAbc = this.parent.param1;
        	this.Div00.form.edtUserId.set_value(this.fVAbc);
        };


        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/
        /**
        * @description 로그인하러가기 클릭
        */
        this.divGetUserId_btnLogin_onclick = function(obj,e)
        {
        	this.fvObjApp.gvMainFrame.set_formurl("Together::User/Login.xfdl");
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.getUserId_onload,this);
            this.divGetUserId.form.btnLogin.addEventHandler("onclick",this.divGetUserId_btnLogin_onclick,this);
        };
        this.loadIncludeScript("getUserId_Sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
