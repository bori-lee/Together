(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("addUser");
            this.set_titletext("회원가입");
            this.set_background("whitesmoke");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1065);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("user", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"50\"/><Column id=\"pwd\" type=\"STRING\" size=\"20\"/><Column id=\"nick\" type=\"STRING\" size=\"20\"/><Column id=\"birth\" type=\"STRING\" size=\"20\"/><Column id=\"profileImg\" type=\"STRING\" size=\"200\"/><Column id=\"intro\" type=\"STRING\" size=\"300\"/><Column id=\"phone\" type=\"STRING\" size=\"15\"/><Column id=\"locationNo\" type=\"INT\" size=\"5\"/><Column id=\"regDate\" type=\"DATETIME\" size=\"8\"/><Column id=\"address1\" type=\"STRING\" size=\"256\"/><Column id=\"address2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLocation", this);
            obj._setContents("<ColumnInfo><Column id=\"location_no\" type=\"INT\" size=\"256\"/><Column id=\"location_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCateg", this);
            obj._setContents("<ColumnInfo><Column id=\"categ_no\" type=\"INT\" size=\"256\"/><Column id=\"categ_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","12","50%","131",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("DivAddUser","Static00:-550","85","1100","835",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("white");
            obj.set_borderRadius("20px");
            obj.set_border("1px solid darkgray");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","414","26","272","52",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("0");
            obj.set_text("회원가입");
            obj.set_textAlign("center");
            obj.set_font("23pt/normal \"휴먼모음T\"");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Static("Static01","312","114","126","33",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("17");
            obj.set_text("* 아이디");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Static("Static02","313","174","147","33",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("18");
            obj.set_text("* 비밀번호");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Edit("edtUserId","461","114","223","37",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("1");
            obj.set_maxlength("10");
            obj.set_displaynulltext("영문자로 5~10자 이하");
            obj.set_color("black");
            obj.set_text("6~12자리 영문/숫자 조합");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Edit("edtPwd","462","177","223","37",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("3");
            obj.set_password("true");
            obj.set_maxlength("20");
            obj.set_text("6~12자리 영문/숫자/특수문자 조합");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Static("Static01_00","311","529","126","33",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("19");
            obj.set_text("* 관심지역");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Edit("edtNick","462","265","223","37",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("4");
            obj.set_maxlength("8");
            obj.set_displaynulltext("8자 이하로 작성");
            obj.set_color("black");
            obj.set_text("6~12자리 영문/숫자 조합");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Static("Static01_01","312","265","126","33",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("20");
            obj.set_text("* 닉네임");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Button("btnAddUser","480","734","140","51",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("16");
            obj.set_text("가입하기");
            obj.set_background("#ff6128");
            obj.set_font("15pt/normal \"휴먼모음T\"");
            obj.set_color("white");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","312","392","126","33",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("21");
            obj.set_text("* 휴대폰");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Edit("edtPhone","462","392","185","37",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("7");
            obj.set_maxlength("11");
            obj.set_displaynulltext("예) 01080077545");
            obj.set_color("black");
            obj.set_text("예)01080077545");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Button("btnConfirm","660","392","46","37",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("8");
            obj.set_text("인증");
            obj.set_border("1px solid coral");
            obj.set_background("white");
            obj.set_color("#ff6128");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Edit("edtKey","462","440","185","37",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("9");
            obj.set_text("숫자만 입력해주세요");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Static("Static04","462","488","292","20",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("22");
            obj.set_text("* 휴대폰 번호 입력 후 인증을 해주세요");
            obj.set_color("navy");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","315","328","126","33",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("23");
            obj.set_text("* 생년월일");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Edit("edtBirth","464","328","223","37",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("6");
            obj.set_maxlength("8");
            obj.set_displaynulltext("숫자만 입력, 예)19950930");
            obj.set_color("black");
            obj.set_text("예)19950930");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Button("btnCheckId","696","114","81","37",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("2");
            obj.set_text("중복확인");
            obj.set_border("1px solid coral");
            obj.set_background("white");
            obj.set_color("#ff6128");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Button("btnCheckNick","696","265","81","37",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("5");
            obj.set_text("중복확인");
            obj.set_border("1px solid coral");
            obj.set_background("white");
            obj.set_color("#ff6128");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Button("btnConfirm1","660","440","46","37",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("10");
            obj.set_text("확인");
            obj.set_background("white");
            obj.set_border("1px solid coral");
            obj.set_color("#ff6128");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Combo("cboLocation","464","529","206","41",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsLocation");
            obj.set_codecolumn("location_no");
            obj.set_datacolumn("location_name");
            obj.set_text("Combo00");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","319","598","126","33",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("24");
            obj.set_text("주소 ");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Edit("edtSculZip","463","598","92","37",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("12");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Button("btnSearchPost","565","598","40","37",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_Find");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new WebBrowser("webPost","25","585","225","70",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("25");
            obj.set_visible("false");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Edit("edtBasAddr","615","598","290","37",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_maxlength("200");
            obj.set_cssclass("readonly");
            obj.set_background("white");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Edit("edt_detl_addr","463","647",null,"37","195",null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("15");
            obj.set_maxlength("200");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Static("Static03","932","62","37","22",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("26");
            obj.set_text("*");
            obj.set_color("red");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Static("Static03_00","951","61","98","26",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("27");
            obj.set_text("필수입력사항");
            obj.set_color("black");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Static("Static05","73","87","954","2",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("28");
            obj.set_text("");
            obj.set_background("gray");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Static("Static06_00","462","217","381","29",null,null,null,null,null,null,this.DivAddUser.form);
            obj.set_taborder("29");
            obj.set_text("* 숫자/영대,소문자/특수문자 모두 포함, 8~20자 이하로 작성");
            obj.set_color("navy");
            this.DivAddUser.addChild(obj.name, obj);

            obj = new Div("divbottom","0","DivAddUser:85",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_border("0px none");
            obj.set_url("Frame::Bottom.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.DivAddUser.form
            obj = new Layout("default","",0,0,this.DivAddUser.form,function(p){});
            this.DivAddUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divbottom
            obj = new Layout("default","",0,0,this.divbottom.form,function(p){});
            this.divbottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,1065,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","DivAddUser.form.edtUserId","value","user","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","DivAddUser.form.edtPwd","value","user","pwd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","DivAddUser.form.edtNick","value","user","nick");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","DivAddUser.form.edtBirth","value","user","birth");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","DivAddUser.form.edtPhone","value","user","phone");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","DivAddUser.form.cboLocation","value","user","locationNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","DivAddUser.form.edtBasAddr","value","user","address1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","DivAddUser.form.edt_detl_addr","value","user","address2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame::Bottom.xfdl");
        };
        
        // User Script
        this.registerScript("addUser.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\tobesoft\Documents\TOBESOFT\Nexacro N\projects\Together\Together\User
        *	@FileName addUser.xfdl
        *	@Creator 이수아
        *	@CreateDate 2022/11/01
        *	@Description 회원가입을 하는 폼
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2022/11/01		이수아		최초 생성
        *
        *
        */

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/
        this.fvApp = nexacro.getApplication();
        this.fvObjApp = this.ufnGetApplication();
        this.cnt = 0;

        /**************************************************************************
        * FORM EVENT 영역(onload, onclose)
        **************************************************************************/
        /**
        * @description 화면 화면이 load될 때 처리할 로직(필수)
        */

        this.addUser_onload = function(obj,e)
        {
        	this.user.addRow();

        	//관심지역 콤보 데이터가져오기
        	this.ufnTransaction(
        		"getLocation"
        		,"getLocation.do"
        		,""
        		,"dsLocation=out_location dsCateg=out_categ"
        		,""
        		,"fnCallback");
        };


        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/
        /**
        * @description 메세지 콜백
        */

        this.fnCallback = function(trdId,errCd, errMsg)
        {

        	if(trdId == "getLocation"){
        		this.DivAddUser.form.cboLocation.set_index(0);

        	}else if(trdId == "checkId"){
        		if(this.cnt > 0){
        			this.ufnAlert("msg16", ["아이디"]);
        			this.idCheck = 0;
        		}else{
        			this.ufnAlert("msg17", ["아이디"]);
        			this.idCheck = 1;
        		}

        	}else if(trdId == "checkNick"){
        		if(this.cnt > 0){
        			this.ufnAlert("msg16", ["닉네임"]);
        			this.nickCheck = 0;
        		}else{
        			this.ufnAlert("msg17", ["닉네임"]);
        			this.nickCheck = 1;
        		}

        	}else if(trdId == "checkPhone"){
        		if(this.cnt > 0){
        			this.ufnAlert("msg16", ["휴대폰"]);
        		}else{
        			this.ufnTransaction(
        				"addUser"
        				,"addUser.do"
        				,"user=user:U"
        				,""
        				,""
        				,"fnCallback")
        		}

        	}else if(trdId == "addUser"){
        		this.ufnAlert("msg18");
        		this.fvObjApp.gvMainFrame.set_formurl("Together::User/Login.xfdl");

        	}


        }


        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/
        /**
        * @description 회원가입 클릭 이벤트
        */

        this.DivAddUser.form.btnAddUser_onclick = function(obj,e)
        {
        	var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/; // 비밀번호 정규식
        	var idReg = /^[A-za-z]{5,10}$/g; // 아이디 정규식
        	var birth_pattern = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/; //생년월일 정규식

        	if(this.ufnIsNull(this.DivAddUser.form.edtUserId.value)){
        		this.ufnAlert("msg.err.validator.required", ["아이디"]);
        		this.DivAddUser.form.edtUserId.setFocus();
        		return;
        	}
        	if(!idReg.test(this.DivAddUser.form.edtUserId.value)){
        		this.ufnAlert("msg13");
        		this.DivAddUser.form.edtUserId.setFocus();
        		return;
        	}
        	if(this.ufnIsNull(this.DivAddUser.form.edtPwd.value)){
        		this.ufnAlert("msg.err.validator.required", ["비밀번호"]);
        		this.DivAddUser.form.edtPwd.setFocus();
        		return;
        	}
        	if(false === reg.test(this.DivAddUser.form.edtPwd.value)){
        		this.ufnAlert("msg24");
        		this.DivAddUser.form.edtPwd.setFocus();
        		return;
        	}
        	if(this.ufnIsNull(this.DivAddUser.form.edtNick.value)){
        		this.ufnAlert("msg.err.validator.required", ["닉네임"]);
        		this.DivAddUser.form.edtNick.setFocus();
        		return;
        	}
        	if(this.ufnIsNull(this.DivAddUser.form.edtBirth.value)){
        		this.ufnAlert("msg.err.validator.required", ["생년월일"]);
        		this.DivAddUser.form.edtBirth.setFocus();
        		return;
        	}
        	if(!birth_pattern.test(this.DivAddUser.form.edtBirth.value)){
            	this.ufnAlert("msg14");
        		this.DivAddUser.form.edtBirth.setFocus();
        		return;
        	}
        	if(this.ufnIsNull(this.DivAddUser.form.edtPhone.value)){
        		this.ufnAlert("msg.err.validator.required", ["휴대폰"]);
        		this.DivAddUser.form.edtPhone.setFocus();
        		return;
        	}
        	if(this.ufnIsNull(this.DivAddUser.form.edtKey.value)){
        		this.ufnAlert("msg.err.validator.required", ["인증번호"]);
        		this.DivAddUser.form.edtKey.setFocus();
        		return;
        	}

        	if(this.DivAddUser.form.edtKey.value != this.sKey)
        	{
        		this.ufnAlert("msg15", ["인증번호"]);
        		this.DivAddUser.form.edtKey.setFocus();
        		return;
        	}

        	if(this.idCheck != 1){
        		this.ufnAlert("msg15", ["아이디 중복검사"]);
        		this.DivAddUser.form.edtUserId.setFocus();
        		return;
        	}

        	if(this.nickCheck != 1){
        		this.ufnAlert("msg15", ["닉네임 중복검사"]);
        		this.DivAddUser.form.edtNick.setFocus();
        		return;
        	}

        	this.ufnTransaction(
        		"checkPhone"
        		,"checkPhone.do"
        		,""
        		,""
        		,"paramPhone="+nexacro.wrapQuote(this.DivAddUser.form.edtPhone.value)
        		,"fnCallback")
        };

        /**
        * @description 아이디 중복체크
        */
        this.DivAddUser_btnCheckId_onclick = function(obj,e)
        {
        	var sId = this.DivAddUser.form.edtUserId.value;
        	this.ufnTransaction(
        		"checkId"
        		,"checkId.do"
        		,""
        		,""
        		,"paramId="+nexacro.wrapQuote(sId)
        		,"fnCallback");
        };

        /**
        * @description 닉네임 중복체크
        */
        this.DivAddUser_btnCheckNick_onclick = function(obj,e)
        {
        	var sNick = this.DivAddUser.form.edtNick.value;
        	this.ufnTransaction(
        		"checkNick"
        		,"checkNick.do"
        		,""
        		,""
        		,"paramNick="+nexacro.wrapQuote(sNick)
        		,"fnCallback");
        };


        /**
        * @description 휴대폰 인증 문자 보내기
        */
        this.DivAddUser_btnConfirm_onclick = function(obj,e)
        {

        	this.sKey = String(Math.floor((Math.random() * 1000) + 1) + 2000).padLeft(4,"0");
        	trace("randomkey=" + this.sKey );
        	this.ufnTransaction("smsSender",
        		"smsSender.do",
        		"",
        		"",
        		"randomkey=" + this.sKey + " paramPhone=" + this.DivAddUser.form.edtPhone.value
        		,"fn_call");
        };


        /**
        * @description 인증번호 확인 체크
        */
        this.DivAddUser_btnConfirm1_onclick = function(obj,e)
        {

        	if(this.DivAddUser.form.edtKey.value == this.sKey)
        	{
        		this.ufnAlert("msg25");

        	} else {
        		this.ufnAlert("msg15", ["인증번호"]);

        	}


        };


        /**
        * @description 우편번호 찾기 팝업 호출
        */
        this.btn_searchPost_onclick = function(obj,e)
        {
        	this.ufnPostSearchDaum(this.DivAddUser.form.webPost);
        };

        /**
        * @description 우편번호 선택 시 호출
        */
        this.webPost_onusernotify = function(obj,e)
        {
        	var strPost = e.userdata;
        	trace("strPost ==> " + strPost);
        	// e.userdata==>OK!!!:::서울특별시 송파구 백제고분로36가길 9, 101 (석촌동, 스카이타워):::서울특별시 송파구 백제고분로36가길 9:::(석촌동, 스카이타워):::9, Baekjegobun-ro 36ga-gil, Songpa-gu, Seoul:::서울특별시 송파구 석촌동 58-33 스카이타워:::05614:::101
        	if (strPost.indexOf("OK!!!:::") == 0)
        	{
        		/*
        		//e.userdata ==>(식별자 ::: 구우편번호 앞 3자리 ::: 구우편번호 뒷 3자리 :::  신규우편번호 ::: 도로명주소 ::: 지번 주소 ::: 조합형 주소여부에 따른 주소)
        		*/
        		var aAddr = strPost.split(":::");

        		trace("onusernotify -------------------------------------------");
        		trace("array[1]=>구우편번호 앞 3자리          ==> " +	aAddr[1] );
        		trace("array[2]=>구우편번호 뒷 3자리          ==> " +	aAddr[2] );
        		trace("array[3]=>신규우편번호                  ==> " + aAddr[3] );
        		trace("array[4]=>도로명주소                    ==> " +	aAddr[4] );
        		trace("array[5]=>지번주소                      ==> " +	aAddr[5] );
        		trace("array[6]=>조합형 주소여부에 따른 주소	==> " +	aAddr[6] );
        		trace("-------------------------------------------------------");

        		this.DivAddUser.form.edtSculZip.set_value(aAddr[3]);	// 신규 우편번호
        		this.DivAddUser.form.edtBasAddr.set_value(aAddr[6]);	// 조합형 주소여부에 따른 주소
        	}
        };






        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.addUser_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.DivAddUser.form.Static01.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.DivAddUser.form.Static02.addEventHandler("onclick",this.Div00_Static02_onclick,this);
            this.DivAddUser.form.edtPwd.addEventHandler("onchanged",this.Div00_Edit00_00_onchanged,this);
            this.DivAddUser.form.Static01_00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.DivAddUser.form.Static01_01.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.DivAddUser.form.btnAddUser.addEventHandler("onclick",this.DivAddUser.form.btnAddUser_onclick,this);
            this.DivAddUser.form.Static01_01_00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.DivAddUser.form.edtPhone.addEventHandler("onchanged",this.Div00_Edit00_00_onchanged,this);
            this.DivAddUser.form.btnConfirm.addEventHandler("onclick",this.DivAddUser_btnConfirm_onclick,this);
            this.DivAddUser.form.edtKey.addEventHandler("onchanged",this.Div00_Edit00_00_onchanged,this);
            this.DivAddUser.form.Static01_01_01.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.DivAddUser.form.edtBirth.addEventHandler("onchanged",this.Div00_Edit00_01_00_onchanged,this);
            this.DivAddUser.form.btnCheckId.addEventHandler("onclick",this.DivAddUser_btnCheckId_onclick,this);
            this.DivAddUser.form.btnCheckNick.addEventHandler("onclick",this.DivAddUser_btnCheckNick_onclick,this);
            this.DivAddUser.form.btnConfirm1.addEventHandler("onclick",this.DivAddUser_btnConfirm1_onclick,this);
            this.DivAddUser.form.Static01_00_00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.DivAddUser.form.btnSearchPost.addEventHandler("onclick",this.btn_searchPost_onclick,this);
            this.DivAddUser.form.webPost.addEventHandler("onusernotify",this.webPost_onusernotify,this);
            this.DivAddUser.form.edtBasAddr.addEventHandler("onchanged",this.DivAddUser_edtBasAddr_onchanged,this);
            this.DivAddUser.form.Static03_00.addEventHandler("onclick",this.DivAddUser_Static03_00_onclick,this);
        };
        this.loadIncludeScript("addUser.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
