/**
 * @preserve  textfill
 * @name      jquery.textfill.js
 * @author    Russ Painter
 * @author    Yu-Jie Lin
 * @version   0.1.2
 * @date      01-29-2012
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
      var ourText = $(Opts.innerTag + ':visible:first', this);
      var maxHeight = $(this).height();
      var maxWidth = $(this).width();
      var fontSize;
      
      var minFontPixels = Opts.minFontPixels;
      var maxFontPixels = Opts.maxFontPixels;
      while (fontSize = Math.floor(minFontPixels + maxFontPixels) / 2,
             minFontPixels <= maxFontPixels) {
        ourText.css('font-size', fontSize);
        if (ourText.height() < maxHeight && ourText.width() < maxWidth)
          minFontPixels = fontSize + 1;
        else
          maxFontPixels = fontSize - 1;
      }
    });
  };
})(jQuery);
