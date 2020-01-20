import React, { useState, useEffect } from "react"
import Contestants from 'components/Bachelor/Contestants'
import ContestantTable from 'components/Bachelor/ContestantTable'
import MaxWidth from 'components/_ui/MaxWidth/MaxWidth'
import './Bachelor.scss'
// import contestantsData from 'components/Bachelor/data/parsedContestants.csv'

// import contestantsDataA from 'components/Bachelor/data/bachelor-cosmo.csv'
// import contestantsDataB from 'components/Bachelor/data/bachelor-usmag.csv'
// import contestantsDataC from 'components/Bachelor/data/bachelor-abc.csv'

const Bachelor = () => {
    // const [parsedContestants, setParsedContestants] = useState('')

    // useEffect(() => {
    //     // You need to restrict it at some point
    //     // This is just dummy code and should be replaced by actual
    //     if (!parsedContestants) {
    //         setParsedContestants(contestantsData);
    //     }
    // }, []);

    return (
        <MaxWidth size="l" className="Bachelor">
            {/* <MaxWidth size="l" className="Bachelor__header">
                <h1 className="Bachelor__header__title">
                    The Bachelor
                </h1>
                <h3 className="Bachelor__header__description">
                    Welcome Bachelor Nation. Following along with the new contestants is hard—this guide is here to help! 🌹
                </h3>
            </MaxWidth> */}

            {/* <MaxWidth size="l" className="Bachelor__contestants">
                <Contestants parsedContestants={parsedContestants} />
            </MaxWidth> */}

            <MaxWidth size="l" className="Bachelor__table">
                <ContestantTable />
            </MaxWidth>

            {/* <MaxWidth size="l" className="Bachelor__inspo">
                <h6>
                    <Link doOpenInNewTab to="https://robhasawebsite.com/shows/reality-tv-rhapups/bachelor-bachelorette-paradise/bachelor-2/">
                        Inspired by the Bachelor RHAP UP podcast 🌹
                    </Link>
                </h6>
            </MaxWidth>

            <MaxWidth size="xl" className="Bachelor__back-button__container">
                <Link to="/" isButton className="Bachelor__back-button">
                    ← Back to Marguerite.io
                </Link>
            </MaxWidth>

            <MaxWidth size="xl" className="Bachelor__inspo">
                <Link doOpenInNewTab to="https://github.com/margueriteroth/rosie/tree/master/src/components/Bachelor" className="Bachelor__code">
                    Bachelor code
                </Link>
            </MaxWidth>

            <MaxWidth size="xl" className="Bachelor__attributions">
                <h5 className="Bachelor__attributions__title">
                    Contestant image, name, age, occupation, and location information from:
                </h5>
                <p>
                    Us Magazine: <Link to="https://www.usmagazine.com/entertainment/pictures/the-bachelor-season-24-cast-meet-peter-webers-contestants">
                        https://www.usmagazine.com/entertainment/pictures/the-bachelor-season-24-cast-meet-peter-webers-contestants
                    </Link>
                </p>
                <p>
                    Cosmopolitan: <Link to="https://www.cosmopolitan.com/entertainment/tv/g29087999/peter-weber-bachelor-contestants-season-24-2020/">
                        https://www.cosmopolitan.com/entertainment/tv/g29087999/peter-weber-bachelor-contestants-season-24-2020/
                    </Link>
                </p>
                <p>
                    ABC: <Link to="https://abc.com/shows/the-bachelor">
                        https://abc.com/shows/the-bachelor
                    </Link>
                </p>
            </MaxWidth> */}
        </MaxWidth>
    )
}

export default Bachelor;








// const getParsedContestants = async () => {
    //     const contestantsData = await Promise.all(
    //         contestantsDataA.map(async (d, i) => {
    //             let location = d.location
    //             let url = api_url
    //                 + '?'
    //                 + 'api_key=' + geoapikey
    //                 + '&q=' + encodeURIComponent(location)

    //             const res = await fetch(url)
    //             const json = await res.json()

    //             let name = contestantsDataB[i].name

    //             //Canada!
    //             let lat = name !== "Mykenna" ? json.results[0].location.lat : 48.993867
    //             let lng = name !== "Mykenna" ? json.results[0].location.lng : -122.672326

    //             return {
    //                 ...d,
    //                 lat,
    //                 lng,
    //                 name,
    //                 image: contestantsDataB[i]["image-src"]
    //             }
    //         })
    //     )

    //     setParsedContestants(contestantsData);
    // };



// useEffect(() => {
//     // You need to restrict it at some point
//     // This is just dummy code and should be replaced by actual
//     if (!parsedContestants) {
//         getParsedContestants();
//     }
// }, []);

// const getParsedContestants = () => {
//     const contestantsData = contestantsDataA.map((d, i) => {
//         let name = contestantsDataB[i].name
//         let image = contestantsDataB[i]["image-src"]
//         let lat = d.lat
//         let lng = d.lng
//         let bio = contestantsDataC[i].bio
//         let notes = contestantsDataC[i].notes

//         return {
//             ...d,
//             lat,
//             lng,
//             name,
//             image,
//             bio,
//             notes
//         }
//     })

//     setParsedContestants(contestantsData);
// };