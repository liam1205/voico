import Link from 'next/link'
import Layout from '../components/Layout'

const meetingPage2 = () => {
    // here you can add objects
    var dateOfMeeting = new Date().toDateString()
    var meetingName = String('Weekly Stand-Up Protocoll')
    var goal = String('this is a goal')
    var participants = Array(String('Liam'), String('Tobi'))
    var moderator = String('this is a moderator')
    var schudeledTime = new Date().toDateString()
    var actualTime = new Date().toDateString()
    var agenda = Array(String('1.'), String('2.'))
    var openIssues = Array(String('1'), String('2'))
    var decisions = Array(String('1'), String('2'))
    var openTopics = Array(String('1'), String('2'))
    var todo = Array(String('1'), String('2'))

    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <div className="flex flex-col flex-grow">
                <div className="p-4 full-height flex flex-col justify-center border-b-2 border-slate-400 bg-blue-200">
                    <div className="uppercase full-height basis-1/2 text-center justify-center">
                        {' '}
                        {dateOfMeeting} &nbsp; - &nbsp;
                        {meetingName}{' '}
                    </div>
                    <div className=" basis-1/2 flex flex-row">
                        <div className="basis-1/2">
                            <div>
                                {' '}
                                <a className="font-bold uppercase">
                                    goals:
                                </a>{' '}
                                &nbsp; {goal}{' '}
                            </div>
                            <div>
                                {' '}
                                <a className="font-bold uppercase">
                                    participants:
                                </a>
                                &nbsp; {participants}{' '}
                            </div>
                            <div>
                                {' '}
                                <a className="font-bold uppercase">
                                    {' '}
                                    moderator:
                                </a>{' '}
                                &nbsp; {moderator}{' '}
                            </div>
                            <div>
                                <a className="font-bold uppercase">
                                    {' '}
                                    scheduled time:
                                </a>
                                &nbsp; {schudeledTime}{' '}
                            </div>
                            <div>
                                <a className="font-bold uppercase">
                                    {' '}
                                    actual time:
                                </a>
                                &nbsp; {actualTime}
                            </div>
                        </div>
                        <div className="basis-1/2">
                            <p className="font-bold  uppercase">agenda:</p>
                            {agenda}{' '}
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
                        <p className="font-bold underline uppercase">
                            decisions:
                        </p>
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
                    <div className="basis-1/5">
                        <a href="/">
                            <button className="float-left bg-slate-400 hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-2 border-slate-400 hover:border-slate-400">
                                Go to main page
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default meetingPage2
