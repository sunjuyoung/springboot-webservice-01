
//index객체 안에서만 function이 유효하기 때문에 다른 JS와 겹칠 위험이 사라진다.
var index={
    init : function(){
        var _this = this;
        $('#btn-save').on('click',function(){
            _this.save();
        });
    },

    save : function(){
        var data={
            title:$('#title').val(),
            content:$('#content').val(),
            author:$('#author').val()
        };

        $.ajax({
            type: 'POST',
            url : '/api/v1/posts',
            dataType : 'json',
            contentType : 'application/json; charset=utf-8',
            data : JSON.stringify(data)
        }).done(function(){
            alert("글 등록 완료");
            window.location.href='/';
        }).fail(function(error){
            alert(JSON.stringify(error));
        });
    }

};
index.init();