const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'http://ec2-54-210-190-189.compute-1.amazonaws.com',
       options : {
       'sonar.sources': '.',
       }
     }, () => {});
