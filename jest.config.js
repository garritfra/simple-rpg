module.exports = {
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  collectCoverage: true,
  testRegex: "(/test/.*|(\\.|/)(test|spec))\\.tsx?$",
  coverageFormats: ["json", "html"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
