import React from 'react'
import Layout from '../components/Layout'
import { Meeting } from './Meeting'

interface MeetingPageProps {
    meeting: Meeting
}

const MeetingPage = (props: MeetingPageProps) => {
    var meeting: Meeting = props.meeting

    // here you can add objects

    var dateOfMeeting = meeting.getDateOfMeeting()
    var meetingName = meeting.getMeetingTitle()
    var goal = meeting.getGoal()
    var participants = meeting.getParticipants()
    var moderator = meeting.getModerator()
    var scheduledTime = meeting.getScheduledTime()
    var actualTime = meeting.getActualTime()
    var agenda = meeting.getAgenda()
    var openIssues = meeting.getOpenIssues()
    var decisions = meeting.getDecisions()
    var openTopics = meeting.getOpenTopics()
    var todo = meeting.getTodo()

    return (
        <div className="flex flex-col flex-grow uppercase">
            <div className="p-4 full-height flex flex-col justify-center border-b-2 border-slate-400 bg-blue-200">
                <div className="uppercase full-height basis-1/2 text-center justify-center">
                    {' '}
                    {dateOfMeeting} &nbsp; - &nbsp;
                    {meetingName}{' '}
                </div>
                <div className=" basis-1/2 flex flex-row">
                    <div className="p-2 basis-1/2">
                        <div>
                            <p>
                                <b>goal:</b> {goal}
                            </p>
                        </div>
                        <div>
                            <p>
                                <b> participants:</b> {participants}
                            </p>
                        </div>
                        <div>
                            <p>
                                <b>moderator:</b> {moderator}
                            </p>
                        </div>
                        <div>
                            <p>
                                <b>scheduled time: </b> {scheduledTime}
                            </p>
                        </div>
                        <div>
                            <p>
                                <b> actual time: </b> {actualTime}
                            </p>
                        </div>
                    </div>
                    <div className="border-l p-2 border-black basis-1/2">
                        <p>
                            <b> agenda: </b>
                        </p>
                        <p>{agenda}</p>
                    </div>
                </div>
            </div>
            <div className=" p-4 flex flex-col">
                <div className="basis-1/5">
                    {' '}
                    <p className="font-bold underline uppercase">
                        open issues from the past meeting:
                    </p>
                    {openIssues}
                </div>
                <div className="basis-1/5">
                    {' '}
                    <p className="font-bold underline uppercase">decisions:</p>
                    {decisions}
                </div>
                <div className="basis-1/5">
                    <p className="font-bold underline uppercase">
                        open topics for follow-up meeting:
                    </p>
                    {openTopics}
                </div>
                <div className="basis-1/5">
                    <p className="font-bold underline uppercase">to do:</p>
                    {todo}
                </div>
            </div>
        </div>
    )
}

export default MeetingPage
