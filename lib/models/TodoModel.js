const { default: mongoose } = require('mongoose')

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isCompelted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
)

const TodoModel = mongoose.model.todo || mongoose.model('todo', Schema)

export default TodoModel