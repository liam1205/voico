import React from 'react'
import { Meeting } from './Meeting'
import { Detail, Protocoll } from './protocoll'

interface protocollPageProps {
    meeting: Meeting
    protocoll: Protocoll
}

const ProtocollPage = (props: protocollPageProps) => {
    const meetingObject = props.meeting
    // here you can add objects
    var participants = meetingObject.getParticipants()
    props.meeting.setProtocoll(props.protocoll)

    console.log(meetingObject.getProtocoll().getContent()[1].string())

    var protocollList = meetingObject
        .getProtocoll()
        .getContent()
        .map((protocoll: Detail) => (
            <li value={protocoll.string()}>{protocoll.string()}</li>
        ))

    return (
        <div className="flex flex-col flex-grow uppercase">
            {/* Information */}
            <div className="border-b border-black basis-2/12 flex flex-col">
                <div>
                    <p className="basis-1/2">
                        <b> participants: </b>
                        {participants}
                    </p>
                </div>
            </div>
            {/* Body */}
            <div className="basis-10/12">
                {/* hier fehlen noch die Protokolle */}
                {protocollList}
            </div>
        </div>
    )
}

export default ProtocollPage
