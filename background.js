var endpoint_url="http://requestb.in/1ekibv71";
// The onClicked callback function.
function onClickHandler(info, tab) {
window_title=tab.title;
   if (info.menuItemId == "summarize")
   {
   summarize(info.pageUrl);
   }
 }
//Listener
chrome.contextMenus.onClicked.addListener(onClickHandler);
//Create Context Menu
 var title1 = "Summarize";
 var id1 = chrome.contextMenus.create({"title": title1, "contexts":["page","selection","link","editable"],       "id": "summarize"});
//Context Menu Function
//XHR
function httpGet(input_url)
    {
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", input_url, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
    }
function summarize(url){
var prepare=endpoint_url+'?url='+url+'&request='+'summarize';
httpGet(prepare);
}
