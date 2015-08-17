'use strict';

// Example config
module.exports = {
    cassandra: {
        options: {
            // These first options are all datastax/nodejs-driver options
            hosts: [
                "127.0.0.1:9042"
            ],
            keyspace: "mykeyspace",

            // ODM specific (sync, create keyspaces, replication strategy)
            //
            // Default is true (note that it only creates keyspaces, adds columnfamilies, adds columns, syncing never deletes - use cqlsh manually to delete)
            sync: true,
            replication: {
                // Default is 'SimpleStrategy', NOTE: Use 'NetworkTopologyStrategy' for production (assumption is that options is defined inside of a config file that is loaded differently based on environment)
                strategy: 'SimpleStrategy',
                // Default is 1 (only used with SimpleStrategy)
                replication_factor: 1,
                // Strategy options is only taken into account for NetworkTopologyStrategy - if not specified, then throws error if trying to sync.
                strategy_options: {
                    '0': 3
                    // 'us-east':3,
                    // 'us-west':3
                }
            }
        }
    }
};
