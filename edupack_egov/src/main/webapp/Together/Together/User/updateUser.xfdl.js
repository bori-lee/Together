(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("updateUser");
            this.set_titletext("개인 정보수정");
            this.set_background("whitesmoke");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1040);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("user", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"50\"/><Column id=\"pwd\" type=\"STRING\" size=\"20\"/><Column id=\"nick\" type=\"STRING\" size=\"20\"/><Column id=\"birth\" type=\"STRING\" size=\"20\"/><Column id=\"profileImg\" type=\"STRING\" size=\"200\"/><Column id=\"intro\" type=\"STRING\" size=\"300\"/><Column id=\"phone\" type=\"STRING\" size=\"15\"/><Column id=\"locationNo\" type=\"INT\" size=\"5\"/><Column id=\"regDate\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUp", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImg", this);
            obj._setContents("<ColumnInfo><Column id=\"fileBlob\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLocation", this);
            obj._setContents("<ColumnInfo><Column id=\"location_no\" type=\"INT\" size=\"256\"/><Column id=\"location_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCateg", this);
            obj._setContents("<ColumnInfo><Column id=\"categ_no\" type=\"INT\" size=\"256\"/><Column id=\"categ_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","12","50.00%","131",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("DivUpdateUser","Static00:-490","90","980","800",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("white");
            obj.set_borderRadius("20px");
            obj.set_border("1px solid darkgray");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","336","10","352","52",null,null,null,null,null,null,this.DivUpdateUser.form);
            obj.set_taborder("0");
            obj.set_text("개인 정보수정");
            obj.set_textAlign("center");
            obj.set_font("23pt/normal \"휴먼모음T\"");
            this.DivUpdateUser.addChild(obj.name, obj);

            obj = new Static("Static01","270","149","96","33",null,null,null,null,null,null,this.DivUpdateUser.form);
            obj.set_taborder("1");
            obj.set_text("프로필 사진");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.DivUpdateUser.addChild(obj.name, obj);

            obj = new Static("Static01_00","275","484","126","33",null,null,null,null,null,null,this.DivUpdateUser.form);
            obj.set_taborder("2");
            obj.set_text("관심지역");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.DivUpdateUser.addChild(obj.name, obj);

            obj = new Edit("edtUserId","398","270","194","37",null,null,null,null,null,null,this.DivUpdateUser.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_text("6~12자리 영문/숫자 조합");
            this.DivUpdateUser.addChild(obj.name, obj);

            obj = new Static("Static01_01","275","272","126","33",null,null,null,null,null,null,this.DivUpdateUser.form);
            obj.set_taborder("4");
            obj.set_text("아이디");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.DivUpdateUser.addChild(obj.name, obj);

            obj = new Button("btnUpdateUser","419","720","151","51",null,null,null,null,null,null,this.DivUpdateUser.form);
            obj.set_taborder("5");
            obj.set_text("회원정보수정");
            obj.set_background("#ff6128");
            obj.set_color("white");
            obj.set_font("15pt/normal \"휴먼모음T\"");
            this.DivUpdateUser.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","275","321","126","33",null,null,null,null,null,null,this.DivUpdateUser.form);
            obj.set_taborder("6");
            obj.set_text("닉네임");
            obj.getSetter("onchanged").set("Common_onchanged");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.DivUpdateUser.addChild(obj.name, obj);

            obj = new Edit("edtPhone","398","373","194","37",null,null,null,null,null,null,this.DivUpdateUser.form);
            obj.set_taborder("7");
            obj.set_value("숫자만 입력해주세요");
            obj.set_maxlength("12");
            obj.set_text("숫자만 입력해주세요");
            this.DivUpdateUser.addChild(obj.name, obj);

            obj = new ImageViewer("imgProfileimg","398","94","221","148",null,null,null,null,null,null,this.DivUpdateUser.form);
            obj.set_taborder("8");
            obj.set_stretch("fit");
            this.DivUpdateUser.addChild(obj.name, obj);

            obj = new Edit("edtNick","398","319","194","37",null,null,null,null,null,null,this.DivUpdateUser.form);
            obj.set_taborder("9");
            obj.set_text("6~12자리 영문/숫자 조합");
            this.DivUpdateUser.addChild(obj.name, obj);

            obj = new Button("btnAddImg","630","154","58","36",null,null,null,null,null,null,this.DivUpdateUser.form);
            obj.set_taborder("10");
            obj.set_text("첨부");
            obj.set_background("white");
            obj.set_border("1px solid coral");
            obj.set_color("#ff6128");
            this.DivUpdateUser.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_01","275","370","126","33",null,null,null,null,null,null,this.DivUpdateUser.form);
            obj.set_taborder("11");
            obj.set_text("휴대폰");
            obj.getSetter("onchanged").set("Common_onchanged");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.DivUpdateUser.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","275","584","126","33",null,null,null,null,null,null,this.DivUpdateUser.form);
            obj.set_taborder("12");
            obj.set_text("간략 소개");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.DivUpdateUser.addChild(obj.name, obj);

            obj = new TextArea("edtIntro","398","543","244","137",null,null,null,null,null,null,this.DivUpdateUser.form);
            obj.set_taborder("13");
            obj.set_maxlength("50");
            this.DivUpdateUser.addChild(obj.name, obj);

            obj = new Button("btnNickCheck","604","319","80","37",null,null,null,null,null,null,this.DivUpdateUser.form);
            obj.set_taborder("14");
            obj.set_text("중복확인");
            obj.set_background("white");
            obj.set_border("1px solid coral");
            obj.set_color("#ff6128");
            this.DivUpdateUser.addChild(obj.name, obj);

            obj = new Combo("cboLocation","398","484","198","37",null,null,null,null,null,null,this.DivUpdateUser.form);
            obj.set_taborder("15");
            obj.set_innerdataset("dsLocation");
            obj.set_codecolumn("location_no");
            obj.set_datacolumn("location_name");
            obj.set_text("");
            this.DivUpdateUser.addChild(obj.name, obj);

            obj = new Static("Static05","95","70","800","2",null,null,null,null,null,null,this.DivUpdateUser.form);
            obj.set_taborder("16");
            obj.set_text("");
            obj.set_background("gray");
            this.DivUpdateUser.addChild(obj.name, obj);

            obj = new Edit("edtKey","398","425","194","37",null,null,null,null,null,null,this.DivUpdateUser.form);
            obj.set_taborder("17");
            this.DivUpdateUser.addChild(obj.name, obj);

            obj = new Button("btnConfirm","604","373","46","37",null,null,null,null,null,null,this.DivUpdateUser.form);
            obj.set_taborder("18");
            obj.set_text("인증");
            obj.set_border("1px solid coral");
            obj.set_background("white");
            obj.set_color("#ff6128");
            this.DivUpdateUser.addChild(obj.name, obj);

            obj = new Button("btnConfirm1","604","425","46","37",null,null,null,null,null,null,this.DivUpdateUser.form);
            obj.set_taborder("19");
            obj.set_text("확인");
            obj.set_background("white");
            obj.set_border("1px solid coral");
            obj.set_color("#ff6128");
            this.DivUpdateUser.addChild(obj.name, obj);

            obj = new Edit("edtCheckIntro","574","644","36","32",null,null,null,null,null,null,this.DivUpdateUser.form);
            obj.set_taborder("20");
            obj.set_border("0px none");
            obj.set_font("12px/normal \"Vedana\",\"Malgun Gothic\"");
            obj.set_readonly("true");
            obj.set_background("white");
            this.DivUpdateUser.addChild(obj.name, obj);

            obj = new Static("Static02","596","644","21","32",null,null,null,null,null,null,this.DivUpdateUser.form);
            obj.set_taborder("21");
            obj.set_text("/");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"Vedana\",\"Malgun Gothic\"");
            this.DivUpdateUser.addChild(obj.name, obj);

            obj = new Static("Static03","620","644","29","32",null,null,null,null,null,null,this.DivUpdateUser.form);
            obj.set_taborder("22");
            obj.set_text("50)");
            obj.set_font("12px/normal \"Vedana\",\"Malgun Gothic\"");
            this.DivUpdateUser.addChild(obj.name, obj);

            obj = new Div("divbottom","0","DivUpdateUser:90",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_border("0px none");
            obj.set_url("Frame::Bottom.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.DivUpdateUser.form
            obj = new Layout("default","",0,0,this.DivUpdateUser.form,function(p){});
            this.DivUpdateUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divbottom
            obj = new Layout("default","",0,0,this.divbottom.form,function(p){});
            this.divbottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,1040,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","DivUpdateUser.form.edtUserId","value","gdsUser","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","DivUpdateUser.form.edtNick","value","gdsUser","nick");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","DivUpdateUser.form.edtPhone","value","gdsUser","phone");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","DivUpdateUser.form.edtIntro","value","gdsUser","intro");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","DivUpdateUser.form.imgProfileimg","accessibilityaction","gdsUser","profileImg");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","DivUpdateUser.form.imgProfileimg","accessibilitydesclevel","dsUp","FILE_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","DivUpdateUser.form.imgProfileimg","accessibilitydescription","dsImg","fileBlob");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","DivUpdateUser.form.imgProfileimg","image","dsImg","fileBlob");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","DivUpdateUser.form.cboLocation","value","gdsUser","locationNo");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame::Bottom.xfdl");
        };
        
        // User Script
        this.registerScript("updateUser.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\tobesoft\Documents\TOBESOFT\Nexacro N\projects\Together\Together\User
        *	@FileName updateUser.xfdl
        *	@Creator 이수아
        *	@CreateDate 2022/11/03
        *	@Description 회원의 정보를 조회하고 수정할 수 있는 폼
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2022/11/03		이수아		최초 생성
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

        this.updateUser_onload = function(obj,e)
        {
        	this.fn_setImg(this.fvObjApp.gdsUser.getColumn(0, "profileImg"));

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

        this.fnCallback = function(trId, errCd, errMsg)
        {
        	trace(trId);

        	if(trId == "updateUser"){
        		this.fn_setImg(this.fvObjApp.gdsUser.getColumn(0, "profileImg"));
        		this.ufnAlert("msg.update.success");
        		this.fvObjApp.gvMainFrame.set_formurl("");
        		this.fvObjApp.gvMainFrame.set_formurl("Together::User/updateUser.xfdl");
        	}else if(trId == "checkNick"){

        		if(this.cnt > 0){
        			this.ufnAlert("msg16", ["닉네임"]);
        			this.nickCheck = 0;
        		}else{
        			this.ufnAlert("msg17", ["닉네임"]);;
        			this.nickCheck = 1;
        		}

        	}

        }


        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/
        /**
        * @description 파일 첨부 후 닫을 떄 이벤트
        */
        this.FileDialog_onclose = function(obj,e)
        {
        	var objFileList = e.virtualfiles;
        	//virtualfiles> FileDialog 가 수행된 형태에 맞는 파일 정보를 갖는 속성입니다.


        	for(i=0; i<objFileList.length; i++) // 파일업로드에 넣어줄꺼임
        	{
        		var bExist = this.FileUpTransfer00.existFile(objFileList[i]); // 먼저 똑같은 파일이 있는지 확인
        		if(!bExist){
        			var sFileName = objFileList[i].filename;
        			var sFileType = sFileName.substr(sFileName.lastIndexOf(".")+1);
        			this.FileUpTransfer00.addFile(sFileName, objFileList[i]);

        			var nRow = this.dsUp.addRow();
        			this.dsUp.setColumn(nRow, "FILE_ID", sFileName); //이름바꾼게있으면이름
        			this.dsUp.setColumn(nRow, "FILE_NAME", sFileName); // 처음 넣는 이름
        			this.dsUp.setColumn(nRow, "FILE_TYPE", sFileType);
        			this.dsUp.setColumn(nRow, "CHECK", "0");
        		}
        	}

        	var sUploadUrl = "SvcUrl::fileUpload.do"
        	this.FileUpTransfer00.setPostData("userPath", "edupack"); //서버로 데이터전송
        	this.FileUpTransfer00.upload(sUploadUrl);
        };


        /**
        * @description 파일 업로드가 성공되면
        */
        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	var objDs = e.datasets[0]
        	trace(objDs.saveXML());


        	var nRow = this.dsUp.findRow("FILE_NAME", objDs.getColumn(0, "FILE_NAME"));
        	this.dsUp.setColumn(nRow, "FILE_ID", objDs.getColumn(0, "FILE_ID"));
        	this.dsUp.setColumn(nRow, "FILE_NAME", objDs.getColumn(0, "FILE_NAME"));
        	this.dsUp.setColumn(nRow, "FILE_SIZE", objDs.getColumn(0, "FILE_SIZE"));

        	this.fvObjApp.gdsUser.setColumn(this.fvObjApp.gdsUser.rowposition, "profileImg", objDs.getColumn(0, "FILE_ID"));
        	this.fn_setImg(objDs.getColumn(0, "FILE_ID"));

        };

        /**
        * @description 이미지 경로 찾는 함수
        */
        this.fn_setImg = function(fileId)
        {
        	var sFileName = fileId;
        	var sUploadPath = "edupack";

        	this.ufnTransaction(
        		"seletProfileImg"
        		,"seletProfileImg.do"
        		,""
        		,"dsImg=ds_output"
        		,"fileName="+nexacro.wrapQuote(sFileName) + " uploadpath="+nexacro.wrapQuote(sUploadPath)
        		,"fnCallback")
        };


        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/
        /**
        * @description  수정하기 클릭 시
        */
        this.DivUpdateUser_btnUpdateUser_onclick = function(obj,e)
        {
        	if(this.ufnIsNull(this.DivUpdateUser.form.edtNick.value)){
        		this.ufnAlert("msg.err.validator.required", ["닉네임"]);
        		this.DivUpdateUser.form.edtNick.setFocus();
        		return;
        	}
        	if(this.ufnIsNull(this.DivUpdateUser.form.edtPhone.value)){
        		this.ufnAlert("msg.err.validator.required", ["휴대폰번호"]);
        		this.DivUpdateUser.form.edtPhone.setFocus();
        		return;
        	}
        	if(this.ufnIsNull(this.DivUpdateUser.form.edtKey.value)){
        		this.ufnAlert("msg.err.validator.required", ["인증번호"]);
        		this.DivUpdateUser.form.edtKey.setFocus();
        		return;
        	}
        	if(this.DivUpdateUser.form.edtKey.value != this.sKey)
        	{
        		this.ufnAlert("msg15", ["인증번호"]);
        		this.DivUpdateUser.form.edtKey.setFocus();
        		return;
        	}

        	if(this.DivUpdateUser.form.edtNick.value != this.fvObjApp.gdsUser.getColumn(0, "nick") && this.nickCheck != 1){
        		this.ufnAlert("msg15", ["닉네임 중복검사"]);
        		this.DivUpdateUser.form.edtNick.setFocus();
        		return;
        	}

        	this.ufnTransaction(
        		"updateUser"
        		,"updateUser.do"
        		,"user=gdsUser"
        		,"gdsUser=user"
        		,""
        		,"fnCallback")

        };


        /**
        * @description 첨부 클릭 시
        */
        this.DivUpdateUser_btnAddImg_onclick = function(obj,e)
        {
        	this.FileDialog.open("FileSelect", 3, "%UserApp%"); // f1 open 확인

        }

        /**
        * @description 닉네임 중복체크
        */
        this.DivUpdateUser_btnNickCheck_onclick = function(obj,e)
        {
        	var sNick = this.DivUpdateUser.form.edtNick.value;
        	this.ufnTransaction(
        		"checkNick"
        		,"checkNick.do"
        		,""
        		,""
        		,"paramNick="+nexacro.wrapQuote(sNick)
        		,"fnCallback");
        };


        /**
        * @description 휴대폰 인증 문자보내기
        */
        this.DivAddUser_btnConfirm_onclick = function(obj,e)
        {
        	this.sKey = String(Math.floor((Math.random() * 1000) + 1) + 2000).padLeft(4,"0");
        	trace("randomkey=" + this.sKey );
        	this.ufnTransaction("smsSender",
        		"smsSender.do",
        		"",
        		"",
        		"randomkey=" + this.sKey + " paramPhone=" + this.DivUpdateUser.form.edtPhone.value
        		,"fn_call");
        };


        /**
        * @description 휴대폰 인증 확인
        */
        this.DivUpdateUser_btnConfirm1_onclick = function(obj,e)
        {
        	if(this.DivUpdateUser.form.edtKey.value == this.sKey)
        	{
        		this.ufnAlert("msg25");

        	} else {
        		this.ufnAlert("msg15", ["인증번호"]);

        	}

        };

        /**
        * @description 간략 소개 글자 수 체크
        */
        this.DivUpdateUser_edtIntro_onkeyup = function(obj,e)
        {
        	this.DivUpdateUser.form.edtCheckIntro.set_value("(" + this.DivUpdateUser.form.edtIntro.value.length);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.updateUser_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.DivUpdateUser.form.Static00.addEventHandler("onclick",this.DivUpdateUser_Static00_onclick,this);
            this.DivUpdateUser.form.Static01.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.DivUpdateUser.form.Static01_00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.DivUpdateUser.form.Static01_01.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.DivUpdateUser.form.btnUpdateUser.addEventHandler("onclick",this.DivUpdateUser_btnUpdateUser_onclick,this);
            this.DivUpdateUser.form.Static01_01_00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.DivUpdateUser.form.imgProfileimg.addEventHandler("onclick",this.DivUpdateUser_ImageViewer00_onclick,this);
            this.DivUpdateUser.form.edtNick.addEventHandler("onchanged",this.Common_onchanged,this);
            this.DivUpdateUser.form.btnAddImg.addEventHandler("onclick",this.DivUpdateUser_btnAddImg_onclick,this);
            this.DivUpdateUser.form.Static01_01_00_01.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.DivUpdateUser.form.Static01_00_00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.DivUpdateUser.form.edtIntro.addEventHandler("onkeyup",this.DivUpdateUser_edtIntro_onkeyup,this);
            this.DivUpdateUser.form.btnNickCheck.addEventHandler("onclick",this.DivUpdateUser_btnNickCheck_onclick,this);
            this.DivUpdateUser.form.cboLocation.addEventHandler("onitemchanged",this.DivUpdateUser_Combo00_onitemchanged,this);
            this.DivUpdateUser.form.btnConfirm.addEventHandler("onclick",this.DivAddUser_btnConfirm_onclick,this);
            this.DivUpdateUser.form.btnConfirm1.addEventHandler("onclick",this.DivUpdateUser_btnConfirm1_onclick,this);
            this.FileDialog.addEventHandler("onclose",this.FileDialog_onclose,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
        };
        this.loadIncludeScript("updateUser.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
