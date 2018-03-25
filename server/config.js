const env = process.env;

const nodeEnv = env.NODE_ENV || 'development';

module.exports.nodeEnv = nodeEnv;
module.exports =  {
  port: env.PORT || 8000,
  host: env.HOST || '0.0.0.0'
};