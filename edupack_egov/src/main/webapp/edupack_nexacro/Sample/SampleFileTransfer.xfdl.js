(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleFileUpDownTransfer");
            this.set_titletext("FileUpDownTransfer");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUpload", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fileid\" type=\"STRING\" size=\"256\"/><Column id=\"fileimg\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filetype\" type=\"STRING\" size=\"256\"/><Column id=\"filesize\" type=\"INT\" size=\"256\"/><Column id=\"tranfilesize\" type=\"INT\" size=\"256\"/><Column id=\"prog\" type=\"INT\" size=\"256\"/><Column id=\"dnimg\" type=\"STRING\" size=\"256\"/><Column id=\"rmimg\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/><Column id=\"filekey\" type=\"STRING\" size=\"256\"/><Column id=\"downcnt\" type=\"STRING\" size=\"256\"/><Column id=\"filepath\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fileid\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filetype\" type=\"STRING\" size=\"256\"/><Column id=\"filesize\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_add","10","125","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Add Files");
            this.addChild(obj.name, obj);

            obj = new Button("btn_upload","115","125","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("upload");
            this.addChild(obj.name, obj);

            obj = new Grid("grdUpload","10","160","730","340",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsUpload");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"300\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"34\"/></Rows><Band id=\"body\"><Cell text=\"bind:fileimg\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"bind:filename\"/><Cell col=\"2\" text=\"bind:rmimg\" displaytype=\"imagecontrol\"/><Cell col=\"3\" displaytype=\"imagecontrol\" text=\"bind:dnimg\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_deleteAll","220","125","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Delete All");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar","180","250","390","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("false");
            obj.set_min("0");
            obj.set_max("100");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","10","0","321","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("file up/down transfer");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","10","50",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Description");
            obj.set_text("FileUpTransfer, FileDownTransfer ??????????????? ????????? ?????? ???/???????????? ????????????.");
            this.addChild(obj.name, obj);

            obj = new Button("btnFileList","325","125","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("File List");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleFileTransfer.xfdl", function() {
        /**
        *  Necacro EduPack
        *  @MenuPath    ??????????????? > ???????????? ??? ?????? > FileUpDownTransfer
        *  @FileName 	SampleFileUpDownTransfer.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2022.05.01
        *  @Desction    FileUpDownTransfer
        ************** ?????? ?????? ?????? ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022.05.01     	Education 	                ?????? ??????
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM ?????? ?????? ??????
         ************************************************************************************************/

        //???????????? ????????? ??????.
        this.iconInfo = {
        		file_icon_ZIP: ["zip","rar","7z"],
        		file_icon_IMG: ["jpg", "jpeg", "gif", "png", "bmp"],
        		file_icon_TXT: ["txt", "xml"],
        		file_icon_DOC: ["doc", "docx"],
        		file_icon_XLS: ["xls", "xlsx"],
        		file_icon_PPT: ["ppt", "pptx"],
        		file_icon_PDF: ["pdf"],
        		file_icon_ETC: ["etc"] //??? ????????? ????????? ???????????? ?????? ??????. default icon
        	};

        //???????????? ????????? ??????
        this.extToIcon = {};
        this.fileConfig = {};

        // virtualfiles
        this.tmpObjFileList;

        /************************************************************************************************
         * FORM EVENT ??????(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description ?????? onload??? ????????????(??????)
         */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);

        	this.fileConfig = {
        		host        : this.gfnGetServerUrl(),
        		uploadUrl   : "uploadFile.do",
        		downloadUrl : "downloadFile.do",
        		uploadPath  : "edupack_file",
        		downImage   : "theme://images/img_file.png",
        		delImage    : "theme://images/btn_del.png",
        		allowTypes  : ["jpg","jpeg","gif","png","bmp","txt","zip","7z","gzip","doc","docx","ppt","pptx","xls","xlsx","pdf"],
        	};

        	this.initExtToIcon();

        };

        /************************************************************************************************
         * ????????? FUNCTION ??????
         ************************************************************************************************/
        /**
         * @description ???????????? ?????? ????????? ??????
         */
        this.initExtToIcon = function ()
        {
        	var extToIcon = this.extToIcon;
        	var iconInfo = this.iconInfo;

        	for (var name in iconInfo) {
        		var len = iconInfo[name].length;
        		for (var i=0; i<len; i++) {
        			extToIcon[iconInfo[name][i]] = name;
        		}
        	}
        };

        /**
         * @description ?????? ???????????? ???????????? ??????????????? ??????.
         * @param {string} fileName file name
         * @return {string} image full path
         */
        this.getFileIcon = function(fileName)
        {
        	if(this.gfnIsNull(fileName)) return;

        	fileName = fileName.toLowerCase();
        	var ext = (/[.]/.exec(fileName)) ? /[^.]+$/.exec(fileName) : undefined;
        	var icon = this.extToIcon[ext];

        	if (icon == undefined) { ext = "etc"; }

        	return "theme://images/" + this.extToIcon[ext] + ".png";
        };

        /************************************************************************************************
         * ??? COMPONENT ??? EVENT ??????
         ************************************************************************************************/

        /**
         * @ FileDialog open
         */
        this.btn_add_onclick = function(obj,e)
        {
        	var strTitle = "FileLoad";
        	var constOpenMode = 3; 	// 1 : FileDialog.LOAD / 2 : FileDialog.SAVE / 3 : FileDialog.MULTILOAD / 4 : FileDialog.SELFOLDER
        	var rtn = this.FileDialog.open(strTitle, constOpenMode, "%UserApp%");
        };

        /**
         * @ FileDialog onclose & FileUpTransfer addFile
         */
        this.FileDialog_onclose = function(obj,e)
        {
        	this.tmpObjFileList = e.virtualfiles;

        	// FileUpTransfer File Add
        	for (var i = 0; i < this.tmpObjFileList.length; i++) {
        		var bExist = this.FileUpTransfer.existFile(this.tmpObjFileList[i]);
        		if (!bExist) {

        			var sFileName   = this.tmpObjFileList[i].filename;
        			var dirExptType = sFileName.lastIndexOf(".") + 1;
        			var sFileType   = sFileName.substr(dirExptType);
        			var sIconImage  = this.getFileIcon(sFileName);

        			var nIdx = this.FileUpTransfer.addFile(sFileName, this.tmpObjFileList[i]);
        			if (nIdx != -1) {
        				this.dsUpload.addRow();
        				this.dsUpload.setColumn(nIdx, "fileimg"	, sIconImage);
        				this.dsUpload.setColumn(nIdx, "rmimg"	, this.fileConfig.delImage);
        				this.dsUpload.setColumn(nIdx, "fileid", sFileName);
        				this.dsUpload.setColumn(nIdx, "filename", sFileName);
        				this.dsUpload.setColumn(nIdx, "filetype", sFileType);
        				this.dsUpload.setColumn(nIdx, "filepath", this.tmpObjFileList[i].path);
        			}
        		}
        	}
        };

        /**
         * @ FileUpTransfer upload
         * @
         * @
         */
        this.btn_upload_onclick = function(obj,e)
        {
        	if (system.navigatorname != "nexacro") {
        		var sUploadUrl = " http://localhost:8088/edupack_egov/" + this.fileConfig.uploadUrl;
        	}
        	else {
        		var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl;
        	}
        	trace("###########################################");
        	trace("# sUploadUrl " + sUploadUrl);
        	trace("###########################################");

        	// PostData : upload path ??????
        	this.FileUpTransfer.setPostData("filepath", this.fileConfig.uploadPath);

        	this.FileUpTransfer.upload(sUploadUrl);
        	this.ProgressBar.set_visible(true);
        };

        /**
         * @ FileUpTransfer clearFileList
         * @
         * @
         */

        this.btn_deleteAll_onclick = function(obj,e)
        {
        	this.FileUpTransfer.clearFileList();
        	this.FileUpTransfer.clearPostDataList();
        	this.dsUpload.deleteAll();
        };

        /**
         * @ grdUpload ondrop & & FileUpTransfer addFile
         * @
         * @
         */
        this.grdUpload_ondrop = function(obj,e)
        {
        	var objFileList = e.filelist;

        	// FileUpTransfer File Add
        	for (var i = 0; i < objFileList.length; i++) {
        		var bExist = this.FileUpTransfer.existFile(objFileList[i]);
        		if (!bExist) {
        			var nIdx = this.FileUpTransfer.addFile(objFileList[i].filename, objFileList[i]);
        			var sFileName = objFileList[i].filename
        			var dirExptType = sFileName.lastIndexOf(".")+1;
        			var sFileType = sFileName.substr(dirExptType);
        			var sIconImage = this.getFileIcon(sFileName);

        			if (nIdx != -1) {
        				this.dsUpload.addRow();
        				this.dsUpload.setColumn(nIdx, "fileimg"	, sIconImage);
        				this.dsUpload.setColumn(nIdx, "rmimg"	, this.fileConfig.delImage);
        				this.dsUpload.setColumn(nIdx, "fileid", objFileList[i].filename);
        				this.dsUpload.setColumn(nIdx, "filename", objFileList[i].filename);
        				this.dsUpload.setColumn(nIdx, "filetype", sFileType);
        				this.dsUpload.setColumn(nIdx, "filepath", objFileList[i].path);
        			}
        		}
        	}

        //	trace("grdUpload_ondrop >>>> " + e.dragdata.getData(DragDataFormats.FILEDROP));

        };

        /**
         * @ grdUpload oncellclick & FileUpTransfer removeFile
         * @
         * @
         */
        this.grdUpload_oncellclick = function(obj,e)
        {
        	var rmCellIdx = 2;	// ?????? cell index
        	var dnCellIdx = 3;	// ???????????? cell index
        	if (e.row < 0) return;

        	//????????? X ????????? delete
        	if (e.col == rmCellIdx) {
        		var sfilename  = "";

        		// ?????? ?????????????????? ????????? ????????? Grid ????????? ??????
        		if (this.gfnIsNull(this.dsUpload.getColumn(e.row, "filesize"))) {
        			this.dsUpload.set_enableevent(false);
        			this.dsUpload.deleteRow(e.row);
        			this.dsUpload.set_enableevent(true);
        			sfilename = this.dsUpload.getColumn(e.row, "filename");
        			this.FileUpTransfer.removeFile(sfilename);		// File  ??????
        		}
        		// ?????? ?????? ??????
        		else {
        			if (system.navigatorname != "nexacro") {
        				var sUploadUrl = "http://localhost:8088/edupack_egov/" + this.fileConfig.uploadUrl;
        			}
        			else {
        				var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl;
        			}

        			sfilename = this.dsUpload.getColumn(e.row, "fileid");
        			trace("############################# " + this.fileConfig.uploadPath + " : " + sfilename);

        			this.fnFileDelete(sfilename);
        		}

        	}
        	//download
        	else if (e.col == dnCellIdx) {
        		var sFilename = this.dsUpload.getColumn(e.row, "fileid");
        			sFilename = this.gfnTrim(sFilename);

        //		var encodeFileName = encodeURIComponent(sFilename);

        		if (system.navigatorname != "nexacro") {
        			var sDownLoadUrl = "http://localhost:8088/edupack_egov/" + this.fileConfig.downloadUrl;
        		}
        		else {
        			var sDownLoadUrl = this.fileConfig.host + this.fileConfig.downloadUrl;
        		}
        		trace("sDownLoadUrl : " + sDownLoadUrl);

        		this.dsTemp.clearData();
        		this.dsTemp.addRow();
        		this.dsTemp.copyRow(0, this.dsUpload, e.row);
        		//????????? ???????????? ?????? encode
        		this.dsTemp.setColumn(0, "filename", encodeURI(this.dsTemp.getColumn(0, "filename")));
        		this.dsTemp.setColumn(0, "fileid"  , encodeURI(this.dsTemp.getColumn(0, "fileid")));

        		this.FileDownTransfer.clearPostDataList();
        		this.FileDownTransfer.setPostData("filepath", this.fileConfig.uploadPath);
        		this.FileDownTransfer.setPostData("downfilename", sFilename);

        		// ???????????? ????????? ????????? "aaa.js,bbb.png,ccc.doc"
        		this.FileDownTransfer.setPostData("fileInfo",sFilename);
        		// ???????????? ds ?????????
        		this.FileDownTransfer.setPostData("fileInfoDs",this.dsTemp.saveXML());
        		this.FileDownTransfer.set_downloadfilename(sFilename); // only NRE
        		this.FileDownTransfer.download(sDownLoadUrl);

        	}
        };


        /**
         * @ FileUpTransfer onerror
         * @
         * @
         */
        this.FileUpTransfer_onerror = function(obj,e)
        {
        	trace("FileUpTransfer_onerror >> e.statuscode :" + e.statuscode + " / e.errormsg : " + e.errormsg + " / e.requesturi : " + e.requesturi);
        };

        /**
         * @ FileUpTransfer onsuccess
         * @
         * @
         */
        this.FileUpTransfer_onsuccess = function(obj,e)
        {
        	var rtnDataset = e.datasets[0];
        	trace(rtnDataset.saveXML());

        	var rtnRemoveFile = obj.getPostData("removeFile");
        	if (!this.gfnIsNull(rtnRemoveFile) ) {
        	/*
        		trace("~~~~~~~ Remove File Info ~~~~~~~ ");
        		var nIdx = this.dsUpload.findRow("fileid", rtnRemoveFile);
        		if (nIdx != -1) {
        			this.dsUpload.deleteRow(nIdx);
        			obj.removeFile(rtnRemoveFile);		// File  ??????
        			obj.removePostData("removeFile");	// PostData(removeFile) ??????
        		}
        	*/
        	}
        	else{
        		trace("~~~~~~~ Upload File Info ~~~~~~~");
        		for (var i = 0; i < rtnDataset.rowcount; i++) {
        			var nIdx = this.dsUpload.findRow("filename", rtnDataset.getColumn(i,"filename"));
        			if (nIdx > -1) {
        				this.dsUpload.setColumn(nIdx, "fileid", rtnDataset.getColumn(i,"fileid"));
        				this.dsUpload.setColumn(nIdx, "filesize", rtnDataset.getColumn(i,"filesize"));
        				this.dsUpload.setColumn(nIdx, "filename", rtnDataset.getColumn(i,"filename"));
        				this.dsUpload.setColumn(nIdx, "dnimg"	, this.fileConfig.downImage);
        			}
        		}
        		trace(this.dsUpload.saveXML());
        	}

        	if(this.ProgressBar.visible)	this.ProgressBar.set_visible(false);

        };

        /**
         * @ FileUpTransfer onprogress
         * @
         * @
         */
        this.FileUpTransfer_onprogress = function(obj,e)
        {
        	trace("FileUpTransfer00_onprogress >> e.total : " + e.total + " / e.loaded : " + e.loaded);

        	this.ProgressBar.set_max(e.total);
        	this.ProgressBar.set_pos(e.loaded);

        	if (e.total == e.loaded) {
        		this.ProgressBar.set_pos(0);
        		this.ProgressBar.set_visible(false);
        	}
        };

        /**
         * @ FileDownTransfer onerror
         * @
         * @
         */
        this.FileDownTransfer_onerror = function(obj,e)
        {
        	trace("FileDownTransfer_onerror >>>> e.errortype : " + e.errortype);
        	trace("FileDownTransfer_onerror >>>> e.statuscode : " + e.statuscode);
        	trace("FileDownTransfer_onerror >>>> e.errormsg : " + e.errormsg);
        	trace("FileDownTransfer_onerror >>>> e.requesturi : " + e.requesturi);
        };

        /**
         * @ FileDownTransfer onsuccess
         * @
         * @
         */
        this.FileDownTransfer_onsuccess = function(obj,e)
        {
        	trace("FileDownTransfer_onsuccess >>>> e.url : " + e.url);
        	trace("FileDownTransfer_onsuccess >>>> e.targetfullpath : " + e.targetfullpath);

        };


        this.fnFileDelete = function(pFileId)
        {
        	var strSvcId    = "deleteFile";
        	var strSvcUrl   = "deleteFile.do";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "uploadpath=" + this.fileConfig.uploadPath + " fileid=" + nexacro.wrapQuote(pFileId);
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcUrl,inData ,outData ,strArg, callBackFnc);
        }


        this.btnFileList_onclick = function(obj,e)
        {
        	var strSvcId    = "selectFile";
        	var strSvcUrl   = "selectFiles.do";
        	var inData      = "";
        	var outData     = "dsUpload=ds_output";
        	var strArg      = "uploadpath=" + this.fileConfig.uploadPath;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl,inData ,outData ,strArg, callBackFnc);
        };

        this.removeFileId = "";
        this.fnCallback = function(svcId, errCd, errMsg)
        {
        	if(svcId == "deleteFile"){
        		var nRow = this.dsUpload.findRow("fileid", this.removeFileId);
        		this.dsUpload.deleteRow(nRow);
        		this.alert("?????? ?????? ??????" + this.removeFileId);
        	}
        	else if(svcId == "selectFile"){
        	for (var i = 0; i < this.dsUpload.rowcount; i++)
        		{
        			var sFileName   = this.dsUpload.getColumn(i, "filename");
        			var dirExptType = sFileName.lastIndexOf(".") + 1;
        			var sFileType   = sFileName.substr(dirExptType);
        			var sIconImage  = this.getFileIcon(sFileName);
        			this.dsUpload.setColumn(i, "fileimg"	, sIconImage);
        			this.dsUpload.setColumn(i, "rmimg"	, this.fileConfig.delImage);
        			this.dsUpload.setColumn(i, "filename", sFileName);
        			this.dsUpload.setColumn(i, "filetype", sFileType);
        			this.dsUpload.setColumn(i, "dnimg"	, this.fileConfig.downImage);
        		}
        	}
        }

        this.ProgressBar_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_upload.addEventHandler("onclick",this.btn_upload_onclick,this);
            this.grdUpload.addEventHandler("oncellclick",this.grdUpload_oncellclick,this);
            this.grdUpload.addEventHandler("ondrop",this.grdUpload_ondrop,this);
            this.btn_deleteAll.addEventHandler("onclick",this.btn_deleteAll_onclick,this);
            this.ProgressBar.addEventHandler("onclick",this.ProgressBar_onclick,this);
            this.sta03.addEventHandler("onclick",this.sta03_onclick,this);
            this.btnFileList.addEventHandler("onclick",this.btnFileList_onclick,this);
            this.FileDialog.addEventHandler("onclose",this.FileDialog_onclose,this);
            this.FileUpTransfer.addEventHandler("onerror",this.FileUpTransfer_onerror,this);
            this.FileUpTransfer.addEventHandler("onsuccess",this.FileUpTransfer_onsuccess,this);
            this.FileUpTransfer.addEventHandler("onprogress",this.FileUpTransfer_onprogress,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
        };
        this.loadIncludeScript("SampleFileTransfer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
