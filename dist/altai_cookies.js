/*
 * Name: altai_cookies
 * Title: Altai Cookies
 * Description: Add 'WeLoveCookies' for better content deliverability.
 *
 */

// jQuery
var jQuery;

(function($, window, document) {
  return $.fn.extend({
    altaiCookies: function(options) {
      // Variables
      var action, log, settings;
      var object = $(this);

      // Default settings
      settings = {
        debug: false
      };
      settings = $.extend(settings, options);

      // Log
      log = function(message) {
        if (settings.debug) {
          if (typeof((console === "undefined") && (console === null))) {
            return console.log(message);
          } else {
            return undefined;
          }
        } else {
          return undefined;
        }
      };

      // Action
      action = function() {
        object.each(function() {
          $(this).on("click", function(e) {
            e.preventDefault();
            Cookies.set("WeLoveCookies", "Yummmmmmmmmy!", {
              expires: 30
            });
            location.reload();
          });
        });
      };

      // If object found run actions
      if (object.length > 0) {
        return this.each(function() {
          action();
          log("Altai Cookies Activated");
        });
      }
    }
  });
})(jQuery, window, document);
