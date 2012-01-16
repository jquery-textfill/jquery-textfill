/**
 * @preserve  textfill
 * @name      jquery.textfill.js
 * @author    Russ Painter
 * @version   0.1
 * @date      05-27-2009
 * @copyright (c) 2009 Russ Painter
 * @license   MIT License
 * @homepage  TBD
 * @example   TBD
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
      innerTag: 'span'
    };
    var Opts = jQuery.extend(defaults, options);
    return this.each(function() {
      var fontSize = Opts.maxFontPixels;
      var ourText = $(Opts.innerTag + ':visible:first', this);
      var maxHeight = $(this).height();
      var maxWidth = $(this).width();
      var textHeight;
      var textWidth;
      do {
        ourText.css('font-size', fontSize);
        textHeight = ourText.height();
        textWidth = ourText.width();
        fontSize = fontSize - 1;
      } while ((textHeight > maxHeight || textWidth > maxWidth) && fontSize > 3);
    });
  };
})(jQuery);

$(document).ready(function() {
  $('.jtextfill').textfill({ maxFontPixels: 36, innerTag: 'h1' });
});
