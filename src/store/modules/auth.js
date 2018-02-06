import axios from '../../axios/axios-auth';
import router from '../../router';

const state = {
    idToken : null,
    userId: null,
    user : null
};

const mutations = {
    authUser(state, userData) {
        ////console.log(userData);
        state.idToken = userData.token;
        state.userId = userData.userId;
    },
    clearAuthData(state) {
        state.idToken = null;
        state.userId = null;
    
    }
};

const actions = {
    login({commit}, authData) {
        axios.post('/verifyPassword?key=AIzaSyAlbZ6z3x-nQbG-hnVyeqiuIKbEBZ_JIUY', 
                    {email: authData.email, password: authData.password, returnSecureToken: true} )
            .then(res => {
                //console.log(res);
              commit('authUser', {
                token: res.data.idToken,
                userId: res.data.localId
               });

               const object = {
                   token : res.data.idToken,
                   userId : res.data.localId,
                   expiry: new Date().getTime() + res.data.expiresIn
                }

                ////console.log(object);
                //localStorage.setItem('token', JSON.stringify(object));
                if(window.localStorage.getItem('token')) { 
                    window.localStorage.removeItem('token')
                } 

                window.localStorage.setItem('token', JSON.stringify(object));
                

                
               
                router.replace('/');
            })
            .catch(error => {
                //console.log(error);
            })
    },
    logout({commit}) {
        commit('clearAuthData');
        localStorage.removeItem('token');
        router.replace('/signin');
        //console.log('router replace');
    },
    setAuth({commit, state}) {
        //console.log('setAuth')
        let  object = null;
        object = JSON.parse(window.localStorage.getItem('token'));
      //  console.log(Number(object.expiry));
        console.log(new Date().getTime());

       // if() {
            if(object && !state.idToken ) {
                if(new Date().getTime() < object.expiry) {
                    //console.log('authUser');
                    commit('authUser', {
                        token: object.token,
                        userId: object.userId
                    });
                }
            }
       // } else {
       //     window.localStorage.removeItem('token')
        //}
    }
};

const getters = {
    isAuthenticated(state) {
        return state.idToken ? true : false ;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}