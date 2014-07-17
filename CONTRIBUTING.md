# How to Contribute

So you want to help us. Neat, you are awesome!

You can:

- **Spread the word about this plugin**. Seriously, by just mentioning us to a
  friend you're already making a good difference.
- [**Report an issue here**][issue]. It could be anything; a bug, suggestion,
  enhancement and even a site where you used this plugin.
- **Make a pull request**. This is the preferred method, because we don't need
  to touch on the code :bowtie:

See details on each of one below.

[issue]: https://github.com/jquery-textfill/jquery-textfill/issues

## Reporting an issue

If you're just making a **suggestion** or pointing out **something simple**, don't be
shy; speak in any way you can.

But in the case of a bug report, things start to get more serious.

When **reporting a bug**, please try to reproduce it using [Gist][] or
[jsFiddle][] as a template. Environment can be different and some may be fine,
some may be not. *Please make sure you can clearly demonstrate the bug* unless
the bug is super easy to spot like `a < b` should be `a <= b`.

When **reproducing a bug**, it's important that CSS matches the page where you
encounter the bug, it could be crucial that container's and innertag's styles
have to be exactly the same.

Please also provide enough information about your system and browser, if
necessary, here is a template:

    TextFill version:
    jQuery version:
    Font family:
    OS/Version:
    Browser/Version:

Since version _0.3.1_ there is a debugging option, it can be enabled by using
`debug: true` on the options. You could totally include those messages.

[Gist]: https://gist.github.com/4650697
[jsFiddle]: http://jsfiddle.net/livibetter/3gMFG/


## Making a Pull Request

You have JavaScript skills and don't want to wait for us to make the changes. Great!

But take care to _not_:

* Update version number.
* Generate minified file.

These tasks are for releasing, contributors should not take on them.

Also, before you submit, make sure:

* The Coding style generally matches
* It passes all (or most) [tests][]
* *Optional* Update [`README`](README.md) if necessary
* *Optional* Update [`CHANGES`](CHANGES.md) if worth mentioning

[tests]: http://jquery-textfill.github.io/jquery-textfill/tests.html

