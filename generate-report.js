const cypress = require('cypress');
const marge = require('mochawesome-report-generator');
const { merge } = require('mochawesome-merge');

cypress.run().then(
  () => {
    generateReport();
  },
  error => {
    generateReport();
    console.error(error);
    process.exit(1);
  }
);

function generateReport(options = {
  files: ['cypress/report/*.json'],
  reportDir: 'cypress/report',
  reportFilename: 'final-report'
}) {
  return merge(options)
    .then(report => marge.create(report, options))
    .then(() => console.log('Report generated successfully!'))
    .catch(error => {
      console.error('Error generating report:', error);
    });
}
