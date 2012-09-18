
function contains (that, it) {
  return that.indexOf(it) > -1;
}

function beginsWith(that, it) {
  var length = it.length;
  if (length > 0) {
    for (var i = 0; i < length; i++) {
      if (that[i] !== it[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
function whichLonger(str1, str2) {
  if (str1.length && str2.length) {
    if (str1.length > str2.length) {
      return str1;
    } else {
      return str2;
    }
  } else {
    return;
  }
}

function ignoreJunk(str, junk) {
  var tmp = str.split(junk)[0];
  if (tmp) {
    return tmp.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  } else {
    return str;
  }
}

function whichSmaller(str1, str2) {
  if (str1.length && str2.length) {
    if (str1.length < str2.length) {
      return str1;
    } else {
      return str2;
    }
  } else {
    return;
  }
}

exports.matchStats = function matchStats(that, it, skipBeginMatch) {
  var matched = {};
  var longer;
  var begin_match;
  var smaller;
  var junk = ['\'', '[', '"'];

  for(var t = 0; t < junk.length; t++) {
    that = ignoreJunk(that,junk[t]);
    it = ignoreJunk(it, junk[t]);
  }

  if(that.length !== it.length) {
    longer = whichLonger(that, it);
    smaller = whichSmaller(that, it);
  } else {
    longer = that;
    smaller = it;
  }

  if (!skipBeginMatch) {
    begin_match = 0;

    if (smaller.length > 1) {
      var tmp;
      for (var k = 1; k <= smaller.length; k++) {
        tmp = smaller.substring(0,k);
        if (beginsWith(longer, tmp)) {
          begin_match+=1;
        }
      }
    }
  }

  var num_matches = 0;

  for (var i = 0; i < smaller.length; i++) {
    if (contains(longer, smaller[i])) {
      if (!matched[smaller[i]]) {
        num_matches+=1;
        matched[smaller[i]] = true;
      }
    }
  }

  var percent_matched = Math.round((num_matches / longer.length).toFixed(2) * 100);
  return {
    percent_matched : percent_matched,
    begin_match : begin_match
  };
};