import Link from 'next/link'
import Layout from '../components/Layout'

const newMeetingPage = () => {
    // here you can add objects
    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <div className="flex flex-col flex-grow p-6 bg-blue-200">
                <div className="text-center font-bold text-xl">
                    {' '}
                    NEW MEETING
                </div>
                <div className="flex flex-row ">
                    <div className="p-5 flex flex-col basis-1/2">
                        <div className="basis-1/3">
                            {' '}
                            <p className="uppercase">title:</p>
                            <textarea
                                cols="50"
                                rows="1"
                                className="border border-2 border-slate-300 resize-none"
                                placeholder="title..."
                            ></textarea>
                        </div>
                        <div className="basis-1/3">
                            <p className="uppercase">date:</p>
                            <input
                                size="100"
                                type="date"
                                className="border border-2 border-slate-300"
                                placeholder="date..."
                            ></input>
                        </div>
                        <div className="basis-1/3">
                            <p className="uppercase">goal:</p>
                            <textarea
                                cols="50"
                                rows="1"
                                className="border border-2 border-slate-300 resize-none"
                                placeholder="goal..."
                            ></textarea>
                        </div>
                    </div>
                    <div className="p-5 flex flex-col basis-1/2 align-center">
                        <div className="basis-1/3">
                            <p className="uppercase">agenda:</p>
                            <textarea
                                cols="50"
                                rows="8"
                                className="border border-2 border-slate-300 resize-none"
                                placeholder="agenda..."
                            ></textarea>
                        </div>
                        <div className="basis-1/3">
                            <p className="uppercase">participants:</p>
                            <textarea
                                cols="50"
                                rows="5"
                                className="border border-2 border-slate-300 resize-none"
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
                <div className="flex justify-center background-color:rgba(199,230,239,255)">
                    <button className="float-right bg-slate-600 hover:bg-white text-white font-semibold hover:text-black py-2 px-6 hover:border-slate-600">
                        create
                    </button>
                </div>
            </div>
        </Layout>
    )
}

export default newMeetingPage
