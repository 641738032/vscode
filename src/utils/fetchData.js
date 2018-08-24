import fetch from 'isomorphic-fetch';
const getFetch = (url,callBack) => {

        return fetch(url,   {
            credentials: 'same-origin',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method:'GET',})
            .then(res => res.json())
            .then(json => {
                callBack(json);
            })
            .catch(err => {
                    console.log('err=', err);
                }
            );
};

const postFetch = (url,data,callBack) => {

    return fetch(url,   {
        credentials: 'same-origin',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method:'POST',
        body:data })
        .then(res => res.json())
        .then(json => {
            callBack(json);
        })
        .catch(err => {
                console.log('err=', err);
            }
        );
};

export {getFetch,postFetch};