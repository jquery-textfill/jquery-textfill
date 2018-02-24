# Makefile that minifies jquery-textfill
#
# $ make          # Minifies to `jquery-textfill.min.js`
# $ make clean    # Deletes minified output
#
# Thanks to Google Closure Compiler
# http://closure-compiler.appspot.com/home

all: ../dist/jquery.textfill.min.js 
	# Done! Result on "$<"
	# Byte count:
	@cp jquery.textfill.js ../dist/jquery.textfill.js
	@wc -c ../dist/jquery.textfill.min.js ../dist/jquery.textfill.js

../dist/jquery.textfill.min.js: jquery.textfill.js
	# Minifying "$@"...
	# @curl --data output_info=compiled_code --data-urlencode js_code@jquery.textfill.js http://closure-compiler.appspot.com/compile > jquery.textfill.min.js
	@curl -s -d compilation_level=SIMPLE_OPTIMIZATIONS -d output_format=text -d output_info=compiled_code -d language=ECMASCRIPTS -d charset=utf-8 --data-urlencode "js_code@./jquery.textfill.js" https://closure-compiler.appspot.com/compile > ../dist/jquery.textfill.min.js

clean:
	# Deleted "jquery.textfill.min.js"
	@rm -f ../dist/jquery.textfill.min.js

.PHONY: clean

