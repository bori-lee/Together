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
            this.set_titletext("로그인");
            this.set_background("whitesmoke");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("user", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"50\"/><Column id=\"pwd\" type=\"STRING\" size=\"20\"/><Column id=\"nick\" type=\"STRING\" size=\"20\"/><Column id=\"birth\" type=\"STRING\" size=\"20\"/><Column id=\"profileImg\" type=\"STRING\" size=\"200\"/><Column id=\"intro\" type=\"STRING\" size=\"300\"/><Column id=\"phone\" type=\"STRING\" size=\"15\"/><Column id=\"locationNo\" type=\"INT\" size=\"5\"/><Column id=\"regDate\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","228","50.00%","131",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("DivLogin","Static00:-283","134","573","432",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("white");
            obj.set_borderRadius("20px");
            obj.set_border("1px solid darkgray");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","150","26","272","52",null,null,null,null,null,null,this.DivLogin.form);
            obj.set_taborder("0");
            obj.set_text("로그인");
            obj.set_textAlign("center");
            obj.set_font("23pt/normal \"휴먼모음T\"");
            this.DivLogin.addChild(obj.name, obj);

            obj = new Static("Static01","77","111","126","33",null,null,null,null,null,null,this.DivLogin.form);
            obj.set_taborder("1");
            obj.set_text("아이디");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.DivLogin.addChild(obj.name, obj);

            obj = new Static("Static02","77","168","147","33",null,null,null,null,null,null,this.DivLogin.form);
            obj.set_taborder("3");
            obj.set_text("비밀번호");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.DivLogin.addChild(obj.name, obj);

            obj = new Edit("edtUserId","193","107","293","45",null,null,null,null,null,null,this.DivLogin.form);
            obj.set_taborder("2");
            obj.set_text("아이디를 입력해주세요");
            this.DivLogin.addChild(obj.name, obj);

            obj = new Edit("edtPwd","193","167","293","45",null,null,null,null,null,null,this.DivLogin.form);
            obj.set_taborder("4");
            obj.set_password("true");
            obj.set_text("비밀번호를 입력해주세요");
            this.DivLogin.addChild(obj.name, obj);

            obj = new Button("btnLogin","193","305","193","45",null,null,null,null,null,null,this.DivLogin.form);
            obj.set_taborder("6");
            obj.set_text("로그인");
            obj.set_font("15pt/normal \"휴먼모음T\"");
            obj.set_color("white");
            obj.set_background("#ff6128");
            this.DivLogin.addChild(obj.name, obj);

            obj = new Static("staSearch","330","222","173","33",null,null,null,null,null,null,this.DivLogin.form);
            obj.set_taborder("5");
            obj.set_text("아이디 찾기 | 비밀번호 찾기");
            obj.set_textDecoration("underline");
            obj.set_font("10pt/normal \"Yu Gothic UI Semibold\"");
            this.DivLogin.addChild(obj.name, obj);

            obj = new Button("btnAddUser","193","360","193","45",null,null,null,null,null,null,this.DivLogin.form);
            obj.set_taborder("7");
            obj.set_text("회원가입 ");
            obj.set_font("15pt/normal \"휴먼모음T\"");
            obj.set_color("#ff6128");
            obj.set_border("1px solid coral");
            obj.set_background("white");
            this.DivLogin.addChild(obj.name, obj);

            obj = new Div("divbottom","0","700",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_border("0px none");
            obj.set_url("Frame::Bottom.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.DivLogin.form
            obj = new Layout("default","",0,0,this.DivLogin.form,function(p){});
            this.DivLogin.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divbottom
            obj = new Layout("default","",0,0,this.divbottom.form,function(p){});
            this.divbottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,760,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame::Bottom.xfdl");
        };
        
        // User Script
        this.registerScript("Login.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\tobesoft\Documents\TOBESOFT\Nexacro N\projects\Together\Together\User
        *	@FileName Login.xfdl
        *	@Creator 이수아
        *	@CreateDate 2022/11/02
        *	@Description 로그인을 하는 폼
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
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/
        /**
        * @description 메세지 콜백
        */

        this.fnCallback = function(trId, errCd, errMsg)
        {
        	if(trId == "login"){
        		if(errCd == 100){
        			this.ufnAlert("msg29", [errMsg]);
        		}
        		else if(errCd == 200){
        			this.ufnAlert("msg29", [errMsg]);
        		}else{ // 로그인 성공

        			this.fvObjApp.gvMainFrame.set_formurl("Frame::Main.xfdl");
        			this.fvObjApp.gvTopFrame.form.staLogout.set_visible(true);
        			this.fvObjApp.gvTopFrame.form.staLogin.set_visible(false);

        			//xpush 토픽 subscribe 등록
        			this.fvObjApp.gvTopFrame.form.fn_setPush();
        		}
        	}

        }

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/
        /**
        * @description 로그인 클릭 시
        */
        this.DivLogin_btnLogin_onclick = function(obj,e)
        {
        	if(this.ufnIsNull(this.DivLogin.form.edtUserId.value)){
        		this.ufnAlert("msg.err.validator.required", ["아이디"]);
        		this.DivLogin.form.edtUserId.setFocus();
        		return;
        	}
        	if(this.ufnIsNull(this.DivLogin.form.edtPwd.value)){
        		this.ufnAlert("msg.err.validator.required", ["비밀번호"]);
        		this.DivLogin.form.edtPwd.setFocus();
        		return;
        	}

        	this.user.clearData();
        	this.user.addRow();
        	this.user.setColumn(this.user.rowposition, "userId", this.DivLogin.form.edtUserId.value);
        	this.user.setColumn(this.user.rowposition, "pwd", this.DivLogin.form.edtPwd.value);

        	this.ufnTransaction(
        		"login"
        		,"login.do"
        		,"user=user"
        		,"gdsUser=user gdsClass=out_class"
        		,"paramUserId="+nexacro.wrapQuote(this.DivLogin.form.edtUserId.value)
        		,"fnCallback")
        };



        /**
        * @description 아이디/비빌번호 찾기 클릭 시 폼 이동
        */
        this.DivLogin_staSearch_onclick = function(obj,e)
        {
        	this.fvObjApp.gvMainFrame.set_formurl("Together::User/findUserIdPwd.xfdl");

        };

        /**
        * @description 회원가입 클릭 시 폼 이동
        */
        this.DivLogin_btnAddUser_onclick = function(obj,e)
        {
        	this.fvObjApp.gvMainFrame.set_formurl("Together::User/addUser.xfdl");
        };


        /**
        * @description keycode 사용
        */
        this.DivLogin_edtPwd_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.DivLogin_btnLogin_onclick();
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.DivLogin.form.Static00.addEventHandler("onclick",this.DivLogin_Static00_onclick,this);
            this.DivLogin.form.edtPwd.addEventHandler("onkeyup",this.DivLogin_edtPwd_onkeyup,this);
            this.DivLogin.form.btnLogin.addEventHandler("onclick",this.DivLogin_btnLogin_onclick,this);
            this.DivLogin.form.staSearch.addEventHandler("onclick",this.DivLogin_staSearch_onclick,this);
            this.DivLogin.form.btnAddUser.addEventHandler("onclick",this.DivLogin_btnAddUser_onclick,this);
        };
        this.loadIncludeScript("Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
