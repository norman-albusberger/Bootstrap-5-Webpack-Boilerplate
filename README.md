## About

## Usage

Be sure to have [Node.js](https://nodejs.org/) installed before proceeding.

```shell
# Install dependencies
npm i

# Compile Sass
npm run build

# Start local server (uses sirv-cli)
npm start

```

Open <http://localhost:8080> to see the page in action.

## Scripts

The following npm scripts are available to you in this starter repo. With the exception of `npm start` and `npm test`, the remaining scripts can be run from your command line with `npm run scriptName`.

| Script | Description |
| --- | --- |
| `server` | Starts a local server (<http://localhost:3000>) for development |
| `watch` | Automatically recompiles CSS as it watches the `scss` directory for changes |
| `css` | Runs `css-compile` and `css-prefix` |
| `css-compile` | Compiles source Sass into CSS |
| `css-lint` | Runs [Stylelint](https://stylelint.io) against source Sass for code quality |
| `css-prefix` | Runs [Autoprefixer](https://github.com/postcss/autoprefixer) on the compiled CSS |
| `css-purge` | Runs [PurgeCSS](https://purgecss.com) to remove CSS that is unused by `index.html` |
| `test` | Runs `css-lint` and `css`, in sequential order |

## Advanced usage

Take this starter repository to another level with some built-in addons that you can enable and customize.

### Optimizing CSS

Before you start to use tools that remove Bootstrap styling like [PurgeCSS](#purgecss), you can make some broad optimizations by only including the stylesheets you think you'll need.

Look to the `scss/starter.scss` file for your two options of including all of Bootstrap, or a subset of our styles and components. By default we've only imported the stylesheets that Bootstrap requires plus those of the components we're planning to use.

Uncomment specific lines as needed, then recompile to use them.

### Optimizing JS

Similar to optimizing CSS, we publish individual scripts for each of our plugins. This allows you to import only what you need, versus the entire bundle and dependencies. For example, if you don't plan on using dropdowns, tooltips, or popovers, you can safely omit the Popper.js depdendency. Bootstrap 4 requires jQuery though, so you won't be able to safely remove that until v5 launches.

See the `js/starter.js` file for an example of how to import all of Bootstrap's JS or just the individual pieces. By default we've only imported our modal JavaScript since we have no need for anything else.

You can add more options here, or import the entire `bootstrap-bundle.min.js` file, to get all JavaScript plugins and Popper.js.

### PurgeCSS

[PurgeCSS](https://purgecss.com/) is a [PostCSS](https://postcss.org) plugin that removes unused CSS based on your site's HTML. It finds rulesets that are unused by your HTML and removes them, ensuring only what's needed is sent to your site's visitors while improving file size and performance.

We've included a single npm script that runs PurgeCSS against our single `index.html` file to remove unused styles from `assets/css/starter.css`.

To purge your CSS, run `npm run css-purge` from the command line. This executes the following:

```shell
npm purgecss --css assets/css/starter.css --content index.html --output assets/css/
```

PurgeCSS is a PostCSS plugin and [can be configured](https://purgecss.com/configuration.html) to your exact needs with a little extra effort, including additional [command line options](https://purgecss.com/CLI.html).

## Actions CI

We've included some simple GitHub Actions in this template repo. When you generate your new project from here, you'll have the same tests that run whenever a pull request is created. We've included Actions for the following:

- Stylelint for your CSS

When your repository is generated, you won't see anything in the Actions tab until you create a new pull request. You can customize these Actions, add new ones, or remove them outright if you wish.

[Learn more about GitHub Actions](https://github.com/features/actions), [read the Actions docs](https://help.github.com/en/actions), or [browse the Actions Marketplace](https://github.com/marketplace/actions).

### Stylelint

Stylelint is included, as is Bootstrap's default Stylelint config, [stylelint-config-twbs-bootstrap](https://github.com/twbs/stylelint-config-twbs-bootstrap). This is the same linter configuration we use in the main Bootstrap project. It's run via the `npm test` command, which is invoked in our `ci.yml` Actions workflow file.

At the root of the repo, `.stylelintignore` is used to list files that we ignore when linting and `.stylelintrc` is where we tell Stylelint to use the Bootstrap config. The former is recommended based on your specific needs, while the latter is required.

## Copyright

&copy; Norman Albusberger 2021 and licensed MIT.
