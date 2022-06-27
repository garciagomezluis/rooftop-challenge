import axios from 'axios';

const verify = async (data: any, token: string): Promise<boolean> => {
    const response = await axios({
        method: 'post',
        url: `https://rooftop-career-switch.herokuapp.com/check?token=${token}`,
        data,
    });
    return response.data.message;
}

export const getBlocks = async (token: string) => {
    const response = await axios({
        method: 'get',
        url: `https://rooftop-career-switch.herokuapp.com/blocks?token=${token}`,
    });
    return response.data.data;    
}

export const getToken = async (email: string) => {
    const response = await axios({
        method: 'get',
        url: `https://rooftop-career-switch.herokuapp.com/token?email=${email}` 
    });
    return response.data.token;
}

export const checkBlocks = (block1: string, block2: string, token: string) => {
    return verify({
        blocks: [block1, block2]
    }, token);
}

export const checkOrder = (sorted: Array<string>, token: string) => {
    return verify({
        encoded: sorted.join('')
    }, token);
}
