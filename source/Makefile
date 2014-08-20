# Makefile that minifies jquery-textfill
#
# $ make          # Minifies to `jquery-textfill.min.js`
# $ make clean    # Deletes minified output
#
# Thanks to Google Closure Compiler
# http://closure-compiler.appspot.com/home

all: jquery.textfill.min.js
	# Done! Result on "$<"
	# Byte count:
	@wc -c jquery.textfill.min.js jquery.textfill.js

jquery.textfill.min.js: jquery.textfill.js
	# Minifying "$@"...
	@curl --data output_info=compiled_code --data-urlencode js_code@jquery.textfill.js http://closure-compiler.appspot.com/compile > jquery.textfill.min.js

clean:
	# Deleted "jquery.textfill.min.js"
	@rm -f jquery.textfill.min.js

.PHONY: clean

