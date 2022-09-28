/* eslint-disable prettier/prettier */
import ModbusRTU from "modbus-serial";
import { listDevices } from "./listDevices";

function getMetricDetail(client, slaveId, metric, functionCode, scanRate) {
    if(functionCode == '4x') {
        client.setID(slaveId);
        setInterval(function() {
            client.readHoldingRegisters(metric.addressMetric-40001, 1).then((data) => {
                console.log(`${metric.type} has value is: ${data.data} - '4x'`)
            });
        }, scanRate);
    }
    if(functionCode == '3x') {
        setInterval(function() {
            client.setID(slaveId);
            client.readInputRegisters(metric-30001, 1).then((data) => {
                console.log(`${metric.type} has value is: ${data.data} - '3x'`)
            });
        }, scanRate);
    }
    if(functionCode == '1x') {
        client.setID(slaveId);
        setInterval(function() {
            client.readDiscreteInputs(metric-10001, 1).then((data) => {
                console.log(`${metric.type} has value is: ${data.data} - '1x'`)
            });
        }, scanRate);
    }
    if(functionCode == '0x') {
        client.setID(slaveId);
        setInterval(function() {
            client.readCoils(metric-1, 1).then((data) => {
                console.log(`${metric.type} has value is: ${data.data} - '0x'`)
            });
        }, scanRate);
    }
}

function getMetrics(client, slaveId, functionCode, scanRate) {
    if(functionCode == '4x') {4
        client.setID(slaveId);
        setInterval(function() {
            client.readHoldingRegisters(0, 9).then((data) => {
                console.log(`Data from divice ${slaveId} has value is: ${data.data} - '4x'`)
            });
        }, scanRate);
    }
    if(functionCode == '3x') {
        client.setID(slaveId);
        setInterval(function() {
            client.readInputRegisters(0, 9).then((data) => {
                console.log(`Data from divice ${slaveId} has value is: ${data.data} - '3x'`)
            });
        }, scanRate);
    }
    if(functionCode == '1x') {
        client.setID(slaveId);
        setInterval(function() {
            client.readDiscreteInputs(0, 9).then((data) => {
                console.log(`Data from divice ${slaveId} has value is: ${data.data} - '1x'`)
            });
        }, scanRate);
    }
    if(functionCode == '0x') {
        client.setID(slaveId);
        setInterval(function() {
            client.readCoils(0, 9).then((data) => {
                console.log(`Data from divice ${slaveId} has value is: ${data.data} - '0x'`)
            });
        }, scanRate);
    }
}






function generateClient(device) {
    const client = new ModbusRTU();
    client.setTimeout(device.connectTimeout);
    console.log(client.getTimeout(), device.deviceName);
    client.connectTCP(device.deviceIp, { port: device.devicePort , localAddress: device.chanel.chanelIp}, (err) => {
        if(err) {
            console.log(`${device.deviceName} from ${device.chanel.chanelName} is`, err);
        }else {
            console.log(`${device.deviceName} from ${device.chanel.chanelName} is connected !`);

            // Get many metrics
            getMetrics(client, device.slaveId, device.functionCode, device.scanRate);
            // Get a metric detail
            getMetricDetail(client, device.slaveId, device.listMetrics[0],device.functionCode, device.scanRate);
        }
    });
}

async function bootstrap() {
    generateClient(listDevices[0])
    generateClient(listDevices[1])
    // generateClient(listDevices[2])
}
bootstrap();
