    function showsuccesstoast(head,message) 
    {
        $('.toast').remove();
        const htmlcontent=$.parseHTML(`<div class="toast successtoast"><div class="toast-content"> <i class="fas fa-solid fa-check check successcheck"><svg x="0px" y="0px" viewBox="0 0 24 24"><path style="fill:#FFFFFF;" d="M8.67,20.41c-0.47,0-0.92-0.19-1.24-0.52l-6.64-6.64c-0.68-0.68-0.68-1.81,0-2.49s1.81-0.68,2.49,0l5.4,5.4L20.73,4.1c0.68-0.68,1.81-0.68,2.49,0c0.68,0.68,0.68,1.81,0,2.49L9.91,19.9C9.58,20.23,9.14,20.41,8.67,20.41z"/></svg> </i> <div class="message"> <span class="text text-1">${head}</span> <span class="text text-2">${message}</span> </div></div><i class="fa-solid fa-xmark close"> <svg x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve"> <path style="fill:#ffffff;" d="M19.23,22.28L1.57,4.62c-0.69-0.69-0.69-1.8,0-2.48l0.38-0.38c0.69-0.69,1.8-0.69,2.48,0L22.1,19.42 c0.69,0.69,0.69,1.8,0,2.48l-0.38,0.38C21.03,22.97,19.92,22.97,19.23,22.28z"/> <path style="fill:#ffffff;" d="M1.9,19.38L19.57,1.72c0.69-0.69,1.8-0.69,2.48,0l0.38,0.38c0.69,0.69,0.69,1.8,0,2.48L4.77,22.24 c-0.69,0.69-1.8,0.69-2.48,0L1.9,21.86C1.22,21.18,1.22,20.07,1.9,19.38z"/> </svg> </i> <div class="progress successprogress"></div></div>`);
        $('body').append(htmlcontent);
       var toast = $(".toast")
       var closeIcon = $(".close");
       var progress = $(".progress");

        let timer1, timer2;


        toast.addClass("slidedown");
        progress.addClass("active");

        timer1 = setTimeout(() => {
            toast.removeClass("slidedown");
            toast.addClass("slideup");
        }, 5000); //1s = 1000 milliseconds

        timer2 = setTimeout(() => {
            progress.removeClass("active");
        }, 5300);


        closeIcon.on("click", () => {
            toast.removeClass("slidedown");
            toast.addClass("slideup");
                setTimeout(() => {
                    progress.removeClass("active");
                }, 300);

                clearTimeout(timer1);
                clearTimeout(timer2);
            });
        
    }
    function showalerttoast(head,message) 
    {
        $('.toast').remove();
        const htmlcontent=$.parseHTML(`<div class="toast alerttoast"><div class="toast-content"> <i class="fas fa-solid fa-check check alertcheck"><svg x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve"> <path style="fill:#ffffff;" d="M19.23,22.28L1.57,4.62c-0.69-0.69-0.69-1.8,0-2.48l0.38-0.38c0.69-0.69,1.8-0.69,2.48,0L22.1,19.42 c0.69,0.69,0.69,1.8,0,2.48l-0.38,0.38C21.03,22.97,19.92,22.97,19.23,22.28z"/> <path style="fill:#ffffff;" d="M1.9,19.38L19.57,1.72c0.69-0.69,1.8-0.69,2.48,0l0.38,0.38c0.69,0.69,0.69,1.8,0,2.48L4.77,22.24 c-0.69,0.69-1.8,0.69-2.48,0L1.9,21.86C1.22,21.18,1.22,20.07,1.9,19.38z"/> </svg></i> <div class="message"> <span class="text text-1">${head}</span> <span class="text text-2">${message}</span> </div></div><i class="fa-solid fa-xmark close"> <svg x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve"> <path style="fill:#ffffff;" d="M19.23,22.28L1.57,4.62c-0.69-0.69-0.69-1.8,0-2.48l0.38-0.38c0.69-0.69,1.8-0.69,2.48,0L22.1,19.42 c0.69,0.69,0.69,1.8,0,2.48l-0.38,0.38C21.03,22.97,19.92,22.97,19.23,22.28z"/> <path style="fill:#ffffff;" d="M1.9,19.38L19.57,1.72c0.69-0.69,1.8-0.69,2.48,0l0.38,0.38c0.69,0.69,0.69,1.8,0,2.48L4.77,22.24 c-0.69,0.69-1.8,0.69-2.48,0L1.9,21.86C1.22,21.18,1.22,20.07,1.9,19.38z"/> </svg> </i> <div class="progress alertprogress"></div></div>`);
        $('body').append(htmlcontent);
        var  toast = $(".toast")
        var closeIcon = $(".close");
        var  progress = $(".progress");

        let timer1, timer2;


        toast.addClass("slidedown");
        progress.addClass("active");

        timer1 = setTimeout(() => {
            toast.removeClass("slidedown");
            toast.addClass("slideup");
        }, 5000); //1s = 1000 milliseconds

        timer2 = setTimeout(() => {
            progress.removeClass("active");
        }, 5300);


        closeIcon.on("click", () => {
            toast.removeClass("slidedown");
            toast.addClass("slideup");
                setTimeout(() => {
                    progress.removeClass("active");
                }, 300);

                clearTimeout(timer1);
                clearTimeout(timer2);
            });
        
    }
    
   
    function confirmtoast(head,message,options)
    {
       /* const options={
            yes:"Yes",
            no:"No",
            ok:()=>{
                
            }*/ //option usage
        //options yes:,no:,ok:
        $('.toastconfirm').remove();
        const htmlcontent=$.parseHTML(`<div class="toastconfirm successtoast"> <div class="toast-content"> <div class="message"> <span class="text text-1">${head}</span> <span class="text text-2">${message}</span> </div></div><div class="toast-bttn-view"> <button class="table-button nobttn" >${options.no}</button> <button class="table-button yesbttn">${options.yes}</button> </div><i class="fa-solid fa-xmark close"> <svg x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve"> <path style="fill:#ffffff;" d="M19.23,22.28L1.57,4.62c-0.69-0.69-0.69-1.8,0-2.48l0.38-0.38c0.69-0.69,1.8-0.69,2.48,0L22.1,19.42 c0.69,0.69,0.69,1.8,0,2.48l-0.38,0.38C21.03,22.97,19.92,22.97,19.23,22.28z"/> <path style="fill:#ffffff;" d="M1.9,19.38L19.57,1.72c0.69-0.69,1.8-0.69,2.48,0l0.38,0.38c0.69,0.69,0.69,1.8,0,2.48L4.77,22.24 c-0.69,0.69-1.8,0.69-2.48,0L1.9,21.86C1.22,21.18,1.22,20.07,1.9,19.38z"/> </svg> </i> <div class="progress"></div></div>`);
        $('body').append(htmlcontent);
        var  toast =$(".toastconfirm");
        var closeIcon = $(".close");
        var nobttn = $(".nobttn");
        var yesbttn =$(".yesbttn");    


        toast.addClass("slidedown");       

        closeIcon.on("click", () => {
            toast.removeClass("slidedown");
            toast.addClass("slideup");              
        });
        yesbttn.on("click", () => {
            toast.removeClass("slidedown");
            toast.addClass("slideup"); 
            options.ok();             
        });
        nobttn.on("click", () => {
            toast.removeClass("slidedown");
            toast.addClass("slideup");              
        });

    }

    function confirmalerttoast(head,message,options)
    {
        //options yes:,no:,ok:
        $('.toastconfirm').remove();
        const htmlcontent=$.parseHTML(`<div class="toastconfirm alerttoast"> <div class="toast-content"> <div class="message"> <span class="text text-1">${head}</span> <span class="text text-2">${message}</span> </div></div><div class="toast-bttn-view"> <button class="table-button nobttn" >${options.no}</button> <button class="table-button yesbttn">${options.yes}</button> </div><i class="fa-solid fa-xmark close"> <svg x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve"> <path style="fill:#ffffff;" d="M19.23,22.28L1.57,4.62c-0.69-0.69-0.69-1.8,0-2.48l0.38-0.38c0.69-0.69,1.8-0.69,2.48,0L22.1,19.42 c0.69,0.69,0.69,1.8,0,2.48l-0.38,0.38C21.03,22.97,19.92,22.97,19.23,22.28z"/> <path style="fill:#ffffff;" d="M1.9,19.38L19.57,1.72c0.69-0.69,1.8-0.69,2.48,0l0.38,0.38c0.69,0.69,0.69,1.8,0,2.48L4.77,22.24 c-0.69,0.69-1.8,0.69-2.48,0L1.9,21.86C1.22,21.18,1.22,20.07,1.9,19.38z"/> </svg> </i> <div class="progress"></div></div>`);
        $('body').append(htmlcontent);
        var toast = $(".toastconfirm");
        var closeIcon = $(".close");
        var nobttn =$(".nobttn");
        var yesbttn = $(".yesbttn");    


        toast.addClass("slidedown");       

        closeIcon.on("click", () => {
            toast.removeClass("slidedown");
            toast.addClass("slideup");              
        });
        yesbttn.on("click", () => {
            toast.removeClass("slidedown");
            toast.addClass("slideup"); 
            options.ok();             
        });
        nobttn.on("click", () => {
            toast.removeClass("slidedown");
            toast.addClass("slideup");              
        });

    }