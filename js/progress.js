
var loader={
    showloader:(text='Loading..')=>{
       
        const count=$('.modal-window').length;
        if(count<1)
        {
            var html=`<div class="modal-window"><div class="progress-container"><div class="progress-loader"></div><div class="progress-view"> <div class="progress-image"> <img src="images/logo.svg"/> </div><div class="progress-text">${text}</div></div></div></div>`;
            $('.modal-window').remove();
            $('body').append(html);
        }
        else
        {
            $('.progress-text').text(text);
        }
    },
    hideloader:()=>
    {
        $('.modal-window').remove();
    },
    showloaderinside:(text='Loading..',element)=>{
       
        const count=$('.modal-window').length;
        if(count<1)
        {
            var html=`<div class="modal-window" style="position:absolute;"><div class="progress-container"><div class="progress-loader"></div><div class="progress-view"> <div class="progress-image"> <img src="images/logo.svg"/> </div><div class="progress-text">${text}</div></div></div></div>`;
            $('.modal-window').remove();
            $(element).addClass('loader-relative');
            $(element).append(html);
        }
        else
        {
            $('.progress-text').text(text);
        }
    },
    hideloaderinside:(element)=>
    {
        $(element).removeClass('loader-relative');
        $(element).find('.modal-window').remove();
    }
}