// import { createConnectTransport, createPromiseClient  } from '@bufbuild/connect-node';
// import { WorkspacesService } from '@gitpod/public-api/lib/gitpod/experimental/v1/workspaces_connectweb.js';

// async function main(){

//     const serviceUrl = new URL('https://api.gitpod.io');

//     const authInterceptor = (next) => async (req) => {
//         req.header.set('Authorization', `Bearer <YOUR_TOKEN>`);
//         return await next(req);
//     };

//     const transport = createConnectTransport({
//         baseUrl: serviceUrl.toString(),
//         httpVersion: '2',
//         interceptors: [authInterceptor],
//         useBinaryFormat: true,
//     });

//     const workspaceService = createPromiseClient(WorkspacesService, transport);

//     for await (const res of workspaceService.streamWorkspaceStatus({ workspaceId: '<WS_ID>' })) {
//         console.log(`On streamWorkspaceStatus response`, res.result);
//     }
//     console.log(`===> On streamWorkspaceStatus response END`);
// }

// main();

import { WorkspacesServiceClient } from './lib/gitpod/experimental/v1/workspaces.pb.js';
import * as grpc from '@grpc/grpc-js';

function main2() {
    const client = new WorkspacesServiceClient('api.gitpod.io:443', grpc.credentials.createSsl(), {
        'grpc.keepalive_time_ms': 120000
    });

    const metadata = new grpc.Metadata();
    metadata.add('Authorization', `Bearer <YOUR_TOKEN>`);

    const call = client.streamWorkspaceStatus({ workspaceId: '<WS_ID>' }, metadata);
    call.on("data", (res) =>{
        console.log(`On streamWorkspaceStatus response`, res.result);
    })
    call.on("end", () =>{
        console.log(`On streamWorkspaceStatus end`);
    })
    call.on("pause", () =>{
        console.log(`On streamWorkspaceStatus pause`);
    })
    call.on("error", (err) =>{
        console.log(`On streamWorkspaceStatus error`, err);
    })

    console.log(`=====`);
}

main2();
