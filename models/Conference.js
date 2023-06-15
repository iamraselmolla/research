import mongoose, { Schema, model } from "mongoose";


const ConferenceSchema = new Schema({
  organisationInfo: {
    organizationName: {
      type: String,
      required: true
    },
    organizationAddress: String,
    organizationCity: String,
    organizationState: String,
    organizationCountry: String,
  },
  conferenceInfo: {
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
    startTime: String,
    endTime: String,

  },
  committeeInfo: {
    committeeChair: String,
    committeeMembers: [String],
  },

    speakers: [{
      name: String,
      affiliation: String,
      bio: String
    }],
  registrationInfo: {
    registrationOpenDate: Date,
    registrationCloseDate: Date,
    registrationFee: Number,
    registrationLink: String,
  },
  verified: {
    type: Boolean,
    default: false
  },
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


