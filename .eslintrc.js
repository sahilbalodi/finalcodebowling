var OFF = 0, WARN = 1, ERROR = 2;
module.exports = exports = {
 "env": {
     "es6": true,
     "node": true,
     "jest" : true
 },
 "ecmaFeatures": {
     // env=es6 doesn't include modules, which we are using
     "modules": true
 },
 "extends": "eslint:recommended",
 "rules": {
   "indent": [2, ERROR],
   "no-console" : OFF,
   "no-var": ERROR ,
   "no-unused-vars": OFF,
   "quotes" : ['error','single'] ,
   "test"  : OFF,
   "expect" : OFF
 }
};
