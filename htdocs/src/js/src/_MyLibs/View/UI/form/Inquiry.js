//--------------------------------------------------
//
//  pjax
//
//--------------------------------------------------

(function(){

  function Inquiry($target) {

    this.$target = $target;
    this.APIURL = '/api/form.php';

    this.name = $('.formName').val();
    this.company = $('.formCompany').val();
    this.mail = $('.formAdress').val();
    this.contents = $('.formInquiry').val();
    this.isCheck = false;

    this.setEvents();


    log(1);

  }

  Inquiry.prototype = {

    getVal: function () {

      this.name = $('.formName').val();
      this.company = $('.formCompany').val();
      this.mail = $('.formAdress').val();
      this.contents = $('.formInquiry').val();

    },

    inputCheck: function () {

      this.getVal();

      // 全部空じゃなかったら
      if (
          this.name !== '' && 
          this.company !== '' && 
          this.mail !== '' && 
          this.contents !== '' &&
          this.isCheck
          ) {

        this.sendOK();

      } else {
        // アクティブにしない
        $('#contact .linkBox').addClass('is-not-active');
        this.$target.off('click');
      }

    },

    sendOK: function () {

      $('#contact .linkBox').removeClass('is-not-active');
      this.$target.off('click');
      this.$target.on('click', this.sendMail.bind(this));

    },

    sendMail: function () {

      this.getVal();
      this.removeAllError();

      $.ajax(this.APIURL, {
        data: { 
          'name': this.name,
          'company': this.company,
          'mail': this.mail,
          'inquiry': this.contents
        },
        dataType: 'json',
        type: 'POST'
      })
      
      .then(
        // success
        function (data) {

          if (data.data.name) {
            $('.errorText01').append(data.data.name);
            $('.errorText01').prev().addClass('error');
          }
          if (data.data.company) {
            $('.errorText02').append(data.data.company);
            $('.errorText02').prev().addClass('error');
          }
          if (data.data.mail) {
            $('.errorText03').append(data.data.mail);
            $('.errorText03').prev().addClass('error');
          }
          if (data.data.inquiry) {
            $('.errorText04').append(data.data.inquiry);
            $('.errorText04').prev().addClass('error');
          }

          if (data.status == '200') {

            var tl = new TimelineMax();

            tl
              .to($('#form'), 0.8, {
                'opacity': 0,
                y: -50,
                ease: Power3.easeOut,
                onComplete: function(){
                  $('#form').hide();

                  TweenMax.set($('#thank'), {
                    'opacity': 0,
                    y: 50,
                    'display': 'block',
                  });
                  $(window).trigger('resize');

                }
              })
              .to($('#thank'), 0.8,  {
                onStart: function(){

                },
                'opacity': 1,
                y: 0,
                ease: Power3.easeOut,
              });

            // TweenMax.set($('#form'), {'display': 'none'});
            // TweenMax.set($('#thank'), {'display': 'block'});
            
          
          };

        },
        // errorssss
        function (jqXHR) {
          alert('errorが発生しました。ブラウザをリロードして再度お試し下さい');
        }
      );

    },

    onTouch: function() {

      $(this).toggleClass('is-active');
      var src = $('.checkbox img').attr('src');

      // チェックされているかどうか判定
      if ($(this).hasClass('is-active')) {
        gb.inquiry.isCheck = true;        
        src = strReplace(src, '_off', '_on')
        
      } else {
        gb.inquiry.isCheck = false;
        src = strReplace(src, '_on', '_off')

      }

      // 画像設定
      $('.checkbox img').attr('src',src);

      // sendボタンをアクティブにするかどうか判定
      gb.inquiry.inputCheck();


      function strReplace (str, before, after) {

        var r = new RegExp( before, 'g');

        return str.replace( r , after );

      }

    },

    removeError: function () {

      if ($(this).next().hasClass('errorText')) {
        $(this).next().html('');
      };
      if ($(this).hasClass('error')) {
        $(this).removeClass('error');
      };

    },

    removeAllError: function () {

      if ($('.formItem').next().hasClass('errorText')) {
        $('.formItem').next().html('');
      };
      if ($('.formItem').hasClass('error')) {
        $('.formItem').removeClass('error');
      };

    },

    setEvents: function () {

      var self = this;

      $('.formItem').on('click', function(){self.removeError.call(this);});
      $('.formItem').on('blur keydown keypress keyup', this.inputCheck.bind(this));
      $('.checkbox').on('touchstart', function(){self.onTouch.call(this);});

    },

  }

  gb.Inquiry = Inquiry;

})();