import { checkBlocks, checkOrder as verify, getBlocks, getToken } from '../clients/rooftop';

const isValidBlocksAssignment = (blocks: Array<string>): boolean => {
    return typeof blocks !== "undefined" && Array.isArray(blocks);
}

export const getSortedBlocks = async (token: string) => {
    const blocks = await getBlocks(token);

    if(!isValidBlocksAssignment(blocks)) throw new Error(`Invalid blocks assignment: ${blocks && JSON.stringify(blocks)}`);

    const sorted = await check(blocks, token);
    const done = await verify(sorted, token);

    if(!done) throw new Error("Could not order blocks");

    return sorted;
}

export const check = async (blocks: Array<string>, token: string): Promise<Array<string>> => {
    let requestAmount = 0;
    
    let [first, ...candidates] = blocks;
    const sorted = [first];

    while(candidates.length > 1) {
        const block1 = sorted[sorted.length - 1];

        for(let i = 0; i < candidates.length; i++) {
            const block2 = candidates[i];

            requestAmount++;
            if(await checkBlocks(block1, block2, token)) {
                sorted.push(block2);
                candidates.splice(i, 1);
                break;
            }
        }
    }

    sorted.push(candidates[0]);
  
    console.log(`Request amount to Rooftop service to check two blocks ordering: ${requestAmount}`);

    return sorted;
}

export { getToken };
