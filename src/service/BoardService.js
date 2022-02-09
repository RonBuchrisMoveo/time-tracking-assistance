import mondaySdk from "monday-sdk-js";
const monday = mondaySdk();

export const BoardService={
    getUser,
    getBoard,
    getBoards,
    addUsersData
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

 function addUsersData(board){
     const users=[]
    const months = ['January','February','March','April','May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    board.items.map(item=>{
        const user={
            userName:'',
            status:'',
            costPerHour:0,
            months:0,
            hours:0,
         }
        user.userName = item.name
        item.column_values.map(value=>{
            if(months.includes(value.title)){
              if(value.text !==''){
                const hoursPerMonth = JSON.parse(value.text)
                user.months++
                user.hours+=hoursPerMonth
              }
            }
            if(value.title==='Status') user.status=value.text
            if(value.title==='Hourly Rate') user.costPerHour=+value.text
            return
          })
          users.push(user)
    })
    console.log('users', users);
      return users
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
       const dataUsers = addUsersData(data.boards[0])
       return dataUsers

    }catch(err){
        throw err
    }
}