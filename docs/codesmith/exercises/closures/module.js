// First attempt
//

const GlideRecord = (function () {
  const gr = {};
  let privateVar = "mystery";
  gr.table = null;
  gr.query = null;
  gr.results = null;

  gr.setTable = function (table) {
    gr.table = table;
  };

  gr.setQuery = function (query) {
    gr.query = query;
  };

  return gr;
})();

// Module Pattern where all public methods have closure over table and query

const Module = (function () {
  let table = null;
  let query = null;
  function privateFunc() {
    console.log("private");
  }

  function setQuery(q) {
    query = q;
  }

  function setTable(t) {
    table = t;
  }

  function callPrivateFunc() {
    privateFunc();
  }

  function getQuery() {
    return query;
  }

  function getTable() {
    return table;
  }

  return {
    setQuery: setQuery,
    setTable: setTable,
    callPrivateFunc: callPrivateFunc,
    getQuery: getQuery,
    getTable: getTable,
  };
})();
