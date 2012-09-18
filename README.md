
# MatchStats

## Handy module for comparing the similarities in strings

### Usage
```javascript

  var matchStats = require('matchStats').matchStats;

  var str1 = 'information';
  var str2 = 'informative';

  var stats = matchStats( str1, str2 );

  console.log( stats.percent_matched ); // 73
  // percent similar

  console.log( stats.begin_match ); // 9
  // number of characters that appear in the same 
  // order at the beginning of each string

```