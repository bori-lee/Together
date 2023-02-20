/**
*  Necacro EduPack
*  @FileName 	Excel.js 
*  @Creator 	Education
*  @CreateDate 	2022.05.01
*  @Desction   
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2022.05.01     	Education 	           		최초 생성 
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;

/**
 * @class excel export <br>
 * @param {Object} objGrid - Grid Object	
 * @param {String} [sSheetName]	- sheet name
 * @param {String} [sFileName]	- file name
 * @return N/A
 * @example
 * this.gfnExcelExport(this.grid_export, "SheetName","");
 */
pForm.ufnExcelExport = function(objGrid,  sSheetName, sFileName)
{

	this.setWaitCursor(true);
	var objGrid_excel = objGrid;
	
	var regExp = /[?*:\/\[\]]/g;  				//(엑셀에서 지원하지않는 모든 문자)
	
	sFileName = sFileName.replace(regExp,"");	//파일명에 특수문자 제거
	sSheetName = sSheetName.replace(regExp,""); //시트명에 특수문자 제거
	
	//fileName nullcheck
	sFileName = this.ufnIsNull(sFileName) ? this.ufnGetArgument("menuNm")+"_"+this.ufnGetDate() : sFileName;
	//sheetName nullcheck
	sSheetName = this.ufnIsNull(sSheetName) ? "sheet1" : sSheetName;
	//sheetName 30이상일경우 기본시트명
	if( String(sSheetName).length > 30 ){
		sSheetName =  "sheet1";
	}
	
	var svcUrl = "SvcUrl::XExportImport.do";
	this.objExport = null
	this.objExport = new ExcelExportObject();
	
	this.objExport.objgrid = objGrid_excel;
	this.objExport.set_exporturl(svcUrl);
	this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid_excel, sSheetName+"!A1","allband","allrecord",null,null,"image");
	this.objExport.set_exportfilename(sFileName);	
	
 	this.objExport.set_exporteventtype("itemrecord");
 	this.objExport.set_exportuitype("none");
 	this.objExport.set_exportmessageprocess("");
//	this.objExport.set_exportfilepassword( "1234" );
	this.objExport.addEventHandler("onsuccess", this.ufnExportOnsuccess, this);	
	this.objExport.addEventHandler("onerror", this.ufnExportOnerror, this);	
		
	//objGrid.set_font("9px 'arial'");	
		
	var result = this.objExport.exportData();
};

/**
 * @class excel export on sucess <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm.ufnExportOnsuccess = function(obj, e)
{	
	this.setWaitCursor(false);
};

/**
 * @class  excel export on error <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm.ufnExportOnerror = function(obj,  e)
{
	this.alert("Excel Export Error!!");
	this.setWaitCursor(false);
};

