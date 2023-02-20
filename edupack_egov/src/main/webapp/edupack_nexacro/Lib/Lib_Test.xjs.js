//XJS=Lib_Test.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        this.var1 = "abc";

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
