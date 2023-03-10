(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameWork");
            this.set_titletext("frameWork");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1058,688);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divWork","10","38",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0",null,"38","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("Frame::FrameWorkTitle.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staLodingTime",null,"7","425","17","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_font("11px/normal \"Verdana\",\"Malgun Gothic\"");
            obj.set_usedecorate("true");
            obj.set_color("orangered");
            obj.set_textAlign("right");
            obj.set_text("해당 화면의 loading 시간은 0.05 Sec 입니다.");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnMenuOpen","0","314","9","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_LF_Close");
            this.addChild(obj.name, obj);

            obj = new Div("divNotice",null,null,"200","150","0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_formscrollbartype("none");
            obj.set_cssclass("div_WF_Notice");
            this.addChild(obj.name, obj);

            obj = new Static("staNotice","15","30",null,null,"15","15",null,null,null,null,this.divNotice.form);
            obj.set_taborder("0");
            obj.set_textAlign("left");
            obj.set_verticalAlign("top");
            this.divNotice.addChild(obj.name, obj);

            obj = new Button("btnClose","175","7","15","15",null,null,null,null,null,null,this.divNotice.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_LOGIN_Close");
            this.divNotice.addChild(obj.name, obj);

            obj = new Button("btn00","666","12","32","19",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("btn00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWork.form
            obj = new Layout("default","",0,0,this.divWork.form,function(p){});
            this.divWork.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divNotice.form
            obj = new Layout("default","",0,0,this.divNotice.form,function(p){});
            this.divNotice.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame::FrameWorkTitle.xfdl");
        };
        
        // User Script
        this.registerScript("FrameWork.xfdl", function() {
        /**
        *  Necacro EduPack
        *  @MenuPath    frame > frameWork
        *  @FileName 	frameWork.xfdl
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
        this.fvObjApp = this.gfnGetApplication();
        this.fvObjArgs;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        /**
         * form onload 함수
         * @return
         * @example
         * @memberOf
         */
        this.form_onload = function(obj,e)
        {
        	this.form_onsize();
        	this.divTitle.form.set_scrollbartype("none");

        	//넘어온 아규먼트 셋팅
        	this.fnSetOwnFrameArgu(this);

        	// 전달된 Argument를 form 변수에 설정
        	this.fvObjArgs = this.getOwnerFrame().arguments["oArgs"];

        	// form로딩시 화면에 표시할 page URL 설정
        	this.divWork.set_url(this.getOwnerFrame().arguments["pageUrl"]);

        	// 공통버튼 사용여부
        	if (this.FRAME_IS_COMBTN_USE) this.staLodingTime.set_visible(false);

        	// 알림창 숨기기
        	this.divNotice.set_height(0);

        };

        /**
         * form onactivate event
         * @return
         * @example
         *
         * @memberOf
         */
        this.form_onactivate = function(obj,e)
        {
        // 	var winKey = this.fvObjApp.gvWorkFrame.getActiveFrame().name;
        // 	//this.fvObjApp.gvWorkFrame.frames[winKey].setFocus();
        //
        // 	var gRow = this.fvObjApp.gdsOpenMenu.findRow(this.FRAME_MENUCOLUMNS.winId, winKey);
        //
        // 	var dsLMenu = this.fvObjApp.gvLeftFrame.form.dsMenu;
        // 	var menuId = this.fvObjApp.gdsOpenMenu.getColumn(gRow, this.FRAME_MENUCOLUMNS.menuId);
        // 	var lRow = this.fvObjApp.gvLeftFrame.form.dsMenu.findRow(this.FRAME_MENUCOLUMNS.menuId, menuId);
        //
        // 	//메뉴 타이틀
        // 	var sTitle = this.fvObjApp.gdsOpenMenu.getColumn(gRow, "title");
        // 	this.divTitle.form.staTitle.set_text(sTitle);
        //
        // 	// gdsOpenMenu row 이동
        // 	this.fvObjApp.gdsOpenMenu.set_rowposition(gRow);

        	// 알림창 동기화
        	this.fvObjApp.gvBottomFrame.form.fnInitNoticeShow(this);
        };

        /**
         * workFrame_onclose event
         * @return
         * @example
         *
         * @memberOf
         */
        this.form_onclose = function(obj, e)
        {
        	try
        	{
        		// WorkFrame 화면일때만 창 닫기
        		if (e.fromobject == "[object Form]" && e.fromobject.name == "frameWork")
        		{
        			var winId = this.getOwnerFrame().name;
        			if (this.fvObjApp.gvMdiFrame.form.bClose){
        				this.fvObjApp.gvMdiFrame.form.bClose = false;
        				this.fvObjApp.gvMdiFrame.form.fnTabOnClose(winId);
        			}
        		}
        	}
        	catch(e)
        	{

        	}
        }

        /**
         * onsize event
         * @return
         * @example
         *
         * @memberOf this
         */
        this.form_onsize = function(obj, e)
        {
        	this.resetScroll();
        }


        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
         * @description 메세지 콜백
        */
        this.fnMsgCallback = function (strId, strVal)
        {
        	if(strId == "confirm.before.movepage"){
        		if(strVal == true){
        			this.close();
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
         *  넘어온 아규먼트 처리 설정
         * @param  {XaComp} this(현재form)
         * @return
         * @example
         * fnSetOwnFrameArgu(this);
         * @memberOf
         */
        this.fnSetOwnFrameArgu = function(o)
        {
        	var menuId = o.getOwnerFrame().arguments["menuId"];

        	if(this.FRAME_IS_COMBTN_USE){	//공통 버튼 사용유무
        		//공통 버튼권한세팅
        		var sAuth = this.fnGetAuth(menuId, "AUTH");  //권한조회
        		this.divTitle.form.fnSetAuthBtn(sAuth);
        	}
        }

        /**
         * gdsMenu에서 버튼권한 가져오기
         * @param {string} menuId: 메뉴Id
         * @param {string} colId: 컬럼(권한별) Id
         * @return
         * @example
         *
         * @memberOf
         */
        this.fnGetAuth = function(menuId, colId)
        {
        	var sValue = this.fvObjApp.gdsMenu.lookupAs(this.FRAME_MENUCOLUMNS.menuId, menuId, colId);
        	if(this.gfnIsNull(sValue))
        	{
        		sValue = "YNNNNN";
        	}
        	return sValue;
        }

        /**
         * @description workFrame close 시 처리
        */
        this.fnWorkFrameClose = function()
        {
        	if (this.gfnIsNull(this.divWork.form.lookup("fnClose"))) {
        		//로컬환경에서 fnClose 함수 없음 알림
        		if (nexacro.getEnvironmentVariable("evRunMode") == "S" || nexacro.getEnvironmentVariable("evRunMode") == "L") {
        			trace("해당화면에 fnClose 함수가 없습니다. fnClose 함수가 없으면 데이타 변경여부 체크를 하지 않습니다.");
        		}
        	}
        	else {
        		if (this.divWork.form.fnClose() == false) {
        			var sMsgId = "confirm.before.movepage";							//메세지ID
        			var arrArg = "";												//메세지취환될값 배열[생략가능]
        			var sPopId = sMsgId;											//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        			var sMsgCallback = "fnMsgCallback";								//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        			// 변경된 데이터가 있습니다. 현재 화면을 닫겠습니까?
        			this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        			return false;
        		}
        		else {
        			//this.close();
        		}
        	}
        	this.close();
        }

        /**
         * @description 현재 오픈된 화면의 form을 reload
        */
        this.fnFormReload = function()
        {
        	this.divWork.form.reload();
        }

        /**
         * @description Left 접고/펼치기 (frameWorkTitle에서 호출)
        */
        this.fnLeftMenuAction = function()
        {
        	var sCssClass = "";
        	if(this.fvObjApp.gvHFrame.separatesize == "0,*"){
        		this.fvObjApp.gvHFrame.set_separatesize("220,*");
        		sCssClass = "btn_LF_Close";
        	}
        	else{
        		this.fvObjApp.gvHFrame.set_separatesize("0,*");
        		sCssClass = "btn_LF_Open";
        	}

            // workFrame영역에 open된 childFrame 갯수
        	var iFramesCnt = this.fvObjApp.gvWorkFrame.frames.length;
        	if (this.fvObjApp.gdsOpenMenu.getRowCount() < 1) return;

        	for (var i=0; i<iFramesCnt; i++)
        	{
        		this.fvObjApp.gvWorkFrame.frames[i].form.btnMenuOpen.set_cssclass(sCssClass);
        	}
        };


         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description 메뉴오픈 이벤트
        */
        this.btnMenuOpen_onclick = function(obj,e)
        {
        	this.fnLeftMenuAction();
        };


        /**
         * @description 알림닫기 이벤트
        */
        this.divNotice_btnClose_onclick = function(obj,e)
        {
        	// 알림창 동기화
        	this.fvObjApp.gvBottomFrame.form.fnSetNoticeShow(this, false, true);
        };

        this.btn00_onclick = function(obj,e)
        {
        	alert(this.divWork.getOffsetWidth() + " * " + this.divWork.getOffsetHeight());
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onactivate",this.form_onactivate,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.staLodingTime.addEventHandler("onclick",this.staLodingTime_onclick,this);
            this.btnMenuOpen.addEventHandler("onclick",this.btnMenuOpen_onclick,this);
            this.btnMenuOpen.addEventHandler("onmouseenter",this.btnMenuOpen_onmouseenter,this);
            this.divNotice.form.btnClose.addEventHandler("onclick",this.divNotice_btnClose_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("FrameWork.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
