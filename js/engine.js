// Как только страничка загрузилась
window.onload = function () {
    // проверяем поддерживает ли браузер FormData
    if(!window.FormData) {
        /* * если не поддерживает, то выводим
         * то выводим предупреждение вместо формы */
        var div = ge('content');
        div.innerHTML = "Ваш браузер не поддерживает объект FormData";
        div.className = 'notSupport';
    }
}



$(document).ready(function(){
    // =validation
    var errorTxt = 'Ошибка отправки';

    $("#sendform").validate({
        submitHandler: function(form){
            var form = document.forms.sendform,
                formData = new FormData(form),
                xhr = new XMLHttpRequest();

            xhr.open("POST", "send.php");

            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if(xhr.status == 200) {
                        $("#sendform").html('<div class="thank">Заявка успешно отправлена!<div>');
                    }
                }
            };
            xhr.send(formData);
        },
        rules:{

            name:{
                required: true,


            },
            email:{
                required: true,
                email:true,

            },
            message:{
                required: true,

            },

            tel:{
                required: true,

            },
        },

        messages:{

            name:{
                required: "Это поле обязательно для заполнения",

            },

            tel:{
                required: "Это поле обязательно для заполнения",

            },
            email:{
                required: "Это поле обязательно для заполнения",
                email:"Введите корректный email",

            },
            message:{
                required: "Это поле обязательно для заполнения",

            },

        }
    });
    //
    $("#contactSendForm").validate({
        submitHandler: function(form){
            var form = document.forms.contactSendForm,
                formData = new FormData(form),
                xhr = new XMLHttpRequest();

            xhr.open("POST", "contactSend.php");

            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if(xhr.status == 200) {
                        $("#contactSendForm").html('<div class="contactThank">Заявка успешно отправлена!<div>');
                    }
                }
            };
            xhr.send(formData);
        },
        rules:{

            name:{
                required: true,


            },
            email:{
                required: true,
                email:true,

            },
            message:{
                required: true,

            },

            tel:{
                required: true,

            },
        },

        messages:{

            name:{
                required: "Это поле обязательно для заполнения",

            },

            tel:{
                required: "Это поле обязательно для заполнения",

            },
            email:{
                required: "Это поле обязательно для заполнения",
                email:"Введите корректный email",

            },
            message:{
                required: "Это поле обязательно для заполнения",

            },

        }
    });
});


function sendSuccess(callback){
    $(callback).find("form fieldset").html(thank);
}


