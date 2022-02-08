import mondaySdk from "monday-sdk-js";
const monday = mondaySdk();

export const BoardService={
    getUser,
    getBoard
}

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
async function getBoard(){
    try{
        const board=[]
        let query = 'query { boards (ids: 2257151977) { name state board_folder_id items { id name column_values {title text } } }}'
        await fetch ("https://api.monday.com/v2", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE0NDUxNTIwNiwidWlkIjoyNjUwNjUxMSwiaWFkIjoiMjAyMi0wMi0wNlQxMzoxODoxMS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTEwMjMyOCwicmduIjoidXNlMSJ9.hBfGTpbOc86DGGbGcmmMD9gIg1P90Y8gvpgIGseWn5E'
            },
            body: JSON.stringify({
                'query' : query
            })
        }).then(res => res.json())
        .then(res => {
            board = res.data.boards[0]
        });
        console.log('b1', board);
            // return board

    }catch(err){
        throw err
    }
}