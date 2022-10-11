var validator={
    addvalidation:(element,message="",focus=false)=>{
        if( $(element).hasClass('select2-hidden-accessible'))
        {    
            const select2=$(element).parent().find('.select2-selection')
            if(focus==true)
            {
                $(element).select2('open');
            }        
            validator.removevalidation(element);
            select2.addClass("show-error");
            if(message!="")
            {
                $(element).parent().append(`<div class="error-text"><span>${message}</span></div>`);
            }
            $(element).off('input.validation');
            $(element).on('input.validation', function () {
            if ($(this).val() == '') {
                validator.addselect2validation(element, message);
            }
            else {
                validator.removevalidation(element);
            }
            });
        }
        else
        {
        if(focus==true)
            {
                $(element).focus();
            }        
            validator.removevalidation(element);
            $(element).addClass("show-error");
            if(message!="")
            {
            $(element).parent().append(`<div class="error-text"><span>${message}</span></div>`);
            }
            $(element).off('input.validation');
            $(element).on('input.validation', function () {
            if ($(this).val() == '') {
                validator.addvalidation(element, message);
            }
            else {
                validator.removevalidation(element);
            }
            });
        }
    },
    removevalidation:(element)=>
    {
        if( $(element).hasClass('select2-hidden-accessible'))
        {
            const select2=$(element).parent().find('.select2-selection')
            $(select2).removeClass("show-error");
            $(select2).parent().find('.error-text').remove();
        }
        else
        {
             $(element).removeClass("show-error");
             $(element).parent().find('.error-text').remove();
        }
    },
    checkvalidation:(elements)=>
    {
        var focus=0;
        var isvalid=true;
        elements.forEach(element => {
            const currentelement=$(element);
            const value= cstr(currentelement.val()).trim();
            const message=currentelement.attr("data-validation");
            var wantfocus=false;
            if(focus==0)
            {
                wantfocus=true;
            }
            if(value=="")
            {
                isvalid=false;
                
                    validator.addvalidation(element,message,wantfocus);
                
                focus+=1;
            }
            
        });

        return isvalid;
    },
    clearvalidation:(elements)=>
    {
     
        elements.forEach(element => {
            validator.removevalidation(element);            
        });
    },
    clearerrorandvalue:(elements)=>
    {     
        elements.forEach(element => {
            if( $(element).hasClass('select2-hidden-accessible'))
            {
                $(element).val('');
                $(element).trigger('change');
                validator.removevalidation(element);
            }
            else
            {
                $(element).val('');
                validator.removevalidation(element);
            }
            
        });
    },
    serversideerror:(json)=>
    {
       
           var focused=true; 
           var count=json.length;
           for(var x=0;x<count;x++)
           {
              var controlname=json[x].control;
              var htmltype=json[x].html;
              var message=json[x].message;
              if(htmltype=="file")
              {
                
                validator.addfilevalidation(controlname); 
              }
              else
              {
                
                validator.addvalidation(controlname,message,focused); 
                focused=false;
              }             
           }
        
    },
    addfilevalidation:(element)=>{    
      
        var component=$(element).parent().find('.feat-image-view');
        validator.removefilevalidation(component);
        $(component).addClass("file-error");

        $(element).off('change.validation');
        $(element).on('change.validation', function () {
        if ($(this).val() == '') {
            validator.addfilevalidation(component);
        }
        else {
            validator.removefilevalidation(component);
        }
        });
    },
    addimagevalidation:(element,component)=>{    
      
        validator.removefilevalidation(component);
        $(component).addClass("file-error");

        $(element).off('change.validation');
        $(element).on('change.validation', function () {
     
            validator.removefilevalidation(component);
        
        });
    },
    removefilevalidation:(element)=>{    
      
        $(element).removeClass("file-error");
    },
    validateemail:(email)=>{
       
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    
    }
}