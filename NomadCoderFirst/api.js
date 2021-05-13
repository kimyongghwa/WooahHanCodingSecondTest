const API_END_POINT = 'https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev'

export const request = async (nodeId) => {
    try {
        const response = await ((await fetch((`${API_END_POINT}/${nodeId ? nodeId : ''}`))).json())
        console.log(response);
        return response;
    }
    catch (error) {
        console.error(error);
    }
}