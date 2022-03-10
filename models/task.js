import mongoose from 'mongoose'

const schema = mongoose.Schema

const taskSchema = new schema({
    name: String,
    tasty: Boolean

}, {
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)


export {
    Task
}