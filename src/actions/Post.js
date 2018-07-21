import axios from 'axios'

const client = axios.create({
  // baseURL: 'https://apla122.github.io/ReactSample/test.json',
  headers: {
    // 'Content-Type': 'application/json',
    // 'X-Requested-With': 'XMLHttpRequest'
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json',
  },
  // responseType: 'json'
});

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
const getPostsRequest = () => {
  return {
    type: GET_POSTS_REQUEST
  }
}

export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
const getPostsSuccess = (json) => {
  return {
    type: GET_POSTS_SUCCESS,
    posts: json,
    receivedAt: Date.now()
  }
}

export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'
const getPostsFailure = (error) => {
  return {
    type: GET_POSTS_FAILURE,
    error
  }
}

export const getPosts = () => {
  return (dispatch) => {
    dispatch(getPostsRequest())
    return client.get('https://apla122.github.io/ReactSample/test.json')
      .then(function (res) {
        console.log('Success response');
        dispatch(getPostsSuccess(res.data))
      }
      ).catch(function (err) {
        if (err.response) {
            console.log('Error response');
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(err.response.data);
          console.log(err.response.status);      // 例：400
          console.log(err.response.statusText);  // Bad Request
          console.log(err.response.headers);
        } else if (err.request) {
          console.log('Error request');
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(err.request);
        } else {
          console.log('Error other');
          // Something happened in setting up the request that triggered an Error
          console.log('Error', err.message);
        }
        console.log(err.config);
        dispatch(getPostsFailure(err))
      })
  }
}
