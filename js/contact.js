$(document).ready(function(){

    $('#bttnsendmail').on('click',function(){
        contactme();
    });
   $('#bttnhire').on('click',function(){
    hireme();
    });
});

function contactme()
{
  
        var name=document.getElementById('txtname').value;
        var email=document.getElementById('txtemail').value;
        var phone=document.getElementById('txtphone').value;
        var message=document.getElementById('txtmessage').value;
       

        if(validator.checkvalidation(['#txtname','#txtphone','#txtemail','#txtmessage']))
        {
            loader.showloader("Connecting...");
            $.ajax({
                method: 'post',
                url: "send.php",
                data: {
                    name:name,
                    email:email,
                    phone:phone,
                    message:message
                },
                success:function(data)
                {
                    loader.hideloader("Connecting...");
                    validator.clearerrorandvalue(['#txtname','#txtphone','#txtemail','#txtmessage']);     
                    Swal.fire(
                        'Thanks!',
                        'Our team will contact you shortly',
                        'success'
                      )               
                }

            });
        }
    }

    function hireme()
    {
      
          
            var email=document.getElementById('txthireemail').value;
           
            if(validator.validateemail(email)==false)
            {
                validator.addvalidation("#txthireemail","Please enter valid email address",true);
                return;
            }
            if(validator.checkvalidation(['#txthireemail']))
            {
                loader.showloader("Connecting...");
                $.ajax({
                    method: 'post',
                    url: "subscribe.php",
                    data: {
                        email:email
                    },
                    success:function(data)
                    {
                        loader.hideloader("Connecting...");
                        validator.clearerrorandvalue(['#txthireemail']);     
                        Swal.fire(
                            'Thanks!',
                            'Our team will contact you shortly',
                            'success'
                          )               
                    }
    
                });
            }
        }
    