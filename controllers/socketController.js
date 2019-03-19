let Client = require('ssh2').Client;
let sshConfig = require('../config').sshConfig;
let mysql = require('../config');
let Tail = require('tail').Tail;

//let file_vf_simulator = ('public/Animation/Cluster.Fake.csv');
//let options= {separator: /[\r]{0,1}\n/, fromBeginning: false, fsWatchOptions: {}, follow: true, logger: console};

//let tail = new Tail(file_vf_simulator, options);

module.exports = function(io){
    /*

    io.on('connection', function(socket){
        
        let feed_to_display_cluster_1 = [];
        let feed_to_display_cluster_2 = [];
        let feed_to_display_cluster_3 = [];
        let feed_to_display_cluster_4 = [];
        let feed_to_display_cluster_5 = [];

        let meta_data_clusters = { // important to note.
            c1: 4,
            c2: 4,
            c3: 3,
            c4: 5,
            c5: 4
        }
        
        tail.on("line", function(feed_from_file){
            //console.log(feed);
            

            let arr_data = feed_from_file.split('\n');

            for(let i=0; i<arr_data.length; i++){

                if(arr_data[i]){
                    let feed = arr_data[i].split(',');

                    if(feed[0] == 'Cluster1'){
                        feed_to_display_cluster_1.push({
                            cluster: feed[0],
                            info: feed[1],
                            tooltotal: feed[2],
                            toolprod: feed[3],
                            tooldown: feed[4] || 0,
                            stepcapacity: feed[5],
                            totalwip: feed[6],
                            trolley: (feed[7] / 500 || 0).toFixed(0),
                            frontingwip: feed[7],
                            wipinside: feed[8],
                            colorfrontwip: feed[9],
                            colorfrontfg: feed[10],
                            queuetime: feed[11],
                            colorqueuetime: feed[12],
                            tool: feed[13],
                            tooldownmessage: feed[14],
                            oee_value: feed[15],
                            oee_target: feed[16],
                        });
                    } else if(feed[0] == 'Cluster2'){
                        feed_to_display_cluster_2.push({
                            cluster: feed[0],
                            info: feed[1],
                            tooltotal: feed[2],
                            toolprod: feed[3],
                            tooldown: feed[4] || 0,
                            stepcapacity: feed[5],
                            totalwip: feed[6],
                            trolley: (feed[7] / 500 || 0).toFixed(0),
                            frontingwip: feed[7],
                            wipinside: feed[8],
                            colorfrontwip: feed[9],
                            colorfrontfg: feed[10],
                            queuetime: feed[11],
                            colorqueuetime: feed[12],
                            tool: feed[13],
                            tooldownmessage: feed[14],
                            oee_value: feed[15],
                            oee_target: feed[16],
                        });
                    } else if(feed[0] == 'Cluster3'){
                        feed_to_display_cluster_3.push({
                            cluster: feed[0],
                            info: feed[1],
                            tooltotal: feed[2],
                            toolprod: feed[3],
                            tooldown: feed[4] || 0,
                            stepcapacity: feed[5],
                            totalwip: feed[6],
                            trolley: (feed[7] / 500 || 0).toFixed(0),
                            frontingwip: feed[7],
                            wipinside: feed[8],
                            colorfrontwip: feed[9],
                            colorfrontfg: feed[10],
                            queuetime: feed[11],
                            colorqueuetime: feed[12],
                            tool: feed[13],
                            tooldownmessage: feed[14],
                            oee_value: feed[15],
                            oee_target: feed[16],
                        });
                    } else if(feed[0] == 'Cluster4'){
                        feed_to_display_cluster_4.push({
                            cluster: feed[0],
                            info: feed[1],
                            tooltotal: feed[2],
                            toolprod: feed[3],
                            tooldown: feed[4] || 0,
                            stepcapacity: feed[5],
                            totalwip: feed[6],
                            trolley: (feed[7] / 500 || 0).toFixed(0),
                            frontingwip: feed[7],
                            wipinside: feed[8],
                            colorfrontwip: feed[9],
                            colorfrontfg: feed[10],
                            queuetime: feed[11],
                            colorqueuetime: feed[12],
                            tool: feed[13],
                            tooldownmessage: feed[14],
                            oee_value: feed[15],
                            oee_target: feed[16],
                        });
                    } else if(feed[0] == 'Cluster5'){
                        feed_to_display_cluster_5.push({
                            cluster: feed[0],
                            info: feed[1],
                            tooltotal: feed[2],
                            toolprod: feed[3],
                            tooldown: feed[4] || 0,
                            stepcapacity: feed[5],
                            totalwip: feed[6],
                            trolley: (feed[7] / 500 || 0).toFixed(0),
                            frontingwip: feed[7],
                            wipinside: feed[8],
                            colorfrontwip: feed[9],
                            colorfrontfg: feed[10],
                            queuetime: feed[11],
                            colorqueuetime: feed[12],
                            tool: feed[13],
                            tooldownmessage: feed[14],
                            oee_value: feed[15],
                            oee_target: feed[16],
                        });
                    }
                }
            }
        
            let dashboard = [
                {feed: feed_to_display_cluster_1},
                {feed: feed_to_display_cluster_2},
                {feed: feed_to_display_cluster_3},
                {feed: feed_to_display_cluster_4},
                {feed: feed_to_display_cluster_5}
            ]
            
            if(meta_data_clusters.c1 == dashboard[0].feed.length && meta_data_clusters.c2 == dashboard[1].feed.length && meta_data_clusters.c3 == dashboard[2].feed.length && meta_data_clusters.c4 == dashboard[3].feed.length && meta_data_clusters.c5 == dashboard[4].feed.length){
                let cluster_metadata = [
                    {name: 'Cluster1'},
                    {name: 'Cluster2'},
                    {name: 'Cluster3'},
                    {name: 'Cluster4'},
                    {name: 'Cluster5'},
                ]

                // before emitting, make sure that clusters array matched to metadata per cluster. (or number of process per cluster)
                socket.emit('cluster-feed', dashboard, cluster_metadata);
            }
        });

        tail.on("error", function(err){
            console.log(err);
        });

    });

    */

}