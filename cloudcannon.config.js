module.exports = {
  // Global CloudCannon configuration
  _inputs: {
    title: {
      type: 'text',
      comment: 'The title of your page.'
    }
  },
  _select_data: {
    colors: ['Red', 'Green', 'Blue']
  },

  // Read from ./src instead of .
  source: 'src',

  // Write to ./output/_cloudcannon/info.json instead of ./_cloudcannon/info.json
  output: 'output',

  // Populates the sidebar navigation and provides metadata for the editor
  collections_config: {
    posts: {
      // Reads the contents of each file in this directory
      path: 'content/blog',

      // How to parse the files in this collection
      parser: 'front-matter',

      // Tells CloudCannon this collection produces output files
      output: true
    }
  }
}
