/**
 * @preserve  textfill
 * @name      jquery.textfill.js
 * @author    Russ Painter
 * @author    Yu-Jie Lin
 * @version   0.1.1
 * @date      01-16-2012
 * @copyright (c) 2012 Yu-Jie Lin
 * @copyright (c) 2009 Russ Painter
 * @license   MIT License
 * @homepage  https://github.com/jquery-textfill/jquery-textfill
 * @example   http://jquery-textfill.github.com/jquery-textfill/Example.htm
*/
; (function($) {
  /**
  * Resizes an inner element's font so that the inner element completely fills the outer element.
  * @param {Object} Options which are maxFontPixels (default=40), innerTag (default='span')
  * @return All outer elements processed
  */
  $.fn.textfill = function(options) {
    var defaults = {
      maxFontPixels: 40,
      minFontPixels: 4,
      innerTag: 'span'
    };
    var Opts = jQuery.extend(defaults, options);
    return this.each(function() {
      var fontSize = Opts.minFontPixels;
      var minFontPixels = Opts.minFontPixels;
      var ourText = $(Opts.innerTag + ':visible:first', this);
      var maxHeight = $(this).height();
      var maxWidth = $(this).width();
      var textHeight;
      var textWidth;
      
      var low = Opts.minFontPixels;
      var high = Opts.maxFontPixels;
      while(low <= high) {
        var mid = Math.floor(low+high)/2;
        ourText.css('font-size', fontSize);
        textHeight = ourText.height();
        textWidth = ourText.width();
        if(textHeight < maxHeight && textWidth < maxWidth) {
            fontSize = mid;
            low = mid+1;
        }
        else {
            high = mid-1;
        }
      }
    });
  };
})(jQuery);
