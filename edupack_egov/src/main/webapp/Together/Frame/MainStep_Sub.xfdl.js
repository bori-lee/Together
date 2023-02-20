(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleStep");
            this.set_titletext("스텝");
            this.set_stepshowtype("always");
            if (Form == this.constructor)
            {
                this._setFormPosition(960,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staBanner0","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("url(\'theme://images/sta_Main.Banner1_1.png\') no-repeat center center #192d28");
            this.addChild(obj.name, obj);

            obj = new Static("staBanner1","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_positionstep("1");
            obj.set_text("");
            obj.set_background("url(\'theme://images/sta_Main.Banner3.png\') no-repeat center center #df5745");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","10","10","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_positionstep("1");
            obj.set_cssclass("btn_WF_ShuttleL");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","10","10","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_ShuttleR");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","10","10","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_positionstep("2");
            obj.set_cssclass("btn_WF_ShuttleL");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","42","10","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_positionstep("1");
            obj.set_cssclass("btn_WF_ShuttleR");
            obj.set_background("#ffffff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",960,400,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("MainStep_Sub.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\tobesoft\Documents\TOBESOFT\Nexacro N\projects\Together\Frame
        *	@FileName MainStep_Sub.xfdl
        *	@Creator 이수아
        *	@CreateDate 2022/11/15
        *	@Description 해당 폼 정보 설명
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2022/11/15		이수아		최초 생성
        *
        *
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvStep = 0;
        this.elapseTime = 2000;

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.stepselector.set_visible(false);
        	this.set_stepshowtype("action");

        	this.setTimer(0, this.elapseTime);
        };

        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/
        /**
        * @description 메인 배너 시간 처리
        */
        this.SampleStep_ontimer = function(obj,e)
        {
        	if (e.timerid == 0)
        	{
        		if (this.fvStep == 2) {
        			this.fvStep = 0;
        			this.stepselector.set_stepindex(0);
        		}
        		else {
        			this.stepselector.set_stepindex(++this.fvStep);
        		}
        	}
        };

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/
        /**
        * @description 앞으로가기 버튼 클릭 시
        */
        this.btnPre_onclick = function(obj,e)
        {
        	this.killTimer(0);
        	this.stepselector.set_stepindex(--this.fvStep);
        };

        /**
        * @description 뒤로 가기 버튼 클릭 시
        */
        this.btnNext_onclick = function(obj,e)
        {
        	this.killTimer(0);
        	this.stepselector.set_stepindex(++this.fvStep);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onstepchanged",this.SampleStep_onstepchanged,this);
            this.addEventHandler("ontimer",this.SampleStep_ontimer,this);
            this.staBanner0.addEventHandler("onclick",this.staBanner0_onclick,this);
            this.staBanner1.addEventHandler("onclick",this.staSupport_onclick,this);
            this.btn02.addEventHandler("onclick",this.btnPre_onclick,this);
            this.btn03.addEventHandler("onclick",this.btnNext_onclick,this);
            this.btn04.addEventHandler("onclick",this.btnPre_onclick,this);
            this.btn01.addEventHandler("onclick",this.btnNext_onclick,this);
        };
        this.loadIncludeScript("MainStep_Sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
