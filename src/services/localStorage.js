const get = (key, defaultData) => {
    const data = JSON.parse(localStorage.getItem(key));
    return data === null ? defaultData : data;
};

const set = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get: get,
    set: set
};