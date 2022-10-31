import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
  msg: '',
  user: '',
  token: '',
  loading: false,
  error: ''
}

export const signUpUser = createAsyncThunk (
    'user/signUpUser',
  async  (body) => {
        const res = await fetch ('', {
            method: 'post',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(body)
        })
        return await res.json();
    }

)

export const signInUser = createAsyncThunk (
    'user/signInUser',
  async  (body) => {
        const res = await fetch ('w8305jwr03r8359', {
            method: 'post',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(body)
        })
        return await res.json();
    }

)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToken: (state, action) => {
        state.token = localStorage.getItem('token');
    },
    addUser: (state, action) => {
        state.user = localStorage.getItem('user');
    },
    logOut: (state, action) => {
        state.token = null;
        localStorage.clear();
    }
  },
  extraReducers: {
    //**************Login*************** */
    [signInUser.pending] : (state,action) => {
        state.loading = true     
     },
     [signInUser.fulfilled] : (state,{payload: {error,msg, token, user}}) => {
         state.loading = false 
         if (error) {
            state.error = error;
         } else {
            state.msg = msg;
            state.token = token;
            state.user = user;

            localStorage.setItem ('msg', msg)
            localStorage.setItem ('user', JSON.stringify(user))
            localStorage.setItem ('token', token)
            
         }
      },
      [signInUser.rejected] : (state,action) => {
         state.loading = true     
      },

    //   ***********Sign in***************
    [signUpUser.pending] : (state,action) => {
       state.loading = true     
    },
    [signUpUser.fulfilled] : (state,{payload: {error,msg}}) => {
        state.loading = false 
        if (error) {
           state.error = error 
        } else {
            state.msg = msg
        }   
     },
     [signUpUser.rejected] : (state,action) => {
        state.loading = true     
     },
  },
})


export const {addToken, addUser, logOut } = userSlice.actions

export default userSlice.reducer