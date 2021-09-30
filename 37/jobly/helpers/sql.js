const { BadRequestError } = require("../expressError");

// THIS NEEDS SOME GREAT DOCUMENTATION.

/** 
 * Receives an object with properties from either a Company or User class to .update()
 * E.G. {name: "Jake Overtook This Company", description: "MUAHAHA"}
 * 
 * And converts it into a serialized sql version 
 * E.G. "name"=&1, "description"=$2
 * 
 * Returns an object with this separated pairing for use with SQL
 * E.G.
  {
    setCols: '"name"=$1, "description"=$2',
    values: [ 'Jake Overtook This Company', 'MUAHAHAHA' ]
  }
 */
function sqlForPartialUpdate(dataToUpdate, jsToSql) {
  const keys = Object.keys(dataToUpdate);
  if (keys.length === 0) throw new BadRequestError("No data");

  // {firstName: 'Aliya', age: 32} => ['"first_name"=$1', '"age"=$2']
  const cols = keys.map((colName, idx) =>
      `"${jsToSql[colName] || colName}"=$${idx + 1}`,
  );
  console.log({
    setCols: cols.join(", "),
    values: Object.values(dataToUpdate),
  })
  return {
    setCols: cols.join(", "),
    values: Object.values(dataToUpdate),
  };
}

module.exports = { sqlForPartialUpdate };
