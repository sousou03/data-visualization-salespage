// ------------------------------------------------------------
//
//  Inputitem
//
// ------------------------------------------------------------

(function(){

  ;

  function Inputitem($input) {

    this.$input = $input;
    this.val = null;    
    this.type = '';
    this.filled = false;

    this.setEvents();

  };

  Inputitem.prototype = {

    getVal: function () {

      this.val = this.$input.val();

    },

    filledCheck: function () {

      if (this.val !== '') this.filled = true;
      else this.filled = false;
      
    },

    onChange: function () {

      this.getVal();  
      this.filledCheck();

    },

    setEvents: function () {
      
      this.$input.on('blur keydown keyup keypress', this.onChange.bind(this));

    },

  }

  gb.Inputitem = Inputitem;

})();