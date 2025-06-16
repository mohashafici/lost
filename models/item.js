import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['person','animal' ,'electronics', 'clothing', 'documents', 'jewelry', 'other']
    },
    status: {
        type: String,
        required: true,
        enum: ['lost', 'found'],
        default: 'lost'
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    images: [{
        type: String
    }],
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    isResolved: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Item', itemSchema);

