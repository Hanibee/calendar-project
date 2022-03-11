import mongoose from 'mongoose'

const schema = mongoose.Schema

const taskSchema = new schema({
    name: String,
    location: String,
    meetingtime: String,
}, {
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)


export {
    Task
}