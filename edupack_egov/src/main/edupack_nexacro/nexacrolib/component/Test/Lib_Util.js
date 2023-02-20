var pForm = nexacro.Form.prototype;

//오늘날짜 
pForm.lfn_getToday = function()
{
	var objDate = new Date();
	var sYear  = objDate.getFullYear().toString();
	var sMonth = (objDate.getMonth()+1).toString().padLeft(2, "0");
	var sDay   =  objDate.getDate().toString().padLeft(2, "0"); 		
	return sYear+sMonth+sDay;
}

//해당월의 01일
pForm.lfn_getFirstDay = function()
{
	var objDate = new Date();
	var sYear  = objDate.getFullYear().toString();
	var sMonth = (objDate.getMonth()+1).toString().padLeft(2, "0");
	var sDay   =  "01";
	return sYear+sMonth+sDay;

}

//널처리 
pForm.lfn_isNull = function(sValue)
{
	
	if(new String(sValue).valueOf() == "undefined") return true; 
	if(sValue == null) return true; 
	var ChkStr = new String(sValue); 
	if(ChkStr == null) return true; 
	if(ChkStr,toString().length == 0)return true;
	return false;
	
}



