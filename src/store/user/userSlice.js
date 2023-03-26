// // Slice : 툴킷 세팅을 쉽게 해주는 방법 - 리듀서와 액션크리에이터를 합쳐서 세팅하는 것
// import { createSlice } from '@reduxjs/toolkit'


// const initialState = {
//     value : false,      // 초기값 : 로그인 안된 상태
// }

// const userSlice = createSlice({
//   name: 'user',     // reducer 이름
//   initialState,     // data 초기값
//   reducers: {       // 상태 변경을 어떻게 실행할 지 지정하는 것
//         login : (state, action) =>{
//             state.value = action.payload
//         },
//         logout : (state, action) => {
//             state.value = action.payload
//         }
//   }
// })

// export const { login, logout } = userSlice.actions      //  액션 생성함수

// export default userSlice.reducer