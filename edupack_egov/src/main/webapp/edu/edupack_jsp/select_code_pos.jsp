<%@ page import="org.apache.commons.logging.*" %>
<%@ page import = "com.nexacro.java.xapi.data.*" %>
<%@ page import = "com.nexacro.java.xapi.tx.*" %>
<%@ page import = "java.util.*" %>
<%@ page import = "java.sql.*" %>
<%@ page import = "java.io.*" %>
<%@ page contentType="text/xml; charset=UTF-8" %>
<%@ include file="RsToDs.jsp" %>
<%@ include file="../connection_edu.jsp" %>
<%
// PlatformData
PlatformData out_PlatformData = new PlatformData();
    
int    nErrorCode  = 0;
String strErrorMsg = "START";

try {    
    /******* JDBC Connection *******/
    Connection conn = null;
    Statement  stmt = null;
    ResultSet  rs   = null;
    
    try { 
//      Class.forName("org.sqlite.JDBC");
//		conn = DriverManager.getConnection("jdbc:sqlite:C:\\Tomcat 8.0\\webapps\\EduProject\\File\\nexacro_edu_db.sqlite");
		//Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		//conn = DriverManager.getConnection("jdbc:sqlserver://172.27.0.91:1433;DatabaseName=EDU","edu","+4t9b/JU5I0o");
        conn = DriverManager.getConnection(url, id , pw);
		stmt = conn.createStatement();
      
        /******* SQL ************/
        String SQL;
		SQL = " SELECT POS_CD AS CODE, POS_NAME AS CODE_NAME FROM TB_POS";
		
        rs = stmt.executeQuery(SQL);
		out_PlatformData.addDataSet(RsToDs(rs,"out_pos"));		
		
        nErrorCode  = 0;
        strErrorMsg = "SUCC";
        
    } catch (SQLException e) {
        nErrorCode = -1;
        strErrorMsg = e.getMessage();
    }    
    
    /******** JDBC Close ********/
    if ( stmt != null ) try { stmt.close(); } catch (Exception e) {nErrorCode = -1; strErrorMsg = e.getMessage();}
    if ( conn != null ) try { conn.close(); } catch (Exception e) {nErrorCode = -1; strErrorMsg = e.getMessage();}
            
} catch (Throwable th) {
    nErrorCode = -1;
    strErrorMsg = th.getMessage();
}

VariableList varList = out_PlatformData.getVariableList();
varList.add("ErrorCode", nErrorCode);
varList.add("ErrorMsg" , strErrorMsg);

HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
pRes.setData(out_PlatformData);

// Send data
pRes.sendData();
%>
