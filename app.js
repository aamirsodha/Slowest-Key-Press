var txtinput = document.getElementById("txtInput"),
res = document.getElementById("txtRes"),
timeTaken = document.getElementById("txttime"),
btnc = document.getElementById("btnClear"),
downtime = 0,
uptime = 0,
TimeDiff = 0;


txtinput.addEventListener('keydown',keyaction)
txtinput.addEventListener('keyup',keyaction)
btnc.addEventListener('mouseup', function() {
    txtinput.focus();
});

function keyaction(event){
    
    if((event.keyCode >=65 && event.keyCode <= 90) || (event.keyCode>=96 && event.keyCode<=105) || (event.keyCode>=48 && event.keyCode<=57))
        {
            // res.innerHTML = event.key+", "+event.keyCode;
            // console.log(event)
            if(event.type === 'keydown')
                {
                    downtime = new Date().getTime()
                }
            if(event.type === 'keyup')
                {
                    uptime = new Date().getTime()
                    CalTime(event.key)
                }
        }
    
}
function CalTime(keypressed)
{
    var tres = (uptime-downtime)/1000;
    if(tres > TimeDiff)
        {
            TimeDiff = tres
            // console.log(tres,TimeDiff)
            res.innerHTML = keypressed;
            timeTaken.innerHTML = tres+" sec"
        }
}
function ClearAll()
{
    txtinput.value = "";
    res.innerHTML = "";
    timeTaken.innerHTML = ""
    downtime = 0;
    uptime = 0;
    TimeDiff = 0;
}
