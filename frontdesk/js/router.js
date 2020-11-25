class Router
{
    static resolvePath(fromroot)
    {
        return Router.Root()+"/"+fromroot;
    }

    static Root()
    {
        return location.protocol+"//"+location.host+"/maverick";
    }

    static  hashArg(o)
    {
        if(o != null)
        {
            let hash = location.hash.split("#");

            if(hash.length > 1)
            {
                let args = hash[1].split("/");

                for(let i = 0; i < args.length; i++)
                {

                }
            }
        }
    }

    static getPage()
    {
        let p = location.href.trim().split(this.Root());

        if(p.length > 1)
        {
            if(p[1] === "/")
            {
                return  "";
            }
            else
            {
                let pp = p[1].trim().split("/");

                for(let i = 0; i < pp.length; i++)
                {
                    if((pp[i] != "") && (pp[i] != " "))
                    {
                        return  pp[i];
                    }
                }
            }
        }
        else
        {
            return "";
        }
    }

    static getArg(o=0)
    {
        let p = location.href.trim().split(this.Root()+this.getPage());

        if(p.length > 1)
        {
            if(p[1] === "/")
            {
                return  "";
            }
            else
            {
                let pp = p[1].trim().split("/");

                for(let i = 0; i < pp.length; i++)
                {
                    if((pp[i] != "") && (pp[i] != " ") && (i = o))
                    {
                        return  pp[i];
                    }
                }

                return  "";
            }
        }
        else
        {
            return "";
        }
    }


    static pageAppendage()
    {
        let p = location.href.trim().split(this.Root().toLowerCase()+"/"+this.getPage().toLowerCase());

        if(p.length > 0)
        {
            let h = p[p.length - 1].split("/");

            let ret = "";

            for(let i = 0; i < h.length; i++)
            {
                if(ret === "")
                {
                    ret = h[i];
                }
                else
                {
                    ret += "/"+h[i];
                }
            }

            return ret;
        }
        else
        {
            return "";
        }
    }

    static getIntent()
    {
        let hash = location.hash.toLowerCase().split("intent=");

        if(hash.length > 1)
        {
            let ret = "";

            for(let i = 1; i < hash.length; i++)
            {
                if(ret == "")
                {
                    ret = hash[i];
                }
                else
                {
                    ret += "intent="+hash[i];
                }
            }
            return ret;
        }
    }

    static Arg()
    {

    }
}

class Page
{
    static Switch(o)
    {
        let container = null;
        let newcon = null;
        let animation = "fade up";

        if(o != null)
        {
            if(o.container != null)
            {
                if(typeof o.container == "string")
                {
                    container = document.getElementById(o.container);
                }
                else
                {
                    container = o.container;
                }
            }
            if(o.new != null)
            {
                if(typeof o.new == "string")
                {
                    newcon = document.getElementById(o.new);
                }
                else
                {
                    newcon = o.new;
                }
            }
            if(o.animation != null)
            {
                animation = o.animation;
            }

            if((container != null) || (newcon != null))
            {
                for(let i = 0; i < container.children.length; i++)
                {
                    $(container.children[i]).transition();
                    $(container.children[i]).transition(animation +" out", function () {
                        
                    });
                }
            }
        }
    }


    static LaunchModal(o)
    {
        let cover = document.createElement("div");
        cover.style.position = "fixed";
        cover.style.width = "100%";
        cover.style.top = "0px";
        cover.style.height = "100%";
        cover.style.zIndex = 250;
        cover.id = "advert-cover";
        cover.style.backgroundColor = "rgba(0,0,0,0.4)";
        cover.style.display = "none";
        cover.style.overflow = "auto";
        document.body.prepend(cover);

        let l_width = 6;
        let m_width = 8;
        let s_width = "xl";

        if(o != null)
        {
            if(o.LWidth != null)
            {
                l_width = o.LWidth;
            }
            if(o.MWidth != null)
            {
                m_width = o.MWidth;
            }
            if(o.SWidth != null)
            {
                s_width = o.SWidth;
            }
        }


        cover.innerHTML = "<div id='advert-modal' class='l-width-4 z-depth-1' style='margin: auto; display: none;'>" +
            "<div id='modal-con' class='l-margin-t-6 s-margin-t-2'>" +
            "</div></div>";

        $("#advert-cover").fadeIn(1000, function(){
            $("#advert-modal").transition("fade right in", function(){
                loadCurrency();
            });
        });

        $(".ui.dropdown").dropdown();
    }
}