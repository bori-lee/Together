(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Login");
            this.set_titletext("아이디/비밀번호 찾기");
            this.set_background("whitesmoke");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("user", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"50\"/><Column id=\"pwd\" type=\"STRING\" size=\"20\"/><Column id=\"nick\" type=\"STRING\" size=\"20\"/><Column id=\"birth\" type=\"STRING\" size=\"20\"/><Column id=\"profileImg\" type=\"STRING\" size=\"200\"/><Column id=\"intro\" type=\"STRING\" size=\"300\"/><Column id=\"phone\" type=\"STRING\" size=\"15\"/><Column id=\"locationNo\" type=\"INT\" size=\"5\"/><Column id=\"regDate\" type=\"STRING\" size=\"8\"/></ColumnInfo><Rows><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","0","12","50.00%","131",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Static00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","Static00_00:-196","60","393","102",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("아이디/비밀번호 찾기");
            obj.set_textAlign("center");
            obj.set_font("23pt/normal \"휴먼모음T\"");
            this.addChild(obj.name, obj);

            obj = new Tab("tabGetUserIdPwd","Static00_00:-425","183","850","386",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabGetUserId",this.tabGetUserIdPwd);
            obj.set_text("아이디 찾기");
            this.tabGetUserIdPwd.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","259","89","70","33",null,null,null,null,null,null,this.tabGetUserIdPwd.tabGetUserId.form);
            obj.set_taborder("0");
            obj.set_text("휴대폰");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.tabGetUserIdPwd.tabGetUserId.addChild(obj.name, obj);

            obj = new Edit("edtPhone","356","85","185","37",null,null,null,null,null,null,this.tabGetUserIdPwd.tabGetUserId.form);
            obj.set_taborder("1");
            obj.set_value("예)01080077545");
            obj.set_maxlength("11");
            obj.set_text("예)01080077545");
            this.tabGetUserIdPwd.tabGetUserId.addChild(obj.name, obj);

            obj = new Button("btnGetUserId","356","263","158","43",null,null,null,null,null,null,this.tabGetUserIdPwd.tabGetUserId.form);
            obj.set_taborder("2");
            obj.set_text("아이디 찾기");
            obj.set_font("15pt/normal \"휴먼모음T\"");
            obj.set_color("white");
            obj.set_background("#ff6128");
            this.tabGetUserIdPwd.tabGetUserId.addChild(obj.name, obj);

            obj = new Edit("edtIdKey","356","135","185","37",null,null,null,null,null,null,this.tabGetUserIdPwd.tabGetUserId.form);
            obj.set_taborder("3");
            this.tabGetUserIdPwd.tabGetUserId.addChild(obj.name, obj);

            obj = new Static("Static00","356","179","242","28",null,null,null,null,null,null,this.tabGetUserIdPwd.tabGetUserId.form);
            obj.set_taborder("4");
            obj.set_text("* 휴대폰 번호 입력 후 인증을 해주세요");
            this.tabGetUserIdPwd.tabGetUserId.addChild(obj.name, obj);

            obj = new Button("btnPhoneCertify","551","84","45","39",null,null,null,null,null,null,this.tabGetUserIdPwd.tabGetUserId.form);
            obj.set_taborder("5");
            obj.set_text("인증");
            obj.set_background("white");
            obj.set_border("1px solid coral");
            obj.set_color("#ff6128");
            this.tabGetUserIdPwd.tabGetUserId.addChild(obj.name, obj);

            obj = new Button("btnPhoneConfirm","551","135","45","39",null,null,null,null,null,null,this.tabGetUserIdPwd.tabGetUserId.form);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_background("white");
            obj.set_border("1px solid coral");
            obj.set_color("#ff6128");
            this.tabGetUserIdPwd.tabGetUserId.addChild(obj.name, obj);

            obj = new Tabpage("tabGetUserPwd",this.tabGetUserIdPwd);
            obj.set_text("비밀번호 찾기");
            this.tabGetUserIdPwd.addChild(obj.name, obj);

            obj = new Edit("edtPhone","312","-61","185","37",null,null,null,null,null,null,this.tabGetUserIdPwd.tabGetUserPwd.form);
            obj.set_taborder("0");
            obj.set_value("예)01080077545");
            obj.set_text("예)01080077545");
            this.tabGetUserIdPwd.tabGetUserPwd.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","182","-59","126","33",null,null,null,null,null,null,this.tabGetUserIdPwd.tabGetUserPwd.form);
            obj.set_taborder("1");
            obj.set_text("휴대폰번호");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.tabGetUserIdPwd.tabGetUserPwd.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","220","67","126","33",null,null,null,null,null,null,this.tabGetUserIdPwd.tabGetUserPwd.form);
            obj.set_taborder("2");
            obj.set_text("아이디");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.tabGetUserIdPwd.tabGetUserPwd.addChild(obj.name, obj);

            obj = new Edit("edtUserId","350","69","185","37",null,null,null,null,null,null,this.tabGetUserIdPwd.tabGetUserPwd.form);
            obj.set_taborder("3");
            this.tabGetUserIdPwd.tabGetUserPwd.addChild(obj.name, obj);

            obj = new Button("btnGetUserPwd","350","279","158","43",null,null,null,null,null,null,this.tabGetUserIdPwd.tabGetUserPwd.form);
            obj.set_taborder("4");
            obj.set_text("비밀번호 찾기");
            obj.set_background("#ff6128");
            obj.set_color("white");
            obj.set_font("15pt/normal \"휴먼모음T\"");
            this.tabGetUserIdPwd.tabGetUserPwd.addChild(obj.name, obj);

            obj = new Edit("edtPhone00","350","125","185","37",null,null,null,null,null,null,this.tabGetUserIdPwd.tabGetUserPwd.form);
            obj.set_taborder("5");
            obj.set_value("예)01080077545");
            obj.set_maxlength("12");
            obj.set_text("예)01080077545");
            this.tabGetUserIdPwd.tabGetUserPwd.addChild(obj.name, obj);

            obj = new Edit("edtPwdKey","350","175","185","37",null,null,null,null,null,null,this.tabGetUserIdPwd.tabGetUserPwd.form);
            obj.set_taborder("6");
            this.tabGetUserIdPwd.tabGetUserPwd.addChild(obj.name, obj);

            obj = new Button("btnPhoneCertify","547","124","45","39",null,null,null,null,null,null,this.tabGetUserIdPwd.tabGetUserPwd.form);
            obj.set_taborder("7");
            obj.set_text("인증");
            obj.set_background("white");
            obj.set_border("1px solid coral");
            obj.set_color("#ff6128");
            this.tabGetUserIdPwd.tabGetUserPwd.addChild(obj.name, obj);

            obj = new Static("Static00","350","219","242","28",null,null,null,null,null,null,this.tabGetUserIdPwd.tabGetUserPwd.form);
            obj.set_taborder("8");
            obj.set_text("* 휴대폰 번호 입력 후 인증을 해주세요");
            this.tabGetUserIdPwd.tabGetUserPwd.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_01","220","127","126","33",null,null,null,null,null,null,this.tabGetUserIdPwd.tabGetUserPwd.form);
            obj.set_taborder("9");
            obj.set_text("휴대폰");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.tabGetUserIdPwd.tabGetUserPwd.addChild(obj.name, obj);

            obj = new Button("btnPhoneConfirm","547","175","45","39",null,null,null,null,null,null,this.tabGetUserIdPwd.tabGetUserPwd.form);
            obj.set_taborder("10");
            obj.set_text("확인");
            obj.set_background("white");
            obj.set_border("1px solid coral");
            obj.set_color("#ff6128");
            this.tabGetUserIdPwd.tabGetUserPwd.addChild(obj.name, obj);

            obj = new Div("divbottom","0","700",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_border("0px none");
            obj.set_url("Frame::Bottom.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tabGetUserIdPwd.tabGetUserId.form
            obj = new Layout("default","",0,0,this.tabGetUserIdPwd.tabGetUserId.form,function(p){});
            this.tabGetUserIdPwd.tabGetUserId.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabGetUserIdPwd.tabGetUserPwd.form
            obj = new Layout("default","",0,0,this.tabGetUserIdPwd.tabGetUserPwd.form,function(p){});
            this.tabGetUserIdPwd.tabGetUserPwd.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divbottom
            obj = new Layout("default","",0,0,this.divbottom.form,function(p){});
            this.divbottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,760,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tabGetUserIdPwd.tabGetUserId.form.edtPhone","value","user","phone");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tabGetUserIdPwd.tabGetUserPwd.form.edtUserId","value","user","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tabGetUserIdPwd.tabGetUserPwd.form.edtPhone","value","user","phone");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tabGetUserIdPwd.tabGetUserPwd.form.edtPhone00","value","user","phone");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame::Bottom.xfdl");
        };
        
        // User Script
        this.registerScript("findUserIdPwd.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\tobesoft\Documents\TOBESOFT\Nexacro N\projects\Together\Together\User
        *	@FileName findUserIdPwd.xfdl
        *	@Creator 이수아
        *	@CreateDate 2022/11/01
        *	@Description 아이디, 비밀번호 찾기 폼
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2022/11/01	이수아		최초 생성
        *
        *
        */

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/
        this.fvApp = nexacro.getApplication();
        this.fvObjApp = this.ufnGetApplication();
        this.fVAbc = "";

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/
        /**
        * @description 아이디, 비밀번호 찾기 콜백
        */

        this.fnCallback = function(trId, errCd, errMsg){

        	if(trId == "getUserId"){
        		if(errCd == 100){

        		}
        		else{
        			this.fVAbc = this.fvObjApp.gdsUser.getColumn(0, "userId");
        			//this.tabGetUserIdPwd.tabGetUserId.form.go("Together::User/getUserId.xfdl");	//탭페이지내에서 이동

        			//모달로 이동
        			var objChildFrame = new ChildFrame();
        			objChildFrame.init("chf_popup1"
        				, 0 //vleft
        				, 0 // vtop
        				, 600 // 넓이
        				, 600 // 높이
        				, null
        				, null
        				, "Together::User/getUserId_Sub.xfdl");

        			objChildFrame.set_openalign("center middle");
        			objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)") // 컬러값
        			objChildFrame.set_dragmovetype("all");
        			var objParam = { param1:this.fVAbc};

        			objChildFrame.showModal( this.getOwnerFrame() // 현재 자신의 폼에
        				, objParam // 파라미터 전달
        				, this // 폼에대한 정보 넘겨주고
        				, "fn_popupCallback");	// 값을 전달받기위한 callback


        		}
        	}


        	else if(trId == "getUserPwd"){
        		if(errCd == 100){
        			//alert(errMsg);
        		}
        		else{
        			this.fVAbc = this.fvObjApp.gdsUser.getColumn(0, "userId");
        			this.fvObjApp.gvMainFrame.set_formurl("Together::User/updateUserPwd.xfdl");
        			//this.tabGetUserIdPwd.tabGetUserPwd.form.go("Together::User/updateUserPwd.xfdl"); //새비밀번호 작성 페이지로 탭페이지 내에서 이동
        		}
        	}


        }


        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/
        /**
        * @description 아이디 찾기 클릭
        */
        this.tabGetUserIdPwd_tabGetUserId_btnGetUserId_onclick = function(obj,e)
        {

        	if(this.ufnIsNull(this.tabGetUserIdPwd.tabGetUserId.form.edtPhone.value)){
        		this.ufnAlert("msg.err.validator.required", ["휴대폰번호"]);
        		this.tabGetUserIdPwd.tabGetUserId.form.edtPhone.setFocus();
        		return;
        	}

        	if(this.ufnIsNull(this.tabGetUserIdPwd.tabGetUserId.form.edtIdKey.value)){
        		this.ufnAlert("msg.err.validator.required", ["인증번호"]);
        		this.tabGetUserIdPwd.tabGetUserId.form.edtIdKey.setFocus();
        		return;
        	}
        	if(this.tabGetUserIdPwd.tabGetUserId.form.edtIdKey.value != this.sKey )
        	{
        		this.ufnAlert("msg15", ["인증번호"]);
        		this.tabGetUserIdPwd.tabGetUserId.form.edtIdKey.setFocus();
        		return;
        	}

        	this.ufnTransaction(
        		"getUserId"
        		,"getUserId.do"
        		,"user=user"
        		,"gdsUser=user"
        		,""
        		,"fnCallback")
        };

        /**
        * @description 비밀번호 찾기 클릭
        */
        this.tabGetUserIdPwd_getUserPwd_btnGetUserPwd_onclick = function(obj,e)
        {
        	if(this.ufnIsNull(this.tabGetUserIdPwd.tabGetUserPwd.form.edtUserId.value)){
        		this.ufnAlert("msg.err.validator.required", ["아이디"]);
        		this.tabGetUserIdPwd.tabGetUserPwd.form.edtUserId.setFocus();
        		return;
        	}
        	if(this.ufnIsNull(this.tabGetUserIdPwd.tabGetUserPwd.form.edtPhone00.value)){
        		this.ufnAlert("msg.err.validator.required", ["휴대폰번호"]);
        		this.tabGetUserIdPwd.tabGetUserPwd.form.edtPhone00.setFocus();
        		return;
        	}

        	if(this.ufnIsNull(this.tabGetUserIdPwd.tabGetUserPwd.form.edtPwdKey.value)){
        		this.ufnAlert("msg.err.validator.required", ["인증번호"]);
        		this.tabGetUserIdPwd.tabGetUserPwd.form.edtPwdKey.setFocus();
        		return;
        	}

        	if(this.tabGetUserIdPwd.tabGetUserPwd.form.edtPwdKey.value != this.sKey )
        	{
        		this.ufnAlert("msg15", ["인증번호"]);
        		this.tabGetUserIdPwd.tabGetUserPwd.form.edtPwdKey.setFocus();
        		return;
        	}

        	this.ufnTransaction(
        		"getUserPwd"
        		,"getUserPwd.do"
        		,"user=user"
        		,"gdsUser=user"
        		,""
        		,"fnCallback")
        };



        /**
        * @description 아이디 찾기 중 핸드폰 인증 문자보내기
        */
        this.tabGetUserIdPwd_tabGetUserId_btnPhoneCertify_onclick = function(obj,e)
        {
        	this.sKey = String(Math.floor((Math.random() * 1000) + 1) + 2000).padLeft(4,"0");
        	trace("randomkey=" + this.sKey );
        	this.ufnTransaction("smsSender",
        		"smsSender.do",
        		"",
        		"",
        		"randomkey=" + this.sKey + " paramPhone=" + this.tabGetUserIdPwd.tabGetUserPwd.form.edtPhone00.value
        		,"fn_call");
        };


        /**
        * @description 아이디 찾기 중 핸드폰 확인 인증
        */
        this.tabGetUserIdPwd_tabGetUserId_btnPhoneConfirm_onclick = function(obj,e)
        {
        	if(this.tabGetUserIdPwd.tabGetUserId.form.edtIdKey.value == this.sKey)
        	{
        		this.ufnAlert("msg25");
        	}else{
        		this.ufnAlert("msg15", ["인증번호"]);
        	}
        };

        /**
        * @description 비밀번호 찾기 중 핸드폰 확인 인증
        */
        this.tabGetUserIdPwd_tabGetUserPwd_btnPhoneConfirm_onclick = function(obj,e)
        {
        	if(this.tabGetUserIdPwd.tabGetUserPwd.form.edtPwdKey.value == this.sKey)
        	{
        		this.ufnAlert("msg25");
        	}else{
        		this.ufnAlert("msg15", ["인증번호"]);
        	}
        };

        /**
        * @description 비밀번호 찾기 중 핸드폰 인증문자 보내기
        */
        this.tabGetUserIdPwd_tabGetUserId_Button00_onclick = function(obj,e)
        {
        	this.sKey = String(Math.floor((Math.random() * 1000) + 1) + 2000).padLeft(4,"0");
        	trace("randomkey=" + this.sKey );
        	this.ufnTransaction("smsSender",
        		"smsSender.do",
        		"",
        		"",
        		"randomkey=" + this.sKey + " paramPhone=" + this.tabGetUserIdPwd.tabGetUserPwd.form.edtPhone00.value
        		,"fn_call");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.tabGetUserIdPwd.addEventHandler("onchanged",this.tabGetUserIdPwd_onchanged,this);
            this.tabGetUserIdPwd.tabGetUserId.form.Static01_01_00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.tabGetUserIdPwd.tabGetUserId.form.edtPhone.addEventHandler("onchanged",this.Div00_Edit00_00_onchanged,this);
            this.tabGetUserIdPwd.tabGetUserId.form.btnGetUserId.addEventHandler("onclick",this.tabGetUserIdPwd_tabGetUserId_btnGetUserId_onclick,this);
            this.tabGetUserIdPwd.tabGetUserId.form.btnPhoneCertify.addEventHandler("onclick",this.tabGetUserIdPwd_tabGetUserId_btnPhoneCertify_onclick,this);
            this.tabGetUserIdPwd.tabGetUserId.form.btnPhoneConfirm.addEventHandler("onclick",this.tabGetUserIdPwd_tabGetUserId_btnPhoneConfirm_onclick,this);
            this.tabGetUserIdPwd.tabGetUserPwd.form.edtPhone.addEventHandler("onchanged",this.Div00_Edit00_00_onchanged,this);
            this.tabGetUserIdPwd.tabGetUserPwd.form.Static01_01_00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.tabGetUserIdPwd.tabGetUserPwd.form.Static01_01_00_00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.tabGetUserIdPwd.tabGetUserPwd.form.btnGetUserPwd.addEventHandler("onclick",this.tabGetUserIdPwd_getUserPwd_btnGetUserPwd_onclick,this);
            this.tabGetUserIdPwd.tabGetUserPwd.form.edtPhone00.addEventHandler("onchanged",this.Div00_Edit00_00_onchanged,this);
            this.tabGetUserIdPwd.tabGetUserPwd.form.btnPhoneCertify.addEventHandler("onclick",this.tabGetUserIdPwd_tabGetUserId_Button00_onclick,this);
            this.tabGetUserIdPwd.tabGetUserPwd.form.Static01_01_00_01.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.tabGetUserIdPwd.tabGetUserPwd.form.btnPhoneConfirm.addEventHandler("onclick",this.tabGetUserIdPwd_tabGetUserPwd_btnPhoneConfirm_onclick,this);
        };
        this.loadIncludeScript("findUserIdPwd.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
