function removeShorts()
{
    var shorts_tab = document.querySelector(".pivot-shorts")

    if (shorts_tab != null)
    {
        shorts_tab.remove()
    }

    var shorts_video = document.getElementsByTagName("ytm-reel-shelf-renderer")
    if(shorts_video != null)
    {
        lenght = shorts_video.length
        for (var x=0;x<length;x++)
        {
            shorts_video[x].remove()
        }
    }
}

window.onscroll = removeShorts;
