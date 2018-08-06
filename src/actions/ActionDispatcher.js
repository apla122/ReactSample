// const myHeaders = {
//     "Content-Type": "application/json",
//     'Accept': 'application/json'
//   };
  
//   export class ActionDispatcher {
//     dispatch: (action: any) => any;
//     bigJSON: ReduxState;
  
//     constructor(
//       dispatch: (action: any) => any,
//       bigJSON: ReduxState,
//     ) {
//       this.dispatch = dispatch
//       this.bigJSON = bigJSON
//     }
  
//     doSome(params: string) {
//       const bigJSON, params
//       {/* View Logic*/}
//       {/* domain Logic*/}
//       const data = {/* View Logic*/}
//       this.dispatch({type: SOME_ACTION, payload: data})
//     }
  
//     async saveToServer(): Promise<void> {
//       try {
//         {/* View Logic*/}
//         const response: Response = await fetch('http://localhost:3000/api/todos', {
//           method: 'PUT',
//           headers: myHeaders,
//           body: JSON.stringify(this.todoList)
//         });
  
//         if (response.status === 200) { //2xx
//           const bigJSON, response
//           {/* domain Logic*/}
//           {/* View Logic*/}
//           this.dispatch({type: SOME_ACTION, payload: data})
//         } else {
//           throw new Error(`illegal status code: ${response.status}`);
//         }
//       } catch (err) {
//         console.error(err.message);
//       }
//     }
//   }