/** InfluxDB v2 URL */
const url = process.env['INFLUX_URL'] || 'http://192.168.1.180:8086'
/** InfluxDB authorization token */
const token = process.env['INFLUX_TOKEN'] || 'edge'
/** Organization within InfluxDB  */
const org = process.env['INFLUX_ORG'] || 'my-org'
/**InfluxDB bucket used in examples  */
const bucket = 'generators'
// ONLY onboarding example
/**InfluxDB user  */
const username = 'demouser'
/**InfluxDB password  */
const password = 'demouser'

export {url, token, org, bucket, username, password}
