(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("getClassUser_Sub");
            this.set_titletext("메세지 알림");
            if (Form == this.constructor)
            {
                this._setFormPosition(630,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMsg", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"INT\" size=\"256\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","18","16","595","468",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("0px none ");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","192","17","210","53",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("메세지 알림");
            obj.set_textAlign("center");
            obj.set_font("18pt/normal \"휴먼모음T\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grdMsg","17","89","560","331",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsMsg");
            obj.set_border("0px none");
            obj.set_autofittype("col");
            obj.set_nodatatext("메세지가 존재하지 않습니다. ");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"177\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"82\"/><Column size=\"89\"/></Columns><Rows><Row size=\"27\"/><Row size=\"61\"/></Rows><Band id=\"body\"><Cell colspan=\"3\" border=\"1px solid darkgray, 0px none, 0px none, 1px solid darkgray\" borderRadius=\"20px 0px 0px\" text=\"bind:TITLE\" color=\"navy\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\"/><Cell col=\"3\" colspan=\"2\" text=\"bind:DATE\" displaytype=\"date\" edittype=\"date\" border=\"0px none\" borderRadius=\"0px 20px 0px 0px\" textAlign=\"right\"/><Cell row=\"1\" colspan=\"5\" text=\"bind:MSG\" border=\"0px none\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",630,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("getClassMsg_Sub.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\tobesoft\Documents\TOBESOFT\Nexacro N\projects\Together\Together\Class
        *	@FileName getClassMsg_Sub.xfdl
        *	@Creator 이수아
        *	@CreateDate 2022/11/20
        *	@Description 모임의 메세지들을 확인할 수 있는 폼
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2022/11/20		이수아		최초 생성
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

        this.getClassUser_Sub_onload = function(obj,e)
        {
        	this.ufnTransaction(
        		"getClassMsg"
        		,"getClassMsg.do"
        		,""
        		,"dsMsg=out_result"
        		,"paramUserId="+nexacro.wrapQuote(this.fvObjApp.gdsUser.getColumn(0, "userId"))
        		,"fnCallback")
        };


        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/
        /**
        * @description 메세지 콜백
        */

        this.fnCallback = function(trId, errCd, errMsg)
        {
        	if(trId == "getClassMsg"){

        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.getClassUser_Sub_onload,this);
        };
        this.loadIncludeScript("getClassMsg_Sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
