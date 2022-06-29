import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => {
    var today = new Date().toDateString()

    var meetings = Array(
        String('past meeting 1'),
        String('past meeting 2'),
        String('past meeting 3')
    )
    var todos = Array(String('1'), String('2'), String('3'))

    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <div className="flex flex-col flex-grow justify-center">
                <div className="flex-none">
                    <div className="text-center flex-none text-xl">
                        {' '}
                        <a className="uppercase"> today's meetings</a>
                    </div>

                    <div className="text-center"> {today} </div>
                </div>

                <div className="grow ">
                    <div className="flex h-4/5 flex-row">
                        <div className="basis-1/3 flex flex-col overflow-y-auto text-center p-8 border-solid border-2 border-slate-400 ml-2 mr-2 mt-2 mb-2">
                            {/* Überschrift */}
                            <div className="basis-1/12 text-xl">
                                <a className="uppercase"> past meetings</a>
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
                                hier sollen mal die ganze vergangenen Meetings
                                hin, Anzahl soll egal sein
                            </div>
                        </div>
                        <div className="basis-1/3 flex flex-col full-height basis-2/4 text-center scroll-smooth p-4">
                            <div className="basis-full full-height overflow-auto">
                                <div className="border-solid border-2 border-slate-400 ml-2 mr-2 mt-2 mb-2 bg-sky-200">
                                    {/* hier sollen mal die ganzen Meetings des aktuellen Tages hin, Anzahl soll egal sein */}
                                    hier sollen mal die ganzen Meetings des
                                    aktuellen Tages hin, Anzahl soll egal sein
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/3 flex flex-col full-height basis-1/4 text-center p-8 border-solid border-2 border-slate-400 ml-2 mr-2 mt-2 mb-2 bg-orange-200">
                            {/* Überschrift */}
                            <div className="basis-7/12 text-xl">
                                <a className="uppercase"> to-do for tomorrow</a>
                            </div>
                            {/* To Dos */}
                            <div className="basis-4/12">
                                {/* hier sollen mal die ganze vergangenen Meetings hin, Anzahl soll egal sein */}
                                <p>
                                    hier sollen mal die ganze vergangenen
                                    Meetings hin, Anzahl soll egal sein
                                </p>

                                {/* neue Präsentation */}
                                <Link href=""> . . . </Link>
                                <div>
                                    <a className="uppercase">
                                        create presentation for client
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-none flex justify-center">
                        <a href="/newMeeting">
                            <button className="bg-slate-400 hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-2 border-slate-400 hover:border-slate-400">
                                new meeting
                            </button>{' '}
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage
