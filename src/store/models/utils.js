export const attemptRequest = async (url, onSuccess, onError) => {
    const config = {
        method: 'GET',
        headers: {
            // 'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json, text/plain, */*',
        }
    };
    try {
        const response = await fetch(url, config)
        console.log("Response", response)
        if (response.status === 200){
            const data = await response.json()
            onSuccess (data);
        }else{
            onError()
        }
    }catch (e) {
        console.log("Error fetching data in fetchEventsAsync")
        onError()
    }
}