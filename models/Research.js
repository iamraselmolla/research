import mongoose, { Schema } from "mongoose";

const ResearchSchema = new Schema(
    [
        {
            file: {
                type: String,
                status: "pending",
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
                ref: 'User'
              }

        }
    ],
    {
        timestamps: true
    }
);
export default mongoose.models.Research || mongoose.model("Research", ResearchSchema)