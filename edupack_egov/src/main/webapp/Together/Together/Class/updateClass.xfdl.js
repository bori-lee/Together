(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("updateClass");
            this.set_titletext("모임 수정");
            this.set_background("whitesmoke");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1210);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsClass", this);
            obj._setContents("<ColumnInfo><Column id=\"sumnail_img\" type=\"STRING\" size=\"256\"/><Column id=\"location_name\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"wish_count\" type=\"INT\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/><Column id=\"class_user_cnt\" type=\"INT\" size=\"8\"/><Column id=\"fileimg\" type=\"STRING\" size=\"256\"/><Column id=\"intro\" type=\"STRING\" size=\"256\"/><Column id=\"personnel\" type=\"INT\" size=\"256\"/><Column id=\"host_id\" type=\"STRING\" size=\"256\"/><Column id=\"class_no\" type=\"INT\" size=\"256\"/><Column id=\"categ_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUp", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImg", this);
            obj._setContents("<ColumnInfo><Column id=\"fileBlob\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","30","29","177","41",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("내 모임 수정");
            obj.set_font("22pt/normal \"휴먼모음T\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","75","50.00%","131",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Static00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divUpdateUser","Static00_00:-505","116","1010","935",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("white");
            obj.set_borderRadius("20px");
            obj.set_border("1px solid darkgray");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","374","38","147","40",null,null,null,null,null,null,this.divUpdateUser.form);
            obj.set_taborder("0");
            obj.set_text("* 활동지역");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.divUpdateUser.addChild(obj.name, obj);

            obj = new Static("Static00_00","51","108","147","40",null,null,null,null,null,null,this.divUpdateUser.form);
            obj.set_taborder("1");
            obj.set_text("* 모임 이름 ");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.divUpdateUser.addChild(obj.name, obj);

            obj = new Edit("edtTitle","181","103","710","44",null,null,null,null,null,null,this.divUpdateUser.form);
            obj.set_taborder("2");
            obj.set_maxlength("20");
            obj.set_text("자이언츠 야구관람");
            this.divUpdateUser.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","49","167","131","40",null,null,null,null,null,null,this.divUpdateUser.form);
            obj.set_taborder("3");
            obj.set_text("* 모임 한줄 소개");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.divUpdateUser.addChild(obj.name, obj);

            obj = new Edit("edtIntro","181","167","710","44",null,null,null,null,null,null,this.divUpdateUser.form);
            obj.set_taborder("4");
            obj.set_maxlength("40");
            obj.set_text("같이 야구관람해요!");
            this.divUpdateUser.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","51","348","119","40",null,null,null,null,null,null,this.divUpdateUser.form);
            obj.set_taborder("5");
            obj.set_text("* 모임 상세 소개");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.divUpdateUser.addChild(obj.name, obj);

            obj = new TextArea("txtDetail","181","238","710","260",null,null,null,null,null,null,this.divUpdateUser.form);
            obj.set_taborder("6");
            obj.set_maxlength("500");
            this.divUpdateUser.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","55","807","147","40",null,null,null,null,null,null,this.divUpdateUser.form);
            obj.set_taborder("7");
            obj.set_text("* 한도 정원 ");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.divUpdateUser.addChild(obj.name, obj);

            obj = new Edit("edtPersonnel","183","806","137","37",null,null,null,null,null,null,this.divUpdateUser.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_background("whitesmoke");
            this.divUpdateUser.addChild(obj.name, obj);

            obj = new Button("btnUpdate","358","867","142","47",null,null,null,null,null,null,this.divUpdateUser.form);
            obj.set_taborder("9");
            obj.set_text("수정");
            obj.set_background("#ff6128");
            obj.set_color("white");
            obj.set_font("15pt/normal \"휴먼모음T\"");
            this.divUpdateUser.addChild(obj.name, obj);

            obj = new Static("Static00_01","51","627","147","40",null,null,null,null,null,null,this.divUpdateUser.form);
            obj.set_taborder("10");
            obj.set_text("* 모임  썸네일 ");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.divUpdateUser.addChild(obj.name, obj);

            obj = new Button("btnAddImg","717","631","67","36",null,null,null,null,null,null,this.divUpdateUser.form);
            obj.set_taborder("11");
            obj.set_text("첨부");
            obj.set_border("1px solid coral");
            obj.set_color("#ff6128");
            obj.set_background("white");
            this.divUpdateUser.addChild(obj.name, obj);

            obj = new ImageViewer("imgSumnail","183","528","510","239",null,null,null,null,null,null,this.divUpdateUser.form);
            obj.set_taborder("12");
            obj.set_stretch("fit");
            this.divUpdateUser.addChild(obj.name, obj);

            obj = new Edit("edtLocation","460","39","180","42",null,null,null,null,null,null,this.divUpdateUser.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_background("whitesmoke");
            this.divUpdateUser.addChild(obj.name, obj);

            obj = new Static("Static01","51","38","105","43",null,null,null,null,null,null,this.divUpdateUser.form);
            obj.set_taborder("14");
            obj.set_text("* 카테고리");
            obj.set_font("bold 11pt/normal \"Yu Gothic UI Semibold\"");
            this.divUpdateUser.addChild(obj.name, obj);

            obj = new Edit("edtCateg","181","39","160","37",null,null,null,null,null,null,this.divUpdateUser.form);
            obj.set_taborder("15");
            obj.set_background("whitesmoke");
            obj.set_readonly("true");
            this.divUpdateUser.addChild(obj.name, obj);

            obj = new Button("btnGetClassUser","517","867","142","47",null,null,null,null,null,null,this.divUpdateUser.form);
            obj.set_taborder("16");
            obj.set_text("회원 관리 ");
            obj.set_background("#ff6128");
            obj.set_color("white");
            obj.set_font("15pt/normal \"휴먼모음T\"");
            this.divUpdateUser.addChild(obj.name, obj);

            obj = new Static("Static03_01","894","6","26","22",null,null,null,null,null,null,this.divUpdateUser.form);
            obj.set_taborder("17");
            obj.set_text("*");
            obj.set_color("red");
            this.divUpdateUser.addChild(obj.name, obj);

            obj = new Static("Static03_00_01","913","5","87","26",null,null,null,null,null,null,this.divUpdateUser.form);
            obj.set_taborder("18");
            obj.set_text("필수입력사항");
            obj.set_color("black");
            this.divUpdateUser.addChild(obj.name, obj);

            obj = new Static("Static03","858","109","29","32",null,null,null,null,null,null,this.divUpdateUser.form);
            obj.set_taborder("19");
            obj.set_text("/ 20)");
            obj.set_font("12px/normal \"Vedana\",\"Malgun Gothic\"");
            this.divUpdateUser.addChild(obj.name, obj);

            obj = new Edit("edtCheckTitle","820","109","36","32",null,null,null,null,null,null,this.divUpdateUser.form);
            obj.set_taborder("20");
            obj.set_border("0px none");
            obj.set_font("12px/normal \"Vedana\",\"Malgun Gothic\"");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            obj.set_background("white");
            this.divUpdateUser.addChild(obj.name, obj);

            obj = new Edit("edtCheckIntro","820","173","36","32",null,null,null,null,null,null,this.divUpdateUser.form);
            obj.set_taborder("21");
            obj.set_border("0px none");
            obj.set_font("12px/normal \"Vedana\",\"Malgun Gothic\"");
            obj.set_textAlign("right");
            obj.set_maxlength("25");
            obj.set_background("white");
            obj.set_readonly("true");
            this.divUpdateUser.addChild(obj.name, obj);

            obj = new Static("Static03_00","858","173","29","32",null,null,null,null,null,null,this.divUpdateUser.form);
            obj.set_taborder("22");
            obj.set_text("/ 40)");
            obj.set_font("12px/normal \"Vedana\",\"Malgun Gothic\"");
            this.divUpdateUser.addChild(obj.name, obj);

            obj = new Edit("edtCheckDetail","807","461","47","32",null,null,null,null,null,null,this.divUpdateUser.form);
            obj.set_taborder("23");
            obj.set_border("0px none");
            obj.set_font("12px/normal \"Vedana\",\"Malgun Gothic\"");
            obj.set_textAlign("right");
            obj.set_maxlength("25");
            this.divUpdateUser.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","849","461","40","32",null,null,null,null,null,null,this.divUpdateUser.form);
            obj.set_taborder("24");
            obj.set_text("/ 500)");
            obj.set_font("12px/normal \"Vedana\",\"Malgun Gothic\"");
            this.divUpdateUser.addChild(obj.name, obj);

            obj = new Div("divbottom","0","divUpdateUser:99",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_border("0px none");
            obj.set_url("Frame::Bottom.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divUpdateUser.form
            obj = new Layout("default","",0,0,this.divUpdateUser.form,function(p){});
            this.divUpdateUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divbottom
            obj = new Layout("default","",0,0,this.divbottom.form,function(p){});
            this.divbottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,1210,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divUpdateUser.form.edtTitle","value","dsClass","title");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divUpdateUser.form.edtIntro","value","dsClass","intro");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divUpdateUser.form.txtDetail","value","dsClass","content");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divUpdateUser.form.edtPersonnel","value","dsClass","personnel");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divUpdateUser.form.imgSumnail","image","dsImg","fileBlob");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divUpdateUser.form.imgSumnail","accessibilityaction","dsClass","fileimg");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divUpdateUser.form.edtLocation","value","dsClass","location_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divUpdateUser.form.edtCateg","value","dsClass","categ_name");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame::Bottom.xfdl");
        };
        
        // User Script
        this.registerScript("updateClass.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\tobesoft\Documents\TOBESOFT\Nexacro N\projects\Together\Together\Class
        *	@FileName updateClass.xfdl
        *	@Creator 이수아
        *	@CreateDate 2022/11/27
        *	@Description 모임을 수정하는 폼
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2022/11/27		이수아		최초 생성
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

        this.updateClass_onload = function(obj,e)
        {

        	this.dsClass.addRow();
        	this.ufnTransaction(
        		"getClass1"
        		,"getClass1.do"
        		,""
        		,"dsClass=out_class"
        		,"paramClassNo="+nexacro.wrapQuote(this.fvApp.gvClassNo)
        		,"fnCallback")

        };

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/
        /**
        * @description 메세지 콜백
        */

        this.fnCallback = function(trId){

        	if(trId == "getClass1"){
        		trace(this.dsClass.saveXML());
        		this.fn_setImg(this.dsClass.getColumn(0,"sumnail_img"));

        	}else if(trId == "updateClass"){ // 수정
        		this.ufnAlert("msg.update.success");
        		this.fvObjApp.gvMainFrame.set_formurl("");
        		this.fvObjApp.gvMainFrame.set_formurl("Together::Class/updateClass.xfdl");
        	}


        }



        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/
        /**
        * @description 파일 첨부 후 닫을 떄 발생하는 이벤트
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
        			this.dsUp.setColumn(nRow, "FILE_NAME", sFileName); // 처음 넣는 이름?..
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

        	this.dsClass.setColumn(this.dsClass.rowposition, "sumnail_img", objDs.getColumn(0, "FILE_ID"));
        	this.fn_setImg(objDs.getColumn(0, "FILE_ID"));

        };

        /**
        * @description 파일 이름의 경로를 찾아 이미지를 가져오는 함수
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
        * @description 첨부 클릭 시
        */
        this.divUpdateUser_btnAddImg_onclick = function(obj,e)
        {
        	this.FileDialog.open("FileSelect", 3, "%UserApp%"); // f1 open 확인
        };

        /**
        * @description 수정하기 클릭
        */
        this.Div00_Button00_onclick = function(obj,e)
        {

        	if(this.ufnIsNull(this.divUpdateUser.form.edtTitle.value)){
        		this.ufnAlert("msg.err.validator.required", ["모임 이름"]);
        		this.divUpdateUser.form.edtTitle.setFocus();
        		return;
        	}
        	if(this.divUpdateUser.form.edtTitle.value.length < 5){
        		this.ufnAlert("msg.err.validator.required", ["모임 이름"], ["5"], ["20"]);
        		this.divUpdateUser.form.edtTitle.setFocus();
        		return;
        	}
        	if(this.ufnIsNull(this.divUpdateUser.form.edtIntro.value)){
        		this.ufnAlert("msg.err.validator.required", ["모임 한줄소개"]);
        		this.divUpdateUser.form.edtIntro.setFocus();
        		return;
        	}
        	if(this.divUpdateUser.form.edtIntro.value.length < 5){
        		this.ufnAlert("msg.err.validator.required", ["모임 한줄소개"], ["5"], ["40"]);
        		this.divUpdateUser.form.edtIntro.setFocus();
        		return;
        	}
        	if(this.ufnIsNull(this.divUpdateUser.form.txtDetail.value)){
        		this.ufnAlert("msg.err.validator.required", ["모임 상세소개"]);
        		this.divUpdateUser.form.txtDetail.setFocus();
        		return;
        	}
        	if(this.dsImg.getColumn(0, "fileBlob") == null){
        		this.ufnAlert("msg.err.validator.required", ["모임 썸네일"]);
        		return;
        	}

        	this.dsClass.addRow();
        	this.dsClass.setColumn(this.dsClass.rowposition, "host_id", this.fvObjApp.gdsUser.getColumn(0, "userId"));
        	this.dsClass.setColumn(this.dsClass.rowposition, "class_no", this.fvApp.gvClassNo);

        	trace("====" + this.dsClass.saveXML());

        	this.ufnTransaction(
        		"updateClass"
        		,"updateClass.do"
        		,"dsClass=dsClass:U"
        		,"dsClass=out_class"
        		,""
        		,"fnCallback")
        };


        /**
        * @description 회원관리 클릭 시
        */
        this.divUpdateUser_btnGetClassUser_onclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("chf_popup1"
        		, 0 //vleft
        		, 0 // vtop
        		, 600 // 넓이
        		, 600 // 높이
        		, null
        		, null
        		, "Together::Class/getClassUser_Sub01.xfdl");

        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)") // 컬러값
        	objChildFrame.set_dragmovetype("all");
        	var objParam = { param1:this.fvApp.gvClassNo};

        	objChildFrame.showModal( this.getOwnerFrame() // 현재 자신의 폼에
        		, objParam // 파라미터 전달
        		, this // 폼에대한 정보 넘겨주고
        		, "fn_popupCallback");	// 값을 전달받기위한 callback
        };

        /**
        * @description 모임 제목 글자 수 체크
        */
        this.divUpdateUser_edtTitle_onkeyup = function(obj,e)
        {
        	this.divUpdateUser.form.edtCheckTitle.set_value("(" + this.divUpdateUser.form.edtTitle.value.length);
        };

        /**
        * @description 모임 한줄소개 글자 수 체크
        */
        this.divUpdateUser_edtIntro_onkeyup = function(obj,e)
        {
        	this.divUpdateUser.form.edtCheckIntro.set_value("(" + this.divUpdateUser.form.edtIntro.value.length);
        };

        /**
        * @description 모임 상세소개 글자 수 체크
        */
        this.divUpdateUser_txtDetail_onkeyup = function(obj,e)
        {
        	this.divUpdateUser.form.edtCheckDetail.set_value("(" + this.divUpdateUser.form.txtDetail.value.length);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.updateClass_onload,this);
            this.addEventHandler("onclick",this.updateClass_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.divUpdateUser.form.edtTitle.addEventHandler("onkeyup",this.divUpdateUser_edtTitle_onkeyup,this);
            this.divUpdateUser.form.edtIntro.addEventHandler("onkeyup",this.divUpdateUser_edtIntro_onkeyup,this);
            this.divUpdateUser.form.txtDetail.addEventHandler("onkeyup",this.divUpdateUser_txtDetail_onkeyup,this);
            this.divUpdateUser.form.edtPersonnel.addEventHandler("onchanged",this.Div00_Edit01_onchanged,this);
            this.divUpdateUser.form.btnUpdate.addEventHandler("onclick",this.Div00_Button00_onclick,this);
            this.divUpdateUser.form.Static00_01.addEventHandler("onclick",this.Div00_Static00_01_onclick,this);
            this.divUpdateUser.form.btnAddImg.addEventHandler("onclick",this.divUpdateUser_btnAddImg_onclick,this);
            this.divUpdateUser.form.edtLocation.addEventHandler("onchanged",this.Div00_Edit02_onchanged,this);
            this.divUpdateUser.form.btnGetClassUser.addEventHandler("onclick",this.divUpdateUser_btnGetClassUser_onclick,this);
            this.divUpdateUser.form.Static03_00_01.addEventHandler("onclick",this.DivAddUser_Static03_00_onclick,this);
            this.FileDialog.addEventHandler("onclose",this.FileDialog_onclose,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
        };
        this.loadIncludeScript("updateClass.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
