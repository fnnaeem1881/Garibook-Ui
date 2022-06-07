
  // An array of highlighting dates ( 'dd-mm-yyyy' )
  var disableDates = ["11-6-2022", "16-11-2020", "17-11-2020","27-12-2020"];
      
  $('.datepicker').datepicker({
      format: 'mm/dd/yyyy',
      beforeShowDay: function(date){
          dmy = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
          if(disableDates.indexOf(dmy) != -1){
               return true,'highlight';
          }
              return true;
          
      }
  });

  $(document).ready(function(){
      var $d7input = $('input', '#DateTimeMultiCity1').focus(function() {
          var $dropdown = $('<div class="dropdown"/>')
              .appendTo('#DateTimeMultiCity1');
          setTimeout(function(){
              $dropdown.datetimepicker({
                  date: $d7input.data('value'),
                  viewMode: 'YMDHM',
                  onDateChange: function(){
                      var value =this.getValue();
                      $d7input.val(this.getText('YYYY-MM-DD h:m'));
                      $d7input.data('value', value);
                    console.log(this.getText('YYYY-MM-DD h:m'));
                      // $dropdown.remove();
                  },
                  onClose: function() {
                      $dropdown.remove();
                  }
              })
          }, 10);


      });   
  });
  $(document).ready(function(){
      var $d7input = $('input', '#DateTimeMultiCity2').focus(function() {
          var $dropdown = $('<div class="dropdown"/>')
              .appendTo('#DateTimeMultiCity2');
          setTimeout(function(){
              $dropdown.datetimepicker({
                  date: $d7input.data('value'),
                  viewMode: 'YMDHM',
                  onDateChange: function(){
                      var value =this.getValue();
                      $d7input.val(this.getText('YYYY-MM-DD h:m'));
                      $d7input.data('value', value);
                    console.log(this.getText('YYYY-MM-DD h:m'));
                      // $dropdown.remove();
                  },
                  onClose: function() {
                      $dropdown.remove();
                  }
              })
          }, 10);


      });   
  });
  $(document).ready(function(){
      var $d7input = $('input', '#DateTimeMultiCity3').focus(function() {
          var $dropdown = $('<div class="dropdown"/>')
              .appendTo('#DateTimeMultiCity3');
          setTimeout(function(){
              $dropdown.datetimepicker({
                  date: $d7input.data('value'),
                  viewMode: 'YMDHM',
                  onDateChange: function(){
                      var value =this.getValue();
                      $d7input.val(this.getText('YYYY-MM-DD h:m'));
                      $d7input.data('value', value);
                    console.log(this.getText('YYYY-MM-DD h:m'));
                      // $dropdown.remove();
                  },
                  onClose: function() {
                      $dropdown.remove();
                  }
              })
          }, 10);


      });   
  });
  $(document).ready(function(){
      var $d7input = $('input', '#DateTimeMultiCity4').focus(function() {
          var $dropdown = $('<div class="dropdown"/>')
              .appendTo('#DateTimeMultiCity4');
          setTimeout(function(){
              $dropdown.datetimepicker({
                  date: $d7input.data('value'),
                  viewMode: 'YMDHM',
                  onDateChange: function(){
                      var value =this.getValue();
                      $d7input.val(this.getText('YYYY-MM-DD h:m'));
                      $d7input.data('value', value);
                    console.log(this.getText('YYYY-MM-DD h:m'));
                      // $dropdown.remove();
                  },
                  onClose: function() {
                      $dropdown.remove();
                  }
              })
          }, 10);


      });   
  });
  $(document).ready(function(){
      var $d7input = $('input', '#DateTimeMultiCity5').focus(function() {
          var $dropdown = $('<div class="dropdown"/>')
              .appendTo('#DateTimeMultiCity5');
          setTimeout(function(){
              $dropdown.datetimepicker({
                  date: $d7input.data('value'),
                  viewMode: 'YMDHM',
                  onDateChange: function(){
                      var value =this.getValue();
                      $d7input.val(this.getText('YYYY-MM-DD h:m'));
                      $d7input.data('value', value);
                    console.log(this.getText('YYYY-MM-DD h:m'));
                      // $dropdown.remove();
                  },
                  onClose: function() {
                      $dropdown.remove();
                  }
              })
          }, 10);


      });   
  });
  $(document).ready(function(){
      var $d7input = $('input', '#DateTimeMultiCity6').focus(function() {
          var $dropdown = $('<div class="dropdown"/>')
              .appendTo('#DateTimeMultiCity6');
          setTimeout(function(){
              $dropdown.datetimepicker({
                  date: $d7input.data('value'),
                  viewMode: 'YMDHM',
                  onDateChange: function(){
                      var value =this.getValue();
                      $d7input.val(this.getText('YYYY-MM-DD h:m'));
                      $d7input.data('value', value);
                    console.log(this.getText('YYYY-MM-DD h:m'));
                      // $dropdown.remove();
                  },
                  onClose: function() {
                      $dropdown.remove();
                  }
              })
          }, 10);


      });   
  });
  $(document).ready(function(){
      var $d7input = $('input', '#DateTimeMultiCity7').focus(function() {
          var $dropdown = $('<div class="dropdown"/>')
              .appendTo('#DateTimeMultiCity7');
          setTimeout(function(){
              $dropdown.datetimepicker({
                  date: $d7input.data('value'),
                  viewMode: 'YMDHM',
                  onDateChange: function(){
                      var value =this.getValue();
                      $d7input.val(this.getText('YYYY-MM-DD h:m'));
                      $d7input.data('value', value);
                    console.log(this.getText('YYYY-MM-DD h:m'));
                      // $dropdown.remove();
                  },
                  onClose: function() {
                      $dropdown.remove();
                  }
              })
          }, 10);


      });   
  });
  $(document).ready(function(){
      var $d7input = $('input', '#DateTimeMultiCity8').focus(function() {
          var $dropdown = $('<div class="dropdown"/>')
              .appendTo('#DateTimeMultiCity8');
          setTimeout(function(){
              $dropdown.datetimepicker({
                  date: $d7input.data('value'),
                  viewMode: 'YMDHM',
                  onDateChange: function(){
                      var value =this.getValue();
                      $d7input.val(this.getText('YYYY-MM-DD h:m'));
                      $d7input.data('value', value);
                    console.log(this.getText('YYYY-MM-DD h:m'));
                      // $dropdown.remove();
                  },
                  onClose: function() {
                      $dropdown.remove();
                  }
              })
          }, 10);


      });   
  });
  $(document).ready(function(){
      var $d7input = $('input', '#DateTimeMultiCity9').focus(function() {
          var $dropdown = $('<div class="dropdown"/>')
              .appendTo('#DateTimeMultiCity9');
          setTimeout(function(){
              $dropdown.datetimepicker({
                  date: $d7input.data('value'),
                  viewMode: 'YMDHM',
                  onDateChange: function(){
                      var value =this.getValue();
                      $d7input.val(this.getText('YYYY-MM-DD h:m'));
                      $d7input.data('value', value);
                    console.log(this.getText('YYYY-MM-DD h:m'));
                      // $dropdown.remove();
                  },
                  onClose: function() {
                      $dropdown.remove();
                  }
              })
          }, 10);


      });   
  });
  $(document).ready(function(){
      var $d7input = $('input', '#DateTimeMultiCity10').focus(function() {
          var $dropdown = $('<div class="dropdown"/>')
              .appendTo('#DateTimeMultiCity10');
          setTimeout(function(){
              $dropdown.datetimepicker({
                  date: $d7input.data('value'),
                  viewMode: 'YMDHM',
                  onDateChange: function(){
                      var value =this.getValue();
                      $d7input.val(this.getText('YYYY-MM-DD h:m'));
                      $d7input.data('value', value);
                    console.log(this.getText('YYYY-MM-DD h:m'));
                      // $dropdown.remove();
                  },
                  onClose: function() {
                      $dropdown.remove();
                  }
              })
          }, 10);


      });   
  });
  $(document).ready(function(){
      var $d7input = $('input', '#DateTimeMultiCity11').focus(function() {
          var $dropdown = $('<div class="dropdown"/>')
              .appendTo('#DateTimeMultiCity11');
          setTimeout(function(){
              $dropdown.datetimepicker({
                  date: $d7input.data('value'),
                  viewMode: 'YMDHM',
                  onDateChange: function(){
                      var value =this.getValue();
                      $d7input.val(this.getText('YYYY-MM-DD h:m'));
                      $d7input.data('value', value);
                    console.log(this.getText('YYYY-MM-DD h:m'));
                      // $dropdown.remove();
                  },
                  onClose: function() {
                      $dropdown.remove();
                  }
              })
          }, 10);


      });   
  });
  $(document).ready(function(){
      var $d7input = $('input', '#TmePicker').focus(function() {
          var $dropdown = $('<div class="dropdown"/>')
              .appendTo('#TmePicker');
          setTimeout(function(){
              $dropdown.datetimepicker({
                  date: $d7input.data('value'),
                  viewMode: 'HM',
                  onDateChange: function(){
                      var value =this.getValue();
                      $d7input.val(this.getText(' h:m'));
                      $d7input.data('value', value);
                    console.log(this.getText('h:m'));
                      // $dropdown.remove();
                  },
                  onClose: function() {
                      $dropdown.remove();
                  }
              })
          }, 10);


      });   
  });
  $(document).ready(function(){
      var $d7input = $('input', '#TmePicker2').focus(function() {
          var $dropdown = $('<div class="dropdown"/>')
              .appendTo('#TmePicker2');
          setTimeout(function(){
              $dropdown.datetimepicker({
                  date: $d7input.data('value'),
                  viewMode: 'HM',
                  onDateChange: function(){
                      var value =this.getValue();
                      $d7input.val(this.getText(' h:m'));
                      $d7input.data('value', value);
                    console.log(this.getText('h:m'));
                      // $dropdown.remove();
                  },
                  onClose: function() {
                      $dropdown.remove();
                  }
              })
          }, 10);


      });   
  });

  $(document).ready(function(){
      var $d7input = $('input', '#TmePicker3').focus(function() {
          var $dropdown = $('<div class="dropdown"/>')
              .appendTo('#TmePicker3');
          setTimeout(function(){
              $dropdown.datetimepicker({
                  date: $d7input.data('value'),
                  viewMode: 'HM',
                  onDateChange: function(){
                      var value =this.getValue();
                      $d7input.val(this.getText(' h:m'));
                      $d7input.data('value', value);
                    console.log(this.getText('h:m'));
                      // $dropdown.remove();
                  },
                  onClose: function() {
                      $dropdown.remove();
                  }
              })
          }, 10);


      });   
  });