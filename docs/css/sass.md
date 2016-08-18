

# 安装

注意安装 node-sass 高版本可能会造成冲突，需要使用运行一下 `node rebuild node-sass` , 参见
[这个issue](https://github.com/sass/node-sass/issues/1579)。

另外注意使用 sass 引入的时候，需要尼玛加分号啊

import 'path/to/global';
不加分号会报很让人迷惑的错：比如[这个](https://github.com/sass/node-sass/issues/1270)

还有，你以为你引入的是 global.scss, 其实你引入的是 _global.scss, 我能骂脏话吗。。


# Can I use Sass with this boilerplate?

Yes, although we advise against it and **do not support this**. We selected
PostCSS over Sass because its approach is more powerful: instead of trying to
give a styling language programmatic abilities, it pulls logic and configuration
out into JS where we believe those features belong.

As an alternative, consider installing a PostCSS plugin called [`PreCSS`](https://github.com/jonathantneal/precss):
it lets you use familiar syntax - $variables, nesting, mixins, etc. - but retain
the advantages (speed, memory efficiency, extensibility, etc) of PostCSS.

If you _really_ still want (or need) to use Sass then...

1. Change `internals/webpack/webpack.base.babel.js` so that line 22 reads
    ```JavaScript
    test: /\.s?css$/,
    ```

    This means that both `.scss` and `.css` will be picked up by the compiler

1. Update each of

    - `internals/webpack/webpack.dev.babel.js`
    - `internals/webpack/webpack.prod.babel.js`

    changing the config option for `cssLoaders` to

    ```JavaScript
    cssLoaders: 'style-loader!css-loader?modules&importLoaders=1&sourceMap!postcss-loader!sass-loader',
    ```

    Then run `npm i -D sass-loader node-sass`

...and you should be good to go!
