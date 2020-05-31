module.exports = {
    presets: [
      ["@babel/preset-env", { "targets": { "chrome": "80" } }],
      "@babel/preset-react"
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties'
    ]
  }