var endpoint_url="http://requestb.in/s32nbgs3";
var response;

var bar=$('<div id="toolbar_top"></div>').prependTo('body');
$('#toolbar_top').css({
        'background': 'rgba(0, 0 ,0 ,0.7)',
        'position':'fixed',
        'left':'0',
        'top':'0',
        'width':'100%',
        'z-index':'9999'
    });
$('#toolbar_top').append('<input class="toolbar_button" type="button" value="Summarize">').click(function(){summarize();});
$('.toolbar_button').css({
		'margin':'5px',
		'padding':'10px',
        'opacity':'1',
        'z-index':'9999'
    });
//XHR
function httpGet(input_url)
    {
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", input_url, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
    }
function summarize(){
var url=document.URL;
var prepare=endpoint_url+'?request_type='+'summarize'+'&request_url='+url;
response=httpGet(prepare);
if(response)
{
var popup_window=window.open("","Summarize Results","width=300,height=200");
popup_window.document.write(response);
}
}
