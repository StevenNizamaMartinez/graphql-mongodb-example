export const typeDefs = `
  type Task {
    id : ID
    title : String
    description : String
  }

  type Query {
    hello : String
    getTasks : [Task]
  }

  type Mutation {
    createTask(title:String,description:String) : Task
    deleteTask(id : ID) : Task
    updateTask(id:ID,title:String,description:String) : Task
  }
`;
