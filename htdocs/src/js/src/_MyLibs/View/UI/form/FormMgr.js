// ------------------------------------------------------------
//
//  FormMgr
//
// ------------------------------------------------------------

(function(){

  ;

  function FormMgr($sendBtn) {
      
      this.$sendBtn = $sendBtn;
      this.APIURL = '/api/form.php';

      this.status = 'input'; // check,thanks

      this.inputList = [];
      this.isCheck = false;
      this.ajax = null;

      this.setup();
      this.create();
      this.getVal();
      this.setEvents();

  }

  FormMgr.prototype = {

    setup: function() {

      this.ajax = new gb.Ajax(this.APIURL);
      this.ajax.successFunc = this.success;
      this.ajax.errorFunc = this.error;

    },

    create: function() {

      var self = this;

      $('.formItem').each(function(index, el) {

        var input = new gb.Inputitem($(this));
        self.inputList.push(input);
        
      });

    },

    getVal: function () {

      for (var i = 0; i < this.inputList.length; i++) {
        var input = this.inputList[i];
        input.getVal();        
      };

    },

    validate: function () {

      if (this.filledCheck() && this.isCheck) {
        
        this.sendOK();      

      } else {

        // アクティブにしない
        $('#contact .linkBox').addClass('is-not-active');
        this.$sendBtn.off('click');

      }

    },

    filledCheck: function () {

      var isFilled = true;
      $.each(this.inputList, function (index, input) {
          isFilled = input.filled && isFilled;
      });

      return isFilled; 

    },

    sendOK: function () {

      $('#contact .linkBox').removeClass('is-not-active');
      this.$sendBtn.off('click');
      this.$sendBtn.on('click', this.sendMail.bind(this));

    },

    sendMail: function () {

      this.removeAllError();

      var param = {
                    data: { 
                      "name": this.inputList[0].val,
                      "company": this.inputList[1].val,
                      "mail": this.inputList[2].val,
                      "inquiry": this.inputList[3].val
                    },
                    dataType: "json",
                    type: "POST"
                  }
      this.ajax.run(param);

    },

    success: function (data) {

      if (data.data.name) {
        $(".errorText01").append(data.data.name);
        $(".errorText01").prev().addClass('error');
      }
      if (data.data.company) {
        $(".errorText02").append(data.data.company);
        $(".errorText02").prev().addClass('error');
      }
      if (data.data.mail) {
        $(".errorText03").append(data.data.mail);
        $(".errorText03").prev().addClass('error');
      }
      if (data.data.inquiry) {
        $(".errorText04").append(data.data.inquiry);
        $(".errorText04").prev().addClass('error');
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

    error: function (data) {

      alert('errorが発生しました。ブラウザをリロードして再度お試し下さい');

    },

    onTouch: function(self) {

      $(this).toggleClass('is-active');
      var src = $('.checkbox img').attr('src');

      // チェックされているかどうか判定
      if ($(this).hasClass('is-active')) {
        self.isCheck = true;        
        src = strReplace(src, '_off', '_on')
        
      } else {
        self.isCheck = false;
        src = strReplace(src, '_on', '_off')

      }

      // 画像設定
      $('.checkbox img').attr('src',src);

      // sendボタンをアクティブにするかどうか判定
      self.validate();


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

      $('.formItem').on('click', function(){self.removeError.call(this,self);});
      $('.formItem').on('blur keydown keyup keypress', this.validate.bind(this,self));
      $('.checkbox').on('touchstart', function(){self.onTouch.call(this,self);});

    },

  }

  gb.FormMgr = FormMgr;

})();