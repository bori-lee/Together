(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameTop");
            this.set_titletext("frameTop");
            this.set_scrolltype("none");
            this.set_scrollbartype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","220","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_TF_Bg");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new Button("btnPre",null,"23","24","24","31",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_cssclass("btn_TF_Pre");
            this.addChild(obj.name, obj);

            obj = new Button("btnNex",null,"23","24","24","4",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_cssclass("btn_TF_Nxt");
            this.addChild(obj.name, obj);

            obj = new Static("staName",null,"6","133","16","68",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("<b v=\'true\'>운영자</b>님 환영합니다.");
            obj.set_cssclass("sta_TF_Welcome");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnLogOut",null,"6","60","16","7",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("로그아웃");
            obj.getSetter("uWord").set("frame.logOut");
            obj.set_cssclass("btn_TF_Logout");
            this.addChild(obj.name, obj);

            obj = new Div("divTopBtn","245","16",null,"23","258",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","0","0","220","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_TF_NexacroN");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTopBtn.form
            obj = new Layout("default","",0,0,this.divTopBtn.form,function(p){});
            this.divTopBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1278,50,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FrameTop.xfdl", function() {
        /**
        *  Necacro EduPack
        *  @MenuPath    frame > frameTop
        *  @FileName 	frameTop.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2022.05.02
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022.05.02     	Education 	            	최초 생성
        *  2022.08.10     	Education 	            	스크립트 정비
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvObjApp 		= this.gfnGetApplication();
        this.fvTopBtnPrefix = "TOP_";

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.divTopBtn.form.set_scrollbartype("none");
        };

        /**
         * @description 화면 onsize시 처리
        */
        this.form_onsize = function(obj,e)
        {
        	this.fnRedrawBtn();
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
         * @description 메세지 콜백
        */
        this.fnMsgCallback = function (strId, strVal)
        {

        	if(strId == "confirm.logout"){
        		if(strVal){
        		    this.fvObjApp.gvLogOut = "Y";
        			this.fvObjApp.exit();
        		}
        		else{
        			this.fvObjApp.gvLogOut = "N";
        			//this.fvObjApp.mainframe._checkAndConfirmClose = this.fvObjApp.gvOrgConfirmFunc;
        		}
        	}
        };

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * 로그인 사용자 세팅
         * @return
         * @example
         *
         * @memberOf
         */
        this.fnSetName = function()
        {
        	var sNameCol = "USER_NAME";
        	// 다국어 처리
        	var sNowLang = nexacro.getEnvironmentVariable("evLanguage");
        	if (sNowLang != "KO") {
        		sNameCol = sNameCol+sNowLang;
        	}

        	var sName  = this.fvObjApp.gdsUserInfo.getColumn(0, sNameCol);
        	this.staName.set_text("<b v='true'><fc v='blue'>"+sName+"</fc></b>님 환영합니다.");	//다국어 처리 안함
        };

        /**
         * menu tab 버튼 첫번째 index 가져오는 함수
         * @public
         * @return
         * @example
         * @memberOf
         */
        this.fnGetFirstTabIndex = function ()
        {
        	for(var i=0; i<this.dsMenu.rowcount;i++)
        	{
        		var objID   = this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId);
        		var objBtn  = this.fnFindObj(this.fvTopBtnPrefix + objID);
        		if(0 <= objBtn.left) {
        			return i;
        		}
        	}
        	return -1;
        };

        /**
         * 버튼 첫번째 이동 함수
         * @public
         * @return
         * @example
         * @memberOf
         */
        this.fnMoveFirst = function (nMoveIdx)
        {
        	var nIndex;
        	var objID;
        	var objBtn;
        	var tabFirstObj;

        	nIndex = this.fnGetFirstTabIndex();
        	if (nIndex < 0)
        	{
        		return;
        	}

        	if (nMoveIdx < 0)
        	{
        		return;
        	}
        	if (nMoveIdx >= this.dsMenu.rowcount)
        	{
        		return;
        	}

        	objID = this.dsMenu.getColumn(nIndex, this.FRAME_MENUCOLUMNS.menuId);
        	var tabFirstObj = this.fnFindObj(this.fvTopBtnPrefix + objID);

        	objID = this.dsMenu.getColumn(nMoveIdx, this.FRAME_MENUCOLUMNS.menuId);
        	objBtn = this.fnFindObj(this.fvTopBtnPrefix + objID);

        	var nShiftPos = objBtn.getOffsetLeft() - tabFirstObj.getOffsetLeft();

        	for (var i = 0; i < this.dsMenu.rowcount; i++)
        	{
        		objID = this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId);
        		objBtn = this.fnFindObj(this.fvTopBtnPrefix + objID);
        		objBtn.move(objBtn.getOffsetLeft() - nShiftPos, objBtn.getOffsetTop());
        	}
        };

        /**
         * 버튼 redraw
         * @public
         * @param
         * @return
         * @example
         * @memberOf
         */
        this.fnRedrawBtn = function ()
        {
        	this.fnCheckShowBtnAll();
        	this.fnSetSpinBtnShow();
        };

        /**
         * 모든 버튼 체크
         * @public
         * @param
         * @return
         * @example
         * @memberOf
         */
        this.fnCheckShowBtnAll = function ()
        {
        	if (this.dsMenu.rowcount == 0) return;

        	var tabFirstObj = this.fnFindObj(this.fvTopBtnPrefix + this.dsMenu.getColumn(0, this.FRAME_MENUCOLUMNS.menuId));
        	var tabLastObj = this.fnFindObj(this.fvTopBtnPrefix + this.dsMenu.getColumn(this.dsMenu.rowcount - 1, this.FRAME_MENUCOLUMNS.menuId));
        	var nLeft = tabFirstObj.getOffsetLeft();
        	var nRight = tabLastObj.getOffsetRight();

        	if (this.divTopBtn.getOffsetWidth() >= (nRight - nLeft))
        	{
        		this.fnMoveFirst(0);
        		return;
        	}
        };

        /**
         * spin 버튼 visible 처리
         * @public
         * @return
         * @example
         * @memberOf
         */
        this.fnSetSpinBtnShow = function ()
        {
        	var objBtn;

        	if(this.dsMenu.rowcount == 0)
        	{
        		this.btnPre.set_enable(false);
        		this.btnNex.set_enable(false);
        		return;
        	}

        	objBtn = this.fnFindObj(this.fvTopBtnPrefix + this.dsMenu.getColumn(this.dsMenu.rowcount - 1, this.FRAME_MENUCOLUMNS.menuId));

        	if(this.divTopBtn.getOffsetWidth() < objBtn.getOffsetRight())
        	{
        		this.btnNex.set_enable(true);
        	}
        	else
        	{
        		this.btnNex.set_enable(false);
        	}

        	objBtn = this.fnFindObj(this.fvTopBtnPrefix + this.dsMenu.getColumn(0, this.FRAME_MENUCOLUMNS.menuId));

        	if(objBtn.getOffsetLeft() < 0)
        	{
        		this.btnPre.set_enable(true);
        	}
        	else
        	{
        		this.btnPre.set_enable(false);
        	}
        };

        /**
         * topmenu를 dsMenu로 copy
         * @public
         * @return
         * @example
         * @memberOf
         */
        this.fnLoad = function ()
        {
        	this.fvObjApp.gdsMenu.filter(this.FRAME_MENUCOLUMNS.menuLevel + "==0");
        	this.dsMenu.copyData(this.fvObjApp.gdsMenu, true);
        	this.fvObjApp.gdsMenu.filter("");
        	this.fnSetTopMenu();
        };

        /**
         * topmenu세팅
         * @public
         * @return
         * @example
         * @memberOf
         */
        this.fvFirstMenu;

        this.fnSetTopMenu = function ()
        {
        	var btnObj;
        	for(var i=0; i<this.dsMenu.getRowCount(); i++)
        	{
        		var strID = this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId);

        		// 첫번째 메뉴
        		if (i == 0) this.fvFirstMenu = this.fvTopBtnPrefix + strID;

        		// 다국어 처리
        		var sMenuNameColumn = this.FRAME_MENUCOLUMNS.menuNm;
        		var sNowLang        = nexacro.getEnvironmentVariable("evLanguage");
        		if (sNowLang != "KO") {
        			sMenuNameColumn = sMenuNameColumn + sNowLang;
        		}
        		var strName = this.dsMenu.getColumn(i, sMenuNameColumn);
        		this.fnCreateTopMenu(strID, strName, i);
        	}

        	//첫번째 메뉴 선택
        	var objFirstMenu = this.divTopBtn.form[this.fvFirstMenu];
        	objFirstMenu.click();
        	objFirstMenu.setSelectStatus(true);

        	this.fnRedrawBtn();
        };



        // Top menu creation
        this.fvMenuLeft = 50;
        this.fnCreateTopMenu = function (strID, strName, index)
        {
        	// Creating Top Menu button
        	var objBtn = new Button();

        	var objSize = nexacro.getTextSize(strName, "bold 16px 'Verdana', 'Malgun Gothic'");
        	objBtn.init(this.fvTopBtnPrefix + strID, this.fvMenuLeft, 0, objSize.nx, 23);
        	this.fvMenuLeft = this.fvMenuLeft+ objSize.nx + 80;
        //	objBtn.init(this.fvTopBtnPrefix + strID, ((index * 155)), 0, (index * 155) + 155 - (index * 155), 23);

        	this.divTopBtn.addChild(objBtn.name, objBtn);
        	objBtn.set_text(strName);
        	objBtn.menuid = strID;
        	objBtn.set_cssclass("btn_TF_Mnu");
        	objBtn.set_textAlign("center");
        	objBtn.setEventHandler("onclick", this.Button_onclick, this);
        	objBtn.set_visible(true);
        	objBtn.show();
        };

        this.fnSetActiveBtn = function (menuId)
        {
        	var MenuObj;

        	for (var i=0; i<this.dsMenu.getRowCount(); i++)
        	{
        		MenuObj = this.fnFindObj(this.fvTopBtnPrefix + this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId));

        		if (menuId == this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId)){
        			MenuObj.setSelectStatus(true);
        			//MenuObj.set_cssclass("btn_TF_Mnu");
        		}
        		else {
        			MenuObj.setSelectStatus(false);
        			//MenuObj.set_cssclass("btn_TF_Mnu");
        		}
        	}
        };

        // button을 반환
        this.fnFindObj = function (strId)
        {
        	return this.divTopBtn.form.components[strId];
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.staLogo_onclick = function(obj,e)
        {
        	// Main 페이지
            this.fvObjApp.gvVFrameSet1.set_separatesize("30,*,0");
        };

        this.btnLogOut_onclick = function(obj,e)
        {
        	if(system.navigatorname == "nexacro"){
        		var sMsgId = "confirm.logout";			//메세지ID
        		var arrArg = "";						//메세지취환될값 배열[생략가능]
        		var sPopId = sMsgId;					//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnMsgCallback";		//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        		// 로그아웃 하시겠습니까?
        		this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        	}
        	else{
        		window.top.location.reload(true);
        	}
        };

        this.Button_onclick = function (obj, e)
        {
        	this.fvObjApp.gvLeftFrame.form.fnChangeMenu(obj.menuid);
        	this.fnSetActiveBtn(obj.menuid);
        };

        this.btnPre_onclick = function(obj,e)
        {
        	this.fnMoveFirst(this.fnGetFirstTabIndex() - 1);
        	this.fnRedrawBtn();
        };

        this.btnNex_onclick = function(obj,e)
        {
        	this.fnMoveFirst(this.fnGetFirstTabIndex() + 1);
        	this.fnRedrawBtn();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.btnPre.addEventHandler("onclick",this.btnPre_onclick,this);
            this.btnNex.addEventHandler("onclick",this.btnNex_onclick,this);
            this.btnLogOut.addEventHandler("onclick",this.btnLogOut_onclick,this);
            this.divTopBtn.addEventHandler("onclick",this.div_Tab_onclick,this);
            this.sta03.addEventHandler("onclick",this.sta03_onclick,this);
        };
        this.loadIncludeScript("FrameTop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
