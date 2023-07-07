import mongoose, { Schema } from "mongoose";

const ResearchSchema = new Schema(
    [
        {
            file: {
                type: String,
                required: true
                
            },
            title:{
                type: String,
                required: true
            },
            description: {
                type: String
            },
            user: {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true
              },
              status: {
                type: String,
                default: 'pending',
                enum: ['pending', 'approved', 'rejected'],
                required: true
              }

        },
    ],
    {
        timestamps: true
    }
);
export default mongoose.models.Research || mongoose.model("Research", ResearchSchema)