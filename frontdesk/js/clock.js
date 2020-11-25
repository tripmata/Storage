
var m = 0;
var h = 0;
var s = 0;
var d = 0;

$(document).ready(function () {
    m = Number($("#min").html());
    h = Number($("#hr").html());
    s = Number($("#sec").html());
    d = Number($("#dy").html());

    runClock(function () {
        location.reload();
    });
});


function runClock(func)
{

    setInterval(function () {
        if(s < 1)
        {
            if((d > 0) || (h > 0) || (m > 0))
            {
                s = 59;
                m--;
            }
            else
            {
                s = 0;
                updateClock();
                if(typeof func == "function")
                {
                    func();
                }
            }

            if((m == -1))
            {
                if((d > 0) || (h > 0))
                {
                    m = 59;
                    h--;
                }

                if((h == -1) && (d > 0))
                {
                    h--;

                    h = 23;

                    if(d > 0)
                    {
                        d--;
                    }
                }
                else
                {
                    h = 0;
                }
            }
            else
            {
                chd = false;
            }
        }
        else{s--;}


        updateClock();
    }, 1000)
}

function updateClock() {
    $("#min").html(m);
    $("#hr").html(h);
    $("#sec").html(s);
    $("#dy").html(d);
}