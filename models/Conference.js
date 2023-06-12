import mongoose, { Schema, model } from "mongoose";


const ConferenceSchema = new Schema({
  organizationName: {
    type: String,
    required: true
  },
  organizationAddress: String,
  organizationCity: String,
  organizationState: String,
  organizationCountry: String,


  committeeChair: String,
  committeeMembers: [String],

 
  conferenceName: {
    type: String,
    required: true
  },
  conferenceLocation: String,
  conferenceDate: Date,
  conferenceType: {
    type: String,
    enum: ['Online', 'Offline', 'Hybrid'],
    required: true
  },
  conferenceTheme: String,


  speakers: [{
    name: String,
    affiliation: String,
    bio: String
  }],

 
  registrationOpenDate: Date,
  registrationCloseDate: Date,
  registrationFee: Number,
  registrationLink: String,

 
  schedule: [{
    startTime: String,
    endTime: String,
    sessionTitle: String,
    sessionDescription: String
  }],


  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.models.Conference || mongoose.model('Conference', ConferenceSchema);


