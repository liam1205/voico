import Link from 'next/link'
import React, { useState } from 'react'
import { Meeting } from './Meeting'

interface newMeetingPageProps {
    onCreateMeeting(meeting: Meeting)
}

const NewMeetingPage = (props: newMeetingPageProps) => {
    // here you can add objects
    function myFunction(): Meeting {
        const thisTitle = document.getElementById('title') as HTMLInputElement
        const title = thisTitle?.value

        const thisDate = document.getElementById('date') as HTMLInputElement
        const date = thisDate?.value

        const thisAgenda = document.getElementById('agenda') as HTMLInputElement
        const agenda = thisAgenda?.value

        const thisParticipants = document.getElementById(
            'participants'
        ) as HTMLInputElement
        const participants = thisParticipants?.value

        const thisGoals = document.getElementById('goals') as HTMLInputElement
        const goal = thisGoals?.value

        const thisScheduledTime = document.getElementById(
            'scheduledTime'
        ) as HTMLInputElement
        const scheduledTime = thisScheduledTime.value

        var meeting = new Meeting(
            title,
            date,
            agenda,
            participants,
            scheduledTime
        )
        meeting.setGoal(goal)

        return meeting
    }

    return (
        <div className="flex-grow">
            <div className="flex flex-col flex-grow p-6 bg-blue-200">
                <div className="flex flex-row">
                    <div
                        className="centerflex flex-col basis-1/2
                        
                    "
                    >
                        <div className="basis-1/3">
                            {' '}
                            <p className="uppercase"> title:</p>
                            <textarea
                                // cols="50"
                                // rows="1"
                                id="title"
                                className="border border-2 border-slate-300 resize-none"
                                placeholder="title..."
                            ></textarea>
                        </div>
                        <div className="basis-1/3">
                            <p className="uppercase"> date:</p>
                            <p></p>
                            <textarea
                                id="date"
                                className="border border-2 border-slate-300 resize-none"
                                placeholder="date..."
                            ></textarea>
                        </div>
                        <div className="basis-1/3">
                            <p className="uppercase"> goal:</p>
                            <textarea
                                // cols="50"
                                // rows="1"
                                id="goals"
                                className="border border-2 border-slate-300 resize-none"
                                placeholder="goal..."
                            ></textarea>
                        </div>
                    </div>
                    <div
                        className="flex flex-col basis-1/2 float-right
                    "
                    >
                        <div className="basis-2/5">
                            <p className="uppercase"> agenda:</p>
                            <textarea
                                // cols="50"
                                // rows="8"
                                id="agenda"
                                className="border border-2 border-slate-300 resize-none"
                                placeholder="agenda..."
                            ></textarea>
                        </div>
                        <div className="basis-1/5">
                            <p className="uppercase"> scheduled time:</p>
                            <p></p>
                            <textarea
                                id="scheduledTime"
                                className="border border-2 border-slate-300 resize-none"
                                placeholder="scheduled time..."
                            ></textarea>
                        </div>
                        <div className="basis-1/5">
                            <p className="uppercase"> participants:</p>
                            <textarea
                                // cols="50"
                                // rows="5"
                                id="participants"
                                className="border border-2 border-slate-300 resize-none"
                                placeholder="participants..."
                            ></textarea>
                        </div>
                        <div className="basis-1/5">
                            <p className="uppercase underline">
                                <a> attach files</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center background-color:rgba(199,230,239,255)">
                    <button
                        onClick={() => {
                            props.onCreateMeeting(myFunction())
                        }}
                        className="float-right bg-slate-600 hover:bg-white text-white font-semibold hover:text-black py-2 px-6 hover:border-slate-600"
                    >
                        create
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewMeetingPage
