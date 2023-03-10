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
            obj.set_text("BEST ??????");
            obj.set_font("18pt/normal \"????????????T\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","Static01:-640","820","219","68",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("?????? ??????");
            obj.set_font("18pt/normal \"????????????T\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","Static01:-640","1306","219","68",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("???????????? ????????????");
            obj.set_font("18pt/normal \"????????????T\"");
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
        *	?????? ????????? ??????
        *	@MenuPath C:\Users\tobesoft\Documents\TOBESOFT\Nexacro N\projects\Together\Frame
        *	@FileName Main.xfdl
        *	@Creator ?????????
        *	@CreateDate 2022/11/15
        *	@Description ?????? ??? ?????? ??????
        ******************?????? ?????? ??????**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2022/11/15		?????????		?????? ??????
        *
        *
        */

        /**************************************************************************
        * FORM ?????? ?????? ?????? (fv)
        **************************************************************************/
        this.fvApp = nexacro.getApplication();
        this.fvObjApp = this.ufnGetApplication();
        this.fvStep = 0;
        this.elapseTime = 2000;

        /**************************************************************************
        * FORM EVENT ??????(onload, onclose)
        **************************************************************************/
        /**
        * @description ?????? ????????? load??? ??? ????????? ??????(??????)
        */

        this.Main_onload = function(obj,e)
        {

        	this.stepselector.set_visible(false);
        	this.set_stepshowtype("action");

        	this.setTimer(0, this.elapseTime);

        	this.fnPageInit();

        };

        /**************************************************************************
        * CALLBACK ?????? ????????????(Transaction, Popup)
        **************************************************************************/
        /**
        * @description ????????? ??????
        */

        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	if(svcID == "getMain"){

        		this.fvInsert(); // ?????????
        		this.fvInsert1(); // ??????

        		if(this.fvObjApp.gdsUser.getColumn(0, "userId") !=null){ // ????????????????????????
        			this.Static00_00_00.set_visible(true);
        			this.fvInsert2(); // ???????????? ??????
        			this.resetScroll();

        		}else{ // ???????????????
        			this.set_height(1100);
        			this.Static00_00_00.set_visible(false);
        			this.resetScroll();
        		}


        	}

        };


        /**************************************************************************
        * ????????? FUNCTION ??????
        **************************************************************************/
        /**
        * @description ?????? ?????? ???????????? ??????
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
        * @description Best, ??????, ???????????? ?????? ?????? ????????? ??????
        */
        this.fnPageInit = function ()
        {
        	//??????
        	this.fvRemove();
        	this.dsClassBest.clearData();

        	this.fvRemove1();
        	this.dsClassNew.clearData();

        	this.fvRemove2();
        	this.dsClassLocation.clearData();

        	var paramLocationNo = this.fvObjApp.gdsUser.getColumn(this.fvObjApp.gdsUser.rowposition,"locationNo");

        	this.ufnTransaction(  // BEST, new, ????????????  ?????? ?????? ????????????
        		"getMain"
        		,"getMain.do"
        		,""
        		,"dsClassBest=out_class dsClassNew=out_class1 dsClassLocation=out_class2"
        		,"paramLocationNo="+nexacro.wrapQuote(paramLocationNo)
        		,"fnCallback");

        };


        /**
        * @description ????????? ?????? ?????? ?????? ??????
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
        		objDiv = new Div();  //?????? ?????????????????? ????????????, ???????????? ?????????????????? new grid(); ????????? ??????????????? ??????..
        		objDiv.init("div" + i, xPos, yPos, 320, 400); // ??????????????? ?????? ?????????, (?????????, left, top, width, height)
        		this.divMain.form.addChild("div" + i, objDiv); // ??????????????? ??????????????? ???????????? ???
        		//objDiv.set_border("1px solid gray");  // ????????????
        		objDiv.show();  // ???????????????????????? ?????? ????????? show

        		xPos  = xPos+320;

        		var objDivTmp = "div"+i;
        		objDivTmp = this.divMain.form.components[objDivTmp];

        		var objImageViewer0 = new ImageViewer();
        		objImageViewer0.init("ima0", 10, 0, 300, 270);
        		objDivTmp.form.addChild("ima0", objImageViewer0);
        		objImageViewer0.set_image(this.dsClassBest.getColumn(i, "fileimg"));
        		objImageViewer0.class_no = this.dsClassBest.getColumn(i, "class_no"); // ?????????????????? class_no??? ????????????
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
        		objStatic0.set_font("10pt/normal ?????? ??????");
        		objStatic0.show();

        		var objStatic1 = new Static();
        		objStatic1.init("sta1", 10, 268, 112, 33);
        		objDivTmp.form.addChild("sta1", objStatic1);
        		//objStatic1.set_border("1px solid gray");
        		objStatic1.set_text("?????????"+" : "+this.dsClassBest.getColumn(i, "class_user_cnt")+"???");
        		objStatic1.set_font("10pt/normal ?????? ??????");
        		objStatic1.set_color("red");
        		objStatic1.show();

        		var objStatic2 = new Static();
        		objStatic2.init("sta2", 10, 295, 300, 40);
        		objDivTmp.form.addChild("sta2", objStatic2);
        		//objStatic2.set_border("1px solid gray");
        		objStatic2.set_text(this.dsClassBest.getColumn(i, "title"));
        		objStatic2.set_font("bold 14px/normal ?????? ??????");
        		objStatic2.show();

        		var objStatic3 = new Static();
        		objStatic3.init("sta3", 10, 325, 300, 50);
        		objDivTmp.form.addChild("sta3", objStatic3);
        		objStatic3.set_border("1px solid gainsboro, 0px none, 0px none");
        		objStatic3.set_text(this.dsClassBest.getColumn(i, "intro"));
        		objStatic3.set_font("10pt/normal ?????? ??????");
        		objStatic3.show();

        	}
        }

        /**
        * @description ??????????????? ??????, ?????????  ??????
        */
        this.fvRemove = function()
        {
        	for(var i=0; i<this.dsClassBest.getRowCount(); i++)
        	{
        		//trace("??????@@@@@@"+this.dsClass.getRowCount());
        		var objDivTmp = "div" + i;

        		//if(this.isValidObject(objDivTmp)){

        		var objBtn = this.removeChild(objDivTmp);

        		trace("@@@@"+objBtn);


        		// Form??? ???????????? ????????? ??????????????? ???????????? ?????????
        		objBtn.destroy(); //destroy??? null??????????????? ??????????????? ??????, ????????? ????????? (????????? ????????? ?????? ?????????)
        		objBtn = null;
        		//}

        	}

        }

        /**
        * @description ?????????????????? ????????? ?????? ???, ?????? ???????????? ?????? ?????? ????????? ??????
        */
        this.fnClassNo = function(obj)
        {
        	trace("@@@???????????????"+obj.class_no);
        	this.fvApp.gvClassNo = obj.class_no; // ???????????? ???
        	//alert(this.fvApp.gvClassNo);
        	this.fvObjApp.gvMainFrame.set_formurl("Together::Class/getClass.xfdl");
        }

        /**
        * @description ?????? ?????? ?????? ??????
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
        		objNewDiv = new Div();  //?????? ?????????????????? ????????????, ???????????? ?????????????????? new grid(); ????????? ??????????????? ??????..
        		objNewDiv.init("newDiv" + i, xNewPos, yNewPos, 320, 400); // ??????????????? ?????? ?????????, (?????????, left, top, width, height)
        		this.divNewMain.form.addChild("newDiv" + i, objNewDiv); // ??????????????? ??????????????? ???????????? ???
        		//objNewDiv.set_border("1px solid gray");  // ????????????
        		objNewDiv.show();  // ???????????????????????? ?????? ????????? show

        		xNewPos  = xNewPos+320;

        		var objNewDivTmp = "newDiv"+i;
        		objNewDivTmp = this.divNewMain.form.components[objNewDivTmp];
        		//trace("@@@@@@@@@@"+objDivTmp);

        		var objNewImageViewer0 = new ImageViewer();
        		objNewImageViewer0.init("newIma0", 10, 0, 300, 270);
        		objNewDivTmp.form.addChild("newIma0", objNewImageViewer0);
        		objNewImageViewer0.set_image(this.dsClassNew.getColumn(i, "fileimg"));
        		objNewImageViewer0.set_stretch("fit");
        		objNewImageViewer0.class_no = this.dsClassNew.getColumn(i, "class_no"); // ?????????????????? class_no??? ????????????
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
        		objNewStatic0.set_font("10pt/normal ?????? ??????");
        		objNewStatic0.show();

        		var objNewStatic1 = new Static();
        		objNewStatic1.init("newSta1", 10, 268, 112, 33);
        		objNewDivTmp.form.addChild("newSta1", objNewStatic1);
        		//objNewStatic1.set_border("1px solid gray");
        		objNewStatic1.set_text("?????????"+" : "+this.dsClassNew.getColumn(i, "class_user_cnt")+"???")
        		objNewStatic1.set_font("10pt/normal ?????? ??????");
        		objNewStatic1.set_color("red");
        		objNewStatic1.show();

        		var objNewStatic2 = new Static();
        		objNewStatic2.init("newSta2", 10, 295, 300, 40);
        		objNewDivTmp.form.addChild("newSta2", objNewStatic2);
        		//objNewStatic2.set_border("1px solid gray");
        		objNewStatic2.set_text(this.dsClassNew.getColumn(i, "title"));
        		objNewStatic2.set_font("bold 14px/normal ?????? ??????");
        		objNewStatic2.show();

        		var objNewStatic3 = new Static();
        		objNewStatic3.init("newSta3", 10, 325, 300, 50);
        		objNewDivTmp.form.addChild("newSta3", objNewStatic3);
        		//objNewStatic3.set_border("1px solid gray");
        		objNewStatic3.set_border("1px solid gainsboro, 0px none, 0px none");
        		objNewStatic3.set_text(this.dsClassNew.getColumn(i, "intro"));
        		objNewStatic3.set_font("10pt/normal ?????? ??????");
        		objNewStatic3.show();
        	}
        }

        /**
        * @description ?????? ?????? ??????, ?????????
        */
        this.fvRemove1 = function()
        {
        	for(var i=0; i<this.dsClassNew.getRowCount(); i++)
        	{
        		var objNewDivTmp = "newDiv" + i;

        		var objNewBtn = this.removeChild(objNewDivTmp);

        		// Form??? ???????????? ????????? ??????????????? ???????????? ?????????
        		objNewBtn.destroy(); //destroy??? null??????????????? ??????????????? ??????, ????????? ????????? (????????? ????????? ?????? ?????????)
        		objNewBtn = null;
        		//}

        	}

        }

        /**
        * @description ?????? ????????? ????????? ?????? ??? ?????? ???????????? ???????????? ????????? ??????
        */
        this.fnClassNo1 = function(obj)
        {

        	this.fvApp.gvClassNo = obj.class_no; // ???????????? ???
        	this.fvObjApp.gvMainFrame.set_formurl("Together::Class/getClass.xfdl")
        }


        /**
        * @description ???????????? ???????????? ?????? ??????
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
        		objLoDiv = new Div();  //?????? ?????????????????? ????????????, ???????????? ?????????????????? new grid(); ????????? ??????????????? ??????..
        		objLoDiv.init("loDiv" + i, xLoPos, yLoPos, 320, 400); // ??????????????? ?????? ?????????, (?????????, left, top, width, height)
        		this.divLocationMain.form.addChild("loDiv" + i, objLoDiv); // ??????????????? ??????????????? ???????????? ???
        		//objLoDiv.set_border("1px solid white");  // ????????????
        		objLoDiv.show();  // ???????????????????????? ?????? ????????? show

        		xLoPos  = xLoPos+320;

        		var objLoDivTmp = "loDiv"+i;
        		objLoDivTmp = this.divLocationMain.form.components[objLoDivTmp];

        		var objLoImageViewer0 = new ImageViewer();
        		objLoImageViewer0.init("loIma0", 10, 0, 300, 270);
        		objLoDivTmp.form.addChild("loIma0", objLoImageViewer0);
        		objLoImageViewer0.set_image(this.dsClassLocation.getColumn(i, "fileimg"));
        		objLoImageViewer0.set_stretch("fit");
        		objLoImageViewer0.class_no = this.dsClassLocation.getColumn(i, "class_no"); // ?????????????????? class_no??? ????????????
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
        		objLoStatic0.set_font("10pt/normal ?????? ??????");
        		objLoStatic0.show();

        		var objLoStatic1 = new Static();
        		objLoStatic1.init("loSta1", 10, 268, 112, 33);
        		objLoDivTmp.form.addChild("loSta1", objLoStatic1);
        		//objLoStatic1.set_border("1px solid gray");
        		objLoStatic1.set_text("?????????"+" : "+this.dsClassLocation.getColumn(i, "class_user_cnt")+"???");
        		objLoStatic1.set_font("10pt/normal ?????? ??????");
        		objLoStatic1.set_color("red");
        		objLoStatic1.show();

        		var objLoStatic2 = new Static();
        		objLoStatic2.init("loSta2", 10, 295, 300, 40);
        		objLoDivTmp.form.addChild("loSta2", objLoStatic2);
        		//objLoStatic2.set_border("1px solid gray");
        		objLoStatic2.set_font("bold 11pt/normal, Berlin Sans FB");
        		objLoStatic2.set_text(this.dsClassLocation.getColumn(i, "title"));
        		objLoStatic2.set_font("bold 14px/normal ?????? ??????");
        		objLoStatic2.show();

        		var objLoStatic3 = new Static();
        		objLoStatic3.init("loSta3", 10, 325, 300, 50);
        		objLoDivTmp.form.addChild("loSta3", objLoStatic3);
        		//objLoStatic3.set_border("1px solid gray");
        		objLoStatic3.set_text(this.dsClassLocation.getColumn(i, "intro"));
        		objLoStatic3.set_font("10pt/normal ?????? ??????");
        		objLoStatic3.set_border("1px solid gainsboro, 0px none, 0px none");
        		objLoStatic3.show();

        	}
        }

        /**
        * @description ???????????? ?????? ?????? ?????????, ??????
        */
        this.fvRemove2 = function()
        {
        	for(var i=0; i<this.dsClassLocation.getRowCount(); i++)
        	{

        		var objLoDivTmp = "loDiv" + i;

        		var objLoBtn = this.removeChild(objLoDivTmp);

        		trace("@@@@"+objLoBtn);


        		// Form??? ???????????? ????????? ??????????????? ???????????? ?????????
        		objLoBtn.destroy(); //destroy??? null??????????????? ??????????????? ??????, ????????? ????????? (????????? ????????? ?????? ?????????)
        		objLoBtn = null;


        	}

        }

        /**
        * @description ???????????? ?????? ????????? ????????? ?????? ???, ?????? ???????????? ??????????????? ??????
        */
        this.fnClassNo2 = function(obj)
        {
        	trace("@@@???????????????"+obj.class_no);
        	this.fvApp.gvClassNo = obj.class_no; // ???????????? ???
        	this.fvObjApp.gvMainFrame.set_formurl("Together::Class/getClass.xfdl")
        }

        /**************************************************************************
        * ??? COMPONENT ??? EVENT ??????
        **************************************************************************/
        /**
        * @description ????????? ????????? ?????? ??????
        */
        this.btnPre_onclick = function(obj,e)
        {
        	this.killTimer(0);
        	this.stepselector.set_stepindex(--this.fvStep);
        };

        /**
        * @description ????????? ?????? ?????? ??????
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
