import Link from 'next/link'
import Layout from '../components/Layout'
import * as fs from 'fs'

const protocollPage = (meeting, participants, protocoll) => {
    // here you can add objects
    meeting = String('this is a meeting')
    participants = Array(String('participant 1'), String('participant 2'))
    var protocollText = protocoll.zeichen

    /* functions */
    /* function for page title*/
    function title() {
        return 'protocoll for ' + meeting
    }
    /* function for listing an array*/
    function list(array) {
        var string = String('')
        for (let index = 0; index < array.length; index++) {
            const element = array[index]
            if (index < array.length - 1) {
                string += array[index]
                string += ', '
            } else {
                string += array[index]
            }
        }
        return string
    }

    return (
        <Layout title={title()}>
            <div className="flex flex-col flex-grow">
                {/* Information */}
                <div className="basis-2/12 flex flex-col">
                    <div className="basis-1/2 text-center text-xl">
                        <p className="uppercase font-bold">
                            protocoll for&nbsp;{meeting}
                        </p>
                    </div>
                    <div>
                        <p className="basis-1/2 uppercase">
                            <a className="font-bold">participants:&nbsp;</a>
                            {list(participants)}
                        </p>
                    </div>
                </div>
                {/* Body */}
                <div className="basis-2/12">{protocollText}</div>
            </div>
        </Layout>
    )
}

export default protocollPage
