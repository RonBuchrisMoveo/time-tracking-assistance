import mondaySdk from "monday-sdk-js";
const monday = mondaySdk();

export const BoardService={
    getUser,
    getBoard,
    getBoards
}

//for dev
monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE0NDUxNTIwNiwidWlkIjoyNjUwNjUxMSwiaWFkIjoiMjAyMi0wMi0wNlQxMzoxODoxMS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTEwMjMyOCwicmduIjoidXNlMSJ9.hBfGTpbOc86DGGbGcmmMD9gIg1P90Y8gvpgIGseWn5E')

async function getUser(){
    try{
        const { data } = await monday.api(`query {
            me {
              name
              id
              }
          }`);
          return data.me
    }catch(err){
        throw err
    }
}

async function getBoards(){
    try{
        const { data } = await monday.api(`{ boards {name id} }`);
        console.log('data', data);
        //   return data.me
    }catch(err){
        throw err
    }
}

async function getBoard(){
    try{
        let query = 'query { boards (ids: [2257151977]) { name state board_folder_id items { id name column_values {title text } } }}'
       const {data} =  await monday.api(query)
            return data.boards[0]

    }catch(err){
        throw err
    }
}