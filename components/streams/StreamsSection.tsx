import React from 'react'
import SectionHeader from '../common/SectionHeader'
import axios from 'axios'
import StreamSwiper from './StreamsSwiper'
import { FaTwitch } from 'react-icons/fa'
interface Stream {
  user_login: string
  game_name: string
  type: 'live'
  thumbnail_url: string
  user_name: string
}
const StreamsSection = () => {
  const [streams, setStreams] = React.useState<Stream[]>([])
  const [fetched, setFetched] = React.useState(false)
  const getStreams = async () => {
    const res = await axios.get(
      'https://api.twitch.tv/helix/streams?user_login=datturaz&user_login=trickyyi&user_login=ratedv1&user_login=sann_lol&user_login=deceiving_lol&user_login=lunaticadc&user_login=cipher&user_login=snowar12&user_login=molto_lol&user_login=elohelldoctor&user_login=jskillz_lol&user_login=raadsand&user_login=depyroval&user_login=tunavalo&user_login=kugio&user_login=ikllr&user_login=ttxtr&user_login=zyadvalo&user_login=bam_valo&user_login=valorant_arabia&user_login=alvar&user_login=maged_lol&user_login=dizzy&user_login=valorant&user_login=faker&user_login=loltyler1&user_login=shroud&user_login=imls&user_login=lolarabia&user_login=itsrawkus&user_login=stylishnoob4&user_login=lol_ambition&user_login=ratirl&user_login=summit1g&user_login=zizaran&user_login=amar&user_login=euriece&user_login=korpick2&user_login=blackdesertgame&user_login=doublelift&user_thebausffs',
      {
        headers: {
          Authorization: 'Bearer 8amna2yz7pqiji305761mtlh469dzq',
          'Client-Id': 'xu0a7546ukac0i35ofn6s476mrwrgq'
        }
      }
    )
    const data = await res.data.data
    if (data) {
      setFetched(true)
    }
    setStreams(data)
  }
  React.useEffect(() => {
    getStreams()
  }, [])

  return (
    <section
      style={{ direction: 'rtl' }}
      className="max-w-[1400px] mx-auto mt-16 px-4"
    >
      <SectionHeader title="بث مباشر">
        <FaTwitch size="20" className="mr-1" />
      </SectionHeader>
      <StreamSwiper streams={streams}></StreamSwiper>
    </section>
  )
}

export default StreamsSection
