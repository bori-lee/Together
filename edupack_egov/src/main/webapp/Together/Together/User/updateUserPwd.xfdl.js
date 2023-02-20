(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("updateUserPwd");
            this.set_titletext("새 비밀번호 입력");
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
            obj = new Static("Static00","0","12","50.00%","131",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divUpdateUserPwd","Static00:-355","165","710","365",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("white");
            obj.set_borderRadius("20px");
            obj.set_border("1px solid darkgray");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","101","125","144","40",null,null,null,null,null,null,this.divUpdateUserPwd.form);
            obj.set_taborder("0");
            obj.set_text("새 비밀번호");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.divUpdateUserPwd.addChild(obj.name, obj);

            obj = new Edit("edtPwd","262","122","275","46",null,null,null,null,null,null,this.divUpdateUserPwd.form);
            obj.set_taborder("1");
            obj.set_password("true");
            obj.set_text("제약사항");
            this.divUpdateUserPwd.addChild(obj.name, obj);

            obj = new Button("btnUpdateUserPwd","262","265","186","61",null,null,null,null,null,null,this.divUpdateUserPwd.form);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_font("15pt/normal \"휴먼모음T\"");
            obj.set_background("#ff6128");
            obj.set_color("white");
            this.divUpdateUserPwd.addChild(obj.name, obj);

            obj = new Edit("edtUserId","35","25","119","46",null,null,null,null,null,null,this.divUpdateUserPwd.form);
            obj.set_taborder("3");
            obj.set_value("아이디");
            obj.set_readonly("true");
            obj.set_visible("false");
            obj.set_text("아이디");
            this.divUpdateUserPwd.addChild(obj.name, obj);

            obj = new Static("Static01","194","27","323","69",null,null,null,null,null,null,this.divUpdateUserPwd.form);
            obj.set_taborder("4");
            obj.set_text("새 비밀번호 입력");
            obj.set_textAlign("center");
            obj.set_font("23pt/normal \"휴먼모음T\"");
            this.divUpdateUserPwd.addChild(obj.name, obj);

            obj = new Static("Static06_00","262","175","381","29",null,null,null,null,null,null,this.divUpdateUserPwd.form);
            obj.set_taborder("5");
            obj.set_text("* 숫자/영대,소문자/특수문자 모두 포함, 8~20자 이하로 작성");
            obj.set_color("navy");
            this.divUpdateUserPwd.addChild(obj.name, obj);

            obj = new Div("divbottom","0","700",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_border("0px none");
            obj.set_url("Frame::Bottom.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divUpdateUserPwd.form
            obj = new Layout("default","",0,0,this.divUpdateUserPwd.form,function(p){});
            this.divUpdateUserPwd.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divbottom
            obj = new Layout("default","",0,0,this.divbottom.form,function(p){});
            this.divbottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,760,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divUpdateUserPwd.form.edtUserId","value","user","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divUpdateUserPwd.form.edtPwd","value","user","pwd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame::Bottom.xfdl");
        };
        
        // User Script
        this.registerScript("updateUserPwd.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\tobesoft\Documents\TOBESOFT\Nexacro N\projects\Together\Together\User
        *	@FileName updateUserPwd.xfdl
        *	@Creator 이수아
        *	@CreateDate 2022/11/07
        *	@Description 해당 폼 정보 설명
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2022/11/07		이수아		최초 생성
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

        this.updateUserPwd_onload = function(obj,e)
        {
        	this.divUpdateUserPwd.form.edtUserId.set_value(this.fvObjApp.gdsUser.getColumn(0, "userId"));
        };

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/
        /**
        * @description 메세지 콜백
        */

        this.fnCallback = function(trId, errCd, errMsg)
        {
        	if(trId == "updatePwd")
        	{
        		this.ufnAlert("msg26");
        		this.fvObjApp.gdsUser.clear();
        		this.fvObjApp.gvMainFrame.set_formurl("Together::User/Login.xfdl");
        	}

        }

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/
        /**
        * @description 확인 클릭 시
        */

        this.divUpdateUserPwd_btnUpdateUserPwd_onclick = function(obj,e)
        {
        	var sId = this.divUpdateUserPwd.form.edtUserId.value;
        	var sPwd = this.divUpdateUserPwd.form.edtPwd.value;

        	var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/; // 비밀번호 정규식

        	if(this.ufnIsNull(sPwd)){
        		this.ufnAlert("msg.err.validator.required", ["비밀번호"]);
        		this.divUpdateUserPwd.form.edtPwd.setFocus();
        		return;
        	}
        	if(false === reg.test(sPwd)){
        		this.ufnAlert("msg24");
        		this.divUpdateUserPwd.form.edtPwd.setFocus();
        		return;
        	}

        	//비밀번호 수정
        	this.ufnTransaction(
        		"updatePwd"
        		,"updatePwd.do"
        		,""
        		,"user=user"
        		,"paramId="+nexacro.wrapQuote(sId) + " paramPwd="+nexacro.wrapQuote(sPwd)
        		,"fnCallback")
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.updateUserPwd_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.divUpdateUserPwd.form.btnUpdateUserPwd.addEventHandler("onclick",this.divUpdateUserPwd_btnUpdateUserPwd_onclick,this);
        };
        this.loadIncludeScript("updateUserPwd.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
