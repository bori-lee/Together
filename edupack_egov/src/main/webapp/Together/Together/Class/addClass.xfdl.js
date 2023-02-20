(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("addClass");
            this.set_titletext("내 모임 만들기");
            this.set_background("whitesmoke");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1180);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMeet", this);
            obj._setContents("<ColumnInfo><Column id=\"classNo\" type=\"INT\" size=\"256\"/><Column id=\"categNo\" type=\"INT\" size=\"256\"/><Column id=\"locationNo\" type=\"INT\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"intro\" type=\"STRING\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/><Column id=\"sumnailImg\" type=\"STRING\" size=\"256\"/><Column id=\"personnel\" type=\"INT\" size=\"256\"/><Column id=\"wishCount\" type=\"INT\" size=\"256\"/><Column id=\"hostId\" type=\"STRING\" size=\"256\"/><Column id=\"regDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLocation", this);
            obj._setContents("<ColumnInfo><Column id=\"location_no\" type=\"INT\" size=\"256\"/><Column id=\"location_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCateg", this);
            obj._setContents("<ColumnInfo><Column id=\"categ_no\" type=\"INT\" size=\"256\"/><Column id=\"categ_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImg", this);
            obj._setContents("<ColumnInfo><Column id=\"fileBlob\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUp", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJoinClass", this);
            obj._setContents("<ColumnInfo><Column id=\"joinClassNo\" type=\"INT\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"classNo\" type=\"INT\" size=\"256\"/><Column id=\"status\" type=\"INT\" size=\"256\"/><Column id=\"regDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","32","29","198","41",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("내 모임 만들기");
            obj.set_font("22pt/normal \"휴먼모음T\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","-6","76","50.00%","131",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Static00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divAddClass","Static00_00:-499","105","1010","915",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("white");
            obj.set_borderRadius("20px");
            obj.set_border("1px solid darkgray");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","27","45","147","40",null,null,null,null,null,null,this.divAddClass.form);
            obj.set_taborder("0");
            obj.set_text("* 모임 카테고리");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.divAddClass.addChild(obj.name, obj);

            obj = new Combo("cboCateg","158","41","182","44",null,null,null,null,null,null,this.divAddClass.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCateg");
            obj.set_codecolumn("categ_no");
            obj.set_datacolumn("categ_name");
            obj.set_text("");
            this.divAddClass.addChild(obj.name, obj);

            obj = new Static("Static00_00","27","105","147","40",null,null,null,null,null,null,this.divAddClass.form);
            obj.set_taborder("2");
            obj.set_text("* 모임 이름");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.divAddClass.addChild(obj.name, obj);

            obj = new Edit("edtTitle","158","103","768","44",null,null,null,null,null,null,this.divAddClass.form);
            obj.set_taborder("3");
            obj.set_maxlength("20");
            obj.set_tooltiptext("5자 이상 15자이하로 작성바랍니다");
            obj.set_text("15자 이하로 작성해주세요");
            this.divAddClass.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","27","175","147","40",null,null,null,null,null,null,this.divAddClass.form);
            obj.set_taborder("4");
            obj.set_text("* 모임 한줄 소개");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.divAddClass.addChild(obj.name, obj);

            obj = new Edit("edtIntro","158","171","768","44",null,null,null,null,null,null,this.divAddClass.form);
            obj.set_taborder("5");
            obj.set_maxlength("40");
            obj.set_tooltiptext("5자 이상 30자 이하로 작성바랍니다 ");
            obj.set_text("페이지에 노출 될 모임에 대한 한줄소개를 20자이하로 간단 명료하게 작성해주세요");
            this.divAddClass.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","27","324","147","40",null,null,null,null,null,null,this.divAddClass.form);
            obj.set_taborder("6");
            obj.set_text("* 모임 상세 소개");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.divAddClass.addChild(obj.name, obj);

            obj = new TextArea("edtDetail","158","245","768","198",null,null,null,null,null,null,this.divAddClass.form);
            obj.set_taborder("7");
            obj.set_maxlength("500");
            obj.set_tooltiptext("모임의 규칙, 내용, 정모 등 자세한 내용들을 500자이하로 필수 작성바랍니다");
            this.divAddClass.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","27","765","147","40",null,null,null,null,null,null,this.divAddClass.form);
            obj.set_taborder("8");
            obj.set_text("* 한도정원");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.divAddClass.addChild(obj.name, obj);

            obj = new Edit("edtPersonnel","158","761","143","37",null,null,null,null,null,null,this.divAddClass.form);
            obj.set_taborder("9");
            obj.set_tooltiptext("10명 이상 200명 이하로 작성해주세요");
            obj.set_text("10~200");
            this.divAddClass.addChild(obj.name, obj);

            obj = new Button("btnAddClass","409","821","182","44",null,null,null,null,null,null,this.divAddClass.form);
            obj.set_taborder("10");
            obj.set_text("모임 만들기");
            obj.set_background("#ff6128");
            obj.set_color("white");
            obj.set_font("15pt/normal \"휴먼모음T\"");
            this.divAddClass.addChild(obj.name, obj);

            obj = new Static("Static00_01","27","575","129","40",null,null,null,null,null,null,this.divAddClass.form);
            obj.set_taborder("11");
            obj.set_text("* 모임 썸네일 ");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.divAddClass.addChild(obj.name, obj);

            obj = new Button("btnAddImg","592","585","63","34",null,null,null,null,null,null,this.divAddClass.form);
            obj.set_taborder("12");
            obj.set_text("첨부");
            obj.set_background("white");
            obj.set_border("1px solid coral");
            obj.set_color("#ff6128");
            this.divAddClass.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","375","45","91","40",null,null,null,null,null,null,this.divAddClass.form);
            obj.set_taborder("13");
            obj.set_text("* 활동 지역");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.divAddClass.addChild(obj.name, obj);

            obj = new ImageViewer("imgSumnail","159","480","422","250",null,null,null,null,null,null,this.divAddClass.form);
            obj.set_taborder("14");
            obj.set_stretch("fit");
            obj.set_text("");
            this.divAddClass.addChild(obj.name, obj);

            obj = new Combo("cboLocation","466","41","182","42",null,null,null,null,null,null,this.divAddClass.form);
            obj.set_taborder("15");
            obj.set_innerdataset("dsLocation");
            obj.set_codecolumn("location_no");
            obj.set_datacolumn("location_name");
            obj.set_text("");
            this.divAddClass.addChild(obj.name, obj);

            obj = new Static("Static01","665","585","225","34",null,null,null,null,null,null,this.divAddClass.form);
            obj.set_taborder("16");
            obj.set_text("* 가로 500px, 세로 450px로 첨부 ");
            obj.set_color("navy");
            this.divAddClass.addChild(obj.name, obj);

            obj = new Edit("edtCheckTitle","853","109","36","32",null,null,null,null,null,null,this.divAddClass.form);
            obj.set_taborder("18");
            obj.set_border("0px none");
            obj.set_font("12px/normal \"Vedana\",\"Malgun Gothic\"");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            obj.set_background("white");
            this.divAddClass.addChild(obj.name, obj);

            obj = new Static("Static03","edtCheckTitle:2","109","29","32",null,null,null,null,null,null,this.divAddClass.form);
            obj.set_taborder("17");
            obj.set_text("/ 20)");
            obj.set_font("12px/normal \"Vedana\",\"Malgun Gothic\"");
            this.divAddClass.addChild(obj.name, obj);

            obj = new Static("Static03_00","891","179","29","32",null,null,null,null,null,null,this.divAddClass.form);
            obj.set_taborder("19");
            obj.set_text("/ 40)");
            obj.set_font("12px/normal \"Vedana\",\"Malgun Gothic\"");
            this.divAddClass.addChild(obj.name, obj);

            obj = new Edit("edtCheckIntro","853","179","36","32",null,null,null,null,null,null,this.divAddClass.form);
            obj.set_taborder("20");
            obj.set_border("0px none");
            obj.set_font("12px/normal \"Vedana\",\"Malgun Gothic\"");
            obj.set_textAlign("right");
            obj.set_maxlength("25");
            obj.set_background("white");
            obj.set_readonly("true");
            this.divAddClass.addChild(obj.name, obj);

            obj = new Edit("edtCheckDetail","844","409","47","32",null,null,null,null,null,null,this.divAddClass.form);
            obj.set_taborder("21");
            obj.set_border("0px none");
            obj.set_font("12px/normal \"Vedana\",\"Malgun Gothic\"");
            obj.set_textAlign("right");
            obj.set_maxlength("25");
            this.divAddClass.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","886","409","40","32",null,null,null,null,null,null,this.divAddClass.form);
            obj.set_taborder("22");
            obj.set_text("/ 500)");
            obj.set_font("12px/normal \"Vedana\",\"Malgun Gothic\"");
            this.divAddClass.addChild(obj.name, obj);

            obj = new Static("Static01_00","310","761","300","30",null,null,null,null,null,null,this.divAddClass.form);
            obj.set_taborder("23");
            obj.set_text("* 10명이상 300명 이하로 작성 바랍니다");
            obj.set_color("navy");
            this.divAddClass.addChild(obj.name, obj);

            obj = new Static("Static03_00_01","913","5","87","26",null,null,null,null,null,null,this.divAddClass.form);
            obj.set_taborder("24");
            obj.set_text("필수입력사항");
            obj.set_color("black");
            this.divAddClass.addChild(obj.name, obj);

            obj = new Static("Static03_01","894","6","26","22",null,null,null,null,null,null,this.divAddClass.form);
            obj.set_taborder("25");
            obj.set_text("*");
            obj.set_color("red");
            this.divAddClass.addChild(obj.name, obj);

            obj = new Div("divbottom","0","divAddClass:100",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_border("0px none");
            obj.set_url("Frame::Bottom.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divAddClass.form
            obj = new Layout("default","",0,0,this.divAddClass.form,function(p){});
            this.divAddClass.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divbottom
            obj = new Layout("default","",0,0,this.divbottom.form,function(p){});
            this.divbottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,1180,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divAddClass.form.edtTitle","value","dsMeet","title");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divAddClass.form.edtIntro","value","dsMeet","intro");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divAddClass.form.edtDetail","value","dsMeet","content");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divAddClass.form.edtPersonnel","value","dsMeet","personnel");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divAddClass.form.imgSumnail","image","dsImg","fileBlob");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divAddClass.form.imgSumnail","accessibilityaction","dsMeet","sumnailImg");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divAddClass.form.cboCateg","value","dsMeet","categNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divAddClass.form.cboLocation","value","dsMeet","locationNo");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame::Bottom.xfdl");
        };
        
        // User Script
        this.registerScript("addClass.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\tobesoft\Documents\TOBESOFT\Nexacro N\projects\Together\Together\Class
        *	@FileName addClass.xfdl
        *	@Creator 이수아
        *	@CreateDate 2022/11/07
        *	@Description 모임을 등록하는 폼

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
        this.fvClassNo = 0;

        /**************************************************************************
        * FORM EVENT 영역(onload, onclose)
        **************************************************************************/
        /**
        * @description 화면 화면이 load될 때 처리할 로직(필수)
        */

        this.addClass_onload = function(obj,e)
        {
        	this.dsMeet.addRow();
        	this.dsJoinClass.addRow();

        	//관심지역 콤보 데이터 가져오기
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
        	if(trId == "getLocation")
        	{
        		this.divAddClass.form.cboCateg.set_index(0);
        		this.divAddClass.form.cboLocation.set_index(0);

        	} else if(trId == "addClass"){

        		this.fvApp.gvClassNo = this.fvClassNo; // classNo 값 글로벌 변수에 담아주기
        		trace(this.dsMeet.saveXML());
        		trace(this.dsJoinClass.saveXML());

        		trace("모임등록이 성공되었습니다");
        		this.fvObjApp.gvMainFrame.set_formurl("Together::Class/getClass.xfdl");

        	}else if(trId == "getClassNoCnt"){
        		if(this.ufnIsNull(this.divAddClass.form.edtTitle.value)){
        			this.ufnAlert("msg.err.validator.required", ["모임 이름"]);
        			this.divAddClass.form.edtTitle.setFocus();
        			return;
        		}
        		if(this.divAddClass.form.edtTitle.value.length < 5){
        			this.ufnAlert("msg.err.validator.required", ["모임 이름"], ["5"], ["20"]);
        			this.divAddClass.form.edtTitle.setFocus();
        			return;
        		}
        		if(this.ufnIsNull(this.divAddClass.form.edtIntro.value)){
        			this.ufnAlert("msg.err.validator.required", ["모임 한줄소개"]);
        			this.divAddClass.form.edtIntro.setFocus();
        			return;
        		}
        		if(this.divAddClass.form.edtIntro.value.length < 5){
        			this.ufnAlert("msg.err.validator.required", ["모임 한줄소개"], ["5"], ["40"]);
        			this.divAddClass.form.edtIntro.setFocus();
        			return;
        		}
        		if(this.ufnIsNull(this.divAddClass.form.edtDetail.value)){
        			this.ufnAlert("msg.err.validator.required", ["모임 상세소개"]);
        			this.divAddClass.form.edtDetail.setFocus();
        			return;
        		}
        		if(this.dsImg.getColumn(0, "fileBlob") == null){
        			this.ufnAlert("msg.err.validator.required", ["모임 썸네일"]);
        			return;
        		}

        		if(this.ufnIsNull(this.divAddClass.form.edtPersonnel.value)){
        			this.ufnAlert("msg.err.validator.required", ["한도정원"]);
        			this.divAddClass.form.edtPersonnel.setFocus();
        			return;
        		}
        		if(this.divAddClass.form.edtPersonnel.value < 10 || this.divAddClass.form.edtPersonnel.value > 300){
        			this.ufnAlert("msg.err.validator.required", ["한도정원"], ["10"], ["300"]);
        			this.divAddClass.form.edtPersonnel.setFocus();
        			return;
        		}

        		this.dsMeet.setColumn(0, "hostId", this.fvObjApp.gdsUser.getColumn(0, "userId"));
        		this.dsMeet.setColumn(0, "classNo", this.fvClassNo);
        		this.dsJoinClass.setColumn(0, "userId", this.fvObjApp.gdsUser.getColumn(0, "userId"));
        		this.dsJoinClass.setColumn(0, "classNo", this.fvClassNo);
        		this.dsJoinClass.setColumn(0, "status", 2);

        		this.ufnTransaction(
        			"addClass" // 모임등록
        			,"addClass.do"
        			,"meet=dsMeet joinClass=dsJoinClass"
        			,""
        			,""
        			,"fnCallback")


        	}

        }

        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/
        /**
        * @description 파일 업로드 후
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
        * @description 파일업로드가 성공되면
        */
        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	var objDs = e.datasets[0]
        	trace(objDs.saveXML());


        	var nRow = this.dsUp.findRow("FILE_NAME", objDs.getColumn(0, "FILE_NAME"));
        	this.dsUp.setColumn(nRow, "FILE_ID", objDs.getColumn(0, "FILE_ID"));
        	this.dsUp.setColumn(nRow, "FILE_NAME", objDs.getColumn(0, "FILE_NAME"));
        	this.dsUp.setColumn(nRow, "FILE_SIZE", objDs.getColumn(0, "FILE_SIZE"));

        	this.dsMeet.setColumn(this.dsMeet.rowposition, "sumnailImg",objDs.getColumn(0, "FILE_ID") );
        	this.fn_setImg(objDs.getColumn(0, "FILE_ID"));

        };

        /**
        * @description 파일 경로 찾는 함수
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
        * @description 파일 첨부 클릭
        */
        this.divAddClass_btnAddImg_onclick = function(obj,e)
        {
        	this.FileDialog.open("FileSelect", 3, "%UserApp%"); // f1 open 확인
        };


        /**
        * @description 모임 만들기 클릭
        */
        this.divAddClass_btnAddClass_onclick = function(obj,e)
        {
        	this.ufnTransaction(
        		"getClassNoCnt" //회원수
        		,"getClassNoCnt.do"
        		,""
        		,""
        		,""
        		,"fnCallback")


        };

        /**
        * @description 모임 이름 글자 수 체크
        */
        this.divAddClass_edtTitle_onkeyup = function(obj,e)
        {
        	this.divAddClass.form.edtCheckTitle.set_value("(" + this.divAddClass.form.edtTitle.value.length);
        };

        /**
        * @description 모임 한줄 소개 글자 수 체크
        */
        this.divAddClass_edtIntro_onkeyup = function(obj,e)
        {
        	this.divAddClass.form.edtCheckIntro.set_value("(" + this.divAddClass.form.edtIntro.value.length);
        };

        /**
        * @description 모임 상세 소개 글자 수 체크
        */
        this.divAddClass_edtDetail_onkeyup = function(obj,e)
        {
        	this.divAddClass.form.edtCheckDetail.set_value("(" + this.divAddClass.form.edtDetail.value.length);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.addClass_onload,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.divAddClass.form.cboCateg.addEventHandler("onitemchanged",this.Div00_Combo00_onitemchanged,this);
            this.divAddClass.form.edtTitle.addEventHandler("onkeyup",this.divAddClass_edtTitle_onkeyup,this);
            this.divAddClass.form.edtIntro.addEventHandler("onkeyup",this.divAddClass_edtIntro_onkeyup,this);
            this.divAddClass.form.edtDetail.addEventHandler("onkeyup",this.divAddClass_edtDetail_onkeyup,this);
            this.divAddClass.form.btnAddClass.addEventHandler("onclick",this.divAddClass_btnAddClass_onclick,this);
            this.divAddClass.form.Static00_01.addEventHandler("onclick",this.Div00_Static00_01_onclick,this);
            this.divAddClass.form.btnAddImg.addEventHandler("onclick",this.divAddClass_btnAddImg_onclick,this);
            this.divAddClass.form.Static00_00_00_00_00_00.addEventHandler("onclick",this.Div00_Static00_00_00_00_00_00_onclick,this);
            this.divAddClass.form.Static01.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divAddClass.form.Static01_00.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.divAddClass.form.Static03_00_01.addEventHandler("onclick",this.DivAddUser_Static03_00_onclick,this);
            this.FileDialog.addEventHandler("onclose",this.FileDialog_onclose,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
        };
        this.loadIncludeScript("addClass.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
