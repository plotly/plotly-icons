# plotly-icons

> Icon set used with Plotly

Demo: [plotly-icons.now.sh](https://plotly-icons.now.sh/)

## Usage

* Install the module with `npm install` or `yarn install`.
* Import into your project like so: `import {CarretDownIcon} from 'plotly-icons';`
* Add extra classes by adding a className to the imported icon.

## Development

1. Export SVG files with "Inline Styles", as the script can't parse classes in svg. Ensure the files don't have fields like `data-name` that seem to be unsupported by React.
2. Run `npm run generate` to convert SVG icons into React components.
3. Run `npm run prepublishOnly` and ensure there are no errors.
4. `generate` script adds entries to `src/components/index.js`, but not `src/index.js` - those need to be added manually.

## See also

* [mdi-react](https://github.com/levrik/mdi-react)
* [plotly branding documentation](https://brand.plot.ly/)

## License

&copy; 2017 Plotly, Inc. MIT License.
