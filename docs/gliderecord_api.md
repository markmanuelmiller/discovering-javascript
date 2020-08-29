## GlideRecord API

```js
function GlideRecord(table) {
  this.queryArr = [];
  this.table = table;
  this.results = null;
  this.resultsIndex = 0;

  this.addQuery = function (queryString) {
    this.queryArr.push(queryString);
  };

  this.query = function () {
    this.results = [
      {
        num: "1",
        category: "help",
      },
      {
        num: "2",
        category: "help",
      },
    ];
  };

  this.getQuery = function () {
    console.log("SELECT * from " + this.table + " WHERE ");
    this.queryArr.forEach(function (element) {
      console.log(element);
    });
  };

  this.next = function () {
    if (this.results === null) {
      console.log("Have not queried yet.");
      return;
    }
    var result = this.results[this.resultsIndex++];
    if (result === undefined) {
      return false;
    }
    return result;
  };

  this.add = function (obj) {
    if (obj !== undefined) {
      this.results.push(obj);
    }
  };

  this.hasNext = function () {
    if (this.results[this.resultsIndex] !== undefined) {
      return true;
    } else {
      return false;
    }
  };
}

var gr = new GlideRecord("incident");
gr.addQuery("active=true");
gr.addQuery("category=help");
gr.query();
```

## GlideRecord using prototype

```js
function GlideRecord(table) {
  this.queryArr = [];
  this.table = table;
  this.results = null;
  this.resultsIndex = 0;
}

GlideRecord.prototype.addQuery = function (queryString) {
  this.queryArr.push(queryString);
};

GlideRecord.prototype.query = function () {
  this.results = [
    {
      num: "1",
      category: "help",
    },
    {
      num: "2",
      category: "help",
    },
  ];
};

GlideRecord.prototype.getQuery = function () {
  console.log("SELECT * from " + this.table + " WHERE ");
  this.queryArr.forEach(function (element) {
    console.log(element);
  });
};

GlideRecord.prototype.next = function () {
  if (this.results === null) {
    console.log("Have not queried yet.");
    return;
  }
  var result = this.results[this.resultsIndex++];
  if (result === undefined) {
    return false;
  }
  return result;
};

GlideRecord.prototype.add = function (obj) {
  if (obj !== undefined) {
    this.results.push(obj);
  }
};

GlideRecord.prototype.hasNext = function () {
  if (this.results[this.resultsIndex] !== undefined) {
    return true;
  } else {
    return false;
  }
};

var gr = new GlideRecord("incident");
gr.addQuery("active=true");
gr.addQuery("category=help");
gr.query();
```
