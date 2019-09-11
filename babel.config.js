module.exports = {
  presets: [
    "@babel/preset-env", // transformar coisas que o browser nao intende ( import )
    "@babel/preset-react" // transforma coisas do react jsx, etc
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
}