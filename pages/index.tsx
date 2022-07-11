import Link from 'next/link'
import Layout from '../components/Layout'
import { Meeting } from './Meeting'
import MeetingPage from './MeetingPage'
import { Modal } from 'antd'
import { useEffect, useState } from 'react'
import ProtocollPage from './ProtocollPage'
import NewMeetingPage from './newMeeting'
import React from 'react'
import { Detail, Protocoll } from './protocoll'

const IndexPage = () => {
    var todos = Array<string>(
        'PREPARE BUDGET PLAN',
        'FIX BUGS IN CODE',
        'CREATE PRESENTATION FOR MANAGEMENT'
    )

    var todoList = todos.map((todo: string) => (
        <ul>
            <li value={todo}>{'🔥' + todo}</li>
        </ul>
    ))

    // react state!!
    var arrayForMeetings = new Array<Meeting>(
        new Meeting(
            'meeting with potential client',
            '13.07.2022',
            'agree on the teams of the contract',
            'martina, alex, sascha (external), martina (external)',
            '07:00 - 08:00'
        ),
        new Meeting(
            'planning meeting - marketing',
            '13.07.2022',
            'define problems, goals and tasks for the next two weeks',
            'martina, alex, sascha (external), martina (external)',
            '08:00 - 09:00'
        )
    )

    // modal 6
    const [isModalVisible6, setIsModalVisible6] = useState(false)

    const showModal6 = () => {
        setIsModalVisible6(true)
    }

    const handleOk6 = () => {
        setIsModalVisible6(false)
    }

    const handleCancel6 = () => {
        setIsModalVisible6(false)
    }

    var meetingsAhead = arrayForMeetings.map((meeting: Meeting) => (
        <ul>
            <li value={meeting.getMeetingTitle()}>
                <div className="border-solid border-2 border-slate-400 ml-2 mr-2 mt-2 mb-2 bg-blue-200">
                    <a className="text-xl" type="primary" onClick={showModal6}>
                        {meeting.getScheduledTime() +
                            ' - ' +
                            meeting.getMeetingTitle()}
                    </a>
                    <Modal
                        title={
                            meeting.getScheduledTime() +
                            ' - ' +
                            meeting.getMeetingTitle()
                        }
                        visible={isModalVisible6}
                        onOk={handleOk6}
                        onCancel={handleCancel6}
                    >
                        <MeetingPage meeting={meeting}></MeetingPage>
                    </Modal>
                    <p>
                        <b>goals:</b> {meeting.getGoal()}
                    </p>
                    <p>
                        <b>participants:</b> {meeting.getParticipants()}
                    </p>
                </div>
            </li>
        </ul>
    ))

    const [object, setObject] = useState(arrayForMeetings)

    useEffect(() => {
        arrayForMeetings = object
        var testLog = `You clicked ${arrayForMeetings.length} times`

        console.log(meetingsAhead)
        console.log(arrayForMeetings)
    }, [arrayForMeetings, meetingsAhead])

    const [value, setValue] = useState(meetingsAhead)

    const refresh = () => {
        window.location.reload()
    }

    // modal 1
    const [isModalVisible1, setIsModalVisible1] = useState(false)

    const showModal1 = () => {
        setIsModalVisible1(true)
    }

    const handleOk1 = () => {
        setIsModalVisible1(false)
    }

    const handleCancel1 = () => {
        setIsModalVisible1(false)
    }

    // modal 2
    const [isModalVisible2, setIsModalVisible2] = useState(false)

    const showModal2 = () => {
        setIsModalVisible2(true)
    }

    const handleOk2 = () => {
        setIsModalVisible2(false)
    }

    const handleCancel2 = () => {
        setIsModalVisible2(false)
    }

    // modal 3
    const [isModalVisible3, setIsModalVisible3] = useState(false)

    const showModal3 = () => {
        setIsModalVisible3(true)
    }

    const handleOk3 = () => {
        setIsModalVisible3(false)
    }

    const handleCancel3 = () => {
        setIsModalVisible3(false)
    }

    // modal 4
    const [isModalVisible4, setIsModalVisible4] = useState(false)

    const showModal4 = () => {
        setIsModalVisible4(true)
    }

    const handleOk4 = () => {
        setIsModalVisible4(false)
    }

    const handleCancel4 = () => {
        setIsModalVisible4(false)
    }

    // modal 5
    const [isModalVisible5, setIsModalVisible5] = useState(false)

    const showModal5 = () => {
        setIsModalVisible5(true)
    }

    const handleOk5 = () => {
        setIsModalVisible5(false)
    }

    const handleCancel5 = () => {
        setIsModalVisible5(false)
    }

    // first past meeting object
    var pastMeeting1 = new Meeting(
        'weekly stand-up',
        '16.05.2022',
        'build documentation, code review, daily scrum',
        'developer team',
        ''
    )
    pastMeeting1.setAgenda('1. catch up \n2. presentation development team')
    pastMeeting1.setOpenIssues(
        '- Test cases of app that will be launched next month'
    )
    pastMeeting1.setDecisions('- function xy has to be re-written')
    pastMeeting1.setOpenTopics('- test cases for new functions')
    pastMeeting1.setTodo('- write new functions')
    pastMeeting1.setProtocoll(
        new Protocoll([
            new Detail(
                'Max',
                'Welcome to this meeting! We are going to discuss important matters today!'
            ),
            new Detail('Hanna', 'Very warm welcome!'),
            new Detail('Eva', 'Nice to meet you guys!'),
            new Detail('Liam', 'Also a warm welcome from my side!'),
        ])
    )

    // second past meeting object
    var pastMeeting2 = new Meeting(
        'weekly stand-up',
        '02.05.2022',
        'code review, daily scrum',
        'developer team',
        ''
    )

    var today = 'Wednesday, 13th July 2022'

    return (
        <>
            <Layout title="VOICO">
                <div className="flex flex-col flex-grow justify-center uppercase">
                    <div className="flex-none">
                        <div className="text-center flex-none text-xl">
                            <a className="uppercase">today's meetings</a>
                        </div>

                        <div className="text-center"> {today} </div>
                    </div>

                    <div className="grow">
                        <div className="flex h-4/5 flex-row flex-grow ">
                            <div className="overflow-y-auto basis-1/5 flex flex-col text-center p-8 border-solid border-2 border-slate-400 ml-2 mr-2 mt-2 mb-2">
                                {/* Überschrift */}
                                <div className="basis-1/12 text-xl">
                                    <p> past meetings</p>
                                </div>
                                {/* Suche */}
                                <div className="basis-2/12">
                                    {' '}
                                    <input
                                        type="search"
                                        className="border border-2 border-slate-400"
                                        placeholder="search"
                                    />
                                </div>
                                {/* vergangene Meetings */}

                                <div className="basis-9/12">
                                    {/* hier sollen mal die ganze vergangenen Meetings hin, Anzahl soll egal sein */}
                                    <div className="uppercase">
                                        <br></br>
                                        {/* Meeting 1*/}
                                        <p className="text-left">
                                            <a className="font-bold">
                                                <a
                                                    type="primary"
                                                    onClick={showModal1}
                                                >
                                                    {pastMeeting1.getDateOfMeeting() +
                                                        ' - ' +
                                                        pastMeeting1.getMeetingTitle()}
                                                </a>
                                                <Modal
                                                    title={
                                                        'Meeting ' +
                                                        pastMeeting1.getMeetingTitle()
                                                    }
                                                    visible={isModalVisible1}
                                                    onOk={handleOk1}
                                                    onCancel={handleCancel1}
                                                >
                                                    <MeetingPage
                                                        meeting={pastMeeting1}
                                                    ></MeetingPage>
                                                </Modal>
                                            </a>
                                        </p>
                                        <p className="text-left">
                                            <b> Goal: </b>{' '}
                                            {pastMeeting1.getGoal()}{' '}
                                        </p>
                                        <p className="text-left">
                                            <b> participants: </b>{' '}
                                            {pastMeeting1.getParticipants()}{' '}
                                        </p>
                                        <p className="text-left underline">
                                            <a
                                                type="primary"
                                                onClick={showModal2}
                                            >
                                                View Protocol
                                            </a>
                                            <Modal
                                                title={
                                                    'Protocoll for ' +
                                                    pastMeeting1.getMeetingTitle()
                                                }
                                                visible={isModalVisible2}
                                                onOk={handleOk2}
                                                onCancel={handleCancel2}
                                            >
                                                <ProtocollPage
                                                    meeting={pastMeeting1}
                                                    protocoll={pastMeeting1.getProtocoll()}
                                                ></ProtocollPage>
                                            </Modal>
                                        </p>
                                        <br></br>
                                        {/* Meeting 2*/}
                                        <p className="text-left">
                                            <a className="font-bold">
                                                <a
                                                    type="primary"
                                                    onClick={showModal4}
                                                >
                                                    {pastMeeting2.getDateOfMeeting() +
                                                        ' - ' +
                                                        pastMeeting2.getMeetingTitle()}
                                                </a>
                                                <Modal
                                                    title={
                                                        'Meeting ' +
                                                        pastMeeting2.getMeetingTitle()
                                                    }
                                                    visible={isModalVisible4}
                                                    onOk={handleOk4}
                                                    onCancel={handleCancel4}
                                                >
                                                    <MeetingPage
                                                        meeting={pastMeeting2}
                                                    ></MeetingPage>
                                                </Modal>
                                            </a>
                                        </p>
                                        <p className="text-left">
                                            <b> Goal: </b>{' '}
                                            {pastMeeting2.getGoal()}{' '}
                                        </p>
                                        <p className="text-left">
                                            <b> participants: </b>{' '}
                                            {pastMeeting2.getParticipants()}{' '}
                                        </p>
                                        <p className="text-left underline">
                                            <a
                                                type="primary"
                                                onClick={showModal5}
                                            >
                                                View Protocol
                                            </a>
                                            <Modal
                                                title={
                                                    'Protocoll for ' +
                                                    pastMeeting2.getMeetingTitle()
                                                }
                                                visible={isModalVisible5}
                                                onOk={handleOk5}
                                                onCancel={handleCancel5}
                                            >
                                                <ProtocollPage
                                                    meeting={pastMeeting2}
                                                    protocoll={pastMeeting2.getProtocoll()}
                                                ></ProtocollPage>
                                            </Modal>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="basis-3/5 flex flex-col full-height text-center scroll-smooth p-4 overflow-auto mb-8">
                                <div className="basis-full full-height">
                                    <div id="meetingsAhead">
                                        <div className="text-center">
                                            {' '}
                                            <button
                                                onClick={refresh}
                                                className="bg-slate-400 hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-2 border-slate-400 hover:border-slate-400"
                                            >
                                                {' '}
                                                refresh{' '}
                                            </button>
                                        </div>
                                        {object.map((meeting: Meeting) => (
                                            <ul>
                                                <li
                                                    value={meeting.getMeetingTitle()}
                                                >
                                                    <div className="border-solid border-2 border-slate-400 ml-2 mr-2 mt-2 mb-2 bg-blue-200">
                                                        <a
                                                            className="text-xl"
                                                            type="primary"
                                                            onClick={showModal6}
                                                        >
                                                            {meeting.getScheduledTime() +
                                                                ' - ' +
                                                                meeting.getMeetingTitle()}
                                                        </a>
                                                        <Modal
                                                            title={
                                                                meeting.getScheduledTime() +
                                                                ' - ' +
                                                                meeting.getMeetingTitle()
                                                            }
                                                            visible={
                                                                isModalVisible6
                                                            }
                                                            onOk={handleOk6}
                                                            onCancel={
                                                                handleCancel6
                                                            }
                                                        >
                                                            <MeetingPage
                                                                meeting={
                                                                    meeting
                                                                }
                                                            ></MeetingPage>
                                                        </Modal>
                                                        <p>
                                                            <b>goals:</b>{' '}
                                                            {meeting.getGoal()}
                                                        </p>
                                                        <p>
                                                            <b>participants:</b>{' '}
                                                            {meeting.getParticipants()}
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="basis-1/5 flex flex-col full-height text-center p-8 border-solid border-2 border-slate-400 ml-2 mr-2 mt-2 mb-2 bg-orange-200">
                                {/* Überschrift */}
                                <div className="flex flex-col basis-7/12 uppercase">
                                    <div className="basis-2/6 text-xl">
                                        <p> to-do for tomorrow</p>
                                    </div>
                                    <div className="basis-4/6">
                                        <p className="text-left">{todoList}</p>
                                    </div>
                                </div>
                                {/* To Dos */}
                            </div>
                        </div>
                        <div className="flex-none flex justify-center">
                            <button
                                onClick={showModal3}
                                className="bg-slate-400 hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-2 border-slate-400 hover:border-slate-400"
                            >
                                new meeting
                            </button>
                            <Modal
                                title="Create New Meeting"
                                visible={isModalVisible3}
                                onOk={handleOk3}
                                onCancel={handleCancel3}
                            >
                                <NewMeetingPage
                                    onCreateMeeting={(meeting: Meeting) => {
                                        arrayForMeetings.push(meeting)
                                        setObject(arrayForMeetings)
                                    }}
                                ></NewMeetingPage>
                            </Modal>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default IndexPage
