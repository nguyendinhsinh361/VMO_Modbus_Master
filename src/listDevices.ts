/* eslint-disable prettier/prettier */
const CHANEL_NAME_1 = 'Chanel 1';
// Network adapter in Modbus Master
const CHANEL_IP_1 =  '172.16.6.18' || null;

const CHANEL_NAME_2 = 'Chanel 2';
// Network adapter in Modbus Master
const CHANEL_IP_2 =  '172.16.6.18' || null;
export const listDevices = [
    {   
        chanel: {
            chanelName: CHANEL_NAME_1,
            chanelIp: CHANEL_IP_1,
        },
        deviceName: 'Device 1',
        deviceIp: '172.16.6.104',
        devicePort: 502 , 
        slaveId: 1, 
        functionCode: '4x', 
        startAddress: 40001, 
        scanRate: 5000,
        listMetrics: [
            {
                addressMetric: 40007, 
                type: 'Temperature', 
            },
            {
                addressMetric: 40008, 
                type: 'Other', 
            }
        ],
        connectTimeout: 3000,
    },
    {   
        chanel: {
            chanelName: CHANEL_NAME_1,
            chanelIp: CHANEL_IP_1,
        },
        deviceName: 'Device 2',
        deviceIp: '172.16.6.104',
        devicePort: 502 , 
        slaveId: 2, 
        functionCode: '3x', 
        startAddress: 30001, 
        scanRate: 5000,
        listMetrics: [
            {
                addressMetric: 30007, 
                type: 'Humidity', 
            },
            {
                addressMetric: 30008, 
                type: 'Other', 
            }
        ],
        connectTimeout: 3000,
    },
    {   
        chanel: {
            chanelName: CHANEL_NAME_2,
            chanelIp: CHANEL_IP_2,
        }, 
        deviceName: 'Device 3',
        deviceIp: '127.0.0.1',
        devicePort: 502, 
        slaveId: 1, 
        functionCode: '3x', 
        startAddress: 30001, 
        scanRate: 5000,
        listMetrics: [
            {
                addressMetric: 30007, 
                type: 'Humidity', 
            },
            {
                addressMetric: 30008, 
                type: 'Other', 
            }
        ],
        connectTimeout: 3000,
    },
]