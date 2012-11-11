all: jquery.textfill.min.js

jquery.textfill.min.js: jquery.textfill.js
	closure.sh --js=jquery.textfill.js --js_output_file=jquery.textfill.min.js

clean:
	rm -f jquery.textfill.min.js

.PHONY: clean
