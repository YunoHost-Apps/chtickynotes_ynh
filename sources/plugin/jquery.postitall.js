/**
* jquery.postitall.js specific to ChtickyNotes by chtixof
* written on the basis of jquery.postitall.js v0.1 - 2015
* Original notice:
* jQuery Post It All Plugin - released under MIT License
* Author: Javi Filella <txusko@gmail.com>
* http://github.com/txusko/PostItAll
* Copyright (c) 2013 Javi Filella
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

(function ($) {
    "use strict";

    // Global Vars
    var options;
    var nextid = -1;
    var zindex=9995;
    var tobesaved=false;
    var cssidsave="";
    var actson;

 // for css color settings
 function rgb2hex(rgb) {
    if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;

    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
  }
 
 // actions in case of any change 
    function settobesaved() {
      tobesaved=true;
      if(cssidsave!=="") { 
        $(cssidsave).css("display", "");
      }    
    }
 // menu items to select color
  function selcolor(idli,idinput,label,cssatt,optvar){
    $(idli).html("");
    $(idli).append($('<label />',{'for': idinput}).html(label+' &nbsp; '))
              .append($('<input />', {
                'class': 'minicolors',
                'id': idinput,
                'type': 'text',
                'value': rgb2hex($(actson).css(cssatt)),
                'width': '75px'
              }));
    $('#'+idinput).minicolors({
        change: function (hex) {
            $(actson).css(cssatt, hex);
            $(actson).data('PIA-options')[optvar]=hex;
            settobesaved();        
        }
    });
  }

 // displays option menu   
  function chopt(e) {
    //right position
    $('#chmenu').css('left',$(this).offset().left);
    $('#chmenu').css('top',$(this).offset().top);
    //what note menu acts on
    actson = $(this).parent().parent().parent();
    //set bgcolor
    selcolor('#chbg', 'minicolors_bg', 'Background-color','background-color','backgroundcolor'); 
    //set text color
    selcolor('#chco', 'minicolors_tx', 'Text-color','color','textcolor');
    //set hide/show date
    $('#chda').html(actson.data('PIA-options').showdate ? 'Hide the date' : 'Display the date'); 
    //show
    $('#chmenu').show();
  }

 // action menu delete
    function chdelete(e) {
      $('#chmenu').hide();
      destroy($(actson));
      e.preventDefault();
      return(0);    
    }
    
 // action menu clone
    function chclone(e) {
      var options = $.extend({},$(actson).data('PIA-options'));
      $('#chmenu').hide();
      options.posX=(parseInt(options.posX)+50)+"px";
      options.posY=(parseInt(options.posY)-50)+"px";
      delete options.id;
      delete options.date;
      $('#addanote_result').postitall(options);
      return(0);    
    }
 // action menu display date
    function chdate(e) {
      $('#chmenu').hide();
      actson.data('PIA-options').showdate = !actson.data('PIA-options').showdate ;
      if (actson.data('PIA-options').showdate) {
        $(".PIAdate",actson).show();
      } else {
        $(".PIAdate",actson).hide();
      } 
    return(0);    
    }

    //Destroy object
    function destroy(obj) {
        var id = obj.data('PIA-id');
        options = obj.data('PIA-options');
        //Destroy object
        obj
            .removeData('PIA-id')
            .removeData('PIA-settings')
            .hide("slow", function () {
                $(this).remove();
            });
        settobesaved();
    }

    //Autoresize postit
    function autoresize(obj) {
        var id = obj.data('PIA-id');
        options = obj.data('PIA-options');
        if (options.autoheight) {
            var posY = $('#idPostIt_' + id).parent().css('left'),
                posX = $('#idPostIt_' + id).parent().css('top'),
                divWidth = $('#idPostIt_' + id).width(),
                divHeight = $('#idPostIt_' + id).find('.PIAeditable').height(),
                minDivHeight = options.minHeight;
            if (divHeight >= minDivHeight) {
                divHeight += 50;
                options.height = divHeight;
                obj.css('height', divHeight);
                if ($.ui) {
                    if (options.resizable) {
                        obj.resizable({
                            minHeight: divHeight
                        });
                    }
                }
            } else if (divHeight < minDivHeight) {
                options.height = minDivHeight;
                minDivHeight += 50;
                obj.css('height', minDivHeight);
            }
            options.posY = posY;
            options.posX = posX;
            options.width = divWidth;
        }
    }

    // Set options
    function setOptions(opt, save) {
        if (typeof opt !== 'object') {
            opt = {};
        }
        if (save === undefined) {
            save = false;
        }
        options = $.extend(options, opt);
        /*jslint unparam: true*/
        $.each(['onChange', 'onSelect', 'onRelease', 'onDblClick'], function (i, e) {
            if (typeof options[e] !== 'function') {
                options[e] = function () { return undefined; };
            }
        });
        /*jslint unparam: false*/
        if (save) {
            settobesaved();
        }
    }

    //Create a postit
    function create(obj, options) {

        obj.data('PIA-id', nextid)
            .data('PIA-options', options);
        //Postit editable content
        if (options.description === "") {
            if (obj.html() !== "") {
                options.description = obj.html();
            }
        }
        //Front page: toolbar
        var barCursor = "cursor: inherit;";
        if (options.draggable) {
            barCursor = "cursor: move;";
        }
        var toolbar = $('<div />', {
            'id': 'pia_toolbar_' + nextid.toString(),
            'class': 'PIAtoolbar',
            'style': barCursor
        });
        //Drag support without jQuery UI
        if (!$.ui) {
            if (options.draggable) {
                toolbar.drags();
            }
        }

        toolbar.html('<span class="PIAdate">'+options.date+'</span><span class="PIAtitle"></span>');

        //Menu icon
        toolbar.append($('<div />', {'class': 'PIAchopt PIAicon'}).click(chopt));
        //Front page: content
        var content = $('<div />', {
            'id': 'pia_editable_' + nextid.toString(),
            'class': 'PIAeditable PIAcontent'
        }).change(function () {
            options.description = $(this).html();
            obj.data('PIA-options', options);
            autoresize(obj);
            settobesaved();
        }).attr('contenteditable', true).html(options.description);

        //Create postit
        var postit = $('<div />', { 'id': 'idPostIt_' + nextid.toString(), 'data-id': nextid })
            .append(toolbar).append(content);
        //Convert relative position to prevent height and width      in html layout
        if (options.position === "relative") {
            options.position = "absolute";
            options.posX = obj.offset().top + parseInt(options.posX, 10) ;
            options.posX += "px";
            options.posY = obj.offset().left + parseInt(options.posY, 10) ;
            options.posY += "px";
        }
        //Modify final Postit Object
        obj.removeClass()
            .addClass('block panel PIApostit')
            .css('z-index', zindex++)
            .css('position', options.position)
            .css('left', options.posY)
            .css('top', options.posX)
            .css('width', options.width + 'px')
            .css('height', (options.height + 30) + 'px') //Increase 30 pixels for the toolbar
            .css('background-color', options.backgroundcolor)
            .css('color', options.textcolor);
        obj.html(postit)
            .on('focus', '[contenteditable]', function () {
                var objeto = $(this);
                objeto.data('before', objeto.html());
                return objeto;
            }).on('blur keyup paste', '[contenteditable]', function () {
                var objeto = $(this);
                if (objeto.data('before') !== objeto.html()) {
                    objeto.data('before', objeto.html());
                    objeto.trigger('change');
                }
                return objeto;
            }).click(function () {
                $(this).css('z-index', zindex++);
                settobesaved();
            }).load(function () {
                //Autoresize to fit content when content load is done
                autoresize($(this));
            });
        if ($.ui) {
            if (options.draggable) {
                obj.draggable({
                    handle: ".PIAtoolbar",
                    scroll: false,
                    start: function () {
                        $(this).css('z-index', zindex++);
                        $(this).draggable('disable');
                    },
                    stop: function () {
                        $(this).draggable('enable');
                        autoresize($(this));
                        settobesaved();
                    }
                });
            }
            if (options.resizable) {
                obj.resizable({
                    animate: false,
                    helper: 'ui-resizable-helper',
                    minHeight: options.minHeight,
                    minWidth: options.minWidth,
                    stop: function () {
                        autoresize($(this));
                        settobesaved();
                    }
                });
            }
        }
        obj.slideDown('slow', function () {
        });
        settobesaved();
        //chaining
        return obj;
    }

    // Initialize elements
    function init(obj, opt) {
        if (++nextid===0) {
          obj.append($('<div />', { 'id' : 'chmenu'}).mouseleave(function(){$(this).hide();})
            .append($('<ul/>')
              .append($('<li/>',{'id': 'chbg'}))
              .append($('<li/>',{'id': 'chco'}))
              .append($('<li/>',{'id': 'chda'}).click(chdate))
              .append($('<li/>').click(chclone).append('Clone'))
              .append($('<li/>').click(chdelete).append('Delete'))
            )
          );
        }
        //Default options
        options = $.extend({}, $.fn.postitall.defaults);
        options.id=nextid;
        options.date= (new Date ()).toLocaleDateString () +'<br>'+ (new Date ()).toLocaleTimeString();

        //Set options
        if (typeof opt !== 'object') {
            opt = {};
        }
        setOptions(opt);

        var PIAcontent = $('<div />', { 'id' : 'newPostIt_' + nextid });
        obj.append(PIAcontent);
        return create(PIAcontent, options);
    }

    // PLUGIN Public methods
    $.extend($.fn, {
        postitall: function (method, data) {
            //Debugging
            var debugging = true; // or true
            if (typeof console === "undefined") {
                console = {
                    log: function () { return undefined; }
                };
            } else if (!debugging || console.log === undefined) {
                console.log = function () { return undefined; };
            }
            switch (method) {
            // Destroy the control
            case 'destroy':
                $(this).each(function () {
                    destroy($(this));
                });
                return $(this);
            // Get/set options on the fly
            case 'options':
                if (data === undefined) {
                    return $(this).data('PIA-options');
                }
                // Setter
                $(this).each(function () {
                    options = $(this).data('PIA-options') || {};
                    destroy($(this));
                    $(this).postitall($.extend(true, options, data));
                });
                return $(this);
            case 'isittosave':
                var answer=tobesaved;
                tobesaved=false;
                if (data !== undefined) {
                    cssidsave=data;
                }
                return (answer);
            // Initializes the control
            default:
            //case 'create' :
                if (method !== 'create') {
                    data = method;
                }
                $(this).each(function () {
                    init($(this), data);
                });
                return $(this);
            }
        }
    });

    // Default Plugin Vars
    $.fn.postitall.defaults = {
        // Basic Settings
        showdate        : true, 
        backgroundcolor : '#FFFC7F', //Background color
        textcolor       : '#333333', //Text color
        position        : 'absolute', //Position absolute or relative
        posX            : '50px', //top position
        posY            : '15px', //left position
        height          : 180, //height
        width           : 200, //width
        minHeight       : 152, //resizable min-width
        minWidth        : 131, //resizable min-height
        description     : '', //content
        title           : '', 
        autoheight      : true, //Set autoheight feature on or off
        draggable       : true, //Set draggable feature on or off
        resizable       : true, //Set resizable feature on or off
        removable       : true, //Set removable feature on or off
        // Callbacks / Event Handlers
        onChange: function () { return undefined; },
        onSelect: function () { return undefined; },
        onDblClick: function () { return undefined; },
        onRelease: function () { return undefined; }
    };

    //Drag postits
    //used if jQuery UI is not loaded
    $.fn.drags = function (opt) {

        opt = $.extend({handle: "", cursor: "move"}, opt);

        var $el = this;
        if (opt.handle !== "") {
            $el = this.find(opt.handle);
        }

        return $el.css('cursor', opt.cursor).on("mousedown", function (e) {
            var $drag;
            if (opt.handle === "") {
                $drag = $(this).parent().parent().parent().addClass('draggable');
            } else {
                $drag = $(this).parent().parent().parent().addClass('active-handle').parent().addClass('draggable');
            }
            var z_idx = $drag.css('z-index'),
                drg_h = $drag.outerHeight(),
                drg_w = $drag.outerWidth(),
                pos_y = $drag.offset().top + drg_h - e.pageY,
                pos_x = $drag.offset().left + drg_w - e.pageX;
            $drag.css('z-index', 1000000).parents().on("mousemove", function (e) {
                $('.draggable').offset({
                    top: e.pageY + pos_y - drg_h,
                    left: e.pageX + pos_x - drg_w
                }).on("mouseup", function () {
                    $(this).removeClass('draggable').css('z-index', z_idx);
                });
            });
            e.preventDefault(); // disable selection
        }).on("mouseup", function () {
            if (opt.handle === "") {
                $(this).removeClass('draggable');
            } else {
                $(this).removeClass('active-handle').parent().removeClass('draggable');
            }
        });

    };

}(jQuery));