import React from 'react'
import Nav from '../components/common/nav/nav'
import Head_nav from '../components/common/head_nav/head_nav'
import Swiper from '../components/common/swiper/swiper'
import Recommend from '../components/container/recommend/recommend'
import Foot from '../components/common/foot/foot'
import ScrollTop from '../components/common/scrolltop/scrolltop'
import Hidewindow from '../components/common/hidewindow/hidewindow'
import Modal from '../components/common/modal/modal'
import { connect } from 'umi'
import Cookies from 'js-cookie'

class Index extends React.Component {
    componentDidMount() {
        let uid = Cookies.get('uid')
        // if (uid && !this.props.userloginfo.userlogstatus) {
        //     this.props.dispatch({
        //         type: "recommend/AsyncgetDailyRecommendMusic"
        //     })
        //     this.props.dispatch({
        //         type: 'userinfo/dogetuserdetail',
        //         payload: parseInt(uid)
        //     })
        // }
    }
    render() {
        const { dispatch, userloginfo } = this.props
        const {clickindex} = this.props.music
        const { IndexSwiper, dailyrecommendmusic, HotJoinedSinger, HotZhubo, NewestAblum, toplisthot, toplistnewest, toplisthotorigin } = this.props.music
        return <div>
            <Nav clickindex={clickindex} dispatch={dispatch} logstatus = {userloginfo.userlogstatus} avatarurl={userloginfo.userinfo.avatarUrl} />
            <Head_nav clickIndex={0} />
            <Swiper IndexSwiper={IndexSwiper} />
            <Recommend userloginfo={userloginfo} toplisthot={toplisthot} toplistnewest={toplistnewest} toplisthotorigin={toplisthotorigin} HotJoinedSinger={HotJoinedSinger} NewestAblum={NewestAblum} HotZhubo={HotZhubo} dailyRecommendMusic={dailyrecommendmusic} dispatch={dispatch} />
            <Foot />
            <ScrollTop />
            <Hidewindow />
            <Modal dispatch={dispatch} />
        </div>
    }
}
function mapStateToProps(state) {

    return { music: state.recommend, userloginfo: state.userinfo }
}
export default connect(mapStateToProps)(Index)