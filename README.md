# jQuery TextFill

This jQuery plugin resizes text to make it fit into a container. The font size
gets as big as possible. <br />
[Live demo here][index].

[index]: http://jquery-textfill.github.io/

## Usage

- Remember to include _jQuery_ and _jQuery TextFill_:

```html
<script src="jquery.min.js"></script>
<script src="jquery.textfill.min.js"></script>
```

- Select which element you'll use. Make sure to:
  - Specify the parent's width and height
  - Put the text inside of a `<span/>` child by default (see _Options_ to change this)

```html
<div id='my-element' style='width:100px;height:50px;'>
  <span>The quick brown fox jumps over the lazy dog</span>
</div>
```

- Initialize _jQuery TextFill_

```js
$('#my-element').textfill({
    ...options...
});
```

## Options

| Name              | Description | Default Value |
| ----------------- | ----------- | ------------- |
| `minFontPixels`   | Minimal font size (in pixels) | 4 |
| `maxFontPixels`   | Maximum font size the text _could_ resize (in pixels). For `size <= 0`, the text is sized to as big as the container can accommodate. | 40 |
| `innerTag`        | The child element tag to resize. Select by `$(innerTag + ':visible:first', container)` | `span` |
| `widthOnly`       | only resizing for width restraint | `false` |
| `explicitWidth`   | explicit width | `null` |
| `explicitHeight`  | explicit height | `null` |
| `debug`           | Output debugging messages to console | `false` |

For example,

```html
<script>
$(function() {
    $('#my-element').textfill({
        maxFontPixels: 36
    });
});
</script>
```

## Callbacks

| Name       | Called when...                       | Default Value |
| ---------- | ------------------------------------ | ------------- |
| `success`  | Called when a resizing is successful | `null`        |
| `fail`     | Called when a resizing is failed     | `null`        |
| `complete` | Called when all elements are done    | `null`        |

For example,

```html
<script>
$(function() {
    $('#my-element').textfill({
        success: function() {
		    console.log("yay!")
		},
		fail: function() {
		    alert("boo hoo!")
		}
    });
});
</script>
```

## Contributing

You are very welcome to contribute!
[A good number of people did](https://github.com/jquery-textfill/jquery-textfill/graphs/contributors),
so feel free to help no matter how small the changes might be.

Just _make sure_ to read the file [`CONTRIBUTING.md`](CONTRIBUTING.md) first.
There we make a quick take on how you could help us.

Also, there we lay down our rules for _reporting issues_ and _making pull
requests_. Gotcha! Now you can't say we didn't told you about it!

If you found something critical or just want to make a suggestion
[open an issue][issue] and start typing right away.

[issue]: https://github.com/jquery-textfill/jquery-textfill/issues

## Credits

This jQuery plugin was created by [Russ Painter][russ] around May 2009,
beginning with a StackOverflow [question][soq].

In very early 2012, [Yu-Jie Lin][yu] helped to move the project to GitHub with
version _0.1_ and obtained the clearly stated open source licensing from Russ.

Around July 2014 [Alexandre Dantas][alex] was made a contributor, currently
maintaining the project.

[soq]:  http://stackoverflow.com/questions/687998/auto-size-dynamic-text-to-fill-fixed-size-container
[russ]: https://github.com/GeekyMonkey
[yu]:   https://github.com/livibetter
[alex]: https://github.com/alexdantas

## License

`jquery-textfill` is licensed under the _MIT License_. See file
[`COPYING.md`](COPYING.md) to see what you can and cannot do with the
source.

    Copyright (c) 2014 Alexandre Dantas
    Copyright (c) 2012-2013 Yu-Jie Lin
    Copyright (c) 2009 Russ Painter

