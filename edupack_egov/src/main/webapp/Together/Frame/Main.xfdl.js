(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Main");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1830);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsClassNew", this);
            obj._setContents("<ColumnInfo><Column id=\"sumnail_img\" type=\"STRING\" size=\"256\"/><Column id=\"location_name\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"intro\" type=\"STRING\" size=\"256\"/><Column id=\"class_user_cnt\" type=\"INT\" size=\"256\"/><Column id=\"fileimg\" type=\"STRING\" size=\"256\"/><Column id=\"class_no\" type=\"INT\" size=\"256\"/><Column id=\"categ_name\" type=\"STRING\" size=\"256\"/><Column id=\"filesize\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsClassBest", this);
            obj._setContents("<ColumnInfo><Column id=\"sumnail_img\" type=\"STRING\" size=\"256\"/><Column id=\"location_name\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"intro\" type=\"STRING\" size=\"256\"/><Column id=\"class_user_cnt\" type=\"INT\" size=\"256\"/><Column id=\"fileimg\" type=\"STRING\" size=\"256\"/><Column id=\"class_no\" type=\"INT\" size=\"256\"/><Column id=\"categ_name\" type=\"STRING\" size=\"256\"/><Column id=\"filesize\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsClassLocation", this);
            obj._setContents("<ColumnInfo><Column id=\"sumnail_img\" type=\"STRING\" size=\"256\"/><Column id=\"location_name\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"intro\" type=\"STRING\" size=\"256\"/><Column id=\"class_user_cnt\" type=\"INT\" size=\"256\"/><Column id=\"fileimg\" type=\"STRING\" size=\"256\"/><Column id=\"class_no\" type=\"INT\" size=\"256\"/><Column id=\"categ_name\" type=\"STRING\" size=\"256\"/><Column id=\"filesize\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMessage", this);
            obj._setContents("<ColumnInfo><Column id=\"TOPIC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPIC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","3","306","50.00%","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Static01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","Static01:-640","340","117","68",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("BEST 모임");
            obj.set_font("18pt/normal \"휴먼모음T\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","Static01:-640","820","219","68",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("신규 모임");
            obj.set_font("18pt/normal \"휴먼모음T\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","Static01:-640","1306","219","68",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("관심지역 추천모임");
            obj.set_font("18pt/normal \"휴먼모음T\"");
            obj.set_border("0px none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divMain","Static01:-640","400","1277","402",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Div("divNewMain","Static01:-640","885","1277","402",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divBanner","0","10",null,"280","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Area");
            obj.set_url("Frame::MainStep_Sub.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divLocationMain","Static01:-643","1367","1280","402",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_border("0px none");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divbottom","0","1769",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_border("0px none");
            obj.set_url("Frame::Bottom.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divNewMain
            obj = new Layout("default","",0,0,this.divNewMain.form,function(p){});
            this.divNewMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBanner
            obj = new Layout("default","",0,0,this.divBanner.form,function(p){});
            this.divBanner.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLocationMain.form
            obj = new Layout("default","",0,0,this.divLocationMain.form,function(p){});
            this.divLocationMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divbottom
            obj = new Layout("default","",0,0,this.divbottom.form,function(p){});
            this.divbottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,1830,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("1");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame::MainStep_Sub.xfdl");
            this._addPreloadList("fdl","Frame::Bottom.xfdl");
        };
        
        // User Script
        this.registerScript("Main.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\tobesoft\Documents\TOBESOFT\Nexacro N\projects\Together\Frame
        *	@FileName Main.xfdl
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

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/
        this.fvApp = nexacro.getApplication();
        this.fvObjApp = this.ufnGetApplication();
        this.fvStep = 0;
        this.elapseTime = 2000;

        /**************************************************************************
        * FORM EVENT 영역(onload, onclose)
        **************************************************************************/
        /**
        * @description 화면 화면이 load될 때 처리할 로직(필수)
        */

        this.Main_onload = function(obj,e)
        {

        	this.stepselector.set_visible(false);
        	this.set_stepshowtype("action");

        	this.setTimer(0, this.elapseTime);

        	this.fnPageInit();

        };

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/
        /**
        * @description 메세지 콜백
        */

        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	if(svcID == "getMain"){

        		this.fvInsert(); // 베스트
        		this.fvInsert1(); // 신규

        		if(this.fvObjApp.gdsUser.getColumn(0, "userId") !=null){ // 로그인되어있을떄
        			this.Static00_00_00.set_visible(true);
        			this.fvInsert2(); // 관심지역 추천
        			this.resetScroll();

        		}else{ // 비로그인시
        			this.set_height(1100);
        			this.Static00_00_00.set_visible(false);
        			this.resetScroll();
        		}


        	}

        };


        /**************************************************************************
        * 사용자 FUNCTION 영역
        **************************************************************************/
        /**
        * @description 메인 배너 시간처리 함수
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


        /**
        * @description Best, 신규, 관심지역 추천 모임 이벤트 함수
        */
        this.fnPageInit = function ()
        {
        	//삭제
        	this.fvRemove();
        	this.dsClassBest.clearData();

        	this.fvRemove1();
        	this.dsClassNew.clearData();

        	this.fvRemove2();
        	this.dsClassLocation.clearData();

        	var paramLocationNo = this.fvObjApp.gdsUser.getColumn(this.fvObjApp.gdsUser.rowposition,"locationNo");

        	this.ufnTransaction(  // BEST, new, 관심지역  추천 모임 가져오기
        		"getMain"
        		,"getMain.do"
        		,""
        		,"dsClassBest=out_class dsClassNew=out_class1 dsClassLocation=out_class2"
        		,"paramLocationNo="+nexacro.wrapQuote(paramLocationNo)
        		,"fnCallback");

        };


        /**
        * @description 베스트 모임 동적 생성 함수
        */
        this.fvInsert = function()
        {
        	var xPos = 0;  //left
        	var yPos = 0;  //top


        	for(var i=0; i<this.dsClassBest.getRowCount(); i++)
        	{
        		//trace(i+"---"+xPos);

        		if(i==4)
        		{
        			yPos = yPos+530; // top
        			xPos = 0;	// left
        		}

        		var objDiv = "objDiv" + i;
        		objDiv = new Div();  //내가 만들려고하는 오브젝트, 그리드를 만들고싶으면 new grid(); 콤보도 마찬가지로 표현..
        		objDiv.init("div" + i, xPos, yPos, 320, 400); // 컴포넌트에 대한 초기값, (아이디, left, top, width, height)
        		this.divMain.form.addChild("div" + i, objDiv); // 생성했는데 화면에다가 붙여주는 것
        		//objDiv.set_border("1px solid gray");  // 배경색깔
        		objDiv.show();  // 화면에보여줄려고 하는 메소드 show

        		xPos  = xPos+320;

        		var objDivTmp = "div"+i;
        		objDivTmp = this.divMain.form.components[objDivTmp];

        		var objImageViewer0 = new ImageViewer();
        		objImageViewer0.init("ima0", 10, 0, 300, 270);
        		objDivTmp.form.addChild("ima0", objImageViewer0);
        		objImageViewer0.set_image(this.dsClassBest.getColumn(i, "fileimg"));
        		objImageViewer0.class_no = this.dsClassBest.getColumn(i, "class_no"); // 이미지뷰어에 class_no값 넣어주기
        		objImageViewer0.set_stretch("fit");
        		//objImageViewer0.set_text( this.dsClass.getColumn(i, "class_no"));
        		//objImageViewer0.set_border("1px solid gray");
        		objImageViewer0.show();

        		objDivTmp.form.ima0.addEventHandler("onclick", this.fnClassNo, this);


        		var objStatic0 = new Static();
        		objStatic0.init("sta0", 240, 268, 70, 33);
        		objDivTmp.form.addChild("sta0", objStatic0);
        		//objStatic0.set_border("1px solid gray");
        		objStatic0.set_textAlign("right");
        		objStatic0.set_text(this.dsClassBest.getColumn(i, "location_name"));
        		objStatic0.set_font("10pt/normal 맑은 고딕");
        		objStatic0.show();

        		var objStatic1 = new Static();
        		objStatic1.init("sta1", 10, 268, 112, 33);
        		objDivTmp.form.addChild("sta1", objStatic1);
        		//objStatic1.set_border("1px solid gray");
        		objStatic1.set_text("회원수"+" : "+this.dsClassBest.getColumn(i, "class_user_cnt")+"명");
        		objStatic1.set_font("10pt/normal 맑은 고딕");
        		objStatic1.set_color("red");
        		objStatic1.show();

        		var objStatic2 = new Static();
        		objStatic2.init("sta2", 10, 295, 300, 40);
        		objDivTmp.form.addChild("sta2", objStatic2);
        		//objStatic2.set_border("1px solid gray");
        		objStatic2.set_text(this.dsClassBest.getColumn(i, "title"));
        		objStatic2.set_font("bold 14px/normal 맑은 고딕");
        		objStatic2.show();

        		var objStatic3 = new Static();
        		objStatic3.init("sta3", 10, 325, 300, 50);
        		objDivTmp.form.addChild("sta3", objStatic3);
        		objStatic3.set_border("1px solid gainsboro, 0px none, 0px none");
        		objStatic3.set_text(this.dsClassBest.getColumn(i, "intro"));
        		objStatic3.set_font("10pt/normal 맑은 고딕");
        		objStatic3.show();

        	}
        }

        /**
        * @description 베스트모임 삭제, 초기화  함수
        */
        this.fvRemove = function()
        {
        	for(var i=0; i<this.dsClassBest.getRowCount(); i++)
        	{
        		//trace("건수@@@@@@"+this.dsClass.getRowCount());
        		var objDivTmp = "div" + i;

        		//if(this.isValidObject(objDivTmp)){

        		var objBtn = this.removeChild(objDivTmp);

        		trace("@@@@"+objBtn);


        		// Form에 동적으로 추가된 컴포넌트를 제거하는 메소드
        		objBtn.destroy(); //destroy와 null까지해줘야 메모리까지 삭제, 한번더 초기화 (그래서 쌍으로 둘다 써주기)
        		objBtn = null;
        		//}

        	}

        }

        /**
        * @description 베스트모임의 이미지 클릭 시, 해당 이미지의 모임 상세 폼으로 이동
        */
        this.fnClassNo = function(obj)
        {
        	trace("@@@클래스넘버"+obj.class_no);
        	this.fvApp.gvClassNo = obj.class_no; // 넣어주는 것
        	//alert(this.fvApp.gvClassNo);
        	this.fvObjApp.gvMainFrame.set_formurl("Together::Class/getClass.xfdl");
        }

        /**
        * @description 신규 모임 동적 생성
        */

        this.fvInsert1 = function()
        {
        	var xNewPos = 0;  //left
        	var yNewPos =0;  //top


        	for(var i=0; i<this.dsClassNew.getRowCount(); i++)
        	{
        		//trace(i+"---"+xPos);

        		if(i==4)
        		{
        			yNewPos = yNewPos+530; // top
        			xNewPos = 0;	// left
        		}

        		var objNewDiv = "objNewDiv" + i;
        		objNewDiv = new Div();  //내가 만들려고하는 오브젝트, 그리드를 만들고싶으면 new grid(); 콤보도 마찬가지로 표현..
        		objNewDiv.init("newDiv" + i, xNewPos, yNewPos, 320, 400); // 컴포넌트에 대한 초기값, (아이디, left, top, width, height)
        		this.divNewMain.form.addChild("newDiv" + i, objNewDiv); // 생성했는데 화면에다가 붙여주는 것
        		//objNewDiv.set_border("1px solid gray");  // 배경색깔
        		objNewDiv.show();  // 화면에보여줄려고 하는 메소드 show

        		xNewPos  = xNewPos+320;

        		var objNewDivTmp = "newDiv"+i;
        		objNewDivTmp = this.divNewMain.form.components[objNewDivTmp];
        		//trace("@@@@@@@@@@"+objDivTmp);

        		var objNewImageViewer0 = new ImageViewer();
        		objNewImageViewer0.init("newIma0", 10, 0, 300, 270);
        		objNewDivTmp.form.addChild("newIma0", objNewImageViewer0);
        		objNewImageViewer0.set_image(this.dsClassNew.getColumn(i, "fileimg"));
        		objNewImageViewer0.set_stretch("fit");
        		objNewImageViewer0.class_no = this.dsClassNew.getColumn(i, "class_no"); // 이미지뷰어에 class_no값 넣어주기
        		//objNewImageViewer0.set_border("1px solid gray");
        		//objNewImageViewer0.set_text( this.dsClass.getColumn(i, "sumnail_img"));
        		objNewImageViewer0.show();


        		objNewDivTmp.form.newIma0.addEventHandler("onclick", this.fnClassNo1, this);

        		var objNewStatic0 = new Static();
        		objNewStatic0.init("newSta0", 240, 268, 70, 33);
        		objNewDivTmp.form.addChild("newSta0", objNewStatic0);
        		//objNewStatic0.set_border("1px solid gray");
        		objNewStatic0.set_textAlign("right");
        		objNewStatic0.set_text(this.dsClassNew.getColumn(i, "location_name"));
        		objNewStatic0.set_font("10pt/normal 맑은 고딕");
        		objNewStatic0.show();

        		var objNewStatic1 = new Static();
        		objNewStatic1.init("newSta1", 10, 268, 112, 33);
        		objNewDivTmp.form.addChild("newSta1", objNewStatic1);
        		//objNewStatic1.set_border("1px solid gray");
        		objNewStatic1.set_text("회원수"+" : "+this.dsClassNew.getColumn(i, "class_user_cnt")+"명")
        		objNewStatic1.set_font("10pt/normal 맑은 고딕");
        		objNewStatic1.set_color("red");
        		objNewStatic1.show();

        		var objNewStatic2 = new Static();
        		objNewStatic2.init("newSta2", 10, 295, 300, 40);
        		objNewDivTmp.form.addChild("newSta2", objNewStatic2);
        		//objNewStatic2.set_border("1px solid gray");
        		objNewStatic2.set_text(this.dsClassNew.getColumn(i, "title"));
        		objNewStatic2.set_font("bold 14px/normal 맑은 고딕");
        		objNewStatic2.show();

        		var objNewStatic3 = new Static();
        		objNewStatic3.init("newSta3", 10, 325, 300, 50);
        		objNewDivTmp.form.addChild("newSta3", objNewStatic3);
        		//objNewStatic3.set_border("1px solid gray");
        		objNewStatic3.set_border("1px solid gainsboro, 0px none, 0px none");
        		objNewStatic3.set_text(this.dsClassNew.getColumn(i, "intro"));
        		objNewStatic3.set_font("10pt/normal 맑은 고딕");
        		objNewStatic3.show();
        	}
        }

        /**
        * @description 신규 모임 삭제, 초기화
        */
        this.fvRemove1 = function()
        {
        	for(var i=0; i<this.dsClassNew.getRowCount(); i++)
        	{
        		var objNewDivTmp = "newDiv" + i;

        		var objNewBtn = this.removeChild(objNewDivTmp);

        		// Form에 동적으로 추가된 컴포넌트를 제거하는 메소드
        		objNewBtn.destroy(); //destroy와 null까지해줘야 메모리까지 삭제, 한번더 초기화 (그래서 쌍으로 둘다 써주기)
        		objNewBtn = null;
        		//}

        	}

        }

        /**
        * @description 신규 모임의 이미지 클릭 시 해당 이미지의 모임상세 폼으로 이동
        */
        this.fnClassNo1 = function(obj)
        {

        	this.fvApp.gvClassNo = obj.class_no; // 넣어주는 것
        	this.fvObjApp.gvMainFrame.set_formurl("Together::Class/getClass.xfdl")
        }


        /**
        * @description 관심지역 추천모임 동적 생성
        */

        this.fvInsert2 = function()
        {
        	var xLoPos = 0;  //left
        	var yLoPos =0;  //top


        	for(var i=0; i<this.dsClassLocation.getRowCount(); i++)
        	{

        		if(i==4)
        		{
        			yLoPos = yLoPos+573; // top
        			xLoPos = 0;	// left
        		}

        		var objLoDiv = "objLoDiv" + i;
        		objLoDiv = new Div();  //내가 만들려고하는 오브젝트, 그리드를 만들고싶으면 new grid(); 콤보도 마찬가지로 표현..
        		objLoDiv.init("loDiv" + i, xLoPos, yLoPos, 320, 400); // 컴포넌트에 대한 초기값, (아이디, left, top, width, height)
        		this.divLocationMain.form.addChild("loDiv" + i, objLoDiv); // 생성했는데 화면에다가 붙여주는 것
        		//objLoDiv.set_border("1px solid white");  // 배경색깔
        		objLoDiv.show();  // 화면에보여줄려고 하는 메소드 show

        		xLoPos  = xLoPos+320;

        		var objLoDivTmp = "loDiv"+i;
        		objLoDivTmp = this.divLocationMain.form.components[objLoDivTmp];

        		var objLoImageViewer0 = new ImageViewer();
        		objLoImageViewer0.init("loIma0", 10, 0, 300, 270);
        		objLoDivTmp.form.addChild("loIma0", objLoImageViewer0);
        		objLoImageViewer0.set_image(this.dsClassLocation.getColumn(i, "fileimg"));
        		objLoImageViewer0.set_stretch("fit");
        		objLoImageViewer0.class_no = this.dsClassLocation.getColumn(i, "class_no"); // 이미지뷰어에 class_no값 넣어주기
        		//objLoImageViewer0.set_border("1px solid gray");
        		//objLoImageViewer0.set_text( this.dsClass.getColumn(i, "sumnail_img"));
        		objLoImageViewer0.show();


        		objLoDivTmp.form.loIma0.addEventHandler("onclick", this.fnClassNo2, this);

        		var objLoStatic0 = new Static();
        		objLoStatic0.init("loSta0", 240, 268, 70, 33);
        		objLoDivTmp.form.addChild("loSta0", objLoStatic0);
        		//objLoStatic0.set_border("1px solid gray");
        		objLoStatic0.set_textAlign("right");
        		objLoStatic0.set_text(this.dsClassLocation.getColumn(i, "location_name"));
        		objLoStatic0.set_font("10pt/normal 맑은 고딕");
        		objLoStatic0.show();

        		var objLoStatic1 = new Static();
        		objLoStatic1.init("loSta1", 10, 268, 112, 33);
        		objLoDivTmp.form.addChild("loSta1", objLoStatic1);
        		//objLoStatic1.set_border("1px solid gray");
        		objLoStatic1.set_text("회원수"+" : "+this.dsClassLocation.getColumn(i, "class_user_cnt")+"명");
        		objLoStatic1.set_font("10pt/normal 맑은 고딕");
        		objLoStatic1.set_color("red");
        		objLoStatic1.show();

        		var objLoStatic2 = new Static();
        		objLoStatic2.init("loSta2", 10, 295, 300, 40);
        		objLoDivTmp.form.addChild("loSta2", objLoStatic2);
        		//objLoStatic2.set_border("1px solid gray");
        		objLoStatic2.set_font("bold 11pt/normal, Berlin Sans FB");
        		objLoStatic2.set_text(this.dsClassLocation.getColumn(i, "title"));
        		objLoStatic2.set_font("bold 14px/normal 맑은 고딕");
        		objLoStatic2.show();

        		var objLoStatic3 = new Static();
        		objLoStatic3.init("loSta3", 10, 325, 300, 50);
        		objLoDivTmp.form.addChild("loSta3", objLoStatic3);
        		//objLoStatic3.set_border("1px solid gray");
        		objLoStatic3.set_text(this.dsClassLocation.getColumn(i, "intro"));
        		objLoStatic3.set_font("10pt/normal 맑은 고딕");
        		objLoStatic3.set_border("1px solid gainsboro, 0px none, 0px none");
        		objLoStatic3.show();

        	}
        }

        /**
        * @description 관심지역 추천 모임 초기화, 삭제
        */
        this.fvRemove2 = function()
        {
        	for(var i=0; i<this.dsClassLocation.getRowCount(); i++)
        	{

        		var objLoDivTmp = "loDiv" + i;

        		var objLoBtn = this.removeChild(objLoDivTmp);

        		trace("@@@@"+objLoBtn);


        		// Form에 동적으로 추가된 컴포넌트를 제거하는 메소드
        		objLoBtn.destroy(); //destroy와 null까지해줘야 메모리까지 삭제, 한번더 초기화 (그래서 쌍으로 둘다 써주기)
        		objLoBtn = null;


        	}

        }

        /**
        * @description 관심지역 추천 모임의 이미지 클릭 시, 해당 이미지의 상세폼으로 이동
        */
        this.fnClassNo2 = function(obj)
        {
        	trace("@@@클래스넘버"+obj.class_no);
        	this.fvApp.gvClassNo = obj.class_no; // 넣어주는 것
        	this.fvObjApp.gvMainFrame.set_formurl("Together::Class/getClass.xfdl")
        }

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/
        /**
        * @description 배너의 앞으로 가기 클릭
        */
        this.btnPre_onclick = function(obj,e)
        {
        	this.killTimer(0);
        	this.stepselector.set_stepindex(--this.fvStep);
        };

        /**
        * @description 배너의 뒤로 가기 클릭
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
            this.addEventHandler("onload",this.Main_onload,this);
            this.addEventHandler("onactivate",this.Main_onactivate,this);
            this.addEventHandler("onsize",this.Main_onsize,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
