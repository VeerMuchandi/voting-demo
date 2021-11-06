const config = {
  host: 'postgres',
  port: 5432,
  db: 'votes',
  user: 'postgres',
  idleTimeoutMillis: 5000,
};

// Exported objects are copies
module.exports.config = () => {
  return Object.assign({}, config);
};
