/* This file contains InfluxDB configuration for the browser example. */

/** InfluxDB v2 URL, '/influxdb' relies upon proxy to forward to the target influxDB */
export const url = 'http://192.168.1.180:8086'
/** InfluxDB authorization token */
export const token = 'edge'
/** InfluxDB organization */
export const org = 'influxroadshow'
/** InfluxDB bucket used for onboarding and write requests. */
export const bucket = 'generators'

/** The following properties are used ONLY in the onboarding example */
/** InfluxDB user  */
export const username = 'demouser'
/** InfluxDB password  */
export const password = 'demouser'
