import axios from '../../axios/axios-auth';
import router from '../../router';

const state = {
    idToken : null,
    userId: null,
    user : null
};

const mutations = {
    authUser(state, userData) {
        //console.log(userData);
        state.idToken = userData.token;
        state.userId = userData.userId;

    }
};

const actions = {
    login({commit}, authData) {
        axios.post('/verifyPassword?key=AIzaSyAlbZ6z3x-nQbG-hnVyeqiuIKbEBZ_JIUY', 
                    {email: authData.email, password: authData.password, returnSecureToken: true} )
            .then(res => {
               // console.log(res);
              commit('authUser', {
                token: res.data.idToken,
                userId: res.data.localId
               });

               localStorage.setItem('token', res.data.idToken);

               router.replace('/');
            })
            .catch(error => {
                console.log(error);
            })
    }
};

const getters = {
    isAuthenticated(state) {
       // console.log(state.idToken);
        return state.idToken ? true : false;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}