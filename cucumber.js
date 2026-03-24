module.exports = {
    default: {
      requireModule: ['ts-node/register'],
      require: [
        'tests/steps/**/*.ts',
        'hooks/**/*.ts'
      ],
      paths: ['tests/feature/**/*.feature'],
      format: ['progress-bar', 'html:cucumber-report.html'],
      formatOptions: {
        snippetInterface: 'async-await'
      },
      publishQuiet: true
    }
  };