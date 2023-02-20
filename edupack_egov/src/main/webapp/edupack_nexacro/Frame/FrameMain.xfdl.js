(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameMain");
            this.set_titletext("frameMain");
            if (Form == this.constructor)
            {
                this._setFormPosition(1055,770);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_Main_Bg");
            obj.set_visible("true");
            obj.set_background("linear-gradient(to right bottom,#5183e5,#143a84)");
            this.addChild(obj.name, obj);

            obj = new Static("st_center","0","0","50%","50%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("sta02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","st_center:-399.5","st_center:-140","805","240",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_Main_Center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divNotice",null,null,"200","150","3","2",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none");
            obj.set_cssclass("div_WF_Notice");
            this.addChild(obj.name, obj);

            obj = new Static("staNotice","15","30",null,null,"15","15",null,null,null,null,this.divNotice.form);
            obj.set_taborder("0");
            obj.set_textAlign("left");
            obj.set_verticalAlign("top");
            this.divNotice.addChild(obj.name, obj);

            obj = new Button("btnClose","175","7","15","15",null,null,null,null,null,null,this.divNotice.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_LOGIN_Close");
            this.divNotice.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divNotice.form
            obj = new Layout("default","",0,0,this.divNotice.form,function(p){});
            this.divNotice.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1055,770,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FrameMain.xfdl", function() {
        /**
        *  개발자 양성 과정
        *  @MenuPath    Frame > FrameMain
        *  @FileName 	FrameMain.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2022.06.02
        *  @Desction


        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.objApp = this.gfnGetApplication();
        this.objArgs;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        /**
         * @description form onload 함수
         */
        this.form_onload = function(obj,e)
        {
        	this.form_onsize();

        	// 알림창 숨기기
        	this.divNotice.set_height(0);
        };

        /**
         * @description form onactivate event
         */
        this.form_onactivate = function(obj,e)
        {
        	// 알림창 동기화
        	this.objApp.gvBottomFrame.form.fnInitNoticeShow(this);
        };

        /**
         * @description workFrame_onclose event
         */
        this.form_onclose = function(obj, e)
        {
        }

        /**
         * @description onsize event
         */
        this.form_onsize = function(obj, e)
        {
        	this.resetScroll();
        }


        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * @description 알림닫기 이벤트
        */
        this.divNotice_btnClose_onclick = function(obj,e)
        {
        	// 알림창 동기화
        	this.objApp.gvBottomFrame.form.fnSetNoticeShow(this, false, true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onactivate",this.form_onactivate,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.divNotice.form.btnClose.addEventHandler("onclick",this.divNotice_btnClose_onclick,this);
        };
        this.loadIncludeScript("FrameMain.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
