import Link from 'next/link'
import Layout from '../components/Layout'

const newMeetingPage = () => {
    // here you can add objects
    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <body>
                <div className="p-4 bg-sky-200">
                    <div className="flex flex-row bg-sky-200">
                        <div className="flex flex-col basis-1/2">
                            <div className="basis-1/3">
                                {' '}
                                <p className="uppercase">title:</p>
                                <textarea
                                    className="border border-2 border-slate-400"
                                    placeholder="title..."
                                ></textarea>
                            </div>
                            <div className="basis-1/3">
                                <p className="uppercase">date:</p>
                                <input
                                    type="date"
                                    className="border border-2 border-slate-400"
                                    placeholder="date..."
                                ></input>
                            </div>
                            <div className="basis-1/3">
                                <p className="uppercase">goal:</p>
                                <textarea
                                    className="border border-2 border-slate-400"
                                    placeholder="goal..."
                                ></textarea>
                            </div>
                        </div>
                        <div className="flex flex-col basis-1/2">
                            <div className="basis-1/3">
                                <p className="uppercase">agenda:</p>
                                <textarea
                                    className="border border-2 border-slate-400"
                                    placeholder="agenda..."
                                ></textarea>
                            </div>
                            <div className="basis-1/3">
                                <p className="uppercase">participants:</p>
                                <textarea
                                    className="border border-2 border-slate-400"
                                    placeholder="participants..."
                                ></textarea>
                            </div>
                            <div className="basis-1/3">
                                <p className="uppercase underline">
                                    {' '}
                                    <Link href=""> attach files</Link>{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center bg-sky-200">
                        <button className="float-right bg-slate-400 hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-2 border-slate-400 hover:border-slate-400">
                            create
                        </button>
                    </div>
                </div>
            </body>
        </Layout>
    )
}

export default newMeetingPage
